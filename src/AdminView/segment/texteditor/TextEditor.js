import React, { Component } from './node_modules/react';
import CKEditor from './node_modules/@ckeditor/ckeditor5-react';
import ClassicEditor from './node_modules/@ckeditor/ckeditor5-build-classic';

class TextEditor extends Component {
  
  render() {
    return (
      <div >
        
        <CKEditor
          editor={ClassicEditor}
          data=""
          onInit={editor => {
            editor.ui.getEditableElement().parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={editor => {
            console.log('Blur.', editor);
          }}
          onFocus={editor => {
            console.log('Focus.', editor);
          }}
        />
      </div>
    );
  }
}


export default TextEditor;