const loadUsers = () =>{
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => displayUsers(data))
}
loadUsers();

const displayUsers = data => {
    const users = data.results;
const usersDiv = document.getElementById("users-div");
    users.forEach(user => {
        usersDiv.innerHTML = `
        <h3>name: ${user.name.first} ${user.name.last}</h3>
        <img class="img" src = "${user.picture.large}">
        <h3>email: ${user.email}</h3>
        <h3>cell: ${user.cell}</h3>
        <h3>location: ${user.location.street.number} ${user.location.street.name} </h3>
        `
    })
}
