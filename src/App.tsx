import { createHashRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { HomePage } from "./pages/HomePage/HomePage";
import InvoicePage from "./pages/InvoicePage/InvoicePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/invoices/:invoiceId",
        element: (
          <ScrollToTop>
            <InvoicePage />
          </ScrollToTop>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
