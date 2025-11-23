import "../App.css";

const Number = () => {
  // Generate array from 1 to 10
  const rows = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Table</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((num) => (
          <tr key={num}>
            <td>{`10 * ${num}`}</td>
            <td>{10 * num}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Number;
