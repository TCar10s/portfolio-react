import React, { useEffect, useRef } from 'react'

import '../assets/styles/toggle-theme.css'

const ToggleTheme = () => {
  const toggle = useRef<HTMLInputElement>(null)
  const html: HTMLElement = document.documentElement

  const handleChange = () => {
    const theme = localStorage.theme

    if (theme) {
      html.classList.remove('dark')
      localStorage.removeItem('theme')

      return
    }

    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }

  useEffect(() => {
    const theme = localStorage.theme

    theme ? html.classList.add('dark') : html.classList.remove('dark')
  })

  useEffect(() => {
    if (!localStorage.theme) return
    if (toggle.current) toggle.current.checked = true
  })

  return (
    <div className="relative inline-block w-12 mr-2 align-middle select-none">
      <input
        ref={toggle}
        type="checkbox"
        name="toggle"
        className="toggle"
        id="toggle"
        onChange={handleChange}
      />

      <label
        htmlFor="toggle"
        className="block h-8 -mt-1 -ml-1 bg-white rounded-full shadow-sm cursor-pointer toggle-label"
      ></label>
    </div>
  )
}

export default ToggleTheme
