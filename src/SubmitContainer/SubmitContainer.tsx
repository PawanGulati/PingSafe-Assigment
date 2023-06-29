import { Box, Button } from "@mui/material";
import { FilesAndFolderStateType } from "../App.interface";
import FolderPaths from "../FolderPaths/FolderPaths";
import { useState } from "react";

import styles from "./SubmitContainer.module.css";

interface ISubmitContainersProps {
  paths: FilesAndFolderStateType[];
  handleResetState: () => void;
}

const SubmitContainer: React.FC<ISubmitContainersProps> = ({
  paths,
  handleResetState,
}) => {
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

  const handleReset = () => {
    handleResetState();

    setPathForFiles([]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        flex: 1,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignSelf: "center" }}>
        <Button
          variant="contained"
          size="large"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          size="large"
          className={styles.resetButton}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
      <FolderPaths pathForFiles={pathForFiles} />
    </Box>
  );
};

export default SubmitContainer;
