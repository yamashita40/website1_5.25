import MicrosoftHeader from "../components/MicrosoftHeader/MicrosoftHeader";
import "./SurfacePage.css";

function SurfacePage() {
  return (
    <div className="surface-page">
      <MicrosoftHeader variant="surface" />

      <a
        className="surface-announcement"
        href="#surface-products"
      >
        <span>
          Buy now, pay later—get the gear you need
          to succeed with flexible payment options
          at checkout.
        </span>

        <span className="surface-announcement-arrow">
          ›
        </span>
      </a>

      <main className="surface-main">
        <h1 className="surface-page-title">
          Shop Microsoft Surface Computers &amp;
          Accessories
        </h1>

        <section className="surface-hero">
          <div className="surface-hero-content">
            <span className="surface-new-badge">
              New
            </span>

            <h2>
              Meet the latest Surface PCs
            </h2>

            <p>
              Do more with Surface Laptop and
              Surface Pro—supercharged productivity,
              all-day battery life, and built-in
              privacy and data protection.
            </p>

            <div className="surface-hero-actions">
              <a
                href="#surface-products"
                className="surface-primary-button"
              >
                Shop Surface Laptop
              </a>

              <a
                href="#surface-products"
                className="surface-text-link"
              >
                Shop Surface Pro
                <span>›</span>
              </a>
            </div>
          </div>

          <div
            className="surface-hero-visual"
            role="img"
            aria-label="Latest Microsoft Surface computers"
          />
        </section>

        <nav
          className="surface-tabs"
          aria-label="Surface product categories"
        >
          <a
            className="surface-tab active"
            href="#surface-products"
          >
            All Surface
          </a>

          <a className="surface-tab" href="#">
            Student bundle eligible Surface
          </a>

          <a className="surface-tab" href="#">
            Microsoft Exclusives
          </a>

          <a className="surface-tab" href="#">
            Certified Refurbished Surface
          </a>

          <a className="surface-tab" href="#">
            Surface Bundles
          </a>
        </nav>

        <section
          className="surface-products"
          id="surface-products"
        >
          <h2>All Surface</h2>

          <p>
            Explore the fastest, most intelligent
            Windows PCs ever.
          </p>

          <p className="surface-product-count">
            Showing 1 through 4 of 8 items
          </p>

          {/* 下一步在这里制作商品卡片 */}
        </section>
      </main>
    </div>
  );
}

export default SurfacePage;