import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  beforeEach(() => {
    render(<Card />);
  });

  test("renders ", async () => {
    const cardComponent = screen.queryByTestId(/card/i);
    expect(cardComponent).toBeInTheDocument();
  });
});

