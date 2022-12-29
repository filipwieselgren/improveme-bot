export interface IBugReport {
  description: string;
  background: string;
  part: string;
  reproduce: string;
  files: IFiles[];
  email: string;
}

export interface IFiles {
  lastModified: number;
  lastModifiedDate: string;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
