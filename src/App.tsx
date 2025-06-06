/**
 * React Challenges Application
 * Author: Jose Auyon
 * 
 * Main application component with routing for various React challenges
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChallengeList from './pages/ChallengeList'
import CalculatorApp from './pages/challenges/CalculatorApp'
import ConnectFourApp from './pages/challenges/ConnectFourApp'
import DiceApp from './pages/challenges/DiceApp'
import ExpenseApp from './pages/challenges/ExpenseApp'
import GradientApp from './pages/challenges/GradientApp'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<ChallengeList />} />
          <Route path="/calculator" element={<CalculatorApp />} />
          <Route path="/connect-four" element={<ConnectFourApp />} />
          <Route path="/dice-app" element={<DiceApp />} />
          <Route path="/expense" element={<ExpenseApp />} />
          <Route path="/gradient" element={<GradientApp />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
