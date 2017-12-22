var mwsApiExtended = require("mws-api-extended")
var lodash = require("lodash");
var fast = require("fast-json-stable-stringify")
const mws = new mwsApiExtended({
 accessKeyId: 'AKIAJ2QXO7NA4FHVOJZA',
  secretAccessKey: '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',
  merchantId: 'A3K0CIUJGFCGK3',
  meta: {
    retry: true, // retry requests when throttled
    next: true, // auto-paginate
    limit: Infinity // only get this number of items (NOT the same as MaxRequestsPerPage)
  }
 });
 
 mws.Orders.ListOrders({
  MarketplaceId: 'A21TJRUUN4KGV',
  MaxResultsPerPage: 100,
  CreatedAfter: new Date(12,1,2015),
})
.then(({ result, metadata }) => {
  // result
  console.log(result,metadata)
});