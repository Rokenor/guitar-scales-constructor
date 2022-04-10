import getNoteSequence from "./getNoteSequence";
import getGuitarTuning from "./getGuitarTuning";

function getGuitarScale(startNote, mode) {
  const currentTuning = getGuitarTuning(startNote, mode);
  const resultScale = [];

  currentTuning.map(item => {
    const currentString = getNoteSequence(item).concat(getNoteSequence(item)).concat(item);
    resultScale.push([currentString]);
  })

  return resultScale;
}

export default getGuitarScale;