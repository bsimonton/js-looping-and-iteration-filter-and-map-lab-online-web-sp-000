// Code your solution here:

function driversWithRevenueOver(array, num) {
  return array.filter(function(driverName) {
      return driverName.revenue > num;
  });
}