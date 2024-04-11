//Define a function
function make_car(manufacturer, model, ...options) {
  let car = { manufacturer: manufacturer, model: model };
  options.forEach((option) => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
  });
  return car;
}

let myCar = make_car("Suzuki", "Alto", "colour: black", "Sunroof: true");

console.log(myCar);
