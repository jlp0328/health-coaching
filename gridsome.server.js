const axios = require("axios");

module.exports = function(api) {
  api.loadSource(async actions => {
    const { data } = await axios.get(
      "https://health-db-9afe2.firebaseapp.com/api/v1/clients/"
    );

    const collection = actions.addCollection({
      typeName: "Clients"
    });

    data.clientList.forEach(client => {
      collection.addNode({
        client
      });
    });
  });
};
