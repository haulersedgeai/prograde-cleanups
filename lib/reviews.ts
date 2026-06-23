export type ReviewTag =
  | "Junk Removal"
  | "Fair Pricing"
  | "Polite Crew"
  | "Yard Cleanup"
  | "Moving"
  | "Demolition";

export type Review = {
  name: string;
  text: string;
  tag: ReviewTag;
  location?: string;
};

export const reviewTags: ReviewTag[] = [
  "Junk Removal",
  "Fair Pricing",
  "Polite Crew",
  "Yard Cleanup",
  "Moving",
  "Demolition",
];

export const reviews: Review[] = [
  {
    name: "Jenson Baker",
    tag: "Junk Removal",
    text: "These gentlemen held to their word and did everything that they said they would for this chaotic project that I had in my attic. They were very professional in conversation and very obliging in everything that I asked them to do.",
  },
  {
    name: "Joshua Dennis",
    tag: "Polite Crew",
    text: "They were professional and quick! I will be using them again. I would highly recommend them. If you have a family they are great with kids also.",
  },
  {
    name: "Noraine Joy Sevilla",
    tag: "Moving",
    text: "I had an excellent experience with this moving and junk removal company. The team was professional, punctual, and extremely hardworking from start to finish. They handled all of my belongings with care.",
  },
  {
    name: "Nadrian Antoine",
    tag: "Moving",
    text: "I was completely stressed out about my move. These gentlemen were professional, timely, kind, and fast. I am so grateful for the work that they did. I highly recommend this service but only if you want a good job done.",
  },
  {
    name: "Michelle",
    tag: "Fair Pricing",
    text: "HIGHLY RECOMMEND! Not only was pricing fair but they scheduled me in quickly which was a huge plus as the job was time sensitive. Great hard working team got the job done quickly.",
  },
  {
    name: "Ivy League Music Group",
    tag: "Junk Removal",
    text: "Great service, communicative, and fast. Reached out to them for an emergency same day pick up and they were able to fulfill my request with no issue.",
  },
  {
    name: "Kayan Malia",
    tag: "Polite Crew",
    text: "I had an incredible experience with Pro Grade Cleanups. They were extremely professional, friendly, and easy to work with from start to finish. They communicated clearly and showed up on time.",
  },
  {
    name: "Heather Culpepper",
    tag: "Junk Removal",
    text: "A+++ experience! Fast and friendly, these guys took great care in their work. I would highly recommend. I plan to use their service again in the future.",
  },
  {
    name: "Cynthia Jacko-Wise",
    tag: "Polite Crew",
    text: "Noah was absolutely PHENOMENAL! He responded to my inquiry in less than 10 minutes of my submission, was extremely professional and courteous, and left the area better than we found it.",
  },
  {
    name: "Erna Kostic",
    tag: "Yard Cleanup",
    text: "Prograde Cleanups is run by 2 phenomenal gentlemen, both Harry and Noah. Did an outstanding job in my backyard cleaning up project. These guys are the real deal and affordable!",
  },
  {
    name: "Mike Palmer",
    tag: "Yard Cleanup",
    text: "Noah arrived at my house to clean up yard debris and other waste materials. He was professional and courteous and really seems to have a passion for his work. I would definitely recommend and rehire Noah and his team.",
  },
  {
    name: "Sarah Janelle",
    tag: "Junk Removal",
    text: "I needed some chainlink fence plus 40ft poles picked up and delivered. They gave me a great deal on a last minute job. Excellent communication and went above and beyond. Would absolutely use them again.",
  },
  {
    name: "Vicki Coleman",
    tag: "Polite Crew",
    text: "What a great couple of guys who came to pick up a couch. They were friendly, polite, and very careful with the couch not to hit walls. I will be using them again! Great same day service!",
  },
  {
    name: "Jerome Knight",
    tag: "Junk Removal",
    text: "Noah promptly responded to my call to remove junk from my garage — in 2 minutes! He was at my house within 2 hours and immediately got to work. He was respectful, very personable and very professional.",
  },
  {
    name: "Carol Bermudez",
    tag: "Fair Pricing",
    text: "Great junk removal service. They arrived on time, worked fast, and got everything out with no problems. Prices were fair and they left the place clean. I would definitely use them again.",
  },
  {
    name: "Eric Rodgers",
    tag: "Demolition",
    text: "Noah and Harry came out to clear out demo debris in a stuffy attic on a 90 degree day. They knocked it out quick for a great rate. They were courteous and professional and did an amazing job.",
  },
  {
    name: "Talia Vonece",
    tag: "Moving",
    text: "Noah did a great job moving my washer — he was friendly, efficient, and got right to work. I really appreciated how quickly he handled everything! I will definitely refer him to others!",
  },
  {
    name: "Natalie Gideon",
    tag: "Moving",
    text: "Had to help a family member completely pack and move an entire apartment in 1 day. Called them late afternoon on a Friday and they showed up exceptionally fast. It was a big job and only took a few hours.",
  },
  {
    name: "Dom Blair",
    tag: "Moving",
    text: "Prograde Cleanups is LEGIT! I had minimal time to get moved out and into my new place and needed help immediately. I gave them a call and luckily they were able to make time for the job.",
  },
  {
    name: "D K",
    tag: "Polite Crew",
    text: "Thank you to the Prograde Team. These guys were professional throughout. Several times I attempted to jump in and help and each time they told me to sit back and relax as they were going to take care of the move. Highly recommend.",
  },
  {
    name: "Suzanne N Smith",
    tag: "Fair Pricing",
    text: "Noah did a super job. I've needed to get rid of a recliner for a year! He was reasonable in price, well mannered, kind, and strong. I would always call Prograde if I needed a trash removal service.",
  },
  {
    name: "Adrian Barnaby",
    tag: "Junk Removal",
    text: "What an amazing job Noah and his team did for our Beach Home! These guys are professional, on time and ready to work! My wife and I will definitely be using them at all our other properties in the future.",
  },
  {
    name: "Kayla Hartman",
    tag: "Demolition",
    text: "Extremely professional & did a great job! We had a huge 16ft x 12ft shed in bad shape. They tore it down and hauled it off for a great deal. Responded to my post quickly and got it done.",
  },
  {
    name: "Breeanna Kidd",
    tag: "Demolition",
    text: "This company came out and did a shed clean out. I was so impressed by the professionalism. Not only did Noah take everything out of the shed but afterwards he swept it out as well. Pricing was very reasonable.",
  },
  {
    name: "John Wilson",
    tag: "Junk Removal",
    text: "I had furniture that I needed removed. The crew showed at the time stated. They were personable, polite, and completed the job promptly and professionally. As a veteran, it felt good to support two fellow veterans. I definitely recommend their services.",
  },
  {
    name: "Krystal Marin",
    tag: "Junk Removal",
    text: "Excellent service from beginning to end. We are super pleased with the results, they took the hard work out of our hands and had great communication. The best junk removal experience we've had!",
  },
  {
    name: "Enelida Rodriguez",
    tag: "Yard Cleanup",
    text: "They came out to remove brush and debris from my backyard, and they made the whole process quick and stress-free. The team showed up on time and worked efficiently.",
  },
  {
    name: "Yitzack LaVoz",
    tag: "Polite Crew",
    text: "Great junk removal. They arrived on time, and they speak English and Spanish, so they can communicate with the Latin community as well. I recommend them and definitely will use their services again.",
  },
  {
    name: "Tavia Branson",
    tag: "Junk Removal",
    text: "Noah and Harry were super friendly and communicative. I had a pretty large couch that my dog ripped up — they were in and out in 20 minutes!",
  },
  {
    name: "Angela Robinson",
    tag: "Moving",
    text: "Noah was AMAZING. He did a move out junk removal for me. He priced it below my expectations, and he was quick and thorough. HIGHLY IMPRESSED, HIGHLY RECOMMEND.",
  },
  {
    name: "Kenneth Amos",
    tag: "Fair Pricing",
    text: "Just moved in town and had a garage full of boxes and trash. Came to my home, quoted me, and started loading immediately! Very fast and reasonably priced. Would use them again in a heartbeat.",
  },
  {
    name: "Mellany",
    tag: "Junk Removal",
    text: "These guys are young, responsible and very committed to helping remove junk! They kept in constant contact so I knew exactly when to expect them and told me what they do with my items once they take them.",
  },
  {
    name: "Troy Hall",
    tag: "Fair Pricing",
    text: "The company does great price estimates. Very budget-friendly. Both guys who came out were outstanding with communication. They immediately understood the job expectations and provided excellent feedback.",
  },
  {
    name: "J Champ",
    tag: "Junk Removal",
    text: "Showed up in a matter of hours on a holiday weekend, loaded a bunch of mattresses and box springs very quickly. Team was professional, fast and friendly — would highly recommend.",
  },
  {
    name: "Christy Ortiz",
    tag: "Junk Removal",
    text: "ProGrade made junk removal incredibly easy. They were super easy to communicate with, arrived quickly, gave me a clear estimate, and had everything cleaned out fast. Professional, efficient, and hassle-free.",
  },
];
