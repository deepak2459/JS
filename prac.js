// class NotesStore { 
    
//      obj1 = {};
//      names = [];
//     //add your code here 
//     addnotes(name,state){
//         if(name==""){
//             return "name should not be empty"
//              } 
//         if(!(state == "active" ||state == "completed"||state == 'others')){
//             return `invalid state ${state}`
            
            
//         } 
        
//         this.obj1[name]  = state;
//         this.names.push(name);
        
//          } 
         
//     getnotes(){
//         return this.names 
      
//     }
    
// } 


// const s1 =  new NotesStore()
// console.log(s1.addnotes("deepka","active"));
// console.log(s1.addnotes("deepk","active"));
// console.log(s1.addnotes("deepak","active"));
// console.log(s1.getnotes());  



class StaffList {
    //addstaff your code here
    staff = [];
    count = 0;
    add(name,age){
        if(age<=20){
             return "staff age should be more than 20"
        } 
        
        for(let i = 0; i < this.staff.length;i++){
            if(this.staff[i] == name){
                return 
            }
        } 
        this.staff.push(name)
        this.count++
        
    }  
    
    remove(nam){
     for(let i = 0; i < this.staff.length;i++){
            if(this.staff[i] == nam){
                let index = this.staff.indexOf(nam)
                this.staff.splice(index,1)
                  this.count--

                return "name deleted"
            }
        }  
        
        return false
    }
    
    getSize(){
        return this.count
    }
} 


let a = new StaffList()
a.add("deepak",22)
a.add("deep",21)
console.log(a.getSize())
console.log(a.remove("deep"));


