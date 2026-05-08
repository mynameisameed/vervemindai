"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function TranslateWidget() {
  // Hide Google Translate toolbar and unwanted popups
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .skiptranslate iframe, .skiptranslate { display: none !important; }
      body { top: 0 !important; }
      #google_translate_element { display: none; }
    `;
    document.head.appendChild(style);
  }, []);

  const changeLanguage = (langCode: string) => {
    // A dirty but effective hack to switch languages using the hidden Google Translate dropdown
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div id="google_translate_element"></div>
      <Script 
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="lazyOnload"
      />
      <Script id="google-translate-init" strategy="lazyOnload">
        {`
          window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,es'}, 'google_translate_element');
          }
        `}
      </Script>
      
      <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <button 
          onClick={() => changeLanguage('en')}
          style={{ background: 'transparent', border: 'none', color: '#E5E2E1', fontSize: '13px', fontWeight: 600, padding: '4px 10px', borderRadius: '16px', cursor: 'pointer', opacity: 0.8 }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
        >
          EN
        </button>
        <button 
          onClick={() => changeLanguage('es')}
          style={{ background: 'transparent', border: 'none', color: '#00F5D4', fontSize: '13px', fontWeight: 600, padding: '4px 10px', borderRadius: '16px', cursor: 'pointer', opacity: 0.8 }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
        >
          ES
        </button>
      </div>
    </div>
  );
}
