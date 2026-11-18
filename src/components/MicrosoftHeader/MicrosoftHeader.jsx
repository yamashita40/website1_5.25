import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./MicrosoftHeader.css";

function MicrosoftHeader({ variant = "home" }) {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const isSurfacePage = variant === "surface";

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    }

    if (showSearch) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [showSearch]);

  return (
    <>
      <header
        className={
          isSurfacePage
            ? "header surface-header"
            : "header"
        }
      >
        <Link to="/" className="logo">
          Microsoft
        </Link>

        {isSurfacePage ? (
          <>
            <span className="header-divider" />

            <Link
              to="/surface"
              className="surface-brand"
            >
              Discover Surface
            </Link>

            <nav className="nav surface-nav">
              <a href="#surface-products">
                Computers
                <span className="nav-arrow">⌄</span>
              </a>

              <a href="#">
                Help &amp; Support
                <span className="nav-arrow">⌄</span>
              </a>

              <a href="#">Accessories</a>
              <a href="#surface-products">Shop</a>
              <a href="#">Surface for Business</a>
            </nav>
          </>
        ) : (
          <nav className="nav">
            <a href="#">PU WEIWEI 365</a>
            <a href="#">Teams</a>
            <a href="#">Windows</a>

            <Link to="/surface">
              Surface
            </Link>

            <a href="#">Xbox</a>
          </nav>
        )}

        <div className="header-actions">
          <button type="button">
            <span>All Microsoft</span>
            <span>⌄</span>
          </button>

          <button
            className="search-btn"
            type="button"
            onClick={() => setShowSearch(true)}
          >
            <span>Search</span>
            <span className="search-icon">⌕</span>
          </button>

          <button className="cart-btn" type="button">
            <span>Cart</span>
            <span className="cart-icon">🛒</span>
          </button>

          <button className="signin-btn" type="button">
            <span className="signin-icon">ME</span>
          </button>
        </div>
      </header>

      {showSearch && (
        <div
          className="search-panel"
          ref={searchRef}
        >
          <input
            placeholder="Search Microsoft.com"
            autoFocus
          />

          <button
            className="search-close-btn"
            type="button"
            onClick={() => setShowSearch(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

export default MicrosoftHeader;