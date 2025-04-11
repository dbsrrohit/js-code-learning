// Singleton objects

// const tinderUser = new Object() this is a singleton object
const tinderUser = {} /*this is litral object */


tinderUser.id = "1235TMK"
tinderUser.name = "Rohit"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "rohit@dbsrtravels.com",
    fullname: {
        userFullname: {
            firstName: "rohit",
            LastName: "Prabhakar"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}
const obj3 ={5:"e", 6:"f"}


// const obj4 = {obj1,obj2} /* this will reasukt in { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } */

// const obj4 = Object.assign({},obj1,obj2,obj3) this will reasult in { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj4 = {...obj1,...obj2,...obj3} /* { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } */

// console.log(obj4);

const course = {
    courseName: "JS in Hindi",
    price: "£999",
    courseInstructor: "Rohit"
}

// course.courseInstructor

const {courseInstructor: CI} = course /* object destructure */

// console.log(courseInstructor)
console.log(CI);

// ++++++++++++++++++++++ API +++++++++ JSON +++++++++

// {
//     "name": "rohit",
//     "Coursename": "js In hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}

]
