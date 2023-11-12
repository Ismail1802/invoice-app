import logo from "/assets/logo.svg";
import iconSun from "/assets/icon-sun.svg";
import avatar from "/assets/image-avatar.jpg";
import styles from "./aside.module.scss";
import { themeActions } from "../../store/themeSlice";
import { useAppSelector } from "../../store";
import iconMoon from "/assets/icon-moon.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import NewInvoiceForm from "../Form/InvoiceForm";
const Aside = () => {
  const dispatch = useDispatch();
  const modalOpen = useAppSelector((state) => state.modal.newInvoice);

  const theme = useAppSelector((state) => state.theme);

  function themeHandler() {
    dispatch(themeActions.themeHandler());
  }

  return (
    <>
      <aside className={styles.aside}>
        <Link className={styles["logo-cont"]} to="/">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div onClick={themeHandler} className={styles["theme-cont"]}>
          <img
            src={theme === "dark-theme" ? iconSun : iconMoon}
            alt="theme-icon"
          />
        </div>
        <hr className={styles.line} />
        <div className={styles["img-cont"]}>
          <img src={avatar} alt="avatar" />
        </div>
      </aside>
      <div className={styles.helper} />
      <AnimatePresence>{modalOpen && <NewInvoiceForm />}</AnimatePresence>
    </>
  );
};

export { Aside };
