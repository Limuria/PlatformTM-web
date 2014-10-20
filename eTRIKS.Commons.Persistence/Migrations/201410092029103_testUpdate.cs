namespace eTRIKS.Commons.Persistence.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class testUpdate : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "Templates.DomainDataset_TBL", name: "domainName", newName: "Name");
            RenameColumn(table: "Templates.DomainDataset_TBL", name: "repeating", newName: "IsRepeating");
        }
        
        public override void Down()
        {
            RenameColumn(table: "Templates.DomainDataset_TBL", name: "IsRepeating", newName: "repeating");
            RenameColumn(table: "Templates.DomainDataset_TBL", name: "Name", newName: "domainName");
        }
    }
}
