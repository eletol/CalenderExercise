using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using XYZ.DAL.Models;

namespace XYZ.BL.ViewModels
{
    public partial class AppointmentVM: EntityBaseVM
    {
        /// <summary>
        /// Date of the Appointment
        /// </summary>
        public DateTime Date { get; set; }
        /// <summary>
        ///Details the Appointment
        /// </summary>
        public string Subject { get; set; }
        /// <summary>
        ///Organizer Id
        /// </summary>
        public int OrganizerId { get; set; }
        /// <summary>
        ///Appointment title
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        ///Attendees list
        /// </summary>
        public virtual ICollection<EmployeeAppointmentVM> Attendees { get; set; }


    }
}
