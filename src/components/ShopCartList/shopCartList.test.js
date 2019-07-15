import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../Utils";
import ShopCartList from "./index";
import { initialState } from "../../reducers/shop/reducer";
describe("CartListRender", () => {
  let wrapper;
  beforeEach(() => {
    let mockFunc = jest.fn();
    const props = { ...initialState, mockFunc };
    wrapper = shallow(<ShopCartList {...props} />);
  });

  it("should render three items", () => {
    const items = findByTestAttr(wrapper, "items");
    expect(items.length).toBe(3);
  });
});
