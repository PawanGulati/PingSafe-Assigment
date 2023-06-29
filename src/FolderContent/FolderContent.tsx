import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { FilesAndFolderStateType } from "../App.interface";
import styles from "./FolderContent.module.css";
import { orange, pink } from "@mui/material/colors";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const FolderContent: React.FC<{
  folderContent: FilesAndFolderStateType[];
  level: number;
  handleChecked: (content: FilesAndFolderStateType, checked: boolean) => void;
}> = ({ folderContent, level, handleChecked }) => {
  return (
    <Stack direction="row">
      <Box
        sx={{ border: "1px solid gold", width: "1rem", height: "fit-content" }}
      />
      <Box
        sx={{
          paddingLeft: `${level * 5}px`,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {folderContent.map((content) => {
          return content.isDirectory ? (
            <>
              <FormControlLabel
                label={
                  <Stack
                    display="flex"
                    alignItems="center"
                    direction="row"
                    gap={1}
                  >
                    <FolderOutlinedIcon sx={{ color: "gold" }} />
                    <Typography variant="h6">{content.name}</Typography>
                  </Stack>
                }
                control={
                  <Checkbox
                    checked={content.checked}
                    indeterminate={content.indeterminate}
                    onChange={(e) => handleChecked(content, e.target.checked)}
                    size="small"
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: orange[500],
                      },
                      "&.MuiCheckbox-indeterminate": {
                        color: pink[500],
                      },
                    }}
                  />
                }
              />
              <Box
                sx={{
                  border: "1px solid gold",
                  height: "1rem",
                  width: "fit-content",
                }}
              />
              <FolderContent
                folderContent={content.items || []}
                level={level + 1}
                handleChecked={handleChecked}
              />
            </>
          ) : (
            <FormControlLabel
              label={
                <Stack
                  display="flex"
                  alignItems="center"
                  direction="row"
                  gap={1}
                >
                  <DescriptionOutlinedIcon sx={{ color: "blueviolet" }} />
                  <Typography variant="h6">{content.name}</Typography>
                </Stack>
              }
              control={
                <Checkbox
                  checked={content.checked}
                  indeterminate={content.indeterminate}
                  onChange={(e) => handleChecked(content, e.target.checked)}
                  size="small"
                  className={styles.checkbox}
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: orange[500],
                    },
                    "&.MuiCheckbox-indeterminate": {
                      color: pink[500],
                    },
                  }}
                />
              }
            />
          );
        })}
      </Box>
    </Stack>
  );
};
