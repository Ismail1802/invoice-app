import { InvoiceProps } from "../../types";
import { Invoice } from "../Invoice/Invoice";
import { Link } from "react-router-dom";
type InvoicesListProps = {
  invoices: InvoiceProps[];
};

const InvoicesList = ({ invoices }: InvoicesListProps) => {
  return (
    <section>
      {invoices.map((inv) => {
        return (
          <Link key={inv.id} to={`/invoices/${inv.id}`}>
            <Invoice {...inv} />
          </Link>
        );
      })}
    </section>
  );
};

export { InvoicesList };
