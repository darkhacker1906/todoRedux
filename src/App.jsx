import React from 'react'
import { Provider } from 'react-redux'
import HomeDashBoard from './pages/HomeDashBoard'
import store from './redux/Store'

function App() {
  return (
    <div className='w-3/5 m-auto mt-5'>
     <Provider store={store}>
      <HomeDashBoard/>
     </Provider>
    </div>
  )
}

export default App
