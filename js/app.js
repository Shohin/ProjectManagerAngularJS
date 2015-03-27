var app = angular.module ('projectManager', []);
app.controller('ProjectManagerController', function($scope){
  $scope.enableGrid = true;
  $scope.showAddEditProjectForm = false;
  $scope.enableGridAction = function(){
    $scope.enableGrid = true;
  };
  $scope.disableGridAction = function(){
    $scope.enableGrid = false;
  };
  $scope.removeProject = function(index) {
    $scope.projects.splice(index, 1);
  };
  $scope.addProject = function(project) {
    $scope.projects.push(project);
    console.log(project);
  };
  $scope.showAddEditForm = function(index){
    console.log(index);
    if (index) {
      $scope.prName = $scope.projects[index].projectName;
      $scope.strDate = new Date($scope.projects[index].startDate);
      $scope.eDate = new Date($scope.projects[index].endDate);
    } else {
      $scope.prName = "";
      $scope.strDate = new Date("mm/dd/yyyy");
      $scope.eDate = new Date("mm/dd/yyyy");
    }
    $scope.showAddEditProjectForm = true;
    console.log($scope.strDate);
  };
  $scope.projects = [
    {
      projectName: "Smartup",
      startDate: "01/01/2014",
      endDate: "01/01/2016"
    },
    {
      projectName: "Smartup1",
      startDate: "1.01.2014",
      endDate: "1.01.2016"
    },
    {
      projectName: "Smartup2",
      startDate: "1.01.2014",
      endDate: "1.01.2016"
    },
    {
      projectName: "Smartup3",
      startDate: "1.01.2014",
      endDate: "1.01.2016"
    },
    {
      projectName: "Injoy",
      startDate: "1.01.2014",
      endDate: "1.01.2016"
    },
    {
      projectName: "Smartup3.1",
      startDate: "1.01.2014",
      endDate: "1.01.2016"
    },
    {
      projectName: "Smartup3.1.1",
      startDate: "1.01.2014",
      endDate: "1.01.2016"
    }
  ];
});