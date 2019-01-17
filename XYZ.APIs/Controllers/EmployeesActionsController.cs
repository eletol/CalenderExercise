using System;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Ninject;
using XYZ.BL.BussinessMangers.Interfaces;
using XYZ.BL.Helper;
using XYZ.BL.ViewModels;
using XYZ.DAL.Models;

namespace XYZ.APIs.Controllers
{
    [RoutePrefix("api/Employees")]

    public class EmployeesActionsController : BaseActionsController<IEmployeesBusinessManager, Employee, EmployeeVM>
    {

        public IEmployeesBusinessManager EmployeesBusinessManager { get; set; }


        [Inject]
        public EmployeesActionsController(IEmployeesBusinessManager tagStatussBusinessManager) : base(tagStatussBusinessManager)
        {
            EmployeesBusinessManager = tagStatussBusinessManager;
        }


        /// <summary>
        /// adding
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        /// 
        [ResponseType(typeof(BussinessCustomResponse<EmployeeVM>))]
        [HttpPost]
        [Route("POST")]
        public HttpResponseMessage Post(EmployeeVM item)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
            }
            try
            {
              var response=  EmployeesBusinessManager.Save(item);

                return Request.CreateResponse(response.Success ? HttpStatusCode.OK : HttpStatusCode.BadRequest, response);
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        /// <summary>
        /// update
        /// </summary>
        /// <param name="id"></param>
        /// <param name="item"></param>
        /// <returns></returns>
        [ResponseType(typeof(void))]
        [Route("Put")]
        [HttpPut]

        public IHttpActionResult Put(int id, EmployeeVM item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!EntityExisted(s=>s.Id==id)) // no item with that id
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            item.Id = id;

            try
            {
                EmployeesBusinessManager.Update(item);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntityExisted(s=>s.Id==id))
                {
                    return NotFound();
                }
                throw;
            }

            catch (Exception e)
            {

                throw e;
            }
            return StatusCode(HttpStatusCode.NoContent);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("Delete")]
        public IHttpActionResult Delete(long id)
        {
            var item = EmployeesBusinessManager.GetVMById(id);
            if (item == null)
            {
                return NotFound();
            }
            try
            {
                EmployeesBusinessManager.DeleteSoftly(id);

                return Ok(item);
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        // Check if an item is existed

    }
}