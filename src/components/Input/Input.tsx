import { UseFormRegister, FieldPath } from "react-hook-form";
import styles from "./input.module.scss";
import cls from "classnames";
import { InvoiceProps } from "../../types";
import { checkValidation } from "./utils";

type InputProps = React.ComponentProps<"input"> &
  React.ComponentProps<"label"> & {
    labelText: string;
    register: UseFormRegister<InvoiceProps> | undefined;
    error?: string;
    changeHandler?: (index: number) => void;
    index?: number;
    val?: string | undefined | number;
    isRequired: boolean;
    id: FieldPath<InvoiceProps>;
    style?: string;
  };

const Input = (props: InputProps) => {
  return (
    <div className={cls(styles["input-cont"], styles[props.style!])}>
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
      <input
        {...props.register?.(props.id, {
          onChange: () => props.changeHandler?.(props.index!),
          value: props.val,
          required: {
            value: props.isRequired,
            message: `${props.labelText} is required`,
          },
          pattern: props.isRequired ? checkValidation(props.type!) : undefined,
        })}
        className={styles.input}
        type={props.type}
        id={props.id}
        disabled={props.disabled}
        placeholder={props.placeholder}
      />

      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  );
};

export default Input;
