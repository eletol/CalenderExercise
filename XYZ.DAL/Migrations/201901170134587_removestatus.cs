namespace XYZ.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removestatus : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.TagStatus");
        }
        
        public override void Down()
        {
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
    }
}
