// Page 1: Cover — "two years" + day counter
const { Polaroid: SBPolaroid, Flower: SBFlower, Paw: SBPaw, PostIt: SBPostIt,
        PAPER_BG: SB_PAPER, GRAIN_LAYER: SB_GRAIN, EDGE_VIGNETTE: SB_EDGE } = window.SB;

const ANNIVERSARY = new Date('2026-05-25T00:00:00');

function dayCounter() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const ann = new Date(2026, 4, 25);
  const diff = Math.round((today - ann) / (1000 * 60 * 60 * 24));
  if (diff === 0) return { line1: 'today.', line2: 'two years exactly.', tone: 'now' };
  if (diff === -1) return { line1: 'one sleep.', line2: 'until two years.', tone: 'soon' };
  if (diff < 0) return { line1: `${-diff} days`, line2: 'until two years.', tone: 'soon' };
  if (diff === 1) return { line1: 'one day', line2: 'past two years.', tone: 'past' };
  return { line1: `${diff} days`, line2: 'past two years.', tone: 'past' };
}

function CoverPage() {
  const c = React.useMemo(dayCounter, []);
  return (
    <div style={{ position: 'absolute', inset: 0, background: SB_PAPER, overflow: 'hidden' }}>
      <div style={SB_GRAIN} />
      <div style={SB_EDGE} />

      {/* top tag */}
      <div style={{
        position: 'absolute', top: 60, left: 0, right: 0, textAlign: 'center',
        fontFamily: '"Special Elite", monospace', fontSize: 13,
        letterSpacing: '.4em', color: '#7a5a32',
        animation: 'sb-rise .8s ease .2s both',
      }}>
        A SCRAPBOOK &nbsp;·&nbsp; FROM RICO &nbsp;·&nbsp; WITH BAILEY
      </div>

      {/* "for Ana" in handwriting */}
      <div style={{
        position: 'absolute', top: 110, left: 0, right: 0, textAlign: 'center',
        fontFamily: '"Caveat", cursive', fontSize: 36, color: '#5a4128',
        transform: 'rotate(-1.5deg)',
        animation: 'sb-rise .8s ease .35s both',
      }}>
        for Ana
      </div>

      {/* huge title */}
      <div style={{
        position: 'absolute', top: 180, left: 0, right: 0, textAlign: 'center',
        fontFamily: '"Instrument Serif", serif',
        fontSize: 240, lineHeight: 0.92, letterSpacing: '-0.02em',
        color: '#2a1e10',
        animation: 'sb-rise 1s ease .5s both',
      }}>
        two<br />
        <span style={{ fontStyle: 'italic', color: '#c75e4e' }}>years.</span>
      </div>

      {/* day counter card */}
      <div style={{
        position: 'absolute', bottom: 180, left: '50%', transform: 'translateX(-50%) rotate(-1deg)',
        background: '#fbf4e0',
        padding: '22px 40px',
        boxShadow: '0 14px 30px rgba(70,40,15,.22)',
        textAlign: 'center',
        animation: 'sb-rise .9s ease .9s both',
      }}>
        {/* tape on top of card */}
        <div style={{
          position: 'absolute', top: -10, left: '50%', marginLeft: -36, width: 72, height: 18,
          background: 'rgba(199,94,78,.5)', transform: 'rotate(-2deg)',
        }} />
        <div style={{
          fontFamily: '"Instrument Serif", serif', fontSize: 56, lineHeight: 1,
          color: c.tone === 'now' ? '#c75e4e' : '#3a2f23',
          fontStyle: c.tone === 'now' ? 'italic' : 'normal',
        }}>
          {c.line1}
        </div>
        <div style={{
          marginTop: 4,
          fontFamily: '"Caveat", cursive', fontSize: 26, color: '#5a4128',
        }}>
          {c.line2}
        </div>
      </div>

      {/* doodle flowers */}
      <SBFlower size={42} color="#c75e4e" style={{ top: 110, left: 220, animation: 'sb-rise .8s ease 1.1s both' }} />
      <SBFlower size={28} color="#e3a25b" style={{ top: 150, left: 270, animation: 'sb-rise .8s ease 1.2s both' }} />
      <SBFlower size={34} color="#8aa169" style={{ top: 90, left: 1140, animation: 'sb-rise .8s ease 1.1s both' }} />
      <SBFlower size={24} color="#c75e4e" style={{ top: 130, left: 1180, animation: 'sb-rise .8s ease 1.3s both' }} />
      <SBFlower size={38} color="#e3a25b" style={{ bottom: 70, left: 160, animation: 'sb-rise .8s ease 1.4s both' }} />
      <SBFlower size={28} color="#8aa169" style={{ bottom: 110, left: 110, animation: 'sb-rise .8s ease 1.5s both' }} />
      <SBFlower size={32} color="#c75e4e" style={{ bottom: 80, right: 140, animation: 'sb-rise .8s ease 1.4s both' }} />

      {/* paw trail across the bottom toward the next page */}
      <SBPaw size={22} style={{ bottom: 60, left: 350, transform: 'rotate(20deg)' }} delay={1.6} />
      <SBPaw size={22} style={{ bottom: 80, left: 420, transform: 'rotate(-6deg)' }} delay={1.7} />
      <SBPaw size={22} style={{ bottom: 60, left: 490, transform: 'rotate(14deg)' }} delay={1.8} />
      <SBPaw size={22} style={{ bottom: 80, left: 560, transform: 'rotate(-2deg)' }} delay={1.9} />
      <SBPaw size={22} style={{ bottom: 60, left: 630, transform: 'rotate(10deg)' }} delay={2.0} />
      <SBPaw size={22} style={{ bottom: 80, left: 700, transform: 'rotate(-10deg)' }} delay={2.1} />
      <SBPaw size={22} style={{ bottom: 60, left: 770, transform: 'rotate(18deg)' }} delay={2.2} />
      <SBPaw size={22} style={{ bottom: 80, left: 840, transform: 'rotate(-4deg)' }} delay={2.3} />
      <SBPaw size={22} style={{ bottom: 60, left: 910, transform: 'rotate(8deg)' }} delay={2.4} />
      <SBPaw size={22} style={{ bottom: 80, left: 980, transform: 'rotate(-14deg)' }} delay={2.5} />

      {/* footer monospace */}
      <div style={{
        position: 'absolute', bottom: 24, left: 0, right: 0, textAlign: 'center',
        fontFamily: '"Special Elite", monospace', fontSize: 11,
        letterSpacing: '.3em', color: '#7a5a32', opacity: .65,
      }}>
        — R &amp; A · MMXXIV → MMXXVI · 25 MAY 2026 —
      </div>
    </div>
  );
}

window.CoverPage = CoverPage;
