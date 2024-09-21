import React from "react";
import { TextField } from "@mui/material";

interface DateSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  label,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      fullWidth
      label={label}
      type="date"
      InputLabelProps={{ shrink: true }}
      value={value}
      onChange={handleChange}
      variant="outlined"
      margin="normal"
    />
  );
};
