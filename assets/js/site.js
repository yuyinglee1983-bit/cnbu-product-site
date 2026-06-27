(function(){
var R=document.body.dataset.root||'';
var NAV=[
  {label:'解決方案',subs:[
    {l:'AI 基礎架構',h:'pages/solutions/ai-infrastructure/index.html'},
    {l:'邊緣運算',h:'pages/solutions/edge-computing/index.html'},
    {l:'網路安全',h:'pages/solutions/cybersecurity/index.html'},
    {l:'電信與 5G',h:'pages/solutions/telecom-5g/index.html'},
    {l:'雲端基礎架構',h:'pages/solutions/cloud-infrastructure/index.html'}
  ]},
  {label:'產品介紹',subs:[
    {l:'伺服器',h:'pages/products/servers/index.html'},
    {l:'智慧網卡',h:'pages/products/smart-nics/index.html'},
    {l:'資料中心交換器',h:'pages/products/data-center-switches/index.html'},
    {l:'電源解決方案',h:'pages/products/power-solutions/index.html'}
  ]},
  {label:'平台方案',subs:[
    {l:'AI 推論平台',h:'pages/platforms/ai-platform/index.html'},
    {l:'邊緣運算平台',h:'pages/platforms/edge-platform/index.html'},
    {l:'網路安全平台',h:'pages/platforms/cybersecurity-platform/index.html'}
  ]},
  {label:'資源中心',subs:[
    {l:'產品規格書',h:'pages/resources/datasheets/index.html'},
    {l:'技術白皮書',h:'pages/resources/whitepapers/index.html'},
    {l:'影音專區',h:'pages/resources/videos/index.html'},
    {l:'技術部落格',h:'pages/resources/blog/index.html'}
  ]},
  {label:'關於我們',subs:[
    {l:'公司簡介',h:'pages/about/company/index.html'},
    {l:'生產製造',h:'pages/about/manufacturing/index.html'},
    {l:'聯絡我們',h:'pages/about/contact/index.html'}
  ]}
];

function navH(){
  var h='';
  NAV.forEach(function(n){
    h+='<div class="hdr-item">'
      +'<div class="hdr-link"><span>'+n.label+'</span>'
      +'<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>'
      +'</div><div class="hdr-drop">';
    n.subs.forEach(function(s){ h+='<a href="'+R+s.h+'">'+s.l+'</a>'; });
    h+='</div></div>';
  });
  return h;
}

function mobileH(){
  var h='';
  NAV.forEach(function(n){
    h+='<p class="m-cat">'+n.label+'</p>';
    n.subs.forEach(function(s){ h+='<a href="'+R+s.h+'">'+s.l+'</a>'; });
  });
  return h;
}

var hdr=document.getElementById('site-header');
if(hdr){
  hdr.innerHTML='<div class="wrap"><div class="hdr-inner">'
    +'<a href="'+R+'index.html" style="display:flex;align-items:center"><img src="'+R+'image/logo/senao_networks_vertical_logo.png" alt="SENAO Networks" style="height:44px;width:auto"></a>'
    +'<nav class="hdr-nav">'+navH()+'</nav>'
    +'<div style="display:flex;align-items:center;gap:10px">'
    +'<a class="hdr-cta" href="'+R+'pages/about/contact/index.html">聯絡我們</a>'
    +'<div class="lang-switch"><a href="#" class="active">CH</a><span class="lang-divider"></span><a href="#">EN</a></div>'
    +'<button class="hdr-burger" id="hdrB" aria-label="選單"><span></span><span></span><span></span></button>'
    +'</div></div></div>';

  var mn=document.createElement('div');
  mn.id='mobile-nav';
  mn.innerHTML=mobileH();
  document.body.insertBefore(mn,hdr.nextSibling);

  var burger=document.getElementById('hdrB');
  burger.addEventListener('click',function(){
    var o=mn.classList.toggle('open');
    this.classList.toggle('open',o);
    document.body.style.overflow=o?'hidden':'';
  });
  mn.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      mn.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow='';
    });
  });

  window.addEventListener('scroll',function(){
    hdr.style.boxShadow=window.scrollY>40?'0 4px 24px rgba(11,30,56,.12)':'';
  },{passive:true});
}

var ftr=document.getElementById('site-footer');
if(ftr){
  ftr.innerHTML='<div class="wrap">'
    +'<div class="ftr-top">'
    +'<div class="ftr-brand">'
    +'<img src="'+R+'image/logo/senao_networks_vertical_logo.png" alt="SENAO Networks" class="ftr-logo-gif">'
    +'<p>一站式 AI 與資料中心架構<br>整合伺服器、網卡、交換器與完整平台</p>'
    +'</div>'
    +'<div class="ftr-cols">'
    +'<div class="ftr-col"><h5>解決方案</h5>'
      +'<a href="'+R+'pages/solutions/ai-infrastructure/index.html">AI 基礎架構</a>'
      +'<a href="'+R+'pages/solutions/edge-computing/index.html">邊緣運算</a>'
      +'<a href="'+R+'pages/solutions/cybersecurity/index.html">網路安全</a>'
      +'<a href="'+R+'pages/solutions/telecom-5g/index.html">電信與 5G</a>'
      +'<a href="'+R+'pages/solutions/cloud-infrastructure/index.html">雲端基礎架構</a>'
    +'</div>'
    +'<div class="ftr-col"><h5>產品</h5>'
      +'<a href="'+R+'pages/products/servers/index.html">伺服器</a>'
      +'<a href="'+R+'pages/products/smart-nics/index.html">智慧網卡</a>'
      +'<a href="'+R+'pages/products/data-center-switches/index.html">交換器</a>'
      +'<a href="'+R+'pages/products/power-solutions/index.html">電源解決方案</a>'
    +'</div>'
    +'<div class="ftr-col"><h5>資源</h5>'
      +'<a href="'+R+'pages/resources/datasheets/index.html">產品規格書</a>'
      +'<a href="'+R+'pages/resources/whitepapers/index.html">技術白皮書</a>'
      +'<a href="'+R+'pages/resources/videos/index.html">影音專區</a>'
      +'<a href="'+R+'pages/resources/blog/index.html">技術部落格</a>'
    +'</div>'
    +'<div class="ftr-col"><h5>關於</h5>'
      +'<a href="'+R+'pages/about/company/index.html">公司簡介</a>'
      +'<a href="'+R+'pages/about/manufacturing/index.html">生產製造</a>'
      +'<a href="'+R+'pages/about/contact/index.html">聯絡我們</a>'
    +'</div>'
    +'</div></div>'
    +'<div class="ftr-bottom"><span>&copy; 2026 CNBU Networks. All rights reserved.</span></div>'
    +'</div>';
}

var io=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){ e.target.classList.add('vis'); io.unobserve(e.target); }
  });
},{threshold:0.1});
document.querySelectorAll('.fu').forEach(function(el){ io.observe(el); });

/* ── 麵包屑分類連結去連結化 ─────────────────
   將 .breadcrumb / .pd-breadcrumb 內指向分類
   index 頁的 <a> 換成灰色 <span>，無法點擊  */
var CAT_PATTERNS=[
  /solutions\/index\.html/,
  /products\/index\.html/,
  /platforms\/index\.html/,
  /resources\/index\.html/,
  /about\/index\.html/,
  /servers\/index\.html/,
  /smart-nics\/index\.html/,
  /data-center-switches\/index\.html/,
  /power-solutions\/index\.html/
];
document.querySelectorAll('.breadcrumb a, .pd-breadcrumb a').forEach(function(a){
  var href=a.getAttribute('href')||'';
  var isCat=CAT_PATTERNS.some(function(p){ return p.test(href); });
  if(isCat){
    var sp=document.createElement('span');
    sp.textContent=a.textContent;
    sp.style.cssText='color:var(--muted,#5a6d88);cursor:default;pointer-events:none';
    a.parentNode.replaceChild(sp,a);
  }
});

})();