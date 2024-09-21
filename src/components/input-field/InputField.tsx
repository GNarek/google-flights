import React from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      placeholder={placeholder}
      margin="normal"
    />
  );
};
