var CSS_CLASS_SEPARATOR = '-';

var utils = {
    /**
     * Check if string is uppercased
     * 
     * @param  {String}  str
     * @return {Boolean}
     */
    isUpperCased: function (str) {
        return str === str.toUpperCase();
    },


    /**
     * Conver camel cased string to CSS class
     *
     * @example
     * // return 'super-component'
     * convertNameToCSSClass('superComponent');
     * @example
     * // return 'super-component'
     * convertNameToCSSClass('SuperComponent');
     * 
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    convertNameToCSSClass: function (str) {
        var cssClass = '';
        var letter;

        for (var i = 0; i < str.length; i++) {
            letter = str[i];

            if (utils.isUpperCased(letter)) {
                if (i !== 0) {
                    cssClass += CSS_CLASS_SEPARATOR;
                }

                cssClass += letter.toLowerCase();
            } else {
                cssClass += letter;
            }
        }

        return cssClass;
    },


    /**
     * Make first letter of string as uppercased
     *
     * @example
     * // return 'Hello'
     * upFirstLetter('hello')
     * 
     * @param  {String} str
     * @return {String}
     */
    upFirstLetter: function (str) {
        return str[0].toUpperCase() + str.slice(1);
    }
};


module.exports = utils;