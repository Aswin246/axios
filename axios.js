const axios = require("axios");
// function main() {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
//     const json = await response.json();
//     console.log(json);
//   });
// }

// async function main() {
//   const response = await fetch("https://sum-server.100xdevs.com/todos");
//   const json = await response.json();
//   console.log(json);
// }
async function main() {
  const response = await axios.get("https://sum-server.100xdevs.com/todos");
  console.log(response.data.todos);
}

main();
