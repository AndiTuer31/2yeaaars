// App — orchestrates the envelope intro and the 4-page scrapbook spread
const { Petals, EnvelopeIntro, CoverPage, MemoriesPage, LetterPage, FinalPage } = window;

function Stage({ children }) {
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    function fit() {
      const w = window.innerWidth, h = window.innerHeight;
      const s = Math.min(w / 1400, h / 900);
      setScale(s);
    }
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      width: 1400, height: 900,
      transform: `translate(-50%, -50%) scale(${scale})`,
      transformOrigin: 'center center',
    }}>
      {children}
    </div>
  );
}

function PageStrip({ page, total, children }) {
  const arr = React.Children.toArray(children);
  return (
    <div style={{ width: 1400, height: 900, overflow: 'hidden', position: 'absolute', inset: 0 }}>
      <div style={{
        display: 'flex', width: `${100 * arr.length}%`, height: '100%',
        transform: `translateX(-${page * (100 / arr.length)}%)`,
        transition: 'transform 1s cubic-bezier(.65,0,.35,1)',
      }}>
        {arr.map((c, i) => (
          <div key={i} style={{ flex: `0 0 ${100 / arr.length}%`, position: 'relative', height: '100%' }}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

function PageNav({ page, total, onChange }) {
  return (
    <>
      {/* prev */}
      {page > 0 && (
        <button
          onClick={() => onChange(page - 1)}
          aria-label="previous page"
          style={{
            position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(255,250,240,.85)', border: '1px solid rgba(110,70,30,.2)',
            cursor: 'pointer', color: '#5a3f22', fontSize: 22,
            boxShadow: '0 6px 14px rgba(70,40,15,.18)',
            fontFamily: 'serif', zIndex: 8,
          }}
        >←</button>
      )}
      {/* next */}
      {page < total - 1 && (
        <button
          onClick={() => onChange(page + 1)}
          aria-label="next page"
          style={{
            position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(255,250,240,.85)', border: '1px solid rgba(110,70,30,.2)',
            cursor: 'pointer', color: '#5a3f22', fontSize: 22,
            boxShadow: '0 6px 14px rgba(70,40,15,.18)',
            fontFamily: 'serif', zIndex: 8,
          }}
        >→</button>
      )}
      {/* dots */}
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 10, zIndex: 8,
        padding: '8px 16px',
        background: 'rgba(40,20,10,.3)',
        borderRadius: 20, backdropFilter: 'blur(6px)',
      }}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            aria-label={`page ${i + 1}`}
            style={{
              width: i === page ? 22 : 10, height: 10, borderRadius: 5,
              background: i === page ? '#fbf3e0' : 'rgba(251,243,224,.45)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all .35s ease',
            }}
          />
        ))}
      </div>
    </>
  );
}

function App() {
  const [opened, setOpened] = React.useState(false);
  const [revealed, setRevealed] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const total = 4;

  React.useEffect(() => {
    if (!opened) return;
    const t = setTimeout(() => setRevealed(true), 50);
    return () => clearTimeout(t);
  }, [opened]);

  // arrow keys
  React.useEffect(() => {
    if (!revealed) return;
    const k = (e) => {
      if (e.key === 'ArrowRight') setPage(p => Math.min(total - 1, p + 1));
      else if (e.key === 'ArrowLeft') setPage(p => Math.max(0, p - 1));
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [revealed]);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at center, #2a1810 0%, #120a06 90%)',
      overflow: 'hidden',
    }}>
      <Petals />

      {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}

      {opened && (
        <div style={{
          position: 'absolute', inset: 0,
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'scale(1)' : 'scale(.92)',
          transition: 'opacity .9s ease, transform 1.1s cubic-bezier(.2,.7,.3,1)',
        }}>
          <Stage>
            <div style={{ position: 'relative', width: 1400, height: 900 }}>
              <PageStrip page={page} total={total}>
                <CoverPage />
                <MemoriesPage />
                <LetterPage active={page === 2} />
                <FinalPage />
              </PageStrip>
              <PageNav page={page} total={total} onChange={setPage} />

              {/* hint on first page only */}
              {page === 0 && (
                <div style={{
                  position: 'absolute', bottom: 64, left: '50%', transform: 'translateX(-50%)',
                  fontFamily: '"Caveat", cursive', fontSize: 22, color: '#7a5a32',
                  animation: 'app-hint 2.5s ease-in-out infinite',
                  pointerEvents: 'none',
                  opacity: .9,
                }}>
                  ↘ turn the page
                </div>
              )}
            </div>
          </Stage>
        </div>
      )}

      <style>{`
        @keyframes app-hint { 0%,100%{transform:translate(calc(-50% + 0px),0); opacity:.6} 50%{transform:translate(calc(-50% + 8px),-4px); opacity:1} }
      `}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
