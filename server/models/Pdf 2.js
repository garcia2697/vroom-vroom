const { Schema, model } = require('mongoose');

const pdfSchema = new Schema(
  {
    pdfTitle: {
      type: String,
      required: 'You need to enter the PDF title',
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: timestamp => dateFormat(timestamp)
    // },
    year: {
      type: Number,
      required: true
    },
    month: {
        type: Number,
        required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Pdf = model('Pdf', pdfSchema);

module.exports = Pdf;
