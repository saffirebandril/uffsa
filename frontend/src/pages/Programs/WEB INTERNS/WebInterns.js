import React from 'react';
import './WebInterns.css';

import PersonGrid from '../../../components/PersonGrid/PersonGrid';
import {
  DEFAULT_PHOTO,
  WEBMASTER_2026_2027,
  TEAM_LEADS_2026_2027,
  INTERNS_2026_2027,
  WEBMASTER_2025_2026,
  TEAM_LEADS_2025_2026,
  INTERNS_2025_2026,
} from './webInternsData';

const GRID = {
  defaultPhoto: DEFAULT_PHOTO,
  sectionClass: 'web-interns-section',
  titleClass: 'web-interns-section-title',
  containerClass: 'web-interns-container',
  cardClass: 'web-interns-card',
  textClass: 'web-interns-card__text',
};

const GRID_ALT = { ...GRID, sectionClass: 'web-interns-section alt-background' };

const WebInterns = () => {
  return (
    <div className='web-interns-page'>
      <h1 className='web-interns-year-title title'>Web Team 2026&ndash;2027</h1>

      <PersonGrid {...GRID}     id='web-interns' title='Webmaster'  people={WEBMASTER_2026_2027} />
      <PersonGrid {...GRID_ALT}                  title='Team Leads'  people={TEAM_LEADS_2026_2027} />
      <PersonGrid {...GRID}                      title='Web Interns' people={INTERNS_2026_2027} />

      <h1 className='web-interns-year-title web-interns-year-title--past title'>
        Web Team 2025&ndash;2026
      </h1>

      <PersonGrid {...GRID_ALT} title='Webmaster'  people={WEBMASTER_2025_2026} />
      <PersonGrid {...GRID}     title='Team Leads'  people={TEAM_LEADS_2025_2026} />
      <PersonGrid {...GRID_ALT} title='Web Interns' people={INTERNS_2025_2026} />

    </div>
  );
};

export default WebInterns;