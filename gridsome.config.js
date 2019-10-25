const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/*.scss")]
    });
}

module.exports = {
  siteName: "health-coaching",
  plugins: [
    {
      use: "gridsome-source-firestore",
      options: {
        credentials: require("./health-db-9afe2-firebase-adminsdk-edpz3-348f7f78af.json"),
        debug: true,
        collections: [
          {
            ref: db => {
              return db.collection("clients");
            },
            slug: "clients",
            children: [
              {
                ref: (db, parentDoc) => {
                  return parentDoc.ref.collection("dailyWeight");
                }
              },
              {
                ref: (db, parentDoc) => {
                  return parentDoc.ref.collection("dailyMacros");
                }
              },
              {
                ref: (db, parentDoc) => {
                  return parentDoc.ref.collection("monthlyMeasurements");
                }
              }
            ]
          }
        ]
      }
    }
  ],
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
