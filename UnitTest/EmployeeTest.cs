using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Castle.Core.Smtp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using XYZ.BL.BussinessMangers.Classes;
using XYZ.BL.BussinessMangers.Interfaces;
using XYZ.BL.Helper;
using XYZ.DAL.DBContext;
using XYZ.DAL.Models;
using XYZ.DAL.Repository.Classes;
using XYZ.DAL.Repository.Interfaces;
using XYZ.DAL.UnitOfWork;

namespace UnitTest
{
    [TestClass]
    public class EmployeeTest
    {

        public IEmployeesBusinessManager EmployeesBusinessManager { get; set; }
        public Mock<IEmployeesRepository> EmployeeRepositoryMock { get; set; }

        [TestInitialize]
        public void TestInitialize()
        {
            EmployeeRepositoryMock = new Mock<IEmployeesRepository>();
            var unitOfWorkMock = new Mock<IUnitOfWork>();
            unitOfWorkMock.Setup(m => m.Repository<Employee, IEmployeesRepository>()).Returns(EmployeeRepositoryMock.Object);
            EmployeesBusinessManager = new EmployeesBusinessManager<IEmployeesRepository>(unitOfWorkMock.Object);
        }

       
        #region Get By Id  

        [TestMethod]
        public  void Task_GetEmployeeById_Return_EmployeeEntity()
        {
            //Arrange
            var employeeId = 1;
            var expected = "AAA";
            IQueryable<Employee> employeeList = new List<Employee>() { new Employee() { Name = expected, Id = employeeId } }.AsQueryable();
            EmployeeRepositoryMock.Setup(m => m.GetById(employeeId)).Returns(employeeList.FirstOrDefault(s => s.Id == employeeId)).Verifiable();
            
            //Act
            var actual = EmployeesBusinessManager.GetById(employeeId);

            //Assert
            EmployeeRepositoryMock.Verify();//verify that GetByID was called based on setup.
            Assert.IsNotNull(actual);//assert that a result was returned
            Assert.AreEqual(employeeId, actual.Id);//assert that actual result was as expected
        }

        [TestMethod]
        public  void Task_GetNotFoundEmployeeById_Return_Null()
        {
            //Arrange
            var employeeId = 1;
            var notFoundEmployeeId = 2;
            var expected = "AAA";
            IQueryable<Employee> employeeList = new List<Employee>() { new Employee() { Name = expected, Id = employeeId } }.AsQueryable();
            EmployeeRepositoryMock.Setup(m => m.GetById(notFoundEmployeeId)).Returns(employeeList.FirstOrDefault(s => s.Id == notFoundEmployeeId)).Verifiable();



            //Act
            var actual = EmployeesBusinessManager.GetById(notFoundEmployeeId);

            //Assert
            EmployeeRepositoryMock.Verify();//verify that GetByID was called based on setup.
            Assert.IsNull(actual);//assert that a result was returned
        }

        [TestMethod]
        public  void Task_GetEmployeeById_MatchResult()
        {
            //Arrange
            var employeeId = 1;
            var employeeName = "AAA";
            IQueryable<Employee> employeeList = new List<Employee>() { new Employee() { Name = employeeName, Id = employeeId } }.AsQueryable();
            EmployeeRepositoryMock.Setup(m => m.GetById(employeeId)).Returns(employeeList.FirstOrDefault(s => s.Id == employeeId)).Verifiable();



            //Act
            var actual = EmployeesBusinessManager.GetById(employeeId);

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(Employee));     //passes


            Assert.AreEqual(employeeId, actual.Id);//assert that actual result was as expected
            Assert.AreEqual(employeeName, actual.Name);//assert that actual result was as expected
        }

        #endregion
      
         #region Get All  

        [TestMethod]
        public  void Task_GetEmployees_Return_ListOfEmployee()
        {
            //Arrange

            IQueryable<Employee> employeeList = new List<Employee>() { new Employee() { Name = "ahmed", Id = 1 }, new Employee() { Name = "ahmed2", Id = 2 } }.AsQueryable();
            EmployeeRepositoryMock.Setup(m => m.Get(null,null)).Returns(employeeList).Verifiable();
            
            //Act
            var actual = EmployeesBusinessManager.Get();

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<Employee>));     //passes
        }

        [TestMethod]
        public void Task_GetEmptyEmployees_Return_EmptyList()
        {
            //Arrange

            IQueryable<Employee> employeeList = new List<Employee>().AsQueryable();
            EmployeeRepositoryMock.Setup(m => m.Get(null, null)).Returns(employeeList).Verifiable();

            //Act
            var actual = EmployeesBusinessManager.Get();

            //Assert  
            Assert.AreEqual(employeeList.Count(), actual.Count());     //passes

        }


        [TestMethod]
        public  void Task_GetEmployees_MatchResult()
        {
            //Arrange

            IQueryable<Employee> employeeList = new List<Employee>() { new Employee() { Name = "ahmed", Id = 1 }, new Employee() { Name = "ahmed2", Id = 2 } }.AsQueryable();
            EmployeeRepositoryMock.Setup(m => m.Get(null, null)).Returns(employeeList).Verifiable();

            //Act
            var actual = EmployeesBusinessManager.Get();

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<Employee>));     //passes
            Assert.AreEqual(employeeList.ToArray()[0].Name, actual.ToArray()[0].Name);//assert that actual result was as expected
            Assert.AreEqual(employeeList.ToArray()[0].Id, actual.ToArray()[0].Id);//assert that actual result was as expected
            Assert.AreEqual(employeeList.ToArray()[1].Name, actual.ToArray()[1].Name);//assert that actual result was as expected
            Assert.AreEqual(employeeList.ToArray()[1].Id, actual.ToArray()[1].Id);//assert that actual result was as expected


        }
        [TestMethod]
        public void Task_GetEmployeesByFilter_MatchResult()
        {
            //Arrange
            var id = 1;
            var name = "ahmed14";

            IQueryable<Employee> employeeList = new List<Employee>() { new Employee() { Name = name, Id = id }, new Employee() { Name = "ahmed2", Id = 2 } }.AsQueryable();
            EmployeeRepositoryMock.Setup(m => m.Get(s=>s.Name.Equals(name), null)).Returns(employeeList).Verifiable();

            //Act
            var actual = EmployeesBusinessManager.Get(s => s.Name.Equals(name));

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<Employee>));     //passes
            Assert.AreEqual(name, actual.ToArray()[0].Name);//assert that actual result was as expected
            Assert.AreEqual(employeeList.Count(), actual.Count());//assert  count


        }
        #endregion

        #region save
        public  void Task_Add_ValidData_Return_Match()
        {
            //Arrange
            var id = 1;
            var name = "ahmed14";
            var emp = new Employee() {Name = name, Id = id};
            EmployeeRepositoryMock.Setup(m => m.Save(emp)).Returns(emp).Verifiable();

            //Act
            var actual = EmployeesBusinessManager.Save(emp);

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(BussinessCustomResponse<Employee>));     //passes

        }
        public  void Task_Add_Success_Return_True()
        {
            //Arrange
            var id = 1;
            var name = "ahmed14";
            var emp = new Employee() {Name = name, Id = id};
            EmployeeRepositoryMock.Setup(m => m.Save(emp)).Returns(emp).Verifiable();

            //Act
            var actual = EmployeesBusinessManager.Save(emp);

            //Assert  
            Assert.AreEqual(true, actual.Success);//assert success

        }
        #endregion
    }
}
