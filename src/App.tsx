import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Presentation from './Pages/Presentation/Presentation'
import History from './Pages/History/History'
import Urgence from './Pages/Urgence/Urgence'
import Error from './Pages/Error/Error'
import LandingPage from './Pages/LandingPage/LandingPage'
import Layout from './Components/Layout/Layout'
import styles from './App.module.scss'
import MentionLegale from './Pages/MentionLegale/MentionLegale'

function App() {

  return (
    <div className={styles.wrapper}>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />} >
            <Route path='presentation' element={<Presentation />} />
            <Route path="history" element={<History />} />
            <Route path="urgence" element={<Urgence />} />
            <Route path="legal-notice" element={<MentionLegale />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
