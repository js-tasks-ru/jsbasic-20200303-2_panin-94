/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
        let Spam = str.toLowerCase();
        return Spam.includes('1xbet') || Spam.includes('xxx');
      }
