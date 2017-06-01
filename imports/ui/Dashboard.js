import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

export default () => {
  return (
    <div>
      <PrivateHeader title="MeteorNote"/>
      <div className="page-content">
        <div className="page-content__sidebar">
          <NoteList></NoteList>
        </div>
        <div className="page-content__main">
          <Editor></Editor>
        </div>
      </div>
    </div>
  );
};