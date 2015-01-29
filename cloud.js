module.exports = {

  /**
   * Counts the number of occurances of "cloud" in the phrase.
   * @param  {String} phrase
   * @return {Number} the number of times "cloud" shows up in `phrase`
   */
  findCloud: function(phrase) {
    return phrase.match(/cloud\b/ig).length;
  },

  /**
   * Replaces all instances of the word "cloud" with another word.
   * Maintains capitalization.
   * @param  {String} phrase
   * @param  {String} newWord the word to replace "cloud"
   * @return {String} The new phrase.
   */
  replaceCloud: function(phrase, newWord) {
    // var matches = phrase.match(/cloud\b/ig);

    // for (var i = 0; i < matches.length; i++) {
    //   matches[i].match(/[A-Z]/) ? phrase = phrase.replace(matches[i], this.capitalize_first(newWord)) : phrase = phrase.replace(matches[i], newWord);
    // };

    phrase = phrase.replace(/cloud\b/g, newWord);
    return phrase.replace(/Cloud\b/g, this.capitalize_first(newWord));     

  },

  /**
   * CHALLENGE
   * Replaces a word with another word.
   * Maintains capitalization.
   * @param  {String} phrase      The original phrase
   * @param  {String} targetWord  The word to find
   * @param  {String} newWord     The word to replace the `target` word with
   * @return {String}             A new phrase with all `target` words replaced
   */
  replaceWords: function(phrase, targetWord, newWord) {
    var target = new RegExp(targetWord, 'g');
    var cap_target = new RegExp(this.capitalize_first(targetWord), 'g');
    // var matches = phrase.match(target);

    // for (var i = 0; i < matches.length; i++) {
    //   matches[i].match(/[A-Z]/) ? phrase = phrase.replace(matches[i], this.capitalize_first(newWord)) : phrase = phrase.replace(matches[i], newWord);
    // };


    phrase = phrase.replace(target, newWord);
    return phrase.replace(cap_target, this.capitalize_first(newWord));      
  },

  capitalize_first: function (str) {
    return str.replace(str[0], str[0].toUpperCase());
  }

};
