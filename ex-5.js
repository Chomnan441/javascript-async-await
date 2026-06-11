// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
function displayJohnProfile(data) {
  console.log(data);
}
function displayJohnProfileError(error) {
  console.log(error);
}
async function mainSync() {
  try {
    let data = await getJohnProfile();
    displayJohnProfile(data);
  }
  catch (error) {
    displayJohnProfileError(error);
  }
}

mainSync();
console.log("Data loading....");