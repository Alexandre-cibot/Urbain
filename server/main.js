import { Meteor } from 'meteor/meteor';
import {Photos} from "../lib/model/Photos";


Meteor.startup(() => {
  // code to run on server at startup
  // photos = new Mongo.Collection('photos');
  if(Photos.find().count() == 0) {
  	  for(var i = 1; i <= 33; i++) {
  		Photos.insert({"img":"images/photos/" + i + ".jpg"})
  	}
  }


});
