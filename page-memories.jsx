// Page 2: Memories — polaroids, post-its, paw prints, doodles
const { Polaroid: SBPol, Flower: SBFl, Paw: SBPw, PostIt: SBPi,
        PAPER_BG: SB_PB, GRAIN_LAYER: SB_GR, EDGE_VIGNETTE: SB_EV } = window.SB;

function MemoriesPage() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: SB_PB, overflow: 'hidden' }}>
      <div style={SB_GR} />
      <div style={SB_EV} />

      {/* page header */}
      <div style={{
        position: 'absolute', top: 50, left: 80, animation: 'sb-rise .7s ease .1s both',
      }}>
        <div style={{
          fontFamily: '"Special Elite", monospace', fontSize: 12,
          letterSpacing: '.3em', color: '#7a5a32',
        }}>PAGE TWO</div>
        <div style={{
          fontFamily: '"Instrument Serif", serif', fontSize: 78, lineHeight: 1,
          color: '#2a1e10', marginTop: 6,
        }}>
          us, <span style={{ fontStyle: 'italic', color: '#c75e4e' }}>so far.</span>
        </div>
        <div style={{
          marginTop: 8, fontFamily: '"Caveat", cursive', fontSize: 24, color: '#5a4128',
          transform: 'rotate(-1deg)',
        }}>
          a small selection. drop in the real ones.
        </div>
      </div>

      {/* date stamp top right */}
      <div style={{
        position: 'absolute', top: 60, right: 90,
        border: '2px solid rgba(110,70,30,.5)', padding: '6px 18px',
        transform: 'rotate(-4deg)',
        fontFamily: '"Special Elite", monospace', fontSize: 13,
        letterSpacing: '.2em', color: '#7a3a2a',
        animation: 'sb-rise .7s ease .2s both',
      }}>
        25 · MAY · 2026
      </div>

      {/* polaroids */}
      <SBPol
        id="scrap-pic-1" rotate={-4}
        top={210} left={140}
        label="the cutie"
        tapes={[{ style: { top: -8, left: 90, transform: 'rotate(-6deg)' } }]}
        delay={0.3}
        src="photos/the-cutie.jpeg"
      />
      <SBPol
        id="scrap-pic-2" rotate={3}
        top={240} left={440}
        label="bailey, photobomb"
        tapes={[{ style: { top: -10, left: 80, transform: 'rotate(8deg)' }, color: 'rgba(245,210,180,.7)' }]}
        delay={0.45}
        src="photos/bailey-photobomb.jpeg"
      />
      <SBPol
        id="scrap-pic-3" rotate={-2}
        top={530} left={210}
        label="the döner"
        tapes={[{ style: { top: -9, left: 90, transform: 'rotate(-3deg)' } }]}
        delay={0.6}
        src="photos/the-doener.jpeg"
      />
      <SBPol
        id="scrap-pic-4" rotate={5}
        top={500} left={980}
        label="#4 — still the best ;)"
        src="photos/still-the-best.jpeg"
        width={250}
        tapes={[
          { style: { top: -10, left: 40, transform: 'rotate(-8deg)' }, color: 'rgba(199,94,78,.55)' },
          { style: { top: -10, left: 150, transform: 'rotate(6deg)' }, color: 'rgba(199,94,78,.55)' },
        ]}
        delay={0.75}
      />

      {/* post-its */}
      <SBPi rotate={-4} top={230} left={780} delay={0.55}>
        it's been 2 years since<br />
        Kira's IG story 🎬<br />
        <span style={{ fontSize: 17, opacity: .75 }}>(thanks, Kira.)</span>
      </SBPi>

      <SBPi rotate={4} top={490} left={510} color="#f9d6b8" w={230} delay={0.7}>
        first kiss: 22:00,<br />
        the couch, after Bailey's walk.<br />
        <span style={{ fontSize: 17 }}>i remember everything.</span>
      </SBPi>

      <SBPi rotate={-2} top={450} left={780} color="#cfe4b0" w={210} delay={0.85}>
        <span style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: '.2em' }}>EXHIBIT A</span><br />
        picture #4. zoom in. you'll see.
      </SBPi>

      {/* mini timeline strip across bottom */}
      <div style={{
        position: 'absolute', bottom: 36, left: 90, right: 90, height: 60,
        animation: 'sb-rise .7s ease 1.1s both',
      }}>
        <div style={{
          position: 'absolute', left: 0, right: 0, top: '50%', height: 2,
          background: 'rgba(110,70,30,.3)',
        }} />
        {[
          { x: 0,    label: '25/05/2024', sub: 'the couch' },
          { x: 0.18, label: 'summer',     sub: 'first beach' },
          { x: 0.34, label: 'autumn',     sub: 'bailey adopts us' },
          { x: 0.5,  label: '1 year',     sub: 'we did it' },
          { x: 0.66, label: 'winter',     sub: 'the long ones' },
          { x: 0.82, label: 'spring',     sub: 'flowers, kira\'s story' },
          { x: 1,    label: '25/05/2026', sub: 'two. years.', big: true },
        ].map((t, i) => (
          <div key={i} style={{
            position: 'absolute', left: `${t.x * 100}%`, top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <div style={{
              width: t.big ? 14 : 8, height: t.big ? 14 : 8,
              background: t.big ? '#c75e4e' : '#7a5a32',
              borderRadius: '50%',
              boxShadow: t.big ? '0 0 0 4px rgba(199,94,78,.25)' : 'none',
              margin: '0 auto',
            }} />
            <div style={{
              fontFamily: '"Special Elite", monospace', fontSize: 10,
              letterSpacing: '.15em', color: '#7a5a32', marginTop: 8, textAlign: 'center',
              whiteSpace: 'nowrap', transform: 'translateX(-50%)', position: 'absolute',
              left: '50%', top: 14, opacity: t.big ? 1 : .85,
              color: t.big ? '#c75e4e' : '#7a5a32',
            }}>{t.label}</div>
            <div style={{
              fontFamily: '"Caveat", cursive', fontSize: 15,
              color: '#5a4128', marginTop: 2, textAlign: 'center',
              whiteSpace: 'nowrap', transform: 'translateX(-50%)', position: 'absolute',
              left: '50%', top: 30,
              fontWeight: t.big ? 600 : 400,
            }}>{t.sub}</div>
          </div>
        ))}
      </div>

      {/* doodle flowers in corners */}
      <SBFl size={32} color="#c75e4e" style={{ top: 180, right: 90 }} />
      <SBFl size={24} color="#e3a25b" style={{ top: 220, right: 60 }} />
      <SBFl size={28} color="#8aa169" style={{ top: 200, right: 130 }} />

      {/* paw trail from polaroid to post-it */}
      <SBPw size={20} style={{ top: 460, left: 380, transform: 'rotate(20deg)' }} delay={1.0} />
      <SBPw size={20} style={{ top: 430, left: 440, transform: 'rotate(-8deg)' }} delay={1.05} />
      <SBPw size={20} style={{ top: 460, left: 500, transform: 'rotate(15deg)' }} delay={1.1} />
      <SBPw size={20} style={{ top: 430, left: 560, transform: 'rotate(-4deg)' }} delay={1.15} />

      {/* corner doodle */}
      <div style={{
        position: 'absolute', bottom: 130, left: 90,
        fontFamily: '"Caveat", cursive', fontSize: 19, color: '#7a5a32',
        transform: 'rotate(-4deg)', opacity: .8,
      }}>
        ↑ everything that happened ↑
      </div>
    </div>
  );
}

window.MemoriesPage = MemoriesPage;
