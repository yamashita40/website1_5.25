import ProductLinkIcon from "./ProductLinkIcon";
import { Link } from "react-router-dom";
import "./ProductLinks.css";

const productLinks = [
  {
    id: 1,
    iconType: "tag",
    title: "优惠 Surface 特别型号",
    href: "/surface",
  },
  {
    id: 2,
    iconType: "surface",
    title: "购买 Surface",
    href: "#",
  },
  {
    id: 3,
    iconType: "xbox",
    title: "购买 Xbox",
    href: "#",
  },
  {
    id: 4,
    iconType: "microsoft",
    title: "购买 Microsoft 365",
    href: "#",
  },
  {
    id: 5,
    iconType: "store",
    title: "企业商店",
    href: "#",
  },
  {
    id: 6,
    iconType: "keyboard",
    title: "查看更多配件",
    href: "#",
  },
];

function ProductLinks() {
  return (
    <section className="product-link-section">
      {productLinks.map((item) => (
        <Link
  className="product-link-item"
  to={item.href}
  key={item.id}
>
          <span className="product-link-icon">
            <ProductLinkIcon type={item.iconType} />
          </span>

          <span className="product-link-title">
            {item.title}
          </span>
        </Link>
      ))}
    </section>
  );
}

export default ProductLinks;