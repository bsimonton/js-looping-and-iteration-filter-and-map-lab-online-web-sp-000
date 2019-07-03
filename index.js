// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  
 return drivers.filter(function(driverName){ 
   
   return driverName.revenue > revenue; });
  
}



function driverNamesWithRevenueOver(drivers, number){
  
  return driversWithRevenueOver(drivers, number).map(function(driverName){return driverName.name});
  
  
}


function exactMatch(drivers, attr){
  
  return drivers.filter(function(name){
    
    let matches = false;
    
    
    for (const key in attr){ matches = name[key] === attr[key]} 
    
    return matches;
  });
  
  
}


