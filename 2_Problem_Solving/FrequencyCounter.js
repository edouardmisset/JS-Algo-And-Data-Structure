// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by
// rearranging the letters of another, such as cinema, formed from iceman.
// We don't care about case, nor do we need to account for spaces or
// non-alphanumeric characters.
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

/**
 * Determine if two strings are anagrams of each other
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {string} str1 - The first string
 * @param {string} str2 - The second string
 * @returns {boolean} - True if the strings are anagrams, false otherwise
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  const frequencyCounter1 = frequencyCounter(str1)
  const frequencyCounter2 = frequencyCounter(str2)
  for (const key in frequencyCounter1) {
    const isFrequencyEqual = (key in frequencyCounter2) &&
      frequencyCounter1[key] === frequencyCounter2[key]
    if (isFrequencyEqual) continue

    return false
  }
  return true
}

/**
 * Create a frequency counter object for the characters in a string
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} string - The string to create a frequency counter for
 * @returns {Object} - The frequency counter object
 */
function frequencyCounter(string) {
  const frequencyCounter = {}
  for (const char of string) {
    frequencyCounter[char] = ++frequencyCounter[char] || 1
  }
  return frequencyCounter
}
