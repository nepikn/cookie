import Cookies from "../node_modules/js-cookie";

export function setupDialog(dialog, consentBtn, denyBtn, resetBtn) {
  consentBtn.onclick = consent;
  denyBtn.onclick = deny;
  resetBtn.onclick = reset;

  if (Cookies.get("consent") != "true") {
    dialog.showModal();
  }
}

function consent() {
  Cookies.set("consent", "true");
}

function deny() {
  location.assign("https://google.com");
}

function reset() {
  Cookies.remove("consent");
  location.reload();
}
