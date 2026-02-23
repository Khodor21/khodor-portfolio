export function slugify(text) {
  return text
    .normalize("NFC")
    .toString()
    .replace(/[^\w\u0600-\u06FF]+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
    .toLowerCase();
}
