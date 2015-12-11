var credentials = {
  key: '',
  secret: ''
};

ON('change', 'barcode', function (event) {
  GETFACTUALPRODUCTINFO($barcode, function (error, response) {
    if (!error) {
      SETVALUE('product_info', response.body.product_name);
    }
  });
});
