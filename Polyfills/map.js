// Pollyfill for map function
Array.prototype.ourMap = function(callback) {
    var arr = [] // since, we need to return an array
    for (var i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
    }
    return arr // finally returning the array
  }

//   Polyfills list
//   https://reeversedev.com/polyfill-for-foreach-map-filter-reduce