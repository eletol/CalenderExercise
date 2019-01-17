using Ninject;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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
    [RoutePrefix("api/Appointments")]

    public class AppointmentsController : BaseODataController<IAppointmentsBusinessManager, Appointment, AppointmentVM>
    {

        public IAppointmentsBusinessManager AppointmentBusinessManager { get; set; }


        [Inject]
        public AppointmentsController(IAppointmentsBusinessManager appointmentsBusinessManager) : base(appointmentsBusinessManager)
        {
            AppointmentBusinessManager = appointmentsBusinessManager;
        }

        /// <summary>
        ///  get Appointments 
        ///  use Odata for filteration,expanding and pagination
        /// https://www.odata.org/documentation/odata-version-2-0/uri-conventions/ 
        /// </summary>
        /// <returns></returns>
        [ResponseType(typeof(ICollection<AppointmentVM>))]

        public IHttpActionResult Get()
        {


            try
            {
                var result = AppointmentBusinessManager.Get().AsNoTracking();
                return Ok(result);
            }
            catch (Exception e)
            {

                throw e;
            }

        }
        /// <summary>
        /// get by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/playerCategorys/5
        [ResponseType(typeof(AppointmentVM))]
        [ODataRoute("Appointments({id})")]

        public AppointmentVM Get(int id)
        {
            if (!EntityExisted(s => s.Id == id)) // no appointment with that id
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            try
            {
                var playerCategory = AppointmentBusinessManager.GetVMById(id);
                return playerCategory;
            }
            catch (Exception e)
            {

                throw e;
            }
        }



    }
}