/*  
Part 1
Implement part of a web crawler
A web crawler has visited many URLS and put them into a sorted array
Write a function called findUrl() which takes an array:
logUrls a sorted array of URLs harvested from DNS server logs
target a URL to find
The function findUrl() returns the string target if it's present in the sorted list

Plan:
- binary search: O(log n) time

Part 2:
Implement findUrls() which takes two arrays logUrls a sorted array of URLs harvested from DNS server logs, and targets, an array of URLs to find

*/

// implementation with just one target URL
function findUrl(logUrls, target) {
  let low = 0;
  let high = logUrls.length - 1;

  while (high >= low) {
    let mid = Math.floor((high - low) / 2) + low;
    let midpointUrl = logUrls[mid];

    if (target === midpointUrl) return true;

    //greater
    if (target > midpointUrl) low = mid + 1;

    //less
    if (target < midpointUrl) low = mid - 1;

    //not present
    return false;
  }
}
