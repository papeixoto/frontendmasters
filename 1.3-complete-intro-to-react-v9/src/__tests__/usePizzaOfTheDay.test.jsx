import { expect, test, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description: "A pizza with a lot of cheese and a lot of meat",
  image: "/public/images/calabrese.webp",
  size: { S: 12.25, M: 16.25, L: 20.25 },
};

// // you need a component to test a hook
// function getPizzaOfTheDay() {
//   let pizza;

//   function TestComponent() {
//     pizza = usePizzaOfTheDay();
//     return null;
//   }

//   render(<TestComponent />);

//   return pizza;
// }

// test("gives null on first call", () => {
//   fetch.mockResponseOnce(JSON.stringify(testPizza));
//   const pizza = getPizzaOfTheDay();
//   expect(pizza).toBeNull();
// });

test("gives null on first call", () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBeNull();
});

test("gives pizza of the day after fetch", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  // run this expectation until it does not throw an error
  await waitFor(() => expect(result.current).toEqual(testPizza));

  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});
