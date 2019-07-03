import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class TextEditor extends Component {
  render() {
    return (
      <div style={{'height':'25em'}}>
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