// Context menu registrations
const contextMenu = [
	{
		id: 'contextMenu',
		title: 'Search Site',
		contexts: ['selection']
	},

	{
		id: 'searchGoogle',
		title: 'Search Google',
		contexts: ['selection'],
		parentId: 'contextMenu'
	},

	{
		id: 'searchBing',
		title: 'Search Bing',
		contexts: ['selection'],
		parentId: 'contextMenu'
	},

	{
		id: 'searchYouTube',
		title: 'Search YouTube',
		contexts: ['selection'],
		parentId: 'contextMenu'
	}
];

// Add all context menus
contextMenu.forEach(menuItem => chrome.contextMenus.create(menuItem));

// Context menu on click event handler
chrome.contextMenus.onClicked.addListener(clickQuery => {
	if (!clickQuery.selectionText) return;

	const tabCreator = (qURL, query) => {
		chrome.tabs.create({url: `${qURL}${encodeURIComponent(query)}`});
	};

	switch (clickQuery.menuItemId) {
		case 'searchGoogle':
			tabCreator('https://www.google.com/search?q=', clickQuery.selectionText);
			break;
		case 'searchBing':
			tabCreator('https://www.bing.com/search?q=', clickQuery.selectionText);
			break;
		case 'searchYouTube':
			tabCreator('https://www.youtube.com/results?search_query=', clickQuery.selectionText);
			break;
	}
});
