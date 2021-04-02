// CONTINUE DECOUPLING THHE COMPUTER CLASS

class InputStream{
    tempMemory:any = [];

    input(data:any){
        console.log("inputing data...");
        this.tempMemory.push(data);
    };
}

class DataInputStream extends InputStream{

}

class ComputerStorage{
    memory = [];

    store(data:any){
        console.log("storing data...");
        this.memory.push(data);
    };
}

class CPU{
    process(data:any){
        console.log("processing data...");
        let information = data
        return information;
    };
}

class OutputStream{
    output(data:any){
        console.log("Outputing data...");
        console.log(data);
    };
}

class Computer{
    // Properties
    public inputStream: InputStream;
    public storage: ComputerStorage = new ComputerStorage();
    public processor: CPU = new CPU();
    public outputStream: OutputStream = new OutputStream();

    // Methods
    setInputStream(inputStreamArg:InputStream){
        this.inputStream = inputStreamArg;
    }

}
