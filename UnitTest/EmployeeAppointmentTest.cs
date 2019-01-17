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
    public class EmployeeAppointmentTest
    {

        public IEmployeeAppointmentsBusinessManager EmployeeAppointmentsBusinessManager { get; set; }
        public Mock<IEmployeeAppointmentsRepository> EmployeeAppointmentRepositoryMock { get; set; }

        [TestInitialize]
        public void TestInitialize()
        {
            EmployeeAppointmentRepositoryMock = new Mock<IEmployeeAppointmentsRepository>();
            var unitOfWorkMock = new Mock<IUnitOfWork>();
            unitOfWorkMock.Setup(m => m.Repository<EmployeeAppointment, IEmployeeAppointmentsRepository>()).Returns(EmployeeAppointmentRepositoryMock.Object);
            EmployeeAppointmentsBusinessManager = new EmployeeAppointmentsBusinessManager<IEmployeeAppointmentsRepository>(unitOfWorkMock.Object);
        }

       

        #region Get By Id  

        [TestMethod]
        public  void Task_GetEmployeeAppointmentById_Return_EmployeeAppointmentEntity()
        {
            //Arrange
            var employeeAppointmentId = 1;
            var appointmentId = 1;
            IQueryable<EmployeeAppointment> employeeAppointmentList = new List<EmployeeAppointment>() { new EmployeeAppointment() { AppointmentId = appointmentId, Id = employeeAppointmentId } }.AsQueryable();
            EmployeeAppointmentRepositoryMock.Setup(m => m.GetById(employeeAppointmentId)).Returns(employeeAppointmentList.FirstOrDefault(s => s.Id == employeeAppointmentId)).Verifiable();
            
            //Act
            var actual = EmployeeAppointmentsBusinessManager.GetById(employeeAppointmentId);

            //Assert
            EmployeeAppointmentRepositoryMock.Verify();//verify that GetByID was called based on setup.
            Assert.IsNotNull(actual);//assert that a result was returned
            Assert.AreEqual(employeeAppointmentId, actual.Id);//assert that actual result was as appointmentId
        }

        [TestMethod]
        public  void Task_GetNotFoundEmployeeAppointmentById_Return_Null()
        {
            //Arrange
            var employeeAppointmentId = 1;
            var notFoundEmployeeAppointmentId = 2;
            var appointmentId = 1;
            IQueryable<EmployeeAppointment> employeeAppointmentList = new List<EmployeeAppointment>() { new EmployeeAppointment() { AppointmentId = appointmentId, Id = employeeAppointmentId } }.AsQueryable();
            EmployeeAppointmentRepositoryMock.Setup(m => m.GetById(notFoundEmployeeAppointmentId)).Returns(employeeAppointmentList.FirstOrDefault(s => s.Id == notFoundEmployeeAppointmentId)).Verifiable();



            //Act
            var actual = EmployeeAppointmentsBusinessManager.GetById(notFoundEmployeeAppointmentId);

            //Assert
            EmployeeAppointmentRepositoryMock.Verify();//verify that GetByID was called based on setup.
            Assert.IsNull(actual);//assert that a result was returned
        }

        [TestMethod]
        public  void Task_GetEmployeeAppointmentById_MatchResult()
        {
            //Arrange
            var employeeAppointmentId = 1;
            var employeeAppointmentAppointmentId = 1;
            IQueryable<EmployeeAppointment> employeeAppointmentList = new List<EmployeeAppointment>() { new EmployeeAppointment() { AppointmentId = employeeAppointmentAppointmentId, Id = employeeAppointmentId } }.AsQueryable();
            EmployeeAppointmentRepositoryMock.Setup(m => m.GetById(employeeAppointmentId)).Returns(employeeAppointmentList.FirstOrDefault(s => s.Id == employeeAppointmentId)).Verifiable();



            //Act
            var actual = EmployeeAppointmentsBusinessManager.GetById(employeeAppointmentId);

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(EmployeeAppointment));     //passes


            Assert.AreEqual(employeeAppointmentId, actual.Id);//assert that actual result was as appointmentId
            Assert.AreEqual(employeeAppointmentAppointmentId, actual.AppointmentId);//assert that actual result was as appointmentId
        }

        #endregion
      
         #region Get All  

        [TestMethod]
        public  void Task_GetEmployeeAppointments_Return_ListOfEmployeeAppointment()
        {
            //Arrange

            IQueryable<EmployeeAppointment> employeeAppointmentList = new List<EmployeeAppointment>() { new EmployeeAppointment() { AppointmentId = 1, Id = 1 }, new EmployeeAppointment() { AppointmentId = 2, Id = 2 } }.AsQueryable();
            EmployeeAppointmentRepositoryMock.Setup(m => m.Get(null,null)).Returns(employeeAppointmentList).Verifiable();
            
            //Act
            var actual = EmployeeAppointmentsBusinessManager.Get();

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<EmployeeAppointment>));     //passes
        }

        [TestMethod]
        public void Task_GetEmptyEmployeeAppointments_Return_EmptyList()
        {
            //Arrange

            IQueryable<EmployeeAppointment> employeeAppointmentList = new List<EmployeeAppointment>().AsQueryable();
            EmployeeAppointmentRepositoryMock.Setup(m => m.Get(null, null)).Returns(employeeAppointmentList).Verifiable();

            //Act
            var actual = EmployeeAppointmentsBusinessManager.Get();

            //Assert  
            Assert.AreEqual(employeeAppointmentList.Count(), actual.Count());     //passes

        }


        [TestMethod]
        public  void Task_GetEmployeeAppointments_MatchResult()
        {
            //Arrange

            IQueryable<EmployeeAppointment> employeeAppointmentList = new List<EmployeeAppointment>() { new EmployeeAppointment() { AppointmentId = 1, Id = 1 }, new EmployeeAppointment() { AppointmentId = 2, Id = 2 } }.AsQueryable();
            EmployeeAppointmentRepositoryMock.Setup(m => m.Get(null, null)).Returns(employeeAppointmentList).Verifiable();

            //Act
            var actual = EmployeeAppointmentsBusinessManager.Get();

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<EmployeeAppointment>));     //passes
            Assert.AreEqual(employeeAppointmentList.ToArray()[0].AppointmentId, actual.ToArray()[0].AppointmentId);//assert that actual result was as appointmentId
            Assert.AreEqual(employeeAppointmentList.ToArray()[0].Id, actual.ToArray()[0].Id);//assert that actual result was as appointmentId
            Assert.AreEqual(employeeAppointmentList.ToArray()[1].AppointmentId, actual.ToArray()[1].AppointmentId);//assert that actual result was as appointmentId
            Assert.AreEqual(employeeAppointmentList.ToArray()[1].Id, actual.ToArray()[1].Id);//assert that actual result was as appointmentId


        }
        [TestMethod]
        public void Task_GetEmployeeAppointmentsByFilter_MatchResult()
        {
            //Arrange
            var id = 1;
            var appointmentId = 1;

            IQueryable<EmployeeAppointment> employeeAppointmentList = new List<EmployeeAppointment>() { new EmployeeAppointment() { AppointmentId = appointmentId, Id = id }, new EmployeeAppointment() { AppointmentId = 2, Id = 2 } }.AsQueryable();
            EmployeeAppointmentRepositoryMock.Setup(m => m.Get(s=>s.AppointmentId.Equals(appointmentId), null)).Returns(employeeAppointmentList).Verifiable();

            //Act
            var actual = EmployeeAppointmentsBusinessManager.Get(s => s.AppointmentId.Equals(appointmentId));

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<EmployeeAppointment>));     //passes
            Assert.AreEqual(appointmentId, actual.ToArray()[0].AppointmentId);//assert that actual result was as appointmentId
            Assert.AreEqual(employeeAppointmentList.Count(), actual.Count());//assert  count


        }
        #endregion

        #region save
        public  void Task_Add_ValidData_Return_Match()
        {
            //Arrange
            var id = 1;
            var appointmentId = 1;
            var emp = new EmployeeAppointment() {AppointmentId = appointmentId, Id = id};
            EmployeeAppointmentRepositoryMock.Setup(m => m.Save(emp)).Returns(emp).Verifiable();

            //Act
            var actual = EmployeeAppointmentsBusinessManager.Save(emp);

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(BussinessCustomResponse<EmployeeAppointment>));     //passes

        }
        public  void Task_Add_Success_Return_True()
        {
            //Arrange
            var id = 1;
            var appointmentId = "ahmed14";
            var emp = new EmployeeAppointment() {AppointmentId = 1, Id = id};
            EmployeeAppointmentRepositoryMock.Setup(m => m.Save(emp)).Returns(emp).Verifiable();

            //Act
            var actual = EmployeeAppointmentsBusinessManager.Save(emp);

            //Assert  
            Assert.AreEqual(true, actual.Success);//assert success

        }
        #endregion
    }
}
