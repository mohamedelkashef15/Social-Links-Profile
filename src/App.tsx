import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <main>
      <section id="social-card">
        <img src="images/avatar-jessica.jpeg" alt="Jessica" />
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
        <p className="title">"Front-end developer and avid reader."</p>
        <SocialLinks />
      </section>
    </main>
  );
}

export default App;
