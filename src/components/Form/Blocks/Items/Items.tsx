import Input from "../../../Input/Input";
import styles from "./items.module.scss";
import trashIcon from "/assets/icon-delete.svg";
import { BlockProps } from "../../types";
import { UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import { FieldArrayWithId } from "react-hook-form";
import { InvoiceProps } from "../../../../types";
interface ItemProps extends Partial<BlockProps> {
  index: number;
  changeHandler: (index: number) => void;
  remove: UseFieldArrayRemove;
  isRequired: boolean;
  field: FieldArrayWithId<InvoiceProps, "items", "id">;
  register: UseFormRegister<InvoiceProps>;
}
const Items = ({
  register,
  errors,
  isRequired,
  dataDetail,
  index,
  changeHandler,
  remove,
  field,
}: ItemProps) => {
  return (
    <div key={field.id} className={styles["item-list"]}>
      <Input
        isRequired={isRequired}
        style="name"
        htmlFor={`items.${index}.name`}
        id={`items.${index}.name`}
        labelText="Item Name"
        register={register}
        placeholder="Item Name"
        error={errors?.items?.[index!]?.name?.message}
        val={dataDetail?.items?.[index!]?.name}
      />
      <Input
        isRequired={isRequired}
        changeHandler={changeHandler}
        style="qty"
        htmlFor={`items.${index}.quantity`}
        id={`items.${index}.quantity`}
        labelText="Qty"
        register={register}
        index={index}
        error={errors?.items?.[index!]?.quantity?.message}
        val={dataDetail?.items?.[index!]?.quantity}
        type="number"
      />
      <Input
        isRequired={isRequired}
        changeHandler={changeHandler}
        style="price"
        htmlFor={`items.${index}.price`}
        id={`items.${index}.price`}
        labelText="Price"
        register={register}
        index={index}
        error={errors?.items?.[index!]?.price?.message}
        val={dataDetail?.items?.[index!]?.price}
        type="number"
      />
      <div className={styles["total-cont"]}>
        <Input
          isRequired={isRequired}
          style="total"
          htmlFor={`items.${index}.total`}
          id={`items.${index}.total`}
          labelText="Total"
          disabled={true}
          register={register}
          val={dataDetail?.items?.[index!]?.total}
        />
        {index! > 0 && (
          <img
            onClick={() => remove!(index!)}
            className={styles["trash-icon"]}
            src={trashIcon}
            alt="trashIcon"
          />
        )}
      </div>
    </div>
  );
};

export { Items };
