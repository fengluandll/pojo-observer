import * as React from 'react';
import useObserver from '../useObserver'
import {IFileContent} from '../root'

const FileContent: React.FC<IFileContent> = (props) => {
  const {fileContent} = props
  useObserver(fileContent)
  return (
    <div className={"file-content"}>
      <h1>File Content</h1>
      <p>{fileContent.content}</p>
    </div>
  )
}

export default FileContent
