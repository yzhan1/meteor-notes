import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

const NoteListEmptyItem = () => {
  return (
    <p className="empty-item">Create a note to get started!</p>
  );
};

export default NoteListEmptyItem;