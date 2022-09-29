import { render, screen } from "@testing-library/react";
import AddComment from "./AddComment";

describe("AddComment", () => {
  beforeEach(() => {
    render(<AddComment />);
  });

  test("renders ", async () => {
    const addCommentComponent = screen.queryByTestId(/addComment/i);
    expect(addCommentComponent).toBeInTheDocument();
  });
});

