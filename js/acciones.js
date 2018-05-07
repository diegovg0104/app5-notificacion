// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener( "deviceready", function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
		}); //cierre de beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		}); //cierre de vibrar
	},false); //cierre de deviceready
}); //cierre ready

