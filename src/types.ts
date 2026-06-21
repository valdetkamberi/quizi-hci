export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  tip: string;
}
