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
    [RoutePrefix("api/EmployeeAppointments")]

    public class EmployeeAppointmentsActionsController : BaseActionsController<IEmployeeAppointmentsBusinessManager, EmployeeAppointment, EmployeeAppointmentVM>
    {

        public IEmployeeAppointmentsBusinessManager EmployeeAppointmentsBusinessManager { get; set; }


        [Inject]
        public EmployeeAppointmentsActionsController(IEmployeeAppointmentsBusinessManager tagStatussBusinessManager) : base(tagStatussBusinessManager)
        {
            EmployeeAppointmentsBusinessManager = tagStatussBusinessManager;
        }


        /// <summary>
        /// adding attendee to the appointment
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        /// 
        [ResponseType(typeof(BussinessCustomResponse<EmployeeAppointmentVM>))]
        [HttpPost]
        [Route("POST")]
        public HttpResponseMessage Post(EmployeeAppointmentVM item)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
            }
            try
            {
              var response=  EmployeeAppointmentsBusinessManager.Save(item);

                return Request.CreateResponse(response.Success ? HttpStatusCode.OK : HttpStatusCode.BadRequest, response);
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        /// <summary>
        /// editing attendee to the appointment
        /// </summary>
        /// <param name="id"></param>
        /// <param name="item"></param>
        /// <returns></returns>
        [ResponseType(typeof(void))]
        [Route("Put")]
        [HttpPut]

        public IHttpActionResult Put(int id, EmployeeAppointmentVM item)
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
                EmployeeAppointmentsBusinessManager.Update(item);
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
        /// delete an attendee from the meeting
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("Delete")]
        public IHttpActionResult Delete(long id)
        {
            var item = EmployeeAppointmentsBusinessManager.GetVMById(id);
            if (item == null)
            {
                return NotFound();
            }
            try
            {
                EmployeeAppointmentsBusinessManager.DeleteSoftly(id);

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