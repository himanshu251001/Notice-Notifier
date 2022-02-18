function showNotification(){
    const notification=new Notification("NEW UPDATE",
    {
        body:"THERE IS A NEW UPDATE FROM COLLEGE"
    });

notification.onclick =(e)=>{
    window.location.href="https://www.soa.ac.in/iter";
};
}
console.log(Notification.permission);
    if(Notification.permission==="granted"){
showNotification();}
else if(Notification.permission!=="denied"){
    Notification.requestPermission().then(permission=>{
        showNotification();
    });
}
