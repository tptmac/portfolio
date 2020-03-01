import { Grid, Typography } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { LabelImportantRounded } from '@material-ui/icons';
import { isArray as _isArray, map as _map } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { EXTRA_SMALL_SPACE } from '../../constants/general-constant';

interface FieldProps {
  title: string;
  contentItems: string | string[];
}

const FieldTitle = styled(Typography)`
  color: ${teal[400]};
  font-weight: bold;
`;

function Field(props: FieldProps) {
  const { title, contentItems } = props;
  return (
    <Grid container direction="column">
      <FieldTitle variant="body2">{title}</FieldTitle>
      {_isArray(contentItems) ? (
          _map(contentItems, (item) => (
            <Grid key={item} item style={{ paddingTop: EXTRA_SMALL_SPACE }}>
              <Grid container direction="row">
                <Grid item xs={1}>
                  <LabelImportantRounded fontSize="small" style={{ color:teal[400], padding: 0 }} />
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="body2">{item}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography variant="body2">{contentItems}</Typography>
        )
      }
    </Grid>
  );
}

export default Field;