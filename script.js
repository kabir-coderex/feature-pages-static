// modal.js
document.getElementById("wpfnl-openModal").addEventListener("click", function () {
  var modal = document.getElementById("wpfnl-modal");
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("show");
  document.getElementById('wpfnl-modalVideo').focus();
});

document.getElementById("wpfnl-closeModal").addEventListener("click", function () {
  var modal = document.getElementById("wpfnl-modal");
  modal.setAttribute("aria-hidden", "true");
  modal.classList.remove("show");
  document.getElementById("wpfnl-openModal").focus();
});

