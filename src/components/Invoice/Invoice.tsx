import styles from "./invoice.module.scss";
import iconRight from "/assets/icon-arrow-right.svg";
import { formatMoney, formatStatus } from "./utils";
import cls from "classnames";
import { InvoiceProps } from "../../types";

const Invoice = (inv: InvoiceProps) => {
  const money = formatMoney(inv.total);
  const status = formatStatus(inv.status);
  return (
    <article className={styles.invoice}>
      <div className={styles.overview}>
        <div className={styles.info}>
          <p className={styles.id}>#{inv.id}</p>
          <p className={styles.paymentdue}>Due {inv.paymentDue}</p>
        </div>
        <p className={styles.name}>{inv.clientName}</p>
      </div>
      <div className={styles["status-cont"]}>
        <p className={styles.total}>{money}</p>
        <div className={cls(styles["dot-cont"], styles[inv.status])}>
          <div className={styles.dot} />
          <p>{status}</p>
        </div>
        <img src={iconRight} alt="iconright" />
      </div>
    </article>
  );
};

export { Invoice };
