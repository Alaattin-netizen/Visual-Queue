const enqueue = document.querySelector(".enqueue");
const dequeue = document.querySelector(".dequeue");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".queueBucket");
const input = document.querySelector(".input");
const info = document.querySelectorAll(".info");
const queue = [];

info[4].innerHTML = "0";

const buttonDisable = () => {
    enqueue.disabled = true;
    enqueue.classList.add("disable-button");
    dequeue.disabled = true;
    dequeue.classList.add("disable-button");
    reset.disabled = true;
    reset.classList.add("disable-button");
    input.disabled = true;
};


const buttonEnable = () => {
    enqueue.disabled = false;
    enqueue.classList.remove("disable-button");
    dequeue.disabled = false;
    dequeue.classList.remove("disable-button");
    reset.disabled = false;
    reset.classList.remove("disable-button");
    input.disabled = false;
};

dequeue.addEventListener("click", () => {

    
    if (queue.length !== 0) {
       

   

    
    buttonDisable();

      bucket.firstElementChild.classList.add('ele-delete');

    setTimeout(() => {
      

        
        
        bucket.removeChild(bucket.firstElementChild);

        
        const itemValue = queue.shift();

       
        info[0].innerHTML = itemValue;

        
        if (queue.length == 0) {
            info[2].innerHTML = "";
            info[3].innerHTML = "";
        } else {
            info[2].innerHTML = queue[0];
        }
        info[4].innerHTML = queue.length; 
      
        // Enable all buttons
        buttonEnable();
    }, 500);
}});

reset.addEventListener("click", () => {

    
    while (queue.length > 0) {
        queue.pop();
    }

    
    info[0].innerHTML = "";
    info[1].innerHTML = "";
    info[2].innerHTML = "";
    info[3].innerHTML = "";
    info[4].innerHTML = "0";

  
    while (bucket.firstChild) {
        bucket.removeChild(bucket.firstChild);
    }
});

enqueue.addEventListener("click", () => {

    if(input.value!="" && queue.length !== 4){
    const itemValue = input.value;
    queue.push(itemValue); 
    info[4].innerHTML = queue.length;  

    



    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = queue[queue.length - 1];
    bucket.appendChild(element);

    //top
    if(queue.length==1){
    info[2].innerHTML = queue[0];
    }
    //bottom
    info[3].innerHTML = queue[queue.length - 1];
    input.value = "";

    void element.offsetWidth;

    element.classList.add("ele-add");
    
  


    
    buttonDisable();
info[1].innerHTML = itemValue;
    
    setTimeout(() => {
                buttonEnable();
        }, 500);
}});

