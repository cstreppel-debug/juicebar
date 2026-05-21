// Admin-facing screens for The Juice Bar iOS app.
// Gated by login; admin sees orders, stats, products and settings.

function AdminTabBar({ active = 'orders' }) {
  const items = [
    { id: 'orders', icon: 'list', label: 'Bestellingen', badge: 3 },
    { id: 'stats', icon: 'stats', label: 'Stats' },
    { id: 'products', icon: 'box', label: 'Producten' },
    { id: 'settings', icon: 'cog', label: 'Instellingen' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 88,
      padding: '10px 8px 30px', display: 'flex', gap: 2,
      background: 'rgba(35,54,15,0.94)', backdropFilter: 'blur(20px) saturate(160%)',
      WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      borderTop: `1px solid rgba(255,255,255,0.06)`,
    }}>
      {items.map(it => (
        <div key={it.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color: it.id === active ? JB.cream100 : 'rgba(251,243,216,0.45)', fontWeight: 600 }}>
          <div style={{ position: 'relative' }}>
            <Icon name={it.icon} size={22} stroke={it.id===active?2.2:1.7}/>
            {it.badge && <span style={{ position: 'absolute', top: -3, right: -8, minWidth: 16, height: 16, padding: '0 4px', borderRadius: 8, background: JB.gold, color: JB.forest900, fontSize: 10, fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{it.badge}</span>}
          </div>
          <span style={{ fontSize: 10, letterSpacing: 0.3 }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// 9) Admin login
// ────────────────────────────────────────────────────────────
function ScreenAdminLogin() {
  return (
    <Phone bg={JB.forest800}>
      {/* Backdrop */}
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 0%, ${JB.forest500} 0%, ${JB.forest800} 60%, ${JB.forest900} 100%)` }}/>
      <svg style={{ position: 'absolute', top: 40, right: -50, width: 240, opacity: 0.1, color: JB.cream100 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 4c0 8-4 14-12 14a8 8 0 0 1 0-16c4 0 6 1 12 2zM4 20c4-4 9-7 14-8"/></svg>

      <div style={{ position: 'relative', padding: '100px 32px 0', textAlign: 'center', color: JB.cream100 }}>
        <JBLogo size={120} color={JB.cream100}/>
        <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, border: `1px solid rgba(251,243,216,0.25)`, background: 'rgba(0,0,0,0.18)', fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>
          <Icon name="lock" size={12} stroke={2.2}/> ADMIN
        </div>
        <h1 className="jb-display" style={{ fontSize: 52, margin: '14px 0 0', lineHeight: 0.95 }}>WELKOM TERUG</h1>
        <p style={{ fontSize: 14.5, opacity: 0.78, margin: '8px 24px 0', lineHeight: 1.5 }}>
          Log in om bestellingen en je winkel te beheren.
        </p>
      </div>

      <div style={{ position: 'absolute', left: 24, right: 24, bottom: 60, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Email */}
        <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: '12px 16px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Icon name="user" size={18} style={{ color: 'rgba(251,243,216,0.55)' }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: 'rgba(251,243,216,0.5)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>E-mailadres</div>
            <div style={{ fontSize: 15, color: JB.cream100, fontWeight: 600, marginTop: 2 }}>info@juice-bar.nl</div>
          </div>
        </div>
        {/* Pin */}
        <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: '12px 16px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Icon name="lock" size={18} style={{ color: 'rgba(251,243,216,0.55)' }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: 'rgba(251,243,216,0.5)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Wachtwoord</div>
            <div style={{ fontSize: 18, color: JB.cream100, fontWeight: 600, marginTop: 2, letterSpacing: 4 }}>••••••••</div>
          </div>
          <Icon name="eye" size={18} style={{ color: 'rgba(251,243,216,0.55)' }}/>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(251,243,216,0.75)', fontSize: 13 }}>
            <span style={{ width: 18, height: 18, borderRadius: 5, background: JB.gold, color: JB.forest900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={12} stroke={3}/></span>
            Onthoud mij
          </label>
          <span style={{ fontSize: 13, color: JB.gold, fontWeight: 700 }}>Wachtwoord vergeten?</span>
        </div>

        <button style={{
          marginTop: 8, padding: '16px 20px', borderRadius: 14, border: 'none',
          background: JB.gold, color: JB.forest900, fontFamily: 'inherit', fontSize: 16, fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, cursor: 'pointer',
          boxShadow: '0 12px 28px -10px rgba(185,150,47,0.55)',
        }}>
          <Icon name="chev" size={18} stroke={2.4}/> Inloggen
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 4, color: 'rgba(251,243,216,0.55)', fontSize: 12 }}>
          <Icon name="lock" size={12}/> Beveiligd met Face ID
        </div>
      </div>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────
// 10) Admin Dashboard — live orders
// ────────────────────────────────────────────────────────────
const LIVE_ORDERS = [
  { id: '#A-247', name: 'Sophie de V.', items: 'Tropicana × 2, Green Smoothie, Ginger × 2', total: '€ 27,00', pickup: '11:45', status: 'new', mins: 13 },
  { id: '#A-246', name: 'Jeroen K.', items: 'Beet Boost, Banana Bread', total: '€ 9,00', pickup: '11:40', status: 'prep', mins: 8 },
  { id: '#A-245', name: 'Lisa B.', items: 'Smoothie Bowl, Booster', total: '€ 17,50', pickup: '11:35', status: 'ready', mins: 3 },
  { id: '#A-244', name: 'Mo H.', items: 'Carrot Juice × 3, Ginger Shot', total: '€ 21,00', pickup: '11:30', status: 'prep', mins: -2 },
];

const STATUS = {
  new:   { l: 'Nieuw',         bg: JB.gold, color: JB.forest900 },
  prep:  { l: 'In bereiding',  bg: '#cf7c2a', color: '#fff' },
  ready: { l: 'Klaar',         bg: '#2f7a2d', color: '#fff' },
  done:  { l: 'Opgehaald',     bg: JB.inkMute, color: '#fff' },
};

function ScreenAdminDashboard() {
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      {/* Top bar */}
      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="jb-script" style={{ fontSize: 20, color: JB.inkSoft, lineHeight: 1 }}>Vandaag</div>
          <div className="jb-display" style={{ fontSize: 32, color: JB.forest700, lineHeight: 1, marginTop: 2 }}>BESTELLINGEN</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* online toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, background: 'rgba(74,154,58,0.14)', border: '1px solid rgba(74,154,58,0.3)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#4a9a3a', boxShadow: '0 0 0 4px rgba(74,154,58,0.25)' }}/>
            <span style={{ fontSize: 12, fontWeight: 800, color: JB.forest700 }}>OPEN</span>
          </div>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="bell" size={18}/>
          </button>
        </div>
      </div>

      {/* Top stats strip */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { l: 'Nieuw', v: '1', accent: JB.gold },
            { l: 'In bereiding', v: '2', accent: '#cf7c2a' },
            { l: 'Klaar', v: '1', accent: '#2f7a2d' },
          ].map(s => (
            <div key={s.l} style={{ background: JB.surface2, borderRadius: 14, padding: '10px 12px', border: `1px solid ${JB.hairline}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: s.accent }}/>
                <span style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>{s.l}</span>
              </div>
              <div className="jb-display" style={{ fontSize: 30, color: JB.forest700, lineHeight: 1, marginTop: 2 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab filter */}
      <div style={{ padding: '14px 20px 0', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {[
          { l: 'Live (4)', a: true },
          { l: 'Nieuw (1)' },
          { l: 'Klaar (1)' },
          { l: 'Opgehaald' },
        ].map(c => (
          <span key={c.l} style={{ padding: '6px 12px', borderRadius: 999, whiteSpace: 'nowrap', background: c.a?JB.forest700:'transparent', color: c.a?JB.cream100:JB.inkSoft, border: c.a?'none':`1px solid ${JB.hairline}`, fontSize: 12, fontWeight: 700 }}>{c.l}</span>
        ))}
      </div>

      {/* Order list */}
      <div style={{ padding: '14px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {LIVE_ORDERS.map(o => <OrderListItem key={o.id} o={o}/>)}
      </div>

      <div style={{ height: 130 }}/>
      <AdminTabBar active="orders"/>
    </Phone>
  );
}

function OrderListItem({ o }) {
  const st = STATUS[o.status];
  const overdue = o.mins < 0;
  return (
    <div style={{ background: JB.surface2, borderRadius: 16, padding: 14, border: `1px solid ${overdue ? 'rgba(169,36,36,0.35)' : JB.hairline}`, position: 'relative', overflow: 'hidden' }}>
      {o.status === 'new' && (
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: JB.gold }}/>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="jb-display" style={{ fontSize: 24, color: JB.forest700, letterSpacing: 1 }}>{o.id}</span>
            <Pill bg={st.bg} color={st.color}>{st.l}</Pill>
          </div>
          <div style={{ fontSize: 13, color: JB.inkSoft, marginTop: 2 }}>{o.name}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 0.5 }}>OPHALEN</div>
          <div className="jb-display" style={{ fontSize: 24, color: overdue ? JB.bad : JB.forest700, lineHeight: 1 }}>{o.pickup}</div>
          <div style={{ fontSize: 11, color: overdue ? JB.bad : JB.inkSoft, fontWeight: 600, marginTop: 2 }}>
            {overdue ? `${-o.mins} min te laat` : `over ${o.mins} min`}
          </div>
        </div>
      </div>
      <div style={{ fontSize: 13, color: JB.forest700, marginTop: 8, lineHeight: 1.4 }}>{o.items}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: JB.forest700 }}>{o.total}</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {o.status === 'new' && (
            <>
              <Btn variant="danger" size="sm" icon="x">Weiger</Btn>
              <Btn size="sm" icon="check">Accepteer</Btn>
            </>
          )}
          {o.status === 'prep' && <Btn size="sm" icon="check">Markeer klaar</Btn>}
          {o.status === 'ready' && <Btn variant="secondary" size="sm" icon="check">Markeer opgehaald</Btn>}
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// 11) New order alert (full-screen)
// ────────────────────────────────────────────────────────────
function ScreenNewOrderAlert() {
  return (
    <Phone bg={JB.forest900}>
      {/* Dim backdrop showing dashboard underneath */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(35,54,15,0.85)' }}/>
      {/* pulsing rings */}
      <svg style={{ position: 'absolute', top: 130, left: '50%', transform: 'translateX(-50%)', width: 320 }} viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="140" fill="none" stroke={JB.gold} strokeWidth="1" opacity="0.18"/>
        <circle cx="160" cy="160" r="100" fill="none" stroke={JB.gold} strokeWidth="1.5" opacity="0.3"/>
        <circle cx="160" cy="160" r="64" fill={JB.gold} opacity="0.18"/>
      </svg>

      {/* Bell icon */}
      <div style={{ position: 'absolute', top: 220, left: '50%', transform: 'translateX(-50%)', width: 92, height: 92, borderRadius: 999, background: JB.gold, color: JB.forest900, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 30px -8px rgba(185,150,47,0.6)' }}>
        <Icon name="bell" size={44} stroke={2.4}/>
      </div>

      <div style={{ position: 'absolute', top: 340, left: 24, right: 24, textAlign: 'center', color: JB.cream100 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: JB.gold, color: JB.forest900, fontSize: 11, letterSpacing: 2, fontWeight: 800 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: JB.forest900 }}/> NIEUWE BESTELLING
        </div>
        <h1 className="jb-display" style={{ fontSize: 56, lineHeight: 0.95, margin: '14px 0 0' }}>#A-248</h1>
        <p className="jb-script" style={{ fontSize: 22, color: JB.gold, margin: '4px 0 0' }}>Anouk M. · over 17 min</p>
      </div>

      {/* Order card */}
      <div style={{ position: 'absolute', left: 20, right: 20, bottom: 200 }}>
        <div style={{ background: JB.cream100, borderRadius: 18, padding: 18, color: JB.forest700 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>3 PRODUCTEN</span>
            <span className="jb-display" style={{ fontSize: 22, color: JB.forest700, lineHeight: 1 }}>€ 19,50</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ['1×', 'Smoothie Bowl', '€ 9,50'],
              ['1×', 'Tropicana', '€ 7,00'],
              ['1×', 'Energy Ball', '€ 1,50'],
              ['1×', 'Ginger Shot', '€ 3,00'],
            ].map((r,i) => (
              <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14 }}>
                <span style={{ fontWeight: 800, color: JB.gold, minWidth: 22 }}>{r[0]}</span>
                <span style={{ flex: 1, color: JB.forest700 }}>{r[1]}</span>
                <span style={{ color: JB.inkSoft }}>{r[2]}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, padding: 10, borderRadius: 10, background: 'rgba(185,150,47,0.14)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: JB.forest700 }}>
            <Icon name="clock" size={16}/> Ophalen om <b>12:02</b> · vandaag
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ position: 'absolute', bottom: 40, left: 20, right: 20, display: 'flex', gap: 10 }}>
        <button style={{ flex: 1, padding: '16px 12px', borderRadius: 14, background: 'rgba(255,255,255,0.1)', color: JB.cream100, border: '1.5px solid rgba(255,255,255,0.25)', fontWeight: 800, fontSize: 15, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}>
          <Icon name="x" size={18}/> Weiger
        </button>
        <button style={{ flex: 1.7, padding: '16px 12px', borderRadius: 14, background: JB.gold, color: JB.forest900, border: 'none', fontWeight: 800, fontSize: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', boxShadow: '0 12px 24px -8px rgba(185,150,47,0.5)' }}>
          <Icon name="check" size={20} stroke={2.6}/> Accepteer
        </button>
      </div>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────
// 12) Admin Order Detail
// ────────────────────────────────────────────────────────────
function ScreenAdminOrderDetail() {
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20}/>
        </button>
        <div style={{ textAlign: 'center' }}>
          <div className="jb-display" style={{ fontSize: 28, color: JB.forest700, lineHeight: 1 }}>#A-247</div>
          <Pill bg={`${JB.gold}33`} color="#9a771f" style={{ marginTop: 4 }}>Geaccepteerd · in bereiding</Pill>
        </div>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="dots" size={20}/>
        </button>
      </div>

      {/* Customer + pickup */}
      <div style={{ padding: '16px 20px 0' }}>
        <Card pad={16}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>KLANT</div>
              <div style={{ fontWeight: 800, color: JB.forest700, marginTop: 4 }}>Sophie de Vries</div>
              <div style={{ fontSize: 12, color: JB.inkSoft, marginTop: 2 }}>3e bestelling</div>
            </div>
            <div>
              <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>OPHALEN</div>
              <div className="jb-display" style={{ fontSize: 26, color: JB.forest700, lineHeight: 1, marginTop: 2 }}>11:45</div>
              <div style={{ fontSize: 12, color: JB.gold, fontWeight: 700, marginTop: 2 }}>over 13 min</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Items */}
      <div style={{ padding: '12px 20px 0' }}>
        <Card pad={0}>
          <div style={{ padding: '14px 16px 8px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>5 PRODUCTEN</div>
            <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>SUBTOTAAL</div>
          </div>
          {[
            { q: 2, n: 'Tropicana', c: 'mango', s: '€ 14,00' },
            { q: 1, n: 'Green Smoothie', c: 'green', s: '€ 7,00' },
            { q: 2, n: 'Ginger Shot', c: 'mango', s: '€ 6,00' },
          ].map((it,i,arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', borderTop: i===0?`1px solid ${JB.hairline}`:`1px solid ${JB.hairline}` }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: `${JB[it.c]}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CupVisual color={it.c} size={28}/>
              </div>
              <span style={{ fontWeight: 800, color: JB.gold, minWidth: 26 }}>{it.q}×</span>
              <span style={{ flex: 1, color: JB.forest700, fontWeight: 700 }}>{it.n}</span>
              <span style={{ color: JB.forest700, fontWeight: 700 }}>{it.s}</span>
            </div>
          ))}
          <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${JB.hairline}`, background: JB.cream50, borderRadius: '0 0 18px 18px' }}>
            <span style={{ fontWeight: 800, color: JB.forest700 }}>Totaal</span>
            <span className="jb-display" style={{ fontSize: 24, color: JB.forest700 }}>€ 27,00</span>
          </div>
        </Card>
        <p style={{ fontSize: 11.5, color: JB.inkSoft, textAlign: 'right', marginTop: 6 }}>Klant betaalt aan de bar bij ophalen</p>
      </div>

      {/* Status updater */}
      <div style={{ padding: '14px 20px 0' }}>
        <Card pad={14}>
          <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>STATUS WIJZIGEN</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
            <button style={{ padding: '10px 8px', borderRadius: 12, background: 'transparent', border: `1.5px solid ${JB.hairline}`, color: JB.inkSoft, fontWeight: 700, fontSize: 12.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer' }}>
              <Icon name="check" size={14}/> Nieuw
            </button>
            <button style={{ padding: '10px 8px', borderRadius: 12, background: '#cf7c2a', border: 'none', color: '#fff', fontWeight: 800, fontSize: 12.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Icon name="flame" size={14}/> In bereiding
            </button>
            <button style={{ padding: '10px 8px', borderRadius: 12, background: 'transparent', border: `1.5px solid ${JB.hairline}`, color: JB.inkSoft, fontWeight: 700, fontSize: 12.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer' }}>
              <Icon name="cup" size={14}/> Klaar
            </button>
            <button style={{ padding: '10px 8px', borderRadius: 12, background: 'transparent', border: `1.5px solid ${JB.hairline}`, color: JB.inkSoft, fontWeight: 700, fontSize: 12.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer' }}>
              <Icon name="check" size={14}/> Opgehaald
            </button>
          </div>
        </Card>
      </div>

      <div style={{ height: 140 }}/>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 18px 30px', background: 'rgba(251,243,216,0.92)', backdropFilter: 'blur(16px)', borderTop: `1px solid ${JB.hairline}`, display: 'flex', gap: 10 }}>
        <Btn variant="secondary" size="lg" icon="phone" style={{ flex: 1 }}>Bel klant</Btn>
        <Btn size="lg" icon="check" style={{ flex: 1.6 }}>Markeer klaar</Btn>
      </div>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────
// 13) Daily Stats
// ────────────────────────────────────────────────────────────
function ScreenStats() {
  // Bar data: orders per hour
  const bars = [
    { h: '08', v: 6 }, { h: '09', v: 11 }, { h: '10', v: 14 }, { h: '11', v: 18 },
    { h: '12', v: 24 }, { h: '13', v: 20 }, { h: '14', v: 12, current: true }, { h: '15', v: 0 }, { h: '16', v: 0 },
  ];
  const max = Math.max(...bars.map(b=>b.v));
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="jb-script" style={{ fontSize: 20, color: JB.inkSoft, lineHeight: 1 }}>Statistieken</div>
          <div className="jb-display" style={{ fontSize: 32, color: JB.forest700, lineHeight: 1, marginTop: 2 }}>VANDAAG</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 999, background: JB.cream50, border: `1px solid ${JB.hairline}`, color: JB.forest700, fontSize: 12, fontWeight: 700 }}>
          di 21 mei <Icon name="chevDown" size={14}/>
        </div>
      </div>

      {/* Big metric */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ borderRadius: 22, padding: '20px 22px', background: `linear-gradient(135deg, ${JB.forest700} 0%, ${JB.forest900} 100%)`, color: JB.cream100, position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', top: -20, right: -20, width: 180, opacity: 0.12, color: JB.cream100 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 4c0 8-4 14-12 14a8 8 0 0 1 0-16c4 0 6 1 12 2zM4 20c4-4 9-7 14-8"/></svg>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, opacity: 0.8 }}>OMZET VANDAAG</div>
          <div className="jb-display" style={{ fontSize: 64, lineHeight: 1, marginTop: 6 }}>€ 847</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, fontSize: 13 }}>
            <Icon name="arrowUp" size={14} style={{ color: JB.gold }}/>
            <span><b style={{ color: JB.gold }}>+ 12%</b> t.o.v. gem. dinsdag</span>
          </div>
        </div>
      </div>

      {/* KPI grid */}
      <div style={{ padding: '12px 20px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          { l: 'Bestellingen', v: '128' },
          { l: 'Gem. order', v: '€ 6,62' },
          { l: 'Sappen', v: '94' },
        ].map(k => (
          <div key={k.l} style={{ background: JB.surface2, borderRadius: 14, padding: '12px 12px', border: `1px solid ${JB.hairline}` }}>
            <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase' }}>{k.l}</div>
            <div className="jb-display" style={{ fontSize: 28, color: JB.forest700, lineHeight: 1, marginTop: 4 }}>{k.v}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ padding: '14px 20px 0' }}>
        <Card pad={16}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1 }}>BESTELLINGEN PER UUR</span>
            <span style={{ fontSize: 11, color: JB.inkSoft }}>nu 14:24</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 140, marginTop: 14 }}>
            {bars.map(b => (
              <div key={b.h} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: '100%', flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ width: '100%', height: `${(b.v/max)*100 || 4}%`, minHeight: 4, borderRadius: '6px 6px 2px 2px', background: b.current ? JB.gold : b.v === 0 ? JB.cream100 : JB.forest700, position: 'relative' }}>
                    {b.current && <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 800, color: JB.gold, marginBottom: 4 }}>{b.v}</div>}
                  </div>
                </div>
                <span style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 600 }}>{b.h}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top products */}
      <div style={{ padding: '14px 20px 0' }}>
        <h3 className="jb-display" style={{ fontSize: 22, color: JB.forest700, margin: '0 0 10px' }}>TOPSELLERS</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { n: 'Tropicana', c: 'mango', q: 24, r: 168 },
            { n: 'Green Smoothie', c: 'green', q: 19, r: 133 },
            { n: 'Smoothie Bowl', c: 'berry', q: 12, r: 114 },
            { n: 'Ginger Shot', c: 'mango', q: 22, r: 66 },
          ].map((p, i) => (
            <div key={p.n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 10, background: JB.surface2, borderRadius: 14, border: `1px solid ${JB.hairline}` }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: `${JB[p.c]}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CupVisual color={p.c} size={26}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: JB.forest700, fontSize: 14 }}>{p.n}</div>
                <div style={{ fontSize: 11.5, color: JB.inkSoft }}>{p.q} verkocht</div>
              </div>
              <span className="jb-display" style={{ fontSize: 22, color: JB.forest700 }}>€ {p.r}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 130 }}/>
      <AdminTabBar active="stats"/>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────
// 14) Products manager
// ────────────────────────────────────────────────────────────
function ScreenProducts() {
  const prods = [
    { cat: 'Coldpressed', items: [
      { n: 'Green Juice', c: 'green', p: 6.0, on: true, stock: 'Op voorraad' },
      { n: 'Beet Boost', c: 'berry', p: 6.0, on: true, stock: 'Op voorraad' },
      { n: 'Carrot Juice', c: 'mango', p: 6.0, on: false, stock: 'Uitverkocht' },
    ]},
    { cat: 'Blended', items: [
      { n: 'Tropicana', c: 'mango', p: 7.0, on: true, stock: 'Op voorraad' },
      { n: 'Green Smoothie', c: 'green', p: 7.0, on: true, stock: 'Op voorraad' },
      { n: 'Watermelon Mix', c: 'berry', p: 7.0, on: true, stock: 'Nog 6' },
    ]},
  ];
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="jb-display" style={{ fontSize: 32, color: JB.forest700, margin: 0 }}>PRODUCTEN</h1>
        <Btn size="sm" icon="plus">Nieuw</Btn>
      </div>

      {/* Search */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: JB.surface2, borderRadius: 12, border: `1px solid ${JB.hairline}` }}>
          <Icon name="search" size={18} style={{ color: JB.inkSoft }}/>
          <span style={{ flex: 1, color: JB.inkSoft, fontSize: 14 }}>Zoek product…</span>
        </div>
      </div>

      {/* Quick toggles */}
      <div style={{ padding: '12px 20px 0' }}>
        <Card pad={14}>
          <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>SNEL UIT/AAN</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ToggleRow label="Watermelon Mix" sub="Seizoensproduct" on={true}/>
            <ToggleRow label="Blue Berry Split" sub="Seizoensproduct" on={false}/>
            <ToggleRow label="Celery Juice" sub="Coming soon" on={false}/>
          </div>
        </Card>
      </div>

      {/* Categories */}
      <div style={{ padding: '14px 20px 0' }}>
        {prods.map(cat => (
          <div key={cat.cat} style={{ marginBottom: 16 }}>
            <h3 className="jb-display" style={{ fontSize: 20, color: JB.forest700, margin: '0 0 8px' }}>{cat.cat.toUpperCase()}</h3>
            <Card pad={0}>
              {cat.items.map((it, i) => (
                <div key={it.n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderTop: i===0?'none':`1px solid ${JB.hairline}` }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: `${JB[it.c]}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: it.on?1:0.5 }}>
                    <CupVisual color={it.c} size={28}/>
                  </div>
                  <div style={{ flex: 1, opacity: it.on?1:0.5 }}>
                    <div style={{ fontWeight: 700, color: JB.forest700, fontSize: 14 }}>{it.n}</div>
                    <div style={{ fontSize: 11.5, color: it.stock.startsWith('Uitverkocht')?JB.bad:JB.inkSoft }}>{it.stock} · € {it.p.toFixed(2).replace('.',',')}</div>
                  </div>
                  <ToggleSwitch on={it.on}/>
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>

      <div style={{ height: 130 }}/>
      <AdminTabBar active="products"/>
    </Phone>
  );
}

function ToggleRow({ label, sub, on }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, color: JB.forest700, fontSize: 14 }}>{label}</div>
        <div style={{ fontSize: 12, color: JB.inkSoft, marginTop: 2 }}>{sub}</div>
      </div>
      <ToggleSwitch on={on}/>
    </div>
  );
}

function ToggleSwitch({ on }) {
  return (
    <div style={{
      width: 46, height: 28, borderRadius: 999, padding: 3,
      background: on ? JB.forest700 : 'rgba(58,90,28,0.18)',
      display: 'flex', alignItems: 'center', justifyContent: on ? 'flex-end' : 'flex-start',
      transition: 'all .15s',
    }}>
      <div style={{ width: 22, height: 22, borderRadius: 999, background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.18)' }}/>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// 15) Hours & drukte settings
// ────────────────────────────────────────────────────────────
function ScreenSettings() {
  const days = [
    { d: 'Maandag', h: '08:00 – 17:00', open: true },
    { d: 'Dinsdag', h: '08:00 – 17:00', open: true, today: true },
    { d: 'Woensdag', h: '08:00 – 17:00', open: true },
    { d: 'Donderdag', h: '08:00 – 17:00', open: true },
    { d: 'Vrijdag', h: '08:00 – 17:00', open: true },
    { d: 'Zaterdag', h: '09:00 – 17:00', open: true },
    { d: 'Zondag', h: 'Gesloten', open: false },
  ];
  return (
    <Phone bg={JB.cream200}>
      <div style={{ height: 56 }}/>

      <div style={{ padding: '6px 20px 0' }}>
        <h1 className="jb-display" style={{ fontSize: 32, color: JB.forest700, margin: 0 }}>INSTELLINGEN</h1>
      </div>

      {/* Drukte toggle */}
      <div style={{ padding: '16px 20px 0' }}>
        <Card pad={16}>
          <div style={{ fontSize: 10.5, color: JB.inkSoft, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>HUIDIGE DRUKTE</div>
          <p style={{ fontSize: 12.5, color: JB.inkSoft, margin: '0 0 12px', lineHeight: 1.4 }}>Klanten zien dit bij het kiezen van een ophaaltijd.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {[
              { l: 'Rustig', c: '#4a9a3a' },
              { l: 'Matig', c: JB.gold, active: true },
              { l: 'Druk', c: JB.berry },
            ].map(s => (
              <button key={s.l} style={{
                padding: '12px 8px', borderRadius: 12,
                background: s.active ? s.c : 'transparent',
                color: s.active ? '#fff' : JB.forest700,
                border: s.active ? 'none' : `1.5px solid ${JB.hairline}`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: s.c, boxShadow: s.active?'0 0 0 3px rgba(255,255,255,0.3)':'none' }}/>
                <span style={{ fontWeight: 800, fontSize: 13 }}>{s.l}</span>
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14, padding: '10px 12px', background: JB.cream50, borderRadius: 10 }}>
            <div>
              <div style={{ fontWeight: 700, color: JB.forest700, fontSize: 13.5 }}>Pauze bestellingen</div>
              <div style={{ fontSize: 11.5, color: JB.inkSoft }}>Tijdelijk geen nieuwe bestellingen accepteren</div>
            </div>
            <ToggleSwitch on={false}/>
          </div>
        </Card>
      </div>

      {/* Hours */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <h3 className="jb-display" style={{ fontSize: 22, color: JB.forest700, margin: 0 }}>OPENINGSTIJDEN</h3>
          <span style={{ fontSize: 12, color: JB.gold, fontWeight: 700 }}>Bewerk</span>
        </div>
        <Card pad={0}>
          {days.map((d, i) => (
            <div key={d.d} style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', borderTop: i===0?'none':`1px solid ${JB.hairline}`, background: d.today?'rgba(185,150,47,0.08)':'transparent' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: d.today?800:600, color: d.open?JB.forest700:JB.inkMute, fontSize: 14 }}>{d.d}</span>
                {d.today && <Pill bg={JB.gold} color={JB.forest900} style={{ fontSize: 9, padding: '2px 6px' }}>VANDAAG</Pill>}
              </div>
              <span style={{ fontWeight: d.open?700:500, color: d.open?JB.forest700:JB.inkMute, fontSize: 13.5 }}>{d.h}</span>
            </div>
          ))}
        </Card>
      </div>

      {/* Other settings */}
      <div style={{ padding: '14px 20px 0' }}>
        <Card pad={0}>
          {[
            { i: 'bell', l: 'Notificaties', s: 'Geluid + trillen' },
            { i: 'globe', l: 'Taal app klant', s: 'Nederlands + English' },
            { i: 'user', l: 'Personeel', s: '3 actieve medewerkers' },
            { i: 'card', l: 'Betalen', s: 'Aan de bar (geen online)' },
          ].map((r,i) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderTop: i===0?'none':`1px solid ${JB.hairline}` }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: JB.cream50, color: JB.forest700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={r.i} size={18}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: JB.forest700, fontSize: 14 }}>{r.l}</div>
                <div style={{ fontSize: 12, color: JB.inkSoft }}>{r.s}</div>
              </div>
              <Icon name="chev" size={16} style={{ color: JB.inkMute }}/>
            </div>
          ))}
        </Card>
      </div>

      <div style={{ height: 130 }}/>
      <AdminTabBar active="settings"/>
    </Phone>
  );
}

Object.assign(window, {
  ScreenAdminLogin, ScreenAdminDashboard, ScreenNewOrderAlert,
  ScreenAdminOrderDetail, ScreenStats, ScreenProducts, ScreenSettings,
  AdminTabBar,
});
