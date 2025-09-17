import { Box, Card, Chip, Divider, Grid, Typography } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { map as _map, orderBy as _orderBy } from 'lodash';
import React from 'react';

import { MEDIUM_SPACE } from '../../constants/general-constant';

const TECHNOLOGIES = ['Amazon Web Services (AWS)', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'SQL', 'ASP.NET', 'C#', 'React', 'REST API', 'Swagger/OpenAPI', 'Postman'];

function Technology() {
  return (
    <Card>
      <Box style={{ marginBottom: MEDIUM_SPACE, textAlign: 'center' }}>
        <Typography variant="h4">Technology</Typography>
      </Box>
      <Divider />
      <Grid container spacing={1} style={{ paddingTop: MEDIUM_SPACE }} direction="row">
        {_map(_orderBy(TECHNOLOGIES), (tech) => (
          <Grid key={tech} item>
            <Chip label={tech} style={{ backgroundColor: teal[400], color: 'white' }} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}

export default Technology;