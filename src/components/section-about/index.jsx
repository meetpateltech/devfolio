import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about} Web Developer</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
