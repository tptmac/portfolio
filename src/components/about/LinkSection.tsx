import { Grid, Link } from '@material-ui/core';
import React from 'react';

import { SMALL_SPACE } from '../../constants/general-constant';

interface LinkSectionProps {
  leftIcon: JSX.Element;
  linkText: string;
  linkHref: string;
}

function LinkSection(props: LinkSectionProps) {
  const { leftIcon, linkText, linkHref } = props;
  return (
    <Grid container spacing={1} style={{ padding: SMALL_SPACE }} direction="row" alignItems="center">
      <Grid item>
        {leftIcon}
      </Grid>
      <Grid item>
        <Link variant="body1" align="center" target="_blank" href={linkHref}>
          {linkText}
        </Link>
      </Grid>
    </Grid>
  );
}

export default LinkSection;