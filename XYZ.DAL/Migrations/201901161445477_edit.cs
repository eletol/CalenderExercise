namespace XYZ.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class edit : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.EmployeeAppointments", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.EmployeeAppointments", "Name", c => c.String());
        }
    }
}
