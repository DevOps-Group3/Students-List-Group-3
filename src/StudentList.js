
const students = [
  { id: 'C0899391', name: 'Yubraj Rai' },
  { id: 'C0901142', name: 'Roshan Shrestha' },
  { id: 'C0901297', name: 'Fuchun Li' },
  { id: 'C0901339', name: 'Pauline Balamores' },
  { id: 'C0900440', name: 'Piyumika Samarasuriyage' }
];

const StudentList = () => {
  return (
    <div>
      <h1>DevOps Tools and Practices 03: Group 3 Demo</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
