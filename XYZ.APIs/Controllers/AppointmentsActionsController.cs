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
    [RoutePrefix("api/Appointments")]

    public class AppointmentsActionsController : BaseActionsController<IAppointmentsBusinessManager, Appointment, AppointmentVM>
    {

        public IAppointmentsBusinessManager AppointmentsBusinessManager { get; set; }


        [Inject]
        public AppointmentsActionsController(IAppointmentsBusinessManager tagStatussBusinessManager) : base(tagStatussBusinessManager)
        {
            AppointmentsBusinessManager = tagStatussBusinessManager;
        }


        /// <summary>
        /// use this api to add an appointment
        /// pass the attendees arry of ids
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        /// 
        [ResponseType(typeof(BussinessCustomResponse<AppointmentVM>))]
        [HttpPost]
        [Route("POST")]
        public HttpResponseMessage Post(AppointmentVM item)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
            }
            try
            {
              var response=  AppointmentsBusinessManager.Save(item);

                return Request.CreateResponse(response.Success ? HttpStatusCode.OK : HttpStatusCode.BadRequest, response);
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        /// <summary>
        /// updating Appointment information except the Attendees you can use EmployeeAppointmentsActionsController/post or 
        /// EmployeeAppointmentsActionsController/put
        /// </summary>
        /// <param name="id"></param>
        /// <param name="item"></param>
        /// <returns></returns>
        [ResponseType(typeof(void))]
        [Route("Put")]
        [HttpPut]

        public IHttpActionResult Put(int id, AppointmentVM item)
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
                AppointmentsBusinessManager.Update(item);
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
        /// Delete the appointment by id "soft deletion"
        /// 200 if ok , 400 if bad request
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("Delete")]
        public IHttpActionResult Delete(long id)
        {
            var item = AppointmentsBusinessManager.GetVMById(id);
            if (item == null)
            {
                return NotFound();
            }
            try
            {
                AppointmentsBusinessManager.DeleteSoftly(id);

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