import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

// creates __snapshots__/Cart.test.jsx.snap file with the state at the time
// easy to break because of component changes
test("snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
