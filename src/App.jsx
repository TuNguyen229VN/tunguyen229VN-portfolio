import Dock from "./components/Dock"
import Lanyard from "./components/Lanyard"
import MainContent from "./components/MainContent"
import { dockItems } from "./constants/Constants"
import { useDarkMode } from "./hooks/useDarkMode"

function App() {
  const { isDark, toggle } = useDarkMode()
  return (
    <div className="bg-white dark:bg-[#121212] relative transition-colors duration-300">
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50 }}>
        <Dock
          items={dockItems(isDark, toggle)}
          panelHeight={60}
          baseItemSize={40}
          magnification={50}
        />
      </div>
      <MainContent />
      <div className="hidden lg:block absolute inset-0">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          frontImage="/images/avt-front.png"
          backImage="/images/avt-back.png"
          imageFit="cover"
          lanyardWidth={0.5}
        />
      </div>
    </div>
  )
}

export default App
