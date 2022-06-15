import React from 'react'
import { Filter } from './display_buttons/Filter';
import { SortBy } from './display_buttons/SortBy';
import { ToggleView } from './display_buttons/ToggleView';

export const DisplaySettings = () => {
  return (
    <section className="display-settings">
        <nav className="navbar flex">
            <ul className="menu">
                <SortBy />
                <ToggleView />
                <Filter />
            </ul>
        </nav>
    </section>
  )
}
