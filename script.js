// Get saved payments or start empty
function getPayments() {
    return JSON.parse(localStorage.getItem("payments")) || [];
  }
  
  function savePayments(payments) {
    localStorage.setItem("payments", JSON.stringify(payments));
  }
  
  // Handle form submission (only runs on index.html)
  const form = document.getElementById("paymentForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const payment = {
        date: document.getElementById("date").value,
        name: document.getElementById("name").value,
        value: document.getElementById("value").value
      };
  
      const payments = getPayments();
      payments.push(payment);
      savePayments(payments);
  
      form.reset();
      alert("Payment added!");
    });
  }
  
  // Display table (only runs on view.html)
  const table = document.getElementById("paymentsTable");
  if (table) {
    const payments = getPayments();
  
    payments.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.date}</td>
        <td>${p.name}</td>
        <td>$${Number(p.value).toFixed(2)}</td>
      `;
      table.appendChild(row);
    });
  }
  