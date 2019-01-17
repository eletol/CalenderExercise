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
    public class AppointmentsBusinessManager
        <TRepository> : BaseBussinessManger<Appointment, TRepository, AppointmentVM>,
            IAppointmentsBusinessManager where TRepository : IAppointmentsRepository
    {

        public AppointmentsBusinessManager(IUnitOfWork unitOfWork) : base(unitOfWork)
        {

        }
        public override BussinessCustomResponse<AppointmentVM> Update(AppointmentVM entityToUpdateVM)
        {
            return base.Update(entityToUpdateVM);
        }


    }
}