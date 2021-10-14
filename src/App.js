import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LastTransactions from './pages/LastTransactions';
import StatisticsSummary from './pages/StatisticsSummary';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TransactionInfo from './pages/TransactionInfo';
import { MainContext } from './contexts/MainContext'

function App() {
  //global state using context api for transaction selected
  const [selectedTransaction, setSelectedTransaction] = useState([])
  //side menu starts opened
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <Router>
      <MainContext.Provider value={{
        menuOpen,
        setMenuOpen,
        selectedTransaction,
        setSelectedTransaction
      }}>
        <div>
          <Header />
          <Sidebar />
          <div className={`left-panel ${menuOpen ? '' : 'large'}`}>
            <Switch>
              <Route path="/last-transactions/:id">
                <TransactionInfo />
              </Route>
              <Route path="/last-transactions">
                <LastTransactions />
              </Route>
              <Route path="/">
                <StatisticsSummary />
              </Route>
            </Switch>
          </div>
        </div>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
