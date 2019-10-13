// const axios = require("axios");

//Create JSON object/file with API, typeName, nodeName...
//Loop over the object to create all of the endpoints
// module.exports = function(api) {
//   api.loadSource(async actions => {
//     const { data } = await axios.get(
//       "https://health-db-9afe2.firebaseapp.com/api/v1/clients/all-clients/"
//     );

//     const collection = actions.addCollection({
//       typeName: "Clients"
//     });

//     data.clientList.forEach(client => {
//       collection.addNode({
//         client
//       });
//     });
//   });
// };
