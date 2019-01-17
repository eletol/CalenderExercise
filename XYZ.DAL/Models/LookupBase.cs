using System;

namespace XYZ.DAL.Models
{
    public abstract class LookupBase: EntityBase
    {
        public string Name { get; set; }

        protected LookupBase()
        {
            IsDeleted = false;
            CreationDate = DateTime.Now;
            LastUpdate= DateTime.Now;
        }
    }
}