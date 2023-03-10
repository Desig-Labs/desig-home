import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'

import App from 'app'
import UiProvider from 'providers/ui.provider'
import Web3Provider from 'providers/web3.provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UiProvider>
      <Web3Provider>
        <App />
      </Web3Provider>
    </UiProvider>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
