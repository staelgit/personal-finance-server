const { Schema, model } = require('mongoose');

const schema = new Schema(
   {
      typeOperation: {
         type: String,
         enum: ['income', 'expense']
      },
      userId: {
         type: Schema.Types.ObjectId,
         ref: 'User'
      },
      categoryId: {
         type: Schema.Types.ObjectId,
         ref: 'Category'
      },
      cashAccountId: {
         type: Schema.Types.ObjectId,
         ref: 'CashAccount'
      },
      comment: {
         type: String,
         required: true
      }
   },
   /* {
      typeOperation: {
         type: String,
         required: true
      },
      userId: {
         type: String,
         required: true
      },
      categoryId: {
         type: String,
         required: true
      },
      cashAccountId: {
         type: String,
         required: true
      },
      comment: {
         type: String,
         required: true
      }
   },*/
   {
      timestamps: true
   }
);

module.exports = model('Operation', schema);
