function updateLight(current) {
  let trafficLightArr = ['green', 'yellow', 'red', 'green'];

  for (let i = 0; i < trafficLightArr.length; i++) {
    if(current === trafficLightArr[i]){
      return trafficLightArr[i + 1];
    }
  }
}

console.log(updateLight('green'));
