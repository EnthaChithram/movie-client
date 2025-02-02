const movies = [
  {
    id: "tt27540542",
    name: "Lucky Baskhar",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjEzN2ZjYjUtZTI3NC00MzMyLWJiNDAtMDBiZGEzNTBiY2RkXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt12735488",
    name: "Kalki 2898 AD",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt33291871",
    name: "Mathu Vadalara 2",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTU4ZWRlYTUtNGY0Yy00NDNjLThlNzQtY2M1NDNiOWM5MWJkXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt26655108",
    name: "The Family Star",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjUyZjdmYjMtODgxNC00NGQxLWFkNjEtNDQ4M2ZhN2ZiZGVmXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt14564000",
    name: "Guntur Kaaram",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjA3NTExNzMtNjA2Ny00NTFiLWFlNDctMjdiODliY2Y5ZThiXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt16539454",
    name: "Pushpa: The Rule - Part 2",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWU1ZWFhNGQtZDhlZC00ZWFlLTlmNmEtN2VmYmZiN2Y5ZmQ2XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt15433956",
    name: "Hanu Man",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYmI0MDdhYzYtZDg3Mi00ODI2LTk0OTgtZDg4ZDUzNWZjYjMzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt11821912",
    name: "Devara Part 1",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzUwZTM1ZDEtZGViOC00YmUxLWEwNWQtNGIyMzE2NWZkYzUyXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt26903104",
    name: "Saripodhaa Sanivaaram",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzM5MmFmYTMtNWFlYi00NjJiLWJkYmMtZGQzMWE3YmVlNjc2XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt28282872",
    name: "Mr. Bachchan",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDU0YzM2ZmUtMmQyMC00YjQ3LThjMjYtNTBhZTFmYWQ5MWEwXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt28074691",
    name: "Eagle",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTU5MmE1Y2EtMTIyYy00NjQ4LTgzM2ItZTE2NWU0NjMzMjlhXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt27611340",
    name: "Bachhala Malli",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTgyYjk5YzMtMjA0Yi00MzIzLWE3NTQtMzQyMGFmYmNlZDI4XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt27191250",
    name: "Mechanic Rocky",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMwMWQxOGEtNWQwNS00OGYxLThjYTYtZjU4MjI0YzJmNjkzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt22987820",
    name: "Tillu Square",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTYyZGUyMzktMzhmMi00MjRjLThlMjUtZmRjMjdmNzQ2OWQ5XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt27757690",
    name: "Zebra",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmJmNjI1NDUtOGI2MC00MmVkLThjN2YtOTQ1MGFhZWNkOTRiXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt28351127",
    name: "Swag",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzOGE3MTctN2VlZi00ZWFlLThlYjQtYmM3NDdmOWQ3ZmNiXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt33496202",
    name: "Ramnagar Bunny",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2Q4NTZhNDEtOGFlMC00YzNmLThlZGMtNDcwYzgyNTRlODYxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt28258888",
    name: "Matka",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmM3YzFlZGYtZGFiZS00OWUwLTlmMzItOTEyMTJhMTUwNTk1XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt29959142",
    name: "Committee Kurrollu",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGFmNWE0ZjMtZDFlNy00YzY1LThlZDItZThmNTg3YjRjN2E0XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt32887285",
    name: "KA",
    year: "2024",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGE2ZmUwM2UtNmJmZS00OWMyLTk5NTAtZGZjY2MyYzY2ZGRiXkEyXkFqcGc@._V1_SX300.jpg",
  },
];

export default movies;
