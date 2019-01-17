namespace XYZ.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class titleadding : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Appointments", "Title", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Appointments", "Title");
        }
    }
}
