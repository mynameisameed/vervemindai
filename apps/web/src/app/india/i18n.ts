export type IndiaLang = 'en' | 'hi' | 'te';

export const LANG_META: Record<IndiaLang, { label: string; native: string; flag: string }> = {
  en: { label: 'English', native: 'English', flag: '🇮🇳' },
  hi: { label: 'Hindi', native: 'हिंदी / اردو', flag: '🇮🇳' },
  te: { label: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
};

export interface FAQItem {
  q: string;
  a: string;
}

export interface NicheTranscript {
  speaker: 'AI' | 'Patient' | 'Lead' | 'Parent' | string;
  text: string;
}

export interface I18nContent {
  badge: string;
  h1_line1: string;
  h1_highlight: string;
  h1_pricing: string;
  sub: string;
  cta_whatsapp: string;
  cta_call: string;
  demo_title: string;
  demo_voice_header: string;
  demo_voice_note: string;
  demo_call_header: string;
  demo_call_note: string;
  demo_playing: string;
  demo_finished: string;
  problem_tag: string;
  problem_h2: string;
  problem_sub: string;
  problems: { num: string; title: string; body: string; stat: string }[];
  verticals_h2: string;
  verticals_sub: string;
  verticals: { emoji: string; title: string; desc: string }[];
  tools_h2: string;
  tools_sub: string;
  tools: { icon: string; title: string; desc: string; keyword: string }[];
  pricing_h2: string;
  pricing_sub: string;
  pricing_amount: string;
  pricing_note: string;
  pricing_cta: string;
  pricing_starter_bonus: string;
  cta_h2: string;
  cta_sub: string;
  faq_title: string;
  faq_sub: string;
  faqs: FAQItem[];
  calc_title: string;
  calc_sub: string;
  calc_preset_label: string;
  calc_slider_missed: string;
  calc_slider_value: string;
  calc_slider_followup: string;
  calc_result_losing: string;
  calc_result_recoverable: string;
  calc_result_roi: string;
  calc_cta: string;
  calc_note: string;
  hub_title: string;
  hub_sub: string;
  hub_tab_gbp: string;
  hub_tab_wa: string;
  hub_tab_recall: string;
  hub_btn_copy: string;
  hub_btn_copied: string;
  hub_download_placeholder: string;
  hub_download_btn: string;
  transcripts: Record<string, NicheTranscript[]>;
}

export const i18n: Record<IndiaLang, I18nContent> = {
  // ─── ENGLISH ───
  en: {
    badge: 'Built for Bharat · WhatsApp-First · Telugu, Hindi & English',
    h1_line1: 'Your Receptionist Misses Calls.',
    h1_highlight: 'Your AI Won’t.',
    h1_pricing: 'Starting ₹8,000/mo.',
    sub: 'We set up a 24/7 AI assistant for your business in 48 hours. It picks up every call, replies on WhatsApp, books appointments, and reactivates your old list — so you stop losing revenue to missed follow-ups.',
    cta_whatsapp: '💬 Chat on WhatsApp',
    cta_call: 'Book a Call',
    demo_title: 'Listen: AI Receptionist Demo',
    demo_voice_header: '🎧 AI VOICE OVERVIEW',
    demo_voice_note: 'This is how we pitch our AI receptionist to your patients.',
    demo_call_header: '💬 SAMPLE CALL PREVIEW',
    demo_call_note: '↑ This is what an actual AI phone call looks like for your patients.',
    demo_playing: 'PLAYING DEMO',
    demo_finished: 'FINISHED PLAYING',
    problem_tag: 'THE PROBLEM',
    problem_h2: 'You\'re losing business every single day',
    problem_sub: 'Indian businesses lose lakhs every month to three gaps that nobody talks about.',
    problems: [
      { num: '01', title: 'Staff Goes Home at 6 PM', body: 'Evening and Sunday calls go unanswered — or straight to your competitor\'s WhatsApp. Customers book whoever answers first. In India, 78% choose the first responder.', stat: '⚠ 78% choose first responder' },
      { num: '02', title: 'WhatsApp Is Total Chaos', body: '200+ unread messages. Customer inquiries buried under lab reports, staff chats, and festival forwards. No system. No follow-up. Leads slip through every day.', stat: '⚠ Only 35% of SMBs use digital CRM' },
      { num: '03', title: 'No-Shows Drain Your Revenue', body: 'Customers book and forget. Without WhatsApp reminders (98% open rate vs 20% for SMS), your slot sits empty. That\'s ₹500–₹5,000 per missed booking.', stat: '⚠ Up to 30% no-show rate' },
    ],
    verticals_h2: 'Purpose-Built for Indian Industries',
    verticals_sub: 'Each VerveMind agent speaks your industry\'s language — literally.',
    verticals: [
      { emoji: '🦷', title: 'Dental Clinics', desc: 'Automate recall campaigns, appointment booking, and review collection. AI responds in Telugu, Hindi, or English based on patient preference. Handle emergency calls 24/7.' },
      { emoji: '🏠', title: 'Real Estate Brokers', desc: 'Instant WhatsApp response to JustDial, 99acres, and MagicBricks leads. Auto-qualify by budget, location, BHK, and possession date. Never lose a ₹10L commission again.' },
      { emoji: '📚', title: 'Coaching Institutes', desc: 'Handle 500+ daily inquiries during admission season. Instantly share batch timings, fee structures, and brochures on WhatsApp. Convert parent calls into enrollments on auto-pilot.' },
      { emoji: '💇', title: 'Salons & Beauty Parlours', desc: 'Replace walk-in chaos with proper appointment booking. Automated follow-ups for repeat visits. Send festive offers to bring back dormant customers.' },
    ],
    tools_h2: 'Free Starter Kit — Yours to Keep',
    tools_sub: 'Download these tools free. No signup needed. Just WhatsApp us the keyword.',
    tools: [
      { icon: '📋', title: 'WhatsApp Message Templates', desc: '10 ready-to-use appointment, recall & follow-up templates in Hindi + English.', keyword: 'TEMPLATES' },
      { icon: '📊', title: 'Missed Call Calculator', desc: 'See how many lakhs your business is losing to unanswered calls every month.', keyword: 'CALCULATOR' },
      { icon: '📍', title: 'Google Business Checklist', desc: '15-point checklist to optimize your Google listing and get more local customers.', keyword: 'GBP' },
      { icon: '🔄', title: 'Customer Recall Scripts', desc: '5 proven WhatsApp scripts to bring back customers who haven\'t visited in 90+ days.', keyword: 'RECALL' },
    ],
    pricing_h2: 'Simple Monthly Pricing',
    pricing_sub: 'No setup fees. No lock-in. Cancel on WhatsApp anytime. UPI & Razorpay accepted. Direct queries: Sameed@vervemindai.com',
    pricing_amount: 'Starting at ₹8,000/month',
    pricing_note: 'That\'s less than ₹270/day — less than your receptionist\'s daily salary.',
    pricing_cta: 'Get Started — WhatsApp Us →',
    pricing_starter_bonus: '🎁 Starter Kit Bonus: FREE Google Business profile setup + 500 WhatsApp message credits included!',
    cta_h2: 'Get a Demo Built for Your Business',
    cta_sub: 'Message us on WhatsApp. Get a customized walkthrough in Telugu, Hindi, or English within 24 hours. For custom integrations, contact: Sameed@vervemindai.com',
    faq_title: 'Frequently Asked Questions',
    faq_sub: 'Everything you need to know about our AI Receptionist and WhatsApp integrations in India.',
    faqs: [
      { q: 'Does the AI understand Hinglish or local languages?', a: 'Yes! The AI receptionists are trained on local datasets and understand Hindi, Telugu, English, and natural mixtures of them (e.g., Hinglish or Telugish), replying based on the caller\'s language preference.' },
      { q: 'How does the WhatsApp integration work?', a: 'As soon as a call is missed or finished, our system triggers a WhatsApp message directly via the Meta API, sending booking links, answers to questions, or business details automatically.' },
      { q: 'Will it integrate with my existing software or CRM?', a: 'Absolutely. We support custom integrations with dental/medical CRM software, real estate tools, JustDial, MagicBricks, Google Business Profile, and native systems via n8n workflows.' },
      { q: 'Are there setup fees or hidden costs?', a: 'No. There are zero setup fees and no lock-in periods. We charge a flat ₹8,000/month subscription. You only pay for your own Meta WhatsApp API message fees at cost.' },
      { q: 'Is my customer/patient data secure?', a: 'Yes, data privacy is our highest priority. We store all database information locally and securely in compliance with India\'s DPDP Act and ABDM patient security guidelines.' }
    ],
    calc_title: '📊 Missed Call Revenue Calculator',
    calc_sub: 'See how many lakhs your business is losing to unanswered calls and weak follow-ups.',
    calc_preset_label: 'Select Your Industry:',
    calc_slider_missed: 'Missed calls per day',
    calc_slider_value: 'Avg client/patient value (₹)',
    calc_slider_followup: 'Current follow-up rate (%)',
    calc_result_losing: 'YOU\'RE LOSING',
    calc_result_recoverable: 'VERVEMIND CAN RECOVER',
    calc_result_roi: 'NET MONTHLY ROI',
    calc_cta: '💬 Get Your Report on WhatsApp',
    calc_note: 'Based on 40% appointment booking rate and 80% AI recovery rate.',
    hub_title: '🎁 Free Client Growth Kits (Zero Risk, High ROI)',
    hub_sub: 'Unlock ready-to-use blueprints, templates, and scripts. Copy instantly or download the full PDF.',
    hub_tab_gbp: '📍 Google Business Profile Checklist',
    hub_tab_wa: '💬 WhatsApp Templates',
    hub_tab_recall: '🔄 Recall Scripts',
    hub_btn_copy: 'Copy to Clipboard',
    hub_btn_copied: 'Copied!',
    hub_download_placeholder: 'Enter your business email',
    hub_download_btn: 'Download Full PDF & Scripts',
    transcripts: {
      dental: [
        { speaker: 'AI', text: 'Namaste! Thank you for calling Dr. Sharma\'s Dental Clinic. How can I help you today?' },
        { speaker: 'Patient', text: 'Aapke pass teeth whitening ka kya charge hai? Aur booking milegi?' },
        { speaker: 'AI', text: 'Dr. Sharma ke clinic par teeth whitening treatment ₹3,000 se start hota hai. Saturday 4:00 PM par slot free hai. Kya main confirm karun?' },
        { speaker: 'Patient', text: 'Haan, confirm kar dijiye.' },
        { speaker: 'AI', text: 'Done! Maine confirm kar diya hai. Link aapke WhatsApp number par share kiya ja raha hai. Dhanyawad!' }
      ],
      skin: [
        { speaker: 'AI', text: 'Namaste! Welcome to Glow Skin Clinic. How can I help you with your hair or skin care needs?' },
        { speaker: 'Patient', text: 'Mujhe hydra facial ka pricing puchna tha. Dr. Ananya kab free hain?' },
        { speaker: 'AI', text: 'Hydra facial treatment starts at ₹2,500. Dr. Ananya is available tomorrow at 11:00 AM or 3:00 PM. Which works for you?' },
        { speaker: 'Patient', text: '11:00 AM matches my time.' },
        { speaker: 'AI', text: 'Perfect. Your appointment is scheduled for tomorrow at 11:00 AM. I have sent the details to your WhatsApp. Have a great day!' }
      ],
      realestate: [
        { speaker: 'AI', text: 'Namaste! Thank you for contacting Sai Realtors. Are you looking to buy, rent, or schedule a site visit?' },
        { speaker: 'Lead', text: 'I saw a 3BHK flat listing in Gachibowli. Is it available for site visit this Sunday?' },
        { speaker: 'AI', text: 'Yes! The 3BHK premium apartment in Gachibowli is open for visits. I have slots on Sunday at 10:00 AM and 2:00 PM. Please select one.' },
        { speaker: 'Lead', text: 'Let\'s keep it at 10:00 AM.' },
        { speaker: 'AI', text: 'Excellent. I have scheduled your site visit for Sunday at 10:00 AM. Sending the Google Maps location and floor plan brochure PDF to your WhatsApp now.' }
      ],
      coaching: [
        { speaker: 'AI', text: 'Namaste! Welcome to Ascent IIT Academy Hyderabad. How can we assist you with admissions or demo classes?' },
        { speaker: 'Parent', text: 'Mera beta 10th class pass out hai. Foundation batch ki timings aur syllabus brochure chahiye.' },
        { speaker: 'AI', text: 'Congratulations on his 10th! The JEE Foundation batch starts next Monday. I have sent the detailed syllabus brochure and demo class schedule directly to your WhatsApp.' },
        { speaker: 'Parent', text: 'Aap link bhej dijiye, main checks kar leta hu.' },
        { speaker: 'AI', text: 'Sure, I have shared the registration link and the brochure to your WhatsApp. Namaste!' }
      ]
    }
  },

  // ─── HINDI-URDU ───
  hi: {
    badge: 'भारत के लिए बना · WhatsApp-First · तेलुगु, हिंदी और English',
    h1_line1: 'आपका Receptionist Call छोड़ता है।',
    h1_highlight: 'आपका AI नहीं छोड़ेगा।',
    h1_pricing: '₹8,000/महीने से शुरू।',
    sub: 'हम 48 घंटों में आपके व्यवसाय के लिए एक 24/7 AI सहायक सेटअप करते हैं। यह हर कॉल उठाता है, व्हाट्सएप पर जवाब देता है, अपॉइंटमेंट बुक करता है और आपकी पुरानी लीड्स को वापस लाता है।',
    cta_whatsapp: '💬 WhatsApp पर बात करें',
    cta_call: 'Call Book करें',
    demo_title: 'सुनिए: AI Receptionist Demo',
    demo_voice_header: '🎧 AI VOICE OVERVIEW',
    demo_voice_note: 'यह हम आपके मरीज़ों/ग्राहकों को पिच करने वाला वॉइसओवर डेमो है।',
    demo_call_header: '💬 SAMPLE CALL PREVIEW',
    demo_call_note: '↑ यह एक वास्तविक एआई फोन कॉल का उदाहरण है।',
    demo_playing: 'प्ले हो रहा है',
    demo_finished: 'समाप्त हुआ',
    problem_tag: 'समस्या',
    problem_h2: 'आप हर दिन business खो रहे हैं',
    problem_sub: 'Indian businesses हर महीने लाखों रुपये खो रहे हैं — तीन ऐसी कमियों की वजह से जिनकी कोई बात नहीं करता।',
    problems: [
      { num: '01', title: 'Staff शाम 6 बजे घर चला जाता है', body: 'शाम और Sunday की calls unanswered — या competitor के WhatsApp पर। Customer जो पहले उठाए उसे book करता है।', stat: '⚠ 78% पहले respond करने वाले को चुनते हैं' },
      { num: '02', title: 'WhatsApp में अफरा-तफरी', body: '200+ unread messages। Customer inquiries, reports, staff chats, और festival forwards — सब एक साथ। न system, न follow-up।', stat: '⚠ सिर्फ 35% SMBs digital CRM use करती हैं' },
      { num: '03', title: 'No-Shows से Revenue पर मार', body: 'Customers book करके भूल जाते हैं। WhatsApp reminders (98% open rate) के बिना, आपकी slot खाली रहती है। हर missed booking = ₹500–₹5,000 का नुकसान।', stat: '⚠ 30% तक no-show rate' },
    ],
    verticals_h2: 'आपकी Industry के लिए बना',
    verticals_sub: 'हर VerveMind agent आपकी industry की भाषा बोलता है — literally।',
    verticals: [
      { emoji: '🦷', title: 'Dental Clinics', desc: 'Recall campaigns, appointment booking, और review collection — सब automatic। AI patient की पसंद के हिसाब से तेलुगु, हिंदी या English में बात करता है। Emergency calls 24/7 handle।' },
      { emoji: '🏠', title: 'Real Estate Brokers', desc: 'JustDial, 99acres और MagicBricks leads का instant WhatsApp response। Budget, location, BHK, और possession date से auto-qualify। ₹10L commission miss मत करो।' },
      { emoji: '📚', title: 'Coaching Institutes', desc: 'Admission season में 500+ daily inquiries handle करें। Batch timings, fee structure, और brochure WhatsApp पर instant share। Parent calls को enrollments में convert — autopilot पर।' },
      { emoji: '💇', title: 'Salons \u0026 Beauty Parlours', desc: 'Walk-in chaos को proper appointment booking में बदलें। Repeat visits के लिए automated follow-ups। Festive offers से dormant customers वापस लाएं।' },
    ],
    tools_h2: 'Free Starter Kit — आपके लिए',
    tools_sub: 'ये tools free download करें। Signup नहीं चाहिए। बस WhatsApp पर keyword भेजें।',
    tools: [
      { icon: '📋', title: 'WhatsApp Message Templates', desc: '10 ready-to-use appointment, recall और follow-up templates हिंदी + English में।', keyword: 'TEMPLATES' },
      { icon: '📊', title: 'Missed Call Calculator', desc: 'देखें कि आपका business हर महीने कितने लाख missed calls की वजह से खो रहा है।', keyword: 'CALCULATOR' },
      { icon: '📍', title: 'Google Business Checklist', desc: '15-point checklist — Google listing optimize करें और ज़्यादा local customers पाएं।', keyword: 'GBP' },
      { icon: '🔄', title: 'Customer Recall Scripts', desc: '5 proven WhatsApp scripts — 90+ दिनों से न आने वाले customers को वापस लाएं।', keyword: 'RECALL' },
    ],
    pricing_h2: 'सीधी Monthly Pricing',
    pricing_sub: 'कोई setup fees नहीं। कोई lock-in नहीं। WhatsApp पर cancel करें। UPI और Razorpay accepted। ईमेल: Sameed@vervemindai.com',
    pricing_amount: '₹8,000/month से शुरू',
    pricing_note: 'यानी ₹270/दिन से भी कम — आपकी receptionist की daily salary से कम।',
    pricing_cta: 'शुरू करें — WhatsApp करें →',
    pricing_starter_bonus: '🎁 बोनस: FREE Google Business प्रोफाइल सेटअप + 500 मुफ्त व्हाट्सएप मैसेज क्रेडिट्स शामिल!',
    cta_h2: 'आपके Business के लिए Demo देखें',
    cta_sub: 'WhatsApp पर message करें। 24 घंटे में तेलुगु, हिंदी या English में customized walkthrough पाएं। ईमेल: Sameed@vervemindai.com',
    faq_title: 'अक्सर पूछे जाने वाले सवाल',
    faq_sub: 'एआई रिसेप्शनिस्ट और व्हाट्सएप ऑटोमेशन से जुड़े कुछ सामान्य प्रश्नों के उत्तर।',
    faqs: [
      { q: 'क्या एआई हिंग्लिश या स्थानीय भाषाओं को समझता है?', a: 'हाँ! हमारे एआई रिसेप्शनिस्ट हिंदी, तेलुगु, अंग्रेजी और उनके स्वाभाविक मिश्रण (जैसे हिंग्लिश) को समझते हैं और कॉल करने वाले की पसंदीदा भाषा में जवाब देते हैं।' },
      { q: 'व्हाट्सएप इंटीग्रेशन कैसे काम करता है?', a: 'जैसे ही कोई कॉल मिस या समाप्त होती है, हमारा सिस्टम स्वचालित रूप से मेटा व्हाट्सएप एपीआई के माध्यम से बुकिंग लिंक या विवरण भेज देता है।' },
      { q: 'क्या यह मेरे मौजूदा सॉफ़्टवेयर या सीआरएम के साथ काम करेगा?', a: 'बिल्कुल। हम डेंटिस्ट सीआरएम, रियल एस्टेट वेबसाइटों, जस्टडायल, और n8n वर्कफ़्लो के माध्यम से सभी प्रमुख सॉफ्टवेयरों के साथ कस्टम इंटीग्रेशन करते हैं।' },
      { q: 'क्या कोई सेटअप शुल्क या अतिरिक्त छुपा हुआ खर्च है?', a: 'नहीं। कोई सेटअप शुल्क नहीं है और फ्लैट ₹8,000/महीने का सब्सक्रिप्शन चार्ज है। मेटा के व्हाट्सएप मैसेज एपीआई शुल्क आपके वास्तविक उपयोग पर होते हैं।' },
      { q: 'क्या मेरे ग्राहकों/मरीजों का डेटा सुरक्षित है?', a: 'हाँ, हम भारत के नए DPDP एक्ट और ABDM सुरक्षा दिशानिर्देशों के तहत डेटा सुरक्षा और गोपनीयता का पूरा ध्यान रखते हैं।' }
    ],
    calc_title: '📊 मिस्ड कॉल रेवेन्यू कैलकुलेटर',
    calc_sub: 'देखें कि आपका व्यवसाय मिस्ड कॉल्स और कमजोर फॉलो-अप के कारण हर महीने कितने लाख रुपये खो रहा है।',
    calc_preset_label: 'अपना उद्योग चुनें:',
    calc_slider_missed: 'प्रतिदिन मिस्ड कॉल्स',
    calc_slider_value: 'औसत ग्राहक/मरीज मूल्य (₹)',
    calc_slider_followup: 'वर्तमान फॉलो-अप दर (%)',
    calc_result_losing: 'आप खो रहे हैं',
    calc_result_recoverable: 'VERVEMIND रिकवर कर सकता है',
    calc_result_roi: 'शुद्ध मासिक ROI',
    calc_cta: '💬 व्हाट्सएप पर अपनी रिपोर्ट प्राप्त करें',
    calc_note: '40% अपॉइंटमेंट बुकिंग दर और एआई द्वारा 80% रिकवरी दर पर आधारित।',
    hub_title: '🎁 फ्री क्लाइंट ग्रोथ किट (जीरो रिस्क)',
    hub_sub: 'तैयार टूल्स, व्हाट्सएप टेम्प्लेट और रिकॉल स्क्रिप्ट को तुरंत कॉपी करें या पीडीएफ डाउनलोड करें।',
    hub_tab_gbp: '📍 गूगल बिजनेस प्रोफाइल चेकलिस्ट',
    hub_tab_wa: '💬 व्हाट्सएप टेम्प्लेट्स',
    hub_tab_recall: '🔄 रिकॉल स्क्रिप्ट्स',
    hub_btn_copy: 'क्लिपबोर्ड पर कॉपी करें',
    hub_btn_copied: 'कॉपी हो गया!',
    hub_download_placeholder: 'अपना व्यावसायिक ईमेल दर्ज करें',
    hub_download_btn: 'पूर्ण पीडीएफ डाउनलोड करें',
    transcripts: {
      dental: [
        { speaker: 'AI', text: 'नमस्ते! डॉ. शर्मा के डेंटल क्लिनिक में कॉल करने के लिए धन्यवाद। मैं आपकी क्या मदद कर सकती हूँ?' },
        { speaker: 'Patient', text: 'आपके पास teeth whitening का क्या चार्ज है? और बुकिंग मिलेगी?' },
        { speaker: 'AI', text: 'डॉ. शर्मा के क्लिनिक पर teeth whitening ट्रीटमेंट ₹3,000 से शुरू होता है। शनिवार शाम 4:00 बजे का स्लॉट खाली है। क्या मैं बुक करूँ?' },
        { speaker: 'Patient', text: 'हाँ, बुक कर दीजिए।' },
        { speaker: 'AI', text: 'डन! मैंने कन्फर्म कर दिया है। बुकिंग लिंक आपके व्हाट्सएप नंबर पर भेज दिया गया है। धन्यवाद!' }
      ],
      skin: [
        { speaker: 'AI', text: 'नमस्ते! ग्लो स्किन क्लिनिक में आपका स्वागत है। मैं आपकी त्वचा या बालों की देखभाल में क्या मदद कर सकती हूँ?' },
        { speaker: 'Patient', text: 'मुझे हाइड्रा फेशियल का प्राइस पूछना था। डॉ. अनन्या कब फ्री हैं?' },
        { speaker: 'AI', text: 'हाइड्रा फेशियल ट्रीटमेंट ₹2,500 से शुरू होता है। डॉ. अनन्या कल सुबह 11:00 बजे या दोपहर 3:00 बजे उपलब्ध हैं। कौन सा समय ठीक रहेगा?' },
        { speaker: 'Patient', text: '11:00 AM रख लीजिए।' },
        { speaker: 'AI', text: 'उत्कृष्ट! आपका अपॉइंटमेंट कल सुबह 11:00 बजे निर्धारित कर दिया गया है। विवरण व्हाट्सएप पर साझा कर दिए गए हैं। आपका दिन शुभ हो!' }
      ],
      realestate: [
        { speaker: 'AI', text: 'नमस्ते! साईं रियल्टर्स में कॉल करने के लिए धन्यवाद। क्या आप घर खरीदना, किराए पर लेना या साइट विजिट करना चाहते हैं?' },
        { speaker: 'Lead', text: 'मैंने गाचीबोवली में एक 3BHK फ्लैट देखा था। क्या इस रविवार साइट विजिट हो सकती है?' },
        { speaker: 'AI', text: 'जी हाँ! गाचीबोवली अपार्टमेंट रविवार को विजिट के लिए उपलब्ध है। सुबह 10:00 बजे और दोपहर 2:00 बजे के स्लॉट खाली हैं। कृपया एक चुनें।' },
        { speaker: 'Lead', text: '10:00 बजे रख लीजिए।' },
        { speaker: 'AI', text: 'बहुत बढ़िया। मैंने रविवार सुबह 10:00 बजे के लिए आपकी विजिट बुक कर दी है। स्थान का गूगल मैप लिंक और ब्रोशर व्हाट्सएप पर साझा कर दिया है।' }
      ],
      coaching: [
        { speaker: 'AI', text: 'नमस्ते! एसेंट आईआईटी एकेडमी हैदराबाद में आपका स्वागत है। एडमिशन या डेमो क्लास के बारे में क्या मदद चाहिए?' },
        { speaker: 'Parent', text: 'मेरा बेटा 10वीं पास कर चुका है। फाउंडेशन बैच की टाइमिंग और सिलेबस चाहिए।' },
        { speaker: 'AI', text: 'आपके बेटे को बधाई! जेईई फाउंडेशन बैच अगले सोमवार से शुरू हो रहा है। मैंने पूरा सिलेबस और डेमो क्लास शेड्यूल सीधे आपके व्हाट्सएप पर भेज दिया है।' },
        { speaker: 'Parent', text: 'ठीक है, मैं व्हाट्सएप चेक करता हूँ।' },
        { speaker: 'AI', text: 'ज़रूर, मैंने सारी जानकारी व्हाट्सएप पर भेज दी है। धन्यवाद, नमस्ते!' }
      ]
    }
  },

  // ─── TELUGU ───
  te: {
    badge: 'భారత్ కోసం · WhatsApp-First · తెలుగు, హిందీ & English',
    h1_line1: 'మీ రిసెప్షనిస్ట్ Call మిస్ చేసినా.',
    h1_highlight: 'మీ AI మిస్ చేయదు.',
    h1_pricing: '₹8,000/నెల నుండి ప్రారంభం.',
    sub: 'మేము 48 గంటల్లో మీ వ్యాపారం కోసం 24/7 AI అసిస్టెంట్ సెటప్ చేస్తాము. ఇది ప్రతి కాల్ ఎత్తుతుంది, వాట్సాప్ లో సమాధానం ఇస్తుంది, అపాయింట్‌మెంట్‌లు బుక్ చేస్తుంది మరియు మీ పాత కస్టమర్లను తిరిగి రప్పిస్తుంది.',
    cta_whatsapp: '💬 WhatsApp లో మాట్లాడండి',
    cta_call: 'Call Book చేయండి',
    demo_title: 'వినండి: AI Receptionist Demo',
    demo_voice_header: '🎧 AI VOICE OVERVIEW',
    demo_voice_note: 'మా AI రిసెప్షనిస్ట్ మీ పేషెంట్లతో ఎలా మాట్లాడుతుందో వివరించే ఆడియో ఇది.',
    demo_call_header: '💬 SAMPLE CALL PREVIEW',
    demo_call_note: '↑ వాస్తవంగా పేషెంట్-AI మధ్య జరిగే ఫోన్ సంభాషణ ఉదాహరణ.',
    demo_playing: 'ప్లే అవుతోంది',
    demo_finished: 'పూర్తయింది',
    problem_tag: 'సమస్య',
    problem_h2: 'మీరు ప్రతిరోజూ business కోల్పోతున్నారు',
    problem_sub: 'Indian businesses ప్రతి నెల లక్షల్లో నష్టపోతున్నాయి — ఎవరూ మాట్లాడని మూడు gaps వల్ల.',
    problems: [
      { num: '01', title: 'Staff సాయంత్రం 6కి వెళ్ళిపోతారు', body: 'సాయంత్రం మరియు Sunday calls unanswered — లేదా competitor WhatsApp కి. Customer ముందు ఎత్తిన వారిని book చేస్తారు.', stat: '⚠ 78% మొదట respond చేసిన వారిని ఎంచుకుంటారు' },
      { num: '02', title: 'WhatsApp లో అస్తవ్యస్తం', body: '200+ unread messages. Customer inquiries, reports, staff chats, festival forwards — అన్నీ కలిసిపోతాయి. System లేదు, follow-up లేదు.', stat: '⚠ 35% SMBs మాత్రమే digital CRM వాడతాయి' },
      { num: '03', title: 'No-Shows వల్ల Revenue నష్టం', body: 'Customers book చేసి మర్చిపోతారు. WhatsApp reminders (98% open rate) లేకుండా, మీ slot ఖాళీగా ఉంటుంది. ₹500–₹5,000 నష్టం per booking.', stat: '⚠ 30% వరకు no-show rate' },
    ],
    verticals_h2: 'మీ Industry కోసం తయారైంది',
    verticals_sub: 'ప్రతి VerveMind agent మీ industry భాష మాట్లాడుతుంది — literally.',
    verticals: [
      { emoji: '🦷', title: 'Dental Clinics', desc: 'Recall campaigns, appointment booking, review collection — అన్నీ automatic. AI patient preference ప్రకారం తెలుగు, హిందీ లేదా English లో మాట్లాడుతుంది. Emergency calls 24/7 handle.' },
      { emoji: '🏠', title: 'Real Estate Brokers', desc: 'JustDial, 99acres, MagicBricks leads కి instant WhatsApp response. Budget, location, BHK, possession date ద్వారా auto-qualify. ₹10L commission miss చేయకండి.' },
      { emoji: '📚', title: 'Coaching Institutes', desc: 'Admission season లో 500+ daily inquiries handle చేయండి. Batch timings, fee structure, brochure WhatsApp లో instant share. Parent calls ని enrollments గా convert — autopilot లో.' },
      { emoji: '💇', title: 'Salons & Beauty Parlours', desc: 'Walk-in chaos ని proper appointment booking గా మార్చండి. Repeat visits కోసం automated follow-ups. Festive offers తో dormant customers ని తిరిగి తీసుకురండి.' },
    ],
    tools_h2: 'Free Starter Kit — మీ కోసం',
    tools_sub: 'ఈ tools free గా download చేయండి. Signup అవసరం లేదు. WhatsApp లో keyword పంపండి.',
    tools: [
      { icon: '📋', title: 'WhatsApp Message Templates', desc: '10 ready-to-use appointment, recall & follow-up templates హిందీ + English లో.', keyword: 'TEMPLATES' },
      { icon: '📊', title: 'Missed Call Calculator', desc: 'మీ business ప్రతి నెల missed calls వల్ల ఎంత నష్టపోతోందో చూడండి.', keyword: 'CALCULATOR' },
      { icon: '📍', title: 'Google Business Checklist', desc: '15-point checklist — Google listing optimize చేసి ఎక్కువ local customers పొందండి.', keyword: 'GBP' },
      { icon: '🔄', title: 'Customer Recall Scripts', desc: '90+ రోజుల నుంచి రాని customers ని తిరిగి తీసుకురావడానికి 5 proven WhatsApp scripts.', keyword: 'RECALL' },
    ],
    pricing_h2: 'సింపుల్ Monthly Pricing',
    pricing_sub: 'Setup fees లేవు. Lock-in లేదు. WhatsApp లో cancel చేయండి. UPI & Razorpay accepted. ఇమెయిల్: Sameed@vervemindai.com',
    pricing_amount: '₹8,000/నెల నుంచి',
    pricing_note: 'రోజుకు ₹270 కంటే తక్కువ — మీ రిసెప్షనిస్ట్ రోజువారీ జీతం కంటే తక్కువ.',
    pricing_cta: 'మొదలుపెట్టండి — WhatsApp చేయండి →',
    pricing_starter_bonus: '🎁 బోనస్: ఉచిత గూగుల్ బిజినెస్ ప్రొఫైల్ సెటప్ + 500 ఉచిత వాట్సాప్ మెసేజ్ క్రెడిట్లు చేర్చబడ్డాయి!',
    cta_h2: 'మీ Business కోసం Demo చూడండి',
    cta_sub: 'WhatsApp లో message చేయండి. 24 గంటల్లో తెలుగు, హిందీ లేదా English లో customized walkthrough పొందండి. ఇమెయిల్: Sameed@vervemindai.com',
    faq_title: 'తరచుగా అడిగే ప్రశ్నలు',
    faq_sub: 'మా AI రిసెప్షనిస్ట్ మరియు వాట్సాప్ ఆటోమేషన్‌కు సంబంధించిన సాధారణ ప్రశ్నలు మరియు సమాధానాలు.',
    faqs: [
      { q: 'AI కి తెలుగు లేదా ఇంగ్లీష్ మిశ్రమ భాషలు అర్థమవుతాయా?', a: 'అవును! మా AI రిసెప్షనిస్ట్ తెలుగు, హిందీ, ఇంగ్లీష్ మరియు వాటి సహజమైన మిశ్రమాన్ని (ఉదా. తెలుగు-ఇంగ్లీష్) సులభంగా అర్థం చేసుకుంటుంది మరియు అదే భాషలో జవాబిస్తుంది.' },
      { q: 'వాట్సాప్ ఇంటిగ్రేషన్ ఎలా పనిచేస్తుంది?', a: 'ఫోన్ కాల్ మిస్ అయినా లేదా పూర్తయినా, మా సిస్టమ్ వెంటనే అధికారిక మెటా వాట్సాప్ API ద్వారా బుకింగ్ లింక్, సమాధానాలు మరియు వివరాలను ఆటోమేటిక్‌గా పంపుతుంది.' },
      { q: 'ఇది నా ప్రస్తుత సాఫ్ట్‌వేర్ లేదా CRM తో కలిసి పనిచేస్తుందా?', a: 'తప్పకుండా. డెంటల్ CRMలు, రియల్ ఎస్టేట్ పోర్టల్స్, గూగుల్ బిజినెస్ ప్రొఫైల్ మరియు n8n వర్క్‌ఫ్లోల ద్వారా మీ వ్యాపార సాఫ్ట్‌వేర్‌తో మేము కస్టమ్ ఇంటిగ్రేషన్ చేస్తాము.' },
      { q: 'ఏవైనా సెటప్ ఛార్జీలు లేదా అదనపు రుసుములు ఉన్నాయా?', a: 'ఏమీ లేవు. సెటప్ ఫీజులు సున్నా మరియు కేవలం నెలకు ₹8,000 సబ్‌స్క్రిప్షన్ మాత్రమే. వాట్సాప్ మెసేజ్ ఛార్జీలు మీ వినియోగాన్ని బట్టి మెటాకు చెల్లించాల్సి ఉంటుంది.' },
      { q: 'నా పేషెంట్లు లేదా కస్టమర్ల డేటా సురక్షితమేనా?', a: 'అవును, కస్టమర్ల వ్యక్తిగత వివరాల భద్రతే మా ప్రథమ ప్రాధాన్యత. మేము భారత ప్రభుత్వ నూతన DPDP చట్టం మరియు ABDM భద్రతా ప్రమాణాలకు అనుగుణంగా డేటాను భద్రపరుస్తాము.' }
    ],
    calc_title: '📊 మిస్డ్ కాల్ రెవెన్యూ క్యాలిక్యులేటర్',
    calc_sub: 'మిస్డ్ కాల్స్ మరియు సరైన ఫాలో-అప్ లేకపోవడం వల్ల మీ వ్యాపారం నెలకు ఎన్ని లక్షలు నష్టపోతుందో ఇప్పుడే లెక్కించండి.',
    calc_preset_label: 'మీ పరిశ్రమను ఎంచుకోండి:',
    calc_slider_missed: 'రోజువారీ మిస్డ్ కాల్స్',
    calc_slider_value: 'సగటు క్లయింట్/పేషెంట్ విలువ (₹)',
    calc_slider_followup: 'ప్రస్తుత ఫాలో-అప్ రేటు (%)',
    calc_result_losing: 'మీరు నష్టపోతున్నారు',
    calc_result_recoverable: 'VERVEMIND తిరిగి రాబట్టగలదు',
    calc_result_roi: 'నికర నెలవారీ ROI',
    calc_cta: '💬 మీ రిపోర్ట్‌ను వాట్సాప్‌లో పొందండి',
    calc_note: '40% అపాయింట్‌మెంట్ బుకింగ్ రేటు మరియు 80% AI రికవరీ రేటు ఆధారంగా లెక్కించబడింది.',
    hub_title: '🎁 ఉచిత క్లయింట్ గ్రోత్ కిట్స్ (జీరో రిస్క్)',
    hub_sub: 'వాట్సాప్ టెంప్లేట్లు మరియు కస్టమర్ రీకాల్ స్క్రిప్టులను వెంటనే కాపీ చేసుకోండి లేదా పూర్తి పిడిఎఫ్ డౌన్‌లోడ్ చేయండి.',
    hub_tab_gbp: '📍 గూగుల్ బిజినెస్ ప్రొఫైల్ చెక్‌లిస్ట్',
    hub_tab_wa: '💬 వాట్సాప్ టెంప్లేట్లు',
    hub_tab_recall: '🔄 రీకాల్ స్క్రిప్ట్స్',
    hub_btn_copy: 'క్లిప్‌బోర్డ్‌కు కాపీ చేయి',
    hub_btn_copied: 'కాపీ అయింది!',
    hub_download_placeholder: 'మీ వ్యాపార ఇమెయిల్ నమోదు చేయండి',
    hub_download_btn: 'పూర్తి పిడిఎఫ్ డౌన్‌లోड చేయండి',
    transcripts: {
      dental: [
        { speaker: 'AI', text: 'నమస్తే! డాక్టర్ శర్మ డెంటల్ క్లినిక్‌కి కాల్ చేసినందుకు ధన్యవాదాలు. నేను మీకు ఎలా సహాయపడగలను?' },
        { speaker: 'Patient', text: 'మీ దగ్గర teeth whitening కి ఎంత అవుతుంది? బుకింగ్ దొరుకుతుందా?' },
        { speaker: 'AI', text: 'డాక్టర్ శర్మ క్లినిక్‌లో teeth whitening ట్రీట్‌మెంట్ ₹3,000 నుండి ప్రారంభమవుతుంది. శనివారం సాయంత్రం 4:00 గంటలకు స్లాట్ ఖాళీగా ఉంది. కన్ఫర్మ్ చేయమంటారా?' },
        { speaker: 'Patient', text: 'అవును, కన్ఫర్మ్ చేయండి.' },
        { speaker: 'AI', text: 'అలాగే! నేను కన్ఫర్మ్ చేశాను. లింక్ మీ వాట్సాప్ నంబర్‌కు పంపబడుతోంది. ధన్యవాదాలు!' }
      ],
      skin: [
        { speaker: 'AI', text: 'నమస్తే! గ్లో స్కిన్ క్లినిక్‌కి స్వాగతం. మీ జుట్టు లేదా చర్మ సంరక్షణకు నేను ఎలా సహాయపడగలను?' },
        { speaker: 'Patient', text: 'నాకు హైడ్రా ఫేషియల్ ధర ఎంత అని అడగాలని ఉంది. డాక్టర్ అనన్య ఎప్పుడు అందుబాటులో ఉంటారు?' },
        { speaker: 'AI', text: 'హైడ్రా ఫేషియల్ ట్రీట్‌మెంట్ ₹2,500 నుండి ప్రారంభమవుతుంది. డాక్టర్ అనన్య రేపు ఉదయం 11:00 లేదా మధ్యాహ్నం 3:00 గంటలకు అందుబాటులో ఉన్నారు. ఏ సమయం కుదురుతుంది?' },
        { speaker: 'Patient', text: 'ఉదయం 11:00 గంటలకు పెట్టండి.' },
        { speaker: 'AI', text: 'సరేనండి. రేపు ఉదయం 11:00 గంటలకు మీ అపాయింట్‌మెంట్ బుక్ చేసాము. వివరాలు వాట్సాప్‌కు పంపబడ్డాయి. హ్యాపీ డే!' }
      ],
      realestate: [
        { speaker: 'AI', text: 'నమస్తే! సాయి రియల్టర్స్‌కు కాల్ చేసినందుకు ధన్యవాదాలు. మీరు కొనడానికి చూస్తున్నారా లేక సైట్ విజిట్ చేయాలా?' },
        { speaker: 'Lead', text: 'గచ్చిబౌలిలో 3BHK ఫ్లాట్ చూశాను. ఈ ఆదివారం విజిట్ చేయడానికి ఖాళీ ఉందా?' },
        { speaker: 'AI', text: 'ఆదివారం గచ్చిబౌలి అపార్ట్‌మెంట్ విజిట్ కోసం అందుబాటులో ఉంది. ఉదయం 10:00 మరియు మధ్యాహ్నం 2:00 గంటలకు ఖాళీలు ఉన్నాయి. ఒకటి ఎంచుకోండి.' },
        { speaker: 'Lead', text: 'ఉదయం 10:00 గంటలకు ఉంచండి.' },
        { speaker: 'AI', text: 'సరేనండి. ఆదివారం ఉదయం 10:00 గంటలకు మీ విజిట్ బుక్ చేసాము. లొకేషన్ లింక్ మరియు బ్రోషర్ పిడిఎఫ్ వాట్సాప్‌కు పంపాము.' }
      ],
      coaching: [
        { speaker: 'AI', text: 'నమస్తే! అసెంట్ ఐఐటీ అకాడమీ హైదరాబాద్‌కు స్వాగతం. అడ్మిషన్ల గురించి ఏ సమాచారం కావాలి?' },
        { speaker: 'Parent', text: 'మా అబ్బాయి 10వ తరగతి పాసయ్యాడు. ఫౌండేషన్ బ్యాచ్ టైమింగ్స్ మరియు సిలబస్ కావాలి.' },
        { speaker: 'AI', text: 'మీ అబ్బాయికి అభినందనలు! జెఈఈ ఫౌండేషన్ బ్యాచ్ వచ్చే సోమవారం నుండి ప్రారంభమవుతుంది. నేను పూర్తి సిలబస్ మరియు డెమో క్లాస్ వివరాలను నేరుగా మీ వాట్సాప్‌కు పంపాను.' },
        { speaker: 'Parent', text: 'సరే, నేను వాట్సాప్ చూసుకుంటాను.' },
        { speaker: 'AI', text: 'తప్పకుండా, వివరాలు పంపబడ్డాయి. నమస్తే!' }
      ]
    }
  },
};
