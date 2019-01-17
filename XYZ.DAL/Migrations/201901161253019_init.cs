namespace XYZ.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Appointments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false),
                        Subject = c.String(),
                        OrganizerId = c.Int(nullable: false),
                        CreationDate = c.DateTime(),
                        LastUpdate = c.DateTime(),
                        IsDeleted = c.Boolean(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Employees", t => t.OrganizerId, cascadeDelete: true)
                .Index(t => t.OrganizerId);
            
            CreateTable(
                "dbo.EmployeeAppointments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        AppointmentId = c.Int(nullable: false),
                        EmployeeId = c.Int(nullable: false),
                        CreationDate = c.DateTime(),
                        LastUpdate = c.DateTime(),
                        IsDeleted = c.Boolean(),
                        Appointment_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Appointments", t => t.AppointmentId)
                .ForeignKey("dbo.Employees", t => t.EmployeeId)
                .ForeignKey("dbo.Appointments", t => t.Appointment_Id)
                .Index(t => t.AppointmentId)
                .Index(t => t.EmployeeId)
                .Index(t => t.Appointment_Id);
            
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreationDate = c.DateTime(),
                        LastUpdate = c.DateTime(),
                        IsDeleted = c.Boolean(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TagStatus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreationDate = c.DateTime(),
                        LastUpdate = c.DateTime(),
                        IsDeleted = c.Boolean(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Appointments", "OrganizerId", "dbo.Employees");
            DropForeignKey("dbo.EmployeeAppointments", "Appointment_Id", "dbo.Appointments");
            DropForeignKey("dbo.EmployeeAppointments", "EmployeeId", "dbo.Employees");
            DropForeignKey("dbo.EmployeeAppointments", "AppointmentId", "dbo.Appointments");
            DropIndex("dbo.EmployeeAppointments", new[] { "Appointment_Id" });
            DropIndex("dbo.EmployeeAppointments", new[] { "EmployeeId" });
            DropIndex("dbo.EmployeeAppointments", new[] { "AppointmentId" });
            DropIndex("dbo.Appointments", new[] { "OrganizerId" });
            DropTable("dbo.TagStatus");
            DropTable("dbo.Employees");
            DropTable("dbo.EmployeeAppointments");
            DropTable("dbo.Appointments");
        }
    }
}
