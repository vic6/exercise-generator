import React from 'react';
import ExerciseTable from './ExerciseTable';

const ExerciseTableList = ({ createDaysWorkout, chooseRandomExercise }) => {
  const tableTitles = [
    null,
    'Day 1 - Knee Dominant',
    'Day 2 - Upper Body',
    'Day 3 - Hip Dominant',
    'Day 4 - Upper Body'
  ];
  const exerciseDays = createDaysWorkout();
  const exerciseItems = exerciseDays.map(exerciseDay => (
    <ExerciseTable
      title={tableTitles[exerciseDay.day]}
      exerciseCategory={exerciseDay}
      chooseRandomExercise={chooseRandomExercise}
      day={exerciseDay.day}
      key={exerciseDay.day}
      id={Math.floor(Math.random() * 1000)}
    />
  ));
  return (
    <div className="row">
      <div className="col-xs-8 col-xs-offset-2">{exerciseItems}</div>
    </div>
  );
};

export default ExerciseTableList;
