import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { DummyData } from "../../mocks/Data";

global.fetch = jest.fn(() => {
 return Promise.resolve({
    json: 
      () => { return Promise.resolve(DummyData)}
 });
});

test("testing for result on search", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

//   await waitFor(() =>
//     expect(body.getByTestId("search-btn").innerHTML).toBe("Find Food")
//   );

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(15);

  // const restList = body.getByTestId("rest-list")
  // expect(restList.children.length).toBe(15)

  // await waitFor(() => expect(body.getByTestId("search-btn").innerHTML).toBe("Find Food"));
});

test("Search working string", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

    await waitFor(() =>
    expect(body.getByTestId("search-btn").innerHTML).toBe("Find Food")
    )

  const input = body.getByTestId("search-input");
  const btn = body.getByTestId("search-btn");

  fireEvent.change(input, {
    target: {
      value: "cafe",
    },
  });

  fireEvent.click(btn);
  const restList = body.getByTestId("rest-list");
  expect(restList.children.length).toBe(1);
});
