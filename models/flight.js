const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const destinationSchema = new Schema({
  airport: {
    type: String, 
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: Date,
}, {
  timestamp: true,
});

const flightSchema = new Schema(
  {
    airline: { type: String, enum: ["American", "Southwest", "United"] },
    airport: {
      type: String,
      default: "DEN",
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    flightNo: { type: Number, min: 10, max: 9999 },
    departs: {
      type: Date,
      default: function () {
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let day = new Date().getDate();
        let date = new Date(year + 1, month, day);
        console.log(date);
        return date;
      },
    },
  },
  {
    timestamps: true,
  }
);

//schema is where we write the rules that we are going to pass to a model
//compiling a schema into a model
module.exports = mongoose.model("Flight", flightSchema);
