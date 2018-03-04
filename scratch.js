// const exercises = [
//   { day1: ['puching', 'kicking'] },
//   { day2: ['screaming', 'fighting'] },
//   { day3: ['saucing', 'eating'] },
//   { day4: ['trapping', 'rapping'] }
// ];
//
// const exercisesHash = {
//   day1: ['puching', 'drinking'],
//   day2: ['slapping', 'trapping'],
//   day3: ['eating', 'rapping'],
//   day4: ['puching', 'flapping'],
// }

const exercisesHash = {
  kneeDom: ['puching', 'drinking', 'kicking'],
  hipDom: ['slapping', 'trapping', 'hamstring ripper'],
  horPush: ['eating', 'rapping', 'push ups'],
  vertPush: ['puching', 'flapping', 'moon jumps'],
}

// const exerciseList = [];
// for (const [key, value] of Object.entries(exercisesHash)) {
//   console.log('Get the Key', key, value)
// }

// exCat ie; kneeDom, hipDom

const chooseRandomExercise = (exerciseState, numberOfExercises) => {
  console.log(exerciseState);
  if(Object.keys(exerciseState).length === 0) return null;
  // console.log('In rando', Object.keys(exerciseState))
  const exercises = [];
  while (exercises.length !== numberOfExercises) {
    const exercise = exerciseState[Math.floor(Math.random() * exerciseState.length)];
    if (!exercises.includes(exercise)) {
      exercises.push(exercise);
      console.log('added new exercise', exercise)
    } else {
      console.log(exercise, 'already in List')
    }
  }
  return exercises;
};

console.log(chooseRandomExercise(exercisesHash.hipDom, 3))




//
// const chooseRandomExercise = (exerciseState, exerciseCategory, numberOfExercises) => {
//   const exercises = [];
//   while (exercises.length !== numberOfExercises) {
//     const exerciseList = exerciseState[exerciseCategory]
//     const exercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];
//     if (!exercises.includes(exercise)) {
//       exercises.push(exercise);
//       console.log('added new exercise', exercise)
//     } else {
//       console.log(exercise, 'already in List')
//     }
//   }
//   return exercises;
// };

// console.log(chooseRandomExercise(exercisesHash, 'hipDom', 3));





// exercises.forEach(function(exercise) {
//   console.log(Object.entries(exercise))
// })

// for (const [key, value] of Object.entries(exercisesHash)) {
//   console.log('Get the Key', key, value)
// }
