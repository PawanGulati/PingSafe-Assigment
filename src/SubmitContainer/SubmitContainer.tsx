import { Box, Button } from "@mui/material";
import { FilesAndFolderStateType } from "../App.interface";
import FolderPaths from "../FolderPaths/FolderPaths";
import { useState } from "react";

import styles from "./SubmitContainer.module.css";

interface ISubmitContainersProps {
  paths: FilesAndFolderStateType[];
}

const SubmitContainer: React.FC<ISubmitContainersProps> = ({ paths }) => {
  const [pathForFiles, setPathForFiles] = useState<string[]>([]);

  const handleSubmit = () => {
    let filePaths: string[] = [];

    const findFilePathRec = (
      item: FilesAndFolderStateType,
      filePath: string
    ) => {
      if (!item.isDirectory && item.checked)
        filePaths.push(filePath + "/" + item.name);
      else {
        item.items?.forEach((it) =>
          findFilePathRec(it, filePath + "/" + item.name)
        );
      }
    };

    paths.forEach((path) => findFilePathRec(path, ""));

    setPathForFiles(filePaths);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Button
        variant="contained"
        size="large"
        className={styles.submitButton}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <FolderPaths pathForFiles={pathForFiles} />
    </Box>
  );
};

export default SubmitContainer;
