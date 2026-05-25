// Envelope intro — wax-sealed envelope, click to open
function EnvelopeIntro({ onOpen }) {
  const [opening, setOpening] = React.useState(false);
  const [hint, setHint] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setHint(true), 1200); return () => clearTimeout(t); }, []);

  const handle = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <div
      onClick={handle}
      style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: opening ? 'default' : 'pointer',
        perspective: '1500px',
        background: 'radial-gradient(ellipse at center, #2a1810 0%, #120a06 70%)',
      }}
    >
      <style>{`
        @keyframes env-hint { 0%,100%{transform:translateY(0); opacity:.55} 50%{transform:translateY(-6px); opacity:.95} }
        @keyframes env-breath { 0%,100%{transform:scale(1)} 50%{transform:scale(1.015)} }
        @keyframes env-spark { 0%,100%{opacity:.4; transform:scale(1)} 50%{opacity:1; transform:scale(1.15)} }
      `}</style>

      {/* gentle vignette spark */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse at center, rgba(255,200,140,.08) 0%, transparent 60%)',
        animation:'env-spark 6s ease-in-out infinite',
      }}/>

      <div style={{
        position: 'relative', width: 580, height: 360,
        opacity: opening ? 0 : 1,
        transform: opening ? 'translateY(50px) scale(.95)' : 'translateY(0) scale(1)',
        transition: 'opacity .8s ease .6s, transform 1.2s cubic-bezier(.4,0,.6,1)',
        animation: opening ? 'none' : 'env-breath 5s ease-in-out infinite',
      }}>
        {/* envelope body */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, #d2a07c 0%, #b07854 100%)',
          boxShadow: '0 30px 70px rgba(0,0,0,.55), inset 0 0 60px rgba(70,30,10,.3)',
          borderRadius: 6,
        }}/>
        {/* V fold shading on body (visible when flap open) */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(135deg, rgba(40,20,10,.25) 0%, transparent 50%),' +
            'linear-gradient(225deg, rgba(40,20,10,.25) 0%, transparent 50%)',
          clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
          borderRadius: 6,
        }}/>
        {/* address line */}
        <div style={{
          position:'absolute', top:'66%', left:'50%', transform:'translateX(-50%)',
          fontFamily:'"Caveat", cursive', fontSize: 38, color:'#fbf3e0',
          textShadow:'0 2px 4px rgba(0,0,0,.3)',
          opacity: opening ? 0 : .95, transition:'opacity .3s',
          whiteSpace:'nowrap',
        }}>for Ana</div>
        <div style={{
          position:'absolute', top:'80%', left:'50%', transform:'translateX(-50%)',
          fontFamily:'"Special Elite", monospace', fontSize: 11,
          letterSpacing:'.3em', color:'#fbf3e0',
          opacity: opening ? 0 : .7, transition:'opacity .3s',
        }}>25 · 05 · 2026</div>

        {/* flap */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(180deg, #d99a78 0%, #b8785a 100%)',
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          transformOrigin: 'top center',
          transform: opening ? 'rotateX(-180deg)' : 'rotateX(0)',
          transition: 'transform 1.1s cubic-bezier(.4,0,.6,1)',
          boxShadow: opening ? 'none' : '0 4px 8px rgba(0,0,0,.18)',
          backfaceVisibility: 'hidden',
        }}/>

        {/* wax seal */}
        <div style={{
          position: 'absolute', top: '42%', left: '50%',
          transform: `translate(-50%,-50%) ${opening ? 'scale(0)' : 'scale(1)'}`,
          width: 78, height: 78, borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #e16e54 0%, #b13e2a 55%, #7a2818 100%)',
          color: '#fbf3e0',
          fontFamily: '"Instrument Serif", serif', fontSize: 22, fontStyle:'italic',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 16px rgba(0,0,0,.4), inset 0 -4px 6px rgba(0,0,0,.25), inset 0 4px 4px rgba(255,255,255,.15)',
          letterSpacing: '.02em',
          transition: 'transform .4s ease, opacity .3s',
          opacity: opening ? 0 : 1,
        }}>R♡A</div>

        {/* peeking letter (visible once flap opens) */}
        <div style={{
          position:'absolute', left: 30, right: 30, top: '30%', bottom: 10,
          background: '#fbf3e0',
          boxShadow:'inset 0 6px 12px rgba(0,0,0,.15)',
          backgroundImage:'repeating-linear-gradient(transparent 0 26px, rgba(110,70,30,.12) 26px 27px)',
          opacity: opening ? 1 : 0,
          transform: opening ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity .5s ease .4s, transform .8s ease .4s',
          zIndex: -1,
        }}/>
      </div>

      {/* hint */}
      <div style={{
        position: 'absolute', bottom: '14%', left: 0, right: 0, textAlign: 'center',
        fontFamily: '"Caveat", cursive', fontSize: 26, color: '#f4d9b8',
        opacity: hint && !opening ? 1 : 0,
        transition: 'opacity .8s ease',
        animation: hint && !opening ? 'env-hint 2.2s ease-in-out infinite' : 'none',
        pointerEvents:'none',
      }}>
        ↓ click to open ↓
      </div>

      {/* top label */}
      <div style={{
        position:'absolute', top:'12%', left:0, right:0, textAlign:'center',
        fontFamily:'"Special Elite", monospace', fontSize: 12, letterSpacing:'.4em',
        color:'#f4d9b8', opacity: opening ? 0 : .7, transition:'opacity .5s',
      }}>
        FROM RICO &nbsp; · &nbsp; WITH BAILEY
      </div>
    </div>
  );
}

window.EnvelopeIntro = EnvelopeIntro;
