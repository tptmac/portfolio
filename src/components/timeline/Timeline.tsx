import { Grid } from '@material-ui/core';
import React from 'react';

import WorkSection from './WorkSection';

function Timeline() {
  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <WorkSection companyName="Amazon (Advertising Sales)" jobTitle="Software Development Engineer II" dateFrom="2020-03" dateTo="2025-03"
          noteItems={[
            'Launched 1-Click Tactical Recommendations in the Campaigns Manager, a feature providing optimization tips to advertisers, reaching 11.5K advertisers with a 36% adopt-to-open ratio and driving 57% of total adoptions within 5 weeks.',
            'Designed and built the Sponsored Ads Tactical Recommendations API, enabling agency partners to apply recommendations programmatically, boosting adoption from 41% of managed advertisers and generating $10M+ in incremental revenue.',
            'Shipped Consolidated Recommendations, a suite of AI-driven optimization strategies across Amazon Ads API and console, improving overall performance score by 14%, conversions by 22%, and clicks by 35%; 91% of campaigns were adopted with two or more recommendation types and 57% adopted all suggested strategies.',
            'Increased feature discoverability and engagement by +1290 bps YoY, by migrating recommendations to the Opportunities page and expanding placements across the Amazon Ads console.',
            'Led internal workflow improvements that saved 11.6K+ audit hours/year, including enhanced audit flags, intelligent sorting, and bulk delete tools for campaign creation.',
            'Launched causal impact estimates and rationale explainability, improving clarity for advertisers and boosting adoption by +303 bps and +142 bps respectively.'
          ]}
        />
      </Grid>
      <Grid item>
        <WorkSection companyName="Amazon (Amazon Connections)" jobTitle="Software Development Engineer II" dateFrom="2019-12" dateTo="2020-03"
          noteItems={[
            'Contributed to Amazon Connections, a global feedback platform enabling employees to share daily insights on workplace experience, used to drive data-informed HR and organizational decisions.',
            'Developed full-stack functionality for dynamic follow-up questions triggered by user responses, improving survey relevance and data accuracy.',
            'Integrated Anchor/Driver/Root Cause (ADR) methodology into the system, enabling deeper root cause analysis and more adaptive survey content for leadership.'
          ]}
        />
      </Grid>
      <Grid item>
        <WorkSection companyName="Amazon (Amazon Connections)" jobTitle="Software Development Engineer" dateFrom="2017-11" dateTo="2019-12"
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