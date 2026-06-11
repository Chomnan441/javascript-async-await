// Exercise #6
let getJohnProfile = async () => {
  return await new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      2000
    );
  });
};

let getJohnOrders = async () => {
  return await new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1000
    );
  });
};

// Start coding here
function displayJohnProfile(data) {
  console.log(data);
}
function displayJohnOrders(data) {
  console.log(data);
}
getJohnProfile()
  .then(displayJohnProfile)
  .then(getJohnOrders)
  .then(displayJohnOrders);
console.log("loading...");

// getJohnProfile()
//   .then(displayJohnProfile)
// getJohnOrders()
//   .then(displayJohnOrders);

// console.log("loading...data set2");
