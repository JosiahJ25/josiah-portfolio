export default function Resume() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Resume / CV</h1>

      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "none", marginTop: "20px" }}
      />

      <a 
        href="/resume.pdf" 
        download 
        style={{ display: "inline-block", marginTop: "20px" }}
      >
        Download Resume
      </a>
    </div>
  );
}
