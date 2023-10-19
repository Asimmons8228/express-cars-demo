const cars = [
  {
    id: 0,
    year: "2020",
    make: "Mercedes",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isUsed: false,
  },
  {
    id: 1,
    year: "2023",
    make: "Chevorlet",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isUsed: false,
  },
  {
    id: 2,
    year: "2023",
    make: "Porsche",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isUsed: true,
  },
];

const getAll = () => {
  return cars;
};

module.exports = {
  getAll,
};
