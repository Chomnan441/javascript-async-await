// Exercise #5
let getJohnProfile =async () => {
  return await new Promise(function (_, reject) {
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
function displayJohnProfile(data){
  console.log(data);
}
function displayJohnProfileError(error){
  console.log(error);
}
getJohnProfile().then(displayJohnProfile).catch(displayJohnProfileError);
console.log("Data loading....");
console.log("Something...");