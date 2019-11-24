let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
const attendanceCheck = (dayOfWeek) => {
//check gobal classRoom array for dayOfWeek parameter. Return array of keys 
    studentPresentArray =[];
    for (let x = 0; x < classRoom.length; ++x){
//set current student attendance record object to currStudent
        let currStudent = classRoom[x]; 
//set current student name to variable to possibly push to returned array
        let studentName = Object.keys(currStudent);
//loop through array of day objects to check for the day of week
        let currWeek = currStudent[studentName];
        for (let y = 0; y < currWeek.length; y++){
            if (currWeek[y][dayOfWeek]){
                studentPresentArray.push(studentName.toString());
            }
        }
    }
return studentPresentArray; 
}