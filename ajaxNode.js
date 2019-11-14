let searchUrl  = 'https://qa.search.its.ny.gov/fetch3000/search';
let suggestUrl = 'https://qa.search.its.ny.gov/fetch3000/suggest';

/**
 * The NodeJS Search Call function
 * @param {*} userQuery 
 * @param {*} currentUrl 
 */
function nodeSearch(userQuery, currentUrl, startCount, resultsPerPage, useKeymatchs, keymatchsPerPage, facetOptions, sortOptions) {
   //console.log("search() was called");

   let optionsData = {
      query: userQuery,
      url: currentUrl,
      start: startCount,
      pageSize: resultsPerPage,
      useKeymatch: useKeymatchs,
      numKeymatchs: keymatchsPerPage,
      facetOptionsJson: facetOptions,
      sortOptionsJson: sortOptions
   };

   return $.ajax({
      type: 'POST',
      url: searchUrl,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(optionsData),
      dataType: "json",

      success: function (response) {
         console.log("Search Success");
      },
      error: function (e) {
         console.log(e.message);
      }
   });
}


/**
 * The NodeJS Query Suggest Call function
 * @param {*} userQuery 
 * @param {*} currentUrl 
 */
function nodeSuggest(userQuery, currentUrl) {
   //console.log("suggest() was called");

   let optionsData = {
      query: userQuery,
      url: currentUrl
   };

   return $.ajax({
      type: 'POST',
      url: suggestUrl,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(optionsData),
      dataType: "json",

      success: function (response) {
         console.log("Suggest Success");
      },
      error: function (e) {
         console.log(e.message);
      }
   });
}
