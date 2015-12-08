var credentials = {
  secret: 'AMAZON_SECRET',
  accessKey: 'AMAZON_ACCESS_KEY',
  associateTag: 'AMAZON_ASSOCIATE_TAG'
};

ON('change', 'barcode', function(event) {
  GETAMAZONPRODUCTINFO(credentials, $barcode, function(err, result) {
    var item = result.ItemLookupResponse.Items[0].Item;
    var attrs = item[0].ItemAttributes[0];

    var parts = [];

    if (attrs.Title) parts.push(attrs.Title);
    if (attrs.ListPrice) parts.push(attrs.ListPrice[0].FormattedPrice);
    if (attrs.Model) parts.push(attrs.Model);
    if (attrs.Feature) parts.push(attrs.Feature.join('\n\n'));

    SETVALUE('product_info', parts.join("\n\n"));
  });
});
