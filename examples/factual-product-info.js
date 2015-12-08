var credentials = {
  key: 'API_KEY'
};

ON('change', 'barcode', function(event) {
  GETFACTUALPRODUCTINFO(credentials, $barcode, function(err, result) {
    SETVALUE('product_info', result);
  });
});

