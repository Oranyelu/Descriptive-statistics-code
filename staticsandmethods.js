
class User {
    static staticMethod() {
      alert(this === User);
    }
  }
  User.staticMethod(); // true

  
  class Article {
    static publisher = "Ilya Kantor";
  }
  alert(Article.publisher); // Ilya Kantor


  
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  

  //accessing a method 
  let name = person.fullName();


  //adding a method to an object
  person.name = function () {
    return this.firstName + " " + this.lastName;
  };
