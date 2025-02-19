import { UseInputProps, UseInputResult } from "./types";

export const useInput = (props: UseInputProps): UseInputResult => {
  const {
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    isInvalid = false,
    ...rest
  } = props;
  
  return {
    inputProps: {
      ...rest,
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-required": isRequired,
      "data-invalid": isInvalid,
      disabled: isDisabled,
      readOnly: isReadOnly,
    },
  };
}