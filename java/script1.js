const jerome = new myself("jerome", "velasquez", 20, "ICS2609");
function myself(firstname, lastname, age, subject){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.subject =  subject;


}



function introduce(){
console.log( "hello, I am " + jerome.firstname + jerome.lastname)

}

function enrolled(){
    console.log( "I am enrolled in " + jerome.subject)
}

