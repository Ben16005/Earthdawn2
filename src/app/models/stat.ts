export class Stat {
  name: string;
  base: number;
  circleMod: number;
  baseMod: number;
  stepMod: number;
  description ? = '';

  constructor(name: string, base: number) {
    this.name = name;
    this.base = base;
  }
}
