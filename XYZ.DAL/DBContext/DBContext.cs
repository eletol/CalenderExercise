using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Data.Entity.Infrastructure.Annotations;
using XYZ.DAL.Models;

namespace XYZ.DAL.DBContext
{
    public partial class DBContext : DbContext, IDbContext
    {
        public DBContext()
            : base("name=XYZEntities")
        {
            this.Configuration.ProxyCreationEnabled = false;
        }
        

        public virtual DbSet<Appointment> Appointments { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<EmployeeAppointment>()
            .HasRequired(c => c.Appointment)
            .WithMany()
            .WillCascadeOnDelete(false);

            modelBuilder.Entity<EmployeeAppointment>()
           .HasRequired(c => c.Employee)
           .WithMany()
           .WillCascadeOnDelete(false);


        }
    }
}
