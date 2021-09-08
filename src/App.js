// import './App.css';
// import Child from './child'
// import { TransactionProvider } from './contTransaction';
// import React from 'react'

// function App() {
  
  
//   return (

//     // <TransactionProvider>
//     <Child></Child>
//     // </TransactionProvider>
//   );
// }

// export default App;



// import React from 'react';
// import './App.css';
// import Child from './child';
// import {TransactionProvider} from './contTransaction';

// function App() {
//   return (
//     <TransactionProvider>
//       <Child />
//     </TransactionProvider>
//   );
// }

// export default App;



import React from 'react'
import {Header} from './header'
import {Balance} from './balance'
import {IncomeExpenses} from './incomeExpenses'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import './App.css'

function App () {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
        <Balance/>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>

      
    </GlobalProvider>
  )
}

export default App;