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
    public class EmployeeAppointmentsBusinessManager
        <TRepository> : BaseBussinessManger<EmployeeAppointment, TRepository, EmployeeAppointmentVM>,
            IEmployeeAppointmentsBusinessManager where TRepository : IEmployeeAppointmentsRepository
    {

        public EmployeeAppointmentsBusinessManager(IUnitOfWork unitOfWork) : base(unitOfWork)
        {

        }
        public override BussinessCustomResponse<EmployeeAppointmentVM> Update(EmployeeAppointmentVM entityToUpdateVM)
        {
            return base.Update(entityToUpdateVM);
        }


    }
}