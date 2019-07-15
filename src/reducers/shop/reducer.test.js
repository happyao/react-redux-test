import { types } from "../../actions/types";
import reducer from "./reducer";
import { initialState } from "./reducer";
import dumplings from "../../assets/dumplings.png";
import potatos from "../../assets/potatos.png";
import cakes from "../../assets/cakes.png";
describe("Reducer", () => {
  it("should return default state", () => {
    const newState = reducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it("should remove one item", () => {
    const resultState = {
      shopList: [
        {
          id: 1,
          num: "#4231648",
          name: "Spicy Mexican potatoes",
          price: (8.5).toFixed(2),
          count: 1,
          image: potatos,
          total: (8.5).toFixed(2)
        },
        {
          id: 2,
          num: "#4231648",
          name: "Breakfast",
          price: (5.9).toFixed(2),
          count: 1,
          image: cakes,
          total: (5.9).toFixed(2)
        }
      ],
      subTotal: (14.4).toFixed(2)
    };
    const newState = reducer(initialState, { type: types.REMOVE_ITEM, id: 0 });
    expect(newState).toEqual(resultState);
  });

  it("should add price & total on item and add result on subTotal", () => {
    const resultState = {
      shopList: [
        {
          id: 0,
          num: "#4231648",
          name: "Chicken momo",
          price: (10.5).toFixed(2),
          count: 2,
          image: dumplings,
          total: (21.0).toFixed(2)
        },
        {
          id: 1,
          num: "#4231648",
          name: "Spicy Mexican potatoes",
          price: (8.5).toFixed(2),
          count: 1,
          image: potatos,
          total: (8.5).toFixed(2)
        },
        {
          id: 2,
          num: "#4231648",
          name: "Breakfast",
          price: (5.9).toFixed(2),
          count: 1,
          image: cakes,
          total: (5.9).toFixed(2)
        }
      ],
      subTotal: (35.4).toFixed(2)
    };
    const newState = reducer(initialState, { type: types.ADD_ITEM, id: 0 });
    expect(newState).toEqual(resultState);
  });

  it("should delete price & total on item and delete result on subTotal", () => {
    const resultState = {
      shopList: [
        {
          id: 0,
          num: "#4231648",
          name: "Chicken momo",
          price: (10.5).toFixed(2),
          count: 1,
          image: dumplings,
          total: (10.5).toFixed(2)
        },
        {
          id: 1,
          num: "#4231648",
          name: "Spicy Mexican potatoes",
          price: (8.5).toFixed(2),
          count: 0,
          image: potatos,
          total: (0.0).toFixed(2)
        },
        {
          id: 2,
          num: "#4231648",
          name: "Breakfast",
          price: (5.9).toFixed(2),
          count: 1,
          image: cakes,
          total: (5.9).toFixed(2)
        }
      ],
      subTotal: (16.4).toFixed(2)
    };
    const newState = reducer(initialState, { type: types.DELETE_ITEM, id: 1 });
    expect(newState).toEqual(resultState);
  });
});
