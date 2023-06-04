import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full px-2 pt-4 sm:gap-2 sm:justify-start sm:flex-row">
      <span className="text-3xl font-semibold">Repositori</span>
      <a href="https://webs.uab.cat/compred/" target="_blank" rel="noreferrer">
        <img className="w-48" src="/logo.png" alt="logo" />
      </a>
      <span className="font-semibold font-xl">(work in progress)</span>
    </header>
  )
}

export default Header;