import { FormControl, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { InvoiceProps } from "../../../../types";
import { Control } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";

type TermsProps = {
  dataDetail?: InvoiceProps;
  control: Control<InvoiceProps, any>;
  isRequired: boolean;
  register: UseFormRegister<InvoiceProps>;
  selectHandler: () => void;
};

const Terms = ({
  dataDetail,
  control,
  isRequired,
  register,
  selectHandler,
}: TermsProps) => {
  return (
    <div className="terms-cont">
      <p>Payment Terms</p>
      <FormControl className="select" fullWidth>
        <Controller
          defaultValue={dataDetail ? dataDetail.paymentTerms : 1}
          name="paymentTerms"
          control={control}
          render={({ field }) => (
            <Select
              required={isRequired}
              {...field}
              {...register("paymentTerms", {
                onChange: () => selectHandler(),
              })}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "var(--invColor)",
                    color: "var(--textColor)",
                  },
                },
              }}
              label="Payment Terms"
              id="Payment Terms"
            >
              <MenuItem value={1}>Net 1 Day</MenuItem>
              <MenuItem value={7}>Net 7 Days</MenuItem>
              <MenuItem value={14}>Net 14 Days</MenuItem>
              <MenuItem value={30}>Net 30 Days</MenuItem>
            </Select>
          )}
        />
      </FormControl>
    </div>
  );
};

export { Terms };
