import { Grid } from '@material-ui/core';
import React from 'react';

import WorkSection from './WorkSection';

function Timeline() {
  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <WorkSection companyName="Amazon" jobTitle="Software Development Engineer" dateFrom="2017-11"
          noteItems={[
            'Collaborated with designer and business teams on driving products end-to-end building highly scalable and engaging customer-facing systems.',
            'Responsible for developing, testing, and maintaining services that gives employees an effective way to provide feedback on the workplace.',
            'Designed and implemented the technical front-end solutions and measured its success.'
          ]}
        />
      </Grid>
      <Grid item>
        <WorkSection companyName="Amazon" jobTitle="Software Development Engineer (Intern)" dateFrom="2017-01" dateTo="2017-04"
          noteItems={[
            `Implemented a library that wraps Amazon's internal machine learning service calls into functions for simplicity and code reuse.`,
            'Implemented a command line application that compares two machine learning models, each created by a different service, by outputting the error and throughput of the models.',
            'Analyzed different machine learning services and documented findings.'
          ]}
        />
      </Grid>
      <Grid item>
        <WorkSection companyName="Ontario Die International" jobTitle="Controls &amp; Automation Software Developer (Intern)" dateFrom="2016-05" dateTo="2015-08"
          noteItems={[
            'Added new functionality to existing controls and automation software from planning to production testing for manufacturing facilities around the globe.'
          ]}
        />
      </Grid>
      <Grid item>
        <WorkSection companyName="Sun Life Financial" jobTitle="Web &amp; E-Business Application Developer (Intern)" dateFrom="2015-09" dateTo="2015-12"
          noteItems={[
            'Collaborated with designers to create simple, clean, interactive, and user-friendly web applications.',
            'Generated and automated data mining reports.'
          ]}
        />
      </Grid>
      <Grid item>
        <WorkSection companyName="Teledyne DALSA" jobTitle="Software Developer (Intern)" dateFrom="2015-01" dateTo="2015-04" lastWorkSection
          noteItems={[
            'Replaced existing manufacturing processes with software.',
            'Implemented solutions to improve production test systems and software.'
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default Timeline;