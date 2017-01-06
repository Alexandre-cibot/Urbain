import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Photos} from "../lib/model/Photos";
import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
Template.Displayer.helpers({
	allImages: function () {
		return Photos.find();
	},
})

// TODO Remplacer les logo ---> Vert / blanc
Template.Navigation.events({
	'click .home': function(event){
		alert('Click sur home')
	},
	'click .heart': function(event){
		alert('click sur heart')
	},
	'click .star': function(event){
		alert('click sur star')
	}
})