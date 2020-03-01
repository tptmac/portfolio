import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';

import { EXTRA_SMALL_SPACE } from '../../constants/general-constant';
import Field from './Field';

interface DescriptionProps {
  contentItems: string[];
  expanded: boolean;
}

function Description(props: DescriptionProps) {
  const { contentItems, expanded } = props;

  return (
    <ExpansionPanel expanded={expanded} style={{ boxShadow: 'none' }}>
      <ExpansionPanelSummary style={{ display: 'none' }}>
        <ExpandMore />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ padding: `${EXTRA_SMALL_SPACE} 0` }}>
        <Field 
          title="Description" 
          contentItems={contentItems}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default Description;