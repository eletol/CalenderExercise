using XYZ.DAL.DBContext;
using XYZ.DAL.Models;

namespace XYZ.DAL.Collections.Interfaces
{
    interface IAppointmentsCollection : IBaseCollection<Appointment, IDbContext>
    {
    }
}
