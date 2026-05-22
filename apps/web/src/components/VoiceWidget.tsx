'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Conversation } from '@11labs/client';
import { Mic, MicOff, PhoneOff } from 'lucide-react';

type Status = 'idle' | 'connecting' | 'connected';
type Mode = 'listening' | 'speaking';
interface Message { role: 'agent' | 'user'; text: string; }

export default function VoiceWidget() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [mode, setMode] = useState<Mode>('listening');
  const [messages, setMessages] = useState<Message[]>([]);
  const [muted, setMuted] = useState(false);
  const convRef = useRef<Conversation | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const startCall = useCallback(async () => {
    if (!agentId || status !== 'idle') return;
    setOpen(true);
    setStatus('connecting');
    setMessages([]);
    try {
      const conv = await Conversation.startSession({
        agentId,
        onConnect: () => setStatus('connected'),
        onDisconnect: () => {
          setStatus('idle');
          convRef.current = null;
        },
        onMessage: ({ message, source }: { message: string; source: string }) => {
          setMessages(prev => [...prev, {
            role: source === 'ai' ? 'agent' : 'user',
            text: message,
          }]);
        },
        onModeChange: ({ mode: m }: { mode: Mode }) => setMode(m),
        onError: (err: unknown) => console.error('[VoiceWidget]', err),
      });
      convRef.current = conv;
    } catch (err) {
      console.error('[VoiceWidget] startSession failed', err);
      setStatus('idle');
    }
  }, [agentId, status]);

  const endCall = useCallback(async () => {
    if (convRef.current) {
      await convRef.current.endSession();
      convRef.current = null;
    }
    setStatus('idle');
    setOpen(false);
    setMessages([]);
    setMuted(false);
  }, []);

  const toggleMute = useCallback(async () => {
    if (!convRef.current) return;
    const next = !muted;
    await convRef.current.setInputMute(next);
    setMuted(next);
  }, [muted]);

  if (!agentId) return null;

  return (
    <>
      {/* Floating trigger button */}
      {!open && (
        <button
          onClick={startCall}
          aria-label="Talk to Sameed"
          style={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 20px 12px 14px',
            background: 'linear-gradient(135deg, #a855f7 0%, #00F5D4 100%)',
            border: 'none',
            borderRadius: 40,
            cursor: 'pointer',
            boxShadow: '0 4px 24px rgba(168,85,247,0.35)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 32px rgba(168,85,247,0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(168,85,247,0.35)';
          }}
        >
          {/* Orb */}
          <span style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Mic size={16} color="#fff" />
          </span>
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            whiteSpace: 'nowrap',
          }}>
            Talk to Sameed
          </span>
          {/* Pulse ring */}
          <style>{`
            @keyframes vm-pulse {
              0% { transform: scale(1); opacity: 0.6; }
              70% { transform: scale(1.35); opacity: 0; }
              100% { transform: scale(1.35); opacity: 0; }
            }
            .vm-pulse-ring {
              position: absolute;
              inset: 0;
              border-radius: 40px;
              border: 2px solid rgba(168,85,247,0.5);
              animation: vm-pulse 2.2s ease-out infinite;
              pointer-events: none;
            }
          `}</style>
          <span className="vm-pulse-ring" />
        </button>
      )}

      {/* Expanded panel */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 9999,
          width: 360,
          maxWidth: 'calc(100vw - 32px)',
          background: '#0d0d14',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'var(--font-inter), Inter, system-serif',
        }}>

          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(168,85,247,0.06)',
          }}>
            {/* Avatar orb */}
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #a855f7, #00F5D4)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
            }}>S</div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9', letterSpacing: '-0.01em' }}>
                Sameed · VerveMind AI
              </div>
              <div style={{ fontSize: 11, color: status === 'connected' ? '#00F5D4' : '#94a3b8', marginTop: 1 }}>
                {status === 'idle' ? 'Disconnected'
                  : status === 'connecting' ? 'Connecting…'
                  : mode === 'speaking' ? '● Speaking'
                  : '● Listening'}
              </div>
            </div>

            <button
              onClick={endCall}
              aria-label="Close"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#64748b',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <PhoneOff size={16} />
            </button>
          </div>

          {/* Transcript */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              minHeight: 200,
              maxHeight: 320,
              overflowY: 'auto',
              padding: '12px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {messages.length === 0 && (
              <div style={{
                textAlign: 'center',
                color: '#475569',
                fontSize: 12,
                marginTop: 40,
              }}>
                {status === 'connecting' ? 'Connecting…' : 'Start talking to begin'}
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '8px 12px',
                  borderRadius: msg.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, #a855f7, #7c3aed)'
                    : 'rgba(255,255,255,0.06)',
                  color: '#f1f5f9',
                  fontSize: 13,
                  lineHeight: 1.45,
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            padding: '12px 16px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <button
              onClick={toggleMute}
              disabled={status !== 'connected'}
              aria-label={muted ? 'Unmute' : 'Mute'}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                background: muted ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.05)',
                color: muted ? '#ef4444' : '#94a3b8',
                cursor: status === 'connected' ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: status === 'connected' ? 1 : 0.4,
              }}
            >
              {muted ? <MicOff size={18} /> : <Mic size={18} />}
            </button>

            <button
              onClick={endCall}
              aria-label="End call"
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                border: 'none',
                background: '#ef4444',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(239,68,68,0.4)',
              }}
            >
              <PhoneOff size={20} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
