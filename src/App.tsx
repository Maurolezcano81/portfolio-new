import { useTranslation } from "react-i18next"
import Hero from "./components/Hero"
import { FloatingNav } from "./components/ui/FloatingNavbar"
import { FaHome } from "react-icons/fa"
import Grid from "./components/Grid"
import Projects from "./components/Projects"

function App() {

  const { t } = useTranslation('navbar')

  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden bg-white dark:bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[
            {
              name: t('home'), link: "#home", icon: <FaHome />
            }
          ]}
        />
        <Hero />
        <Grid />
        <Projects />
      </div>
    </main>
  )
}

export default App
