class Person{
    constructor(name,parents){
        this.name = name
        this.parents = parents
    }

    childOf(){
        if(this.parents.length > 0){
            return "My parents are " + this.parents.map(parents => parent.name).join(' & ')
        }else {
            return "Nobody found..."
        }
    }
}

let Susan = new Person('Susan Thomas', [])
let Billy = new Person('Billy Raymond', [])

let John = new Person("John Raymond", [Billy,Susan ])

console.log(John.childOf());