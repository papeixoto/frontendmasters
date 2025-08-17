import deepJS from "./workshop.js";

deepJS.addStudent(313, "Frank", true);
deepJS.addStudent(410, "Suzy", true);
deepJS.addStudent(709, "Brian", false);
deepJS.addStudent(105, "Henry", false);
deepJS.addStudent(502, "Mary", true);
deepJS.addStudent(664, "Bob", false);
deepJS.addStudent(250, "Peter", true);
deepJS.addStudent(375, "Sarah", true);
deepJS.addStudent(867, "Greg", false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/

// ********************************
