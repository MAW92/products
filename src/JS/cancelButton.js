cancelButton();

function cancelButton() {
  cancelButton.addEventListener('click',() => {
    filterMenu.classList.add('-translate-x-full');
  });
}
