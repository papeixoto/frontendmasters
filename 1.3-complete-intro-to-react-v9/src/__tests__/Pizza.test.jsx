import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt text renders on Pizza image", () => {
  const name = "My Favorite Pizza";
  const description = "This is my favorite pizza";
  const src = "https://picsum.photos/206";
  const screen = render(
    <Pizza name={name} description={description} image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", () => {
  const name = "My Favorite Pizza";
  const description = "This is my favorite pizza";
  const screen = render(<Pizza name={name} description={description} />);

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
