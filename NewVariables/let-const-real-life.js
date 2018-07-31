// All the var variables are leaked to the global scope of window unless you put them in IFFE ((){}())
// All const, let variables are leaked to the global scope of window unless you put them in block {}

(function(){
    var name = 'abdul';
    console.log(name);
}());


{
    let name = 'abdul';
}


// For loop working
for (var i = 0; i < 10; i++) {
    setTimeout( ()=> {
			console.log(i);
    }, 1000);
} // Each time 10 is printed


for (let i = 0; i < 10; i++) {
	setTimeout( ()=> {
		console.log(i);
	}, 1000);
} // Each time i is printed
