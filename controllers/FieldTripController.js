studentRoster.controller('FieldTripCtrl', function FieldTripCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentWithPermissionSlip = function(student) {
    student.permissionSlip = true;
  };
});
