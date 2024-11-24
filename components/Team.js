/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Team() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    visible: {
      opacity: 1,
      transition: { delay: 0.4, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
    hidden: { opacity: 0, transition: { duration: 0.6 } },
  };

  const teamMembers = [
    {
      img: "https://media.licdn.com/dms/image/v2/C4E03AQHfgthseLIgeQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1634917865333?e=1737590400&v=beta&t=L3l358oyyj2JPe8SBk0xId7c_PGnWKXHc-5R5wjfWYQ",
      name: "Işıl Özgü",
      description: `Işıl is a dedicated Computer Science student at Bilkent University, actively involved in software analytics research. She has contributed to projects like BilSync, a social marketplace for university students. Outside of her academic pursuits, Işıl enjoys exploring new technologies and engaging in collaborative projects.`,
    },
    {
      img: "https://media.licdn.com/dms/image/v2/C4D03AQFKAVqS7sa_lA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649440193142?e=1737590400&v=beta&t=UG5uVAw91PuaFKWz0TdmoHuLC3nC5fjMyNny3hivPTk",
      name: "Hüseyin Burhan Tabak",
      description: `Burhan is a Computer Science student at Bilkent University with a keen interest in software development and analytics. He has worked on projects such as BilSync, aiming to enhance university community interactions. Burhan is passionate about coding and enjoys participating in hackathons and coding competitions.`,
    },
    {
      img: "https://media.licdn.com/dms/image/v2/D4D03AQF-HkFr9ep-Gg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732125497562?e=1738195200&v=beta&t=8C4rCEU6r3SRRiKZt5Fs56ESeB40Z8080JeGKiFpDbg",
      name: "Berkay Gündüz",
      description: `Berkay is a Computer Science student at Bilkent University, focusing on software engineering and development. He has experience in various programming languages and frameworks, contributing to multiple team projects. Berkay is enthusiastic about problem-solving and continuously improving his technical skills.`,
    },
    {
      img: "https://media.licdn.com/dms/image/v2/D4D03AQHpxXi8IBP9rA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719265471886?e=1737590400&v=beta&t=AK5aA7iRhLqUJ5OJgZ0SZswVwecYtNHP1keiO0kxtAk",
      name: "Ulaş Dilek",
      description: `Ulaş is a Computer Science student at Bilkent University with a strong interest in artificial intelligence and machine learning. He has participated in research projects and internships that involve data analysis and AI applications. Ulaş is committed to leveraging technology to solve real-world problems.`,
    },
    {
      img: "https://media.licdn.com/dms/image/v2/D4D03AQELR_Li77Y1yQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672926217010?e=1737590400&v=beta&t=7gq_EbOH3C430f8R5UaH3fP7pyJU1ZkXbjWFSFz0_K0",
      name: "Sertaç Derya",
      description: `Sertaç is a Computer Science student at Bilkent University, specializing in software development and system design. He has been involved in projects that require critical thinking and innovative solutions. Sertaç enjoys collaborating with peers to create impactful software applications.`,
    },
    {
      img: "https://media.licdn.com/dms/image/v2/C5603AQEYoQTc9d-tyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516280847413?e=1737590400&v=beta&t=XUZSwe9-dVtpE8SBEon0czrNj6kCq0jFvRqj3z21FlM",
      name: "Dr. Eray Tüzün",
      description: `Dr. Eray Tüzün is an Assistant Professor at the Computer Engineering Department of Bilkent University. He leads the BILSEN research group, focusing on software analytics and engineering. Dr. Tüzün has supervised numerous graduate and undergraduate students, contributing significantly to the field of software engineering.`,
    },
  ];

  return (
    <div className="mx-auto mt-[8rem] mb-[8rem] flex max-w-7xl flex-col" id="team">
      <div className="flex items-center justify-between">
        <motion.h2
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeIn}
          className="text-3xl lg:text-5xl"
        >
          Meet the team
        </motion.h2>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn}
        className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={member.img} className="h-40 w-40 rounded-full" />
            <h2 className="mt-4 text-lg font-bold">{member.name}</h2>
            <p className="text-md mt-2">{member.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
