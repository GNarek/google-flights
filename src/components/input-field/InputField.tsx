import React from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
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
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      margin="normal"
    />
  );
};
