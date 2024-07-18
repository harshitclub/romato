const mongoose = require("mongoose");

// const dbConnect = async () => {
//   const mongo_uri = process.env.DB_URL;

//   return new Promise((resolve, reject) => {
//     mongoose
//       .connect(mongo_uri)
//       .then(() => {
//         console.log("DB Connected: ", mongoose.connection.host);
//         resolve();
//       })
//       .catch((err) => {
//         console.log(err);
//         reject(new Error("DB Connection Error!"));
//       });
//   });
// };

const dbConnect = async () => {
  const mongo_uri = process.env.DB_URL;
  try {
    mongoose.connect(mongo_uri).then(() => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
