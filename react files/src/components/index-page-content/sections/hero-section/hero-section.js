import React from 'react'

import { BaseSection } from '../../../base-section/base-section'

export const HeroSection = () => (
  <BaseSection
    SectionTitle={() => (
      <>
        Be a hero. Be a <span className="pColor">GDG</span>.
      </>
    )}
    classNames="hero"
    id="Home"
  >
    <p className="description">
      Welcome to GDG Settat. Google Developer Groups of Settat City is
      for developers who are interested in Google's developer technology,
      everything from Android, App Engine, and Google Chrome platforms, to
      product APIs like the Maps API, YouTube API and Google Calendar API.
    </p>
    <p className="hashtags">
      #GDGSettat &nbsp; #WTMSettat &nbsp; #GDG &nbsp; #WTM
    </p>
    <div className="action-btns">
      <a
        className="btn lg"
        href="https://www.meetup.com/GDGSettat/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check our Meetup page
      </a>
    </div>
  </BaseSection>
)
