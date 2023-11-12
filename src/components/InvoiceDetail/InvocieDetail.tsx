import styles from "./invoicedetail.module.scss";
import cls from "classnames";
import { formatMoney } from "../Invoice/utils";
import dayjs from "dayjs";
import { InvoiceProps } from "../../types";
import Items from "./Blocks/Items";

const InvoiceDetail = ({ ...props }: InvoiceProps) => {
  const money = formatMoney(props.total);
  return (
    <article className={styles.detail}>
      <div className={styles["upper-info"]}>
        <div>
          <p className={cls(styles.bold, styles.id)}>#{props.id}</p>
          <p>{props.description}</p>
        </div>
        <div>
          <p>{props.senderAddress.street}</p>
          <p>{props.senderAddress.city}</p>
          <p>{props.senderAddress.postCode}</p>
          <p>{props.senderAddress.country}</p>
        </div>
      </div>
      <div className={styles["lower-info"]}>
        <div className={styles.dates}>
          <div>
            <h3>Invoice Date</h3>
            <p className={styles.bold}>
              {dayjs(props.createdAt).format("YYYY-MM-DD")}
            </p>
          </div>
          <div>
            <h3>Payment Due</h3>
            <p className={styles.bold}>{props.paymentDue}</p>
          </div>
        </div>
        <div className={styles["address-to"]}>
          <h3>Bill To</h3>
          <p className={styles.bold}>{props.clientName}</p>
          <div className={styles.street}>
            <p>{props.clientAddress.street}</p>
            <p>{props.clientAddress.city}</p>
            <p>{props.clientAddress.postCode}</p>
            <p>{props.clientAddress.country}</p>
          </div>
        </div>
        <div className={styles["sent-div"]}>
          <h3>Sent To</h3>
          <p className={styles.bold}>{props.clientEmail}</p>
        </div>
      </div>
      <Items {...props} />
      <div className={styles["amount-cont"]}>
        <p>Amount Due</p>
        <p className={cls(styles.bold, styles.total)}>{money}</p>
      </div>
    </article>
  );
};

export { InvoiceDetail };
