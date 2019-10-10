import React from 'react'

import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="organizer">GDG Settat</h1>
        <nav className="links">
          <a
            href="https://www.meetup.com/GDGSettat"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup
          </a>
          
          <a
            href="https://www.facebook.com/gdg.settat/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          
        </nav>
      </div>
    </footer>
  )
}
