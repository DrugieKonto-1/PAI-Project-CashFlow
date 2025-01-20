export const Features = () => (
  <section id="features" className="features">
    <h3>Our Features</h3>
    <div className="feature-grid">
      <FeatureItem title="Real-Time Tracking" description="Monitor your accounts with live updates." />
      <FeatureItem title="Secure Transactions" description="Top-notch security for your peace of mind." />
      <FeatureItem title="Personalized Insights" description="Get custom reports tailored to your needs." />
    </div>

  </section>
);

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="feature-item">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);
