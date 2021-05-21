import {Mood} from './Mood';

export interface Session {
  id: number;
  date: string;
  duration: any;
  moodBefore: Mood;
  moodAfter: Mood;
  reflection?: any;
}


