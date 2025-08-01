function copyNotes() {
    const textArea = document.querySelector("textarea");
    textArea.select();
    document.execCommand("copy");
    alert("Notes copied to clipboard!");
  }
  