/*
Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. 
It works by passing approximated ride distance and ride time through this formula:

(Cost per minute) * (ride time) + (Cost per mile) * (ride distance)

where Cost per minute and Cost per mile depend on the car type.

You are one of the engineers building the Fare Estimator, 
so knowing cost per minute and cost per mile for each car type, 
as well as ride distance and ride time, return the fare estimates for all car types.

*/

function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    const result = [];
    
    for (let i = 0; i < cost_per_minute.length; i++) {
        result.push(parseFloat(parseFloat(ride_time * cost_per_minute[i] +                     
            ride_distance * cost_per_mile[i], 2).toFixed(2)));
    }
    return result;
}
