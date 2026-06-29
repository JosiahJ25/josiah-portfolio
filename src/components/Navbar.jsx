export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <a href="/">Home</a>
      <a href="/resume">Resume</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}
