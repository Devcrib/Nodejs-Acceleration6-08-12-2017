const students = [
    {
        "name": "Gbenga akinnagbe",
        "age": 30,
        "Matric-number": 5000
    },
    {
        "name": "Adeniyi Gbenga",
        "age": 25,
        "Matric-number": 1000
    },
    {
        "name": "Trios slimet",
        "age": 26,
        "Matric-number": 150
    },
    {
        "name": "Tunmise yung",
        "age": 22,
        "Matric-number": 5000
    },
    {
        'name': "Kemisola Fasae",
        "age": 24,
        "Matric-number": 1234
    }

]

let student_details = students.map((student, index, students) => {
  //  console.log(student.name);
})

let under_age = students.filter((student)=>{
   return student.age < 26;
});
console.log(under_age);
