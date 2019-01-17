using System;
using System.Linq;
using AutoMapper;
using XYZ.BL.BussinessMangers.Interfaces;
using XYZ.BL.Helper;
using XYZ.BL.ViewModels;
using XYZ.DAL.Models;
using XYZ.DAL.Repository.Interfaces;
using XYZ.DAL.UnitOfWork;

namespace XYZ.BL.BussinessMangers.Classes
{
    public class EmployeesBusinessManager
        <TRepository> : BaseBussinessManger<Employee, TRepository, EmployeeVM>,
            IEmployeesBusinessManager where TRepository : IEmployeesRepository
    {

        public EmployeesBusinessManager(IUnitOfWork unitOfWork) : base(unitOfWork)
        {

        }
        public override BussinessCustomResponse<EmployeeVM> Update(EmployeeVM entityToUpdateVM)
        {
            return base.Update(entityToUpdateVM);
        }


    }
}