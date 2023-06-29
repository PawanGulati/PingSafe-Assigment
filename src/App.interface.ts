export type FilesAndFolderType = {
  id: number;
  name: string;
  isDirectory: boolean;
  items?: FilesAndFolderType[];
};

export type FilesAndFolderStateType =
  | Omit<FilesAndFolderType, "items"> & {
      checked: boolean;
      indeterminate: boolean;
      items?: FilesAndFolderStateType[];
    };
