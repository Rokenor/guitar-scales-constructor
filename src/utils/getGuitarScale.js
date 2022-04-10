import getNoteSequence from "./getNoteSequence";
import {TUNING_NORMAL, TUNING_DROP} from '../constants/common';

import getGuitarTuning from "./getGuitarTuning";

function getGuitarScale(startNote, mode) {
  const currentTuning = getGuitarTuning(startNote, mode);

  console.log('currentTuning', currentTuning);

  const resultScale = [];

  return `guitar scale ${startNote} ${resultScale}`;
}

export default getGuitarScale;