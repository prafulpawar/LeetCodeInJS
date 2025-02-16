/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end =n;
        let ans  =-1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(isBadVersion(mid)){
            ans = mid;
            end = mid -1;
        }

        else
            start = mid + 1;
    }
    return ans;
    };
};