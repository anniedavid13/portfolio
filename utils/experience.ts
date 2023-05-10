export interface ExperienceDataTypes {
    title: string;
    link: string;
    place: string;
    time: string;
    type: string;
    workdone: {
      id: number;
      desc:  string;
    }[];
  }
  
  export const experienceData: ExperienceDataTypes[] = [
    {
      title: 'Software Developer Intern',
      link: 'https://drive.google.com/file/d/1qR9KgsENrVfMezv2_fJRsbf_3o5utULZ/view',
      place: `School of Computer Science Engineering & Technology, Bennett University, Greater Noida`,
      time: 'Aug 2022 - Oct 2022',
      type: 'Part-Time',
      workdone: [
        {
          id: 1,
          desc: "Contributed to the development of a Flutter-based web application for the School of Computer Science Engineering Technology designing and implementing various functionalities of the application"
        },
        {
          id: 2,
          desc: 'Designed the UI/UX of the application, developing it in Flutter to ensure a seamless and visually appealing user experience',
        },
        {
            id: 3,
            desc: 'Developed the Teacher-Course preference page, which includes advanced features such as drop-down and drag-and-drop functionality, improving the application’s usability and functionality',
          },
          {
            id: 4,
            desc: 'Integrated APIs into the web application, ensuring seamless communication and data exchange between the front-end and back-end of the application',
          },
          {
            id: 5,
            desc: 'Tested and debugged various features and functionalities of the application to ensure optimal performance and user satisfaction.',
          },
      ],
    },

  ];
  