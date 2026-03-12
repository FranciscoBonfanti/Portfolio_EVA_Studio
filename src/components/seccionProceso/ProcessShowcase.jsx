import "./ProcessShowcase.css";

const steps = [
  { title: "Web\nDevelopment", done: true, delay: "0s" },
  { title: "Marketing", done: true, delay: "1.15s" },
  { title: "Design", done: true, delay: "2.3s" },
  { title: "Software\nDevelopment", done: true, delay: "3.45s" },
];

export default function ProcessShowcase() {
  return (
    <section className="ps-section">
      <div className="ps-frame">
        <div className="ps-top-row">
          {steps.map((step, index) => (
            <article
              className={`ps-doc ${step.done ? "is-done" : "is-pending"}`}
              key={index}
              style={{ "--delay": step.delay }}
            >
              <span className="ps-doc-shine" />
              <span className="ps-doc-fold" />

              <span className="ps-doc-icon" aria-hidden="true">
                {step.done ? (
                  <svg viewBox="0 0 16 16">
                    <path d="M3.2 8.4 6.4 11.3 12.8 4.9" />
                  </svg>
                ) : null}
              </span>

              <h3>
                {step.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
            </article>
          ))}
        </div>

        <div className="ps-flow" aria-hidden="true">
          <svg
            viewBox="0 0 1200 430"
            className="ps-svg"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* líneas base hacia el botón */}
            <path className="ps-line-base" d="M155 45 L155 205 L600 205 L600 340" />
            <path className="ps-line-base" d="M405 45 L405 205 L600 205 L600 340" />
            <path className="ps-line-base" d="M705 45 L705 205 L600 205 L600 340" />
            <path className="ps-line-base" d="M960 45 L960 205 L600 205 L600 340" />

            {/* líneas glow animadas directas al objetivo */}
            <path
              id="flow-1"
              className="ps-line-glow"
              d="M155 45 L155 205 L600 205 L600 340"
              filter="url(#softGlow)"
            />
            <path
              id="flow-2"
              className="ps-line-glow"
              d="M405 45 L405 205 L600 205 L600 340"
              filter="url(#softGlow)"
            />
            <path
              id="flow-3"
              className="ps-line-glow"
              d="M705 45 L705 205 L600 205 L600 340"
              filter="url(#softGlow)"
            />
            <path
              id="flow-4"
              className="ps-line-glow"
              d="M960 45 L960 205 L600 205 L600 340"
              filter="url(#softGlow)"
            />
          </svg>
        </div>

        <div className="ps-bottom">
          <button className="ps-business-btn">
  <span>Tu web</span>
</button>
        </div>
      </div>
    </section>
  );
}