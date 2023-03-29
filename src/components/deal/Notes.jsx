import { EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Notes = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  //   function handleChange(state) {
  //     console.log(state);
  //   }
  return (
    <section className="p-5">
      <div>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarClassName="toolbarClassName border"
          wrapperClassName="wrapperClassName w-full"
          editorClassName="border px-3 min-h-[100px] max-w-full overflow-x-auto"
        />
        <div className="flex items-center mt-3 gap-2">
          <button className="btn-outlined">cancel</button>
          <button className="btn-filled">save</button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Notes;
