import { Option } from './option';

export interface Question {
  id: number;
  question: string;
  options: Option[];
}
