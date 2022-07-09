import fetchJsonp from 'fetchJsonp';

var apiUrl = "http://api.petfinder.com/pet.find?format=json&key=&animal=${animal}&location=${zip}&callback=callback";

var listEl = document.getElementById("myData");

fetchJsonp(apiUrl, {
    jsonpCallbackFunction: 'callback'
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));




// this works:
    // var apiUrl = "https://dog.ceo/api/breeds/list/all";

  //  {
  //  "token_type":"Bearer",
  // "expires_in":3600,
  // "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJBcU1JSmp0VmplRTRnSVRPNGdXeHRQaTRZN1Q3QTY5d09zWjh0NmF6VXU4QkJpc0QxZCIsImp0aSI6IjA0ZWYwM2JkOTE0MTczM2Q5ZjUzNTZhNTZiYzllN2RkNWYzOTc5ZWQyNTk2ZDEwZTAwZWU0MDU2YmJmNmFlMzIyMGUzNzkxMWRkYThhODI3IiwiaWF0IjoxNjU3MjQyNzk3LCJuYmYiOjE2NTcyNDI3OTcsImV4cCI6MTY1NzI0NjM5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.DAPh_jf0JfpXJV3g_Dmi1s8_R9trPrMzcq6H0DhYHnu0agOrrp-tlpWSfz0HNRGlrn0lqPEAZGJTx4LPipV2BDkd_m7q9YZ4PtgkXkk56LedHjfvhZ0S2GRXOhppVWr5bbNA4kEOOyoz4nvrFWhjOxiWgmTX8gYN9c1GSp4-TZtXZ4ab8pl98JTaxrYJfLd5Ns9_21eqC3gf-eeMwfovX09g-Gzrwe_cA8UURrMWpBrEcL0NMcLeoTfNSBEUx8booA9T3HXvYoAVHE0UjLFpWUMgMhHO16ZTQMG9pqrJ72yeu_cnmzQrvfWYPctOl0Ff0w64HPb1aHbIPo5KfHBtHg"}



  // doesn't work yet:
// var apiUrl = "curl -H 'Authorization: Bearer {eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJBcU1JSmp0VmplRTRnSVRPNGdXeHRQaTRZN1Q3QTY5d09zWjh0NmF6VXU4QkJpc0QxZCIsImp0aSI6IjA0ZWYwM2JkOTE0MTczM2Q5ZjUzNTZhNTZiYzllN2RkNWYzOTc5ZWQyNTk2ZDEwZTAwZWU0MDU2YmJmNmFlMzIyMGUzNzkxMWRkYThhODI3IiwiaWF0IjoxNjU3MjQyNzk3LCJuYmYiOjE2NTcyNDI3OTcsImV4cCI6MTY1NzI0NjM5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.DAPh_jf0JfpXJV3g_Dmi1s8_R9trPrMzcq6H0DhYHnu0agOrrp-tlpWSfz0HNRGlrn0lqPEAZGJTx4LPipV2BDkd_m7q9YZ4PtgkXkk56LedHjfvhZ0S2GRXOhppVWr5bbNA4kEOOyoz4nvrFWhjOxiWgmTX8gYN9c1GSp4-TZtXZ4ab8pl98JTaxrYJfLd5Ns9_21eqC3gf-eeMwfovX09g-Gzrwe_cA8UURrMWpBrEcL0NMcLeoTfNSBEUx8booA9T3HXvYoAVHE0UjLFpWUMgMhHO16ZTQMG9pqrJ72yeu_cnmzQrvfWYPctOl0Ff0w64HPb1aHbIPo5KfHBtHg}' GET https://api.petfinder.com/v2/animals";
