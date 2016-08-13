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

    v = v.replace(/DonaldJTrump/gi, "TheFaker").replace(/realDonaldTrump/gi, "realFaker").replace(/Donald Trump/gi, "Faker").replace(/Donald J. Trump/gi, "The Faker").replace(/Trump/g, "Faker").replace(/Donald/g, "The Faker");

	textNode.nodeValue = v;
}

walk(document.body);

new MutationObserver(function () {
	walk(document.body);
}).observe(document.body, {
	childList: true
});
