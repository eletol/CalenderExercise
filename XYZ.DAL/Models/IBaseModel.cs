using System;

namespace XYZ.DAL.Models
{
    public  interface IBaseModel
    {
         bool? IsDeleted { get; set; }
         DateTime? CreationDate { get; set; }
         DateTime? LastUpdate { get; set; }
    }
}