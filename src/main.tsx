import React from 'react'
import { createRoot } from 'react-dom/client'

import Portfolio from './app'

import './index.css'

const App = document.getElementById('root')!
const root = createRoot(App)

root.render(<Portfolio />)
