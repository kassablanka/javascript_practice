function makeAdder(x) {
    // parameter `x` is an inner variable

    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
	return y + x;
    };

    return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

console.log(plusOne( 3 ));       // 4  <-- 1 + 3
console.log(plusOne( 41 ));      // 42 <-- 1 + 41

console.log(plusTen( 13 ));      // 23 <-- 10 + 13

// more complicated example
// User() is referred to as a module
function User(){
    var username, password;

    function doLogin(user,pw) {
	username = user;
	password = pw;

	// do the rest of the login work
    }

    var publicAPI = {
	login: doLogin
    };

    return publicAPI;
}

// create a `User` module instance
var fred = User();

// you're referencing the publicAPI object that has been assigned
// to fred after you instantiate it with User()
// and the only object there is a local function
// which accepts the two parameters you pass it
fred.login( "fred", "12Battery34!" );
console.log("here's fred: " + fred.username); //undefined; no access
