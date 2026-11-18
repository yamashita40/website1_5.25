import "./Footer.css";

const footerColumns = [
  {
    id: 1,
    title: "最新资讯",
    links: [
      "Surface Pro",
      "Surface Laptop",
      "Surface Laptop Ultra",
      "组织用 Copilot",
      "个人用 Copilot",
      "Windows 中的 AI",
      "查看 Microsoft 产品",
      "Windows 11 应用",
    ],
  },
  {
    id: 2,
    title: "Microsoft Store",
    links: [
      "账户个人资料",
      "下载中心",
      "Microsoft Store 支持",
      "退货与退款",
      "订单记录",
      "选择 Microsoft Store 的理由",
    ],
  },
  {
    id: 3,
    title: "教育",
    links: [
      "Microsoft Education",
      "教育机构设备",
      "Microsoft Teams for Education",
      "Microsoft 365 Education",
      "Office Education",
      "教育工作者培训与开发",
      "学生和家长优惠",
      "学生版 Azure",
    ],
  },
  {
    id: 4,
    title: "商务",
    links: [
      "Microsoft AI",
      "Microsoft Security",
      "Azure",
      "Dynamics 365",
      "Microsoft 365",
      "Microsoft Advertising",
      "Microsoft 365 Copilot",
      "Microsoft Teams",
    ],
  },
  {
    id: 5,
    title: "开发者与 IT",
    links: [
      "Microsoft 开发者",
      "Microsoft Learn",
      "AI 市场应用支持",
      "Microsoft Tech Community",
      "Microsoft Marketplace",
      "Microsoft Power Platform",
      "软件公司",
      "Visual Studio",
    ],
  },
  {
    id: 6,
    title: "公司",
    links: [
      "招聘信息",
      "公司新闻",
      "Microsoft 隐私",
      "投资者",
      "无障碍功能",
    ],
  },
];

const footerLegalLinks = [
  "联系 Microsoft",
  "隐私",
  "特定商业交易说明",
  "使用条款",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {footerColumns.map((column) => (
          <div className="footer-column" key={column.id}>
            <h3>{column.title}</h3>

            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-settings">
          <a href="#" className="footer-setting-link">
            <span className="footer-setting-icon">◎</span>
            <span>简体中文（中国）</span>
          </a>

          <a href="#" className="footer-setting-link">
            <span className="footer-privacy-icon">✓</span>
            <span>隐私选择</span>
          </a>

          <a href="#" className="footer-setting-link">
            消费者健康隐私
          </a>
        </div>

        <div className="footer-legal">
          {footerLegalLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}

          <span>© Microsoft 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;