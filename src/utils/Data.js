import CBS from "../images/cbs.png";
import CURE from "../images/cure.png";
import NBC from "../images/nbc.png";
import TODAY from "../images/Today_logo.svg.png";
import INSIDE from "../images/insider.png";
import INSIDE_EDITION from "../images/inside-edition.png";
import YAHOO from "../images/yahoo.jpeg";
import KAISER from "../images/kaiser.png";
import NIH from "../images/NIH.png";
import MSN from "../images/msn.png";
import SEVEN_NEWS from "../images/7news.png";
import KCCURE from "../images/kccure.png";
import accelerators from "../images/TheAccelerators.jpeg";
import heathlcareUnfiltered from "../images/healthcareUnfiltered.png";
import doctorsArt from "../images/doctorsArt.jpeg";
import BTK from "../images/betweentwokingdoms.jpeg";
import BREATH from "../images/breath.jpeg";
import SHOCK from "../images/shock.jpeg";
import YouJustDontKnow from "../images/YouJustDontKnow.png";
import OncologyUnscripted from "../images/oncology_unscripted.png";
import PatientFromHell from "../images/PatientFromHell.png";
import PENGUIN from "../images/penguin.png";
import TARGET from "../images/target.png";
import BARNES from "../images/barnes.png";
import WALMART from "../images/walmart.png";
import AMAZON from "../images/amazon.png";
import PATIENTS from "../images/patients.png";
import KATIECOURIC from "../images/kcm.jpeg";
import COMMON from "../images/common.png";

export const socialData = (type) => {
  return [
    {
      id: "tiktok",
      title: "TikTok",
      total: "55,000",
      countType: "followers",
      link: "https://www.tiktok.com/@katiekickscancer",
      blurb:
        type === "media"
          ? "Videos posted several times a week. Followers are cancer survivors, caregivers, and supporters."
          : type === "query"
          ? "Over 3M views on the videos that specifically feature or talk about my story. I post videos several times a week here. Followers are cancer survivors, caregivers, and supporters."
          : "Posts several times a week. Patient focused and vlog style content.",
    },
    {
      id: "twitter",
      title: "Twitter",
      total: "12,700",
      countType: "followers",
      link: "https://twitter.com/kaydaustin",
      blurb:
        type === "media"
          ? "Tweet at least once a week. Followers are mostly medical professionals, cancer survivors, caregivers, and supporters."
          : "Tweet at least one a week. Polls, personal updates and retweets of kidney cancer study updates and links to medical articles.",
    },
    {
      id: "instagram",
      title: "Instagram",
      total: "1,680",
      countType: "followers",
      link: "https://www.instagram.com/katiekickscancer/",
      blurb: "Stories posted daily from the day after I was diagnosed.",
    },
    {
      id: "youtube",
      title: "YouTube",
      total: "3,410",
      countType: "subscribers",
      link: "https://www.youtube.com/channel/UCcf5yVgHvI8-__g0RHjfrTw",
      blurb:
        "Videos posted every few months. Patient perspective content on the treatments/proceedures I've had and general updates. YouTube shorts, once a week.",
    },
  ];
};

export const tikTokVideos = () => {
  return [
    {
      id: "tiktok1",
      title: "Arriving at the ER",
      viewCount: "434,900",
      link: "https://www.tiktok.com/embed/7131845393905634602",
    },
    {
      id: "tiktok4",
      title: "No Active Cancer!",
      viewCount: "434,900",
      link: "https://www.tiktok.com/embed/7161238018118962474",
    },
    {
      id: "tiktok2",
      title: "Biopsy Complication Part 2",
      viewCount: "434,900",
      link: "https://www.tiktok.com/embed/7150488325600660779",
    },
    {
      id: "tiktok3",
      title: "Biopsy Complication",
      viewCount: "434,900",
      link: "https://www.tiktok.com/embed/7145649944307993902",
    },
  ];
};

export const youtubeVideos = () => {
  return [
    {
      id: "youtube",
      title: "My Story And What Brought Me to the Rare Cancer Research Foundation",
      viewCount: "150",
      link: "https://www.youtube.com/embed/K97HebR7JPI",
    },
    {
      id: "youtube",
      title: "Too Young For Cancer - Memoir: Chapter 1",
      viewCount: "150",
      link: "https://www.youtube.com/embed/wPZhLBkHhwY",
    },
    {
      id: "youtube",
      title: "What an Open Nephrectomy and Liver Resction Was Like",
      viewCount: "6,500",
      link: "https://www.youtube.com/embed/ZW2-ciZbXtM",
    },
    {
      id: "youtube",
      title: "A Cancer Patient Speaks Candidly With Her Oncologist",
      viewCount: "19,000",
      link: "https://www.youtube.com/embed/Nddft_nc3Yc",
    },
    {
      id: "youtube",
      title: "Chubbyemu's Video On My Story (2.4M Views)",
      viewCount: "2.4M",
      link: "https://www.youtube.com/embed/i9fLEvgZzRE",
    }
  ];
};

export const articles = [
  {
    id: "12",
    image: CURE,
    name: "CURE",
    link: "https://www.curetoday.com/view/can-we-talk-artificial-intelligence-in-the-world-of-cancer-care",
    description: "Article discussing the use of AI in cancer care.",
  },
  {
    id: "11",
    image: CBS,
    name: "CBS Evening News (National)",
    link: "https://twitter.com/cbseveningnews/status/1551702913566871553?lang=en",
    description:
      "Aired on CBS Evening News on July 26, 2022. Clip about sharing my diagnosis with a potential employer.",
  },
  {
    id: "10",
    image: NBC,
    name: "NBC News Article (National)",
    link: "https://www.nbcnews.com/health/health-news/stage-4-kidney-cancer-diagnosis-didnt-stop-young-woman-getting-great-n-rcna31523",
    description:
      "She's 31 and has stage 4 kidney cancer. How she still got a great new job.",
  },
  {
    id: "9",
    image: TODAY,
    name: "Today (Online)",
    link: "https://www.today.com/health/health/kidney-cancer-diagnosis-rcna28501",
    description:
      "Doctors told woman, 29, she was too young for cancer. Then came the 'terrifying diagnosis'",
  },
  {
    id: "8",
    image: INSIDE,
    name: "Inside 1st Article",
    link: "https://www.insider.com/doctors-dismissed-29-year-old-anxiety-stage-4-kidney-cancer-2022-5",
    description:
      "Doctors told a 29-year-old she had anxiety and that she was 'too young for cancer.' She had stage 4 kidney cancer.",
  },
  {
    id: "7",
    image: INSIDE,
    name: "Inside 2nd Article",
    link: "https://www.insider.com/women-with-cancer-dismissed-by-doctors-for-being-too-young-2022-12",
    description:
      "3 women with cancer who were dismissed by doctors for being 'too young'",
  },
  {
    id: "6",
    image: INSIDE_EDITION,
    name: "Insider Edition",
    link: "https://www.insideedition.com/woman-diagnosed-with-kidney-cancer-after-doctors-dismissed-her-symptoms-as-anxiety-74966",
    description:
      "Doctors told a 29-year-old she had anxiety and that she was 'too young for cancer.' She had stage 4 kidney cancer.",
  },
  {
    id: "5",
    image: YAHOO,
    name: "Yahoo News",
    link: "https://www.yahoo.com/now/doctors-told-woman-29-she-161802957.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAG38qkw2fNYic3YIcExxJusccNZWjZZdihbIYLGxfX5t69GIPTNmYaiDSRiOWW-0zaenQnS0aRo1w2XN-6ctqwoADo_oGQRSGgoeoh4ijdV3sKEzoy0lk3WgoYxYQpjdb3LR-cuESzd75uIaQDjsdL9k4H4ya9k3v3qseDaWDL2_",
    description:
      "Doctors told woman, 29, she was too young for cancer. Then came the 'terrifying diagnosis'",
  },
  {
    id: "4",
    image: KAISER,
    name: "Kaiser Health News",
    link: "https://khn.org/news/article/shes-31-has-stage-4-kidney-cancer-and-talked-openly-about-it-in-a-job-interview/",
    description:
      "She’s 31, Has Stage 4 Kidney Cancer — And Talked Openly About It in a Job Interview.",
  },
  {
    id: "3",
    image: NIH,
    name: "NIH / National Institutes of Health",
    link: "https://ccr.cancer.gov/news/article/all-about-the-drive-a-rare-kidney-cancer-meets-its-match-at-nih",
    description:
      "All about the drive: A rare kidney cancer meets its match at NIH",
  },
  {
    id: "2",
    image: MSN,
    name: "MSN News",
    link: "https://www.msn.com/en-us/health/medical/doctors-told-a-29-year-old-she-had-anxiety-and-that-she-was-too-young-for-cancer-she-had-stage-4-kidney-cancer/ar-AAXorMZ",
    description:
      "Doctors told a 29-year-old she had anxiety and that she was 'too young for cancer.' She had stage 4 kidney cancer.",
  },
  {
    id: "1",
    image: SEVEN_NEWS,
    name: "7 News (Australia)",
    link: "https://7news.com.au/lifestyle/health-wellbeing/texas-woman-katie-coleman-cancer-patient-and-advocate-lands-dream-job-c-7058198",
    description:
      "Texas woman Katie Coleman, cancer patient and advocate, lands dream job",
  },
  {
    id: "0",
    image: KCCURE,
    name: "KCCURE",
    link: "https://kccure.org/2021/03/voice-of-kidney-cancer-katie-coleman/",
    description: "Voice of Kidney Cancer – Katie Coleman",
  },
  {
    id: "14",
    image: KATIECOURIC,
    name: "Katie Couric Media",
    link: "https://katiecouric.com/health/cancer/rare-kidney-cancer/",
    description: "She Actually Had One of the Rarest Cancers",
  },
  {
    id: "13",
    image: COMMON,
    name: "Common Wealth Club California",
    link: "https://www.commonwealthclub.org/events/archive/video/innovative-patient-centered-care-cancer",
    description: "Innovative, Patient-Centered Care for Cancer",
  },
];
export const podcasts = (type) => {
  return [
    {
      id: "0",
      name: "The Doctors Art",
      link: "https://www.thedoctorsart.com/episodes/ep27",
      description: `${
        type === "media"
          ? `#3 in most popular medical podcast. Ep. 27: Facing the Rarest of Cancers`
          : `Ep. 27: Facing the Rarest of Cancers`
      }`,
      image: doctorsArt,
    },
    {
      id: "1",
      name: "The Accelerators",
      link: "https://accelerators.buzzsprout.com/1839275/11948820-the-experts-discuss-patients-mental-health-and-mindfulness",
      description: `${
        type === "media"
          ? `Ranked in top 25% of all podcasts. Experts discuss mental health.`
          : `The Experts Discuss Patients’ Mental Health and Mindfulness`
      }`,
      image: accelerators,
    },
    {
      id: "2",
      name: "The Accelerators",
      link: "https://accelerators.buzzsprout.com/1839275/11447574-on-clinical-trials-the-patient-perspective-with-julie-and-katie",
      description:
        "On Clinical Trials: The Patient Perspective With Julie and Katie",
      image: accelerators,
    },
    {
      id: "3",
      name: "The Accelerators",
      link: "https://accelerators.buzzsprout.com/1839275/11673786-on-clinical-trials-patient-education-with-julie-katie-and-david",
      description:
        "On Clinical Trials: Patient Education With Julie, Katie, and David",
      image: accelerators,
    },
    {
      id: "4",
      name: "HealthCare Unfiltered",
      link: "https://podcasts.apple.com/au/podcast/patient-voice-on-social-media-a-survivor-story/id1534737585?i=1000563486434",
      description: "Patient voice on social media - A survivor story",
      image: heathlcareUnfiltered,
    },
    {
      id: "5",
      name: "Patient from Hell",
      link: "https://podcasts.apple.com/us/podcast/episode-28-self-advocacy-in-action-inspiration-from/id1622669098?i=1000614791497",
      description: "Self advocacy in action",
      image: PatientFromHell,
    },
    {
      id: "6",
      name: "You Just Don't Know It Yet",
      link: "https://open.spotify.com/episode/1BBvJxlC3D48AwFT7EAQMF?si=1dabb5cab19c49b1",
      description:
        "Episode 30: Katie Coleman - Stage IV Kidney Cancer Survivor",
      image: YouJustDontKnow,
    },
    {
      id: "7",
      name: "Second Opinions",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/12671236-second-opinions",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "8",
      name: "Oncology Terms: Doctor and Staff Roles and Medical Education",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/12842441-oncology-terms-doctor-and-staff-roles-and-medical-education",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "9",
      name: "Matt Versus ChatGPT",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/13077172-matt-versus-chatgpt",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "10",
      name: "Julie and Katie go to ASCO",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/13165690-julie-and-katie-go-to-asco",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "11",
      name: "The Insider's Guide to Radiation Therapy: Radiation 101, Part 1",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/13386216-the-insider-s-guide-to-radiation-therapy-radiation-101-part-1",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "12",
      name: "The Insider's Guide to Radiation Therapy: Radiation 101, Part 2",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/13419590-the-insider-s-guide-to-radiation-therapy-radiation-101-part-2",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "13",
      name: "The Insider's Guide to Radiation Therapy: SBRT",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/13598072-the-insider-s-guide-to-radiation-therapy-sbrt",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "14",
      name: "The Insider's Guide to Radiation Therapy: Proton Therapy",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/13744725-the-insider-s-guide-to-radiation-therapy-proton-therapy",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "15",
      name: "Immunotherapy: In Conversation with Dr. Breelyn Wilky, MD",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/13995528-immunotherapy-in-conversation-with-dr-breelyn-wilky-md",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "16",
      name: "How To Pick Your Doctor",
      link: "https://oncologyunscripted.buzzsprout.com/2162983/14436126-how-to-pick-your-doctor",
      description: "Oncology Unscripted",
      image: OncologyUnscripted,
    },
    {
      id: "16",
      name: "VHHA’s Patients Come First",
      link: "https://podcasts.apple.com/us/podcast/patients-come-first-podcast-katie-coleman/id1478156124?i=1000630082015",
      description: "Patients Come First Podcast - Katie Coleman",
      image: PATIENTS,
    },
    {
      id: "17",
      name: "Patient from Hell - Facing Your Mortality",
      link: "https://mantacares.com/pages/facing-your-mortality",
      description: "Manta Cares",
      image: PatientFromHell,
    },
  ];
};

export const purchaseMemoir = [
  {
    id: "0",
    name: "Amazon",
    link: "https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
    description:
      "Pre-ordering from Amazon can help the book get on Amazon bestseller lists.",
    image: AMAZON,
  },
  {
    id: "1",
    name: "Penguin Random House",
    link: "https://www.penguinrandomhouse.com/books/759664/too-young-for-cancer-by-katie-coleman/",
    description:
      "On Penguin Random House, you can find a list of other retailers to pre-order from as well.",
    image: PENGUIN,
  },
  {
    id: "2",
    name: "Barne's and Noble",
    link: "https://www.barnesandnoble.com/w/too-young-for-cancer-katie-coleman/1144947840;jsessionid=67C463F7B33D131B3D92A58D1DE5DE1C.prodny_store01-atgap16?ean=9781639109449&st=AFF&2sid=Random%20House%20Inc_8373827_NA&sourceId=AFFRandom%20House%20Inc",
    description: "Pre-orders available through Barnes and Noble.",
    image: BARNES,
  },
  {
    id: "3",
    name: "Target",
    link: "https://www.target.com/s?searchTerm=9781639109449&clkid=6fd780c7Nd90211eea9625323f60aad12&cpng=PTID1&lnm=81938&afid=Penguin%20Random%20House&ref=tgt_adv_xasd0002",
    description: "Pre-orders available through Target.",
    image: TARGET,
  },
  // {
  //   id: "4",
  //   name: "Walmart",
  //   link: "https://www.target.com/s?searchTerm=9781639109449&clkid=6fd780c7Nd90211eea9625323f60aad12&cpng=PTID1&lnm=81938&afid=Penguin%20Random%20House&ref=tgt_adv_xasd0002",
  //   description:
  //     "Pre-orders available through Walmart.",
  //   image: TARGET,
  // },
];

export const comparables = [
  {
    id: "0",
    image: BTK,
    name: "Between Two Kingdoms",
    category: "Memoir",
    link: "https://www.penguinrandomhouse.com/books/540210/between-two-kingdoms-by-suleika-jaouad/",
    description:
      "NEW YORK TIMES BESTSELLER • A searing, deeply moving memoir of illness and recovery that traces one young woman’s journey from diagnosis to remission to re-entry into “normal” life—from the author of the Life, Interrupted column in The New York Times",
    pages: "368",
    author: "Suleika Jaouad",
    publisher: "Penguin Random House",
  },
  {
    id: "1",
    image: BREATH,
    name: "When Breath Becomes Air",
    category: "Memoir",
    link: "http://www.randomhousebooks.com/books/258507/",
    description:
      "#1 NEW YORK TIMES BESTSELLER • PULITZER PRIZE FINALIST • This inspiring, exquisitely observed memoir finds hope and beauty in the face of insurmountable odds as an idealistic young neurosurgeon attempts to answer the question What makes a life worth living?",
    pages: "256",
    author: "Paul Kalanithi",
    publisher: "Random House Books",
  },
  {
    id: "2",
    image: SHOCK,
    name: "In Shock",
    category: "Memoir",
    link: "https://www.goodreads.com/book/show/33574173-in-shock",
    description:
      "A first-person account from a young critical care physician describes how toward the end of her medical training she suddenly became a patient fighting for her own life, revealing how her experiences exposed her to flaws in today's care standards and how to better embrace the emotional bond between doctor and patient.",
    pages: "272",
    author: "Rana Awdish, MD, FCCP",
    publisher: "St. Martin's Press",
  },
];

export const advocacy = [
  {
    id: "1",
    icon: "awareness",
    title: "Spreading awareness",
    link: "https://twitter.com/kaydaustin/status/1631716918926221312?s=20",
    description:
      "Awareness campaigns are far more than marketing and fluff. Spreading awareness can help connect patients to experts and resources for their disease. It's also a great way for a community, friends and families to show supports for the patient and survivors in their lives. Learn how a kidney cancer awareness campaign in 2021 was the catalyst that changed a local stage IV kidney cancer survivor's life.",
  },
  {
    id: "2",
    icon: "funding",
    title: "Funding research",
    link: "https://www.kidneycoa.org",
    description:
      "Awareness campaigns help fund crucial and important research to improve outcomes for patients. For rare cancers, a little bit goes a long way. Just $50,000 can fund a years worth of research. For cancers like Chromophobe Renal Cell Carcinoma (a rare kidney cancer) which currently doesn't have any dedicated treatment options, that funding also provides hope.",
  },
  {
    id: "3",
    icon: "outcomes",
    title: "Better outcomes",
    link: "https://www.kidneycancer.org/kidney-cancer-awareness-month/",
    description:
      "For patients with rare diseases and cancers, finding experts can be a crucial part of their care. Advocacy campaigns help these patients connect with and find experts for their disease which can lead to better outcomes.",
  },
];

export const advocacy2 = [
  {
    id: "1",
    icon: "awareness",
    title: "Spreading awareness",
    link: "https://www.instagram.com/katiekickscancer/?hl=en",
    description:
      "Take a photo with the orange lights or of you wearing orange and tag a kidney cancer survivor you love and support or tag @katiekickscancer to show your support for cause using the hashtag #OrangeUp. Don't forget to tag the business whose lights you saw as well.",
  },
  {
    id: "2",
    icon: "funding",
    title: "Donate",
    link: "https://www.kidneycoa.org",
    description:
      "Donate to help fund research for Chromophobe Renal Cell Carcinoma (rare kidney cancer) this year. All donations go directly to helping fund research.",
  },
  {
    id: "3",
    icon: "outcomes",
    title: "Advocate",
    link: "https://www.katiekickscancer.com",
    description:
      "Know any businesses that'd like to get involved? Contact Katie at katiekickscancer@gmail.com",
  },
];
