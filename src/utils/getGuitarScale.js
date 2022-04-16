import getNoteSequence from "./getNoteSequence";
import getGuitarTuning from "./getGuitarTuning";
import getScale from "./getScale";

function getGuitarScale(startNote, type, mode) {
  const currentTuning = getGuitarTuning(startNote, mode);
  const currentScale = getScale(startNote, type);

  const resultScale = currentTuning.reduce((result, item, index) => {
    const currentSequence = getNoteSequence(item)
      .concat(getNoteSequence(item))
      .concat(item);

    const resultSequence = currentSequence.map((note, innerIndex) => {
      let noteType = "";

      // x coord types
      switch (index) {
        case 0:
          noteType = "higher";
          break;
        case 2:
        case 3:
          noteType = "dotted";
          break;
        case 5:
          noteType = "lower";
          break;
        default:
          noteType = "default";
      }

      // y coord types
      switch (innerIndex) {
        case 0:
          noteType += "_start";
          break;
        case 5:
        case 7:
        case 9:
        case 15:
        case 17:
        case 19:
        case 21:
          noteType += "_single";
          break;
        case 12:
        case 24:
          noteType += "_double";
          break;
        default:
          noteType += "_default";
      }

      switch (`${index}${innerIndex}`) {
        case "25":
        case "27":
        case "29":
        case "212":
        case "215":
        case "217":
        case "219":
        case "221":
        case "224":
          noteType += "top";
          break;
        case "312":
        case "324":
          noteType += "bottom";
          break;

        default:
          noteType += "";
      }

      if (currentScale.includes(note)) {
        return {
          id: `${index}${innerIndex}`,
          coord: {
            x: innerIndex,
            y: index
          },
          value: note,
          type: noteType
        };
      } else {
        return {
          id: `${index}${innerIndex}`,
          coord: {
            x: innerIndex,
            y: index
          },
          value: " ",
          type: noteType
        };
      }
    });

    return result.concat([resultSequence]);
  }, []);

  return resultScale;
}

export default getGuitarScale;
