let personName = "Muhammad arham";

console.log("Lowercase:", personName.toLowerCase());

console.log("Uppercase:", personName.toUpperCase());

console.log("Titlecase:", personName.replace(/\b\w/g, (char) => char.toUpperCase()));