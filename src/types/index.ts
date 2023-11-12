export type InvoiceProps = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    city: string;
    country: string;
    postCode: string;
    street: string;
  };
  items: {
    name: string;
    price: string;
    quantity: string;
    total: number;
  }[];
  total: number;
};
