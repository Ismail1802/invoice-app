import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import styles from "./checkboxes.module.scss";
import { memo } from "react";

export type CheckboxesProps = {
  filterHandler: () => void;
  optionHandler: (option: string) => void;
  options: string[];
};

const OPTIONS = ["paid", "draft", "pending"];

const Checkboxes = memo(
  ({ filterHandler, optionHandler, options }: CheckboxesProps) => {
    const changeHandler = (option: string) => {
      optionHandler(option);
    };

    return (
      <>
        <div
          onClick={filterHandler}
          style={{ position: "fixed", inset: "0", cursor: "default" }}
        />
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles["checkboxes"]}
        >
          {OPTIONS.map((option, index) => {
            return (
              <FormControlLabel
                key={index}
                sx={{
                  margin: "0px",
                  textTransform: "capitalize",
                }}
                control={
                  <Checkbox
                    checked={options.includes(option)}
                    onChange={() => changeHandler(option)}
                    sx={{
                      textTransform: "uppercase",
                      bgcolor: "var(--checkboxes)",
                      borderRadius: "0",
                      width: "17px",
                      height: "17px",
                      padding: 0,
                      marginRight: "0.5rem",
                      color: "transparent",
                    }}
                    disableRipple
                  />
                }
                label={option}
              />
            );
          })}
        </div>
      </>
    );
  }
);

export { Checkboxes };
