var app = angular.module("app01", []);

app.controller("controller1",function(){
	this.FirstName = "";
	this.EmailID = "";
	this.PhoneNo = "";

	this.SubmitForm = function(){
		alert(this.FirstName + " " + this.EmailID + " " + this.PhoneNo);
	}
});