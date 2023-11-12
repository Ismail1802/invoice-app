import styles from "./header.module.scss";
import iconArrowDown from "/assets/icon-arrow-down.svg";
import iconPlus from "/assets/icon-plus.svg";
import { useIsMobileResolution } from "./useIsMobileResolution";
import { useState } from "react";
import { Checkboxes } from "../Checkboxes/Checkboxes";
import { useDispatch } from "react-redux";
import { modalsActions } from "../../store/modalSlice";
type HeaderProps = {
  invoicesLength: number;
  optionHandler: (option: string) => void;
  options: string[];
};

const Header = ({ invoicesLength, optionHandler, options }: HeaderProps) => {
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();

  const filterHandler = () => {
    setShowFilter(!showFilter);
  };

  const modalHandler = () => {
    dispatch(modalsActions.newInvoiceHandler());
    document.documentElement.style.overflow = "hidden";
  };

  const isMobile = useIsMobileResolution();

  return (
    <header className={styles.header}>
      <div className={styles.intro}>
        <p className={styles.title}>Invoices</p>
        <p>
          {isMobile
            ? `${invoicesLength} invoices`
            : `There are ${invoicesLength} total invoices`}
        </p>
      </div>
      <div onClick={filterHandler} className={styles.filter}>
        <p>{isMobile ? "Filter" : "Filter by status"}</p>
        <img src={iconArrowDown} alt="arrow-down" />
        {showFilter && (
          <Checkboxes
            options={options}
            optionHandler={optionHandler}
            filterHandler={filterHandler}
          />
        )}
      </div>
      <button onClick={modalHandler} className={styles.btn}>
        <img src={iconPlus} alt="plus" />
        {isMobile ? <p>New</p> : <p>New Invoice</p>}
      </button>
    </header>
  );
};

export { Header };
