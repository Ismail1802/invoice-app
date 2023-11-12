import { InvoiceProps } from "../../../types";
import { useIsMobileResolution } from "../../Header/useIsMobileResolution";
import cls from "classnames";
import styles from "../invoicedetail.module.scss";

const Items = ({ ...props }: InvoiceProps) => {
  const isMobile = useIsMobileResolution();
  return (
    <>
      {isMobile ? (
        <div style={{ marginTop: "2rem" }}>
          {props.items.map((item) => {
            return (
              <div
                key={item.name}
                className={cls(styles["items-mob"], styles.bold)}
              >
                <div>
                  <div>{item.name}</div>
                  <div>
                    £{item.price} * {item.quantity}
                  </div>
                </div>
                <div>£{item.total}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.items}>
          <div className={cls(styles.item, styles["item-header"])}>
            <p>Item Name</p>
            <p>QTY.</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          {props.items.map((item) => {
            return (
              <div className={styles.item} key={item.name}>
                <p className={styles.bold}>{item.name}</p>
                <p className={styles.bold}>{item.quantity}</p>
                <p className={styles.bold}>£{item.price}</p>
                <p className={styles.bold}>£{item.total}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Items;
