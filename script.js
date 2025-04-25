const images = [
  {
    url: "../IMG_6229.jpg",
    link: "../IMG_6229.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6454.jpg",
    link: "../IMG_6454.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../Mesa de trabajo 1.png",
    link: "../IMG_6247.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6237.jpg",
    link: "../IMG_6237.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6272.jpg",
    link: "../IMG_6272.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6280.jpg",
    link: "../IMG_6280.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6295.jpg",
    link: "../IMG_6295.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6296.jpg",
    link: "../IMG_6296.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6297.jpg",
    link: "../IMG_6297.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6247.jpg",
    link: "../IMG_6247.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6239.jpg",
    link: "../IMG_6239.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6250.jpg",
    link: "../IMG_6250.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6268.jpg",
    link: "../IMG_6268.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6273.jpg",
    link: "../IMG_6273.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6277.jpg",
    link: "../IMG_6277.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6298.jpg",
    link: "../IMG_6298.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6349.jpg",
    link: "../IMG_6349.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6348.jpg",
    link: "../IMG_6348.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6322.jpg",
    link: "../IMG_6322.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6323.jpg",
    link: "../IMG_6323.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6389.JPEG",
    link: "../IMG_6389.JPEG",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6390.JPEG",
    link: "../IMG_6390.JPEG",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6391.JPEG",
    link: "../IMG_6391.JPEG",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6448.jpg",
    link: "../IMG_6448.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6449.jpg",
    link: "../IMG_6449.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6450.jpg",
    link: "../IMG_6450.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6451.jpg",
    link: "../IMG_6451.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6452.jpg",
    link: "../IMG_6452.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6281.jpg",
    link: "../IMG_6281.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6453.jpg",
    link: "../IMG_6453.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6454.jpg",
    link: "../IMG_6454.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6455.jpg",
    link: "../IMG_6455.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
  {
    url: "../IMG_6456.jpg",
    link: "../IMG_6456.jpg",
    alt: "Parisian cafe terrace",
    class: "slower",
  },
];

function createImageGallery() {
  const wrapper = document.querySelector(".horizontal-scroll-wrapper");
  wrapper.innerHTML = ""; // Clear existing content

  images.forEach((image) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.className = `img-wrapper ${image.class}`;

    const link = document.createElement("a");
    link.href = image.link;
    link.target = "_blank";
    link.rel = "noopener";

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;

    link.appendChild(img);
    imgWrapper.appendChild(link);
    wrapper.appendChild(imgWrapper);
  });
}

// Initialize the gallery when the page loads
document.addEventListener("DOMContentLoaded", createImageGallery);
