import { useTranslation } from "react-i18next"
import Hero from "./components/Hero"
import { FloatingNav } from "./components/ui/FloatingNavbar"
import Grid from "./components/Grid"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import { TimelineDemo } from "./components/Timeline"
import { Tools } from "./components/Tools"

function App() {

  const { t } = useTranslation('navbar')

  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden bg-white dark:bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[
            {
              name: t('home'), link: "#home"
            },
            {
              name: t('about'), link: "#about"
            },
            {
              name: t('experience'), link: "#experience"
            },
            {
              name: t('projects'), link: "#projects"
            },
            {
              name: t('footer'), link: "#contact"
            }
          ]}
        />
        <Hero />
        <Grid />
        <TimelineDemo/>
        <Projects />
        <Tools />
        <Footer />
      </div>
    </main>
  )
}

export default App
