import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";
import { InvoiceProps } from "../../types";

export type BlockProps = {
  register: UseFormRegister<InvoiceProps>;
  errors: FieldErrors<InvoiceProps>;
  isRequired: boolean;
  dataDetail?: InvoiceProps;
};
