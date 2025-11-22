import "./objects.js";
import get from "lodash/get.js";
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

const getObjectByNames = (obj, keys) => {
  if (keys.length === 1 && Object.prototype.hasOwnProperty.call(obj, keys[0])) {
    return obj[keys[0]];
  } else if (keys.length > 1) {
    if (Object.prototype.hasOwnProperty.call(obj, keys[0])) {
      return getObjectByNames(obj[keys[0]], keys.slice(1));
    }
  }
  return null;
};

console.log(getObjectByNames(data, ["hosts", 1, "null"]));
console.log(dataName);
