import styles from "./FolderPaths.module.css";
import { Box, Typography } from "@mui/material";

interface IFolderPathsProps {
  pathForFiles: string[];
}

const FolderPaths: React.FC<IFolderPathsProps> = ({ pathForFiles }) => {
  return (
    <div className={styles.submitContainer}>
      <Typography variant="h5" color="black" fontSize="25px" fontWeight={700}>
        Selected Files:
      </Typography>
      <Box sx={{ flex: 1, overflow: "auto" }}>
        {pathForFiles.map((path) => (
          <Typography variant="h6">{path}</Typography>
        ))}
      </Box>
    </div>
  );
};

export default FolderPaths;
