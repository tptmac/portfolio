import { Avatar, Card, createStyles, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';
import { Attachment, Email, LinkedIn } from '@material-ui/icons';
import React from 'react';

import { MEDIUM_SPACE, NAME } from '../../constants/general-constant';
import AvatarImg from './assets/avatar.jpeg';
import LinkSection from './LinkSection';

const useStyles = makeStyles(
  createStyles({
    icon: {
      color: teal[400]
    }
  }),
);

function About() {
  const classes = useStyles();
  return (
    <Card>
      <Grid container spacing={2} style={{ marginBottom: MEDIUM_SPACE }} direction="row" justify="center" alignItems="center">
        <Grid item>
          <Avatar alt="Thao Mac" src={AvatarImg} />
        </Grid>
        <Grid item>
          <Typography variant="h4">{NAME}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <LinkSection
        leftIcon={<LinkedIn className={classes.icon} />}
        linkText="linked.com/in/tptmac"
        linkHref="https://www.linkedin.com/in/tptmac/"
      />
      <Divider />
      <LinkSection
        leftIcon={<Email className={classes.icon} />}
        linkText="tptmac7@gmail.com"
        linkHref="mailto:tptmac7@gmail.com"
      />
      <Divider />
      <LinkSection
        leftIcon={<Attachment className={classes.icon} />}
        linkText="Resume"
        linkHref="./assets/resume.pdf"
      />
      <Divider />
    </Card>
  );
}

export default About;