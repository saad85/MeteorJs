import { Template } from 'meteor/templating';

import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields:'USERNAME_ONLY'


});


import './main.html';
 
import { Notes } from '../lib/collection.js'
 
Template.body.helpers({
  /*
  notes:[{ text:'my note 1'},
  {text:'my note 2'},
  {text:'my note 3'}] */

  notes() {
    return Notes.find({});
  }
});

Template.add.events({
  'submit .add-form' :function(){
    event.preventDefault();
    var target =event.target;
    var text =target.text.value;
    console.log(text);

    /**Notes.insert({
      text:text,
      createdAt:new Date(),
      owner:Meteor.userId(),
      username:Meteor.user().username,

    });**/
Meteor.call('notes.insert',text);
    target.text.value='';

    return false;

  }
  
});

Template.note.events({
  'click .delete-note':function() {
   Meteor.call('notes.remove',this);
    console.log('qwer');
  },
})


