const accountId = 144553
let accountEmail = "vijaya@google.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState;

//accountId=2   /// not allowed

accountEmail= "hhhhh@google.com"
accountPassword = "212121"
accountCity = "jaipur"

console.log(accountId);
/*
Prefer not use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])