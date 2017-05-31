import React from 'react';
import expect from 'expect';
import {Meteor} from 'meteor/meteor';
import {mount} from 'enzyme';

import {notes} from '../fixtures/fixtures.js';
import {NoteList} from './NoteList';

if(Meteor.isClient){
  describe('NoteList', function(){

    it('should render NoteListItem for each note', function(){
      const wrapper = mount(<NoteList notes={notes}></NoteList>);

      expect(wrapper.find('NoteListItem').length).toBe(2);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(0);
    });

    it('should render NoteListEmptyItem if zero notes', function(){
      const wrapper = mount(<NoteList notes={[]}></NoteList>);

      expect(wrapper.find('NoteListItem').length).toBe(0);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(1);
    });

  });
}