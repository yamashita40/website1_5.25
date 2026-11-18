import "./BusinessCards.css";

const businessProducts = [
  {
    id: 1,
    image: "/images/business-surface.jpg",
    badge: "新登场",
    title: "企业版 Surface 新功能",
    description:
      "企业版 Surface 与 Surface Pro 配备新一代处理器，为组织带来更高的效率、安全性与灵活性。",
    linkText: "查看详情",
    href: "#",
  },
  {
    id: 2,
    image: "/images/business-copilot.jpg",
    title: "Microsoft 365 Copilot",
    description:
      "通过面向企业的 Microsoft 365 AI 功能，节省时间，把精力集中在更重要的工作上。",
    linkText: "查看详情",
    href: "#",
  },
  {
    id: 3,
    image: "/images/business-ai.jpg",
    title: "加入 AI 时代",
    description:
      "探索 Microsoft AI 解决方案，帮助组织创新、提高生产效率并加速业务发展。",
    linkText: "查看 AI 解决方案",
    href: "#",
  },
  {
    id: 4,
    image: "/images/business-windows.jpg",
    title: "面向企业的 Windows 11",
    description:
      "专为混合办公设计，兼顾生产效率、安全性和 IT 管理需求。",
    linkText: "查看详情",
    href: "#",
  },
];

function BusinessCards() {
  return (
    <section className="business-section">
      <div className="business-inner">
        <h2 className="business-title">面向企业</h2>

        <div className="business-grid">
          {businessProducts.map((product) => (
            <a
              className="business-card"
              href={product.href}
              key={product.id}
            >
              <img
                className="business-card-image"
                src={product.image}
                alt={product.title}
              />

              <div className="business-card-content">
                {product.badge && (
                  <span className="business-card-badge">
                    {product.badge}
                  </span>
                )}

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <span className="business-card-link">
                  {product.linkText}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessCards;