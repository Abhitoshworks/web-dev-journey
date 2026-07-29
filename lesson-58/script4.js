const Fireweapon = () =>
    console.log("Bang!");
function trigger(action){
    action();
    action();
}
trigger(Fireweapon);
