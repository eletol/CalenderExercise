using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace XYZ.DAL.Models
{
   
    public class Appointment : EntityBase
    {
        public DateTime Date { get; set; }
        public string Title { get; set; }

        public string Subject { get; set; }
        [ForeignKey("Organizer")]
        public int OrganizerId { get; set; }

        public Employee Organizer { get; set; }
        public virtual ICollection<EmployeeAppointment> Attendees { get; set; }



    }



}