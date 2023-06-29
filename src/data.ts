import { FilesAndFolderType } from "./App.interface";

export const filesAndFolders: FilesAndFolderType[] = [
  {
    id: 1,
    name: "folder1",
    isDirectory: true,
    items: [
      {
        id: 2,
        name: "file1",
        isDirectory: false,
      },
      {
        id: 3,
        name: "folder101",
        isDirectory: true,
        items: [
          {
            id: 8,
            name: "file2",
            isDirectory: false,
          },
          {
            id: 9,
            name: "file24",
            isDirectory: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "file3",
    isDirectory: false,
  },
  {
    id: 5,
    name: "folder2",
    isDirectory: true,
    items: [
      {
        id: 6,
        name: "file4",
        isDirectory: false,
      },
    ],
  },
  {
    id: 23,
    name: "file23",
    isDirectory: false,
  },
  {
    id: 26,
    name: "file26",
    isDirectory: false,
  },
  {
    id: 42,
    name: "file42",
    isDirectory: false,
  },
  {
    id: 12,
    name: "file12",
    isDirectory: false,
  },
  {
    id: 92,
    name: "file92",
    isDirectory: false,
  },
  {
    id: 95,
    name: "file95",
    isDirectory: false,
  },
  {
    id: 96,
    name: "file96",
    isDirectory: false,
  },
];
