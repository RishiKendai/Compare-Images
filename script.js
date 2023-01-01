// ! SELECTORS
// Original Image Input
const original_image = document.querySelector("#original_image_input");
// Comparing Image Input
const image_to_compare = document.querySelector("#comparision_image_input");
// Original Image
const original_img = document.querySelector(".original_image");
// Comparing Image
const comparision_image = document.querySelector(".comparision_image");
const slider = document.querySelector("#range_slider");
const img1_name = document.querySelector("#img-1_name");
const img2_name = document.querySelector("#img-2_name");

// ! VALUES
let original_uploaded = "";
let compareImage_uploaded = "";

// ! INITIAL FUNCTION CALLS
sliderVisibility();

// ! EVENT LISTENERS
// Display Original Image
original_image.addEventListener("change", function (e) {
  // Continue if any image is selected else ignore
  if (e.target.files.length > 0) {
    const reader = new FileReader();
    // load the image once image is selected
    reader.addEventListener("load", () => {
      original_uploaded = reader.result;
      // Set image name once image loaded and limit the name to 25 characters
      img1_name.textContent =
        this.files[0].name.length > 25
          ? this.files[0].name.substring(0, 25) + "..."
          : this.files[0].name;
      // Set the image once image loaded else hide the image
      const original_img = document.querySelector(".original_image");
      if (original_uploaded) original_img.style.display = "block";
      original_img.setAttribute("src", original_uploaded);
    });
    reader.readAsDataURL(this.files[0]);
  }
});

// Display Comparision Image
image_to_compare.addEventListener("change", function (e) {
  // Continue if any image is selected else ignore
  if (e.target.files.length > 0) {
    const reader = new FileReader();
    // load the image once image is selected
    reader.addEventListener("load", () => {
      compareImage_uploaded = reader.result;
      // Set image name once image loaded and limit the name to 25 characters
      img2_name.textContent =
        this.files[0].name.length > 25
          ? this.files[0].name.substring(0, 25) + "..."
          : this.files[0].name;
      // Set the image once image loaded else hide the image
      const comparision_image = document.querySelector(".comparision_image");
      if (compareImage_uploaded) comparision_image.style.display = "block";
      comparision_image.setAttribute("src", compareImage_uploaded);
      sliderVisibility();
    });
    reader.readAsDataURL(this.files[0]);
  }
});

// Moves the slider along with image
slider.addEventListener("input", function () {
  let sliderValue = this.value;
  document.querySelector(
    ".comparision_image"
  ).style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`;
});


// ! FUNCTIONS
// Slider will be displayed once Comparision image is loaded
function sliderVisibility() {
  if (compareImage_uploaded === "") {
    slider.style.display = "none";
  } else {
    slider.style.display = "block";
  }
}

