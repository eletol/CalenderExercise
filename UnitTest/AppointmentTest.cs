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
    public class AppointmentTest
    {

        public IAppointmentsBusinessManager AppointmentsBusinessManager { get; set; }
        public Mock<IAppointmentsRepository> AppointmentRepositoryMock { get; set; }

        [TestInitialize]
        public void TestInitialize()
        {
            AppointmentRepositoryMock = new Mock<IAppointmentsRepository>();
            var unitOfWorkMock = new Mock<IUnitOfWork>();
            unitOfWorkMock.Setup(m => m.Repository<Appointment, IAppointmentsRepository>()).Returns(AppointmentRepositoryMock.Object);
            AppointmentsBusinessManager = new AppointmentsBusinessManager<IAppointmentsRepository>(unitOfWorkMock.Object);
        }

       

        #region Get By Id  

        [TestMethod]
        public void Task_GetAppointmentById_Return_AppointmentEntity()
        {
            //Arrange
            var eppointmentId = 1;
            var expected = 1;
            IQueryable<Appointment> eppointmentList = new List<Appointment>() { new Appointment() { OrganizerId = expected, Id = eppointmentId } }.AsQueryable();
            AppointmentRepositoryMock.Setup(m => m.GetById(eppointmentId)).Returns(eppointmentList.FirstOrDefault(s => s.Id == eppointmentId)).Verifiable();

            //Act
            var actual = AppointmentsBusinessManager.GetById(eppointmentId);

            //Assert
            AppointmentRepositoryMock.Verify();//verify that GetByID was called based on setup.
            Assert.IsNotNull(actual);//assert that a result was returned
            Assert.AreEqual(eppointmentId, actual.Id);//assert that actual result was as expected
        }

        [TestMethod]
        public void Task_GetNotFoundAppointmentById_Return_Null()
        {
            //Arrange
            var eppointmentId = 1;
            var notFoundAppointmentId = 2;
            var expected = 1;
            IQueryable<Appointment> eppointmentList = new List<Appointment>() { new Appointment() { OrganizerId = expected, Id = eppointmentId } }.AsQueryable();
            AppointmentRepositoryMock.Setup(m => m.GetById(notFoundAppointmentId)).Returns(eppointmentList.FirstOrDefault(s => s.Id == notFoundAppointmentId)).Verifiable();



            //Act
            var actual = AppointmentsBusinessManager.GetById(notFoundAppointmentId);

            //Assert
            AppointmentRepositoryMock.Verify();//verify that GetByID was called based on setup.
            Assert.IsNull(actual);//assert that a result was returned
        }

        [TestMethod]
        public void Task_GetAppointmentById_MatchResult()
        {
            //Arrange
            var eppointmentId = 1;
            var eppointmentOrganizerId = 1;
            IQueryable<Appointment> eppointmentList = new List<Appointment>() { new Appointment() { OrganizerId = eppointmentOrganizerId, Id = eppointmentId } }.AsQueryable();
            AppointmentRepositoryMock.Setup(m => m.GetById(eppointmentId)).Returns(eppointmentList.FirstOrDefault(s => s.Id == eppointmentId)).Verifiable();



            //Act
            var actual = AppointmentsBusinessManager.GetById(eppointmentId);

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(Appointment));     //passes


            Assert.AreEqual(eppointmentId, actual.Id);//assert that actual result was as expected
            Assert.AreEqual(eppointmentOrganizerId, actual.OrganizerId);//assert that actual result was as expected
        }

        #endregion

        #region Get All  

        [TestMethod]
        public void Task_GetAppointments_Return_ListOfAppointment()
        {
            //Arrange

            IQueryable<Appointment> eppointmentList = new List<Appointment>() { new Appointment() { OrganizerId = 1, Id = 1 }, new Appointment() { OrganizerId = 2, Id = 2 } }.AsQueryable();
            AppointmentRepositoryMock.Setup(m => m.Get(null, null)).Returns(eppointmentList).Verifiable();

            //Act
            var actual = AppointmentsBusinessManager.Get();

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<Appointment>));     //passes
        }

        [TestMethod]
        public void Task_GetEmptyAppointments_Return_EmptyList()
        {
            //Arrange

            IQueryable<Appointment> eppointmentList = new List<Appointment>().AsQueryable();
            AppointmentRepositoryMock.Setup(m => m.Get(null, null)).Returns(eppointmentList).Verifiable();

            //Act
            var actual = AppointmentsBusinessManager.Get();

            //Assert  
            Assert.AreEqual(eppointmentList.Count(), actual.Count());     //passes

        }


        [TestMethod]
        public void Task_GetAppointments_MatchResult()
        {
            //Arrange

            IQueryable<Appointment> eppointmentList = new List<Appointment>() { new Appointment() { OrganizerId = 1, Id = 1 }, new Appointment() { OrganizerId = 2, Id = 2 } }.AsQueryable();
            AppointmentRepositoryMock.Setup(m => m.Get(null, null)).Returns(eppointmentList).Verifiable();

            //Act
            var actual = AppointmentsBusinessManager.Get();

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<Appointment>));     //passes
            Assert.AreEqual(eppointmentList.ToArray()[0].OrganizerId, actual.ToArray()[0].OrganizerId);//assert that actual result was as expected
            Assert.AreEqual(eppointmentList.ToArray()[0].Id, actual.ToArray()[0].Id);//assert that actual result was as expected
            Assert.AreEqual(eppointmentList.ToArray()[1].OrganizerId, actual.ToArray()[1].OrganizerId);//assert that actual result was as expected
            Assert.AreEqual(eppointmentList.ToArray()[1].Id, actual.ToArray()[1].Id);//assert that actual result was as expected


        }
        [TestMethod]
        public void Task_GetAppointmentsByFilter_MatchResult()
        {
            //Arrange
            var id = 1;
            var organizerId = 1;

            IQueryable<Appointment> eppointmentList = new List<Appointment>() { new Appointment() { OrganizerId = organizerId, Id = id }, new Appointment() { OrganizerId =2, Id = 2 } }.AsQueryable();
            AppointmentRepositoryMock.Setup(m => m.Get(s => s.OrganizerId.Equals(organizerId), null)).Returns(eppointmentList).Verifiable();

            //Act
            var actual = AppointmentsBusinessManager.Get(s => s.OrganizerId.Equals(organizerId));

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(IQueryable<Appointment>));     //passes
            Assert.AreEqual(organizerId, actual.ToArray()[0].OrganizerId);//assert that actual result was as expected
            Assert.AreEqual(eppointmentList.Count(), actual.Count());//assert  count


        }
        #endregion

        #region save
        public void Task_Add_ValidData_Return_Match()
        {
            //Arrange
            var id = 1;
            var organizerId = 1;
            var emp = new Appointment() { OrganizerId = organizerId, Id = id };
            AppointmentRepositoryMock.Setup(m => m.Save(emp)).Returns(emp).Verifiable();

            //Act
            var actual = AppointmentsBusinessManager.Save(emp);

            //Assert  
            Assert.IsInstanceOfType(actual, typeof(BussinessCustomResponse<Appointment>));     //passes

        }
        public void Task_Add_Success_Return_True()
        {
            //Arrange
            var id = 1;
            var organizerId =1;
            var emp = new Appointment() { OrganizerId = organizerId, Id = id };
            AppointmentRepositoryMock.Setup(m => m.Save(emp)).Returns(emp).Verifiable();

            //Act
            var actual = AppointmentsBusinessManager.Save(emp);

            //Assert  
            Assert.AreEqual(true, actual.Success);//assert success

        }
        #endregion
    }
}
