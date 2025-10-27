# Universal Links - App-Konfiguration für Rowhni

## Prompt für die App-Implementierung

Implementiere Universal Links in der Rowhni iOS App, damit Nutzer über Links Freunde einladen und Gruppen beitreten können.

---

## 1. Xcode Projekt-Konfiguration

### Associated Domains aktivieren

**Schritte:**
1. Öffne das Xcode-Projekt `Rowhni.xcodeproj`
2. Wähle das Target **"Rowhni"**
3. Gehe zu **Signing & Capabilities**
4. Klicke auf **"+ Capability"**
5. Füge **"Associated Domains"** hinzu
6. Füge folgende Domain hinzu:
   ```
   applinks:rowhni.com
   ```

### Entitlements prüfen

Die Datei `Rowhni.entitlements` muss enthalten:

```xml
<key>com.apple.developer.associated-domains</key>
<array>
    <string>applinks:rowhni.com</string>
</array>
```

**Status:** ✅ Bereits konfiguriert in `Rowhni.entitlements`

---

## 2. AppDelegate oder SceneDelegate erweitern

### Für Apps mit SceneDelegate (iOS 13+)

**In `SceneDelegate.swift`:**

```swift
func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
    guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
          let incomingURL = userActivity.webpageURL else {
        return
    }

    handleUniversalLink(url: incomingURL)
}

func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url else { return }
    handleUniversalLink(url: url)
}
```

### Für Apps ohne SceneDelegate (iOS 12 und älter)

**In `AppDelegate.swift`:**

```swift
func application(_ application: UIApplication,
                 continue userActivity: NSUserActivity,
                 restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {

    guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
          let incomingURL = userActivity.webpageURL else {
        return false
    }

    handleUniversalLink(url: incomingURL)
    return true
}
```

---

## 3. URL Handling Logik implementieren

### Zentrale URL-Handling Funktion

```swift
func handleUniversalLink(url: URL) {
    guard let components = URLComponents(url: url, resolvingAgainstBaseURL: true),
          let path = components.path as String? else {
        print("❌ Ungültige URL: \(url)")
        return
    }

    // Query Parameter extrahieren
    let queryItems = components.queryItems ?? []

    switch path {
    case "/addfriend":
        handleAddFriendLink(queryItems: queryItems)

    case "/joingroup":
        handleJoinGroupLink(queryItems: queryItems)

    default:
        print("⚠️ Unbekannter Path: \(path)")
    }
}
```

---

## 4. Freunde-Einladung implementieren

### `/addfriend?code=XXXX` Handler

```swift
func handleAddFriendLink(queryItems: [URLQueryItem]) {
    guard let code = queryItems.first(where: { $0.name == "code" })?.value else {
        print("❌ Kein Invite-Code gefunden")
        showError(message: "Ungültiger Einladungslink")
        return
    }

    print("✅ Freunde-Einladung mit Code: \(code)")

    // 1. Prüfe, ob Nutzer eingeloggt ist
    guard isUserLoggedIn() else {
        // Speichere Code für später
        UserDefaults.standard.set(code, forKey: "pendingFriendInviteCode")
        // Zeige Login-Screen
        showLoginScreen()
        return
    }

    // 2. Lade Freund-Daten aus CloudKit
    fetchFriendInvite(code: code) { result in
        switch result {
        case .success(let invite):
            // Zeige Freundesanfrage-Screen
            self.showFriendRequestScreen(invite: invite)

        case .failure(let error):
            print("❌ Fehler beim Laden der Einladung: \(error)")
            self.showError(message: "Einladung konnte nicht geladen werden")
        }
    }
}
```

### CloudKit Freund-Einladung laden

```swift
func fetchFriendInvite(code: String, completion: @escaping (Result<FriendInvite, Error>) -> Void) {
    let container = CKContainer.default()
    let database = container.publicCloudDatabase

    let predicate = NSPredicate(format: "inviteCode == %@", code)
    let query = CKQuery(recordType: "CD_FriendInvite", predicate: predicate)

    database.perform(query, inZoneWith: nil) { records, error in
        if let error = error {
            completion(.failure(error))
            return
        }

        guard let record = records?.first else {
            completion(.failure(NSError(domain: "FriendInvite", code: 404, userInfo: [
                NSLocalizedDescriptionKey: "Einladung nicht gefunden oder abgelaufen"
            ])))
            return
        }

        // Parse Record zu FriendInvite Model
        let invite = FriendInvite(from: record)
        completion(.success(invite))
    }
}
```

---

## 5. Gruppen-Beitritt implementieren

### `/joingroup?code=XXXX` Handler

```swift
func handleJoinGroupLink(queryItems: [URLQueryItem]) {
    guard let code = queryItems.first(where: { $0.name == "code" })?.value else {
        print("❌ Kein Gruppen-Code gefunden")
        showError(message: "Ungültiger Gruppen-Link")
        return
    }

    print("✅ Gruppen-Beitritt mit Code: \(code)")

    // 1. Prüfe, ob Nutzer eingeloggt ist
    guard isUserLoggedIn() else {
        UserDefaults.standard.set(code, forKey: "pendingGroupJoinCode")
        showLoginScreen()
        return
    }

    // 2. Lade Gruppen-Daten aus CloudKit
    fetchGroupInvite(code: code) { result in
        switch result {
        case .success(let group):
            // Zeige Gruppen-Beitritts-Screen
            self.showGroupJoinScreen(group: group)

        case .failure(let error):
            print("❌ Fehler beim Laden der Gruppe: \(error)")
            self.showError(message: "Gruppe konnte nicht geladen werden")
        }
    }
}
```

### CloudKit Gruppen-Einladung laden

```swift
func fetchGroupInvite(code: String, completion: @escaping (Result<Group, Error>) -> Void) {
    let container = CKContainer.default()
    let database = container.publicCloudDatabase

    let predicate = NSPredicate(format: "inviteCode == %@", code)
    let query = CKQuery(recordType: "CD_GroupInvite", predicate: predicate)

    database.perform(query, inZoneWith: nil) { records, error in
        if let error = error {
            completion(.failure(error))
            return
        }

        guard let record = records?.first else {
            completion(.failure(NSError(domain: "GroupInvite", code: 404, userInfo: [
                NSLocalizedDescriptionKey: "Gruppe nicht gefunden"
            ])))
            return
        }

        // Lade die eigentliche Gruppe
        guard let groupReference = record["group"] as? CKRecord.Reference else {
            completion(.failure(NSError(domain: "GroupInvite", code: 400, userInfo: [
                NSLocalizedDescriptionKey: "Ungültige Gruppenreferenz"
            ])))
            return
        }

        database.fetch(withRecordID: groupReference.recordID) { groupRecord, error in
            if let error = error {
                completion(.failure(error))
                return
            }

            guard let groupRecord = groupRecord else {
                completion(.failure(NSError(domain: "Group", code: 404)))
                return
            }

            let group = Group(from: groupRecord)
            completion(.success(group))
        }
    }
}
```

---

## 6. UI Screens erstellen

### FriendRequestScreen (SwiftUI)

```swift
struct FriendRequestScreen: View {
    let invite: FriendInvite
    @State private var isAccepting = false
    @Environment(\.dismiss) var dismiss

    var body: some View {
        VStack(spacing: 20) {
            // Profilbild
            AsyncImage(url: invite.senderProfileImageURL) { image in
                image.resizable()
            } placeholder: {
                Circle().fill(Color.gray)
            }
            .frame(width: 100, height: 100)
            .clipShape(Circle())

            // Name
            Text(invite.senderName)
                .font(.title)
                .bold()

            // Nachricht
            Text("möchte dich als Freund hinzufügen")
                .foregroundColor(.secondary)

            Spacer()

            // Buttons
            Button(action: acceptFriendRequest) {
                if isAccepting {
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: .white))
                } else {
                    Text("Freundschaftsanfrage annehmen")
                }
            }
            .buttonStyle(.borderedProminent)
            .disabled(isAccepting)

            Button("Ablehnen") {
                dismiss()
            }
            .buttonStyle(.bordered)
        }
        .padding()
    }

    func acceptFriendRequest() {
        isAccepting = true

        // CloudKit: Freundschaft erstellen
        createFriendship(inviteCode: invite.code) { result in
            isAccepting = false

            switch result {
            case .success:
                // Zeige Success-Message
                showSuccessMessage("Ihr seid jetzt Freunde! 🎉")
                dismiss()

            case .failure(let error):
                // Zeige Error
                showError(message: "Fehler: \(error.localizedDescription)")
            }
        }
    }
}
```

### GroupJoinScreen (SwiftUI)

```swift
struct GroupJoinScreen: View {
    let group: Group
    @State private var isJoining = false
    @Environment(\.dismiss) var dismiss

    var body: some View {
        VStack(spacing: 20) {
            // Gruppen-Icon/Bild
            Image(systemName: "person.3.fill")
                .font(.system(size: 80))
                .foregroundColor(.blue)

            // Gruppenname
            Text(group.name)
                .font(.title)
                .bold()

            // Mitgliederanzahl
            Text("\(group.memberCount) Mitglieder")
                .foregroundColor(.secondary)

            // Beschreibung
            if let description = group.description {
                Text(description)
                    .multilineTextAlignment(.center)
                    .padding()
            }

            Spacer()

            // Beitreten Button
            Button(action: joinGroup) {
                if isJoining {
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: .white))
                } else {
                    Text("Gruppe beitreten")
                }
            }
            .buttonStyle(.borderedProminent)
            .disabled(isJoining)

            Button("Abbrechen") {
                dismiss()
            }
            .buttonStyle(.bordered)
        }
        .padding()
    }

    func joinGroup() {
        isJoining = true

        // CloudKit: Gruppenmitgliedschaft erstellen
        addUserToGroup(groupID: group.id) { result in
            isJoining = false

            switch result {
            case .success:
                showSuccessMessage("Du bist der Gruppe beigetreten! 🎉")
                dismiss()

            case .failure(let error):
                showError(message: "Fehler: \(error.localizedDescription)")
            }
        }
    }
}
```

---

## 7. Pending Invites nach Login verarbeiten

### Nach erfolgreichem Login prüfen

```swift
func handlePostLoginActions() {
    // Prüfe auf pending Friend Invite
    if let pendingFriendCode = UserDefaults.standard.string(forKey: "pendingFriendInviteCode") {
        UserDefaults.standard.removeObject(forKey: "pendingFriendInviteCode")

        // Verarbeite Einladung
        fetchFriendInvite(code: pendingFriendCode) { result in
            if case .success(let invite) = result {
                self.showFriendRequestScreen(invite: invite)
            }
        }
    }

    // Prüfe auf pending Group Join
    if let pendingGroupCode = UserDefaults.standard.string(forKey: "pendingGroupJoinCode") {
        UserDefaults.standard.removeObject(forKey: "pendingGroupJoinCode")

        // Verarbeite Gruppen-Beitritt
        fetchGroupInvite(code: pendingGroupCode) { result in
            if case .success(let group) = result {
                self.showGroupJoinScreen(group: group)
            }
        }
    }
}
```

---

## 8. CloudKit Record Types prüfen

### Erforderliche Record Types in CloudKit Console

Stelle sicher, dass folgende Record Types existieren:

#### `CD_FriendInvite`
**Fields:**
- `inviteCode` (String, Indexed)
- `sender` (Reference → CD_User)
- `createdAt` (Date/Time)
- `expiresAt` (Date/Time)
- `status` (String) - "pending", "accepted", "expired"

#### `CD_Friendship`
**Fields:**
- `user1` (Reference → CD_User)
- `user2` (Reference → CD_User)
- `createdAt` (Date/Time)
- `status` (String) - "active", "blocked"

#### `CD_GroupInvite`
**Fields:**
- `inviteCode` (String, Indexed)
- `group` (Reference → CD_Group)
- `createdBy` (Reference → CD_User)
- `createdAt` (Date/Time)
- `expiresAt` (Date/Time)
- `maxUses` (Int64) - Optional, null = unbegrenzt

#### `CD_GroupMembership`
**Fields:**
- `group` (Reference → CD_Group)
- `user` (Reference → CD_User)
- `joinedAt` (Date/Time)
- `role` (String) - "member", "admin", "owner"

### CloudKit Security (Public Database Permissions)

**CD_FriendInvite:**
- World Readable: ✅ Yes
- World Writable: ❌ No (nur Creator kann schreiben)

**CD_GroupInvite:**
- World Readable: ✅ Yes
- World Writable: ❌ No

---

## 9. Link-Generierung in der App

### Freunde-Einladungslink erstellen

```swift
func generateFriendInviteLink() async throws -> URL {
    // 1. Generiere eindeutigen Code
    let inviteCode = UUID().uuidString.prefix(8).uppercased()

    // 2. Erstelle CloudKit Record
    let record = CKRecord(recordType: "CD_FriendInvite")
    record["inviteCode"] = inviteCode as CKRecordValue
    record["sender"] = CKRecord.Reference(recordID: currentUser.recordID, action: .none)
    record["createdAt"] = Date()
    record["expiresAt"] = Calendar.current.date(byAdding: .day, value: 7, to: Date())
    record["status"] = "pending"

    let database = CKContainer.default().publicCloudDatabase
    _ = try await database.save(record)

    // 3. Erstelle URL
    var components = URLComponents()
    components.scheme = "https"
    components.host = "rowhni.com"
    components.path = "/addfriend"
    components.queryItems = [URLQueryItem(name: "code", value: inviteCode)]

    guard let url = components.url else {
        throw NSError(domain: "URLGeneration", code: 400)
    }

    return url
}

// Usage:
Button("Freund einladen") {
    Task {
        do {
            let inviteURL = try await generateFriendInviteLink()

            // Teilen via Share Sheet
            let activityVC = UIActivityViewController(
                activityItems: [inviteURL],
                applicationActivities: nil
            )
            present(activityVC, animated: true)

        } catch {
            showError(message: "Fehler beim Erstellen des Einladungslinks")
        }
    }
}
```

### Gruppen-Einladungslink erstellen

```swift
func generateGroupInviteLink(for group: Group) async throws -> URL {
    // 1. Prüfe ob bereits ein aktiver Invite existiert
    let existingInvite = try? await fetchActiveGroupInvite(for: group)

    let inviteCode: String
    if let existing = existingInvite {
        inviteCode = existing.code
    } else {
        // 2. Erstelle neuen Invite
        inviteCode = UUID().uuidString.prefix(8).uppercased()

        let record = CKRecord(recordType: "CD_GroupInvite")
        record["inviteCode"] = inviteCode as CKRecordValue
        record["group"] = CKRecord.Reference(recordID: group.recordID, action: .none)
        record["createdBy"] = CKRecord.Reference(recordID: currentUser.recordID, action: .none)
        record["createdAt"] = Date()

        let database = CKContainer.default().publicCloudDatabase
        _ = try await database.save(record)
    }

    // 3. Erstelle URL
    var components = URLComponents()
    components.scheme = "https"
    components.host = "rowhni.com"
    components.path = "/joingroup"
    components.queryItems = [URLQueryItem(name: "code", value: inviteCode)]

    guard let url = components.url else {
        throw NSError(domain: "URLGeneration", code: 400)
    }

    return url
}
```

---

## 10. Testing Checklist

### Lokales Testing (vor Submit)

- [ ] Associated Domains in Xcode aktiviert
- [ ] Entitlements Datei enthält `applinks:rowhni.com`
- [ ] App auf echtem Gerät installiert (nicht Simulator!)
- [ ] Test-Link in Safari öffnen: `https://rowhni.com/addfriend?code=TEST123`
- [ ] Banner "Öffnen in Rowhni" erscheint
- [ ] App öffnet sich beim Tap auf Banner
- [ ] `handleUniversalLink()` wird aufgerufen (via Breakpoint prüfen)
- [ ] Query Parameter werden korrekt geparst

### CloudKit Testing

- [ ] Friend Invite Record wird erstellt
- [ ] Friend Invite wird via Code gefunden
- [ ] Freundschaft wird erstellt nach Accept
- [ ] Group Invite Record wird erstellt
- [ ] Group Membership wird erstellt nach Join
- [ ] Abgelaufene Invites werden korrekt behandelt
- [ ] Ungültige Codes zeigen Fehlermeldung

### Edge Cases

- [ ] User nicht eingeloggt → Login-Screen, dann Invite verarbeiten
- [ ] Invite bereits verwendet → Fehlermeldung
- [ ] Invite abgelaufen → Fehlermeldung
- [ ] Kein Internet → Fehlermeldung
- [ ] User ist bereits Freund → Info-Message
- [ ] User ist bereits in Gruppe → Info-Message

### Production Testing

- [ ] TestFlight Build mit Production CloudKit testen
- [ ] Universal Links funktionieren von verschiedenen Apps (WhatsApp, Mail, Notes)
- [ ] Universal Links funktionieren von QR-Codes
- [ ] Analytics/Logs zeigen erfolgreiche Link-Öffnungen

---

## 11. Debugging Tipps

### Console.app Logs prüfen

1. Gerät per USB verbinden
2. Console.app auf Mac öffnen
3. Gerät auswählen
4. Filter: `swcd` (Smart Web Content Daemon)

**Erwartete Logs:**
```
swcd: Successfully fetched apple-app-site-association for rowhni.com
swcd: Verified app association for com.yaman.rowhni
```

### Xcode Breakpoints setzen

```swift
func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
    print("🔗 Universal Link called!")  // <- Breakpoint hier
    guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
          let incomingURL = userActivity.webpageURL else {
        print("❌ No valid web URL")
        return
    }

    print("✅ URL: \(incomingURL)")  // <- Breakpoint hier
    handleUniversalLink(url: incomingURL)
}
```

### AASA Caching Issues

Falls Universal Links nicht funktionieren:
1. **Safari Cache löschen:** Einstellungen → Safari → Verlauf löschen
2. **iOS AASA Cache löschen:** Gerät neustarten
3. **App neu installieren:** Komplett löschen, dann neu installieren
4. **Wait Time:** Nach App-Install 5-10 Sekunden warten, bevor Link getestet wird

---

## 12. Info.plist Konfiguration (Optional)

### URL Schemes als Fallback

Falls Universal Links nicht greifen (sehr alte iOS Versionen), kannst du zusätzlich URL Schemes konfigurieren:

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>rowhni</string>
        </array>
        <key>CFBundleURLName</key>
        <string>com.yaman.rowhni</string>
    </dict>
</array>
```

**Dann funktioniert auch:**
```
rowhni://addfriend?code=ABC123
```

---

## 13. Zusammenfassung - Was muss implementiert werden?

### Minimal Implementation (MVP)

1. ✅ **Associated Domains** in Xcode aktivieren
2. ✅ **Entitlements** konfigurieren (`applinks:rowhni.com`)
3. **Scene/AppDelegate** erweitern mit Universal Link Handling
4. **URL Parser** implementieren (`handleUniversalLink()`)
5. **Friend Invite Handler** implementieren
6. **Group Join Handler** implementieren
7. **CloudKit Queries** für Invite/Group Lookup
8. **UI Screens** für Friend Request & Group Join
9. **Link Generation** in der App (Share Button)
10. **Testing** auf echtem Gerät

### Optional/Nice-to-Have

- Analytics für Link-Clicks
- Deep Link Parameter für spezifische Screens (z.B. `/addfriend?code=XXX&from=qrcode`)
- URL Scheme Fallback
- Offline-Handling mit lokalem Cache
- Rich Notifications bei neuem Invite

---

## Benötigte Dateien/Komponenten

### Models
- `FriendInvite.swift` - Model für Freundes-Einladungen
- `Group.swift` - Model für Gruppen
- `User.swift` - Model für User

### Views
- `FriendRequestScreen.swift` - UI für Freundschaftsanfrage
- `GroupJoinScreen.swift` - UI für Gruppen-Beitritt

### Services
- `UniversalLinkHandler.swift` - Zentrale URL-Handling Logik
- `CloudKitService.swift` - CloudKit Queries (Invite Lookup, etc.)
- `DeepLinkRouter.swift` - Navigation zu richtigen Screens

### Tests
- `UniversalLinkTests.swift` - Unit Tests für URL Parsing
- `CloudKitInviteTests.swift` - Tests für Invite/Group Lookup

---

## Website-Status

✅ **Komplett konfiguriert!**
- AASA Datei: `https://rowhni.com/.well-known/apple-app-site-association`
- Content-Type: `application/json` ✓
- Paths konfiguriert: `/addfriend*`, `/joingroup*` ✓

**Die App-Seite ist jetzt an der Reihe! 🚀**
