// truthy:
// falsy: false, 0, '', null, undefined, NaN

let login = NaN;

if (login) {
  console.log(`I am Truthy`);
} else {
  console.log(`I am Falsy`);
}
