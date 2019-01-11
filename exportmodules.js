var list = [];

module.exports = {
  storeNumber: function(number) {
    list.push(number);
    console.log(list);
  },
  assortArray: function() {
    return list.sort(function(a,b) {
    return a - b;
  })
  }
};
