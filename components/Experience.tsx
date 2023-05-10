

// Components

import Section from './Section';

// Data

import { experienceData } from '../utils/experience';
// Animations
import ExperienceCard from './ExperienceCard';


export default function Experience() {
  const projectCardsDisplay = experienceData.map((project) => (
    <ExperienceCard key={project.title} {...project} />
  ));

  return (
    <Section id="experience">
      <h2 className="text-heading-lg text-primary-dark dark:text-primary-light">
       Work <span className="text-js-yellow underline">Experience</span> 
      </h2>

      <div className="mt-10">{projectCardsDisplay}</div>


    </Section>
  );
}