export default function TermsPage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>Terms of Service</h1>
      <p>Last updated: March 6, 2026</p>
      <p>
        By using VerveMind AI websites, demos, and services, you agree to these terms. Services are provided for
        business use and may require separate commercial agreements for implementation, deployment, and support.
      </p>
      <h2>Service scope</h2>
      <ul>
        <li>Proof-of-concept and production deliverables are defined in written proposals or statements of work.</li>
        <li>Client is responsible for lawful use of messaging and calling channels.</li>
        <li>Availability targets may vary by third-party providers and integrations.</li>
      </ul>
      <h2>Payments</h2>
      <ul>
        <li>Fees, billing cadence, and cancellation terms are defined in signed agreements.</li>
        <li>Late or failed payments may pause service delivery.</li>
      </ul>
      <h2>Contact</h2>
      <p>
        Questions about terms: <a href="mailto:hello@vervemindai.com">hello@vervemindai.com</a>
      </p>
    </main>
  );
}
