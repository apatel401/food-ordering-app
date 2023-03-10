import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Header should be rendered", () => {
  const header = render(<StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>);
 const logo = header.getByTestId("logo")
 expect(logo.src).toBe("http://localhost/dummy.png");
 // Header02
 const online = header.getByTestId("online");
 expect(online.innerHTML).toBe("online");
  // Header03

});

test("Online status should be online", () => {
  const header = render(<StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>);
 const cart = header.getByTestId("cart").innerHTML;
 expect(cart).toBe("0");
});