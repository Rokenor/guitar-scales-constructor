import { NOTE_SEQUENCE } from "../constants/common";

function getNoteSequence(startNote) {
  let normalizedNoteSequence = NOTE_SEQUENCE.map((note) => {
    return note.name;
  });

  const startNoteIndex = normalizedNoteSequence.findIndex(
    (note) => note === startNote
  );

  const resultNoteSequence = normalizedNoteSequence
    .slice(startNoteIndex)
    .concat(normalizedNoteSequence.slice(0, startNoteIndex));

  return resultNoteSequence;
}

export default getNoteSequence;
