// Check if the browser supports the Battery API
window.onload = () => {
  if (navigator.getBattery) {
    console.log('Possilbe');
  } else {
    // if battery API is not working
    console.log('Impossilbe');
    alert('Battery API is not working');
  }
};