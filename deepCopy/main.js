const deepCopy = (obj) => {
  return new Promise((resolve, reject) => {
    const copied = {};
    if (typeof obj !== "object") reject(`WRONG TYPE OF INPUT`);
    if (typeof obj === "object") {
      for (const key in obj) {
        if (typeof obj[key] === "object") {
          if (Array.isArray(obj[key])) {
            deepCopy(obj[key]).then((res) => (copied[key] = res));
          } else {
            deepCopy(obj[key]).then((res2) => (copied[key] = res2));
          }
        } else {
          copied[key] = obj[key];
        }
      }
      resolve(copied);
    }
  });
};
user = {
  name: "giorgi",
  age: [{ gio: 26 }, { dato: 29 }],
};

// SOLUTION 1
deepCopy("user")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// SOLUTION 2

async function makeRes() {
  try {
    const result = await deepCopy(user);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
makeRes();
