const { Schema, model } = require('mongoose');

const catSchema = new Schema(
  {

    name: {
      type: String,
      required: 'You need to enter the name!'
    },
    breed: {
      type: String,
      required: 'You need to enter the breed!'
    },
    sex: {
      type: String,
      required: 'You need to select the sex!'
    },
    age: {
      type: Number,
      required: 'You need to enter the age!',
    },
    city: {
      type: String,
      required: 'You need to enter the city!'
    },
    image: {
      type: String,
      required: 'You need to link the image!'
    },
    user:{
      type: Schema.Types.ObjectId,
      ref:'users'
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Cat = model('Cat', catSchema);

module.exports = Cat;
