import {Mood} from './Mood';

export interface Session {
  id: number;
  date: string;
  duration: string;
  moodBefore: Mood;
  moodAfter: Mood;
}


