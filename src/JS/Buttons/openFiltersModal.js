function openFiltersModal() {
  const modal=document.getElementById("filtersModal");
  modal.style.display="block";
  modal.classList.add("slide-in");
}
openFiltersModal();
document.getElementById("openButton").addEventListener("click",openFiltersModal);
