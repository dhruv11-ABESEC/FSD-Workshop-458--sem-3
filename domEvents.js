import { EventEmitter } from "node:events";

function createDOMElement()  {
    const emitter = new EventEmitter();

return {
 
    addEventListener(eventNames, callback) {
       emitter.on(eventName , callback);
    },

    removeEventListener(eventName, callback){
        emiiter.off(eventName, callback);
    },

    dispatchEvent(event) {
    emitter.emit(event.type, event);
    },
  };
}

const button = createDOMElement();
button.addEventListener('click',()=>{
    console.log("button clicked");
})

function handleClick(event) {
    console.log("Second handler:", event.detail);
}

button.addEventListener("click,handleClick");

button.dispatchEvent({
    typr:"click",
    detail:"Hello from node.js",
});

button.removeEventListener("click", handleClick);

function handleclick(event){
    console.log("data saved sucesssfully");
}
button.addEventListener("saved",handleClick); 