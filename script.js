const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const joinForm = document.querySelector(".join-form");
const formMessage = document.getElementById("form-message");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.tab;

    tabButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    tabPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});

if (joinForm && formMessage) {
  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(joinForm);
    const name = data.get("name");
    const plan = data.get("plan");

    formMessage.textContent = `${name}, your ${plan} Smart Ride subscription request has been captured. Our team will contact you shortly.`;
    formMessage.classList.add("success");
    joinForm.reset();
  });
}
