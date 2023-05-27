function closeFiltersModal() {
  const modal=document.getElementById("filtersModal");
  modal.classList.add("slide-out");

  setTimeout(() => {
    modal.style.display="none";
    modal.classList.remove("slide-out");
  },500);
}
closeFiltersModal();
document.getElementById("cancelButton").addEventListener("click",closeFiltersModal);
