import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./App";
import {render, fireEvent} from '@testing-library/react';
import * as React from 'react';

describe("App sanity", () => {

  test("Given App | When the user clicks the button | Then open popup", async () => {
    const tree = render(<App />);

    const button = tree.getByTestId("btn");
    fireEvent.click(button);
    const popup = tree.getByText("Popup text");
    expect(popup).toBeTruthy();
  });
});
