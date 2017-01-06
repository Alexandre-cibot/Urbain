import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Photos} from "../lib/model/Photos";
import './main.html';

Template.Displayer.helpers({
	allImages: function () {
		return Photos.find();
	},
})

// TODO Remplacer les logo ---> Vert / blanc
Template.Navigation.events({
	'click .home': function(event){
		//Session.set("currentPage", "Displayer");
		 alert('Click sur home')
	},
	'click .heart': function(event){
		//Session.set("currentPage", "Displayer");
		alert('click sur heart')
	},
	'click .star': function(event){
		alert('click sur star')
	}
})