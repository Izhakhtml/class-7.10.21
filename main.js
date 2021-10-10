/////////////////////// exe 1
// class Car {
// }
/////////////////////// exe 2
// class Dog{
//     name;
//     age;
//     type;
// }
/////////////////////// exe 3
// class Cat{
//      name;
//      age;
//      type;
//     constructor(first,age,type){
//         this.name = first
//         this.age = age
//         this.type = type
//     }
// }
/////////////////////// exe 4
// class Student{
//     name;
//     age;
//     heigth;
//     constructor(name,age,heigth){
//          this.name = name
//          this.age = age
//          this.heigth = heigth
//     }
// }
/////////////////////// exe 5
// const student1 = new Student("izhak",56,180)
// const student2 = new Student("shay",34,190)
/////////////////////// exe 6
// class Worker{
//     name;
//     lastName;
//     birth;
//     tel;
//     constructor(name,last,birth,tel){
//        this.name = name
//        this.lastName = last
//        this.birth = birth
//        this.tel = tel
//     }
// }
// const worker1 = new Worker("iiii","jjjj",1999,054)
// const worker2 = new Worker("oooooo","llll",2000,054)
// const worker3 = new Worker("pppp","ttttt",2008,7898)
// console.log(worker1,worker2,worker3);
//////////////////////////////////////////////////// exe 7
// class User{
//     name;
//     lastName;
//     age;
//     constructor(first,last,age){
//         this.name = first
//         this.lastName = last
//         this.age = age
//     }
//     print(){
//      return  console.log(this.name);
//     }
// }
// let  user1;
//////////////////////////////////////////////////// exe 8
// btn.onclick = ()=>{
// user1 = new User(input1.value,input2.value,input3.value)     
// ....................... to log
//   console.log(user1);
// ....................... to page
//   container.innerHTML =`<b>First name:</b>${input1.value}<br><b>Last name:</b>${input2.value}<br><b>Age:</b>${input3.value}<br>`
// ....................... to table
//   if (user1.name == "" || user1.lastName=="" || user1.age == "") {
//       return false
//   }else{
//   container.innerHTML += 
//   `<table>
//         <tr>
//             <th>First name</th><br>
//             <th>Last name</th>
//             <th>Age</th>
//         </tr>
//         <tr>
//             <td>${user1.name}</td>
//             <td>${user1.lastName}</td>
//             <td>${user1.age}</td>
//         </tr>
//   </table>
//   `
// }
// ....................... to create button
//   container.innerHTML += `<button onclick="eventClick(id = "btn2" >${user1.name}</button>`
//   input1.value = ""
//   input2.value = ""
//   input3.value = ""
// }
// function eventClick() {
//     for (const userItem in user1) {
//         console.log(`${userItem}:${user1[userItem]}`);
//     }
// }
//////////////////////////////////////////////////// exe 9
// class User {
//     fName;
//     lName;
//     age;
//     email;
//     rome;
//     birth;
//     image;
//     constructor(first,last,age,email,rome,birth,image){
//         this.fName = first
//         this.lName = last
//         this.age = age
//         this.email = email
//         this.rome = rome
//         this.birth = birth
//         this.image = image
//     }
//     returnString(user){
//        for (const userItem in user) {
//          let x = `${userItem}:${user[userItem]}`
//           console.log(x);
//       }
//     }
//     print(){
//        console.log(this.fName);
//     }
//     createButton(){
//         container.innerHTML = `<button id="btn2">${this.fName}</button>`
//         btn2.onclick = ()=>{
//             console.log(user1);
//         }
//     }
// }
// let user1 
// btn.onclick = ()=>{
// user1 = new User (inputF.value,inputL.value,inputAge.value,inputEmail.value,inputClass.value,inputBirth.value,inputImage.value)
//////////////////////////////// by console.log
// console.log(user1);
/////////////////////////////// display on page
// container.innerHTML +=
// `
// <h1>First name:</h1><br>${user1.fName}<br>
// <h1>Last name:</h1><br>${user1.lName}<br>
// <h1>Age:</h1><br>${user1.age}<br>
// <h1>Email:</h1><br>${user1.email}<br>
// <h1>Class:</h1><br>${user1.rome}<br>
// <h1>Birth:</h1><br>${user1.birth}<br>
// <h1>Image:</h1><br><img style = "width:200px;heigth:200px"src=${user1.image}>
// `
////////////////////////////// display on table
//   container.innerHTML += 
//   `<table>
//         <tr>
//             <th>First name</th>
//             <th>Last name</th>
//             <th>Age</th>
//             <th>Email:</th>
//             <th>Class:</th>
//             <th>Birth:</th>
//             <th>Image:</th>
//         </tr>
//         <tr>
//             <td>${user1.fName}</td>
//             <td>${user1.lName}</td>
//             <td>${user1.age}</td>
//             <td>${user1.email}</td>
//             <td>${user1.rome}</td>
//             <td>${user1.birth}</td>
//             <td><img style = "width:200px;height:200px;"src=${user1.image}></td>
//         </tr>
//   </table>
//   `
////////////////////////////// return as string
// user1.returnString(user1)
///////////////////////////print to console.log
// user1.print()
//!/////////////////////////create button 
// user1.createButton()
// }






