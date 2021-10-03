if(!String.prototype.repeat)
    /**
     * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
     *
     * @param {number} count — number of copies to append
     * @returns {String}
     */
    String.prototype.repeat = function(count) {
        let result = "";
        for(let i = 0; i < count; i++) result += this;

        return result;
    }

/**
 * Converts the string to binary
 * @returns {String[]} Binary representation of the string
 */
String.prototype.toBinary = function() {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        let bin = (this.charCodeAt(i)).toString(2);
        bin = "0".repeat(-((bin.length / 8) - 1) * 8) + bin;
        
        result.push(bin);
    }
    return result;
};

/**
 * Converts the string to binary
 * @returns {String[]} Binary representation of the string
 */
module.exports = function(str) {
    return str.toBinary();
}

/**
 * Converts the string to binary
 * @param {String} str String to convert to binary
 * @returns {String[]} Binary representation of the string
 * @function
 */
module.exports.toBinary = module.exports;
