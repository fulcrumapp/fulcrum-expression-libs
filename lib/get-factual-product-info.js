function GETFACTUALPRODUCTINFO(credentials, productID, callback) {
  options = {
    url: 'https://api.factual.com/t/products-cpg-nutrition',
    json: true,
    qs: {
      KEY: credentials.key,
      include_count: 't',
      filters: {
        '$and': [
          {
            upc: {
              '$eq': productID
            }
          }
        ]
      }
    }
  };

  REQUEST(options, callback);
}
