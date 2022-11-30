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
      },
      type: {
         type: String,
         enum: ['income', 'expense']
      }
   },
   /* {
      title: {
         type: String,
         required: true
      },
      userId: {
         type: String,
         required: true
      },
      type: {
         type: String,
         required: true
      }
   },*/
   {
      timestamps: true
   }
);

module.exports = model('Category', schema);
