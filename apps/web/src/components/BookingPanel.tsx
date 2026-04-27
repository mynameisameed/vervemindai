import React from 'react';

interface Notification {
  icon: string;
  title: string;
  subtitle: string;
  badge: string;
  variant: 'accent' | 'positive';
}

interface StatMini {
  value: string;
  label: string;
  color?: string;
}

interface BookingPanelProps {
  panelTitle: string;
  accentColor: string;
  notifications: [Notification, Notification];
  stats: [StatMini, StatMini, StatMini];
}

export default function BookingPanel({
  panelTitle,
  accentColor,
  notifications,
  stats,
}: BookingPanelProps) {
  const accentRgba = (alpha: number) => {
    // Parse hex to rgb for rgba usage
    const hex = accentColor.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  const positiveColor = '#34D399';
  const positiveRgba = (alpha: number) => `rgba(52,211,153,${alpha})`;

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '18px 20px 14px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          fontSize: '13px',
          fontWeight: 700,
          color: 'var(--text)',
        }}>
          {panelTitle}
        </span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          borderRadius: '4px',
          padding: '3px 8px',
          background: accentRgba(0.08),
          border: `1px solid ${accentRgba(0.2)}`,
        }}>
          <span style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: accentColor,
            display: 'inline-block',
            animation: 'pulse-dot 1.8s ease-in-out infinite',
          }} />
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', color: accentColor }}>
            LIVE
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 20px' }}>
        {/* Notification cards */}
        {notifications.map((n, i) => {
          const isAccent = n.variant === 'accent';
          const cardColor = isAccent ? accentColor : positiveColor;
          const cardBg = isAccent ? accentRgba(0.05) : positiveRgba(0.04);
          const cardBorder = isAccent ? accentRgba(0.15) : positiveRgba(0.12);
          const badgeBg = isAccent ? accentRgba(0.1) : positiveRgba(0.1);

          return (
            <div key={i} style={{
              borderRadius: 'var(--r-lg)',
              padding: '14px 16px',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              border: `1px solid ${cardBorder}`,
              background: cardBg,
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0,
                background: isAccent ? accentRgba(0.1) : positiveRgba(0.1),
              }}>
                {n.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '3px', color: 'var(--text)' }}>
                  {n.title}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>
                  {n.subtitle}
                </div>
              </div>
              <div style={{
                fontSize: '10px',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '3px',
                flexShrink: 0,
                background: badgeBg,
                color: cardColor,
              }}>
                {n.badge}
              </div>
            </div>
          );
        })}

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          marginTop: '12px',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r)',
              padding: '10px 12px',
            }}>
              <div style={{
                fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                fontWeight: 800,
                fontSize: '17px',
                marginBottom: '2px',
                color: s.color || accentColor,
              }}>
                {s.value}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px', letterSpacing: '0.04em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
