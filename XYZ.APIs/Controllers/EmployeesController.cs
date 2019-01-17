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
    [RoutePrefix("api/Employees")]

    public class EmployeesController : BaseODataController<IEmployeesBusinessManager, Employee, EmployeeVM>
    {

        public IEmployeesBusinessManager EmployeeBusinessManager { get; set; }


        [Inject]
        public EmployeesController(IEmployeesBusinessManager appointmentsBusinessManager) : base(appointmentsBusinessManager)
        {
            EmployeeBusinessManager = appointmentsBusinessManager;
        }

        /// <summary>
        /// get all emplyees
        /// use odata 
        /// </summary>
        /// <returns></returns>
        // GET api/playerCategorys

        public IHttpActionResult Get()
        {


            try
            {
                var result = EmployeeBusinessManager.Get();
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
        [ResponseType(typeof(EmployeeVM))]
        [ODataRoute("Employees({id})")]

        public EmployeeVM Get(int id)
        {
            if (!EntityExisted(s => s.Id == id)) // no appointment with that id
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            try
            {
                var playerCategory = EmployeeBusinessManager.GetVMById(id);
                return playerCategory;
            }
            catch (Exception e)
            {

                throw e;
            }
        }



    }
}