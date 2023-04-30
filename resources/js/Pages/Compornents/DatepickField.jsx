import * as React from 'react';
import { useState } from 'react';
import { TextField } from '@mui/material'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const DatepickField = () => {


    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>

          <DatePicker inputFormat="yyyy/MM/dd" mask="____/__/__" renderInput={(params) => <TextField {...params} />}  />

      </LocalizationProvider>
    );
  }


