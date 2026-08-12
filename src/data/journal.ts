// export interface JournalPost {
//   slug: string
//   title: string
//   category: string
//   date: string
//   excerpt: string
//   cover: string
// }

// export const journalPosts: JournalPost[] = [
//   {
//     slug: 'how-to-elope-in-scotland',
//     title: 'How to Elope in Scotland',
//     category: 'Planning',
//     date: 'March 2026',
//     excerpt: 'Permits, weather windows and the honest timeline of planning a Highland elopement.',
//     cover: 'https://picsum.photos/seed/journal-1/1600/1100',
//   },
//   {
//     slug: 'best-places-to-elope-in-scotland',
//     title: 'Best Places to Elope in Scotland',
//     category: 'Locations',
//     date: 'January 2026',
//     excerpt: 'Eleven glens, islands and coastlines worth building a ceremony around.',
//     cover: 'https://picsum.photos/seed/journal-2/1600/1100',
//   },
//   {
//     slug: 'scotland-elopement-planning-guide',
//     title: 'A Scotland Elopement Planning Guide',
//     category: 'Planning',
//     date: 'November 2025',
//     excerpt: 'What to book first, what can wait, and what never goes to plan.',
//     cover: 'https://picsum.photos/seed/journal-3/1600/1100',
//   },
// ]





import w9 from "../assests/w9.jpg";
import w10 from "../assests/w10.jpg";
import w11 from "../assests/w11.jpg";
import w12 from "../assests/w12.jpg";
import w13 from "../assests/w13.jpg";
import w14 from "../assests/w14.jpg";
import w15 from "../assests/w15.jpg";
import w16 from "../assests/w16.jpg";

export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  cover: string;
  excerpt: string;
  location: string;
  introduction: string;
  paragraphs: string[];
  quote: string;
  conclusion: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: "beautiful-indian-wedding",
    title: "A Beautiful Indian Wedding Story",
    category: "Weddings",
    date: "12 August 2026",
    cover: w9,
    location: "India",

    excerpt:
      "A celebration filled with emotion, beautiful details and all the little moments that made the day unforgettable.",

    introduction:
      "Some wedding days feel less like an event and more like a collection of memories unfolding naturally. This celebration was exactly that — intimate, emotional and filled with the warmth of family and friends.",

    paragraphs: [
      "From the first moments of getting ready to the final celebrations of the evening, the day was filled with genuine emotion. There was no rush to manufacture moments. Everything happened naturally, allowing us to document the day as it truly felt.",

      "The details were deeply personal. From the colours and flowers to the traditional ceremonies, every part of the celebration reflected the couple and the people who surrounded them.",

      "What stayed with us most were the quiet moments between the celebrations — a glance across the room, a parent's smile, friends laughing together and the couple taking a brief moment to themselves."
    ],

    quote:
      "The photographs we remember most are often the moments nobody planned.",

    conclusion:
      "For us, photographing a wedding is about preserving that feeling. Years from now, these photographs should bring back not only how the day looked, but how it felt."
  },

  {
    slug: "intimate-celebration-of-love",
    title: "An Intimate Celebration of Love",
    category: "Couples",
    date: "05 August 2026",
    cover: w10,
    location: "India",

    excerpt:
      "A relaxed and intimate celebration surrounded by the people who matter most.",

    introduction:
      "There is something incredibly beautiful about celebrations that remain close to the people who matter most. This couple chose to keep their day intimate, personal and completely true to themselves.",

    paragraphs: [
      "The morning began quietly, with the couple surrounded by their closest family. There was laughter, nervous excitement and plenty of small moments that made the atmosphere feel wonderfully personal.",

      "Rather than following every traditional expectation, they created a day around the things they genuinely cared about. The result was relaxed, emotional and full of personality.",

      "During their portraits, we gave them space simply to be together. The photographs came from conversations, laughter and those quiet seconds when they forgot the camera was there."
    ],

    quote:
      "The best photographs happen when you stop thinking about the photograph.",

    conclusion:
      "Their celebration was a reminder that a wedding does not need to be complicated to be meaningful. Sometimes the smallest celebrations hold the biggest memories."
  },

  {
    slug: "cinematic-wedding-in-the-hills",
    title: "A Cinematic Wedding in the Hills",
    category: "Weddings",
    date: "28 July 2026",
    cover: w11,
    location: "India",

    excerpt:
      "From quiet morning preparations to the evening celebrations, every frame tells part of their story.",

    introduction:
      "Surrounded by open skies and beautiful landscapes, this wedding had an atmosphere that felt almost cinematic. But beneath the scenery were the people and emotions that made the day special.",

    paragraphs: [
      "The morning was slow and peaceful. The couple prepared separately while their families gathered around them, creating a wonderful mixture of anticipation and excitement.",

      "As the ceremony approached, the energy changed. Friends arrived, music filled the space and the quiet morning gradually became a celebration.",

      "Later in the day, we took the couple away for a few quiet portraits. The changing light across the hills created some of our favourite photographs from the entire celebration."
    ],

    quote:
      "Beautiful light changes everything, but beautiful moments matter more.",

    conclusion:
      "The landscape gave the photographs their atmosphere, but it was the connection between two people that gave them their meaning."
  },

  {
    slug: "story-behind-their-day",
    title: "The Story Behind Their Day",
    category: "Stories",
    date: "18 July 2026",
    cover: w12,
    location: "India",

    excerpt:
      "A wedding day full of genuine moments, laughter, emotion and memories that will last forever.",

    introduction:
      "Every wedding has the moments everyone sees, but there is another story happening quietly underneath. This was a day where those smaller moments became some of the most memorable.",

    paragraphs: [
      "The morning was filled with conversations between generations. Parents helped with final preparations while friends kept the atmosphere light with laughter and stories.",

      "During the ceremony, there were moments of complete stillness surrounded by celebration. Those small pauses became some of the strongest photographs from the day.",

      "As evening arrived, everyone relaxed. The formalities were over and the celebration became a simple gathering of people enjoying being together."
    ],

    quote:
      "Sometimes the story is not in what happened, but in how everyone felt while it happened.",

    conclusion:
      "Those are the stories we want to preserve — the moments that might otherwise disappear but become priceless years later."
  },

  {
    slug: "romantic-couple-session",
    title: "A Romantic Couple Session",
    category: "Couples",
    date: "08 July 2026",
    cover: w13,
    location: "India",

    excerpt:
      "An afternoon spent together, creating photographs that feel natural, effortless and completely theirs.",

    introduction:
      "A couple session does not need a complicated plan. Sometimes all you need is good light, a beautiful place and enough time for two people to simply enjoy being together.",

    paragraphs: [
      "We started the afternoon without a strict itinerary. Instead, we walked, talked and allowed the surroundings to guide us.",

      "The photographs came naturally. A laugh, a quiet glance, a hand held a little longer — these small gestures became the heart of the session.",

      "As the sun began to disappear, the light became softer and warmer. It was the perfect ending to an afternoon that felt more like a date than a photoshoot."
    ],

    quote:
      "Forget the camera. Remember the person standing beside you.",

    conclusion:
      "The resulting photographs feel honest because the experience itself was honest. No performance, just two people enjoying their time together."
  },

  {
    slug: "celebration-full-of-emotion",
    title: "A Celebration Full of Emotion",
    category: "Weddings",
    date: "29 June 2026",
    cover: w14,
    location: "India",

    excerpt:
      "The kind of wedding where the smallest moments become the memories you remember most.",

    introduction:
      "There are celebrations where emotion is impossible to hide. This was one of those days — full of laughter, happy tears and people completely invested in the couple's story.",

    paragraphs: [
      "From the beginning, family and friends were at the centre of everything. Everyone had a role to play, whether it was helping with preparations or simply being there when it mattered.",

      "The ceremony brought together all of those emotions. There were tears from parents, laughter between friends and a quiet sense of happiness between the couple.",

      "The evening celebration was full of energy. Music, dancing and spontaneous moments continued long after the formal part of the day had ended."
    ],

    quote:
      "A wedding is not one moment. It is hundreds of little moments happening together.",

    conclusion:
      "Our favourite photographs from this day were not necessarily the most perfectly composed ones. They were the photographs where you could feel something."
  },

  {
    slug: "moments-between-the-moments",
    title: "Moments Between the Moments",
    category: "Stories",
    date: "17 June 2026",
    cover: w15,
    location: "India",

    excerpt:
      "The quiet glances, laughter and unexpected moments that happen between the big events.",

    introduction:
      "The most memorable parts of a wedding are not always the moments written into the schedule. Often, they happen in the spaces between everything else.",

    paragraphs: [
      "A parent adjusting a piece of clothing. Friends sharing an inside joke. A couple taking a breath before walking into the ceremony. These moments happen quickly, often without anyone noticing.",

      "Our approach is to stay close without interrupting. We watch for those small interactions and allow them to unfold naturally.",

      "By the end of the day, these quiet photographs often become the ones couples return to most."
    ],

    quote:
      "The moments between the moments are often the ones worth keeping.",

    conclusion:
      "That is what documentary wedding photography means to us — being present enough to notice the things that might otherwise be missed."
  },

  {
    slug: "wedding-to-remember",
    title: "A Wedding to Remember",
    category: "Weddings",
    date: "02 June 2026",
    cover: w16,
    location: "India",

    excerpt:
      "A beautiful celebration surrounded by family, friends and an incredible atmosphere.",

    introduction:
      "Some weddings have an energy that stays with you long after the final dance. This celebration was full of colour, warmth and an incredible sense of togetherness.",

    paragraphs: [
      "The day began with preparations surrounded by family. There was excitement everywhere, from the smallest details to the anticipation of seeing the couple together for the first time.",

      "The ceremony brought everyone together. Traditional elements were woven into a celebration that still felt personal and unmistakably theirs.",

      "By evening, the atmosphere had transformed into a full celebration. Friends danced, families laughed and the couple finally had the chance to take everything in."
    ],

    quote:
      "Years later, it is the feeling of the day that photographs bring back.",

    conclusion:
      "That is why we photograph weddings the way we do. Not simply to create beautiful images, but to create a visual memory of a day that can never happen quite the same way again."
  },
];
