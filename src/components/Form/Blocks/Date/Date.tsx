import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import { InvoiceProps } from "../../../../types";
import { Control } from "react-hook-form";

type DateProps = {
  control: Control<InvoiceProps, any>;
  data?: InvoiceProps;
};

const Date = ({ control, data }: DateProps) => {
  return (
    <div className="date-cont">
      <p>Invoice Date</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          control={control}
          name="createdAt"
          render={({ field }) => (
            <DatePicker
              defaultValue={data ? dayjs(data.createdAt) : dayjs()}
              disabled={data?.status === "paid" ? true : false}
              minDate={
                data?.status !== "paid" ? dayjs(data?.createdAt) : dayjs()
              }
              className="datepicker"
              onChange={(date) => field.onChange(date)}
              sx={{
                "& .MuiInputBase-input": {
                  WebkitTextFillColor: "var(--textColor) !important",
                  cursor: data?.status === "paid" ? "not-allowed" : "pointer",
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export { Date };
