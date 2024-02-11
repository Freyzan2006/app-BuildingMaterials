import './assets/scss/App.scss';


import { Header, Footer } from './widgets';
import Home from './pages/Home';
import { WhatsApp, SpeedNav } from './features';






const App: React.FC = () => {
  return (
    <div className = "root">
      <Header />
      <Home />
      <Footer />

      <WhatsApp />
      <SpeedNav />
    </div>
  )
}

export default App;
