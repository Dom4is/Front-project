import get from "lodash/get.js";
import { flatten, getObjectByNames } from "./objects.js";
const data = {
  user: "ubuntu",
  hosts: {
    0: {
      name: "web1",
    },
    1: {
      name: "web2",
      null: 3,
      active: false,
    },
  },
};

const dataName = get(data, "hosts.1.null", "not found");

console.log(getObjectByNames(data, ["hosts", 1, "null"]));
console.log(dataName);
console.log(flatten([1, 2, [2, 2, 2], 5]));
