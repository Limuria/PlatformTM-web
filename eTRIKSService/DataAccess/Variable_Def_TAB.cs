//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace eTRIKSService.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class Variable_Def_TAB
    {
        public Variable_Def_TAB()
        {
            this.Derived_Variable_Map_TAB = new HashSet<Derived_Variable_Map_TAB>();
            this.Derived_Variable_Map_TAB1 = new HashSet<Derived_Variable_Map_TAB>();
            this.Variable_Ref_TAB = new HashSet<Variable_Ref_TAB>();
        }
    
        public string datasetId { get; set; }
        public string variableId { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string dataType { get; set; }
        public string studyId { get; set; }
        public Nullable<bool> isCurated { get; set; }
        public string variableType { get; set; }
        public string role { get; set; }
    
        public virtual ICollection<Derived_Variable_Map_TAB> Derived_Variable_Map_TAB { get; set; }
        public virtual ICollection<Derived_Variable_Map_TAB> Derived_Variable_Map_TAB1 { get; set; }
        public virtual Derived_Variable_Method_TAB Derived_Variable_Method_TAB { get; set; }
        public virtual ICollection<Variable_Ref_TAB> Variable_Ref_TAB { get; set; }
    }
}
