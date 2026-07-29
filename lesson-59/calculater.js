const userRoles = {
    "admin": "guest",
    "member": "admin"
};

let activeRole = "member";
let systemGlitch = true; //false krke output bhi predit krna revison ke waqt

let finalRole = systemGlitch ? userRoles[activeRole] : activeRole;
console.log(finalRole);