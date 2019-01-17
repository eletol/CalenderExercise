using XYZ.DAL.DataSeed;
using System.Data.Entity.Migrations;
using XYZ.DAL.Models;

namespace XYZ.DAL.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<DBContext.DBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DBContext.DBContext context)
        {
    



            context.SaveChanges();
            
            
        }
    }

}