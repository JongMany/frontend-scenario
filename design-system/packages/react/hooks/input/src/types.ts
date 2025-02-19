import { ComponentPropsWithoutRef } from "react";

export type UseInputProps = {
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isInvalid?: boolean
} & Omit<ComponentPropsWithoutRef<"input">, "disabled" | "readOnly">;

export type UseInputResult = {
  inputProps: ComponentPropsWithoutRef<"input"> & {
    "data-disabled": boolean;
    "data-readonly": boolean;
    "data-required": boolean;
    "data-invalid": boolean;
  }
};