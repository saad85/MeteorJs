import {Mongo } from 'meteor/mongo';
import {Meteor } from 'meteor/meteor';
import { Check } from 'meteor/check';

export const Notes = new Mongo.Collection('notes');


Meteor.methods({
    'notes.insert'(text){
        
        if(!Meteor.userId()){
            throw new Meteor.Error('not authorized')
        }

        Notes.insert({
            text:text,
            createdAt:new Date(),
            owner:Meteor.userId(),
            username:Meteor.user().username,
      
          });
    },
    'notes.remove'(note){
        Notes.remove(note._id);
    }
})