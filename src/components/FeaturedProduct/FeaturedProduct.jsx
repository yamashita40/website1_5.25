import "./FeaturedProduct.css";

const featuredProduct = {
  title: "Microsoft Edge",
  description:
    "高性能浏览器，提供更好的隐私保护、更高的工作效率以及 AI 助手体验。",
  buttonText: "立即下载",
  image: "/images/edge.jpg",
  href: "#",
};

function FeaturedProduct() {
  return (
    <section className="featured-section">
      <a
        className="featured-card"
        href={featuredProduct.href}
      >
        <div className="featured-text">

          <h2>{featuredProduct.title}</h2>

          <p>{featuredProduct.description}</p>

          <span className="featured-button">
            {featuredProduct.buttonText}
          </span>

        </div>

        <div className="featured-image">

          <img
            src={featuredProduct.image}
            alt={featuredProduct.title}
          />

        </div>

      </a>
    </section>
  );
}

export default FeaturedProduct;