import { Card, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { isNil as _isNil } from 'lodash';
import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components';

import { DATE_FORMAT } from '../../constants/general-constant';
import Description from './Description';
import Field from './Field';

interface WorkSectionProps {
  companyName: string;
  jobTitle: string;
  dateFrom: string;
  dateTo?: string;
  noteItems: string[];
  lastWorkSection?: boolean;
}

const GridLink = styled(Grid)`
  @media only screen and (min-width: 960px) {
    ::after {
      position: absolute;
      content: '';
      background-color: ${teal[100]};
      width: 2px;
      height: 40px;
      bottom: -29px;
      left: 12%;
    }
  }
`; 

const CompanyCard = styled(Card)`
  background-color: ${teal[400]};
  align-items: center;
  flex-grow: 1;
  color: white;
`;

const ExperienceCard = styled(Card)`
  display: flex;
  flex-grow: 1;
`;

const useStyles = makeStyles(
  createStyles({
    icon: {
      color: teal[400]
    },
    flex: {
      display: 'flex',
      flexGrow: 1
    }
  }),
);

function WorkSection(props: WorkSectionProps) {
  const { companyName, jobTitle, dateFrom, dateTo, noteItems, lastWorkSection } = props;
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const dateToMoment = moment(dateTo);
  const dateFromMoment = moment(dateFrom);

  const companyCard = (
    <CompanyCard className={classes.flex}>
      <Typography variant="body1">{companyName}</Typography>
    </CompanyCard>
  );

  return (
    <Grid container spacing={3} direction="row" style={{ position: 'relative' }}>
      {lastWorkSection ? (
        <Grid item md={3} className={classes.flex}>
          {companyCard}
        </Grid>
      ) : (
        <GridLink item md={3} className={classes.flex}>
          {companyCard}
        </GridLink>
      )}
      <Grid item md={9} className={classes.flex} style={{ cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
        <ExperienceCard>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={11}>
              <Grid container spacing={1} direction="row">
                <Grid item sm={4}>
                  <Field 
                    title="Date" 
                    contentItems={`${dateFromMoment.format(DATE_FORMAT)} - ${_isNil(dateTo) ? 'Present' : dateToMoment.format(DATE_FORMAT)}`} 
                  />
                </Grid>
                <Grid item sm={8}>
                  <Field 
                    title="Job title" 
                    contentItems={jobTitle}
                  />
                </Grid>
                <Grid item sm={12} direction="column" style={{ padding: '0 4px' }}>
                  <Description contentItems={noteItems} expanded={expanded} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} style={{ justifySelf: 'center' }}>
              {expanded ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
            </Grid>
          </Grid>
        </ExperienceCard>
      </Grid>
    </Grid>
  );
}

export default WorkSection;