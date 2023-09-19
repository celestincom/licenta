import { TextField } from '@mui/material';
import React from 'react';

interface TextFieldComponentInterface {
  disable?: boolean;
  name?: string;
  type: string;
  label?: string;
  value: string | number | undefined;
  handleChange?: (e: any) => void;
  error?: any;
  helperText?: any;
  InputProps?: any;
  autocomplete?: any;
  select?: boolean;
  children?: any;
  placeholder?: string;
}

function TextFieldComponent({
  disable,
  name,
  type,
  label,
  value,
  handleChange,
  error,
  helperText,
  InputProps,
  autocomplete,
  select = false,
  children,
  placeholder = '',
}: TextFieldComponentInterface) {
  return (
    <TextField
      select={select}
      disabled={disable}
      id={name}
      name={name}
      type={type}
      label={label}
      variant='outlined'
      value={value}
      onChange={handleChange}
      fullWidth
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      autoComplete={autocomplete || 'on'}
      sx={{
        '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
        '& .MuiInputLabel-root': {
          color: '#A5A5A5',
        },
        '& .MuiOutlinedInput-root': {
          '& > fieldset': { borderColor: '#A5A5A5' },
          '&:hover>fieldset': { borderColor: '#A5A5A5' },
          '&:focus>fieldset': { borderColor: '#A5A5A5' },
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': { border: '1px solid #FFFFFF' },
          '& > input': { color: '#FFFFFF' },
        },
        mt: 3,
        maxWidth: '100%',
      }}
      InputProps={{   //scris interior
        style: { color: '#A5A5A5', borderRadius: 8 },
        ...InputProps,
      }}
    >
      {children}
    </TextField>
  );
}
export default TextFieldComponent;
