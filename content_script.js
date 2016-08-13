function walk(node) {
	var child, next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

    v = v.replace(/@realDonaldTrump/g, "@realFaker").replace(/\bDonald Trumps\b/g, "Fakers").replace(/\bDonald J. Trump\b/g, "The Faker").replace(/\bDonald Trump\b/g, "The Faker").replace(/\bTrump\b/g, "Faker").replace(/\bDonald\b/g, "The Faker");

	textNode.nodeValue = v;
}

walk(document.body);

new MutationObserver(function () {
	walk(document.body);
}).observe(document.body, {
	childList: true
});
