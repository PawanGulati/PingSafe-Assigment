import styles from "./FolderPaths.module.css";
import { Typography } from "@mui/material";

interface IFolderPathsProps {
  pathForFiles: string[];
}

const FolderPaths: React.FC<IFolderPathsProps> = ({ pathForFiles }) => {
  return (
    <div className={styles.submitContainer}>
      {pathForFiles.map((path) => (
        <Typography variant="h6">{path}</Typography>
      ))}
    </div>
  );
};

export default FolderPaths;
