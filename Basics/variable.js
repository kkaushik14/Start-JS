const accountId = 1448755
let accountEmail = "kk@gmail.com"
var accountPassword = "414816877"  //prefer not to use bcz of issue with block and function scope.

accountCity  = "Banagalore" //bad way to declration of variable
let accountstate   //run and see

// accountId = 52 //not allowed bcz const can't change


//run and see
accountEmail = "k24@gmail.com"
accountPassword = "8298kk"
accountCity = "Delhi"

console.log(accountId);

console.table (
    [accountId, accountEmail, accountPassword, accountCity, accountstate]
)