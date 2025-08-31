(function(){
  const supported = ["en","de","fr","tr","es","ar"]; 
  function getLang(){
    const url = new URL(window.location.href);
    const param = url.searchParams.get("lang");
    if(param && supported.includes(param)) return param;
    const nav = (navigator.language || "en").slice(0,2).toLowerCase();
    if(supported.includes(nav)) return nav; 
    return "en";
  }
  function applyLang(lang){
    document.querySelectorAll("[data-lang]").forEach(el=>{
      el.classList.toggle("hidden", el.getAttribute("data-lang")!==lang);
      if(el.getAttribute("data-dir")==="rtl"){
        el.classList.toggle("rtl", lang==="ar");
      }
    });
    const sel=document.getElementById("langSel");
    if(sel) sel.value=lang;
  }
  window.__setLang=function(l){
    const url = new URL(window.location.href);
    url.searchParams.set("lang", l);
    history.replaceState(null, "", url.toString());
    applyLang(l);
  }
  document.addEventListener("DOMContentLoaded",()=>{
    const lang=getLang();
    applyLang(lang);
    const sel=document.getElementById("langSel");
    if(sel){ sel.addEventListener("change", e=> window.__setLang(e.target.value)); }
  });
})();

