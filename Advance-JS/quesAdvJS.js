function simulateAsyncTask() {
    console.log("Task started");
    
    setTimeout(function() {
        console.log("Task finished");
    }, 2000);
}

// simulateAsyncTask();

function simulateMultipleTasks() {
    setTimeout(function() {
        console.log("Task 1 finished");
    }, 1000);
    setTimeout(function() {
        console.log("Task 2 finished");
    }, 2000);
    setTimeout(function() {
        console.log("Task 3 finished");
    }, 3000);
}

// simulateMultipleTasks();


function rateLimiter(fn, limit) {
    return function() {
      setTimeout(function() {
        console.log("Rate limit exceeded");
        }, 2000);
        return fn;
    };
}
// let limitExceeded = rateLimiter("Rate...");
// console.log(limitExceeded());


// function Shape(color) {
//     this.color = color;
//     Shape.prototype.getColor = function() {};
//     return this.color;
// }

// Shape.prototype.Rectangle = function() {
//     return this.color;
// };

// function Rectangle(width, height, color) {
//     this.width = width;
//     this.height = height;
// }

// Rectangle.prototype.getArea = function() {
//     return `The area of the rectangle ${this.height * this.width} of ${this.color} color.`
// }

// let color = new Shape("Green");
// let rectangle = new Rectangle(2, 4);

// console.log(color, rectangle);
// console.log(rectangle.getArea());


// Task 2: Shape and Rectangle
function Shape(color) {
    this.color = color;
  }
  
  Shape.prototype.getColor = function() {
    return this.color;
  };
  
  function Rectangle(color, width, height) {
    Shape.call(this, color);
    this.width = width;
    this.height = height;
  }
  
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  Rectangle.prototype.getArea = function() {
    return this.width * this.height;
  };
  
  const myRectangle = new Rectangle("blue", 5, 10);
  // console.log(myRectangle.getColor());
  // console.log(myRectangle.getArea());



  const person = {
    name: "Kaushik",
    
    introduce: function() {
        return `Hello my name is ${this.name}`;
    },
};
let introPerson = person.introduce;
// console.log(introPerson());

let introduction = introPerson.bind(person);
// console.log(introduction());





function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

// console.log(new Food("cheese", 5));





function greet(name) {
  this.name = name;
}
function Person(name) {
  greet.call(this, name);
  // this.category = "introduce";
}
// console.log(new Person("Kaushik"));
// console.log(new Person("Kaushik").name);




// 10.
// function fetchUser() {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve("Resolved in 1 second");
//       }, 1000);
//   });
// }

// function fetchPosts() {
//   return new Promise((reject) => {
//       setTimeout(() => {
//         reject("error");
//       }, 1000);
//   });
// }

// fetchUser()
// .then(() => {
//   return User;
// })
// .catch((error) => {
// console.log(error);
// });

// fetchPosts()
// .then(() => {
//   return Posts;
// })
// .catch((error) => {
// console.log(error);
// });


function rangeIterator(start, end) {
  yield = 1;
  yield = 9;
}
console.log(rangeIterator.next().value);
console.log(rangeIterator.next().value);

rangeIterator(1, 9);




// code ex:44
// Task 1
function fetchUser() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve($[0]);
      }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve($[0]);
      }, 1000);
  });
}

async function fetchAllData() {
  let [user, posts] = await Promise.all([
      fetchUser(),
      fetchPosts()
      ]);
console.log(user);
console.log(posts);
}

// Task 2
function fetchSuccess() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Resolves successfully");
      }, 1000);
  });
}

function fetchFailure() {
  return new Promise((reject) => {
      setTimeout(function() {
          reject("error");
      }, 1000);
  });
}

async function handlePromises() {
try {
    let [succcess, failure] = await promise.all([
        fetchSuccess(),
        fetchFailure()
        ]);
} catch (error) {
  console.log(error);
}
}

// Task 3
function fetchWithTimeout(promise, timeout) {
  setTimeout(function() {
      this.promise = promise;
      this.timout = timeout;
  }, 1000);
}

function fetchData() {
return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 3000));
}