import iconLeft from "/assets/icon-arrow-left.svg";
import styles from "./invoicepage.module.scss";
import { Link } from "react-router-dom";
import cls from "classnames";
import { useParams, useNavigate } from "react-router";
import { formatStatus } from "../../components/Invoice/utils";
import { InvoiceDetail } from "../../components/InvoiceDetail/InvocieDetail";
import { useDispatch } from "react-redux";
import { modalsActions } from "../../store/modalSlice";
import { useAppSelector } from "../../store";
import { useIsMobileResolution } from "../../components/Header/useIsMobileResolution";
import { AnimatePresence } from "framer-motion";
import { invoicesActions } from "../../store/invoicesSlice";
import NewInvoiceForm from "../../components/Form/InvoiceForm";
const InvoicePage = () => {
  const params = useParams();
  const isMobile = useIsMobileResolution();
  const modalOpen = useAppSelector((state) => state.modal.editInvoice);
  const invoices = useAppSelector((state) => state.invoices.data);

  const data = invoices.find((inv) => inv.id === params.invoiceId)!;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let status = "";
  if (data) {
    status = formatStatus(data.status);
  }
  function deleteHandler(id: string) {
    dispatch(invoicesActions.deleteInvoice(id));
    navigate("/");
  }

  function editModal() {
    dispatch(modalsActions.editInoivceHandler());
  }

  function updateStatusHandler(id: string) {
    dispatch(invoicesActions.statusHandler(id));
  }

  return (
    <>
      <section className={styles.invoicepage}>
        <Link to="/">
          <div className={styles.back}>
            <img src={iconLeft} alt="icon left" />
            <p>Go back</p>
          </div>
        </Link>
        <div className={styles.header}>
          <div className={styles["status-cont"]}>
            <p>Status</p>
            <div
              className={cls(styles["dot-cont"], styles[status.toLowerCase()])}
            >
              <div className={styles.dot} />
              <p>{status}</p>
            </div>
          </div>
          {!isMobile && (
            <div className={styles["btn-cont"]}>
              <button onClick={editModal} className={styles["edit-btn"]}>
                Edit
              </button>
              <button
                onClick={() => deleteHandler(params.invoiceId!)}
                className={styles["add-btn"]}
              >
                Delete
              </button>
              {data.status === "pending" && (
                <button
                  onClick={() => updateStatusHandler(params.invoiceId!)}
                  className={styles["mark-btn"]}
                >
                  Mark as Paid
                </button>
              )}
            </div>
          )}
        </div>
        <InvoiceDetail {...data} />
        {isMobile && (
          <div className={styles["btn-wrapper"]}>
            <div>
              <button onClick={editModal} className={styles["edit-btn"]}>
                Edit
              </button>
              <button
                onClick={() => deleteHandler(params.invoiceId!)}
                className={styles["add-btn"]}
              >
                Delete
              </button>
              {data.status === "pending" && (
                <button
                  onClick={() => updateStatusHandler(params.invoiceId!)}
                  className={styles["mark-btn"]}
                >
                  Mark as Paid
                </button>
              )}
            </div>
          </div>
        )}
      </section>

      {modalOpen && (
        <AnimatePresence>
          <NewInvoiceForm data={data} />
        </AnimatePresence>
      )}
    </>
  );
};

export default InvoicePage;
