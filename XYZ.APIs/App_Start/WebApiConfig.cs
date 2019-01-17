using System.Collections.Generic;
using System.Configuration;
using System.Text.RegularExpressions;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.ExceptionHandling;
using System.Web.Http.OData.Extensions;
using XYZ.APIs.Logging;
using XYZ.DAL.Models;
using Ninject.Activation;
using PayPal.Api;
using Microsoft.Data.OData;
using System.Web.OData.Batch;
using System.Web.OData.Extensions;
using System.Web.OData.Builder;
using XYZ.BL.ViewModels;
using Microsoft.OData.Edm;
using Swashbuckle.Swagger;

namespace XYZ.APIs
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // config.EnableQuerySupport();
            config.Services.Add(typeof(IExceptionLogger), new TraceExceptionLogger());


            config.EnableCors(new EnableCorsAttribute("*", "*", "GET, POST, OPTIONS, PUT, DELETE"));

            config.MapHttpAttributeRoutes();
            // GlobalConfiguration.Configuration.EnableDependencyInjection();
            #region OData Configuration

            //ODataConventionModelBuilder odataBuilder = new ODataConventionModelBuilder();

            //odataBuilder.EntitySet<Admin>("Admins");
            //odataBuilder.EntitySet<AdminClaim>("AdminClaims");
            //odataBuilder.EntitySet<AdminLogin>("AdminLogins");
            //odataBuilder.EntitySet<AdminRole>("AdminRoles");


            //config.Routes.MapODataServiceRoute(
            //routeName: "ODataRoute",
            //routePrefix: "api",
            //model:  GetEdmModel());

            #endregion

            // Web API routes
            config.Count().Filter().OrderBy().Expand().Select().MaxTop(null); //new line

            config.MapODataServiceRoute("odata", null, GetEdmModel(), new DefaultODataBatchHandler(GlobalConfiguration.DefaultServer));

            config.EnsureInitialized();

            config.Routes.MapHttpRoute(
                name: "DefaultApiWithAction",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
            name: "DefaultApi",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { id = RouteParameter.Optional }
        );
        }
        private static IEdmModel GetEdmModel()
        {
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder
            {
                Namespace = "XYZ.APIs",
                ContainerName = "DefaultContainer"
            };
           
            builder.EntitySet<Status>("TagStatuses").EntityType.HasKey(s => s.Id);
            builder.EntitySet<DAL.Models.Appointment>("Appointments").EntityType.HasKey(s => s.Id);
            builder.EntitySet<DAL.Models.Employee>("Employees").EntityType.HasKey(s => s.Id);
            builder.EntitySet<DAL.Models.EmployeeAppointment>("EmployeeAppointments").EntityType.HasKey(s => s.Id);

            var edmModel = builder.GetEdmModel();

            return edmModel;
        }
    }
}