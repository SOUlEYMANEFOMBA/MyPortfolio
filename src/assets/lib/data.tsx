import kafka from "../../assets/icons/apacheKafka.svg";
import cassandra from "../../assets/icons/Cassandra.svg";
import docker from "../../assets/icons/Docker.svg";
import postgres from "../../assets/icons/PostgresSQL.svg";
import airflow from "../../assets/icons/ApacheAirflow.svg";
import spark from "../../assets/icons/sparkicon.svg";
import powerBi from "../../assets/icons/powerBiicon.svg";
import vegalite from "../../assets/icons/vegalite.svg";
import excel from "../../assets/icons/excelicon.svg";
import bigQuery from "../../assets/icons/google_bigquery-ar21.svg";
import lookerStudio from "../../assets/icons/looker.png";
import java from "../../assets/icons/Java.svg";
import aws from "../../assets/icons/awsicon.svg";
import mysql from "../../assets/icons/MySQL.svg";
import python from "../../assets/icons/Python.svg";
import tastyMockup from "../../assets/img/data_engineering_architecture_kafka.png";
import instorMockup from "../../assets/img/dashboard.png";
import silentmoonMockup from "../../assets/img/ETL_process.png";
import profilepicture from "../img/me2.png";
import droneDeliveryMockup from "../../assets/img/drone_dashboard.png";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    fr: "Salut, je suis Souleymane",
    en: "Hi, I'm Souleymane",
  },
  subtitle: "Data Engineer & Analyst",
  description: {
    de: "J’ai contribué à des projets analytiques pour des organisations comme LafargeHolcim ou CGI, en structurant des bases de données, automatisant des processus ETL, et développant des dashboards opérationnels.Je m'attache particulièrement à la qualité des données, à la fiabilité des traitements et à la clarté des livrables.Compétent en SQL, Power BI, Python, je fais le lien entre enjeux métiers et exigences techniques ou réglementaires.",
    en: "I've contributed to analytical projects for organizations like LafargeHolcim and CGI, structuring databases, automating ETL workflows, and building operational dashboards.I'm especially focused on data quality, processing reliability, and clarity of deliverables.Skilled in SQL, Power BI, and Python, I thrive at the intersection of business needs and technical or regulatory requirements.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        fr: "Conctact moi",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        fr: "Mes Projects",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  // <> First projet start here</>
  {
    title: "Pipeline de Streaming de Données",
    description:
      "Ce projet implémente un pipeline de streaming de données qui utilise Apache Spark pour traiter des données en temps réel à partir d'Apache Kafka et les insérer dans une base de données Cassandra. Le pipeline est conçu pour la tolérance aux pannes et est capable de gérer des flux continus de données provenant de Kafka tout en garantissant que les données sont correctement transformées et stockées dans Cassandra",
    description_EN:
      "This project implements a data streaming pipeline that uses Apache Spark to process real-time data from Apache Kafka and insert it into a Cassandra database. The pipeline is designed for fault tolerance and can handle continuous data streams from Kafka, ensuring that data is properly transformed and stored in Cassandra.",
    technologies: [
      { name: "Cassandra", icon: cassandra },
      { name: "Airflow", icon: airflow },
      { name: "Kafka", icon: kafka },
      {name: "Spark", icon: spark},
      {name: "Docker", icon: docker}
    ],
    image: tastyMockup,
    githuburl: "https://github.com/SOUlEYMANEFOMBA/Data-Streaming-Pipeline-Using-Kafka-Spark-Cassandra-Airflow",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  // <> First projet end here</>

  // <> second projet start here</>
  {
    title: "Construction des pipelines de données ETL",
    description:
      " En tant qu'ingénieur données dans une société de conseil en analyse de données. J'ai été en chargé d'un projet visant à décongestionner les routes nationales en analysant les données de trafic routier des différentes gares de péage. Chaque autoroute est exploitée par un  opérateur de péage différent avec une configuration informatique  différente qui utilise des formats de fichiers différents. Le travail consiste à collecter des données disponibles dans différents formats et à les consolider dans un seul fichier.", 
    description_EN:
      "As a data engineer in a data analytics consulting firm, I was responsible for a project aimed at alleviating congestion on national roads by analyzing traffic data from various toll stations. Each highway was operated by a different toll operator, each with its own IT configuration and unique file formats. The task involved collecting data available in these various formats and consolidating it into a single unified file.",
    technologies: [
      { name: "Airflow", icon: airflow },
      { name: "Docker", icon: docker},
      {name : "PostgresSQL", icon: postgres}
    ],
    image: silentmoonMockup,
    githuburl:
      "https://github.com/SOUlEYMANEFOMBA/Build-ETL-Data-Pipelines-with-PythonOperator-using-Apache-Airflow",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },

  },
   // <> second projet end here</>
  // <> third projet start here</>
  {
    title: "Mise en Place d'un Dashboard",
    description:
      "Analyse des parties d'échecs du DevFest : étude des facteurs déterminants du classement des joueurs et création d'un tableau de bord interactif permettant le suivi et l'analyse des performances individuelles et collectives.",
    description_EN:
      "DevFest Chess Game Analysis: identifying ranking factors and developing an interactive dashboard for tracking and analyzing individual and group performance.",
    technologies: [
      { name: "PowerBi", icon: powerBi },
      {name : "Vegalite", icon:vegalite}
    ],
    image: instorMockup,
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
  title: "Pipeline d’Analyse de Livraison par Drone",
  description:
    "Conception d’une architecture de traitement batch avec Apache Spark pour extraire, transformer et analyser les données de livraison par drone. Création de tableaux de bord pour visualiser les performances, les retards, et les zones d’activité.",
  description_EN:
    "Drone Delivery Analytics Batch Pipeline: built an Apache Spark-based ETL pipeline to process drone delivery data, creating dashboards to visualize performance, delays, and coverage areas.",
  technologies: [
     {name: "Spark", icon: spark},
    {name: "Docker", icon: docker},
    { name: "Python", icon: python },
    {name:"BigQuery", icon: bigQuery},
    {name: "Looker-Studio", icon: lookerStudio},
  ],
  image: droneDeliveryMockup,
  githuburl: "https://github.com/SOUlEYMANEFOMBA/Drone-Delivery-Analytics-Spark-Batch-Processing-Pipeline",
  githubicon: FiGithub,
  deploymenticon: FiLink,
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
    projectcolor: "#4A90E2"
  },
},

  // <> third projet end here</>
] as const;

export const liveTickerData = {
  content: {
    fr: "Plus de project sur Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Data Engineering",
    skills: [
      {
        title: "Kafka",
        hash: "#Kafka",
        icon: kafka,
        color: "#449C45",
      },
      {
        title: "Spark",
        hash: "#Spark",
        icon: spark,
        color: "#449C45",
      },
      
      {
        title: "Cansandra",
        hash: "#Cassabdra",
        icon: cassandra,
        color: "#449C45",
      },
      {
        title: "JAVA",
        hash: "#JAVA",
        icon: java,
        color: "#449C45",
      },

      {
        title: "Docker",
        hash: "#Docker",
        icon: docker,
        color: "#449C45",
      },
      {
        title: "AWS",
        hash: "#AWS",
        icon: aws,
        color: "#449C45",
      },
      {
        title: "Apache Airflow",
        hash: "#Airflow",
        icon: airflow,
        color: "#449C45",
      },
      {
        title: "PostgresSQL",
        hash: "#PosgresSQL",
        icon: postgres,
        color: "#449C45",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: python,
        color: "#449C45",
      },
      
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Data Analyst",
    skills: [
      { title: "PowerBi", hash: "#PowerBi", icon: powerBi, color: "#F24E1E" },
      {
        title: "MySQL",
        hash: "#sql",
        icon: mysql,
        color: "#FF61F6",
      },
      { title: "Python", hash: "#Python", icon: python, color: "#00C4CC" },
      { title: "Excel", hash: "#Excel", icon: excel, color: "#00C4CC" },
      { title: "VegaLite", hash: "#VegaLite", icon: vegalite, color: "#00C4CC" },
    ],
  },
] as const;

export const navLinks = [
  { fr: "Home", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Compétences", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Expériences", en: "Experiences", hash: "#experiences", icon: GoPerson },
  { fr: "Projects", en: "Projects", hash: "#projects", icon: GoProject },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { fr: "Impression", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { fr: "Confidentialité", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:souleymanefmb@gmail.com",
  text: "souleymanefmb@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/souleymane-fomba-b249131b9/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/SOUlEYMANEFOMBA",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:souleymanefmb@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    fr: `"Les données sont le nouveau pétrole. Mais comme le pétrole, les données doivent être raffinées pour devenir utiles."`,
    en: `"Data is the new oil. But like oil, data must be refined to be useful."`,
    author: "D. J. Patil",
  },
  {
    fr: '"Je suis actuellement à la recherche de nouvelles opportunités, donc ma boîte de réception est ouverte !"',
    en: `"I am currently looking for new opportunities, so my inbox is open! Whether you have questions or just want to say hello."`,
  },
] as const;

export const aboutMeData = {
  title: "Expérience",
  title_EN: "Experience",
  description: "Un aperçu de mon parcours professionnel",
  description_EN: "An overview of my professional journey",
  paragraphs_DE: [
    {
      title: " Consultant Data & Développeur Big Data",
      company:"@CGI",
      period: "Mars 2024 - Août 2024",
      tasks: [
        "Conception de dashboards dynamiques (Power BI, Vega-Lite, Excel) adaptés aux enjeux opérationnels.",
        "Industrialisation de flux complexes via pipelines automatisés pour données temps réel & volumétriques.",
        "Optimisation de pipelines temps réel avec SQL et Python pour fiabiliser la donnée à la source.",
        "Cadrage technique avec les métiers, traduction des besoins en solutions data concrètes.",
      ],
      icon: hardwareicon,
    },
    {
      title: " Consultant Data & Analyste Statistique",
      company: "LafargeHolcim",
      period: "Avril 2022 - Août 2022",
      topic: "Mise en place d'un modèle de prévision de la demande de ciment pour les prochaines années.",
      tasks: [
        "J'ai réalisé une analyse des données pour identifier les variables et les règles de corrélation, définissant les fondations du modèle de prévision.",
        "J'ai mis en place un modèle économétrique de prévision de la demande en ciment, avec une erreur de précision de moins de 1%.",
        "J'ai été en charge de la mise en place des outils pour évaluer la qualité et la pertinence des données internes et externes, augmentant la précision des prévisions.",
        "J'ai mis en œuvre un processus de mise à jour du modèle, réduisant les erreurs de prévision.",
        "J'ai Développé de KPI métiers et de dashboards interactifs avec R, Python, RShiny pour les départements marketing & logistique.",
        "J'ai Mis en place de rapports automatisés, détection d'anomalies, accompagnement des utilisateurs métier"
      ],
      icon: hardwareicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Consultant Data & Big Data Developer",
      company: "@CGI",
      period: "March 2024 - August 2024",
      tasks: [
          "Designed dynamic dashboards (Power BI, Vega-Lite, Excel) tailored to operational needs.",
          "Industrialized complex data flows via automated pipelines for real-time and volumetric data.",
          "Optimized real-time pipelines using SQL and Python to improve data reliability at the source.",
          "Led technical alignment with business teams, translating needs into concrete data solutions.",
      ],
      icon: hardwareicon,
    },
    {
      title: "Data Consultant & Statistical Analyst",
      company: "@LafargeHolcim",
      period: "April 2022 - August 2022",
      topic: "Development of a cement demand forecasting model for the upcoming years.",
      tasks: [
        "Performed data analysis to identify key variables and correlation rules, laying the groundwork for the forecasting model.",
        "Developed an econometric model to forecast cement demand with a precision error below 1%.",
        "Implemented tools to assess the quality and relevance of internal and external data, improving forecasting accuracy.",
        "Set up an update process for the model, reducing forecast errors over time.",
        "Developed business KPIs and interactive dashboards using R, Python, and RShiny for marketing and logistics departments.",
        "Automated reporting, anomaly detection, and supported business users in adopting the tools.",
      ],
      icon: hardwareicon,
    }
  ],
};

export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Écrivez-moi un message et je vous répondrai.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Votre Nom",
        en: "Your Name",
      },
      type: "text",
      validation: {
        fr: "Veuillez entrer votre nom.",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "Votre Adresse E-Mail",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        fr: "Veuillez entrer votre adresse email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Object",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        fr: "Veuillez écrire votre Object",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Votre Message",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Veuillez écrire votre Message",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyer",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "J'accepte que Souleymane puisse utiliser mes données personnelles (nom et adresse e-mail) pour me contacter.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "En soumettant cette demande, vous reconnaissez avoir pris connaissance de la politique privée",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: " La démonstration en direct ouvrira bientôt. Démarrage des serveurs...",
    en: " The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "Merci pour votre e-mail. Je vous répondrai dès que possible.",
    en: "Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    fr: "Malheureusement, l'envoi de votre e-mail n'a pas fonctionné. Veuillez réessayer plus tard.",
    en: "Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    f: "Veuillez entrer votre Nom",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
