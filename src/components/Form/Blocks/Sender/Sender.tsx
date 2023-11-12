import { BlockProps } from "../../types";
import Input from "../../../Input/Input";

const Sender = ({ register, errors, isRequired }: BlockProps) => {
  return (
    <div>
      <p className="bill-title">Bill From</p>
      <Input
        htmlFor="senderAddress.street"
        id="senderAddress.street"
        labelText="Street Address"
        register={register}
        error={errors.senderAddress?.street?.message}
        isRequired={isRequired}
      />
      <div className="location">
        <Input
          register={register}
          isRequired={isRequired}
          htmlFor="senderAddress.city"
          labelText="City"
          id="senderAddress.city"
          error={errors.senderAddress?.city?.message}
        />
        <Input
          htmlFor="senderAddress.postCode"
          isRequired={isRequired}
          register={register}
          labelText="Post Code"
          id="senderAddress.postCode"
          error={errors.senderAddress?.postCode?.message}
        />
        <Input
          register={register}
          isRequired={isRequired}
          htmlFor="senderAddress.country"
          labelText="Country"
          id="senderAddress.country"
          error={errors.senderAddress?.country?.message}
        />
      </div>
    </div>
  );
};

export { Sender };
