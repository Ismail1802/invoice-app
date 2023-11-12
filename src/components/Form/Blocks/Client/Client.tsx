import { BlockProps } from "../../types";
import Input from "../../../Input/Input";
import styles from "./client.module.scss";

const Client = ({ register, errors, isRequired, dataDetail }: BlockProps) => {
  return (
    <div className={styles.client}>
      <p className="bill-title">Bill To</p>
      <Input
        register={register}
        isRequired={isRequired}
        htmlFor="clientName"
        labelText="Client's Name"
        id="clientName"
        error={errors.clientName?.message}
        val={dataDetail?.clientName}
      />
      <Input
        register={register}
        isRequired={isRequired}
        htmlFor="clientEmail"
        labelText="Client's Email"
        id="clientEmail"
        type="email"
        error={errors.clientEmail?.message}
        val={dataDetail?.clientEmail}
      />
      <Input
        register={register}
        isRequired={isRequired}
        htmlFor="clientAddress.street"
        labelText="Client's Address"
        id="clientAddress.street"
        error={errors.clientAddress?.street?.message}
        val={dataDetail?.clientAddress.street}
      />
      <div className="location">
        <Input
          isRequired={isRequired}
          register={register}
          htmlFor="clientAddress.city"
          labelText="City"
          id="clientAddress.city"
          error={errors.clientAddress?.city?.message}
          val={dataDetail?.clientAddress.city}
        />
        <Input
          isRequired={isRequired}
          register={register}
          htmlFor="clientAddress.postCode"
          labelText="Post Code"
          id="clientAddress.postCode"
          error={errors.clientAddress?.postCode?.message}
          val={dataDetail?.clientAddress.postCode}
        />
        <Input
          isRequired={isRequired}
          register={register}
          htmlFor="clientAddress.country"
          labelText="Country"
          id="clientAddress.country"
          error={errors.clientAddress?.country?.message}
          val={dataDetail?.clientAddress.country}
        />
      </div>
    </div>
  );
};

export { Client };
