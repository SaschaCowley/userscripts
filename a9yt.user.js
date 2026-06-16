// ==UserScript==
// @name A9YouTube
// @namespace https://ssch.cc/UserScripts
// @description Fix stupid accessibility issues on YouTube
// @version 1.0
// @match *://youtube.com/*
// @match *://www.youtube.com/*
// ==/UserScript==

function fixVideoCardHeadings(el) {
	if (el instanceof Element) {
		if (el.tagName === "H3" && el.hasAttribute("aria-label")) el.removeAttribute("aria-label");
		else el.querySelectorAll("h3[aria-label]").forEach(el => el.removeAttribute("aria-label"));
	}
}

fixVideoCardHeadings(document.body);

new MutationObserver((records, observer) => {
	records.forEach(record => record.addedNodes.forEach(fixVideoCardHeadings));
}).observe(document.body, {childList: true, subtree: true});
