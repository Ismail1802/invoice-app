import {
  SubmitHandler,
  UseFormGetValues,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { ButtonCont, Client, Items, Sender } from "./Blocks";
import { InvoiceProps } from "../../types";
import { useState, useEffect } from "react";
import styles from "./invoiceForm.module.scss";
import { Date } from "./Blocks";
import { Terms } from "./Blocks";
import Input from "../Input/Input";
import iconPlus from "/assets/icon-plus.svg";
import { useDispatch } from "react-redux";
import { modalsActions } from "../../store/modalSlice";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { idGenerator } from "./utils";
import { useAppSelector } from "../../store";
import { invoicesActions } from "../../store/invoicesSlice";

type NewInvoiceForm = {
  data?: InvoiceProps;
};

const InvoiceForm = ({ data }: NewInvoiceForm) => {
  const defaultValues: InvoiceProps | undefined = data && {
    id: data.id!,
    createdAt: data.createdAt!,
    paymentDue: data.paymentDue!,
    description: data.description!,
    paymentTerms: data.paymentTerms!,
    clientName: data.clientName!,
    clientEmail: data.clientEmail!,
    status: data.status!,
    senderAddress: data.senderAddress!,
    clientAddress: data.clientAddress!,
    items: data.items!,
    total: data.total!,
  };

  const [isRequired, setIsRequired] = useState(true);
  const modalState = useAppSelector((state) => state.modal);
  const [status, setStatus] = useState("pending");
  const dispatch = useDispatch();

  const form = useForm<InvoiceProps>({
    defaultValues: data
      ? defaultValues
      : {
          createdAt: dayjs().format("YYYY-MM-DD"),
          paymentDue: dayjs().add(1, "day").format("YYYY-MM-DD"),
          id: idGenerator(),
          items: [{ name: "", quantity: "", price: "", total: 0.0 }],
          status: status,
          total: 0,
        },
  });

  const { register, control, handleSubmit, formState, setValue, getValues } =
    form;

  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const newInvoiceModalHandler = () => {
    dispatch(modalsActions.newInvoiceHandler());
  };

  const editInvoiceModalHandler = () => {
    dispatch(modalsActions.editInoivceHandler());
  };

  function itemAdd() {
    append({ name: "", quantity: "", price: "", total: 0.0 });
  }

  useEffect(() => {
    if (modalState) {
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [modalState]);

  const calcItemTotal = (
    index: number,
    getValues: UseFormGetValues<InvoiceProps>
  ) => {
    const result =
      Number(getValues(`items.${index}.price`)) *
      Number(getValues(`items.${index}.quantity`));
    return result;
  };

  const changeHandler = (index: number) => {
    const items = getValues("items");
    setValue(`items.${index}.total`, calcItemTotal(index, getValues));
    setValue("total", calculateTotal(items));
  };

  const selectHandler = () => {
    setValue(
      "paymentDue",
      dayjs(getValues("createdAt"))
        .add(getValues("paymentTerms"), "day")
        .format("YYYY-MM-DD")
    );
  };

  const calculateTotal = (
    items: {
      name: string;
      price: string;
      quantity: string;
      total: number;
    }[]
  ) => {
    return items.reduce((acc, current) => acc + Number(current.total), 0);
  };

  const onSubmit: SubmitHandler<InvoiceProps> = (formData) => {
    if (data) {
      editInvoiceModalHandler();
      dispatch(invoicesActions.updateInvoice(formData));
    } else {
      formData.createdAt = dayjs(formData.createdAt).format("YYYY-MM-DD");
      newInvoiceModalHandler();
      dispatch(invoicesActions.addInvoice(formData));
    }
  };

  return (
    <>
      <div
        onClick={data ? editInvoiceModalHandler : newInvoiceModalHandler}
        className="bg"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles["form-wrapper"]}
      >
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          noValidate
          className={styles.form}
        >
          <h1 className={styles.title}>New Invoice</h1>
          <Sender register={register} errors={errors} isRequired={isRequired} />
          <Client register={register} errors={errors} isRequired={isRequired} />
          <Date control={control} />
          <Terms
            control={control}
            isRequired={isRequired}
            selectHandler={selectHandler}
            register={register}
          />
          <Input
            isRequired={isRequired}
            register={register}
            htmlFor="description"
            id="description"
            labelText="Project Description"
            error={errors.description?.message}
          />
          <div>
            <p className={styles["list-title"]}>Item List</p>
            {fields.map((field, index) => {
              return (
                <Items
                  key={field.id}
                  register={register}
                  errors={errors}
                  isRequired={isRequired}
                  changeHandler={changeHandler}
                  remove={remove}
                  index={index}
                  field={field}
                />
              );
            })}
          </div>
          <button onClick={itemAdd} type="button" className={styles["add-btn"]}>
            <img src={iconPlus} alt="iconPlus" />
            <p>Add New Item</p>
          </button>
          <ButtonCont
            dataDetail={Boolean(data)}
            setStatus={setStatus}
            setIsRequired={setIsRequired}
            newInvoiceModalHandler={newInvoiceModalHandler}
            editInvoiceModalHandler={editInvoiceModalHandler}
          />
        </motion.form>
      </div>
    </>
  );
};

export default InvoiceForm;
