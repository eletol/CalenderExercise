using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using XYZ.DAL.Models;

namespace XYZ.BL.ViewModels
{
    public partial class EmployeeAppointmentVM: EntityBaseVM
    {
        /// <summary>
        /// employee id to be in the meeting
        /// </summary>
        public int EmployeeId { get; set; }


    }
}
