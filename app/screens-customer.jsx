// Customer-facing screens for The Juice Bar iOS app.
// Each screen is a self-contained function component sized for the iOS frame (402×874).

// ── Menu data (matches /index.html) ──
const MENU = {
  cold: {
    label: 'Coldpressed Juices', icon: 'apple', color: 'green',
    items: [
      { name: 'Green Juice', price: 6.0, color: 'green', desc: 'Komkommer, spinazie, appel & citroen.' },
      { name: 'Beet Boost', price: 6.0, color: 'berry', desc: 'Rode biet, appel, gember.' },
      { name: 'Carrot Juice', price: 6.0, color: 'mango', desc: 'Wortel, sinaasappel, gember.' },
    ],
  },
  blend: {
    label: 'Blended Juices', icon: 'blender', color: 'mango',
    items: [
      { name: 'Tropicana', price: 7.0, color: 'mango', desc: 'Mango, ananas, sinaasappel & citroen.' },
      { name: 'Green Smoothie', price: 7.0, color: 'green', desc: 'Spinazie, ananas, banaan & gember.' },
      { name: 'Watermelon Mix', price: 7.0, color: 'berry', tag: 'seizoen', desc: 'Watermeloen, munt, limoen.' },
      { name: 'Blue Berry Split', price: 7.0, color: 'berry', tag: 'seizoen', desc: 'Bosbessen, banaan, amandelmelk.' },
    ],
  },
  super: {
    label: 'Super Juices', icon: 'bolt', color: 'mango',
    items: [
      { name: 'Booster', price: 8.0, color: 'mango', desc: 'Sinaasappel, gember, kurkuma, citroen.' },
      { name: 'Baobab Boost', price: 6.0, color: 'mango', desc: 'Baobab, mango & passievrucht.' },
      { name: 'Moringa Blend', price: 6.0, color: 'green', desc: 'Moringa, appel, spinazie.' },
    ],
  },
  bites: {
    label: 'Bits & Bites', icon: 'bowl', color: 'berry',
    items: [
      { name: 'Smoothie Bowl', price: 9.5, color: 'berry', desc: 'Açaí, banaan, granola, vers fruit.' },
      { name: 'Chia Parfait', price: 8.0, color: 'mango', desc: 'Chia, kokos, mango, granola.' },
      { name: 'Ginger Shot', price: 3.0, color: 'mango', desc: 'Verse gember, citroen, cayenne.' },
      { name: 'Banana Bread', price: 3.0, color: 'mango', desc: 'Huisgemaakt, vegan.' },
      { name: 'Energy Ball', price: 1.5, color: 'berry', desc: 'Dadel, cacao, kokos.' },
    ],
  },
};

// ────────────────────────────────────────────────────────────
// 1) Splash + Language picker
// ────────────────────────────────────────────────────────────
function ScreenSplash() {
  return (
    <Phone bg={JB.cream200}>
      {/* warm radial */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, #f5dc7c 0%, #f5e6b0 55%, #efd56e 100%)' }}/>
      {/* decorative palm shadow */}
      <svg style={{ position: 'absolute', top: -40, right: -60, width: 320, opacity: 0.12, transform: 'rotate(8deg)', color: JB.forest900 }} viewBox="0 0 600 600" fill="currentColor">
        <g>
          <path d="M 90 30 Q 280 180 480 470 Q 482 478 478 482 Q 472 484 466 478 Q 270 200 84 38 Q 80 32 84 28 Q 88 26 90 30 Z"/>
          <path d="M 110 40 Q 80 10 30 22 Q 70 28 105 60 Z"/>
          <path d="M 140 75 Q 80 50 20 75 Q 95 78 140 95 Z"/>
          <path d="M 180 120 Q 90 105 18 140 Q 110 130 175 145 Z"/>
          <path d="M 230 175 Q 110 175 25 220 Q 130 195 225 200 Z"/>
          <path d="M 285 235 Q 140 250 30 305 Q 160 265 282 260 Z"/>
          <path d="M 345 305 Q 180 335 40 400 Q 195 345 350 330 Z"/>
          <path d="M 405 380 Q 230 425 60 500 Q 240 425 420 410 Z"/>
        </g>
      </svg>

      <div style={{ position: 'relative', padding: '120px 32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <JBLogo size={170} color={JB.forest700}/>
        <h1 className="jb-display" style={{ fontSize: 62, lineHeight: 0.95, margin: '28px 0 0', color: JB.forest700 }}>THE JUICE BAR</h1>
        <div className="jb-display" style={{ fontSize: 30, color: JB.forest700, letterSpacing: 4 }}>Vlissingen</div>
        <p className="jb-script" style={{ fontSize: 26, color: JB.forest700, margin: '14px 0 0' }}>Boost your day</p>
      </div>

      <div style={{ position: 'absolute', left: 24, right: 24, bottom: 70, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <p style={{ textAlign: 'center', fontSize: 12, color: JB.inkSoft, letterSpacing: 2, fontWeight: 700, margin: '0 0 6px' }}>KIES JE TAAL · CHOOSE LANGUAGE</p>
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderRadius: 14, border: `2px solid ${JB.forest700}`, background: JB.forest700, color: JB.cream100, fontFamily: 'inherit', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ fontSize: 22 }}>🇳🇱</span> Nederlands</span>
          <Icon name="check" size={20}/>
        </button>
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderRadius: 14, border: `1.5px solid ${JB.forest700}`, background: 'rgba(251,243,216,0.6)', color: JB.forest700, fontFamily: 'inherit', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ fontSize: 22 }}>🇬🇧</span> English</span>
          <Icon name="chev" size={18}/>
        </button>
      </div>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────
// Customer tab bar
// ────────────────────────────────────────────────────────────
function CustomerTabBar({ active = 'home' }) {
  const items = [
    { id: 'home', icon: 'home', label: 'Menu' },
    { id: 'order', icon: 'clock', label: 'Bestelling', badge: 1 },
    { id: 'profile', icon: 'user', label: 'Profiel' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 88,
      padding: '10px 12px 30px', display: 'flex', gap: 4,
      background: 'rgba(245,230,176,0.85)', backdropFilter: 'blur(20px) saturate(160%)',
      WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      borderTop: `1px solid ${JB.hairline}`,
    }}>
      {items.map(it => (
        <div key={it.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color: it.id === active ? JB.forest700 : JB.inkMute, fontWeight: 600 }}>
          <div style={{ position: 'relative' }}>
            <Icon name={it.icon} size={24} stroke={it.id===active?2:1.6}/>
            {it.badge && <span style={{ position: 'absolute', top: -4, right: -8, minWidth: 16, height: 16, padding: '0 4px', borderRadius: 8, background: JB.berry, color: JB.cream100, fontSize: 10, fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{it.badge}</span>}
          </div>
          <span style={{ fontSize: 10.5, letterSpacing: 0.3 }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// 2) Home / Menu
// ────────────────────────────────────────────────────────────
function ScreenHome() {
  const featured = MENU.blend.items[0]; // Tropicana
  return (
    <Phone bg={JB.cream200}>
      {/* status spacer */}
      <div style={{ height: 56 }}/>

      {/* Header */}
      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="jb-script" style={{ fontSize: 22, color: JB.forest700, lineHeight: 1 }}>Goedemorgen</div>
          <div className="jb-display" style={{ fontSize: 36, color: JB.forest700, lineHeight: 1, marginTop: 2 }}>SOPHIE</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ width: 42, height: 42, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: JB.forest700, position: 'relative' }}>
            <Icon name="bell" size={20}/>
            <span style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 999, background: JB.berry, border: `1.5px solid ${JB.cream50}` }}/>
          </button>
          <JBLogo size={42} color={JB.forest700} withText={false}/>
        </div>
      </div>

      {/* Open status */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 12, background: 'rgba(74,154,58,0.1)', color: JB.forest700, border: `1px solid rgba(74,154,58,0.18)` }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#4a9a3a' }}/>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Nu open · sluit om 17:00</span>
          <span style={{ marginLeft: 'auto', fontSize: 12, color: JB.inkSoft }}>Walstraat 189</span>
        </div>
      </div>

      {/* Featured */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', background: `linear-gradient(125deg, ${JB.mango} 0%, ${JB.mangoDeep} 100%)`, color: JB.cream100, padding: '20px 22px', minHeight: 158 }}>
          {/* decorative leaf */}
          <svg style={{ position: 'absolute', top: -10, right: -10, width: 130, opacity: 0.18, color: JB.cream100 }} viewBox="0 0 24 24"><use href="#"/></svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, opacity: 0.85 }}>TODAY'S PICK</div>
              <div className="jb-display" style={{ fontSize: 40, lineHeight: 1, marginTop: 4 }}>TROPICANA</div>
              <p style={{ fontSize: 13, lineHeight: 1.35, marginTop: 6, opacity: 0.92 }}>Mango, ananas, sinaasappel & citroen — vers gemixt.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
                <span style={{ fontSize: 22, fontWeight: 800 }}>€ 7,00</span>
                <span style={{ padding: '6px 12px', borderRadius: 999, background: JB.cream50, color: JB.forest700, fontSize: 12, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Icon name="plus" size={14}/> Bestel
                </span>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginRight: -8, marginTop: -6 }}>
              <CupVisual color="mango" size={96}/>
            </div>
          </div>
        </div>
      </div>

      {/* Categories scroller */}
      <div style={{ padding: '18px 0 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 10, padding: '0 20px', overflowX: 'auto' }}>
          {[
            { l: 'Alle', a: true },
            { l: 'Coldpressed' },
            { l: 'Smoothies' },
            { l: 'Super Juices' },
            { l: 'Bites' },
          ].map(c => (
            <div key={c.l} style={{
              padding: '8px 16px', borderRadius: 999, whiteSpace: 'nowrap',
              background: c.a ? JB.forest700 : JB.cream50,
              color: c.a ? JB.cream100 : JB.forest700,
              border: c.a ? 'none' : `1px solid ${JB.hairline}`,
              fontSize: 13, fontWeight: 700,
            }}>{c.l}</div>
          ))}
        </div>
      </div>

      {/* Menu list */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <h3 className="jb-display" style={{ fontSize: 26, color: JB.forest700, margin: 0 }}>POPULAIR</h3>
          <span style={{ fontSize: 12, color: JB.inkSoft, fontWeight: 600 }}>Toon alles ›</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[MENU.blend.items[1], MENU.cold.items[0], MENU.super.items[0]].map(it => (
            <ProductRow key={it.name} item={it}/>
          ))}
        </div>
      </div>

      <div style={{ height: 130 }}/>
      <CustomerTabBar active="home"/>
    </Phone>
  );
}

function ProductRow({ item }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 12, background: JB.surface2, borderRadius: 16, border: `1px solid ${JB.hairline}` }}>
      <div style={{ width: 68, height: 68, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${JB[item.color]}22 0%, ${JB[item.color]}55 100%)`, flexShrink: 0 }}>
        <CupVisual color={item.color} size={48}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: JB.forest700 }}>{item.name}</div>
        <div style={{ fontSize: 12, color: JB.inkSoft, lineHeight: 1.35, marginTop: 2 }}>{item.desc}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
        <span style={{ fontWeight: 800, fontSize: 15, color: JB.forest700 }}>€ {item.price.toFixed(2).replace('.', ',')}</span>
        <button style={{ width: 30, height: 30, borderRadius: 999, background: JB.forest700, color: JB.cream100, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
          <Icon name="plus" size={16} stroke={2.4}/>
        </button>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// 3) Product detail
// ────────────────────────────────────────────────────────────
function ScreenProductDetail() {
  return (
    <Phone bg={JB.cream200}>
      {/* Hero with cup */}
      <div style={{ position: 'relative', height: 420, background: `linear-gradient(180deg, ${JB.mango} 0%, ${JB.mangoDeep} 100%)`, overflow: 'hidden' }}>
        {/* status spacer (white pseudo) */}
        <div style={{ height: 56 }}/>

        {/* nav */}
        <div style={{ position: 'absolute', top: 60, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.92)', color: JB.forest700, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Icon name="back" size={20}/>
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.92)', color: JB.forest700, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Icon name="heart" size={20}/>
            </button>
            <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.92)', color: JB.forest700, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Icon name="dots" size={20}/>
            </button>
          </div>
        </div>

        {/* decorative leaf scribbles */}
        <svg style={{ position: 'absolute', top: 90, left: -30, width: 160, opacity: 0.16, color: '#fff' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 4c0 8-4 14-12 14a8 8 0 0 1 0-16c4 0 6 1 12 2zM4 20c4-4 9-7 14-8"/></svg>
        <svg style={{ position: 'absolute', bottom: -10, right: -20, width: 200, opacity: 0.12, color: '#fff', transform: 'rotate(180deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 4c0 8-4 14-12 14a8 8 0 0 1 0-16c4 0 6 1 12 2zM4 20c4-4 9-7 14-8"/></svg>

        {/* big cup */}
        <div style={{ position: 'absolute', left: '50%', top: 130, transform: 'translateX(-50%)' }}>
          <CupVisual color="mango" size={220}/>
        </div>

        {/* category badge */}
        <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
          <span className="jb-script" style={{ fontSize: 22, color: 'rgba(255,255,255,0.9)' }}>Blended Juice</span>
        </div>
      </div>

      {/* Content sheet */}
      <div style={{ background: JB.cream200, borderRadius: '28px 28px 0 0', marginTop: -28, padding: '24px 22px 130px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <h1 className="jb-display" style={{ fontSize: 52, lineHeight: 0.95, color: JB.forest700, margin: 0 }}>TROPICANA</h1>
            <p className="jb-script" style={{ fontSize: 22, color: JB.gold, margin: '4px 0 0' }}>Boost your day</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>VANAF</div>
            <div className="jb-display" style={{ fontSize: 44, color: JB.forest700, lineHeight: 1 }}>€ 7,00</div>
          </div>
        </div>

        <p style={{ fontSize: 14.5, lineHeight: 1.55, color: JB.ink, margin: '16px 0 0' }}>
          Een tropisch zonnetje in een beker. Verse mango en ananas geblend met sinaasappel en een spatje citroen — boordevol vitamine C.
        </p>

        {/* Ingredients */}
        <div style={{ marginTop: 22 }}>
          <h3 className="jb-display" style={{ fontSize: 22, color: JB.forest700, margin: '0 0 10px', letterSpacing: 2 }}>INGREDIËNTEN</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Mango', 'Ananas', 'Sinaasappel', 'Citroen'].map(t => (
              <span key={t} style={{ padding: '8px 14px', borderRadius: 999, background: JB.cream50, color: JB.forest700, fontSize: 13, fontWeight: 600, border: `1px solid ${JB.hairline}` }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Nutrition */}
        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[
            { l: 'Calorieën', v: '180' },
            { l: 'Vitamine C', v: '120%' },
            { l: 'Suiker (vrij)', v: '0g' },
          ].map(s => (
            <div key={s.l} style={{ padding: 12, background: JB.surface2, borderRadius: 14, textAlign: 'center', border: `1px solid ${JB.hairline}` }}>
              <div className="jb-display" style={{ fontSize: 24, color: JB.forest700, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 0.6, marginTop: 4, textTransform: 'uppercase' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom action bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 18px 30px', background: 'rgba(251,243,216,0.92)', backdropFilter: 'blur(16px)', borderTop: `1px solid ${JB.hairline}`, display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* qty stepper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, background: JB.cream50, borderRadius: 999, border: `1.5px solid ${JB.forest700}`, overflow: 'hidden' }}>
          <button style={{ width: 36, height: 44, background: 'transparent', border: 'none', color: JB.forest700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="minus" size={18} stroke={2.4}/>
          </button>
          <div style={{ width: 28, textAlign: 'center', fontWeight: 800, color: JB.forest700, fontSize: 17 }}>2</div>
          <button style={{ width: 36, height: 44, background: 'transparent', border: 'none', color: JB.forest700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="plus" size={18} stroke={2.4}/>
          </button>
        </div>
        <Btn size="lg" icon="cart" full style={{ flex: 1 }}>Toevoegen · € 14,00</Btn>
      </div>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────
// 4) Cart
// ────────────────────────────────────────────────────────────
function ScreenCart() {
  const items = [
    { name: 'Tropicana', q: 2, price: 7.0, color: 'mango' },
    { name: 'Green Smoothie', q: 1, price: 7.0, color: 'green' },
    { name: 'Ginger Shot', q: 2, price: 3.0, color: 'mango' },
  ];
  const subtotal = items.reduce((a,b)=>a+b.q*b.price,0);
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Icon name="back" size={20}/>
        </button>
        <h1 className="jb-display" style={{ fontSize: 32, color: JB.forest700, margin: 0 }}>JOUW MANDJE</h1>
        <div style={{ width: 40 }}/>
      </div>

      <div style={{ padding: '20px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 12, background: JB.surface2, borderRadius: 16, border: `1px solid ${JB.hairline}` }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${JB[it.color]}22`, flexShrink: 0 }}>
              <CupVisual color={it.color} size={40}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: JB.forest700 }}>{it.name}</div>
              <div style={{ fontSize: 12.5, color: JB.inkSoft, marginTop: 2 }}>€ {it.price.toFixed(2).replace('.',',')} per stuk</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: JB.cream50, borderRadius: 999, border: `1px solid ${JB.hairline}`, padding: 3 }}>
              <button style={{ width: 26, height: 26, borderRadius: 999, background: 'transparent', border: 'none', color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Icon name="minus" size={14}/></button>
              <span style={{ width: 18, textAlign: 'center', fontWeight: 800, color: JB.forest700 }}>{it.q}</span>
              <button style={{ width: 26, height: 26, borderRadius: 999, background: JB.forest700, color: JB.cream100, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Icon name="plus" size={14} stroke={2.4}/></button>
            </div>
          </div>
        ))}
      </div>

      {/* Promo input */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: JB.surface2, borderRadius: 14, border: `1px dashed ${JB.forest700}` }}>
          <Icon name="gift" size={18} style={{ color: JB.gold }}/>
          <span style={{ flex: 1, color: JB.forest700, fontWeight: 600, fontSize: 13.5 }}>Spaarkaart · nog 2 sappen tot gratis sap</span>
          <Icon name="chev" size={16} style={{ color: JB.inkSoft }}/>
        </div>
      </div>

      {/* Summary */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ background: JB.surface2, borderRadius: 16, padding: '14px 16px', border: `1px solid ${JB.hairline}` }}>
          <Row k="Subtotaal" v={`€ ${subtotal.toFixed(2).replace('.',',')}`}/>
          <Row k="Aantal items" v={items.reduce((a,b)=>a+b.q,0)}/>
          <div style={{ height: 1, background: JB.hairline, margin: '10px 0' }}/>
          <Row k={<span className="jb-display" style={{ fontSize: 18 }}>TOTAAL</span>} v={<span className="jb-display" style={{ fontSize: 22 }}>€ {subtotal.toFixed(2).replace('.',',')}</span>}/>
          <p style={{ fontSize: 11.5, color: JB.inkSoft, margin: '8px 0 0', textAlign: 'right' }}>Je rekent af aan de bar bij het ophalen</p>
        </div>
      </div>

      <div style={{ height: 140 }}/>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 18px 30px', background: 'rgba(251,243,216,0.92)', backdropFilter: 'blur(16px)', borderTop: `1px solid ${JB.hairline}` }}>
        <Btn size="lg" icon="clock" full>Kies ophaaltijd</Btn>
      </div>
    </Phone>
  );
}

function Row({ k, v }) {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', color: JB.forest700 }}>
    <span style={{ fontSize: 14, color: JB.inkSoft, fontWeight: 600 }}>{k}</span>
    <span style={{ fontSize: 15, fontWeight: 800 }}>{v}</span>
  </div>;
}

// ────────────────────────────────────────────────────────────
// 5) Pickup time picker
// ────────────────────────────────────────────────────────────
function ScreenPickup() {
  const slots = [
    { t: '11:30', label: 'Over 15 min', wait: 'rustig' },
    { t: '11:45', label: 'Over 30 min', wait: 'rustig' },
    { t: '12:00', label: 'Lunchtijd', wait: 'druk' },
    { t: '12:15', label: '', wait: 'druk' },
    { t: '12:30', label: '', wait: 'druk' },
    { t: '12:45', label: '', wait: 'matig' },
    { t: '13:00', label: '', wait: 'matig' },
    { t: '13:15', label: '', wait: 'rustig' },
    { t: '13:30', label: '', wait: 'rustig' },
  ];
  const waitColors = { rustig: '#4a9a3a', matig: JB.gold, druk: JB.berry };
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20}/>
        </button>
        <h1 className="jb-display" style={{ fontSize: 28, color: JB.forest700, margin: 0 }}>OPHAALTIJD</h1>
        <div style={{ width: 40 }}/>
      </div>

      <div style={{ padding: '18px 20px 0' }}>
        <Card pad={18}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${JB.gold}22`, color: JB.gold, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="pin" size={22}/></div>
            <div>
              <div style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>OPHALEN BIJ</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: JB.forest700 }}>The Juice Bar · Walstraat 189</div>
              <div style={{ fontSize: 12, color: JB.inkSoft }}>4381 GR Vlissingen · 8 min lopen</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Date picker */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { d: 'Vandaag', x: 'di 21 mei', a: true },
            { d: 'Morgen', x: 'wo 22 mei' },
            { d: 'Do', x: '23 mei' },
          ].map(d => (
            <div key={d.x} style={{ flex: 1, padding: '10px 8px', textAlign: 'center', borderRadius: 12, background: d.a?JB.forest700:JB.cream50, color: d.a?JB.cream100:JB.forest700, border: d.a?'none':`1px solid ${JB.hairline}` }}>
              <div style={{ fontSize: 13, fontWeight: 800 }}>{d.d}</div>
              <div style={{ fontSize: 11, opacity: 0.75, marginTop: 2 }}>{d.x}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slot list */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <h3 className="jb-display" style={{ fontSize: 22, color: JB.forest700, margin: 0 }}>BESCHIKBARE TIJDEN</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: JB.inkSoft }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#4a9a3a' }}/>Rustig
            <span style={{ width: 8, height: 8, borderRadius: 999, background: JB.gold, marginLeft: 6 }}/>Druk
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {slots.map((s, i) => {
            const active = i === 1;
            return (
              <div key={s.t} style={{
                padding: '14px 8px', textAlign: 'center',
                borderRadius: 14,
                background: active ? JB.forest700 : JB.surface2,
                color: active ? JB.cream100 : JB.forest700,
                border: active ? 'none' : `1.5px solid ${JB.hairline}`,
                position: 'relative',
              }}>
                <div style={{ fontSize: 18, fontWeight: 800 }}>{s.t}</div>
                {s.label && <div style={{ fontSize: 10, opacity: active?0.85:0.6, marginTop: 2 }}>{s.label}</div>}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: waitColors[s.wait] }}/>
                  <span style={{ fontSize: 10, opacity: active?0.85:0.65 }}>{s.wait}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ height: 130 }}/>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 18px 30px', background: 'rgba(251,243,216,0.92)', backdropFilter: 'blur(16px)', borderTop: `1px solid ${JB.hairline}` }}>
        <Btn size="lg" icon="check" full>Bevestig · 11:45 vandaag</Btn>
      </div>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────
// 6) Confirmation
// ────────────────────────────────────────────────────────────
function ScreenConfirmation() {
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '40px 28px 0', textAlign: 'center' }}>
        <div style={{ width: 110, height: 110, borderRadius: 999, background: `${JB.forest700}`, color: JB.cream100, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 30px -10px rgba(58,90,28,0.45)' }}>
          <Icon name="check" size={56} stroke={2.6}/>
        </div>
        <h1 className="jb-display" style={{ fontSize: 48, color: JB.forest700, margin: '20px 0 0', lineHeight: 1 }}>BEDANKT!</h1>
        <p className="jb-script" style={{ fontSize: 24, color: JB.gold, margin: '4px 0 0' }}>Je bestelling is geplaatst</p>
        <p style={{ fontSize: 14.5, color: JB.inkSoft, margin: '10px 16px 0', lineHeight: 1.5 }}>
          We zijn er meteen mee aan de slag. Reken af aan de bar wanneer je je bestelling ophaalt.
        </p>
      </div>

      {/* QR card */}
      <div style={{ padding: '24px 20px 0' }}>
        <Card pad={20}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1.2 }}>BESTELNUMMER</div>
              <div className="jb-display" style={{ fontSize: 42, color: JB.forest700, lineHeight: 1, marginTop: 2 }}>#A-247</div>
              <div style={{ fontSize: 13, color: JB.inkSoft, marginTop: 6 }}>Ophalen om <b style={{ color: JB.forest700 }}>11:45</b> · vandaag</div>
            </div>
            <div style={{ width: 100, height: 100, padding: 6, background: '#fff', borderRadius: 12, border: `1px solid ${JB.hairline}` }}>
              <QRPlaceholder/>
            </div>
          </div>
          <div style={{ marginTop: 16, padding: 12, borderRadius: 12, background: 'rgba(74,154,58,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="bell" size={18} style={{ color: JB.forest700 }}/>
            <span style={{ fontSize: 12.5, color: JB.forest700, fontWeight: 600, flex: 1 }}>We sturen een melding als je bestelling klaar staat</span>
          </div>
        </Card>
      </div>

      {/* Order summary */}
      <div style={{ padding: '14px 20px 0' }}>
        <Card pad={16}>
          <div style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1.2, marginBottom: 8 }}>JE BESTELLING</div>
          {[
            ['2× Tropicana', '€ 14,00'],
            ['1× Green Smoothie', '€ 7,00'],
            ['2× Ginger Shot', '€ 6,00'],
          ].map(([k,v]) => <Row key={k} k={k} v={v}/>)}
          <div style={{ height: 1, background: JB.hairline, margin: '8px 0' }}/>
          <Row k={<b>Totaal · te betalen aan de bar</b>} v={<span className="jb-display" style={{ fontSize: 20 }}>€ 27,00</span>}/>
        </Card>
      </div>

      <div style={{ height: 130 }}/>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 18px 30px', background: 'rgba(251,243,216,0.92)', backdropFilter: 'blur(16px)', borderTop: `1px solid ${JB.hairline}`, display: 'flex', gap: 10 }}>
        <Btn variant="secondary" size="lg" icon="pin" style={{ flex: 1 }}>Route</Btn>
        <Btn size="lg" icon="clock" style={{ flex: 1.4 }}>Volg bestelling</Btn>
      </div>
    </Phone>
  );
}

function QRPlaceholder() {
  // Static-looking pseudo QR: 9×9 grid + 3 finder patterns. Decorative.
  const cells = [];
  const seed = [0x1, 0x6F, 0xA3, 0x5C, 0xD2, 0x39, 0xB8, 0x47, 0xE1];
  for (let y = 0; y < 9; y++) for (let x = 0; x < 9; x++) {
    if ((seed[y] >> x) & 1) cells.push([x, y]);
  }
  return (
    <svg viewBox="0 0 9 9" style={{ width: '100%', height: '100%', display: 'block' }}>
      {/* finder patterns */}
      {[[0,0],[6,0],[0,6]].map(([fx,fy], i) => (
        <g key={i}>
          <rect x={fx} y={fy} width="3" height="3" fill={JB.forest700}/>
          <rect x={fx+0.5} y={fy+0.5} width="2" height="2" fill="#fff"/>
          <rect x={fx+1} y={fy+1} width="1" height="1" fill={JB.forest700}/>
        </g>
      ))}
      {cells.map(([x,y], i) => (
        ((x<3&&y<3) || (x>5&&y<3) || (x<3&&y>5)) ? null :
        <rect key={i} x={x} y={y} width="1" height="1" fill={JB.forest700}/>
      ))}
    </svg>
  );
}

// ────────────────────────────────────────────────────────────
// 7) Order Status tracker
// ────────────────────────────────────────────────────────────
function ScreenOrderStatus() {
  const steps = [
    { l: 'Ontvangen', t: '11:32', icon: 'check', done: true },
    { l: 'Geaccepteerd', t: '11:34', icon: 'check', done: true },
    { l: 'In bereiding', t: 'nu', icon: 'flame', active: true },
    { l: 'Klaar om op te halen', t: '~11:45', icon: 'cup' },
  ];
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20}/>
        </button>
        <div style={{ textAlign: 'center' }}>
          <h1 className="jb-display" style={{ fontSize: 26, color: JB.forest700, margin: 0 }}>BESTELLING</h1>
          <div style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>#A-247</div>
        </div>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="phone" size={18}/>
        </button>
      </div>

      {/* Hero status card */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ borderRadius: 22, background: `linear-gradient(135deg, ${JB.forest700} 0%, ${JB.forest800} 100%)`, color: JB.cream100, padding: '20px 22px', position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', top: -20, right: -20, width: 160, opacity: 0.15, color: JB.cream100 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 4c0 8-4 14-12 14a8 8 0 0 1 0-16c4 0 6 1 12 2zM4 20c4-4 9-7 14-8"/></svg>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, opacity: 0.8 }}>STATUS</div>
          <div className="jb-display" style={{ fontSize: 42, lineHeight: 1, marginTop: 4 }}>IN BEREIDING</div>
          <p style={{ fontSize: 13.5, marginTop: 6, opacity: 0.92 }}>We persen je sap nu. Klaar om <b>~11:45</b>.</p>
          {/* progress bar */}
          <div style={{ marginTop: 16, height: 6, borderRadius: 999, background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
            <div style={{ width: '62%', height: '100%', background: JB.gold, borderRadius: 999 }}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, opacity: 0.75 }}>
            <span>11:32</span>
            <span>~13 min te gaan</span>
            <span>11:45</span>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((s, i) => {
            const stroke = s.done || s.active ? JB.forest700 : JB.hairline;
            return (
              <div key={s.l} style={{ display: 'flex', gap: 14, position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 999,
                    background: s.done ? JB.forest700 : s.active ? JB.gold : JB.cream50,
                    color: (s.done || s.active) ? JB.cream100 : JB.inkSoft,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: s.active ? 'none' : `1.5px solid ${stroke}`,
                    boxShadow: s.active ? `0 0 0 6px ${JB.gold}22` : 'none',
                  }}>
                    <Icon name={s.icon} size={18} stroke={2.2}/>
                  </div>
                  {i < steps.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 32, background: s.done ? JB.forest700 : JB.hairline, marginTop: 4 }}/>}
                </div>
                <div style={{ paddingBottom: 24, flex: 1 }}>
                  <div style={{ fontWeight: 800, color: (s.done||s.active) ? JB.forest700 : JB.inkSoft, fontSize: 15 }}>{s.l}</div>
                  <div style={{ fontSize: 12, color: JB.inkSoft, marginTop: 2 }}>{s.t}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tip card */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ padding: 14, background: `${JB.gold}1A`, borderRadius: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Icon name="pin" size={20} style={{ color: JB.gold }}/>
          <span style={{ flex: 1, fontSize: 13, color: JB.forest700, fontWeight: 600 }}>Walstraat 189 · 8 min lopen</span>
          <Btn variant="ghost" size="sm" icon="chev">Route</Btn>
        </div>
      </div>

      <div style={{ height: 120 }}/>
      <CustomerTabBar active="order"/>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────
// 8) Profile
// ────────────────────────────────────────────────────────────
function ScreenProfile() {
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="jb-display" style={{ fontSize: 34, color: JB.forest700, margin: 0 }}>PROFIEL</h1>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="cog" size={20}/>
        </button>
      </div>

      {/* Profile header */}
      <div style={{ padding: '18px 20px 0' }}>
        <Card pad={18}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 60, height: 60, borderRadius: 999, background: `linear-gradient(135deg, ${JB.mango} 0%, ${JB.berry} 100%)`, color: JB.cream100, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Amatic SC', fontSize: 30, fontWeight: 700 }}>
              SD
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 17, color: JB.forest700 }}>Sophie de Vries</div>
              <div style={{ fontSize: 13, color: JB.inkSoft }}>sophie@example.nl</div>
            </div>
            <Icon name="chev" size={20} style={{ color: JB.inkMute }}/>
          </div>
        </Card>
      </div>

      {/* Loyalty card */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ position: 'relative', borderRadius: 22, padding: '20px 22px', background: `linear-gradient(135deg, ${JB.forest700} 0%, ${JB.forest900} 100%)`, color: JB.cream100, overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', top: -10, right: -10, width: 130, opacity: 0.15, color: JB.cream100 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 4c0 8-4 14-12 14a8 8 0 0 1 0-16c4 0 6 1 12 2zM4 20c4-4 9-7 14-8"/></svg>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, opacity: 0.85 }}>SPAARKAART</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
            <span className="jb-display" style={{ fontSize: 40, lineHeight: 1 }}>8</span>
            <span style={{ opacity: 0.85, fontSize: 14 }}>/ 10 sappen tot gratis sap</span>
          </div>
          {/* dots */}
          <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} style={{
                flex: 1, height: 26, borderRadius: 6,
                background: i < 8 ? JB.gold : 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {i < 8 && <Icon name="check" size={14} stroke={2.4} style={{ color: JB.forest900 }}/>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History */}
      <div style={{ padding: '20px 20px 0' }}>
        <h3 className="jb-display" style={{ fontSize: 22, color: JB.forest700, margin: '0 0 10px' }}>RECENTE BESTELLINGEN</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { id: '#A-247', date: 'Vandaag · 11:32', items: 'Tropicana × 2, Green Smoothie, Ginger Shot × 2', total: '€ 27,00', status: 'In bereiding', statusColor: JB.gold },
            { id: '#A-239', date: 'Gister · 09:15', items: 'Green Juice, Banana Bread', total: '€ 9,00', status: 'Afgerond', statusColor: '#4a9a3a' },
            { id: '#A-218', date: '17 mei · 16:40', items: 'Smoothie Bowl, Beet Boost', total: '€ 15,50', status: 'Afgerond', statusColor: '#4a9a3a' },
          ].map(o => (
            <div key={o.id} style={{ background: JB.surface2, borderRadius: 14, padding: 12, border: `1px solid ${JB.hairline}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, color: JB.forest700, fontSize: 14 }}>{o.id}</span>
                <Pill bg={`${o.statusColor}22`} color={o.statusColor}>{o.status}</Pill>
              </div>
              <div style={{ fontSize: 12, color: JB.inkSoft, marginTop: 4 }}>{o.date}</div>
              <div style={{ fontSize: 13, color: JB.forest700, marginTop: 6 }}>{o.items}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: JB.forest700, marginTop: 6 }}>{o.total}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 130 }}/>
      <CustomerTabBar active="profile"/>
    </Phone>
  );
}

Object.assign(window, {
  ScreenSplash, ScreenHome, ScreenProductDetail, ScreenCart,
  ScreenPickup, ScreenConfirmation, ScreenOrderStatus, ScreenProfile,
  CustomerTabBar, MENU,
});
