import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList", () => {
  beforeEach(() => {
    render(<CardList />);
  });

  test("renders ", async () => {
    const cardListComponent = screen.queryByTestId(/cardList/i);
    expect(cardListComponent).toBeInTheDocument();
  });
});

