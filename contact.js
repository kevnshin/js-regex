module.exports = {

  /**
   * Returns all the emails in a phrase.
   * @param  {String} phrase
   * @return {[String]} an array of emails, or an empty array if none are found.
   */
  findEmails: function(phrase) {
    return phrase.match(/[a-zA-z0-9]+@[a-zA-z0-9]+.[a-zA-z0-9]+/g) || [];
  },

  /**
   * Finds all the phone numbers in a phrase
   * @param  {String} phrase
   * @return {[String]]} an array of phone numbers.
   */
  findPhoneNumbers: function(phrase) {
    return phrase.match(/([0-9]{10})|([0-9]{3}-[0-9]{3}-[0-9]{4})/g);
  }

};
