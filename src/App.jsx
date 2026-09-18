import Sidebar from "./components/Sidebar"
import StatsStrip from "./components/StatsStrip"
import Highlights from "./components/Highlights"
import Experience from "./components/Experience"
import Software from "./components/Software"
import Education from "./components/Education"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="font-sans antialiased md:flex">
      <Sidebar />
      <main className="md:ml-72 flex-1 min-w-0">
        <StatsStrip />
        <Highlights />
        <Experience />
        <Software />
        <Education />
        <Footer />
      </main>
    </div>
  )
}
