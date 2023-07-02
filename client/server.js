import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();

// useEffect(() => {
//   axios
//     .get("http://localhost:8080/get-path")
//     .then((response) => {
//       setFolderContents(response.data.folderContents);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, []);

app.use(cors());

const readFolderRec = (folderPath) => {
  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  const content = entries.map((entry) => {
    const filepath = path.join(folderPath, entry.name);
    const isDirectory = entry.isDirectory();
    console.log("entry", entry);

    return {
      name: entry.name,
      isDirectory,
      ...(isDirectory ? { children: readFolderRec(filepath) } : {}),
    };
  });

  return content;
};

app.get("/get-path", (req, res) => {
  const folderPathToAccess = "./src/FolderTest";

  console.log(folderPathToAccess);

  const folderContents = readFolderRec(folderPathToAccess);
  res.json({ folderContents });
});

app.listen(8080, () => {
  console.log("Server @8080");
});
