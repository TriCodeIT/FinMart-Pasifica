import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Clock from '../Clock';

export default function ClockApp() {
  return (
    <React.Fragment>
      <Title>Date</Title>
      <Typography component="p" variant="h6">
        <Clock />
      </Typography>
    </React.Fragment>
  );
}