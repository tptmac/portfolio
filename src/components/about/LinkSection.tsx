import { Grid, Link } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';
import React from 'react';
import styled from 'styled-components';

import { SMALL_SPACE } from '../../constants/general-constant';

const HightlightContainer = styled.div`
  padding: ${SMALL_SPACE};
  :hover {
    background-color: ${teal[50]};
  }
`;

interface LinkSectionProps {
  leftIcon: JSX.Element;
  linkText: string;
  linkHref: string;
}

function LinkSection(props: LinkSectionProps) {
  const { leftIcon, linkText, linkHref } = props;
  return (
    <HightlightContainer>
      <Grid container spacing={1} direction="row" alignItems="center">
        <Grid item>
          {leftIcon}
        </Grid>
        <Grid item>
          <Link variant="body1" align="center" target="_blank" href={linkHref}>{linkText}</Link>
        </Grid>
      </Grid>
    </HightlightContainer>
  );
}

export default LinkSection;