import { useState } from "react";
import "./App.css";
import { FilesAndFolderStateType, FilesAndFolderType } from "./App.interface";
import { filesAndFolders } from "./data";
import { FolderContent } from "./FolderContent/FolderContent";
import { Typography } from "@mui/material";
import SubmitContainer from "./SubmitContainer/SubmitContainer";

function App() {
  function getFilesAndFolderContent(
    contentArr: FilesAndFolderType[]
  ): FilesAndFolderStateType[] {
    return contentArr.map((content) => {
      return {
        ...content,
        checked: false,
        indeterminate: false,
        items: [
          ...(content.items ? getFilesAndFolderContent(content.items) : []),
        ],
      };
    });
  }

  const [folderContent, setFolderContents] = useState<
    FilesAndFolderStateType[]
  >(getFilesAndFolderContent(filesAndFolders));

  const handleChecked = (
    content: FilesAndFolderStateType,
    checked: boolean
  ) => {
    const _handleAllCheck = (
      content: FilesAndFolderStateType,
      checked: boolean
    ) => {
      content.checked = checked;
      if (content.isDirectory) {
        content.items?.forEach((item) => {
          _handleAllCheck(item, checked);
        });
      }
    };

    const _handleChecked = (
      contents: FilesAndFolderStateType[],
      content: FilesAndFolderStateType,
      checked: boolean
    ): any => {
      return contents.map((item) => {
        if (item.id === content.id) {
          item.checked = checked;
          item.indeterminate = false;

          if (item.isDirectory) {
            item.items?.forEach((it) => _handleAllCheck(it, checked));
          }
        } else if (item.isDirectory) {
          const allCheckedInDir = _handleChecked(
            item.items || [],
            content,
            checked
          );

          const allCheckedInDirLength = allCheckedInDir.filter(Boolean).length;

          if (allCheckedInDirLength === item.items?.length) item.checked = true;
          else item.checked = false;

          if (
            allCheckedInDirLength > 0 &&
            allCheckedInDirLength !== item.items?.length
          )
            item.indeterminate = true;
          else item.indeterminate = false;
        }

        return item.checked;
      });
    };

    const copyFolderContent = JSON.parse(JSON.stringify(folderContent));

    _handleChecked(copyFolderContent, content, checked);

    setFolderContents(copyFolderContent);
  };

  const handleResetState = () => {
    setFolderContents(getFilesAndFolderContent(filesAndFolders));
  };

  return (
    <div className="main-container">
      <Typography className="heading" variant="h4">
        Folder Path Generator
      </Typography>
      <Typography variant="h5" color="white" fontWeight={700} textAlign="left">
        Directory Tree
      </Typography>
      <div className="folder-container">
        <FolderContent
          folderContent={folderContent}
          level={1}
          handleChecked={handleChecked}
        />
      </div>
      <SubmitContainer
        paths={folderContent}
        handleResetState={handleResetState}
      />
    </div>
  );
}

export default App;
