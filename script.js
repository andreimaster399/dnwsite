// Вставьте ссылку на фото между кавычками в следующей строке.
const PHOTO_URL = "https://i.oneme.ru/i?r=B09HQN0Qr3SEKX3_pN27w6-CEjBiettog6jGti9uUc0yRwd2wHg1bw9SyM7Nrp0rW4BGw1tcaYwjGUFJImwR8Zfs7Ecm6EZrQlSAJiYgD0o&expires=1795815431565&fn=w_480";
// Ссылки для кнопок задаются в href соответствующих элементов в index.html.
for (const id of ["download-link", "source-link"]) {
  const link = document.getElementById(id);
  const url = link.getAttribute("href")?.trim();
  if (url && url !== "#") {
    link.removeAttribute("aria-disabled");
  } else {
    link.addEventListener("click", (event) => event.preventDefault());
  }
}

const photo = document.getElementById("hero-photo");
const placeholder = document.getElementById("photo-placeholder");
const brandPhoto = document.getElementById("brand-photo");
const brandPlaceholder = document.getElementById("brand-placeholder");

if (PHOTO_URL.trim()) {
  photo.addEventListener("load", () => {
    photo.hidden = false;
    placeholder.hidden = true;
  });

  photo.addEventListener("error", () => {
    photo.hidden = true;
    placeholder.hidden = false;
  });

  photo.src = PHOTO_URL.trim();

  brandPhoto.addEventListener("load", () => {
    brandPhoto.hidden = false;
    brandPlaceholder.hidden = true;
  });

  brandPhoto.addEventListener("error", () => {
    brandPhoto.hidden = true;
    brandPlaceholder.hidden = false;
  });

  brandPhoto.src = PHOTO_URL.trim();
}
