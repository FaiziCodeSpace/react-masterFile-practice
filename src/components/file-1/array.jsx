
function Table() {
  const studentsDetail = [
    {
      id: "1",
      name: "Faizan",
      age: 21,
      lastName: "khan",
    },
    {
      id: "2",
      name: "Alyan",
      age: 18,
      lastName: "khan",
    },
    {
      id: "3",
      name: "Muskan",
      age: 13,
      lastName: "Fatima",
    },
    {
      id: "4",
      name: "Jawaid",
      age: 41,
      lastName: "khalid",
    },
  ];
  return (
    <div>
      <table border='1'>
        <thead>
            <tr>
                <td>Sr No.</td>
                <td>Name</td>
                <td>Age</td>
                <td>Last Name</td>
            </tr>
        </thead>
        <tbody>
          {studentsDetail.map((u, i) => (
            <tr key={i}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;