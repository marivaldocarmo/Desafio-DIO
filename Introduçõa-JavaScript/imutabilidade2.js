const students=[
    {
        name: "Marivaldo",
        grade:7
    },
    {
        name:'Lucimara',
        grade:4
    },
    {
            name: 'Mithiely',
            grade:10
     }
];
function getApprovedStudents(studentsList){
    return studentsList.filter(student=>student.grade>=7);
}
console.log('Alunos Aprovados:');
console.log(getApprovedStudents(students));

console.log('Lista de alunos:')
console.log(students);

