export interface Patient {
  name: String;
  age: Number;
  manufacturer: 'Moderna' | 'Pfyzer';
  dose: '1st' | '2nd' | 'booster';
  date: Date;
}
