// Exercise #4
let getJohnProfile = async () => {
  return await new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
function displayJohnProfile(data){
  console.log(data);
}
getJohnProfile().then(displayJohnProfile);
console.log("Data loading....");