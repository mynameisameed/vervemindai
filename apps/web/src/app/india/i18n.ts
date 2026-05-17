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
    h1_line1: 'Customer Called.',
    h1_highlight: 'Nobody Picked Up.',
    sub: 'Your AI receptionist answers every call, books appointments, and follows up on WhatsApp — in Telugu, Hindi-Urdu, and English. 24/7. No missed business.',
    cta_whatsapp: '💬 Chat on WhatsApp',
    cta_call: 'Book a Call',
    demo_title: 'Listen: AI Receptionist Demo',
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
    pricing_sub: 'No setup fees. No lock-in. Cancel on WhatsApp anytime. UPI & Razorpay accepted.',
    pricing_amount: 'Starting at ₹14,999/month',
    pricing_note: 'That\'s less than ₹500/day — less than your receptionist\'s daily salary.',
    pricing_cta: 'Get Started — WhatsApp Us →',
    cta_h2: 'Get a Demo Built for Your Business',
    cta_sub: 'Message us on WhatsApp. Get a customized walkthrough in Telugu, Hindi, or English within 24 hours.',
  },

  // ─── HINDI-URDU ───
  hi: {
    badge: 'भारत के लिए बना · WhatsApp-First · तेलुगु, हिंदी और English',
    h1_line1: 'Customer ने Call किया।',
    h1_highlight: 'किसी ने उठाया नहीं।',
    sub: 'आपका AI receptionist हर call उठाता है, appointment book करता है, और WhatsApp पर follow-up करता है — तेलुगु, हिंदी-उर्दू और English में। 24/7।',
    cta_whatsapp: '💬 WhatsApp पर बात करें',
    cta_call: 'Call Book करें',
    demo_title: 'सुनिए: AI Receptionist Demo',
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
    pricing_sub: 'कोई setup fees नहीं। कोई lock-in नहीं। WhatsApp पर cancel करें। UPI और Razorpay accepted।',
    pricing_amount: '₹14,999/month से शुरू',
    pricing_note: 'यानी ₹500/दिन से भी कम — आपकी receptionist की daily salary से कम।',
    pricing_cta: 'शुरू करें — WhatsApp करें →',
    cta_h2: 'आपके Business के लिए Demo देखें',
    cta_sub: 'WhatsApp पर message करें। 24 घंटे में तेलुगु, हिंदी या English में customized walkthrough पाएं।',
  },

  // ─── TELUGU ───
  te: {
    badge: 'భారత్ కోసం · WhatsApp-First · తెలుగు, హిందీ & English',
    h1_line1: 'Customer Call చేశారు.',
    h1_highlight: 'ఎవరూ ఎత్తలేదు.',
    sub: 'మీ AI receptionist ప్రతి call ఎత్తుతుంది, appointments book చేస్తుంది, WhatsApp లో follow-up చేస్తుంది — తెలుగు, హిందీ-ఉర్దూ, English లో. 24/7.',
    cta_whatsapp: '💬 WhatsApp లో మాట్లాడండి',
    cta_call: 'Call Book చేయండి',
    demo_title: 'వినండి: AI Receptionist Demo',
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
    pricing_sub: 'Setup fees లేవు. Lock-in లేదు. WhatsApp లో cancel చేయండి. UPI & Razorpay accepted.',
    pricing_amount: '₹14,999/నెల నుంచి',
    pricing_note: 'రోజుకు ₹500 కంటే తక్కువ — మీ receptionist daily salary కంటే తక్కువ.',
    pricing_cta: 'మొదలుపెట్టండి — WhatsApp చేయండి →',
    cta_h2: 'మీ Business కోసం Demo చూడండి',
    cta_sub: 'WhatsApp లో message చేయండి. 24 గంటల్లో తెలుగు, హిందీ లేదా English లో customized walkthrough పొందండి.',
  },
};
