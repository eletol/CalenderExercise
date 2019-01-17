using System.ComponentModel.DataAnnotations.Schema;

namespace XYZ.DAL.Models
{
   
    public class EmployeeAppointment : EntityBase
    {
        /// <summary>
        /// Appointment id
        /// </summary>
        [ForeignKey("Appointment")]
        public int AppointmentId { get; set; }

        /// <summary>
        /// EmployeeId
        /// </summary>
        [ForeignKey("Employee")]
        public int EmployeeId { get; set; }
        public Appointment Appointment { get; set; }
        public Employee Employee { get; set; }

    }



}