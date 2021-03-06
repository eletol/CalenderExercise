﻿using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using AutoMapper;
using Newtonsoft.Json;
using XYZ.BL.ViewModels;
using XYZ.DAL.Models;

namespace XYZ.APIs
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configuration.Formatters
                .JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            log4net.Config.XmlConfigurator.Configure();
            Mapper.Initialize(cfg => {
                cfg.CreateMap<Appointment, AppointmentVM>().ReverseMap();
                cfg.CreateMap<Employee, EmployeeVM>().ReverseMap();
                cfg.CreateMap<EmployeeAppointment, EmployeeAppointmentVM>().ReverseMap();

            });

        }
    }
}
