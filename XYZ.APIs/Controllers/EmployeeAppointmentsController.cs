using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity.Infrastructure;
using System.Web.Http.Description;
using System.Web.Http.OData;
using System.Web.OData.Routing;
using AutoMapper;
using XYZ.BL.BussinessMangers.Classes;
using XYZ.BL.BussinessMangers.Interfaces;
using XYZ.BL.ViewModels;
using XYZ.DAL.Models;
using Microsoft.AspNet.Identity;

namespace XYZ.APIs.Controllers
{
    [RoutePrefix("api/EmployeeAppointments")]

    public class EmployeeAppointmentsController : BaseODataController<IEmployeeAppointmentsBusinessManager, EmployeeAppointment, EmployeeAppointmentVM>
    {

        public IEmployeeAppointmentsBusinessManager EmployeeAppointmentBusinessManager { get; set; }


        [Inject]
        public EmployeeAppointmentsController(IEmployeeAppointmentsBusinessManager appointmentsBusinessManager) : base(appointmentsBusinessManager)
        {
            EmployeeAppointmentBusinessManager = appointmentsBusinessManager;
        }

        /// <summary>
        /// get all employee appointments
        /// </summary>
        /// <returns></returns>
       [ResponseType(typeof(ICollection<EmployeeAppointmentVM>))]
        public IHttpActionResult Get()
        {


            try
            {
                var result = EmployeeAppointmentBusinessManager.Get();
                return Ok(result);
            }
            catch (Exception e)
            {

                throw e;
            }

        }
        /// <summary>
        /// get EmployeeAppointment by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [ResponseType(typeof(EmployeeAppointment))]
        [ODataRoute("EmployeeAppointments({id})")]

        public EmployeeAppointment Get(int id)
        {
            if (!EntityExisted(s => s.Id == id)) // no appointment with that id
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            try
            {
                var playerCategory = EmployeeAppointmentBusinessManager.GetById(id);
                return playerCategory;
            }
            catch (Exception e)
            {

                throw e;
            }
        }



    }
}