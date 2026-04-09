export default function Navigation() {
  const links = [
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "FEATURES", href: "#compare" },
    { label: "COMPARE", href: "#compare" },
    { label: "WAITLIST", href: "#waitlist" },
  ];

  return (
    <>
      <style>{`
        .nav-center-links {
          display: flex;
          gap: 2rem;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .nav-center-links {
            display: none !important;
          }
        }
      `}</style>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          padding: "1.25rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          background: "rgba(8,8,8,0.8)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: '"Helvetica Neue", sans-serif',
            fontSize: "0.75rem",
            fontWeight: 400,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#f0ece4",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          A O
        </a>

        {/* Center links — hidden below 768px */}
        <div className="nav-center-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                fontFamily: '"Helvetica Neue", sans-serif',
                fontSize: "0.6875rem",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(240,236,228,0.5)",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#f0ece4")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(240,236,228,0.5)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          style={{
            fontFamily: '"Helvetica Neue", sans-serif',
            fontSize: "0.6875rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.625rem 1.5rem",
            background: "#f0ece4",
            color: "#080808",
            transition: "opacity 0.3s",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          RESERVE ACCESS
        </a>
      </nav>
    </>
  );
}
