import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routes from './routes'

export default function App() {
  const { pathname } = useLocation();

  // rotas que NÃO devem mostrar navbar
  const hideNavbarIn = ["/"];

  return (
    <>
      {!hideNavbarIn.includes(pathname) && <Navbar />}
      <main>
        <Routes />
      </main>
    </>
  );
}
