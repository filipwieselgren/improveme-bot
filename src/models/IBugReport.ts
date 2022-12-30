export interface IBugReport {
  description: string;
  background: string;
  part: string;
  reproduce: string;
  files: File | undefined;
  email: string;
}

// export interface IFiles {
//   lastModified: number;
//   lastModifiedDate: string;
//   name: string;
//   size: number;
//   type: string;
//   webkitRelativePath: string;
// }

export class Files {
  file: FileList | null;
  constructor(file: FileList | null) {
    this.file = file;
  }
}
