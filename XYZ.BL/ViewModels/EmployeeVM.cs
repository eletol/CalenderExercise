using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using XYZ.DAL.Models;

namespace XYZ.BL.ViewModels
{
    public partial class EmployeeVM: EntityBaseVM
    {
        public string Name { get; set; }


    }
}
