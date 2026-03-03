import { useState, useEffect } from 'react'
import VoiceAssistant from './components/VoiceAssistant'
import './App.css'

interface LeadData {
  name: string
  email: string
  phone: string
  company: string
  interest: string
  qualificationScore: number
}

function App() {
  const [leadData, setLeadData] = useState<LeadData | null>(null)
  const [callStatus, setCallStatus] = useState<string>('idle')
  const [transcript, setTranscript] = useState<Array<{role: 'user' | 'assistant', content: string}>>([])

  const handleCallStatusChange = (status: string) => {
    setCallStatus(status)
  }

  const handleTranscriptUpdate = (entry: {role: 'user' | 'assistant', content: string}) => {
    setTranscript(prev => [...prev, entry])
  }

  const handleLeadQualified = (lead: LeadData) => {
    setLeadData(lead)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🎙️</span>
          <h1>VerveMind</h1>
        </div>
        <div className="status-badge">
          <span className={`status-dot ${callStatus === 'connected' ? 'active' : ''}`}></span>
          <span>{callStatus === 'connected' ? 'Live' : callStatus}</span>
        </div>
      </header>

      <main className="main">
        <VoiceAssistant 
          onStatusChange={handleCallStatusChange}
          onTranscriptUpdate={handleTranscriptUpdate}
          onLeadQualified={handleLeadQualified}
        />

        <aside className="sidebar">
          <div className="transcript-panel">
            <h3>Conversation</h3>
            <div className="transcript">
              {transcript.length === 0 ? (
                <p className="empty-state">Start a conversation to see the transcript...</p>
              ) : (
                transcript.map((entry, index) => (
                  <div key={index} className={`transcript-entry ${entry.role}`}>
                    <span className="role">{entry.role === 'user' ? 'You' : 'AI'}</span>
                    <p>{entry.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {leadData && (
            <div className="lead-panel">
              <h3>Qualified Lead</h3>
              <div className="lead-info">
                <div className="lead-field">
                  <label>Name</label>
                  <span>{leadData.name}</span>
                </div>
                <div className="lead-field">
                  <label>Email</label>
                  <span>{leadData.email}</span>
                </div>
                <div className="lead-field">
                  <label>Phone</label>
                  <span>{leadData.phone}</span>
                </div>
                <div className="lead-field">
                  <label>Company</label>
                  <span>{leadData.company}</span>
                </div>
                <div className="lead-field">
                  <label>Interest</label>
                  <span>{leadData.interest}</span>
                </div>
                <div className="lead-field">
                  <label>Score</label>
                  <span className="score">{leadData.qualificationScore}/100</span>
                </div>
              </div>
            </div>
          )}
        </aside>
      </main>
    </div>
  )
}

export default App
