/**
 * Branch-specific copy for the enquiry page (director, address, landing content).
 * Keys must match `branch` query param and EnquiryForm branch options.
 */
export const BRANCH_ENQUIRY_DETAILS = {
  Nigdi: {
    directorName: 'Mr. Nishant Patwardhan',
    directorTitle: 'Director, MSA Nigdi',
    cloudinaryId: 'v1764218938/abhi_mehta_f6h4om',
    addressLines: ['3rd Floor, Kohinoor Arcade, Nigdi Chowk, Pune'],
    phone: '70587 40609',
    aboutText:
      'Matrix Nigdi offers a disciplined, concept-first environment for JEE, NEET, and MHT-CET aspirants. Our faculty combine rigour with mentorship so every student builds strong fundamentals and exam temperament.',
    directorQuote:
      'Our mission at Nigdi is to transform potential into performance—with structured academics, honest feedback, and unwavering support for every learner.',
  },
  Shahunagar: {
    directorName: 'Mr. Ravindra Yadav',
    directorTitle: 'Director, MSA Shahunagar',
    cloudinaryId: 'v1764990905/yadav_vv66wt',
    addressLines: ['Spine Road, Near NKGSB Bank, Purnanagar, Pune'],
    phone: '70587 40609',
    aboutText:
      'At Shahunagar, students benefit from small-batch attention, regular testing, and faculty who stay invested in each child’s progress—from basics to competitive readiness.',
    directorQuote:
      'We believe consistency beats intensity alone. Our team is here to guide students with clarity, patience, and a system that rewards steady improvement.',
  },
  Chinchwad: {
    directorName: 'Mr. Algesh Patrike',
    directorTitle: 'Director, MSA Chinchwad',
    cloudinaryId: 'v1765163829/algesh_hskjtk',
    addressLines: ['3rd Floor, Geo Spaces, Opp. Elpro Mall, Link Road, Pune'],
    phone: '70587 40609',
    aboutText:
      'Chinchwad centre blends classroom teaching with doubt-solving and performance analytics—so families always know where the student stands and what comes next.',
    directorQuote:
      'Excellence is a habit we build together with students and parents—through transparent communication and teaching that respects each learner’s pace.',
  },
  Ravet: {
    directorName: 'Mr. Abhishek Mehta',
    directorTitle: 'Director, MSA Ravet',
    cloudinaryId: 'v1764218937/nishant_tifi1f',
    addressLines: [
      'Ravet 1: 3rd Floor, Blooming Dale, Above Dominos',
      'Ravet 2: 3rd Floor, Sr No. 95, Bhalchandra Prospera',
    ],
    phone: '70587 40609',
    aboutText:
      'With two convenient locations in Ravet, we serve a wide catchment with the same Matrix standards—structured batches, quality material, and mentors who care.',
    directorQuote:
      'Our goal is simple: help every student walk into the exam hall with confidence, built on practice, analysis, and conceptual depth—not last-minute stress.',
  },
  Wakad: {
    directorName: 'Mr. Manoj Kumar',
    directorTitle: 'Director, MSA Wakad',
    cloudinaryId: 'v1765163801/manoj_1_algvci',
    addressLines: [
      'Sr No 190/190 Ground Floor, Sunder Height, Near Saraswat Bank, Datta Mandir, Wakad, Pune',
    ],
    phone: '70587 40609',
    aboutText:
      'Wakad offers a focused setting for serious aspirants—balanced schedules, accountable faculty, and a culture that rewards curiosity and hard work.',
    directorQuote:
      'We invest in the student behind the scorecard—mindset, discipline, and resilience matter as much as syllabus coverage.',
  },
  Moshi: {
    directorName: 'Mr. Umesh Bharde',
    directorTitle: 'Director, MSA Moshi',
    cloudinaryId: 'v1765163805/umesh_1_aoyp2r',
    addressLines: ['Bharat Mata Chowk, Above Reliance Digital, Moshi, Pune'],
    phone: '70587 40609',
    aboutText:
      'Moshi brings Matrix methodology closer to families in PCMC—with the same academic rigour, regular PTMs, and support for board plus competitive goals.',
    directorQuote:
      'Parents trust us when they see progress they can measure—we work to earn that trust every week.',
  },
  Kolhapur: {
    directorName: 'Matrix Science Academy',
    directorTitle: 'Kolhapur centre',
    cloudinaryId: null,
    addressLines: ['For centre address and batch timings, call us or submit this form—we’ll connect you with the Kolhapur team.'],
    phone: '70587 40609',
    aboutText:
      'Our Kolhapur team extends Matrix’s approach to science and competitive coaching—reach out for batch details, faculty introductions, and enrolment steps.',
    directorQuote:
      'Distance should not limit access to quality guidance—we’re here to help Kolhapur students plan their path with clarity.',
  },
  Rahatani: {
    directorName: 'Matrix Science Academy',
    directorTitle: 'Rahatani centre',
    cloudinaryId: null,
    addressLines: ['For centre address and batch timings, call us or submit this form—we’ll connect you with the Rahatani team.'],
    phone: '70587 40609',
    aboutText:
      'Rahatani families can explore Matrix programmes, faculty support, and schedules—submit an enquiry and our team will respond with next steps.',
    directorQuote:
      'We’re committed to transparent counselling and academic planning for every student who walks in.',
  },
}

export function getBranchEnquiryDetail(branchKey) {
  if (!branchKey || !BRANCH_ENQUIRY_DETAILS[branchKey]) return null
  return { key: branchKey, ...BRANCH_ENQUIRY_DETAILS[branchKey] }
}
