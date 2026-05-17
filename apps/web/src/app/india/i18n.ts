export type IndiaLang = 'en' | 'hi' | 'te';

export const LANG_META: Record<IndiaLang, { label: string; native: string; flag: string }> = {
  en: { label: 'English', native: 'English', flag: '🇮🇳' },
  hi: { label: 'Hindi', native: 'हिंदी / اردو', flag: '🇮🇳' },
  te: { label: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
};

export const i18n: Record<IndiaLang, {
  badge: string;
  h1_line1: string;
  h1_highlight: string;
  sub: string;
  cta_whatsapp: string;
  cta_call: string;
  demo_title: string;
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
  cta_h2: string;
  cta_sub: string;
}> = {
  // ─── ENGLISH ───
  en: {
    badge: 'Built for Bharat · WhatsApp-First · Telugu, Hindi & English',
    h1_line1: 'Patient Called.',
    h1_highlight: 'Nobody Picked Up.',
    sub: 'Your AI receptionist answers every call, books appointments, and follows up on WhatsApp — in Telugu, Hindi-Urdu, and English. 24/7. No missed patients.',
    cta_whatsapp: '💬 Chat on WhatsApp',
    cta_call: 'Book a Call',
    demo_title: 'Listen: AI Receptionist Demo',
    problem_tag: 'THE PROBLEM',
    problem_h2: 'You\'re losing patients every single day',
    problem_sub: 'Indian clinics lose lakhs every month to three gaps that nobody talks about.',
    problems: [
      { num: '01', title: 'Receptionist Goes Home at 6 PM', body: 'Evening and Sunday calls go to voicemail — or your competitor\'s WhatsApp. Patients book whoever answers first.', stat: '⚠ 78% choose the first responder' },
      { num: '02', title: 'WhatsApp Is Total Chaos', body: '200+ unread messages. Patient inquiries buried under lab reports, staff chats, and festival forwards. No system. No follow-up.', stat: '⚠ Only 35% of clinics use digital PMS' },
      { num: '03', title: 'No-Shows Drain Your OPD', body: 'Patients book and forget. Without WhatsApp reminders (98% open rate), your slot sits empty. That\'s ₹500–₹2,000 per missed slot.', stat: '⚠ Up to 30% no-show rate' },
    ],
    verticals_h2: 'Purpose-Built for Your Industry',
    verticals_sub: 'Each VerveMind agent speaks your vertical\'s language — literally.',
    verticals: [
      { emoji: '🦷', title: 'Dental Clinics', desc: 'Automate recall campaigns, appointment booking, and review collection. AI responds in Telugu, Hindi, or English based on patient preference.' },
      { emoji: '💆', title: 'MedSpa & Wellness', desc: 'Reactivate dormant clients via WhatsApp. Inquiry-to-appointment in under 60 seconds. Festival offer campaigns built-in.' },
      { emoji: '🏠', title: 'Real Estate Brokers', desc: 'Instant WhatsApp response to JustDial and MagicBricks leads. Auto-qualify by budget, location, and BHK preference.' },
      { emoji: '🏥', title: 'Multi-Specialty Hospitals', desc: 'Route patient inquiries by department, book OPD slots, and send discharge follow-ups. Reduce 90-min wait times.' },
    ],
    tools_h2: 'Free Starter Kit — Yours to Keep',
    tools_sub: 'Download these tools free. No signup needed. Just WhatsApp us the keyword.',
    tools: [
      { icon: '📋', title: 'WhatsApp Message Templates', desc: '10 ready-to-use appointment, recall & follow-up templates in Hindi + English.', keyword: 'TEMPLATES' },
      { icon: '📊', title: 'Missed Call Calculator', desc: 'See how many lakhs your clinic is losing to unanswered calls every month.', keyword: 'CALCULATOR' },
      { icon: '📍', title: 'Google Business Checklist', desc: '15-point checklist to optimize your Google listing and get more local patients.', keyword: 'GBP' },
      { icon: '🔄', title: 'Patient Recall Scripts', desc: '5 proven WhatsApp scripts to bring back patients who haven\'t visited in 90+ days.', keyword: 'RECALL' },
    ],
    pricing_h2: 'Simple Monthly Pricing',
    pricing_sub: 'No setup fees. No lock-in. Cancel on WhatsApp anytime. UPI & Razorpay accepted.',
    pricing_amount: 'Starting at ₹14,999/month',
    pricing_note: 'That\'s less than ₹500/day — less than your receptionist\'s daily salary.',
    pricing_cta: 'Get Started — WhatsApp Us →',
    cta_h2: 'Get a Demo Built for Your Clinic',
    cta_sub: 'Message us on WhatsApp. Get a customized walkthrough in Telugu, Hindi, or English within 24 hours.',
  },

  // ─── HINDI-URDU ───
  hi: {
    badge: 'भारत के लिए बना · WhatsApp-First · तेलुगु, हिंदी और English',
    h1_line1: 'Patient ने Call किया।',
    h1_highlight: 'किसी ने उठाया नहीं।',
    sub: 'आपका AI receptionist हर call उठाता है, appointment book करता है, और WhatsApp पर follow-up करता है — तेलुगु, हिंदी-उर्दू और English में। 24/7।',
    cta_whatsapp: '💬 WhatsApp पर बात करें',
    cta_call: 'Call Book करें',
    demo_title: 'सुनिए: AI Receptionist Demo',
    problem_tag: 'समस्या',
    problem_h2: 'आप हर दिन patients खो रहे हैं',
    problem_sub: 'Indian clinics हर महीने लाखों रुपये खो रही हैं — तीन ऐसी कमियों की वजह से जिनकी कोई बात नहीं करता।',
    problems: [
      { num: '01', title: 'Receptionist 6 बजे घर चली जाती है', body: 'शाम और Sunday की calls voicemail पर जाती हैं — या competitor के WhatsApp पर। Patient जो पहले उठाए उसे book करता है।', stat: '⚠ 78% पहले जवाब देने वाले को चुनते हैं' },
      { num: '02', title: 'WhatsApp में अफरा-तफरी', body: '200+ unread messages। Patient inquiries, lab reports, staff chats, और festival forwards — सब एक साथ। न system, न follow-up।', stat: '⚠ सिर्फ 35% clinics digital PMS use करती हैं' },
      { num: '03', title: 'No-Shows से OPD खाली', body: 'Patients book करके भूल जाते हैं। WhatsApp reminders (98% open rate) के बिना, आपकी slot खाली रहती है। हर missed slot = ₹500–₹2,000 का नुकसान।', stat: '⚠ 30% तक no-show rate' },
    ],
    verticals_h2: 'आपकी Industry के लिए बना',
    verticals_sub: 'हर VerveMind agent आपकी industry की भाषा बोलता है — literally।',
    verticals: [
      { emoji: '🦷', title: 'Dental Clinics', desc: 'Recall campaigns, appointment booking, और review collection — सब automatic। AI patient की पसंद के हिसाब से तेलुगु, हिंदी या English में बात करता है।' },
      { emoji: '💆', title: 'MedSpa & Wellness', desc: 'पुराने clients को WhatsApp से reactivate करें। Inquiry से appointment 60 seconds में। Festival offers built-in।' },
      { emoji: '🏠', title: 'Real Estate Brokers', desc: 'JustDial और MagicBricks leads का instant WhatsApp response। Budget, location, और BHK से auto-qualify।' },
      { emoji: '🏥', title: 'Multi-Specialty Hospitals', desc: 'Patient inquiries department-wise route करें, OPD slots book करें, discharge follow-ups भेजें। 90 min wait time कम करें।' },
    ],
    tools_h2: 'Free Starter Kit — आपके लिए',
    tools_sub: 'ये tools free download करें। Signup नहीं चाहिए। बस WhatsApp पर keyword भेजें।',
    tools: [
      { icon: '📋', title: 'WhatsApp Message Templates', desc: '10 ready-to-use appointment, recall और follow-up templates हिंदी + English में।', keyword: 'TEMPLATES' },
      { icon: '📊', title: 'Missed Call Calculator', desc: 'देखें कि आपकी clinic हर महीने कितने लाख missed calls की वजह से खो रही है।', keyword: 'CALCULATOR' },
      { icon: '📍', title: 'Google Business Checklist', desc: '15-point checklist — Google listing optimize करें और ज़्यादा local patients पाएं।', keyword: 'GBP' },
      { icon: '🔄', title: 'Patient Recall Scripts', desc: '5 proven WhatsApp scripts — 90+ दिनों से न आने वाले patients को वापस लाएं।', keyword: 'RECALL' },
    ],
    pricing_h2: 'सीधी Monthly Pricing',
    pricing_sub: 'कोई setup fees नहीं। कोई lock-in नहीं। WhatsApp पर cancel करें। UPI और Razorpay accepted।',
    pricing_amount: '₹14,999/month से शुरू',
    pricing_note: 'यानी ₹500/दिन से भी कम — आपकी receptionist की daily salary से कम।',
    pricing_cta: 'शुरू करें — WhatsApp करें →',
    cta_h2: 'आपकी Clinic के लिए Demo देखें',
    cta_sub: 'WhatsApp पर message करें। 24 घंटे में तेलुगु, हिंदी या English में customized walkthrough पाएं।',
  },

  // ─── TELUGU ───
  te: {
    badge: 'భారత్ కోసం · WhatsApp-First · తెలుగు, హిందీ & English',
    h1_line1: 'Patient Call చేశారు.',
    h1_highlight: 'ఎవరూ ఎత్తలేదు.',
    sub: 'మీ AI receptionist ప్రతి call ఎత్తుతుంది, appointments book చేస్తుంది, WhatsApp లో follow-up చేస్తుంది — తెలుగు, హిందీ-ఉర్దూ, English లో. 24/7.',
    cta_whatsapp: '💬 WhatsApp లో మాట్లాడండి',
    cta_call: 'Call Book చేయండి',
    demo_title: 'వినండి: AI Receptionist Demo',
    problem_tag: 'సమస్య',
    problem_h2: 'మీరు ప్రతిరోజూ patients కోల్పోతున్నారు',
    problem_sub: 'Indian clinics ప్రతి నెల లక్షల్లో నష్టపోతున్నాయి — ఎవరూ మాట్లాడని మూడు gaps వల్ల.',
    problems: [
      { num: '01', title: 'Receptionist సాయంత్రం 6కి వెళ్ళిపోతుంది', body: 'సాయంత్రం మరియు Sunday calls voicemail కి వెళ్తాయి — లేదా competitor WhatsApp కి. Patient ముందు ఎత్తిన వారిని book చేస్తారు.', stat: '⚠ 78% మొదట respond చేసిన వారిని ఎంచుకుంటారు' },
      { num: '02', title: 'WhatsApp లో అస్తవ్యస్తం', body: '200+ unread messages. Patient inquiries, lab reports, staff chats, festival forwards — అన్నీ కలిసిపోతాయి. System లేదు, follow-up లేదు.', stat: '⚠ 35% clinics మాత్రమే digital PMS వాడతాయి' },
      { num: '03', title: 'No-Shows వల్ల OPD ఖాళీ', body: 'Patients book చేసి మర్చిపోతారు. WhatsApp reminders (98% open rate) లేకుండా, మీ slot ఖాళీగా ఉంటుంది. ₹500–₹2,000 నష్టం per slot.', stat: '⚠ 30% వరకు no-show rate' },
    ],
    verticals_h2: 'మీ Industry కోసం తయారైంది',
    verticals_sub: 'ప్రతి VerveMind agent మీ industry భాష మాట్లాడుతుంది — literally.',
    verticals: [
      { emoji: '🦷', title: 'Dental Clinics', desc: 'Recall campaigns, appointment booking, review collection — అన్నీ automatic. AI patient preference ప్రకారం తెలుగు, హిందీ లేదా English లో మాట్లాడుతుంది.' },
      { emoji: '💆', title: 'MedSpa & Wellness', desc: 'పాత clients ని WhatsApp ద్వారా reactivate చేయండి. Inquiry నుంచి appointment 60 seconds లో. Festival offers built-in.' },
      { emoji: '🏠', title: 'Real Estate Brokers', desc: 'JustDial, MagicBricks leads కి instant WhatsApp response. Budget, location, BHK ద్వారా auto-qualify.' },
      { emoji: '🏥', title: 'Multi-Specialty Hospitals', desc: 'Patient inquiries department-wise route చేయండి, OPD slots book చేయండి, discharge follow-ups పంపండి.' },
    ],
    tools_h2: 'Free Starter Kit — మీ కోసం',
    tools_sub: 'ఈ tools free గా download చేయండి. Signup అవసరం లేదు. WhatsApp లో keyword పంపండి.',
    tools: [
      { icon: '📋', title: 'WhatsApp Message Templates', desc: '10 ready-to-use appointment, recall & follow-up templates హిందీ + English లో.', keyword: 'TEMPLATES' },
      { icon: '📊', title: 'Missed Call Calculator', desc: 'మీ clinic ప్రతి నెల missed calls వల్ల ఎంత నష్టపోతోందో చూడండి.', keyword: 'CALCULATOR' },
      { icon: '📍', title: 'Google Business Checklist', desc: '15-point checklist — Google listing optimize చేసి ఎక్కువ local patients పొందండి.', keyword: 'GBP' },
      { icon: '🔄', title: 'Patient Recall Scripts', desc: '90+ రోజుల నుంచి రాని patients ని తిరిగి తీసుకురావడానికి 5 proven WhatsApp scripts.', keyword: 'RECALL' },
    ],
    pricing_h2: 'సింపుల్ Monthly Pricing',
    pricing_sub: 'Setup fees లేవు. Lock-in లేదు. WhatsApp లో cancel చేయండి. UPI & Razorpay accepted.',
    pricing_amount: '₹14,999/నెల నుంచి',
    pricing_note: 'రోజుకు ₹500 కంటే తక్కువ — మీ receptionist daily salary కంటే తక్కువ.',
    pricing_cta: 'మొదలుపెట్టండి — WhatsApp చేయండి →',
    cta_h2: 'మీ Clinic కోసం Demo చూడండి',
    cta_sub: 'WhatsApp లో message చేయండి. 24 గంటల్లో తెలుగు, హిందీ లేదా English లో customized walkthrough పొందండి.',
  },
};
