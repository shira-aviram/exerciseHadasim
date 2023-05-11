const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
  
  fullName: {
   
      type: String,
      require:true,
      minlength: [2, 'Full name must be at least 2 characters'],
      maxlength: [50, 'full name cannot be longer than 50 characters'],
  },


  idCard: {
    type: String,
    required: true,
    minlength: [9, 'ID card must be at least 9 characters long'],
    maxlength: [9, 'ID card cannot be longer than 9 characters'],
    unique: true,
 
  },

  address: {
    type: String,
    required: [true, 'Address is required'],
    minlength: [5, 'Address must be at least 5 characters long'],
    maxlength: [100, 'Address cannot be longer than 100 characters'],
  },

  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
    validate: {
      validator: function (value) {
        return !isNaN(Date.parse(value));
      },
      message: 'Invalid date of birth',
    },
  },

  mobilePhone: {
    type: String,
    required: [true, 'Mobile phone is required'],
    validate: {
      validator: function (value) {
        return /^[0-9]{10}$/.test(value);
      },
      message: 'Invalid mobile phone number',
    },
  },

  telephone: {
    type: String,
    required: [true, 'Telephone is required'],
    validate: {
      validator: function (value) {
        return /^[0-9]{7,}$/.test(value);
      },
      message: 'Invalid phone number',
    },
  },

  positive_result_date: {
    type: Date,
    required: false ,
    validate: {
      validator: function (value) {
        return !value || !isNaN(Date.parse(value));
      },
      message: 'Invalid date',
    },
  },

  recovery_date: {
    type: Date,
    default: null,
    required: false ,
    validate: {
      validator: function (value) {
        return !value || !isNaN(Date.parse(value));
      },
      message: 'Invalid date',
    },
  },

  vaccination_dates: {
    type: [Date],
    default: [],
    required: false,
    sparse: true
  },
    
  vaccine_manufacturers: {
    type: [String],
    default: [],
    required: false,
    sparse: true
  },
  imageFile:{
    type:String,
    required: false 
}
})

ClientSchema.index({ idCard: 1 }, { unique: true });//לתעודת זהות ייחודית

module.exports = mongoose.model('clients', ClientSchema);
