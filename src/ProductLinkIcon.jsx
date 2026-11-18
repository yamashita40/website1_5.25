function ProductLinkIcon({ type }) {
  if (type === "tag") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12 12 3h7v7l-9 9-7-7Z" />
        <circle cx="16" cy="7" r="1.2" />
      </svg>
    );
  }

  if (type === "surface") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    );
  }

  if (type === "xbox") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8 4 10a4 4 0 0 0-2 3.5V17a2 2 0 0 0 3.4 1.4L8 16h8l2.6 2.4A2 2 0 0 0 22 17v-3.5A4 4 0 0 0 20 10l-3-2H7Z" />
        <path d="M8 12h4M10 10v4" />
        <circle cx="17" cy="11" r="1" />
        <circle cx="19" cy="13" r="1" />
      </svg>
    );
  }

  if (type === "microsoft") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </svg>
    );
  }

  if (type === "store") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="7" width="16" height="13" rx="1" />
        <path d="M8 7V5h8v2" />
        <rect x="9" y="11" width="6" height="6" />
      </svg>
    );
  }

  if (type === "keyboard") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="1" />
        <path d="M6 10h1M9 10h1M12 10h1M15 10h1M18 10h1" />
        <path d="M6 14h12" />
      </svg>
    );
  }

  return null;
}

export default ProductLinkIcon;