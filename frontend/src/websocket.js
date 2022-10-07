class Websocketservice{

    static instance = null;
    callbacks={};//to create the fetch messages and
    static getinstance(){
        if(!Websocketservice.instance){
            Websocketservice.instance = new Websocketservice();
            //make sure we have an instance of class
        }
    }

    constructor() {
        this.socketRef =null;
    }
    connect(){
        const path='ws://127.0.0.1:8000/ws/chat/test'; //path to django server
        this.socketRef=new WebSocket(path); //creating our new websocket
        this.socketRef.onopen = () =>{
            console.log('websocket open')
        };
        this.socketRef.onmessage
    }
}