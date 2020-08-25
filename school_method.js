let school = {
    teachers: [
        {
            name: "Elizabeth",
            subjects: ["Math", "Computer Science"],
            students: [],
            capacityLeftInClassroom: 5,
        },
        {
            name: "Mike",
            subjects: ["English", "Literature"],
            students: [],
            capacityLeftInClassroom: 2,
        }
    ],

    students: [
        {
            name: "Judy",
            age: 15,
        },
        {
            name: "Sam",
            age: 15,
        },
        {
            name: "Ned",
            age: 14,
        },
        {
            name: "Jon",
            age: 14,
        },
        {
            name: "Allie",
            age: 15,
        },
        {
            name: "Emily",
            age: 15,
        },
        {
            name: "Kate",
            age: 14,
        },
    ]
}

school.assignStudent = (student, subject) => {
    let studentAssignedToClass = 0;

    school.teachers.forEach(teacher => { // iterating over the teachers list
        teacher.subjects.forEach(teacherSubject=> { // iterating over the subjects every teacher teach
            if (teacherSubject === subject) { // checking if the current subject is the subject I'm looking for
                if (teacher.capacityLeftInClassroom) { // if it is: checking for room in the class
                    teacher.students.push(student); // if there is room - enter the new student and lower capacity
                    teacher.capacityLeftInClassroom -=1;
                    studentAssignedToClass = 1;
                    return;
                }
            }
        })
        if (studentAssignedToClass) {
            return;
        }
    });

    if (!studentAssignedToClass) {
        console.log("Sorry, no available teachers left");
    }
};


//before adding Judy to English class
console.log(school.teachers[1])
school.assignStudent(school.students[0], "English");
//after adding her
console.log(school.teachers[1]);

school.assignStudent(school.students[3], "English");
//after adding Jon
console.log(school.teachers[1]);

//trying to add Ned to English class when there is no room left
school.assignStudent(school.students[2], "English");

