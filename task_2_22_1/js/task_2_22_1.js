function Traversal() {
	this.path = [];
};

Traversal.prototype.preOrder = function(node) {
	this.path.push(node);
	if(node.firstElementChild) {
        this.preOrder(node.firstElementChild);
    }
    if(node.lastElementChild) {
        this.preOrder(node.lastElementChild);
    }
};
Traversal.prototype.inOrder = function(node) {
	if(node.firstElementChild) {
        this.inOrder(node.firstElementChild);
    }
    this.path.push(node);
	if(node.lastElementChild) {
        this.inOrder(node.lastElementChild);
    }
};
Traversal.prototype.postOrder = function(node) {
	if(node.firstElementChild) {
        this.postOrder(node.firstElementChild);
    }
    if(node.lastElementChild) {
        this.postOrder(node.lastElementChild);
    }
    this.path.push(node);
};
Traversal.prototype.startAnimation = function() {
	var i = 0;
	var path = this.path;
	path[i].style.backgroundColor = "blue";
	var timer = setInterval(function() {
		path[i].style.backgroundColor = "#FFFFFF";
		i++;
		if (i < path.length) {
			path[i].style.backgroundColor = "blue";
		}
		else {
			clearInterval(timer);
		}
	}, 1000);
};

window.onload = function() {
	var traversal = new Traversal();
	document.getElementById("preOrder").onclick = function() {
		traversal.path = [];
		traversal.preOrder(document.getElementById("tree_root"));
		traversal.startAnimation();
	};
	document.getElementById("inOrder").onclick = function() {
		traversal.path = [];
		traversal.inOrder(document.getElementById("tree_root"));
		traversal.startAnimation();
	};
	document.getElementById("postOrder").onclick = function() {
		traversal.path = [];
		traversal.postOrder(document.getElementById("tree_root"));
		traversal.startAnimation();
	};
}