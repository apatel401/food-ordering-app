import { fireEvent, render, waitFor } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { DummyMenuData } from "../../mocks/Data";

global.fetch = jest.fn(() => {
 return Promise.resolve({
    json: 
      () => { return Promise.resolve(DummyMenuData)}
 });
});

test("Add items to cart from menu", async () => {
    const menu = render(
        <StaticRouter>
          <Provider store={store}>
            <RestaurantMenu />
          </Provider>
        </StaticRouter>
      );

      const header = render(<StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>);
    
        await waitFor(() =>
        expect(menu.getByTestId("menuTitle").innerHTML).toBe("Menu")
        )

        const addToCart = menu.getByTestId('menu');
          fireEvent.click(addToCart.children[0]);
        const cart = header.getByTestId("cart").innerHTML;
        expect(cart).toBe("0");

});