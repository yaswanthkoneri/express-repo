var mwsApiExtended = require("mws-api-extended")
var lodash = require("lodash");
var fast = require("fast-json-stable-stringify")
const mws = new mwsApiExtended({
 accessKeyId: '',
  secretAccessKey: '',
  merchantId: '',
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