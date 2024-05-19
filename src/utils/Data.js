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
import KCA from "../images/kca.png";
import ONCOLOGIST from "../images/oncologist.png";
import LIVER from "../images/liver_resection.png";
import LIFE_REFOCUED from "../images/life_refocused.png";
import CHUBBY from "../images/chubbyemu.png";
import BIOPSY from "../images/biopsy.png";
import COMMON_WEALTH from "../images/common_wealth.png";
import ABLATION from "../images/ablations.png";
import BOOK from "../images/book-cover.png";
import COA_LOGO from "../images/Orange_COA.png";
import RCRF from "../images/RCRF.png";
import CANADA from "../images/kidneycanada.png";
import IKCC from "../images/ikcc.jpeg";
import SMART from "../images/smart.png";
import DTC from "../images/dtc.png";
import MRC from "../images/mrc.png";
import HLRCC from "../images/hlrccFoundation.png";
import CJ from "../images/cj.jpeg";
import JOEY from "../images/joeys.jpeg";
import VHL from "../images/vhl.jpeg";
import KIDNEYCAN from "../images/kidneyCAN.png";
import JNF from "../images/jnf.jpeg";

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

export const youtubeVideos = [
  {
    id: 1,
    type: "video",
    size: "youtube",
    description:
      "Tumor Tissue Donation and What Brought Me to the Rare Cancer Research Foundation",
    name: "CommonWealth Club California",
    viewCount: "150",
    image: COMMON_WEALTH,
    link: "https://www.youtube.com/embed/K97HebR7JPI",
  },
  {
    id: 2,
    type: "video",
    size: "youtube",
    description: "Read of Chapter 1 of my memoir, Too Young For Cancer.",
    name: "Memoir: Chapter 1",
    image: BOOK,
    viewCount: "150",
    link: "https://www.youtube.com/embed/wPZhLBkHhwY",
  },
  {
    id: 3,
    type: "video",
    size: "youtube",
    description: "What an Open Nephrectomy and Liver Resection Was Like",
    name: "Open Nephrectomy and Liver Resection",
    image: LIVER,
    viewCount: "6,500",
    link: "https://www.youtube.com/embed/ZW2-ciZbXtM",
  },
  {
    id: 4,
    type: "video",
    size: "youtube",
    description:
      "Walk through of my case with my oncologist, touching and highlighting on common questions I had early in my diagnosis.",
    name: "Speaking Candidly With My Oncologist",
    image: ONCOLOGIST,
    viewCount: "19,000",
    link: "https://www.youtube.com/embed/Nddft_nc3Yc?si=xPfDZJfxN6z",
  },
  {
    id: 5,
    type: "video",
    size: "youtube",
    description:
      "YouTuber Chubbyemu made a video on my story, with over 2.5M views it can be found here.",
    name: "Chubbyemu's Video On My Story",
    image: CHUBBY,
    viewCount: "2.4M",
    link: "https://www.youtube.com/embed/i9fLEvgZzRE",
  },
  {
    id: 6,
    type: "video",
    size: "youtube",
    name: "What a Kidney and Liver Biopsy Were Like?",
    description:
      "Walk through of my biopsy procedure, including a complication that arose.",
    image: BIOPSY,
    link: "https://www.youtube.com/embed/Iue_GsVen0U?si=LhexbFAaEMKiX1xO",
  },
  {
    id: 7,
    type: "video",
    size: "youtube",
    name: "What a Liver Ablation Was Like?",
    description: "Walk through of what my microwave liver ablations were like.",
    image: ABLATION,
    link: "https://www.youtube.com/embed/q6ewbtK_gMA?si=EX8TlVhl58DVZUMS",
  },
];

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
  {
    id: "16",
    image: KCA,
    name: "Accelerating chromophobe research promises a brighter future for this rare kidney cancer",
    link: "https://www.kidneycancer.org/stories/chrcc-coleman/",
    description: "Guest post about Chromophobe Renal Cell Carcinoma",
  },
  {
    id: "17",
    image: KCA,
    name: "KCA Affiliate Program",
    link: "https://www.kidneycancer.org/affiliate-launch/",
    description:
      "Announcement of the KCA Affiliate Program and COA as one of the first affiliates.",
  },
  {
    id: "18",
    image: KCA,
    name: "The Kidney Cancer Association and COA co-sponsor chromophobe RCC-specific grant",
    link: "https://www.kidneycancer.org/kca-coa-chrcc-grant/",
    description:
      "Announcment of first grant for Chromophobe RCC co-sponsored by KCA and COA.",
  },
];

export const highlights = [
  {
    id: 2,
    color: "orange-400",
    category: "Noprofit",
    title: "Chromophobe and Oncocytic Tumor Alliance",
    description:
      "The Chromophobe and Oncocytic Tumor Alliance (COA) is a non-profit I founded with a mission to bring together and support a community of patients, organizations and researchers dedicated to advancing the understanding, research and treatment of Chromophobe Renal Cell Carcinoma and other oncocytic tumors. We aim to foster collaboration, promote education and awareness, and to fund research to further these efforts.",
    image: COA_LOGO,
    videoLink:
      "https://www.tiktok.com/@katiekickscancer/video/7344262029500321067?is_from_webapp=1&sender_device=pc&web_id=7341956517037278766",
    linkText:
      "Checkout a recap of what we've accomplished with your help and what funds donated in 2023 are being used for.",
    buttonText: "Donate",
    link: "https://kidneycoa.org/",
  },
  {
    id: 1,
    color: "slate-700",
    category: "Memoir",
    title: "Too Young For Cancer",
    description:
      "About Too Young For Cancer: The inspiring story of a stage IV cancer survivor’s journey through a complex and biased medical system to get a diagnosis and the treatment that would save her life, and how she found her life’s purpose through community and advocacy. New Year’s Eve 2020 was supposed to be a turning point to better days for 29-year-old Katie Coleman. Instead, she found herself in the ER processing the earth-shattering news of a stage IV cancer diagnosis, one that had come after years of being assured she was “too young for cancer” and a repeated misdiagnosis of anxiety. Too Young for Cancer tells the story of Katie’s journey from diagnosis with an ultra-rare cancer through treatment, recovery and a life-altering shift in perspective. Too Young for Cancer highlights the absolute best and worst in healthcare and uncovers the silver linings and beauty of humanity filling the space in between.",
    image: BOOK,
    videoLink: "https://youtu.be/wPZhLBkHhwY?si=gLmwE2NAlkv5RcUV",
    linkText:
      "First chapter sample. I donate my portion of the proceeds from sales back to support cancer research. Let's make an impact, together!",
    buttonText: "Pre-Order",
    link: "https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
  },
  {
    id: 3,
    color: "slate-700",
    category: "Work",
    title: "Rare Cancer Research Foundation",
    description:
      "I joined the rare cancer research foundation after my diagnosis because of how closely their mission aligned with my own in advancing reseach and treatments for rare cancers. One of their core inititives is Pattern.org which allows patients to donate their fresh tumor tissue from surgery to research, which is a critical step for development models and treatments for rare cancers. We also are working on a plateform that will allow patients with rare cancers or better organize and share their medical records and even anonomize and donate them to research.",
    image: RCRF,
    videoLink: "https://youtu.be/K97HebR7JPI",
    link: "https://rarecancer.org/",
    linkText:
      "CommonWealth Club California - Innovative Patient-Centered Care for Cancer",
    buttonText: "Visit",
  },
];

export const podcasts = [
  {
    id: 0,
    name: "Ep. 27: Facing the Rarest of Cancers",
    link: "https://www.thedoctorsart.com/episodes/ep27",
    description: "The Doctors Art",
    image: doctorsArt,
  },
  {
    id: 1,
    name: "The Experts Discuss Patients’ Mental Health and Mindfulness",
    link: "https://accelerators.buzzsprout.com/1839275/11948820-the-experts-discuss-patients-mental-health-and-mindfulness",
    description: "The Accelerators",
    image: accelerators,
  },
  {
    id: 2,
    name: "On Clinical Trials: The Patient Perspective With Julie and Katie",
    link: "https://accelerators.buzzsprout.com/1839275/11447574-on-clinical-trials-the-patient-perspective-with-julie-and-katie",
    description: "The Accelerators",
    image: accelerators,
  },
  {
    id: 3,
    name: "On Clinical Trials: Patient Education With Julie, Katie, and David",
    link: "https://accelerators.buzzsprout.com/1839275/11673786-on-clinical-trials-patient-education-with-julie-katie-and-david",
    description: "The Accelerators",
    image: accelerators,
  },
  {
    id: 4,
    name: "Patient voice on social media - A survivor story",
    link: "https://podcasts.apple.com/au/podcast/patient-voice-on-social-media-a-survivor-story/id1534737585?i=1000563486434",
    description: "HealthCare Unfiltered",
    image: heathlcareUnfiltered,
  },
  {
    id: 5,
    name: "Self advocacy in action",
    link: "https://podcasts.apple.com/us/podcast/episode-28-self-advocacy-in-action-inspiration-from/id1622669098?i=1000614791497",
    description: "Patient from Hell",
    image: PatientFromHell,
  },
  {
    id: 6,
    name: "Episode 30: Katie Coleman - Stage IV Kidney Cancer Survivor",
    link: "https://open.spotify.com/episode/1BBvJxlC3D48AwFT7EAQMF?si=1dabb5cab19c49b1",
    description: "You Just Don't Know It Yet",
    image: YouJustDontKnow,
  },
  {
    id: 7,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/12671236-second-opinions",
    description: "Second Opinions",
    image: OncologyUnscripted,
  },
  {
    id: 8,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/12842441-oncology-terms-doctor-and-staff-roles-and-medical-education",
    description: "Oncology Terms: Doctor and Staff Roles and Medical Education",
    image: OncologyUnscripted,
  },
  {
    id: 9,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/13077172-matt-versus-chatgpt",
    description: "Matt Versus ChatGPT",
    image: OncologyUnscripted,
  },
  {
    id: 10,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/13165690-julie-and-katie-go-to-asco",
    description: "Julie and Katie go to ASCO",
    image: OncologyUnscripted,
  },
  {
    id: 11,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/13386216-the-insider-s-guide-to-radiation-therapy-radiation-101-part-1",
    description:
      "The Insider's Guide to Radiation Therapy: Radiation 101, Part 1",
    image: OncologyUnscripted,
  },
  {
    id: 12,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/13419590-the-insider-s-guide-to-radiation-therapy-radiation-101-part-2",
    description:
      "The Insider's Guide to Radiation Therapy: Radiation 101, Part 2",
    image: OncologyUnscripted,
  },
  {
    id: 13,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/13598072-the-insider-s-guide-to-radiation-therapy-sbrt",
    description: "The Insider's Guide to Radiation Therapy: SBRT",
    image: OncologyUnscripted,
  },
  {
    id: 14,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/13744725-the-insider-s-guide-to-radiation-therapy-proton-therapy",
    description: "The Insider's Guide to Radiation Therapy: Proton Therapy",
    image: OncologyUnscripted,
  },
  {
    id: 15,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/13995528-immunotherapy-in-conversation-with-dr-breelyn-wilky-md",
    description: "Immunotherapy: In Conversation with Dr. Breelyn Wilky, MD",
    image: OncologyUnscripted,
  },
  {
    id: 16,
    name: "Oncology Unscripted",
    link: "https://oncologyunscripted.buzzsprout.com/2162983/14436126-how-to-pick-your-doctor",
    description: "How To Pick Your Doctor",
    image: OncologyUnscripted,
  },
  {
    id: 17,
    name: "Patients Come First Podcast - Katie Coleman",
    link: "https://podcasts.apple.com/us/podcast/patients-come-first-podcast-katie-coleman/id1478156124?i=1000630082015",
    description: "VHHA’s Patients Come First",
    image: PATIENTS,
  },
  {
    id: 18,
    name: "Manta Cares",
    link: "https://mantacares.com/pages/facing-your-mortality",
    description: "Patient from Hell - Facing Your Mortality",
    image: PatientFromHell,
  },
];

export const purchaseMemoir = [
  {
    id: "0",
    name: "Barne's and Noble",
    link: "https://www.barnesandnoble.com/w/too-young-for-cancer-katie-coleman/1144947840;jsessionid=67C463F7B33D131B3D92A58D1DE5DE1C.prodny_store01-atgap16?ean=9781639109449&st=AFF&2sid=Random%20House%20Inc_8373827_NA&sourceId=AFFRandom%20House%20Inc",
    description: "Pre-orders available through Barnes and Noble.",
    image: BARNES,
  },
  {
    id: "3",
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
    link: "https://kidneycoa.org/",
    description:
      "Awareness campaigns are far more than marketing and fluff. Spreading awareness can help connect patients to experts and resources for their disease. It's also a great way for a community, friends and families to show supports for the patient and survivors in their lives. Learn how a kidney cancer awareness campaign in 2021 was the catalyst that changed a local stage IV kidney cancer survivor's life.",
  },
  {
    id: "2",
    icon: "funding",
    title: "Funding research",
    link: "https://www.kidneycancer.org/kca-coa-chrcc-grant/",
    description:
      "Awareness campaigns help fund crucial and important research to improve outcomes for patients. For rare cancers, a little bit goes a long way. Just $50,000 can fund a years worth of research. For cancers like Chromophobe Renal Cell Carcinoma (a rare kidney cancer) which currently doesn't have any dedicated treatment options, that funding also provides hope. In 2024 we have co-funded a research grant with the KCA for $75,000 to fund research for this rare cancer and are working on funding to sustain this effort next year.",
  },
  {
    id: "3",
    icon: "outcomes",
    title: "Better outcomes",
    link: "https://www.medresourceconnect.com/chromophobe",
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
      "Wear orange on March 30th and share a photo using the hashtag #OrangeUp and tag @katiekickscancer (if you'd like it amplified) to show your support. If you find an egg, take a photo of you and the egg and tag the business you found it in along with the #OrangeUp hashtag.",
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

export const speaking = [
  {
    id: 1,
    title: "Patient Advocacy",
    description: "Advocating for patients with rare diseases and cancers.",
    link: "https://www.kidneycancer.org/stories/chrcc-coleman/",
    date: "June 2023",
    image: KCA,
  },
];

export const resources = [
  {
    id: 1,
    name: "Kidney Cancer Assocication",
    link: "https://www.kidneycancer.org/just-diagnosed/",
    description:
      "The Kidney Cancer Assocication provides mamy resources for patients, including their newly diagnosed toolkit, which can be handy for those recently diagnosed and their podcast Kidney Cancer Unfiltered.",
    image: KCA,
  },
  {
    id: 2,
    name: "Pattern.org",
    link: "https://pattern.org/",
    description:
      "Pattern.org is a non-profit organization that allows patients to donate their fresh tumor tissue from surgery to research, which is a critical step for development models and treatments for rare cancers. Pattern.org is part of the Rare Cancer Research Foundation, where I currently work as well. More info about tissue donation can be found under the videos section and the CommonWealth Club talk, where I both share my story and the inititives we are working on at RCRF.",
    image: RCRF,
  },
  {
    id: 3,
    name: "Judy Nicholson Kidney Cancer Foundation",
    link: "https://jnfkidneycancer.org/",
    image: JNF,
    description:
      "The Judy Nicholson Kidney Cancer Foundation is a non-profit organization that provides support and resources for patients with kidney cancer. They have a podcast and host a patient dinner each year.",
  },
  {
    id: 4,
    name: "Kidney Cancer Canada",
    link: "https://www.kidneycancercanada.ca/",
    description:
      "Kidney Cancer Canada is a non-profit based in Canada that provides support and resources for patients with kidney cancer.",
    image: CANADA,
  },
  {
    id: 5,
    name: "International Kidney Cancer Coalition",
    link: "https://ikcc.org/",
    description:
      "The International Kidney Cancer Coalition is a global network of kidney cancer patient organizations. They provide resources and support for patients with kidney cancer.",
    image: IKCC,
  },
  {
    id: 6,
    name: "Smart Patients",
    link: "https://www.smartpatients.com/",
    description:
      "Smart Patients is an online community where patients and caregivers can share their experiences and learn from others who have been through similar experiences.",
    image: SMART,
  },
  {
    id: 7,
    name: "KCCure",
    link: "https://kccure.org/",
    description:
      "KCCure is a non-profit organization that provides support and resources for patients with kidney cancer.",
  },
  {
    id: 8,
    name: "Driven To Cure",
    link: "https://www.driventocure.org/",
    description:
      "Driven to Cure is a non-profit organization that provides support and resources for patients with rare kidney cancers and specifically for patients with Hereditary Leiomyomatosis and Renal Cell Cancer (HLRCC).",
    image: DTC,
  },
  {
    id: 9,
    name: "HLRCC Foundation",
    link: "https://www.hlrccfoundation.org/",
    image: HLRCC,
    description:
      "The HLRCC Foundation is a non-profit organization that provides support and resources for patients with Hereditary Leiomyomatosis and Renal Cell Cancer (HLRCC).",
  },
  {
    id: 10,
    name: "Chris CJ Johnson Foundation",
    link: "https://www.cjcfoundation.org/",
    image: CJ,
    description:
      "The Chris CJ Johnson Foundation is a non-profit organization that provides support for those affected by Renal Medullary Carcinoma (RMC). They hold an annual 5k run/walk to raise awareness for RMC and to raise funds for research in March each year.",
  },
  {
    id: 11,
    name: "(COA) Chromophobe and Oncocytic Tumor Alliance",
    link: "https://kidneycoa.org/",
    description:
      "The Chromophobe and Oncocytic Tumor Alliance (COA) is a non-profit organization to raise awareness and support research for Chromophobe Renal Cell Carcinoma and other oncocytic tumors.",
    image: COA_LOGO,
  },
  {
    id: 12,
    name: "RCRF Resource Hub - Chromophobe",
    link: "https://medresourceconnect.com/chromophobe",
    description:
      "Consolidation of information and resources for Chromophobe Renal Cell Carcinoma.",
    image: MRC,
  },
  {
    id: 13,
    name: "KidneyCAN",
    link: "https://www.kidneycan.org/",
    image: KIDNEYCAN,
    description:
      "KidneyCAN is a non-profit organization that provides support and resources for patients with kidney cancer.",
  },
  {
    id: 14,
    name: "Joey's Wings",
    link: "https://www.joeyswings.org/",
    image: JOEY,
    description:
      "Joey's Wings is a nonprofit with mission is to fund research that focuses on kidney cancers affecting children and young adults, raise awareness and provide support to families affected by childhood cancer.",
  },
  {
    id: 15,
    name: "The VHL Alliance",
    link: "https://vhl.org/",
    image: VHL,
    description:
      "The VHL Alliance is a non-profit with a mission to improving quality of life and health outcomes for VHL patients, families, and caregivers with inclusive community building, connections to excellent education and treatment options, and advancements in medical research.",
  },
  {
    id: 16,
    name: "NCCN Patient Guidelines",
    link: "https://www.nccn.org/guidelines/guidelines-detail?category=patients&id=17",
    description:
      "The National Comprehensive Cancer Network (NCCN) provides guidelines for patients with kidney cancer which includes standard guidelines on diagnosis, treatment, and follow-up care. These are the same guidelines that providers can use to help guide treatment decisions.",
  },
  {
    id: 17,
    name: "Rare Kidney Cancers: RMC, Chromophobe",
    image: "video",
    link: "https://youtu.be/O2NEQPCYhT0?si=YslMtEW7nN7gbHAT",
    description:
      "A video on rare kidney cancers including Renal Medullary Carcinoma (RMC) and Chromophobe Renal Cell Carcinoma by Dr. Pavlos Msaouel (1/13/2021).",
  },
  {
    id: 18,
    name: "What is Clear Cell Renal Cell Carcinoma?",
    image: "video",
    link: "https://www.youtube.com/watch?v=lBtrie4KVvo",
    description:
      "A video on Clear Cell Renal Cell Carcinoma from the Kidney Cancer Association.",
  },
  {
    id: 19,
    name: "What is Papillary Renal Cell Carcinoma?",
    image: "video",
    link: "https://www.youtube.com/watch?v=oYXLhdzeA6Q",
    description:
      "A video on Papillary Renal Cell Carcinoma from the Kidney Cancer Association.",
  },
  {
    id: 20,
    name: "What is Chromophobe Renal Cell Carcinoma?",
    image: "video",
    link: "https://youtube.com/watch?v=aQJQVCUNW5c",
    description:
      "A video on Chromophobe Renal Cell Carcinoma from the Kidney Cancer Association.",
  },
  {
    id: 21,
    name: "What is Transolation Renal Cell Carcinoma?",
    image: "video",
    link: "https://youtube.com/watch?v=1TYKsbVqowc",
    description:
      "A video on Transolation Renal Cell Carcinoma from the Kidney Cancer Association.",
  },
  {
    id: 22,
    name: "What is Collecting Duct Carcinoma?",
    image: "video",
    link: "https://youtube.com/watch?v=A55EnwNQ1Fk",
    description:
      "A video on Collecting Duct Carcinoma from the Kidney Cancer Association.",
  },
  {
    id: 23,
    name: "What is Unclassified Renal Cell Carcinoma?",
    image: "video",
    link: "https://www.youtube.com/watch?v=21K-jhf2Ays",
    description:
      "A video on Unclassified Renal Cell Carcinoma from the Kidney Cancer Association.",
  },
  {
    id: 24,
    name: "What is Renal Medullary Carcinoma?",
    image: "video",
    link: "https://www.youtube.com/watch?v=QPnzJCx8GVM",
    description:
      "A video on Renal Medullary Carcinoma from the Kidney Cancer Association.",
  },
];

export const resourcesBanner = {
  title: "Resources",
  description: "*Not an exhaustive list, an endorcement or medical advice.",
  blurb: "A list of resources I've found helpful.",
  link: "https:www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
  buttonText: "PRE-ORDER 📚",
};

export const podcastBanner = {
  title: "Podcasts",
  description:
    "Oncology Unscripted is a podcast I co-host with Julie Johnson and Dr. Matt Spraker.",
  blurb: "A list of podcasts I've been featured on.",
  link: "https://oncologyunscripted.buzzsprout.com/",
  buttonText: "Listen Here 🎙️",
};

export const videoBanner = {
  title: "Videos",
  description: "For educational purposes only, not medical advice.",
  blurb:
    "Highlighted or top viewed videos from YouTube, TikTok or other platforms.",
  link: "https:www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
  buttonText: "PRE-ORDER 📚",
};
