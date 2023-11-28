import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

const TrainerPage = () => {
  const [trainerData, setTrainerData] = useState([]);

  useEffect(() => {
    // fetch("/trainersCollection.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setTrainerData(data);
    //   });
    axiosSecure.get("/getTrainersData").then((data) => {
      console.log(data.data);
      setTrainerData(data.data);
    });
  }, []);
  return (
    <section className="services-section p-4 bg-slate-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 bg-orange-500 py-4 rounded-full">
          Our Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainerData.map((trainer, index) => (
            <div
              key={index}
              className="text-white rounded-lg overflow-hidden shadow-md hover:scale-105 border-2 border-orange-500 transition-transform bg-gray-800"
            >
              <img
                src={trainer.image}
                alt={trainer.full_name}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{trainer.full_name}</h3>
                <p className="text-orange-700 mb-4 font-bold text-2xl">
                  {trainer.years_of_experience} Years Of Experience
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <a href={trainer.social_links[0]}>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2xl"
                      ></FontAwesomeIcon>
                    </a>
                    <a href={trainer.social_links[1]}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2xl"
                      ></FontAwesomeIcon>
                    </a>
                    <a href={trainer.social_links[2]}>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="2xl"
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
                    <Link to={`/trainers/${trainer._id}`}>Know More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerPage;