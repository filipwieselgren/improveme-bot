export interface IBugReport {
  description: string;
  background: string;
  part: string;
  reproduce: string;
  files: IFile[];
  email: string;
  approved: Boolean;
  status: string;
  assignedTo: string;
}

// export interface IFiles {
//   lastModified: number;
//   lastModifiedDate: string;
//   name: string;
//   size: number;
//   type: string;
//   webkitRelativePath: string;
// }

export interface IFile {
  file: string;
}
