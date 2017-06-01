import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

export default () => {
  return (
    <div>
      <PrivateHeader title="My Notes"/>
      <div className="page-content">
        <NoteList></NoteList>
        <Editor></Editor>
      </div>
    </div>
  );
};