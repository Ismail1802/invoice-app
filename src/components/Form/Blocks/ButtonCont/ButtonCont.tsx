import styles from "./buttoncont.module.scss";
type ButtonContProps = {
  newInvoiceModalHandler: () => void;
  setIsRequired: React.Dispatch<React.SetStateAction<boolean>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  dataDetail?: boolean;
  editInvoiceModalHandler: () => void;
};
const ButtonCont = ({
  newInvoiceModalHandler,
  setIsRequired,
  setStatus,
  dataDetail,
  editInvoiceModalHandler,
}: ButtonContProps) => {
  return (
    <>
      {!dataDetail ? (
        <div className={styles["btn-cont"]}>
          <button
            type="button"
            onClick={() => {
              newInvoiceModalHandler();
              setIsRequired(false);
            }}
            className={styles["discard-btn"]}
          >
            Discard
          </button>
          <div>
            <button
              type="submit"
              onClick={() => {
                setIsRequired(false);
                setStatus("draft");
              }}
              className={styles["draft-btn"]}
            >
              Save as Draft
            </button>
            <button type="submit" className={styles["save-btn"]}>
              Save & Send
            </button>
          </div>
        </div>
      ) : (
        <div
          className={styles["btn-cont"]}
          style={{ justifyContent: "flex-end" }}
        >
          <button
            type="button"
            onClick={() => editInvoiceModalHandler()}
            className={styles["draft-btn"]}
          >
            Cancel
          </button>
          <button className={styles["save-btn"]}>Save Changes</button>
        </div>
      )}
    </>
  );
};

export { ButtonCont };
