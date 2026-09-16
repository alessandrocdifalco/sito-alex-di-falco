(()=>{
  const run=()=>{
    const heroCopy=document.querySelector('.hero-copy');
    const statement=document.querySelector('.hero-statement');
    const strip=document.querySelector('.hero-strip');
    if(heroCopy){
      heroCopy.innerHTML=`
        <div class="eyebrow">PRIVATE EVENTS · ROMA / LAZIO</div>
        <h1 class="v52-title" aria-label="Music, people, places.">
          <span>MUSIC,</span>
          <span class="human">people,</span>
          <span>PLACES<span class="punct">.</span></span>
        </h1>
        <p class="hero-lead">DJ set per eventi privati, aperitivi e occasioni speciali. Selezione musicale, luci e immagini curate come parte dello stesso evento.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contatti">Richiedi disponibilità <span>→</span></a>
          <a class="btn btn-secondary" href="#approccio">Come lavoriamo</a>
        </div>`;
    }
    if(statement){
      statement.innerHTML=`
        <div>
          <div class="eyebrow">DJ SETS · PRIVATE EVENTS</div>
          <div class="hero-wordmark">DI FALCO <span class="amp">&amp;</span> PERGAMO</div>
          <div class="hero-statement-meta">ROMA / LAZIO<br>SELECTED LOCATIONS</div>
        </div>
        <div class="line"></div>`;
    }
    if(strip){strip.innerHTML='<span>DJ SETS</span><span>PRIVATE EVENTS</span><span>APERITIVI</span><span>ROMA / LAZIO</span>';}

    const css=document.createElement('style');
    css.textContent=`
      .hero-copy{width:min(56%,720px)!important}
      .hero-copy .eyebrow{margin-bottom:28px!important;color:rgba(241,236,226,.66)!important}
      .hero .v52-title{font-family:var(--sans)!important;font-weight:500!important;font-size:clamp(58px,7vw,116px)!important;line-height:.80!important;letter-spacing:-.065em!important;margin:0 0 34px!important;max-width:7.2ch!important;text-transform:uppercase!important}
      .hero .v52-title>span{display:block}
      .hero .v52-title .human{font-family:var(--serif)!important;font-weight:300!important;font-style:italic!important;letter-spacing:-.045em!important;text-transform:none!important;font-size:1.05em!important;padding-left:.06em}
      .hero .v52-title .punct{color:var(--coral)}
      .hero-lead{max-width:45ch!important;color:rgba(241,236,226,.76)!important;font-size:15px!important;line-height:1.7!important;margin:0 0 34px!important}
      .hero-statement{background:var(--cream)!important;color:var(--ink)!important;border-color:rgba(17,19,18,.10)!important}
      .hero-statement .eyebrow{color:#7A746B!important}
      .hero-wordmark{font-family:var(--sans);font-size:clamp(27px,2.55vw,44px);font-weight:500;line-height:1.02;letter-spacing:.075em;text-transform:uppercase;margin:18px 0 26px}
      .hero-wordmark .amp{color:var(--coral);font-family:var(--serif);font-style:italic;font-size:1.18em;padding:0 .04em}
      .hero-statement-meta{font-family:var(--mono);font-size:10px;line-height:1.8;letter-spacing:.16em;text-transform:uppercase;color:#6F6A63}
      @media(max-width:660px){
        .hero-copy{width:100%!important;padding:34px 22px 74px!important}
        .hero .v52-title{font-size:clamp(56px,18vw,82px)!important;line-height:.82!important;max-width:6.3ch!important;margin-bottom:28px!important}
        .hero .v52-title .human{font-size:1.02em!important}
      }`;
    document.head.appendChild(css);
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();