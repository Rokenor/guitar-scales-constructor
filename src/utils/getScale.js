import getNoteSequence from "./getNoteSequence";

import { SCALE_TYPES } from "../constants/common";

function getScale(startNote, type, view) {
  const currentScaleSchema = SCALE_TYPES.filter(
    (schemaType) => schemaType.name === type
  );

  const resultScale = getNoteSequence(startNote).filter((note, index) => {
    if (currentScaleSchema[0].schema.includes(index)) {
      return note;
    }
    return null;
  });

  if (view && view === "text") {
    return resultScale.join(" ");
  }

  return resultScale;
}

export default getScale;
