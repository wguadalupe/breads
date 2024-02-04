
// require mongoose 
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMjE4Mjg4LWltYWdlLWt3dnc2MHBjLmpwZw.jpg' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})


//helper methods
// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}



//model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
