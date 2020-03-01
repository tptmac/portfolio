import { Box, Container, createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import { cyan, teal } from '@material-ui/core/colors';
import React from 'react';
import styled from 'styled-components';

import { LARGE_SPACE, MEDIUM_SPACE } from '../constants/general-constant';
import About from './about/About';
import Technology from './technology/Technology';
import Timeline from './timeline/Timeline';

const FULL_HEIGHT = `calc(100vh + ${MEDIUM_SPACE})`;

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        padding: MEDIUM_SPACE,
        boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
      }
    },
    MuiSvgIcon: {
      root: {
        paddingTop: '6px'
      }
    },
    MuiLink: {
      root: {
        color: teal[800]
      }
    },
    MuiGrid: {
      container: {
        flexGrow: 1
      }
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
});

const TopPadding = styled.div`
  padding-top: ${LARGE_SPACE};
  @media only screen and (max-width: 960px) {
    padding-top: ${MEDIUM_SPACE};
  }
`

const ScrollableGrid = styled(Grid)`
  @media only screen and (min-width: 960px) {
    max-height: ${FULL_HEIGHT};
  }
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={cyan[50]} minHeight={FULL_HEIGHT}>
        <Container>
          <Grid container spacing={8} direction="row">
            <Grid item xs={12} md={4}>
              <Grid container spacing={4} direction="column">
                <Grid item xs={12}>
                  <TopPadding>
                    <About />
                  </TopPadding>
                </Grid>
                <Grid item xs={12}>
                  <Technology />
                </Grid>
              </Grid>
            </Grid>
            <ScrollableGrid item xs={12} md={8}>
              <TopPadding>
                <Timeline />
              </TopPadding>
            </ScrollableGrid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
