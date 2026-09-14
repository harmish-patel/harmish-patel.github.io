import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Experience from "./components/Experience"
import Software from "./components/Software"
import Education from "./components/Education"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Software />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
