const LiveFormatting = {

  creditCard: function creditCard(value) {
    
    if (value) {

      // remove non numbers
      let newValue = value.replace(/[^\d]+/g, "")
      
      // ensure correct length
      newValue = newValue.substring(0, 16)
      
      // break apart the value every four numbers
      newValue = newValue.match(/.{1,4}/g)

      // format the new value
      newValue = newValue.join("-")

      return newValue
    }
    
    return value;
  },
  
  creditExpiry: function creditExpiry(value) {

  },
  
  azureShortname: function azureShortname(value) {
  
    if (value) {
    
    } else {
      // There isnt a value, let's fill it out for them
    
    }
  }

}

export default LiveFormatting;