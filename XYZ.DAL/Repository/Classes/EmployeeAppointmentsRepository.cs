using XYZ.DAL.Collections.Classes;
using XYZ.DAL.DBContext;
using XYZ.DAL.Models;
using XYZ.DAL.Repository.Interfaces;

namespace XYZ.DAL.Repository.Classes
{
    public class EmployeeAppointmentsRepository : BaseRepository<EmployeeAppointmentsCollection, EmployeeAppointment>, IEmployeeAppointmentsRepository
    {
        public EmployeeAppointmentsRepository(IDbContext context) : base(context)
        {
            Context = context;

        }

        public IDbContext Context { get; set; }
    }
}