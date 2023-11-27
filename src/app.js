document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Good Day", img: "1.jpg", price: 15000 },
      { id: 2, name: "Kapal Api", img: "2.jpg", price: 20000 },
      { id: 3, name: "Creamy Latte", img: "3.jpg", price: 15000 },
      { id: 4, name: "ABC Susu", img: "4.jpg", price: 15000 },
      { id: 5, name: "Anget Sari", img: "5.jpg", price: 20000 },
    ],
  }));
});
