export interface Session {
  id: number;
  date: string;
  duration: string;
  moodBefore: Mood;
  moodAfter: Mood;
}

enum Mood {
  Positive,
  Neutral,
  Negative
}
