import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import LastTransactions from './pages/LastTransactions';
import StatisticsSummary from './pages/StatisticsSummary';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TransactionInfo from './pages/TransactionInfo';
import { MainContext } from './contexts/MainContext'
import HamburguerMenu from './components/HamburguerMenu';
import Configurations from './pages/Configurations';

function App() {
  //global state loading
  const [isLoading, setIsLoading] = useState(false)

  //global state using context api for transaction selected
  const [selectedTransaction, setSelectedTransaction] = useState([])
  //side menu starts opened
  const [menuOpen, setMenuOpen] = useState(true)
  const [primaryColor, setPrimaryColor] = useState('#5d88cc')
  const [secondaryColor, setSecondaryColor] = useState('#ffffff')

  //to protect transiction details route
  const [hasSelectedTransition, setHasSelectedTransition] = useState(false)

  return (
    <Router>
      {isLoading ?
        <Loading />
        : ''
      }
      <MainContext.Provider value={{
        menuOpen,
        setMenuOpen,
        selectedTransaction,
        setSelectedTransaction,
        hasSelectedTransition,
        setHasSelectedTransition,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        setIsLoading
      }}>
        <div>
          <Header />
          <Sidebar />
          <HamburguerMenu />
          <div className={`left-panel ${menuOpen ? '' : 'large'}`}>
            <Switch>
              <Route path="/last-transactions/:id">
                <TransactionInfo />
              </Route>
              <Route path="/last-transactions">
                <LastTransactions />
              </Route>
              <Route path="/configurations">
                <Configurations />
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
