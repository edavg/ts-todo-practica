class Sorteo<T>{
    private ticket?: T;

    constructor(
        private nombre: string
    ) {}

    setTicket(ticket: T){
        this.ticket = ticket
    }
    getTicket(){
        return this.ticket
    }

    public sortear():string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}


let sorteo = new Sorteo<number>("Eduardo")
sorteo.setTicket(Math.random()*100)
console.log(sorteo.sortear())