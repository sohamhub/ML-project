document.getElementById("checkBtn").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;

  fetch("http://127.0.0.1:5000/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: inputText })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("output").innerText = data.corrected_text;
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("output").innerText = "Error connecting to server.";
  });
});
