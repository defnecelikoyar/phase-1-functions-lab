function distanceFromHqInBlocks(pickup) {
    let result
    if (pickup > 42) {
        result = pickup - 42;
    }
    else if (pickup < 42) {
        result = 42 - pickup
    }
    return result
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264
  }

  function distanceTravelledInFeet(pickup, dropoff) {
    let distance
    if (dropoff > pickup) {
        distance = dropoff - pickup;
    }
    else if (pickup > dropoff) {
        distance = pickup - dropoff;
    }
    return distance * 264
  }

  function calculatesFarePrice(pickup, dropoff) {
    let distance = distanceTravelledInFeet (pickup, dropoff);
    let cents;
    const flat = 25;
    const free = 0;
    const cannot = 'cannot travel that far';
    if (distance > 400 && distance < 2000) {
        return cents = (distance - 400) * 0.02;
    }  
    else if (distance <= 400) {
        return free;
    }
    else if (distance > 2000 && distance < 2500) {
        return flat
    }
    else if (distance > 2500) {
        return cannot
    }
  }
  //returns the fare for the customer. Given the same starting and ending block as the previous test (hint hint)
  //return the fare for the customer. The first four hundred feet are free.
  //For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!).
  //Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
  //Finally, Scuber does not allow any rides over 2500 feet —
  //the function returns 'cannot travel that far' if a ride over 2500 feet is requested.