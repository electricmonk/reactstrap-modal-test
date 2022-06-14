import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./App";
import {render, fireEvent} from '@testing-library/react';
import * as React from 'react';

describe("The popup", () => {

  it("is shown when the button is clicked", () => {
    const tree = render(<App />);

    const button = tree.getByTestId("btn");
    expect(tree.queryByText("Popup text")).toBeFalsy();
    fireEvent.click(button);
    expect(tree.queryByText("Popup text")).toBeTruthy();
    fireEvent.click(button);
    expect(tree.queryByText("Popup text")).toBeFalsy();
  });

});
