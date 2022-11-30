const { Schema, model } = require('mongoose');

const schema = new Schema(
   {
      title: {
         type: String,
         required: true
      },
      userId: {
         type: Schema.Types.ObjectId,
         ref: 'User'
      }
   },
   /*   {
      title: {
         type: String,
         required: true
      },
      userId: {
         type: String,
         required: true
      }
   },*/
   {
      timestamps: true
   }
);

module.exports = model('CashAccount', schema);
