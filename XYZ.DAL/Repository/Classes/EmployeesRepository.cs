using XYZ.DAL.Collections.Classes;
using XYZ.DAL.DBContext;
using XYZ.DAL.Models;
using XYZ.DAL.Repository.Interfaces;

namespace XYZ.DAL.Repository.Classes
{
    public class EmployeesRepository : BaseRepository<EmployeesCollection, Employee>, IEmployeesRepository
    {
        public EmployeesRepository(IDbContext context) : base(context)
        {
            Context = context;

        }

        public IDbContext Context { get; set; }
    }
}