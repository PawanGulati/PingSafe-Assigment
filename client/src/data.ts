import { FilesAndFolderType } from "./App.interface";

export const filesAndFolders: FilesAndFolderType[] = [
  {
    id: 1,
    name: "public",
    isDirectory: true,
    items: [
      {
        id: 2,
        name: "index.ts",
        isDirectory: false,
      },
      {
        id: 3,
        name: "assets",
        isDirectory: true,
        items: [
          {
            id: 4,
            name: "image1.jpeg",
            isDirectory: false,
          },
          {
            id: 5,
            name: "image2.jpeg",
            isDirectory: false,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "src",
    isDirectory: true,
    items: [
      {
        id: 7,
        name: "index.tsx",
        isDirectory: false,
      },
      {
        id: 8,
        name: "index.css",
        isDirectory: false,
      },
      {
        id: 9,
        name: "App.tsx",
        isDirectory: false,
      },
      {
        id: 10,
        name: "App.css",
        isDirectory: false,
      },
      {
        id: 13,
        name: "components",
        isDirectory: true,
        items: [
          {
            id: 13,
            name: "component1",
            isDirectory: true,
            items: [
              {
                id: 15,
                name: "component1.tsx",
                isDirectory: false,
              },
            ],
          },
          {
            id: 16,
            name: "index.tsx",
            isDirectory: false,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: ".gitignore",
    isDirectory: false,
  },
  {
    id: 12,
    name: "package.json",
    isDirectory: false,
  },
];
