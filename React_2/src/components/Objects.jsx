import "../App.css";

const students = [
  { id: 1, name: "Alice", age: 20, course: "Computer Science" },
  { id: 2, name: "Bob", age: 22, course: "Mechanical Engineering" },
  { id: 3, name: "Charlie", age: 19, course: "Mathematics" },
  { id: 4, name: "Diana", age: 21, course: "Physics" },
  { id: 5, name: "Ethan", age: 23, course: "Chemistry" },
];

const Object = () => (
  <div className="student-details-container">
    <h2>Student Details</h2>
    <ul className="student-list">
      {students.map(({ id, name, age, course }) => (
        <li key={id}>
          <span><strong>Name:</strong> {name}</span>
          <span><strong>Age:</strong> {age}</span>
          <span><strong>Course:</strong> {course}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Object;
