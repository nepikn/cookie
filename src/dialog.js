import Cookies from "../node_modules/js-cookie";

export function setupDialog(dialog, consentBtn, denyBtn, resetBtn) {
  if (Cookies.get("consent") != "true") {
    consentBtn.formMethod = "dialog";
    consentBtn.onclick = consent;

    denyBtn.onclick = deny;

    resetBtn.onclick = reset;

    dialog.showModal();
  }
}

function consent() {
  Cookies.set("consent", "true");
}

function deny(e) {
  e.preventDefault();
  location.assign("https://google.com");
}

function reset(e) {
  Cookies.set("consent", "false");
}
