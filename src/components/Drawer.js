import React from 'react';

const Icon = ({ name, size = 20, color = '#cbd5e1' }) => {
  const common = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'home':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M3 10.5L12 3l9 7.5"/>
          <path d="M5 10.5V21h14V10.5"/>
        </svg>
      );
    case 'user':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M20 21a8 8 0 0 0-16 0"/>
          <circle cx="12" cy="7" r="4" stroke={color} />
        </svg>
      );
    case 'file':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z"/>
          <path d="M14 3v6h6"/>
        </svg>
      );
    case 'book':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M4 4h16v15H6.5A2.5 2.5 0 0 0 4 21.5z"/>
        </svg>
      );
    case 'layers':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 2l9 5-9 5-9-5z"/>
          <path d="M3 12l9 5 9-5"/>
          <path d="M3 17l9 5 9-5"/>
        </svg>
      );
    case 'mail':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>
          <path d="M22 7l-10 7L2 7"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M23 3s-1.8 1-3 1a4.6 4.6 0 0 0-8 3v1A11 11 0 0 1 3 4s-4 9 5 13a12.6 12.6 0 0 1-7 2c9 5 20 0 20-11a4.5 4.5 0 0 0 0-.8A7.7 7.7 0 0 0 23 3z"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <circle cx="12" cy="12" r="4" stroke={color} />
          <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3 .3 6-1.5 6-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2S18.8 2.8 16 4.6a11.2 11.2 0 0 0-7 0C6.2 2.8 4.3 2.9 4.3 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 2.9 9c0 4.5 3 6.3 6 6a3.4 3.4 0 0 0-.9 2.6V22"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2" stroke={color} />
        </svg>
      );
    default:
      return null;
  }
};

const NavItem = ({ icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      padding: '12px 14px',
      border: 'none',
      background: 'transparent',
      color: active ? '#e2e8f0' : '#94a3b8',
      borderRadius: 10,
      cursor: 'pointer',
      textAlign: 'left',
      outline: 'none',
      transition: 'background 0.2s ease, color 0.2s ease',
      backgroundColor: active ? 'rgba(59,130,246,0.15)' : 'transparent'
    }}
  >
    <span style={{ display: 'flex', width: 24, justifyContent: 'center' }}>
      <Icon name={icon} color={active ? '#60a5fa' : '#64748b'} />
    </span>
    <span style={{ fontSize: 16, fontWeight: 500 }}>{label}</span>
  </button>
);

const SocialButton = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    style={{
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '9999px',
      backgroundColor: '#0f172a',
      border: '1px solid #1f2937',
      color: '#e2e8f0',
      textDecoration: 'none',
      transition: 'transform 0.15s ease, background 0.2s ease'
    }}
  >
    <Icon name={icon} size={18} color="#e2e8f0" />
  </a>
);

const Drawer = ({
  name = 'Praneet',
  avatarUrl,
  active = 'portfolio',
  onNavigate,
  footerLink = '#'
}) => {
  const Item = ({ id, icon, label }) => (
    <NavItem
      icon={icon}
      label={label}
      active={active.toLowerCase() === id}
      onClick={() => onNavigate && onNavigate(id)}
    />
  );

  return (
    <aside
      style={{
        width: 320,
        minHeight: '100vh',
        backgroundColor: '#0b1220',
        borderRight: '1px solid #111827',
        padding: 24,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }}
    >
      {/* Header / Profile */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 8 }}>
        <div
          style={{
            width: 144,
            height: 144,
            borderRadius: '9999px',
            background: '#0f172a',
            border: '4px solid #1f2942',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                fontSize: 48,
                background:
                  'radial-gradient(60% 60% at 50% 40%, #1e293b 0%, #0f172a 100%)'
              }}
            >
              ✨
            </div>
          )}
        </div>
        <h1 style={{ color: '#e2e8f0', fontSize: 28, margin: 0, fontWeight: 700, letterSpacing: 0.2 }}>{name}</h1>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 14, marginTop: 4 }}>
          <SocialButton icon="twitter" href="#" label="Twitter" />
          <SocialButton icon="facebook" href="#" label="Facebook" />
          <SocialButton icon="instagram" href="#" label="Instagram" />
          <SocialButton icon="github" href="#" label="GitHub" />
          <SocialButton icon="linkedin" href="#" label="LinkedIn" />
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Item id="home" icon="home" label="Home" />
        <Item id="about" icon="user" label="About" />
        <Item id="resume" icon="file" label="Resume" />
        <Item id="portfolio" icon="book" label="Portfolio" />
        <Item id="services" icon="layers" label="Services" />
        <Item id="contact" icon="mail" label="Contact" />
      </nav>

      {/* Footer */}
      <div style={{ marginTop: 'auto', textAlign: 'center', color: '#94a3b8', fontSize: 14 }}>
        <span>Designed by </span>
        <a href={footerLink} style={{ color: '#60a5fa', textDecoration: 'none' }}>Praneeth</a>
      </div>
    </aside>
  );
};

export default Drawer;