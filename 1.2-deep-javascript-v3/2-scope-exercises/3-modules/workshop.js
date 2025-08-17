const studentRecords = [];
let currentEnrollment = [];

function addStudent(id, name, paid) {
  studentRecords.push({
    id,
    name,
    paid,
  });
}

function enrollStudent(id) {
  if (!currentEnrollment.includes(id)) {
    currentEnrollment.push(id);
  }
}

function printCurrentEnrollment() {
  printRecords(currentEnrollment);
}

function enrollPaidStudents() {
  currentEnrollment = paidStudentsToEnroll();
  printRecords(currentEnrollment);
}

function remindUnpaidStudents() {
  remindUnpaid(currentEnrollment);
}

function getStudentFromId(studentId) {
  return studentRecords.find(matchId);

  // *************************

  function matchId(record) {
    return record.id == studentId;
  }
}

function notYetPaid(studentId) {
  var record = getStudentFromId(studentId);
  return !record.paid;
}

function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(notYetPaid);

  printRecords(unpaidIds);
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudentFromId);

  records.sort(sortByNameAsc);

  records.forEach(printRecord);
}

function sortByNameAsc(record1, record2) {
  if (record1.name < record2.name) return -1;
  else if (record1.name > record2.name) return 1;
  else return 0;
}

function printRecord(record) {
  console.log(
    `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
  );
}

function paidStudentsToEnroll() {
  var recordsToEnroll = studentRecords.filter(needToEnroll);

  var idsToEnroll = recordsToEnroll.map(getStudentId);

  return [...currentEnrollment, ...idsToEnroll];
}

function needToEnroll(record) {
  return record.paid && !currentEnrollment.includes(record.id);
}

function getStudentId(record) {
  return record.id;
}

export default {
  addStudent,
  enrollStudent,
  printCurrentEnrollment,
  enrollPaidStudents,
  remindUnpaidStudents,
};
