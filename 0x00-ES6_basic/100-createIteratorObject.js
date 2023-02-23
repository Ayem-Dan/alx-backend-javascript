export default function createIteratorObject(report) {
  const employee = [];
  for (const [emplys] of Object.entries(report.allEmployees)) {
    for (const emp of emplys) {
      employee.push(emp);
    }
  }
  return employee;
}
