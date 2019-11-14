/**
 * Self-invoking function for redirects file:///Users/timothycrommie/Desktop/googlesearch/json.html?doSearch=true&useUrl=true
 */
(function () {
	let currentUrl = "http://localhost/nysits/?as_sitesearch=labor.ny.gov&btnG=Search&client=default_frontend&site=default_collection&q=state of&numgm=5";
	let query = "office of";
	let facetOptions = []; // Please see below at bottom of file for working example
	let sortOptions = {}; // Currently Dissabled in NodeJS until a sortable date field is chosen
	let startCount = 0;
	let resultsPerPage = 10;
	let useKeymatchs = true;
	let keymatchsPerPage = 3;


	// The NodeJS Query Call
	nodeSearch(query, currentUrl, startCount, resultsPerPage, useKeymatchs, keymatchsPerPage, facetOptions, sortOptions).done(function (response) {
		processJsonResponse(response);
	});

})();



/**
 * Process JSON response
 * @param {*} response 
 */
function processJsonResponse(response) {
	if (response !== undefined && response !== null) {

		//============== USE THE RAW JSON FOR YOUR UI HERE ==============

		let jsonQueryResult = JSON.stringify(response, null, 3);

		//===============================================================


		// *** THIS IS FOR DEMO DISPLAY ONLY ***
		var blob = new Blob([jsonQueryResult], {
			type: 'application/json'
		});
		var url = URL.createObjectURL(blob, {
			oneTimeOnly: true
		});
		window.location.href = url;

		// Google Chrome has removed support for top-frame navigation, you can see more informations
		// here: https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/GbVcuwg_QjM
		// var myWindow = window.open("data:text/json," + encodeURIComponent(jsonQueryResult), "_self");
		// myWindow.focus();
	}
}



/**
 * Get the URL parameters
 */
function getUrlVars(currentUrl) {
	let vars = {};
	let parts = currentUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
}


/**
 * Get a single URL parameter
 * @param {*} parameter 
 * @param {*} defaultvalue 
 */
function getUrlParam(parameter, defaultvalue, currentUrl) {
	let urlparameter = defaultvalue;
	if (currentUrl.indexOf(parameter) > -1) {
		urlparameter = getUrlVars(currentUrl)[parameter];
	}
	return urlparameter;
}


/*  Working example

let facetOptions = [
   {
      sourceName: dataSourceId,
      operatorName: 'category'
   },
   {
      sourceName: dataSourceId,
      operatorName: 'keywords'
   },
   {
      sourceName: dataSourceId,
      operatorName: 'domain'
   },
   {
      sourceName: dataSourceId,
      operatorName: 'filetypes'
   }
];

// Currently dissabled until a sortable date field is chosen
let sortOptions = {
   "operatorName": "updateTime",
   "sortOrder": "DESCENDING"
}

*/
