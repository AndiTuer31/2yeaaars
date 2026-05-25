// Page 4: Surprise — the final reveal. A pulsing heart, a list of "next year"
// promises, and a hidden ending.
const { PAPER_BG: SB_PB4, GRAIN_LAYER: SB_GR4, EDGE_VIGNETTE: SB_EV4,
        Flower: SBFl4, Paw: SBPw4 } = window.SB;

function FinalPage() {
  const [ending, setEnding] = React.useState(false);

  const promises = [
    'more couches',
    'more 22:00s',
    'more beaches (and bottles)',
    'more Bailey walks',
    'more picture #4s',
    'more flowers, on no occasion',
    'more two-years.',
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, background: SB_PB4, overflow: 'hidden' }}>
      <div style={SB_GR4} />
      <div style={SB_EV4} />

      {/* header */}
      <div style={{
        position: 'absolute', top: 50, left: 80,
        animation: 'sb-rise .7s ease .1s both',
      }}>
        <div style={{
          fontFamily: '"Special Elite", monospace', fontSize: 12,
          letterSpacing: '.3em', color: '#7a5a32',
        }}>PAGE FOUR &nbsp;·&nbsp; THE LAST ONE</div>
        <div style={{
          fontFamily: '"Instrument Serif", serif', fontSize: 78, lineHeight: 1,
          color: '#2a1e10', marginTop: 6,
        }}>
          and <span style={{ fontStyle: 'italic', color: '#c75e4e' }}>then?</span>
        </div>
      </div>

      {/* big heart on the left */}
      <div style={{
        position: 'absolute', left: 90, top: 230, width: 460, height: 480,
        animation: 'sb-rise 1s ease .5s both',
      }}>
        <svg viewBox="0 0 100 95" width="460" height="430" style={{
          display: 'block',
          filter: 'drop-shadow(0 18px 30px rgba(199,94,78,.35))',
          animation: 'final-heart 3.2s ease-in-out infinite',
        }}>
          <defs>
            <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e07c66" />
              <stop offset="100%" stopColor="#b13e2a" />
            </linearGradient>
          </defs>
          <path
            d="M50 86 C 18 60 0 40 0 22 C 0 8 12 0 24 0 C 36 0 46 8 50 18 C 54 8 64 0 76 0 C 88 0 100 8 100 22 C 100 40 82 60 50 86 Z"
            fill="url(#heartGrad)"
          />
          {/* shine */}
          <ellipse cx="28" cy="20" rx="10" ry="6" fill="rgba(255,255,255,.45)" transform="rotate(-25 28 20)" />
        </svg>
        <div style={{
          position: 'absolute', top: 140, left: 0, right: 0, textAlign: 'center',
          fontFamily: '"Caveat", cursive', fontSize: 56, color: '#fbf3e0',
          lineHeight: 1,
          textShadow: '0 4px 12px rgba(120,30,20,.5)',
          pointerEvents: 'none',
        }}>
          I love<br />you, Ana.
        </div>
      </div>

      {/* the promises list */}
      <div style={{
        position: 'absolute', right: 120, top: 230, width: 580,
        animation: 'sb-rise .8s ease .7s both',
      }}>
        <div style={{
          fontFamily: '"Special Elite", monospace', fontSize: 13,
          letterSpacing: '.3em', color: '#7a5a32', marginBottom: 18,
        }}>
          THE LIST · YEAR THREE
        </div>
        <ul style={{
          listStyle: 'none', padding: 0, margin: 0,
          fontFamily: '"EB Garamond", serif',
        }}>
          {promises.map((p, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'baseline', gap: 14,
              padding: '14px 0',
              borderBottom: i < promises.length - 1 ? '1px dashed rgba(110,70,30,.25)' : 'none',
              animation: `sb-rise .6s ease ${0.9 + i * 0.1}s both`,
            }}>
              <span style={{
                fontFamily: '"Caveat", cursive', fontSize: 30,
                color: i === promises.length - 1 ? '#c75e4e' : '#7a5a32',
                width: 36, textAlign: 'right',
              }}>
                {String(i + 1).padStart(2, '·')}
              </span>
              <span style={{
                fontSize: i === promises.length - 1 ? 32 : 26,
                fontStyle: i === promises.length - 1 ? 'italic' : 'normal',
                fontFamily: i === promises.length - 1 ? '"Instrument Serif", serif' : '"EB Garamond", serif',
                color: i === promises.length - 1 ? '#c75e4e' : '#3a2f23',
                lineHeight: 1.1,
              }}>
                {p}
              </span>
              {/* hand-drawn checkmark for the last one */}
              {i === promises.length - 1 && (
                <span style={{
                  fontFamily: '"Caveat", cursive', fontSize: 28,
                  color: '#c75e4e', marginLeft: 6,
                }}>↓</span>
              )}
            </li>
          ))}
        </ul>

        {/* sign off */}
        <div style={{
          marginTop: 32, fontFamily: '"Caveat", cursive', fontSize: 30,
          color: '#5a3f22', textAlign: 'right',
          transform: 'rotate(-1.5deg)',
        }}>
          — yours, &nbsp;<span style={{ color: '#c75e4e' }}>R</span>
        </div>
      </div>

      {/* tiny doodle flowers */}
      <SBFl4 size={36} color="#c75e4e" style={{ top: 140, right: 280 }} />
      <SBFl4 size={26} color="#e3a25b" style={{ top: 180, right: 230 }} />
      <SBFl4 size={32} color="#8aa169" style={{ bottom: 100, right: 90 }} />
      <SBFl4 size={28} color="#c75e4e" style={{ bottom: 60, right: 160 }} />
      <SBFl4 size={24} color="#f4c95a" style={{ bottom: 80, right: 220 }} />

      <SBPw4 size={22} style={{ bottom: 80, left: 600, transform: 'rotate(20deg)' }} delay={1.4} />
      <SBPw4 size={22} style={{ bottom: 100, left: 670, transform: 'rotate(-6deg)' }} delay={1.5} />
      <SBPw4 size={22} style={{ bottom: 80, left: 740, transform: 'rotate(14deg)' }} delay={1.6} />

      {/* hidden ending button — tiny ♡ in corner */}
      <button
        onClick={() => setEnding(true)}
        title="one more thing"
        style={{
          position: 'absolute', bottom: 24, right: 28,
          width: 30, height: 30, borderRadius: '50%',
          border: 'none', background: 'transparent', cursor: 'pointer',
          color: 'rgba(199,94,78,.55)', fontSize: 20, padding: 0,
          animation: 'sb-rise .6s ease 2s both',
        }}
      >♡</button>

      {/* hidden ending modal */}
      {ending && (
        <div
          onClick={() => setEnding(false)}
          style={{
            position: 'absolute', inset: 0, zIndex: 10,
            background: 'radial-gradient(ellipse at center, rgba(30,16,8,.7) 0%, rgba(30,16,8,.92) 80%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            animation: 'final-fade .5s ease',
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{
            background: '#fbf3e0',
            padding: '54px 70px',
            maxWidth: 640,
            boxShadow: '0 30px 80px rgba(0,0,0,.5)',
            backgroundImage: 'repeating-linear-gradient(transparent 0 32px, rgba(110,70,30,.1) 32px 33px)',
            cursor: 'default',
            position: 'relative',
            transform: 'rotate(-1deg)',
          }}>
            {/* corner tape */}
            <div style={{
              position: 'absolute', top: -10, left: '50%', marginLeft: -40, width: 80, height: 22,
              background: 'rgba(199,94,78,.55)', transform: 'rotate(-2deg)',
            }}/>
            <div style={{
              fontFamily: '"Special Elite", monospace', fontSize: 11,
              letterSpacing: '.3em', color: '#7a5a32', marginBottom: 12,
            }}>
              P.P.S. — STRICTLY FOR ANA
            </div>
            <div style={{
              fontFamily: '"Caveat", cursive', fontSize: 38, color: '#c75e4e',
              marginBottom: 14, lineHeight: 1,
            }}>
              one more thing.
            </div>
            <div style={{
              fontFamily: '"EB Garamond", serif', fontSize: 22, lineHeight: 1.6,
              color: '#3a2f23',
            }}>
              if you scrolled, clicked, unfolded everything, found the heart in
              the corner of the corner — that's exactly the kind of thing I
              love about you. you look at everything closely. you find the
              good bits.
              <br/><br/>
              I'm so glad you found mine.
            </div>
            <div style={{
              marginTop: 24, textAlign: 'right',
              fontFamily: '"Caveat", cursive', fontSize: 32, color: '#5a3f22',
            }}>
              forever — Rico ♡
            </div>
            <div style={{
              marginTop: 18, textAlign: 'center',
              fontFamily: '"Special Elite", monospace', fontSize: 11,
              opacity: .5, letterSpacing: '.2em',
            }}>
              click anywhere to close
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes final-heart { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes final-fade  { from{opacity:0} to{opacity:1} }
      `}</style>
    </div>
  );
}

window.FinalPage = FinalPage;
