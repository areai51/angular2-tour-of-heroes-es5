
	var MyApp= ng
	.Component({
		selector:'my-app',
		
	})
	    .View({
        directives: [Dashboard],
       templateUrl:'src/app.component.html'        
    })
	.Class({
		constructor:function(){}
	});
	document.addEventListener('DOMContentLoaded',function(){
		ng.bootstrap(MyApp);
	});



