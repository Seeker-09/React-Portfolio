import React from 'react'

function Header() {
  return (
    <header className='flex-row px-1'>
      <h2>
        <a data-testid="link" href="/">
          David Mundt II
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#contact-form">
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

