import {IEventEmitter} from "./IEventEmitter"
import {FileTree} from "./FileTree"
import {FileDetails} from "./FileDetails"
import {FileContent} from "./FileContent"
import {FileSelectedEvent} from "./FileSelectedEvent"

export class WorkspaceService {
  constructor(
    private _eventEmitter: IEventEmitter,
    private _fileTree: FileTree,
    private _fileContent: FileContent,
    private _fileDetails: FileDetails,
  ) {
  }

  init() {
    this._eventEmitter.on(FileSelectedEvent, (event) => {
      this._fileContent.file = event.file
      this._fileDetails.file = event.file
    })
  }
}
