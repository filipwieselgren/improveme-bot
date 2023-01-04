export interface IPart {
  id: string;
  parts: IParts[];
}

export interface IParts {
  _id: string;
  section: string;
}
