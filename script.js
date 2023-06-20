//your JS code here. If required.
function remove(){
	const parent = document.getElementById("colorSelect")
	let curr= parent.value
	let children= parent.children
	console.log(children[0])
	for(let i=0;i<children.length;i++){
		if(children[i].innerText===curr){
			children[i].remove()
		}
	}
}