import React from 'react'
import ReactDOM from 'react-dom/client'


import './styles/global.css'/*caminho do css para refletir no principal*/

import {Home} from './pages/Home' /* O export colocando em chaves*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
