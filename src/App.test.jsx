import App from "./App";
import { mount } from "enzyme";

let tree;

describe("App sanity", () => {
  beforeAll(async () => {
    tree = await mount(<App />);
  });
  test("Given App | When the user clicks the button | Then open popup", () => {
    const button = tree.find(".btn");
    button.simulate("click");
    const popup = tree.find(".popup");
    expect(popup).toHaveLength(1);
  });
});
