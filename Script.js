function saveData() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const user = {
    name: name,
    age: age
  };

  const jsonString = JSON.stringify(user);
  localStorage.setItem("userInfo", jsonString);

  alert("User info saved!");
}
function loadData() {
  const data = localStorage.getItem("userInfo");

  if (data) {
    const user = JSON.parse(data);
    document.getElementById("output").textContent = `Hello ${user.name}, you are ${user.age} years old.`;
  } else {
    document.getElementById("output").textContent = "No data found.";
  }
}