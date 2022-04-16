export const NOTE_SEQUENCE = [
  {
    id: "C",
    name: "C"
  },
  {
    id: "C#",
    name: "C#"
  },
  {
    id: "D",
    name: "D"
  },
  {
    id: "D#",
    name: "D#"
  },
  {
    id: "E",
    name: "E"
  },
  {
    id: "F",
    name: "F"
  },
  {
    id: "F#",
    name: "F#"
  },
  {
    id: "G",
    name: "G"
  },
  {
    id: "G#",
    name: "G#"
  },
  {
    id: "A",
    name: "A"
  },
  {
    id: "A#",
    name: "A#"
  },
  {
    id: "B",
    name: "B"
  }
];
export const TUNING_MODE = [
  {
    id: "normal",
    name: "normal"
  },
  {
    id: "drop",
    name: "drop"
  }
];
export const TUNING_NORMAL = [0, 7, 3, 10, 5, 0];
export const TUNING_DROP = [2, 9, 5, 0, 7, 0];
export const GUITAR_FRETS = [
  "",
  "",
  "",
  "",
  "",
  "•",
  "",
  "•",
  "",
  "•",
  "",
  "",
  "••",
  "",
  "",
  "•",
  "",
  "•",
  "",
  "•",
  "",
  "•",
  "",
  "",
  "••"
];
export const SCALE_TYPES = [
  {
    id: "major",
    name: "major",
    schema: [0, 2, 4, 5, 7, 9, 11]
  },
  {
    id: "natural_minor",
    name: "natural minor",
    schema: [0, 2, 3, 5, 7, 8, 10]
  },
  {
    id: "harmonic_minor",
    name: "harmonic minor",
    schema: [0, 2, 3, 5, 7, 8, 11]
  },
  {
    id: "melodic_minor",
    name: "melodic minor",
    schema: [0, 2, 3, 5, 7, 9, 11]
  },
  {
    id: "major_pentatonic",
    name: "major pentatonic",
    schema: [0, 2, 4, 7, 9]
  },
  {
    id: "minor_pentatonic",
    name: "minor pentatonic",
    schema: [0, 3, 5, 7, 10]
  },
  {
    id: "blues",
    name: "blues",
    schema: [0, 3, 5, 6, 7, 10]
  },
  {
    id: "minor_blues",
    name: "minor blues",
    schema: [0, 2, 3, 5, 6, 7, 8, 10]
  },
  {
    id: "major_blues",
    name: "major blues",
    schema: [0, 2, 3, 4, 5, 6, 7, 9, 10]
  },
  {
    id: "augmented",
    name: "augmented",
    schema: [0, 2, 4, 6, 8, 10]
  },
  {
    id: "diminished",
    name: "diminished",
    schema: [0, 2, 3, 5, 6, 8, 9, 11]
  }
];
