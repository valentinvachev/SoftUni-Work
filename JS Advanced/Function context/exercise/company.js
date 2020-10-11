class Company{
    constructor() {
        this.departments = [];

        return this;
    }

    addEmployee(username,salary,position,department) {
        let arrayArgs = Array.from(arguments);
        if (arrayArgs.includes("") || arrayArgs.length!=4 || arrayArgs.includes(null)) {
            throw new Error("Invalid input!");
        } else if (salary<0) {
            throw new Error("Invalid input!");
        }
        
        let findDepartment = this.departments.find(e=>Object.keys(e)[0]===department);
    
        if (findDepartment!==undefined) {
            findDepartment[department].totalSalary+=salary;
            findDepartment[department].employees.push ({
                username,
                salary,
                position
            });
        } else {
            let newDepartment = {};
            newDepartment[department] = {};
            newDepartment[department].totalSalary = salary;
            newDepartment[department].employees = [];
            newDepartment[department].employees.push ({
                username,
                salary,
                position
            });
            this.departments.push(newDepartment);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }


    bestDepartment() {
        let topDep = this.departments.sort((a,b)=>{
            let objA = a[Object.keys(a)];
            let objB = b[Object.keys(b)];
            let numberEmployeesB = objB.employees.length;
            let numberEmployeesA = objA.employees.length;
           return b.totalSalary/numberEmployeesB - a.totalSalary/numberEmployeesA;
        })[0];

        let topDepName = Object.keys(topDep)[0];
        let objC = topDep[Object.keys(topDep)];
        let totalSalary = topDep[Object.keys(topDep)].totalSalary;
        let numberEmployees = objC.employees.length;
        let avgSalary = totalSalary/numberEmployees;
        
        let dep = topDep[Object.keys(topDep)].employees.sort((a,b)=>{
          return b.salary - a.salary || a.username.localeCompare(b.username);
        });

                
        return `Best Department is: ${topDepName}\nAverage salary: ${avgSalary.toFixed(2)}\n${dep.map(e=>{
           return `${e.username} ${e.salary} ${e.position}`;
        }).join('\n').trim()}`;
    }


}
