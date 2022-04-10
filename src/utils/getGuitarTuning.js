import getNoteSequence from "./getNoteSequence";
import {TUNING_NORMAL, TUNING_DROP} from '../constants/common';

function getGuitarTuning(startNote, mode, view) {
  if (!startNote) {
    return [];
  }

  const currentSequence = getNoteSequence(startNote);
  let resultTuning = [];

  if (mode === 'normal') {
    resultTuning = TUNING_NORMAL.map(string => {
      return currentSequence[string];
    });
  }

  if (mode === 'drop') {
    resultTuning = TUNING_DROP.map(string => {
      return currentSequence[string];
    });
  }

  if (view === 'text') {
    resultTuning = resultTuning.map((item ,index) => {
      return `${item} `
    })
  }

  return resultTuning;
}

export default getGuitarTuning;