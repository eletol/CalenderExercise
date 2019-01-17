using XYZ.DAL.DBContext;
using XYZ.DAL.Models;

namespace XYZ.DAL.Collections.Interfaces
{
    interface IEmployeesCollection : IBaseCollection<Employee, IDbContext>
    {
    }
}
