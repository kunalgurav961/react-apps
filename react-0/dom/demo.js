function myMainFunc(callback) {
  let data = { name: "juee" };
  callback(data);
}

function demo(d) {
    console.log(d.name)
}

myMainFunc(demo)