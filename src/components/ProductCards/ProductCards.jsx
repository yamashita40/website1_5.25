import "./ProductCards.css";

const productCards = [
  {
    id: 1,
    image: "/images/microsoft-365.png",
    title: "全面提升工作效率",
    description:
      "通过 Microsoft 365，获得云存储、安全保护和办公应用，帮助你更高效地完成工作。",
    linkText: "购买 Microsoft 365",
    href: "#",
  },
  {
    id: 2,
    image: "/images/accessories.png",
    title: "推荐配件",
    description:
      "探索鼠标、键盘、扩展坞和充电设备，随时随地保持高效工作。",
    linkText: "查看详情",
    href: "#",
  },
  {
    id: 3,
    image: "/images/xbox-controller.png",
    title: "Xbox 控制器",
    description:
      "选择适合你的 Xbox 控制器，享受舒适、精准的游戏体验。",
    linkText: "立即购买",
    href: "#",
  },
  {
    id: 4,
    image: "/images/game-pass.png",
    title: "Xbox Game Pass Ultimate",
    description:
      "畅玩主机、电脑和云游戏中的大量精彩作品，与好友一起探索更多游戏。",
    linkText: "立即加入",
    href: "#",
  },
];

function ProductCards() {
  return (
    <section className="product-cards-section">
      <div className="product-cards-grid">
        {productCards.map((product) => (
          <a
            className="product-card"
            href={product.href}
            key={product.id}
          >
            <img
              className="product-card-image"
              src={product.image}
              alt={product.title}
            />

            <div className="product-card-content">
              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <span className="product-card-link">
                {product.linkText}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProductCards;