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