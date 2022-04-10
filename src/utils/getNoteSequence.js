import {NOTE_SEQUENCE} from '../constants/common';

function getNoteSequence(startNote) {
  const startNoteIndex = NOTE_SEQUENCE.findIndex(note => note === startNote);
  const resultNoteSequence = NOTE_SEQUENCE.slice(startNoteIndex).concat(NOTE_SEQUENCE.slice(0, startNoteIndex));

  return resultNoteSequence;
}

export default getNoteSequence;