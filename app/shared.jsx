// Shared design tokens + small primitives for The Juice Bar iOS prototype
// All styled to match the brand on /index.html.

const JB = {
  // brand
  cream50:  '#fbf3d8',
  cream100: '#f9ecc4',
  cream200: '#f5e6b0',
  cream300: '#f0dc94',
  forest500:'#4a6a26',
  forest700:'#3a5a1c',
  forest800:'#2f4817',
  forest900:'#23360f',
  olive:    '#7a8c3f',
  gold:     '#b9962f',
  // fruit accents
  mango:    '#e8a517',
  mangoDeep:'#c98a0e',
  green:    '#5d8a2a',
  greenDeep:'#3f6a18',
  berry:    '#87122b',
  berryDeep:'#5f0a1d',
  // surfaces / type
  surface:  '#fbf3d8',
  surface2: '#ffffff',
  ink:      '#3a5a1c',
  inkSoft:  'rgba(58,90,28,0.65)',
  inkMute:  'rgba(58,90,28,0.45)',
  hairline: 'rgba(58,90,28,0.14)',
  // status
  ok:       '#2f7a2d',
  warn:     '#c9851a',
  bad:      '#a92424',
};

// Font setup — inject once
if (typeof document !== 'undefined' && !document.getElementById('jb-fonts')) {
  const l1 = document.createElement('link');
  l1.rel = 'preconnect'; l1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(l1);
  const l2 = document.createElement('link');
  l2.rel = 'preconnect'; l2.href = 'https://fonts.gstatic.com'; l2.crossOrigin = '';
  document.head.appendChild(l2);
  const l3 = document.createElement('link');
  l3.id = 'jb-fonts';
  l3.rel = 'stylesheet';
  l3.href = 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Caveat+Brush&family=Quicksand:wght@300;400;500;600;700&display=swap';
  document.head.appendChild(l3);

  const s = document.createElement('style');
  s.textContent = `
    .jb-sans { font-family: Quicksand, system-ui, sans-serif; }
    .jb-display { font-family: 'Amatic SC', system-ui, sans-serif; font-weight: 700; letter-spacing: 0.04em; }
    .jb-script { font-family: 'Caveat Brush', cursive; }
    .jb-screen { font-family: Quicksand, system-ui, sans-serif; color: ${JB.ink}; }
    .jb-screen *::-webkit-scrollbar { display: none; }
    .jb-screen * { scrollbar-width: none; }
  `;
  document.head.appendChild(s);
}

// ─── Logo mark (the tree-in-circle, drawn from /index.html SVG defs) ───
function JBLogo({ size = 28, color = JB.forest700, withText = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ color, display: 'block' }}>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      {withText && (
        <>
          <path id={`jbarc-top-${size}`} d="M 18 60 A 42 42 0 0 1 102 60" fill="none"/>
          <text fontFamily="'Caveat Brush', cursive" fontSize="15" fill="currentColor" letterSpacing="0.5">
            <textPath href={`#jbarc-top-${size}`} startOffset="50%" textAnchor="middle">The Juice Bar</textPath>
          </text>
          <path id={`jbarc-bot-${size}`} d="M 22 70 A 38 38 0 0 0 98 70" fill="none"/>
          <text fontFamily="'Caveat Brush', cursive" fontSize="11" fill="currentColor" letterSpacing="1">
            <textPath href={`#jbarc-bot-${size}`} startOffset="50%" textAnchor="middle">Vlissingen</textPath>
          </text>
        </>
      )}
      <g transform="translate(60 70)" fill="currentColor">
        <rect x="-2" y="0" width="4" height="14"/>
        <circle cx="-10" cy="-4" r="9"/>
        <circle cx="9" cy="-4" r="9"/>
        <circle cx="0" cy="-14" r="11"/>
        <circle cx="-12" cy="-12" r="6"/>
        <circle cx="12" cy="-12" r="6"/>
        <circle cx="-6" cy="-10" r="1.4" fill={JB.cream200}/>
        <circle cx="6" cy="-8" r="1.4" fill={JB.cream200}/>
        <circle cx="0" cy="-16" r="1.4" fill={JB.cream200}/>
      </g>
      <line x1="36" y1="88" x2="84" y2="88" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3"/>
    </svg>
  );
}

// ─── Icon set (single source of truth, line icons) ───
function Icon({ name, size = 22, stroke = 1.6, style = {} }) {
  const s = { width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', display: 'block', ...style };
  switch (name) {
    case 'leaf': return <svg viewBox="0 0 24 24" style={s}><path d="M20 4c0 8-4 14-12 14a8 8 0 0 1 0-16c4 0 6 1 12 2z"/><path d="M4 20c4-4 9-7 14-8"/></svg>;
    case 'bolt': return <svg viewBox="0 0 24 24" style={s}><path d="M13 2 L4 14 h7 l-1 8 L20 10 h-7 z"/></svg>;
    case 'heart': return <svg viewBox="0 0 24 24" style={s}><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>;
    case 'cup': return <svg viewBox="0 0 24 24" style={s}><path d="M6 7h12l-1 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7z"/><path d="M8 7c0-2 1.5-4 4-4s4 2 4 4"/><path d="M12 3v4"/></svg>;
    case 'apple': return <svg viewBox="0 0 24 24" style={s}><path d="M12 7c-2-3-6-2-7 1-1 4 1 11 5 13 1 .4 2 .4 2 0 0 .4 1 .4 2 0 4-2 6-9 5-13-1-3-5-4-7-1z"/><path d="M12 7c.5-2 1.6-3 3-3"/></svg>;
    case 'blender': return <svg viewBox="0 0 24 24" style={s}><path d="M7 3h10l-1 9H8L7 3z"/><path d="M8 12h8l-1 7a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2l-1-7z"/><path d="M10 7h4"/></svg>;
    case 'bowl': return <svg viewBox="0 0 24 24" style={s}><path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M8 8c0-2 4-2 4 0M14 6c0-2 3-1 3 1"/></svg>;
    case 'cart': return <svg viewBox="0 0 24 24" style={s}><path d="M3 4h2l2.5 12h11l2-9H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>;
    case 'pin': return <svg viewBox="0 0 24 24" style={s}><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case 'clock': return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'bell': return <svg viewBox="0 0 24 24" style={s}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>;
    case 'user': return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case 'home': return <svg viewBox="0 0 24 24" style={s}><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></svg>;
    case 'list': return <svg viewBox="0 0 24 24" style={s}><path d="M4 6h16M4 12h16M4 18h10"/></svg>;
    case 'stats': return <svg viewBox="0 0 24 24" style={s}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>;
    case 'box': return <svg viewBox="0 0 24 24" style={s}><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg>;
    case 'cog': return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case 'chev': return <svg viewBox="0 0 24 24" style={s}><path d="M9 6l6 6-6 6"/></svg>;
    case 'chevDown': return <svg viewBox="0 0 24 24" style={s}><path d="M6 9l6 6 6-6"/></svg>;
    case 'back': return <svg viewBox="0 0 24 24" style={s}><path d="M15 6l-6 6 6 6"/></svg>;
    case 'plus': return <svg viewBox="0 0 24 24" style={s}><path d="M12 5v14M5 12h14"/></svg>;
    case 'minus': return <svg viewBox="0 0 24 24" style={s}><path d="M5 12h14"/></svg>;
    case 'check': return <svg viewBox="0 0 24 24" style={s}><path d="M5 12l5 5L20 7"/></svg>;
    case 'x': return <svg viewBox="0 0 24 24" style={s}><path d="M6 6l12 12M6 18L18 6"/></svg>;
    case 'lock': return <svg viewBox="0 0 24 24" style={s}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>;
    case 'eye': return <svg viewBox="0 0 24 24" style={s}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'flame': return <svg viewBox="0 0 24 24" style={s}><path d="M12 3s5 4 5 9a5 5 0 1 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 1-6 1-8z"/></svg>;
    case 'flag': return <svg viewBox="0 0 24 24" style={s}><path d="M4 21V4M4 4h12l-2 4 2 4H4"/></svg>;
    case 'arrowUp': return <svg viewBox="0 0 24 24" style={s}><path d="M12 19V5M5 12l7-7 7 7"/></svg>;
    case 'arrowDown': return <svg viewBox="0 0 24 24" style={s}><path d="M12 5v14M5 12l7 7 7-7"/></svg>;
    case 'gift': return <svg viewBox="0 0 24 24" style={s}><rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M5 12v9h14v-9M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5"/></svg>;
    case 'search': return <svg viewBox="0 0 24 24" style={s}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>;
    case 'play': return <svg viewBox="0 0 24 24" style={s}><path d="M6 4l14 8-14 8z"/></svg>;
    case 'pause': return <svg viewBox="0 0 24 24" style={s}><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>;
    case 'phone': return <svg viewBox="0 0 24 24" style={s}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7A2 2 0 0 1 22 17z"/></svg>;
    case 'star': return <svg viewBox="0 0 24 24" style={s}><path d="M12 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>;
    case 'dots': return <svg viewBox="0 0 24 24" style={s}><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>;
    case 'globe': return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'card': return <svg viewBox="0 0 24 24" style={s}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>;
    default: return null;
  }
}

// ─── Smoothie cup visual (mango/green/berry) ───
function CupVisual({ color = 'mango', size = 110, label }) {
  const palette = {
    mango: { top: '#f5c43a', mid: JB.mango, bot: JB.mangoDeep },
    green: { top: '#8fb14b', mid: JB.green, bot: JB.greenDeep },
    berry: { top: '#b4243a', mid: JB.berry, bot: JB.berryDeep },
  }[color];
  const h = Math.round(size * 1.4);
  return (
    <div style={{
      width: size, height: h, position: 'relative',
      borderRadius: `${size*0.08}px ${size*0.08}px ${size*0.12}px ${size*0.12}px`,
      overflow: 'hidden',
      background: `linear-gradient(180deg, ${palette.top} 0%, ${palette.mid} 65%, ${palette.bot} 100%)`,
      filter: 'drop-shadow(0 14px 18px rgba(58,90,28,0.18))',
    }}>
      {/* shine */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 30%)' }} />
      <div style={{ position: 'absolute', left: size*0.07, top: size*0.07, bottom: size*0.07, width: size*0.1, borderRadius: 999, background: 'linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0))', filter: 'blur(2px)' }} />
      {/* logo medallion */}
      <div style={{
        position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%,-50%)',
        width: size*0.55, height: size*0.55, borderRadius: 999, background: JB.cream50,
        boxShadow: `inset 0 0 0 1.5px ${JB.forest700}, 0 4px 8px rgba(0,0,0,0.12)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <JBLogo size={size*0.48} color={JB.forest700} withText={false}/>
      </div>
      {label && (
        <div style={{ position: 'absolute', bottom: size*0.06, left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.85)', fontSize: 9, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>{label}</div>
      )}
    </div>
  );
}

// ─── A neutral phone shell — clean cream background, no built-in nav ───
function Phone({ children, dark = false, time = '9:41', bg = JB.cream200 }) {
  return (
    <IOSDevice dark={dark} title={undefined}>
      <div className="jb-screen" style={{ width: 402, minHeight: 874, background: bg, position: 'relative' }}>
        {children}
      </div>
    </IOSDevice>
  );
}

// ─── Status pills, buttons ───
function Pill({ children, bg = JB.forest700, color = JB.cream100, style = {} }) {
  return <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px',
    borderRadius: 999, background: bg, color, fontSize: 11, fontWeight: 700,
    letterSpacing: 0.4, ...style,
  }}>{children}</span>;
}

function Btn({ children, variant = 'primary', size = 'md', icon, style = {}, full = false }) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13 },
    md: { padding: '14px 20px', fontSize: 15 },
    lg: { padding: '16px 22px', fontSize: 16 },
  }[size];
  const variants = {
    primary: { background: JB.forest700, color: JB.cream100, boxShadow: '0 8px 18px -8px rgba(58,90,28,0.45)' },
    secondary:{ background: JB.cream50, color: JB.forest700, border: `1.5px solid ${JB.forest700}` },
    ghost: { background: 'rgba(58,90,28,0.06)', color: JB.forest700 },
    danger: { background: '#fbe4e4', color: JB.bad, border: `1px solid rgba(169,36,36,0.25)` },
    success:{ background: JB.forest700, color: JB.cream100 },
  }[variant];
  return (
    <button style={{
      ...sizes, ...variants,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      borderRadius: 12, border: variants.border || 'none', cursor: 'pointer',
      fontFamily: 'inherit', fontWeight: 700, width: full ? '100%' : undefined,
      ...style,
    }}>
      {icon && <Icon name={icon} size={size==='lg'?20:16} />}
      {children}
    </button>
  );
}

// ─── Section headers + cards ───
function Card({ children, style = {}, pad = 16 }) {
  return <div style={{
    background: JB.surface2, borderRadius: 18, padding: pad,
    boxShadow: '0 4px 14px -8px rgba(58,90,28,0.18)',
    border: `1px solid ${JB.hairline}`, ...style,
  }}>{children}</div>;
}

Object.assign(window, { JB, JBLogo, Icon, CupVisual, Phone, Pill, Btn, Card });
