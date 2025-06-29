var customerName = 'bob';

function upperCaseCustomerName() {
     customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  // This will throw an error when called
  leastFavoriteCustomer = 'new value';
}