let screen = document.getElementById("outputscreen");

function display(value) {
  screen.value += value;
}

function Clear() {
  screen.value = "";
}

function deleteChar() {
  screen.value = screen.value.slice(0, -1);
}

function Calculate() {
  try {
    screen.value = eval(screen.value); 
  } catch (error) {
    screen.value = "Error";
  }
}

