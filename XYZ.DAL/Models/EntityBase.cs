using System;
using Newtonsoft.Json;

namespace XYZ.DAL.Models
{
    public abstract class EntityBase: IBaseModel
    {
        public int Id { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? LastUpdate { get; set; }

        public bool? IsDeleted { get; set; }

        public EntityBase()
        {
            CreationDate = DateTime.Now;

            LastUpdate = DateTime.Now;
            IsDeleted = false;

        }
    }
}