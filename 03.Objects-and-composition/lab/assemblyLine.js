// Create a function that returns a library of decorator functions. They can be used to compose different functionality in a car object that they receive as an argument.
// Your solution must return an object, containing three decorator functions:
// hasClima
// hasAudio
// hasParktronik

function createAssemblyLine() {
  return {
    hasClima(carObject) {
      carObject.temp = 21;
      carObject.tempSettings = 21;
      carObject.adjustTemp = () => {
        if (carObject.temp < carObject.tempSettings) {
          carObject.temp += 1;
        } else if (carObject.temp > carObject.tempSettings) {
          carObject.temp -= 1;
        }
      };
    },

    hasAudio(carObject) {
      (carObject.currentTrack = {
        name: null,
        artist: null,
      }),
        (carObject.nowPlaying = () => {
          if (Object.values(carObject.currentTrack)) {
            console.log(
              `Now playing '${carObject.currentTrack.name}' by ${carObject.currentTrack.artist}`
            );
          }
        });
    },

    hasParktronic(carObject) {
      carObject.checkDistance = (distance) => {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };
}



const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);
