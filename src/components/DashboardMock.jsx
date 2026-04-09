export default function DashboardMock({ variant = "default" }) {
  const jobs = [
    { title: "Frontend Engineer", company: "Razorpay", score: 94, status: "Applied" },
    { title: "React Developer", company: "Swiggy", score: 87, status: "Applied" },
    { title: "Full Stack Dev", company: "Zerodha", score: 82, status: "Pending" },
    { title: "SDE Intern", company: "Google", score: 79, status: "Applied" },
    { title: "Product Engineer", company: "Cred", score: 76, status: "Queued" },
  ];

  const activityFeed = [
    { time: "6:02 AM", text: "Applied to Frontend Engineer at Razorpay" },
    { time: "6:04 AM", text: "Applied to React Developer at Swiggy" },
    { time: "6:07 AM", text: "Scored 47 new jobs from LinkedIn" },
    { time: "6:09 AM", text: "Applied to Full Stack Dev at Zerodha" },
    { time: "6:12 AM", text: "Generated cover letter for Google SDE" },
    { time: "6:14 AM", text: "Applied to SDE Intern at Google" },
  ];

  const scoreView = [
    { title: "Frontend Engineer", company: "Razorpay", keyword: 94, semantic: 91, pref: 96, recency: 88, final: 94 },
    { title: "React Developer", company: "Swiggy", keyword: 89, semantic: 84, pref: 88, recency: 85, final: 87 },
    { title: "SDE Intern", company: "Google", keyword: 72, semantic: 86, pref: 78, recency: 81, final: 79 },
  ];

  return (
    <div
      className="dashboard-mock"
      style={{
        padding: "1.5rem",
        fontFamily: '"Helvetica Neue", sans-serif',
        fontSize: "0.75rem",
        transform: "perspective(1200px) rotateY(-2deg) rotateX(1deg)",
      }}
    >
      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
          <span style={{ color: "rgba(240,236,228,0.5)", fontSize: "0.625rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {variant === "activity" ? "Agent Running" : variant === "score" ? "Scoring Engine" : "ApplyOS Dashboard"}
          </span>
        </div>
        <span style={{ color: "rgba(240,236,228,0.25)", fontSize: "0.625rem" }}>
          {variant === "activity" ? "Today 6:02 AM" : "Last run: 2h ago"}
        </span>
      </div>

      {variant === "activity" ? (
        /* Activity feed view */
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {activityFeed.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "0.75rem",
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(240,236,228,0.06)",
              }}
            >
              <span style={{ color: "rgba(240,236,228,0.2)", fontSize: "0.625rem", minWidth: 50 }}>{item.time}</span>
              <span style={{ color: "rgba(240,236,228,0.55)", fontSize: "0.6875rem" }}>{item.text}</span>
            </div>
          ))}
        </div>
      ) : variant === "score" ? (
        /* Score view */
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", color: "rgba(240,236,228,0.2)", fontSize: "0.5625rem", letterSpacing: "0.1em", textTransform: "uppercase", paddingBottom: "0.375rem", borderBottom: "1px solid rgba(240,236,228,0.06)" }}>
            <span style={{ flex: 2 }}>Job</span>
            <span style={{ flex: 1, textAlign: "center" }}>KW</span>
            <span style={{ flex: 1, textAlign: "center" }}>SEM</span>
            <span style={{ flex: 1, textAlign: "center" }}>PREF</span>
            <span style={{ flex: 1, textAlign: "center" }}>REC</span>
            <span style={{ flex: 1, textAlign: "center" }}>FINAL</span>
          </div>
          {scoreView.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", padding: "0.375rem 0", borderBottom: "1px solid rgba(240,236,228,0.04)", alignItems: "center" }}>
              <div style={{ flex: 2 }}>
                <div style={{ color: "rgba(240,236,228,0.7)", fontSize: "0.6875rem" }}>{item.title}</div>
                <div style={{ color: "rgba(240,236,228,0.25)", fontSize: "0.5625rem" }}>{item.company}</div>
              </div>
              <span style={{ flex: 1, textAlign: "center", color: "rgba(240,236,228,0.4)", fontSize: "0.625rem" }}>{item.keyword}</span>
              <span style={{ flex: 1, textAlign: "center", color: "rgba(240,236,228,0.4)", fontSize: "0.625rem" }}>{item.semantic}</span>
              <span style={{ flex: 1, textAlign: "center", color: "rgba(240,236,228,0.4)", fontSize: "0.625rem" }}>{item.pref}</span>
              <span style={{ flex: 1, textAlign: "center", color: "rgba(240,236,228,0.4)", fontSize: "0.625rem" }}>{item.recency}</span>
              <span style={{ flex: 1, textAlign: "center", color: "#10b981", fontSize: "0.6875rem", fontWeight: 500 }}>{item.final}</span>
            </div>
          ))}
        </div>
      ) : (
        /* Default dashboard view */
        <>
          {/* Stats row */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
            {[
              { label: "Applied Today", value: "23" },
              { label: "Jobs Scanned", value: "847" },
              { label: "Avg Score", value: "84%" },
            ].map((stat) => (
              <div key={stat.label} style={{ flex: 1, padding: "0.75rem", border: "1px solid rgba(240,236,228,0.06)" }}>
                <div style={{ color: "rgba(240,236,228,0.25)", fontSize: "0.5625rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  {stat.label}
                </div>
                <div style={{ color: "#f0ece4", fontSize: "1.25rem", fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Job list */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {jobs.map((job, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.625rem 0",
                  borderBottom: "1px solid rgba(240,236,228,0.06)",
                }}
              >
                <div>
                  <div style={{ color: "rgba(240,236,228,0.7)", fontSize: "0.6875rem" }}>{job.title}</div>
                  <div style={{ color: "rgba(240,236,228,0.25)", fontSize: "0.5625rem" }}>{job.company}</div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ color: "rgba(240,236,228,0.3)", fontSize: "0.625rem" }}>{job.score}/100</span>
                  <span
                    style={{
                      fontSize: "0.5625rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: job.status === "Applied" ? "#10b981" : "rgba(240,236,228,0.3)",
                    }}
                  >
                    {job.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
