const ADJECTIVES = [
  "swift",
  "bright",
  "cosmic",
  "gentle",
  "bold",
  "quiet",
  "lucky",
  "golden",
  "silver",
  "crimson",
  "azure",
  "mystic",
  "sunny",
  "frosty",
  "wild",
];

const NOUNS = [
  "falcon",
  "river",
  "nebula",
  "meadow",
  "spark",
  "horizon",
  "comet",
  "forest",
  "harbor",
  "summit",
  "canyon",
  "aurora",
  "island",
  "garden",
  "voyage",
];

export function generateRandomRoomName() {
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];

  return `${adjective}-${noun}`;
}
