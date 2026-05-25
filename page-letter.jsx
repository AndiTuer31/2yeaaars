// Page 3: The Letter — a single big handwritten/typed letter, opening on entry
const { PAPER_BG: SB_PB3, GRAIN_LAYER: SB_GR3, EDGE_VIGNETTE: SB_EV3,
        Flower: SBFl3, Paw: SBPw3 } = window.SB;

function LetterPage({ active }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: SB_PB3, overflow: 'hidden' }}>
      <div style={SB_GR3} />
      <div style={SB_EV3} />

      {/* page header */}
      <div style={{
        position: 'absolute', top: 50, left: 80,
        animation: 'sb-rise .7s ease .1s both',
      }}>
        <div style={{
          fontFamily: '"Special Elite", monospace', fontSize: 12,
          letterSpacing: '.3em', color: '#7a5a32',
        }}>PAGE THREE</div>
        <div style={{
          fontFamily: '"Instrument Serif", serif', fontSize: 78, lineHeight: 1,
          color: '#2a1e10', marginTop: 6,
        }}>
          a <span style={{ fontStyle: 'italic', color: '#c75e4e' }}>letter.</span>
        </div>
      </div>

      {/* wax seal up top right of letter */}
      <div style={{
        position: 'absolute', top: 130, right: 200,
        width: 84, height: 84, borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 30%, #e16e54 0%, #b13e2a 55%, #7a2818 100%)',
        color: '#fbf3e0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
        fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 18px rgba(0,0,0,.32), inset 0 -4px 6px rgba(0,0,0,.25), inset 0 4px 4px rgba(255,255,255,.15)',
        transform: 'rotate(-8deg)',
        animation: 'sb-rise .8s ease .3s both',
        zIndex: 3,
      }}>R♡A</div>

      {/* the letter sheet */}
      <div style={{
        position: 'absolute',
        left: 220, right: 220, top: 200, bottom: 110,
        background: '#fbf4e0',
        backgroundImage:
          'repeating-linear-gradient(transparent 0 36px, rgba(110,70,30,.1) 36px 37px)',
        backgroundPosition: '0 50px',
        boxShadow: '0 28px 60px rgba(70,40,15,.32), 0 0 0 1px rgba(110,70,30,.1)',
        padding: '70px 90px 60px',
        transformOrigin: 'top center',
        animation: 'letter-open 1s cubic-bezier(.2,.7,.3,1) .35s both',
        overflow: 'hidden',
      }}>
        {/* red margin line */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: 64,
          width: 1, background: 'rgba(199,94,78,.5)',
        }}/>
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: 66,
          width: 1, background: 'rgba(199,94,78,.5)',
        }}/>

        {/* date + place */}
        <div style={{
          fontFamily: '"Special Elite", monospace', fontSize: 12,
          letterSpacing: '.2em', color: '#7a5a32',
          textAlign: 'right', marginBottom: 14,
        }}>
          25 · 05 · 2026 &nbsp;·&nbsp; THE COUCH
        </div>

        <div style={{
          fontFamily: '"Caveat", cursive', fontSize: 44, color: '#c75e4e',
          marginBottom: 18, transform: 'rotate(-1deg)',
        }}>
          Ana,
        </div>

        <div style={{
          fontFamily: '"EB Garamond", serif', fontSize: 22, lineHeight: 1.65,
          color: '#3a2f23',
        }}>
          two years ago, after a walk with Bailey, you sat down on the couch and
          I decided — somewhere between the door clicking shut and the moment
          you laughed at something I no longer remember — that I was never
          going to look at anyone else the way I look at you. it was 22:00. the
          apartment was quiet. and then I kissed you, and that was that — me,
          done, permanently.
          <br /><br />
          here are 730-ish days of us, folded up into a little book. there is a
          paw-print trail to find me by, and a post-it from Kira (thank you,
          Kira), and one polaroid that is, for the record, still the best one.
          <br /><br />
          happy two years. let's keep going.
        </div>

        <div style={{
          marginTop: 28, textAlign: 'right',
          fontFamily: '"Caveat", cursive', fontSize: 36, color: '#5a3f22',
          transform: 'rotate(-2deg)',
        }}>
          yours, <span style={{ color: '#c75e4e' }}>— Rico ♡</span>
        </div>

        {/* tiny P.S. */}
        <div style={{
          marginTop: 16,
          fontFamily: '"Caveat", cursive', fontSize: 22, color: '#7a5a32',
        }}>
          p.s. — Bailey says hi. and that picture #4 is, in his expert opinion, also the best one.
        </div>
      </div>

      {/* tape on top of the letter */}
      <div style={{
        position: 'absolute', top: 192, left: '50%', marginLeft: -40, width: 80, height: 22,
        background: 'rgba(244,222,160,.7)', transform: 'rotate(-2deg)',
        boxShadow: '0 1px 3px rgba(0,0,0,.1)',
        animation: 'sb-rise .6s ease .5s both',
      }} />

      {/* small flower beside the letter */}
      <SBFl3 size={36} color="#c75e4e" style={{ top: 230, left: 140 }} />
      <SBFl3 size={26} color="#e3a25b" style={{ top: 270, left: 110 }} />
      <SBFl3 size={30} color="#8aa169" style={{ bottom: 200, left: 140 }} />

      {/* paw trail leading toward next page */}
      <SBPw3 size={22} style={{ bottom: 50, left: 600, transform: 'rotate(20deg)' }} delay={1.0} />
      <SBPw3 size={22} style={{ bottom: 70, left: 680, transform: 'rotate(-10deg)' }} delay={1.1} />
      <SBPw3 size={22} style={{ bottom: 50, left: 760, transform: 'rotate(14deg)' }} delay={1.2} />
      <SBPw3 size={22} style={{ bottom: 70, left: 840, transform: 'rotate(-4deg)' }} delay={1.3} />

      <style>{`
        @keyframes letter-open {
          0%   { opacity: 0; transform: rotateX(-90deg) translateY(-20px); }
          60%  { opacity: 1; }
          100% { opacity: 1; transform: rotateX(0) translateY(0); }
        }
      `}</style>
    </div>
  );
}

window.LetterPage = LetterPage;
