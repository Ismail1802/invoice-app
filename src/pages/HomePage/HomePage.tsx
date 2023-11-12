import { Header } from "../../components/Header/Header";
import styles from "./homepage.module.scss";
import { InvoicesList } from "../../components/InvoicesList/InvoicesList";
import { useAppSelector } from "../../store";
import { useState, useEffect } from "react";
import { selectFilteredInvoices } from "../../store/invoicesSlice";

const HomePage = () => {
  const [options, setOptions] = useState<string[]>([]);
  const invoices = useAppSelector((state) => state.invoices.data);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const filteredData = useAppSelector((state) =>
    selectFilteredInvoices(state, options)
  );

  function optionHandler(variant: string) {
    if (options.includes(variant)) {
      setOptions(options.filter((option) => option !== variant));
    } else {
      setOptions([...options, variant]);
    }
  }

  return (
    <main className={styles.homepage}>
      <Header
        options={options}
        optionHandler={optionHandler}
        invoicesLength={filteredData.length}
      />
      <InvoicesList invoices={filteredData} />
    </main>
  );
};

export { HomePage };
