(function(){
var R=document.body.dataset.root||'';
var NAV=[
  {label:'About',subs:[
    {l:'About Senao Computing',h:'pages/about/index.html'},
    {l:'Why Senao Computing',h:'pages/about/company/index.html'},
    {l:'Global Presence',h:'pages/about/manufacturing/index.html'},
    {l:'Certification',h:'pages/about/certification/index.html'}
  ]},
  {label:'Use Case',subs:[
    {l:'RAXEL AI',h:'pages/platforms/edge-platform/index.html'},
    {l:'SmartNIC',h:'pages/solutions/smart-nic/index.html'}
  ]},
  {label:'Products Series',isMega:true,rows:[
    {title:'Server',items:[
      {l:'SR610',h:'pages/products/servers/sr610/index.html'},
      {l:'SR710',h:'pages/products/servers/sr710/index.html'},
      {l:'SR710G',h:'pages/products/servers/sr710g/index.html'}
    ]},
    {title:'Edge Server',items:[
      {l:'SE110',h:'pages/products/servers/se110/index.html'},
      {l:'SE210',h:'pages/products/servers/se210/index.html'}
    ]},
    {title:'SmartNIC',items:[
      {l:'SX904',h:'pages/products/smart-nics/sx904/index.html'},
      {l:'SX906',h:'pages/products/smart-nics/sx906/index.html'}
    ]},
    {title:'Data Center Switch',items:[
      {l:'SND Series',h:'pages/products/data-center-switches/snd-series/index.html'}
    ]},
    {title:'Edge Appliance',items:[
      {l:'SC9435B',h:'pages/products/edge-appliance/sc9435b/index.html'},
      {l:'SA9832b',h:'pages/products/edge-appliance/sa9832b/index.html'},
      {l:'Edge SCM',h:'pages/products/edge-appliance/edge-scm/index.html'}
    ]},
    {title:'COM Express',items:[
      {l:'COM7000',h:'pages/products/com-express/com7000/index.html'},
      {l:'CME5100',h:'pages/products/com-express/cme5100/index.html'}
    ]}
  ]},
  {label:'Resources',subs:[
    {l:'News',h:'pages/resources/news/index.html'},
    {l:'Events',h:'pages/resources/events/index.html'},
    {l:'Blog',h:'pages/resources/blog/index.html'},
    {l:'Downloads',h:'pages/resources/datasheets/index.html'}
  ]},
  {label:'Support',subs:[
    {l:'Contact Us',h:'pages/about/contact/index.html'}
  ]}
];

function navH(){
  var h='';
  NAV.forEach(function(n){
    h+='<div class="hdr-item">'
      +'<div class="hdr-link"><span>'+n.label+'</span>'
      +'<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>'
      +'</div>';
    if(n.isMega){
      h+='<div class="hdr-drop mega-menu"><div class="mega-rows">';
      n.rows.forEach(function(row){
        h+='<div class="mega-row"><span class="mega-row-title">'+row.title+'</span><div class="mega-row-items">';
        row.items.forEach(function(item){
          h+='<a href="'+R+item.h+'" class="mega-pill">'+item.l+'</a>';
        });
        h+='</div></div>';
      });
      h+='</div></div>';
    } else {
      h+='<div class="hdr-drop">';
      n.subs.forEach(function(s){ h+='<a href="'+R+s.h+'">'+s.l+'</a>'; });
      h+='</div>';
    }
    h+='</div>';
  });
  return h;
}

function mobileH(){
  var h='';
  NAV.forEach(function(n){
    h+='<p class="m-cat">'+n.label+'</p>';
    if(n.isMega){
      n.rows.forEach(function(row){
        h+='<p class="m-subcat" style="padding: 6px 0 2px 10px; font-size:11px; color:rgba(255,255,255,0.45); font-weight:700; text-transform:uppercase;">'+row.title+'</p>';
        row.items.forEach(function(item){
          h+='<a href="'+R+item.h+'" style="padding-left:20px; font-size:14px; color:rgba(255,255,255,0.7)">'+item.l+'</a>';
        });
      });
    } else {
      n.subs.forEach(function(s){ h+='<a href="'+R+s.h+'">'+s.l+'</a>'; });
    }
  });
  return h;
}

var hdr=document.getElementById('site-header');
if(hdr){
  hdr.innerHTML='<div class="wrap"><div class="hdr-inner">'
    +'<a href="'+R+'index.html" style="display:flex;align-items:center"><img src="'+R+'image/logo/senao_networks_vertical_logo.png" alt="SENAO Networks" style="height:44px;width:auto"></a>'
    +'<nav class="hdr-nav">'+navH()+'</nav>'
    +'<div style="display:flex;align-items:center;gap:10px">'
    +'<a class="hdr-cta" href="'+R+'pages/about/contact/index.html">Contact Us</a>'
    +'<div class="lang-switch"><a href="#">CH</a><span class="lang-divider"></span><a href="#" class="active">EN</a></div>'
    +'<button class="hdr-burger" id="hdrB" aria-label="Menu"><span></span><span></span><span></span></button>'
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
    +'<p>High-Performance Servers, SmartNICs & Platform Solutions<br>Comprehensive Experts in Data Center Infrastructure</p>'
    +'</div>'
    +'<div class="ftr-cols">'
    +'<div class="ftr-col"><h5>About</h5>'
      +'<a href="'+R+'pages/about/index.html">About Senao Computing</a>'
      +'<a href="'+R+'pages/about/company/index.html">Why Senao Computing</a>'
      +'<a href="'+R+'pages/about/manufacturing/index.html">Global Presence</a>'
      +'<a href="'+R+'pages/about/certification/index.html">Certification</a>'
    +'</div>'
    +'<div class="ftr-col"><h5>Use Case</h5>'
      +'<a href="'+R+'pages/platforms/edge-platform/index.html">RAXEL AI</a>'
      +'<a href="'+R+'pages/solutions/smart-nic/index.html">SmartNIC</a>'
    +'</div>'
    +'<div class="ftr-col"><h5>Products Series</h5>'
      +'<a href="'+R+'pages/products/servers/sr610/index.html">SR610</a>'
      +'<a href="'+R+'pages/products/servers/sr710/index.html">SR710</a>'
      +'<a href="'+R+'pages/products/servers/sr710g/index.html">SR710G</a>'
      +'<a href="'+R+'pages/products/servers/se110/index.html">SE110</a>'
      +'<a href="'+R+'pages/products/servers/se210/index.html">SE210</a>'
      +'<a href="'+R+'pages/products/smart-nics/sx904/index.html">SX904</a>'
      +'<a href="'+R+'pages/products/smart-nics/sx906/index.html">SX906</a>'
      +'<a href="'+R+'pages/products/data-center-switches/snd-series/index.html">SND Series</a>'
      +'<a href="'+R+'pages/products/edge-appliance/index.html">Edge Appliance</a>'
      +'<a href="'+R+'pages/products/com-express/index.html">COM Express</a>'
    +'</div>'
    +'<div class="ftr-col"><h5>Resources</h5>'
      +'<a href="'+R+'pages/resources/news/index.html">News</a>'
      +'<a href="'+R+'pages/resources/events/index.html">Events</a>'
      +'<a href="'+R+'pages/resources/blog/index.html">Blog</a>'
      +'<a href="'+R+'pages/resources/datasheets/index.html">Downloads</a>'
    +'</div>'
    +'<div class="ftr-col"><h5>Support</h5>'
      +'<a href="'+R+'pages/about/contact/index.html">Contact Us</a>'
    +'</div>'
    +'</div></div>'
    +'<div class="ftr-bottom"><span>&copy; 2026 Senao Networks. All rights reserved.</span></div>'
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