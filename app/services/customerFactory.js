App.factory('CustomerFactory', function () {
  var factory = {};
  var customers = [
    { name : 'Steve Jobs', city : 'San Francisco' },
    { name : 'Bill Gates', city : 'Medina' },
    { name : 'Mark Zuckerberg', city : 'Palo Alto' },
    { name : 'Atish Shinde', city : 'Rochester' },
  ];

  factory.getCustomers = function () {
    return customers;
  }
  return factory;
});