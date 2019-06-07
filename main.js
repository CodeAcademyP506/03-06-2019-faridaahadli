
// Objects
var student1 = {
    name: "Farida",
    surname: "Ahadli",
    age: "18",
    course: 2,
    faculty: "IT",
    specialty: "Computer science",
    degree: "Bachelor",
    group: "660.7E",
    examResult: [
        {
            name: "probabilty",
            midterm: 37,
            final: 33
        },
        {
            name: "algorithm analysis",
            midterm: 50,
            final: 45
        },
        {
            name: "fuzzy logic",
            midterm: 39,
            final: 47
        }
    ]
}

var student2 = {
    name: "Zeynab",
    surname: "Amiraslanova",
    age: "20",
    course: 3,
    faculty: "SPIA",
    specialty: "Public adminstration",
    degree: "Bachelor",
    group: "557.3",
    examResult: [
        {
            name: "local government",
            midterm: 34,
            final: 37
        },
        {
            name: "understanding politics",
            midterm: 47,
            final: 50
        },
        {
            name: "organizational behavior",
            midterm: 49,
            final: 49
        }
    ]
}
var student3 = {
    name: "Azer",
    surname: "Ibrahimli",
    age: "20",
    course: 3,
    faculty: "IT",
    specialty: "Computer science",
    degree: "Bachelor",
    group: "660.7E",
    examResult: [
        {
            name: "probabilty",
            midterm: 39,
            final: 45
        },
        {
            name: "algorithm analysis",
            midterm: 40,
            final: 42
        },
        {
            name: "fuzzy logic",
            midterm: 39,
            final: 43
        }
    ]

}
var student4 = {
    name: "Marvan",
    surname: "Saadi Salman Salman Al-Qaisy",
    age: "24",
    course: 3,
    faculty: "SPIA",
    specialty: "Public adminstration",
    degree: "Bachelor",
    group: "557.3",
    examResult: [
        {
            name: "local government",
            midterm: 43,
            final: 45
        },
        {
            name: "understanding politics",
            midterm: 44,
            final: 40
        },
        {
            name: "organizational behavior",
            midterm: 38,
            final: 43
        }
    ]
}

var group1 = {
    name: "660.7E",
    students: [student1, student3],
    schedule: [{
        day: "Monday",
        lessons: [{
            name: "probabilty",
            room: 102,
            instructor: "Nigar Ismayilova"
        },
        {
            name: "algorithm analysis",
            room: 313,
            instructor: "Elviz Ismayilov"
        },
        ]
    },
    {
        day: "Tuesday",
        lessons: [{
            name: "fuzzy logic",
            room: 106,
            instructor: "Samir Quliyev"
        }]
    },
    ]




}

var group2 = {
    name: "557.3",
    students: [student2, student4],
    schedule: [{
        day: "Monday",
        lessons: [{
            name: "understanding politics",
            room: 432,
            instructor: "Ali Sager"
        },
        {
            name: "organizational behavior",
            room: 313,
            instructor: "Orkhan Ismayilov"
        },
        ]
    },
    {
        day: "Tuesday",
        lessons: [{
            name: "local government",
            room: 321,
            instructor: "Anar Valiyev"
        }]
    },
    ]




}

var teacher1 = {
    name: "Samir",
    surname: "Quliyev",
    specialty: "fuzzy logic",
    contact: "samir@code.edu.az",
    groups: [group1]


}
var teacher2 = {
    name: "Elviz",
    surname: "Ismayilov",
    specialty: "algorithm analysis",
    contact: "elvizism@code.edu.az",
    groups: [group1]


}
var teacher3 = {
    name: "Nigar",
    surname: "Ismayilova",
    specialty: "probabilty",
    contact: "nigarism@code.edu.az",
    groups: [group1]


}
var teacher4 = {
    name: "Ali",
    surname: "Sager",
    specialty: "understanding politics",
    contact: "ali@code.edu.az",
    groups: [group2]


}
var teacher5 = {
    name: "Orkhan",
    surname: "Ismayilov",
    specialty: "organizational behavior",
    contact: "orkhan@code.edu.az",
    groups: [group2],


}
var teacher6 = {
    name: "Anar",
    surname: "Valiyev",
    specialty: "local government",
    contact: "anar@code.edu.az",
    groups: [group2]
}
var university = {
    groups: [group1, group2],
    students: [student1, student2, student3, student4],
    teachers: [teacher1, teacher2, teacher3, teacher4, teacher5, teacher6]
}



// Functions
function studentInfo(obj) {
    for (const key in obj) {
        if (typeof (obj[key]) !== "function") {
            console.log(key + ":" + obj[key])
        }
    }

}


function getTeacherName(obj) {
    for (let i = 0; i < university.groups.length; i++) {
        if (obj.group === university.groups[i].name) {
            var searchGroup = obj.group

        }
    }
    console.log("Teacher of" + " " + obj.name + ":")

    for (let i = 0; i < university.teachers.length; i++) {
        for (let j = 0; j < university.teachers[i].groups.length; j++) {

            if (searchGroup === university.teachers[i].groups[j].name) {
                console.log(university.teachers[i].name + " " + university.teachers[i].surname)
            }
        }

    }
    console.log("\n")
}

// Countof group

function countOfGroupsInTeacher(obj) {
    return obj.groups.length
}

function countOfStudentsInTeacher(obj) {
    var count = 0
    for (let i = 0; i < obj.groups.length; i++) {
        count += obj.groups[i].students.length
    }
    return count
}

function lastResult(obj) {
    var total = 0;
    for (let i = 0; i < obj.examResult.length; i++) {
        total += obj.examResult[i].midterm + obj.examResult[i].final
    }
    return total / obj.examResult.length
}

function averageScore(obj) {
    var averageScore = 0
    for (i = 0; i < obj.students.length; i++) {
        averageScore += lastResult(obj.students[i])

    }
    return (averageScore / obj.students.length)
}

function countOfStudentsInGroup(obj) {
    console.log(obj.name + " group have " + obj.students.length + " students")
}

function teacherNameInGroup(obj) {
    console.log(obj.name + " group teachers: ")
    for (let m = 0; m < obj.schedule.length; m++) {
        for (let n = 0; n < obj.schedule[m].lessons.length; n++) {
            console.log(obj.schedule[m].lessons[n].instructor)
        }
    }
}

function bestofAll() {
    var max = lastResult(university.students[0])
    for (let z = 1; z < university.students.length; z++) {
        if (max < lastResult(university.students[z])) {
            max = lastResult(university.students[z])
        }
    }
    for (let z = 0; z < university.students.length; z++) {
        if (max == lastResult(university.students[z])) {
            var bestStudent = university.students[z].name + " " + university.students[z].surname + "\n score is: " + max
        }
    }
    return bestStudent
}


// Call of functions
//-------------------------------------------------
// StudentInfo


// for(i=0;i<university.students.length;i++){
//     console.log("\n"+"student"+(i+1)+"\n")
//   university.students[i].getInfo=studentInfo(university.students[i])

// }


// TeacherName of Student


// for(i=0;i<university.students.length;i++){

//       university.students[i].getTeacherName=getTeacherName(university.students[i])

//     }



// Count of teacher's groups

// for(i=0;i<university.teachers.length;i++){

//     university.teachers[i].countOfGroups=countOfGroupsInTeacher(university.teachers[i])

//     console.log(university.teachers[i].name+"'s  group is "+university.teachers[i].countOfGroups)

//     }


// Count Of Teacher's Students

// for(i=0;i<university.teachers.length;i++){

//     university.teachers[i].countOfStudents=countOfStudentsInTeacher(university.teachers[i])

//     console.log(university.teachers[i].name+"'s  student is "+university.teachers[i].countOfStudents)

//     }


// totalResult of students

// for(let i=0;i<university.students.length;i++){

//       university.students[i].totalPoint=lastResult(university.students[i])
// console.log(university.students[i].name+" "+university.students[i].surname+": "+ university.students[i].totalPoint)

//     }

// Group Average Score

// for(let m=0;m<university.groups.length;m++){

//     university.groups[m].midResult=averageScore(university.groups[m])
// console.log( university.groups[m].name+" group average score is: "+university.groups[m].midResult)

//   }

// Count Of Students in group


// for(let m=0;m<university.groups.length;m++){

//         university.groups[m].studentCount=countOfStudentsInGroup(university.groups[m])

//       }

// Teacher name in group

// for(let i=0;i<university.groups.length;i++){

//            university.groups[i].teacherName=teacherNameInGroup(university.groups[i])
//        console.log(" ")
//          }



// Best Of All

// university.highScoreStudent=bestofAll()
// console.log(university.highScoreStudent)