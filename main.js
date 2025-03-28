// Event listener used to update the preview when the "markdown-content" textarea changes.
document
  .getElementById("markdown-content")
  .addEventListener("input", function () {
    // Get references to the elements.
    const markdownContent = document.getElementById("markdown-content");
    const htmlPreview = document.getElementById("html-preview");

    // Set the innerHTML of the "html-preview" element to the parsed markdown content.
    htmlPreview.innerHTML = marked.parse(markdownContent.value);
  });

const editorMode = document.getElementById("editor-mode");

editorMode.addEventListener("click", function () {
  // Toggle the presence of the class "distraction-free" on the element with the id "editor".
  const editor = document.getElementById("main");
  editor.classList.toggle("full-screen");
  editorMode.textContent = editor.classList.contains("full-screen")
    ? "Large Screen"
    : "Small Screen";
});
