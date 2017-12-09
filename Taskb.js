const students = [
    {
        "name": "Gbenga akinnagbe",
        "age": "30",
        "Mn": 5000
    },
    {
        "name": "Adeniyi Gbenga",
        "age": "25",
        "Mn": 1000
    },
    {
        "name": "Trios slimet",
        "age": "26",
        "Mn": 150
    },
    {
        "name": "Tunmise yung",
        "age": "22",
        "Mn": 5000
    }
]

let student_details = students.map((student, index, students) => {
  //  console.log(student.name);
})

let under_age = students.filter((student)=>{
   return student.age < 26;
});
console.log(under_age);
