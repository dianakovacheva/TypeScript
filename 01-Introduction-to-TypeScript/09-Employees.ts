const employeesObj: object = {};

function printEmployeesList(employeesNamesArray: string[]) {
  let employeeName: string;
  let employeePersonalNum: number;
  for (let i = 0; i < employeesNamesArray.length; i++) {
    employeeName = employeesNamesArray[i];
    employeePersonalNum = employeeName.length;

    // Add data to employeesObj
    employeesObj[employeeName] = employeePersonalNum;
  }

  // Console log data for each employee
  for (const e in employeesObj) {
    console.log(`Name: ${e} -- Personal Number: ${employeesObj[e]}`);
  }
}

printEmployeesList([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
