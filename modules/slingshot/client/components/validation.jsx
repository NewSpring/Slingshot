const Validation = {

  startOfVisa: /^4[0-9]{0,15}$/,
  startOfMastercard: /^5$|^5[1-5][0-9]{0,14}$/,
  startOfAmEx: /^3$|^3[47][0-9]{0,13}$/,
  startOfDiscover: /^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$/,

  email: function email(value) {

    const regex = /[\w\.\'_%-]+(\+[\w-]*)?@([\w-]+\.)+[\w-]+/;
    return regex.test(value);

  },

  alpha: function alpha(event) {

    const regex = /[a-zA-Z]+/;
    return regex.test(value);

  },

  alphaNumeric: function alphaNumeric(event) {

    const regex = /[[:alnum:]]+/;
    return regex.test(value);

  },

  azureSubdomain: function azureSubdomain(value) {

    // lowercase letters a-z, the numbers 0-9 and the hyphen
    // The hyphen may not lead or trail in the name

    const regex = /^[a-z,0-9]+(-[a-z,0-9]+)*$/;
    return regex.test(value);

  },

  creditCard: function creditCard(value) {

    if (Validation.startOfVisa.test(value)) {

      const regex = /^4[0-9]{12}(?:[0-9]{3})?$/;
      return regex.test(value);

    } else if (Validation.startOfMastercard.test(value)) {

      const regex = /^5[1-5][0-9]{14}$/;
      return regex.test(value);

    } else if (Validation.startOfAmEx.test(value)) {

      const regex = /^3[47][0-9]{13}$/;
      return regex.test(value);

    } else if (Validation.startOfDiscover.test(value)) {

      const regex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
      return regex.test(value);

    } else {

      return false;

    }

  },

  creditExpiry: function creditExpiry(value) {

    const regex = /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/;
    return regex.test(value);

  },

  creditCVV: function creditCVV(value) {

    const regex = /^[0-9]{3,4}$/;
    return regex.test(value);

  },

  notNull: function notNull(value) {

    if (value) {
      return true;
    } else {
      return false;
    }

  }


}

export default Validation;
