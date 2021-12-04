import { invertTree, Node } from "./index";

test("invertTree", () => {
  const given: Node = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: null,
      },
    },
    right: {
      value: 3,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  };

  const expected: Node = {
    value: 1,
    left: {
      value: 3,
      left: {
        value: 7,
        left: null,
        right: null,
      },
      right: {
        value: 6,
        left: null,
        right: null,
      },
    },
    right: {
      value: 2,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
  };

  invertTree(given);

  expect(given).toEqual(expected);
});
