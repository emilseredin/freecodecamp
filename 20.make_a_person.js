var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = "";
    let lastName = "";
  
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.setFullName = function(firstAndLast) {
      let name = firstAndLast.split(" ");
      firstName = name[0];
      lastName = name[1];
    };
  
    this.setFirstName = function(first) {
      firstName = first;
    };
  
    this.setLastName = function(last) {
      lastName = last;
    };
  
    this.setFullName(firstAndLast);
  
  
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  