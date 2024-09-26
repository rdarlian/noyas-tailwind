function toggle(id) {
  const item = document.getElementById(id);
  const arrow = document.getElementById(`arrow${id.replace("item", "")}`);

  item.classList.toggle("hidden");

  // Rotate the arrow
  if (!item.classList.contains("hidden")) {
    arrow.style.transform = "rotate(180deg)";
  } else {
    arrow.style.transform = "rotate(0deg)";
  }
}
