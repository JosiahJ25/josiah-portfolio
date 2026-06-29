export default function Home() {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img
        src="profile.jpg"
        alt="Profile"
        style={{ width: "150px", borderRadius: "50%" }}
      />

      <h1 style={{ marginTop: "20px" }}>Josiah Johnson</h1>
      <h2>Computer Science | Developer | Researcher</h2>

      <p style={{ maxWidth: "700px", marginTop: "20px" }}>
        I’m a rising senior Computer Science major at Winston‑Salem State University
        with a deep passion for technology and the rapid advancements shaping our world.
        My interest in tech began with gaming, social media, and computer hardware, and
        has grown into skills in video editing, digital art design, and software development.
        <br /><br />
        On campus, I’ve been involved in the Computer Science Undergraduate Bridge Experience
        Program, which has given me opportunities to network with professors, students, and
        alumni while gaining mentorship, research guidance, and exposure to conferences,
        certifications, and internship pathways.
        <br /><br />
        Throughout the 2025–2026 school year, I’ve focused on embracing discomfort, adapting
        to change, and strengthening my confidence and soft skills. I’m excited to continue
        exploring my interests and potential career paths in full‑stack development, software
        engineering, machine learning, and application development.
        <br /><br />
        I believe I am capable of achieving anything I commit myself to. With hard work,
        faith, and dedication, I strive to make the most of every opportunity and resource
        available to me.
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        <a href="resume.pdf">Download Resume</a>
        <a href="https://www.linkedin.com/in/josiah-johnson-a38474338/">LinkedIn</a>
        <a href="/projects">Projects</a>
      </div>
    </div>
  );
}
