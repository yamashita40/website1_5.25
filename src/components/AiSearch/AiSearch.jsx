import { useState } from "react";
import "./AiSearch.css";

const suggestionItems = [
  "帮我选择合适的电脑",
  "Microsoft 365 使用建议",
  "登录我的账户",
];

function AiSearch() {
  const [searchText, setSearchText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!searchText.trim()) {
      return;
    }

    console.log("准备搜索：", searchText);
  }

  function handleSuggestionClick(text) {
    setSearchText(text);
  }

  return (
    <section className="ai-search-section">
      <div className="ai-search-content">
        <h2>利用 AI 推荐，快速找到你需要的内容</h2>

        <form className="ai-search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="询问产品、账户、订单或技术问题"
          />

          <button
            className="ai-search-submit"
            type="submit"
            aria-label="提交搜索"
          >
            ➤
          </button>
        </form>

        <div className="ai-search-suggestions">
          {suggestionItems.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleSuggestionClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiSearch;