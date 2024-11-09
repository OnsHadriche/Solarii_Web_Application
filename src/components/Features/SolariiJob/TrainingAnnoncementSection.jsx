import AnnoncementWithPagination from "./AnnoncementWithPagination";

const TrainingAnnoncementSection = () => {
  const allAvailableTraining = [
    {
      _id: "123456789",
      title: "Formation Energie renouvelables",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      society: {
        name: "Elite society",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      _id: "123456781",
      title: "Formation energie solaire",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      society: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      _id: "123456782",
      title: "Formation electrique",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      society: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      _id: "123456783",
      title: "Formation couplage",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      society: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      _id: "123456784",
      title: "Formation PV",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      society: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
  ];

  return (
    <>
      <AnnoncementWithPagination itemsPerPage={10} data={allAvailableTraining} />
    </>
  );
};

export default TrainingAnnoncementSection;
