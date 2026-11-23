// SafeTrack (Colegio de Montalban) - Multi-Screen SPA Architecture
// Unified Disciplinary Incident, Grievance Intake, and Disciplinary Clearance System

// ========================================================
// STORAGE KEYS & SEED DATA
// ========================================================
const STORAGE_KEY_CASES = 'cdm_safetrack_cases';
const STORAGE_KEY_CASES_ALT = 'safetrack_cases';
const STORAGE_KEY_SESSION = 'safetrack_active_session';
const STORAGE_KEY_TOKEN = 'safetrack_auth_token';
const STORAGE_KEY_ACTIVE_TAB = 'safetrack_active_tab';
const STORAGE_KEY_ACTIVE_DOCKET = 'safetrack_active_docket';
const STORAGE_KEY_MY_REPORTS = 'cdm_safetrack_my_reports';
const STORAGE_KEY_MESSAGES = 'safetrack_messages';

// 6 Seed Disciplinary Case Records
const INITIAL_CASES = [
  {
    id: 'CDM-2024-001',
    studentNumber: '2022-01492-CM-0',
    studentName: 'Christian Reyes',
    institute: 'ICS',
    classification: 'Article VI, Sec 4.56 — AI Tool Misuse & Generative Academic Fraud',
    date: '2024-09-14',
    location: 'ICS Computer Lab 3',
    description: 'Uncredited code submission and unauthorized collaboration detected during 3rd Year Midterm Systems Analysis examination.',
    complainant: 'Prof. M. Santos (Faculty)',
    isAnonymous: false,
    isAnonymousToPublic: false,
    guidanceEndorsed: true,
    status: 'Resolved',
    sanctionNotes: 'Formal reprimand issued; completed 10 hours laboratory assistant duty; grade penalty applied. Case resolved and cleared.'
  },
  {
    id: 'CDM-2024-002',
    studentNumber: 'Anonymous Montalbano #4812',
    studentName: 'Anonymous Montalbano #4812',
    institute: 'IBA',
    classification: 'Article VI, Sec 4.55 — Online Harassment & Cyberbullying',
    date: '2024-10-02',
    location: 'Business Hall Quadrangle',
    description: 'Verbal intimidation and derogatory social media posts targeting a second-year BSBA student.',
    complainant: 'Confidential OSA Protected Report',
    isAnonymous: true,
    isAnonymousToPublic: true,
    maskedAlias: 'Anonymous Montalbano #4812',
    actualStudentNumber: '2023-08124-CM-0',
    actualStudentName: 'Samantha Nicole Cruz',
    guidanceEndorsed: true,
    status: 'Pending',
    sanctionNotes: '[CONFIDENTIAL REPORT] Identity securely verified and confirmed by OSA: Samantha Nicole Cruz (2023-08124-CM-0). Masked from public viewing.'
  },
  {
    id: 'CDM-2024-003',
    studentNumber: '2021-00213-CM-0',
    studentName: 'Mark Joseph Villanueva',
    institute: 'IE',
    classification: 'Article VI, Sec 4.36 — Defacing Property & Vandalism',
    date: '2024-10-18',
    location: 'Engineering Workshop Building B',
    description: 'Defacement of drafting workstations and unauthorized dismantling of laboratory electronics testing gear.',
    complainant: 'Engr. D. Bautista (Dept Head)',
    isAnonymous: false,
    isAnonymousToPublic: false,
    guidanceEndorsed: false,
    status: 'Investigation',
    sanctionNotes: 'CCTV footage under forensic review. Awaiting official restitution estimate from Campus Property Custodian.'
  },
  {
    id: 'CDM-2024-004',
    studentNumber: '2024-03912-CM-0',
    studentName: 'Alyssa Marie Flores',
    institute: 'IEd',
    classification: 'Article VI, Sec 4.10 — Non-wearing / Improper Uniform & ID Card',
    date: '2024-10-25',
    location: 'Main Campus Entrance Gate',
    description: 'Repeated non-wearing of official institutional ID card and non-adherence to IEd prescribed student uniform guidelines.',
    complainant: 'Campus Security Office',
    isAnonymous: false,
    isAnonymousToPublic: false,
    guidanceEndorsed: false,
    status: 'Resolved',
    sanctionNotes: 'First formal warning issued. Signed promissory agreement with the Office of the Prefect of Discipline.'
  },
  {
    id: 'CDM-2024-005',
    studentNumber: '2023-09431-CM-0',
    studentName: 'Joshua David Aquino',
    institute: 'ICS',
    classification: 'Article VI, Sec 4.5 — Campus Disturbance & Noise Commotion',
    date: '2024-11-01',
    location: 'Audio Visual Room 2',
    description: 'Disruptive altercation and shouting confrontation during an inter-institute tech colloquium session.',
    complainant: "Dean's Office Staff",
    isAnonymous: false,
    isAnonymousToPublic: false,
    guidanceEndorsed: true,
    status: 'Investigation',
    sanctionNotes: 'Summoned for preliminary conciliation conference at the College Guidance & Counseling Center (CGCC).'
  },
  {
    id: 'CDM-2024-006',
    studentNumber: '2022-04518-CM-0',
    studentName: 'Patricia Mae Santos',
    institute: 'IEd',
    classification: 'Article VI, Sec 4.3 — Smoking / Vaping within Campus',
    date: '2024-11-03',
    location: 'Education Wing Restroom Area',
    description: 'Possession and usage of prohibited electronic vaporizing device inside campus academic premises.',
    complainant: 'Maintenance Staff',
    isAnonymous: false,
    isAnonymousToPublic: false,
    guidanceEndorsed: true,
    status: 'Pending',
    sanctionNotes: 'Vape device confiscated. Awaiting conference with parent/guardian and Student Discipline Committee.'
  }
];

// Seeded Two-Way OSAS Consultation & Guidance Messages
const INITIAL_MESSAGES = [
  {
    threadId: 'CDM-2024-002',
    title: 'Bullying / Harassment Inquiry',
    docket: 'CDM-2024-002',
    classification: 'Article VI, Sec 4.55 — Online Harassment & Cyberbullying',
    status: 'Awaiting Student Reply',
    participant: 'Anonymous Montalbano #4812',
    studentNumber: '2023-08124-CM-0',
    actualStudentName: 'Samantha Nicole Cruz',
    studentName: 'Anonymous Montalbano #4812',
    institute: 'IBA',
    isAnonymous: true,
    isAnonymousToPublic: true,
    maskedAlias: 'Anonymous Montalbano #4812',
    unreadCount: 1,
    lastUpdate: '9:20 AM',
    lastDate: 'Today',
    date: '2024-10-02',
    location: 'Business Hall Quadrangle',
    referral: 'CGCC Guidance Endorsed',
    sanctions: 'Pending formal Board conciliation hearing',
    messages: [
      {
        id: 'msg-2002-1',
        sender: 'osa',
        senderName: 'Office of Student Affairs (Prefect Desk)',
        role: 'OSAS Officer',
        type: 'text',
        text: 'Official Notice: Case Docket #CDM-2024-002 has been docketed with OSAS under RA 10627 (Anti-Bullying Act) provisions. All proceedings and disclosures in this channel remain strictly confidential.',
        timestamp: '1:30 PM',
        date: 'Oct 24, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2002-2',
        sender: 'osa',
        senderName: 'Officer ErNiel',
        role: 'OSAS Officer',
        type: 'text',
        text: 'Good day Montalbano. Here is the institutional copy of your filed incident summary. Please review and confirm your availability for a confidential preliminary conciliation.',
        timestamp: '1:32 PM',
        date: 'Oct 24, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2002-3',
        sender: 'student',
        senderName: 'Anonymous Montalbano #4812',
        role: 'Student (Protected)',
        type: 'text',
        text: 'Noted with thanks, Officer ErNiel. I have received the schedule and documentation. I will be present.',
        timestamp: '1:40 PM',
        date: 'Oct 24, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2002-4',
        sender: 'student',
        senderName: 'Anonymous Montalbano #4812',
        role: 'Student (Protected)',
        type: 'photo',
        text: 'Here is the screenshot of the group chat messages from the quadrangle incident as requested for evidentiary validation.',
        attachment: {
          type: 'image',
          name: 'Harassment_Evidence_Screenshot.png',
          size: '1.2 MB',
          url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iMzQwIiB2aWV3Qm94PSIwIDAgNjAwIDM0MCI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiMwZjE3MmEiLz48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSI1NjAiIGhlaWdodD0iMzAwIiByeD0iMTYiIGZpbGw9IiMxZTI5M2IiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNTAiIHk9IjcwIiBmaWxsPSIjNjBhNWZhIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPlNBRkUgVFJBQ0sgLSBFVklERU5DRSBDQVBUVVJFICNDRE0tMjAyNC0wMDI8L3RleHQ+PHRleHQgeD0iNTAiIHk9IjEwNSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiPlRpbWVzdGFtcDogMjAyNC0xMC0wMiAxNDoxNSBQSFQgfCBMb2NhdGlvbjogUXVhZHJhbmdsZTwvdGV4dD48cmVjdCB4PSI1MCIgeT0iMTMwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjE1MCIgcng9IjEwIiBmaWxsPSIjMGIxMzI5Ii8+PHRleHQgeD0iNzAiIHk9IjE3MCIgZmlsbD0iI2NiZDVlMSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMyI+Jmd0OyBbRGlnaXRhbCBIYXJhc3NtZW50IFRyYW5zY3JpcHQgTG9nc108L3RleHQ+PHRleHQgeD0iNzAiIHk9IjIwMCIgZmlsbD0iIzM4YmRmOCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiI+U3ViamVjdDogR3JvdXAgY2hhdCBpbnRpbWlkYXRpb24gYW5kIHVuYXV0aG9yaXplZCByZWNvcmRpbmc8L3RleHQ+PHRleHQgeD0iNzAiIHk9IjIzMCIgZmlsbD0iIzM0ZDM5OSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiI+VmVyaWZpZWQgYnkgT1NBUyBJbnRlZ3JpdHkgVmFsaWRhdG9yOiBQQVNTIChFbmNyeXB0ZWQpPC90ZXh0PjxjaXJjbGUgY3g9IjUxMCIgY3k9IjcwIiByPSIxNiIgZmlsbD0iIzEwYjk4MSIvPjxwYXRoIGQ9Ik01MDMgNzBsNSA1IDktOSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+'
        },
        timestamp: '3:15 PM',
        date: 'Yesterday',
        status: 'seen'
      },
      {
        id: 'msg-2002-5',
        sender: 'osa',
        senderName: 'Officer ErNiel',
        role: 'OSAS Officer',
        type: 'text',
        text: 'Thank you. Evidence item has been logged into Docket #CDM-2024-002. Please confirm if you are able to attend the conciliation conference tomorrow at 2:00 PM in CGCC Room 201.',
        timestamp: '9:20 AM',
        date: 'Today',
        status: 'delivered'
      }
    ]
  },
  {
    threadId: 'CDM-2024-001',
    title: 'Academic Dishonesty Review',
    docket: 'CDM-2024-001',
    classification: 'Article VI, Sec 4.56 — AI Tool Misuse & Generative Academic Fraud',
    status: 'Resolved / Closed',
    participant: 'Christian Reyes',
    studentNumber: '2022-01492-CM-0',
    actualStudentName: 'Christian Reyes',
    studentName: 'Christian Reyes',
    institute: 'ICS',
    isAnonymous: false,
    isAnonymousToPublic: false,
    maskedAlias: null,
    unreadCount: 0,
    lastUpdate: 'Sep 28',
    lastDate: 'Sep 28, 2026',
    date: '2024-09-14',
    location: 'ICS Computer Lab 3',
    referral: 'Standard Administrative',
    sanctions: 'Completed 10 hours laboratory assistant duty; sanctions cleared.',
    messages: [
      {
        id: 'msg-2001-1',
        sender: 'osa',
        senderName: 'Office of Student Affairs',
        role: 'OSAS Officer',
        type: 'text',
        text: 'Formal Disciplinary Advisory: Review of 3rd Year Midterm Systems Analysis examination submission (Docket #CDM-2024-001).',
        timestamp: '9:00 AM',
        date: 'Sep 25, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2001-2',
        sender: 'student',
        senderName: 'Christian Reyes',
        role: 'Student',
        type: 'text',
        text: 'Good day. I acknowledge the infraction regarding code collaboration without citation and submit myself to the Board disposition.',
        timestamp: '10:15 AM',
        date: 'Sep 25, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2001-3',
        sender: 'osa',
        senderName: 'Office of the Prefect',
        role: 'Prefect Desk',
        type: 'document',
        text: 'Notice of clearance completion: 10 hours laboratory assistant duty verified. Certificate of Good Moral hold has been cleared.',
        attachment: {
          type: 'document',
          name: 'CdM_Clearance_Confirmation_CDM2024-001.pdf',
          size: '185 KB',
          fileExt: 'pdf'
        },
        timestamp: '10:15 AM',
        date: 'Sep 28, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2001-4',
        sender: 'student',
        senderName: 'Christian Reyes',
        role: 'Student',
        type: 'text',
        text: 'Thank you Prefect Office for facilitating my resolution duty. I appreciate the fair process.',
        timestamp: '11:00 AM',
        date: 'Sep 28, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2001-5',
        sender: 'osa',
        senderName: 'Office of Student Affairs',
        role: 'OSAS Officer',
        type: 'text',
        text: 'Case Docket #CDM-2024-001 is officially marked as Resolved and Closed. Your graduation clearance remains in good standing.',
        timestamp: '11:30 AM',
        date: 'Sep 28, 2026',
        status: 'seen'
      }
    ]
  },
  {
    threadId: 'CDM-2024-003',
    title: 'Workshop Property Damage Inquiry',
    docket: 'CDM-2024-003',
    classification: 'Vandalism / Property Damage',
    status: 'Follow-Up Needed',
    participant: 'Mark Joseph Villanueva',
    studentNumber: '2021-00213-CM-0',
    actualStudentName: 'Mark Joseph Villanueva',
    studentName: 'Mark Joseph Villanueva',
    institute: 'IE',
    isAnonymous: false,
    isAnonymousToPublic: false,
    maskedAlias: null,
    unreadCount: 0,
    lastUpdate: '8:45 AM',
    lastDate: 'Today',
    date: '2024-10-18',
    location: 'Engineering Workshop Building B',
    referral: 'Standard Administrative',
    sanctions: 'Under active equipment liability assessment',
    messages: [
      {
        id: 'msg-2003-1',
        sender: 'osa',
        senderName: 'Office of Student Affairs',
        role: 'OSAS Officer',
        type: 'text',
        text: 'Notice of inquiry regarding equipment failure at Engineering Workshop Building B on 2024-10-18.',
        timestamp: '2:00 PM',
        date: 'Oct 19, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2003-2',
        sender: 'student',
        senderName: 'Mark Joseph Villanueva',
        role: 'Student',
        type: 'text',
        text: 'Sir, I was operating the metal lathe machine when the circuit breaker tripped and the feed handle jammed. It was accidental, not deliberate vandalism.',
        timestamp: '11:30 AM',
        date: 'Oct 20, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2003-3',
        sender: 'osa',
        senderName: 'Prefect Desk',
        role: 'Prefect Desk',
        type: 'document',
        text: 'Please review the Workshop Equipment Damage Assessment Report from the Laboratory Technician.',
        attachment: {
          type: 'document',
          name: 'Workshop_Damage_Assessment_IE.pdf',
          size: '320 KB',
          fileExt: 'pdf'
        },
        timestamp: '9:00 AM',
        date: 'Oct 21, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2003-4',
        sender: 'osa',
        senderName: 'OSAS Prefect Desk',
        role: 'OSAS Officer',
        type: 'followup',
        text: '🔔 OFFICIAL OSAS FOLLOW-UP NOTICE: 48-Hour reminder to submit your formal written incident narrative endorsed by your Department Chair before the hearing.',
        timestamp: '8:45 AM',
        date: 'Today',
        status: 'delivered'
      }
    ]
  },
  {
    threadId: 'CDM-2024-005',
    title: 'Audio Visual Room Disruption Inquiry',
    docket: 'CDM-2024-005',
    classification: 'Campus Disruption',
    status: 'Open / Active',
    participant: 'Joshua David Aquino',
    studentNumber: '2023-09431-CM-0',
    actualStudentName: 'Joshua David Aquino',
    studentName: 'Joshua David Aquino',
    institute: 'ICS',
    isAnonymous: false,
    isAnonymousToPublic: false,
    maskedAlias: null,
    unreadCount: 1,
    lastUpdate: '11:00 AM',
    lastDate: 'Today',
    date: '2024-11-01',
    location: 'Audio Visual Room 2',
    referral: 'CGCC Guidance Endorsed',
    sanctions: 'Under active conciliation & restorative guidance',
    messages: [
      {
        id: 'msg-2005-1',
        sender: 'osa',
        senderName: 'Office of Student Affairs',
        role: 'OSAS Officer',
        type: 'text',
        text: 'Notice of incident consultation regarding Audio Visual Room 2 unauthorized equipment relocation on 2024-11-01.',
        timestamp: '1:15 PM',
        date: 'Nov 2, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2005-2',
        sender: 'student',
        senderName: 'Joshua David Aquino',
        role: 'Student',
        type: 'text',
        text: 'Good afternoon Officer. Our org was rushing the AV setup for the college assembly. We apologize for the disturbance and lack of gate pass.',
        timestamp: '2:30 PM',
        date: 'Nov 2, 2026',
        status: 'seen'
      },
      {
        id: 'msg-2005-3',
        sender: 'osa',
        senderName: 'Officer ErNiel',
        role: 'OSAS Officer',
        type: 'text',
        text: 'Your restorative guidance session with CGCC Counselor Room 201 has been set for this coming Monday at 10:00 AM.',
        timestamp: '4:10 PM',
        date: 'Yesterday',
        status: 'seen'
      },
      {
        id: 'msg-2005-4',
        sender: 'student',
        senderName: 'Joshua David Aquino',
        role: 'Student',
        type: 'text',
        text: 'Received, Officer. I will arrive 15 minutes before the session with our org representative.',
        timestamp: '11:00 AM',
        date: 'Today',
        status: 'delivered'
      }
    ]
  }
];

// 2024 Revised Student Handbook Offenses Registry
const HANDBOOK_OFFENSES = [
  {
    "num": 1,
    "offense": "Loitering especially along the corridors",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "Community service",
    "fourth": "3 to 5 class days suspension",
    "succeeding": "Expulsion"
  },
  {
    "num": 2,
    "offense": "Leaving and entering classrooms without permission from the instructor while classes is going on.",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "Community service",
    "fourth": "3 to 5 class days suspension",
    "succeeding": "Expulsion"
  },
  {
    "num": 3,
    "offense": "Smoking within the institution's premises.",
    "first": "Counseling / summon guardian",
    "second": "Reprimand and warning",
    "third": "3 to 5 class days suspension",
    "fourth": "6 to 8 class days suspension",
    "succeeding": "Expulsion"
  },
  {
    "num": 4,
    "offense": "Littering within the institution's premises.",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "Community service",
    "fourth": "Community service (with additional hours)",
    "succeeding": "3 to 5 class days suspension"
  },
  {
    "num": 5,
    "offense": "Creating unnecessary noise, shouting, Boisterous laughter or causing commotion of any kind which may cause disturbances during programs, convocations, or other activities and functions, or while classes are going on.",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "Community service",
    "fourth": "to 5 class days suspension",
    "succeeding": "Expulsion"
  },
  {
    "num": 6,
    "offense": "Using cell phones or any electronic devices which tend to disrupt/distract ongoing classes or official assemblies or functions.",
    "first": "Counseling / confiscation of item",
    "second": "Reprimand and warning",
    "third": "3 to 5 class days suspension, Confiscation of item",
    "fourth": "6 to 8 class days suspension; Confiscation of item",
    "succeeding": "Expulsion"
  },
  {
    "num": 7,
    "offense": "Possession or use of any alcoholic drinks and/or entering the institution’s premises under its influence.",
    "first": "2 weeks suspension",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 8,
    "offense": "Possession of playing cards or gambling devices or indulging in any form of betting or gambling in the institution’s premises.",
    "first": "3 to 5 class days suspension; Confiscation of item",
    "second": "6 to 8 class days suspension; Confiscation of item",
    "third": "2 weeks suspension",
    "fourth": "Expulsion",
    "succeeding": ""
  },
  {
    "num": 9,
    "offense": "Wearing of attires not befitting a college student such as: untidy, revealing or indecent attires, shorts, slippers, long nails, dyed hair and the like. For boys: wearing of earrings, long hair, ballcaps or other unnecessary body adornments. For girls: single or dangling earrings. or other unnecessary body adornments",
    "first": "Counseling / summon guardian; Confiscation of item",
    "second": "Reprimand and warning; Confiscation of item",
    "third": "3 to 5 class days suspension; Confiscation of item",
    "fourth": "6 to 8 class days suspension; Confiscation of item",
    "succeeding": "Expulsion"
  },
  {
    "num": 10,
    "offense": "Non-wearing or improper use and style of wearing the prescribed uniform, ID card or logo.",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "Community service",
    "fourth": "3 to 5 class days suspension; Community service",
    "succeeding": "Expulsion"
  },
  {
    "num": 11,
    "offense": "Spitting or urinating in the wrong places within the institution’s premises.",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "Community service",
    "fourth": "3 to 5 class days suspension; Community service",
    "succeeding": ""
  },
  {
    "num": 12,
    "offense": "Unauthorized use of classrooms, properties, equipment or facilities.",
    "first": "Counseling / summon guardian",
    "second": "Reprimand and warning",
    "third": "3 to 5 class days suspension",
    "fourth": "6 to 8 class days suspension",
    "succeeding": ""
  },
  {
    "num": 13,
    "offense": "Unauthorized eating or drinking inside the classrooms, library and laboratories.",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "3 to 5 class days suspension: Community service",
    "fourth": "6 to 8 class days suspension; Community service",
    "succeeding": ""
  },
  {
    "num": 14,
    "offense": "Using language and/or committing acts that are offending, vulgar, and indecent, or any manner that may cause molestation or ridicule of students, employees, faculty members or officials of the institution.",
    "first": "Counseling / summon guardian; Community service",
    "second": "2 weeks suspension",
    "third": "Expulsion",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 15,
    "offense": "Writing, drawing, sketching, etching, carving, engraving, printing or painting any indecent, lewd words or figures on blackboards, whiteboards walls or any property of the institution.",
    "first": "Counseling / summon guardian; Reinstitution of damaged property / item",
    "second": "6 to 8 class days suspension; Reinstitution of damaged property / item",
    "third": "Expulsion. Reinstitution of damaged property / item",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 16,
    "offense": "Removing official notices and posters from the bulletin boards without authorization, unauthorized alteration or erasure of official announcements.",
    "first": "2 weeks suspension; Reinstitution of damaged property / item",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 17,
    "offense": "Posting any written or printed material without the approval of the Office of Student Affairs and Services. (announcements of the different colleges concerning only them allege and posted on their respective bulletin boards are excluded from this prohibition).",
    "first": "2 weeks suspension, Reinstitution of damaged property/ item",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 18,
    "offense": "Scandalous public display of affection (ie. kissing, petting, necking, touching of private / sensitive parts of the body, etc )",
    "first": "Reprimand and warning; Counseling / summon guardian",
    "second": "3 to 5 class days suspension",
    "third": "6 to 8 class days suspension",
    "fourth": "9 to 11 class days suspension",
    "succeeding": "Expulsion"
  },
  {
    "num": 19,
    "offense": "Vandalism, defacing, or damage to school property or of any individual in the school community.",
    "first": "Reprimand and warning; Counseling / summon guardian; Reinstitution of damaged property / item",
    "second": "3 to 5-day class suspension; Reinstitution of damaged property / item",
    "third": "Expulsion. Reinstitution of damaged property / item",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 20,
    "offense": "Unauthorized use of electricity by plugging devices and equipment (laptops, cellphones, etc) without the supervision of persons in authority.",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "Community service within the campus",
    "fourth": "3 to 5 class days suspension; Community service",
    "succeeding": ""
  },
  {
    "num": 21,
    "offense": "Unauthorized moving of furniture (tables, chairs, etc.) from one place to another and willful leaving of chairs in disarray after use.",
    "first": "Counseling",
    "second": "Reprimand and warning",
    "third": "Community service within the campus",
    "fourth": "to 5 class days suspension; Community service",
    "succeeding": ""
  },
  {
    "num": 22,
    "offense": "Cheating during any examination, quiz, test, or plagiarism in connection with any academic works. Cheating includes: a) discussion with one another without permission; b) unauthorized possession of materials relative to the exam; c) allowing another to copy; d) copying any other work; e) having somebody else take the exam.",
    "first": "Reprimand and warning; Counseling / summon guardian; Considered failed in that examination",
    "second": "One (1) semester suspension",
    "third": "Expulsion",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 23,
    "offense": "Embezzlement or malversation of institution or organizational funds or property.",
    "first": "Counseling / summon guardian; Reinstitution of damaged property / item",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 24,
    "offense": "Encouraging others to violate institutional rules, regulations or policies.",
    "first": "Reprimand and warning; Counseling / summon guardian;",
    "second": "6 to 8 class days suspension; Community service",
    "third": "Expulsion",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 25,
    "offense": "Lending or borrowing of one's ID card and other forms of misrepresentation",
    "first": "Reprimand and warning; Counseling / summon guardian;",
    "second": "6 to 8 class days suspension; Community service",
    "third": "Expulsion",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 26,
    "offense": "Trespassing, entry and exit through unauthorized areas.",
    "first": "Reprimand and warning; Counseling / summon guardian",
    "second": "2 weeks suspension",
    "third": "Expulsion",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 27,
    "offense": "Use of megaphones or public address systems within the institutions premises without a written permission from the administration.",
    "first": "2 weeks suspension",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 28,
    "offense": "Open insubordination of duly constituted authorities.",
    "first": "Counseling / summon guardian: 6 to 8 class days suspension",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 29,
    "offense": "Habitual disregard or willful violation on established policies and regulations.",
    "first": "Counseling / summon guardian; 6 to 8 class days suspension; Community service",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 30,
    "offense": "Hacking on computer systems, unauthorized installing or uninstalling of programs or applications.",
    "first": "6 to 8 class days suspension; Community service; Reinstitution of damaged property / item",
    "second": "Expulsion, Reinstitution of damaged property / item",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 31,
    "offense": "Dishonesty or lying to a person in authority or act of fraud.",
    "first": "Counseling / summon guardian; 2 weeks suspension",
    "second": "One (1) semester suspension",
    "third": "Expulsion",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 32,
    "offense": "Removing official stickers, codes or other paraphernalia on school properties and equipment.",
    "first": "6 to 8 class days suspension; Community service; Reinstitution of damaged property / item",
    "second": "Expulsion; Reinstitution of damaged property / item",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 33,
    "offense": "Posting, exhibiting, possession, distribution or circulation of unauthorized, subversive, indecent, or morally offensive written, printed material or any objects inside the institution's premises.",
    "first": "Counseling / summon guardian; confiscation of item.",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 34,
    "offense": "Unauthorized solicitation or collection of money or sale of tickets or any article.",
    "first": "Reprimand and warning; Counseling / summon guardian; Confiscation of item",
    "second": "3 to 5 class days suspension; Confiscation of item",
    "third": "3 to 5 class days suspension; Confiscation of item",
    "fourth": "Expulsion",
    "succeeding": ""
  },
  {
    "num": 35,
    "offense": "Frequent or deliberate non-attendance of important and/or institutional assemblies within the semester.",
    "first": "Reprimand and warning; Counseling / summon guardian",
    "second": "2 weeks suspension",
    "third": "One (1) semester suspension",
    "fourth": "Expulsion",
    "succeeding": ""
  },
  {
    "num": 36,
    "offense": "Theft or damage to property of the institution or of an individual or any student of the institution.",
    "first": "6 to 8 class days suspension; Reinstitution of damaged property / item; Police sport.",
    "second": "Expulsion; Reinstitution of damaged property / item; Police report.",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 37,
    "offense": "Submitting false or misleading statement in official documents filed with the institution, publishing or disseminating false and derogatory statements about the",
    "first": "2 weeks suspension",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 38,
    "offense": "Stealing, forgery or tampering with institutional records or credentials, of securing or using forged materials.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 39,
    "offense": "Carrying deadly weapons such as firearms, explosives, ice picks, knives and the likes, within the institution s premises or in any school functions or activities.",
    "first": "2 weeks suspension; Police report; Confiscation of item.",
    "second": "Expulsion; Police repos; Confiscation of item",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 40,
    "offense": "Threats to use deadly weapons, to inflict physical harm or threats to life.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 41,
    "offense": "Participation in any brawl, riot, or infliction of physical injuries on- campus or off- campus school activities.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 42,
    "offense": "Direct assault upon any member of the academic community within the institution.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 43,
    "offense": "Instigating, presenting or threatening students or faculty members or school authorities from attending classes or entering the school premises or from discharging their duties.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 44,
    "offense": "Affiliating with organizations whose aims are contrary to the objectives of the institution and whose activities may put the students or any other person in peril (ie. fraternities, sororities and the like)",
    "first": "Expulsion",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 45,
    "offense": "Participation in any illegal rites, ceremonies, ordeals which includes hazing and initiations.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 46,
    "offense": "Unauthorized or illegal possession, use or sale of prohibited drugs or chemicals inside the institution's premises or in any school- sponsored activities.",
    "first": "Counseling / Summon guardian; Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 47,
    "offense": "Commission of crime involving moral turpitude, rape, staffa, acts of lusciousness or moaldepraip.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 48,
    "offense": "Extortion",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 49,
    "offense": "Deliberate disruption of academic functions or institutional activities through illegal assemblies, demonstrations, boycotts, pickets or mass actions or related activities which tend to create public disorder or disturbance.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 50,
    "offense": "Acts of subversion, sedition or insurgency.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 51,
    "offense": "Commission of acts involving sexual harassment.",
    "first": "Expulsion; Police report",
    "second": "",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 52,
    "offense": "Committing acts that may embarrass the institution or bring dishonor upon it. (We define acts that may embarrass the institution or bring dishonor upon it as those acts that would go into the moral values of students such as their sense of honesty, justice, virtue, righteousness and ethics).",
    "first": "2 weeks suspension; Counseling / summon guardian",
    "second": "Expulsion",
    "third": "",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 53,
    "offense": "Violation of the provisions of the Institutional Code or other rules and regulations not herein mentioned: violation of the code of conduct.",
    "first": "3 to 5 class days suspension",
    "second": "6 to 8 class days suspension",
    "third": "9 to 11 class days suspension",
    "fourth": "One (1) semester suspension",
    "succeeding": ""
  },
  {
    "num": 54,
    "offense": "Unauthorized Class Recording: Recording audio, video, or screengrabs of lectures/discussions without explicit instructor /peer consent.",
    "first": "Reprimand, counseling, and media deletion",
    "second": "3 –5 days suspension",
    "third": "6–8 days suspension",
    "fourth": "Expulsion",
    "succeeding": ""
  },
  {
    "num": 55,
    "offense": "Online Harassment & Cyberbullying: Targeted online harassment, defamation, or hate speech against peers or faculty on digital platforms.",
    "first": "2 weeks suspension and guardian summons",
    "second": "1 semester suspension",
    "third": "Expulsion",
    "fourth": "",
    "succeeding": ""
  },
  {
    "num": 56,
    "offense": "AI Tool Misuse & Generative Academic Fraud: Submitting AI-generated work as original without authorization or using AI to bypass academic integrity protocols.",
    "first": "1st Offense: Grade of 5.0 or 0 in the specific task, reprimand, and counseling",
    "second": "Failed grade (5.0) in the subject and 3–5 days suspension",
    "third": "1 semester suspension",
    "fourth": "Expulsion",
    "succeeding": ""
  },
  {
    "num": 57,
    "offense": "Unauthorized Financial Solicitation: Conducting unapproved donation drives, solicitations, or financial collections using the institution's name, student government, or peer network without an OSAS permit.",
    "first": "Reprimand; Full turnover/surrender of collected funds; Counseling",
    "second": "3 to 5 class days suspension",
    "third": "1 semester suspension",
    "fourth": "",
    "succeeding": ""
  }
];

function generateHandbookBodyHtml() {
  const rows = HANDBOOK_OFFENSES.map(item => {
    const num = item.num;
    const desc = item.offense || '';
    const first = item.first || '—';
    const second = item.second || '—';
    const third = item.third || '—';
    const fourth = item.fourth || '—';
    const succeeding = item.succeeding || '—';
    const is2024 = [54, 55, 56, 57].includes(num);

    const searchTerms = `${num} ${desc} ${first} ${second} ${third} ${fourth} ${succeeding}`.toLowerCase();
    const badge = is2024 
      ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 uppercase tracking-wide">2024 Revision</span>' 
      : '';

    return `
      <div class="handbook-offense-row p-3.5 rounded-xl border border-[#E3E8EE] bg-white hover:border-[#635BFF]/50 transition space-y-2" data-search="${escapeHtml(searchTerms)}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#635BFF]/10 text-[#635BFF] border border-[#635BFF]/20">#${num}</span>
            <span class="text-xs font-bold text-[#0A2540]">${escapeHtml(desc)}</span>
          </div>
          ${badge}
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[11px] pt-1">
          <div class="p-2 rounded-lg bg-[#EEF3F8]">
            <div class="text-[9px] font-bold text-[#475569] uppercase tracking-wider">1st Offense</div>
            <div class="text-[#0A2540] font-medium leading-tight mt-0.5">${escapeHtml(first)}</div>
          </div>
          <div class="p-2 rounded-lg bg-[#EEF3F8]">
            <div class="text-[9px] font-bold text-[#475569] uppercase tracking-wider">2nd Offense</div>
            <div class="text-[#0A2540] font-medium leading-tight mt-0.5">${escapeHtml(second)}</div>
          </div>
          <div class="p-2 rounded-lg bg-[#EEF3F8]">
            <div class="text-[9px] font-bold text-[#475569] uppercase tracking-wider">3rd Offense</div>
            <div class="text-[#0A2540] font-medium leading-tight mt-0.5">${escapeHtml(third)}</div>
          </div>
          <div class="p-2 rounded-lg bg-[#EEF3F8]">
            <div class="text-[9px] font-bold text-[#475569] uppercase tracking-wider">4th Offense</div>
            <div class="text-[#0A2540] font-medium leading-tight mt-0.5">${escapeHtml(fourth)}</div>
          </div>
          <div class="p-2 rounded-lg bg-rose-50 border border-rose-100">
            <div class="text-[9px] font-bold text-rose-700 uppercase tracking-wider">Succeeding</div>
            <div class="text-rose-900 font-medium leading-tight mt-0.5">${escapeHtml(succeeding)}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Navigation Shortcuts -->
    <div class="policy-tab-strip flex gap-2 pb-3 mb-2 border-b border-[#E3E8EE] pt-1">
      <a href="#handbook-sec-accidents" class="policy-tab-btn px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#EEF3F8] text-[#0A2540] hover:bg-[#635BFF]/10 hover:text-[#635BFF] transition cursor-pointer">Art. V: Accidents &amp; Aid</a>
      <a href="#handbook-sec-uniform" class="policy-tab-btn px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#EEF3F8] text-[#0A2540] hover:bg-[#635BFF]/10 hover:text-[#635BFF] transition cursor-pointer">Art. VI Sec. 3: Uniform &amp; Grooming</a>
      <a href="#handbook-sec-penalties" class="policy-tab-btn px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#635BFF]/10 text-[#635BFF] hover:bg-[#635BFF]/20 transition cursor-pointer">Art. VI Sec. 4: 57 Misdemeanors</a>
      <a href="#handbook-sec-grievances" class="policy-tab-btn px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#EEF3F8] text-[#0A2540] hover:bg-[#635BFF]/10 hover:text-[#635BFF] transition cursor-pointer">Art. VI Sec. 5-6: Grievance Committee</a>
    </div>

    <!-- ARTICLE V, SECTION 1: ACCIDENTS & MEDICAL ASSISTANCE -->
    <div id="handbook-sec-accidents" class="p-4 rounded-2xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-base">🏥</span>
          <h4 class="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Article V, Section 1: Academic-Related Accidents &amp; Medical Aid</h4>
        </div>
        <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">24-Hr SLA Window</span>
      </div>
      <div class="text-xs text-[#475569] space-y-2 leading-relaxed">
        <p>Accidents involving bone fracture, internal/external hemorrhage, gunshot wounds, stab wounds, multiple lacerations, or venomous animal bites must be officially reported to the <strong>Medical Clinic Unit (MCU)</strong> and the <strong>Office of Student Affairs and Services (OSAS)</strong> within <strong>twenty-four (24) hours</strong>.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
          <div class="p-2.5 rounded-xl bg-white border border-[#E3E8EE]">
            <span class="font-bold text-[#0A2540] block mb-0.5">💰 Medical Financial Aid</span>
            <span>Qualified beneficiaries may receive medical expense assistance up to <strong class="text-emerald-700">₱5,000.00</strong> upon assessment by the joint MCU-OSAS committee.</span>
          </div>
          <div class="p-2.5 rounded-xl bg-white border border-[#E3E8EE]">
            <span class="font-bold text-[#0A2540] block mb-0.5">🕊️ Burial Assistance</span>
            <span>In the unfortunate event of student death, legitimate guardians or parents shall receive up to <strong class="text-emerald-700">₱10,000.00</strong> burial grant.</span>
          </div>
        </div>
        <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px]">
          <strong>Required Documentation &amp; Conditions:</strong> Valid medical certificate, police report, and incident report must be submitted to MCU and OSAS. Injuries are covered only if the student was within official class schedule or within 100 meters of school premises. Self-inflicted injuries or fraudulent claims disqualify the student.
        </div>
      </div>
    </div>

    <!-- ARTICLE VI, SECTION 3: SCHOOL UNIFORM & GOOD GROOMING -->
    <div id="handbook-sec-uniform" class="p-4 rounded-2xl bg-white border border-[#E3E8EE] space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-base">👔</span>
        <h4 class="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Article VI, Section 3: School Uniform &amp; Good Grooming Standards</h4>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-3 rounded-xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-1">
          <div class="font-bold text-[#0A2540] flex items-center gap-1.5">
            <span>👨 Male Students Attire</span>
          </div>
          <ul class="list-disc list-inside space-y-0.5 text-[11px] text-[#475569]">
            <li>Green pants, white polo with official CdM embroidered logo</li>
            <li>Plain white undershirt (no colored/printed graphics)</li>
            <li>Black socks and black formal closed leather shoes</li>
            <li>Official CdM Institutional ID visibly worn around neck</li>
            <li><strong>Grooming:</strong> Clean haircut; earrings, body adornments, dyed hair strictly prohibited</li>
          </ul>
        </div>

        <div class="p-3 rounded-xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-1">
          <div class="font-bold text-[#0A2540] flex items-center gap-1.5">
            <span>👩 Female Students Attire</span>
          </div>
          <ul class="list-disc list-inside space-y-0.5 text-[11px] text-[#475569]">
            <li>Green pants, white blouse with official CdM logo and green ribbon</li>
            <li>Black formal closed shoes and socks</li>
            <li>Official CdM Institutional ID visibly worn at all times</li>
            <li>Light makeup and lipstick allowed; single, non-dangling earrings permitted</li>
            <li>No excessive body adornments or brightly dyed hair</li>
          </ul>
        </div>
      </div>

      <!-- Specialized Attire & Grooming Policies -->
      <div class="p-3 rounded-xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-2 text-[11px] text-[#475569]">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <span class="font-bold text-[#0A2540] block mb-0.5">🏃 PE Uniform</span>
            <span>Official Colegio de Montalban physical education shirt and jogging pants worn exclusively during PE lecture and activity hours.</span>
          </div>
          <div>
            <span class="font-bold text-[#0A2540] block mb-0.5">🩺 IHCS / Field Study / OJT</span>
            <span>Prescribed clinical or pre-service uniform permitted strictly inside assigned Related Learning Experience (RLE) hospital venues and on Dean-approved duty days.</span>
          </div>
          <div>
            <span class="font-bold text-[#0A2540] block mb-0.5">🚫 Piercings &amp; Tattoos</span>
            <span>Skin piercing is strictly prohibited for all students (female students earrings only). Tattoos or skin markings on exposed body parts are strictly discouraged.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ARTICLE VI, SECTION 4: TABLE OF PENALTIES FOR STUDENT MISDEMEANOR (57 OFFENSES) -->
    <div id="handbook-sec-penalties" class="space-y-3">
      <div class="flex flex-wrap items-center justify-between gap-2 pt-2">
        <div class="flex items-center gap-2">
          <span class="text-base">⚖️</span>
          <div>
            <h4 class="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Article VI, Section 4: Table of Penalties for Student Misdemeanor</h4>
            <p class="text-[11px] text-[#475569]">Imposed after due process investigation by OSAS, Prefect of Discipline, and Evaluation Committee.</p>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#635BFF]/10 text-[#635BFF] border border-[#635BFF]/20">57 Codified Offenses</span>
      </div>

      <!-- Rendered 57 Offense Cards -->
      <div class="space-y-2">
        ${rows}
      </div>
    </div>

    <!-- ARTICLE VI, SECTIONS 5 & 6: SETTLEMENT OF COMPLAINTS, GRIEVANCES & PRESCRIPTIVE PERIOD -->
    <div id="handbook-sec-grievances" class="p-4 rounded-2xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-3 mt-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-base">🤝</span>
          <h4 class="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Article VI, Sections 5 &amp; 6: Settlement of Complaints, Grievances &amp; Prescriptive Period</h4>
        </div>
        <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#635BFF]/10 text-[#635BFF] border border-[#635BFF]/20">2-Week Prescriptive Resolution</span>
      </div>

      <div class="text-xs text-[#475569] space-y-3 leading-relaxed">
        <p>All grievance proceedings must conform to statutory due process, seeking equitable remedy through counseling, arbitration, and amicable conciliation before punitive sanctions are rendered.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3 rounded-xl bg-white border border-[#E3E8EE] space-y-1 text-[11px]">
            <span class="font-bold text-[#0A2540] block">📌 Referral Jurisdiction Guidelines:</span>
            <ul class="list-disc list-inside space-y-1">
              <li><strong>Student vs. Student:</strong> Initiated and settled by the <strong>Prefect of Discipline</strong> through conciliation and restorative dialogue.</li>
              <li><strong>Student vs. Faculty / School Personnel:</strong> Referred by the <strong>Guidance Counselor</strong> to the <strong>College Dean</strong> for appropriate administrative proceedings.</li>
              <li><strong>Faculty / Personnel vs. Student:</strong> Directly submitted to the <strong>College Dean</strong> for intake and review.</li>
            </ul>
          </div>

          <div class="p-3 rounded-xl bg-white border border-[#E3E8EE] space-y-1 text-[11px]">
            <span class="font-bold text-[#0A2540] block">🏛️ 5-Member Grievance Committee (GC):</span>
            <ol class="list-decimal list-inside space-y-1">
              <li><strong>SSG President</strong> — Student Body Representative</li>
              <li><strong>Faculty Association President</strong> — Faculty Representative</li>
              <li><strong>Prefect of Discipline</strong> — Disciplinary Enforcement</li>
              <li><strong>Guidance Counselor</strong> — Psycho-social &amp; Restorative Advisor</li>
              <li><strong>OSAS Head</strong> — Committee Chairman &amp; Presiding Officer</li>
            </ol>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-white border border-[#E3E8EE] space-y-1 text-[11px]">
          <div class="font-bold text-[#0A2540] flex items-center gap-1.5">
            <span>⏱️ Section 6: Prescriptive Resolution Period</span>
          </div>
          <p><strong>Two (2) Weeks Mandated Resolution:</strong> All disciplinary cases and complaints referred to the Grievance Committee must be fully resolved within two (2) weeks from official docketing. When arbitration cannot reach amicable settlement, findings and final recommendations are submitted to the <strong>Office of the College President</strong> for final approval. The President’s executive disposition is final and executory pursuant to Civil Service regulations.</p>
        </div>
      </div>
    </div>
  `;
}

// Institutional Policy Texts
const POLICY_TEXTS = {
  handbook: {
    icon: '📘',
    title: 'Colegio de Montalban Student Handbook (2024 Revised Version)',
    body: generateHandbookBodyHtml
  },
  antibullying: {
    icon: '🛡️',
    title: 'Republic Act No. 10627 (Anti-Bullying Act) & CdM Zero-Tolerance Framework',
    body: `
      <div class="space-y-4 text-xs text-[#475569] leading-relaxed">
        <div class="policy-card p-4 rounded-2xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-2">
          <p class="font-bold text-sm text-[#0A2540]">Republic Act No. 10627 Institutional Commitment</p>
          <p>Colegio de Montalban strictly enforces a zero-tolerance policy against all forms of bullying, harassment, cyber-defamation, social intimidation, or retaliatory acts committed by or against students on campus or through digital platforms (such as Facebook Messenger, group chats, Discord, or campus online forums).</p>
        </div>

        <div class="policy-card p-4 rounded-2xl bg-white border border-[#E3E8EE] space-y-2">
          <p class="font-bold text-sm text-[#0A2540]">Confidential Whistleblower &amp; Reporter Protection</p>
          <p>The SafeTrack intake system provides cryptographically secure pseudonymization for bullying grievances. Montalbanos filing complaints are protected from retaliation. Identifying student numbers and personal details are strictly shielded behind encrypted token locks.</p>
        </div>

        <div class="policy-card p-4 rounded-2xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-2">
          <p class="font-bold text-sm text-[#0A2540]">Investigation &amp; Due Process Resolution Procedures</p>
          <p>All registered anti-bullying reports are docketed to the Prefect of Discipline and forwarded to the Student Grievance Committee within forty-eight (48) hours of intake for preliminary evaluation.</p>
        </div>
      </div>
    `
  },
  cgcc: {
    icon: '🤝',
    title: 'College Guidance & Counseling Center (CGCC) Restorative Support Services',
    body: `
      <div class="space-y-4 text-xs text-[#475569] leading-relaxed">
        <div class="policy-card p-4 rounded-2xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-2">
          <p class="font-bold text-sm text-[#0A2540]">CGCC Restorative Guidance Model</p>
          <p>The College Guidance &amp; Counseling Center (CGCC) provides non-punitive, restorative intervention, psychosocial support, and conciliation for students involved in disciplinary matters, peer disputes, or academic distress.</p>
        </div>

        <div class="policy-card p-4 rounded-2xl bg-white border border-[#E3E8EE] space-y-2">
          <p class="font-bold text-sm text-[#0A2540]">Privileged Confidentiality Guarantee</p>
          <p>All counseling records, psychological intake assessments, and consultation transcripts are classified as strictly privileged communications under Republic Act 10173 (Data Privacy Act) and professional guidance counseling codes.</p>
        </div>

        <div class="policy-card p-4 rounded-2xl bg-[#EEF3F8] border border-[#E3E8EE] space-y-2">
          <p class="font-bold text-sm text-[#0A2540]">Office Location &amp; Contact Schedule</p>
          <p>Office: CGCC Suite, 2nd Floor Student Activity Building, Colegio de Montalban.<br>Operating Hours: Monday – Friday, 8:00 AM – 5:00 PM<br>Direct Email: guidance@cdm.edu.ph</p>
        </div>
      </div>
    `
  }
};


// ========================================================
// DATA ACCESS LAYER: SafeTrackStore
// ========================================================
class SafeTrackStore {
  constructor() {
    this.cases = this.loadCases();
    this.myReportIds = this.loadMyReportIds();
  }

  loadCases() {
    const stored = localStorage.getItem(STORAGE_KEY_CASES) || localStorage.getItem(STORAGE_KEY_CASES_ALT);
    if (!stored) {
      this.saveCases(INITIAL_CASES);
      return JSON.parse(JSON.stringify(INITIAL_CASES));
    }
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        this.saveCases(INITIAL_CASES);
        return JSON.parse(JSON.stringify(INITIAL_CASES));
      }
      // Migrate legacy classifications to official 2024 Handbook sections
      const legacyMap = {
        'Academic Dishonesty / Plagiarism': 'Article VI, Sec 4.56 — AI Tool Misuse & Generative Academic Fraud',
        'Academic Dishonesty': 'Article VI, Sec 4.56 — AI Tool Misuse & Generative Academic Fraud',
        'Bullying / Harassment': 'Article VI, Sec 4.55 — Online Harassment & Cyberbullying',
        'Vandalism / Property Damage': 'Article VI, Sec 4.36 — Defacing Property & Vandalism',
        'Vandalism': 'Article VI, Sec 4.36 — Defacing Property & Vandalism',
        'Uniform & Grooming Violation': 'Article VI, Sec 4.10 — Non-wearing / Improper Uniform & ID Card',
        'Campus Disruption': 'Article VI, Sec 4.5 — Campus Disturbance & Noise Commotion',
        'Substance Policy Violation': 'Article VI, Sec 4.3 — Smoking / Vaping within Campus',
        'Cyber-defamation': 'Article VI, Sec 4.55 — Online Harassment & Cyberbullying'
      };
      let changed = false;
      parsed.forEach((c) => {
        if (legacyMap[c.classification]) {
          c.classification = legacyMap[c.classification];
          changed = true;
        }
      });
      if (changed) {
        this.saveCases(parsed);
      }
      return parsed;
    } catch (e) {
      this.saveCases(INITIAL_CASES);
      return JSON.parse(JSON.stringify(INITIAL_CASES));
    }
  }

  saveCases(cases) {
    this.cases = cases;
    localStorage.setItem(STORAGE_KEY_CASES, JSON.stringify(cases));
    localStorage.setItem(STORAGE_KEY_CASES_ALT, JSON.stringify(cases));
  }

  loadMyReportIds() {
    const stored = localStorage.getItem(STORAGE_KEY_MY_REPORTS);
    if (!stored) {
      const defaults = ['CDM-2024-002'];
      this.saveMyReportIds(defaults);
      return defaults;
    }
    try {
      return JSON.parse(stored) || [];
    } catch (e) {
      return ['CDM-2024-002'];
    }
  }

  saveMyReportIds(ids) {
    this.myReportIds = ids;
    localStorage.setItem(STORAGE_KEY_MY_REPORTS, JSON.stringify(ids));
  }

  addMyReportId(id) {
    if (!this.myReportIds.includes(id)) {
      this.myReportIds.unshift(id);
      this.saveMyReportIds(this.myReportIds);
    }
  }

  getMyReports() {
    return this.cases.filter((c) => this.myReportIds.includes(c.id));
  }

  getAll() {
    return this.cases;
  }

  getById(id) {
    return this.cases.find((c) => c.id === id);
  }

  getByStudentNumber(studentNumber) {
    const cleanId = (studentNumber || '').trim().toUpperCase();
    return this.cases.filter((c) => {
      const num1 = (c.studentNumber || '').trim().toUpperCase();
      const num2 = (c.actualStudentNumber || '').trim().toUpperCase();
      return num1 === cleanId || num2 === cleanId;
    });
  }

  addCase(newCase, isStudentFiler = true) {
    this.cases.unshift(newCase);
    this.saveCases(this.cases);
    if (isStudentFiler) {
      this.addMyReportId(newCase.id);
    }
  }

  updateCase(updatedCase) {
    const index = this.cases.findIndex((c) => c.id === updatedCase.id);
    if (index !== -1) {
      this.cases[index] = { ...this.cases[index], ...updatedCase };
      this.saveCases(this.cases);
    }
  }

  toggleStatus(id) {
    const item = this.getById(id);
    if (!item) return;

    let nextStatus = 'Pending';
    if (item.status === 'Pending') nextStatus = 'Investigation';
    else if (item.status === 'Investigation') nextStatus = 'Resolved';
    else if (item.status === 'Resolved') nextStatus = 'Pending';

    item.status = nextStatus;
    this.saveCases(this.cases);
    return item;
  }

  updateStatus(id, newStatus) {
    const item = this.getById(id);
    if (!item) return;

    let normalized = newStatus;
    if (newStatus === 'Pending Hearing') normalized = 'Pending';
    if (newStatus === 'Under Investigation') normalized = 'Investigation';

    item.status = normalized;
    this.saveCases(this.cases);
    return item;
  }

  loadMessages() {
    const versionKey = 'safetrack_messages_ver';
    const currentVer = 'osas-chat-v7';
    const storedVer = localStorage.getItem(versionKey);
    const stored = localStorage.getItem(STORAGE_KEY_MESSAGES);
    if (!stored || storedVer !== currentVer) {
      this.saveMessages(INITIAL_MESSAGES);
      localStorage.setItem(versionKey, currentVer);
      return JSON.parse(JSON.stringify(INITIAL_MESSAGES));
    }
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed) || parsed.length === 0 || !parsed.some((t) => t.threadId === 'CDM-2024-002')) {
        this.saveMessages(INITIAL_MESSAGES);
        localStorage.setItem(versionKey, currentVer);
        return JSON.parse(JSON.stringify(INITIAL_MESSAGES));
      }
      return parsed;
    } catch (e) {
      this.saveMessages(INITIAL_MESSAGES);
      localStorage.setItem(versionKey, currentVer);
      return JSON.parse(JSON.stringify(INITIAL_MESSAGES));
    }
  }

  updateThreadStatus(threadId, status) {
    const threads = this.loadMessages();
    const thread = threads.find((t) => t.threadId === threadId || t.docket === threadId);
    if (thread) {
      thread.status = status;
      this.saveMessages(threads);
      return thread;
    }
    return null;
  }

  saveMessages(messages) {
    localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(messages));
  }

  getMessages() {
    return this.loadMessages();
  }

  addMessage(threadId, msg) {
    const threads = this.loadMessages();
    const thread = threads.find((t) => t.threadId === threadId || t.docket === threadId);
    if (thread) {
      thread.messages.push(msg);
      thread.lastUpdate = msg.timestamp || 'Just now';
      this.saveMessages(threads);
      return thread;
    }
    return null;
  }

  createThread(newThread) {
    const threads = this.loadMessages();
    const existing = threads.find((t) => t.threadId === newThread.threadId || t.docket === newThread.docket);
    if (!existing) {
      threads.unshift(newThread);
      this.saveMessages(threads);
    }
    return newThread;
  }

  resetToDefault() {
    this.saveCases(INITIAL_CASES);
    this.saveMyReportIds(['CDM-2024-002']);
    this.saveMessages(INITIAL_MESSAGES);
  }

  getAnalytics() {
    const total = this.cases.length;
    const pending = this.cases.filter((c) => c.status === 'Pending' || c.status === 'Pending Hearing').length;
    const investigation = this.cases.filter((c) => c.status === 'Investigation' || c.status === 'Under Investigation').length;
    const resolved = this.cases.filter((c) => c.status === 'Resolved').length;
    const guidance = this.cases.filter((c) => c.guidanceEndorsed).length;

    return { total, pending, investigation, resolved, guidance };
  }
}

const store = new SafeTrackStore();

// ========================================================
// UTILITY HELPERS
// ========================================================
function escapeHtml(str) {
  return (str || '')
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getStatusBadge(status) {
  if (status === 'Resolved' || status === 'Resolved / Closed' || status === 'Cleared' || status === 'Online') {
    return `<span class="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]"><span class="w-1.5 h-1.5 rounded-full bg-[#065F46]"></span>Resolved</span>`;
  } else if (status === 'Pending' || status === 'Pending Hearing' || status === 'Follow-Up') {
    return `<span class="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]"><span class="w-1.5 h-1.5 rounded-full bg-[#92400E]"></span>Pending Hearing</span>`;
  } else if (status === 'Investigation' || status === 'Under Investigation' || status === 'Guidance') {
    return `<span class="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]"><span class="w-1.5 h-1.5 rounded-full bg-[#3730A3]"></span>Under Investigation</span>`;
  } else if (status === 'Dismissed' || status === 'Cancelled' || status === 'Urgent') {
    return `<span class="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF1F2] text-[#9F1239] border border-[#FECDD3]"><span class="w-1.5 h-1.5 rounded-full bg-[#9F1239]"></span>${escapeHtml(status)}</span>`;
  }
  return `<span class="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]"><span class="w-1.5 h-1.5 rounded-full bg-[#3730A3]"></span>${escapeHtml(status)}</span>`;
}

function getInstituteBadge(inst) {
  const code = (inst || '').toUpperCase().trim();
  const styles = {
    'ICS': 'bg-blue-50 text-blue-700 border-blue-200',
    'IED': 'bg-amber-50 text-amber-700 border-amber-200',
    'IBA': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'IE': 'bg-purple-50 text-purple-700 border-purple-200'
  };
  const cls = styles[code] || 'bg-slate-100 text-slate-700 border-slate-200';
  return `<span class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-bold font-mono border ${cls}">${escapeHtml(inst || 'CDM')}</span>`;
}

// ========================================================
// SYNCHRONOUS SESSION HYDRATION & AUTH STORAGE
// ========================================================
function getActiveSession() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY_SESSION) || localStorage.getItem(STORAGE_KEY_SESSION);
    if (!stored) return null;
    const session = JSON.parse(stored);
    if (!session || (!session.token && !session.role)) {
      return null;
    }
    // Ensure token exists on session
    if (!session.token) {
      session.token = 'cdm_auth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10);
      try {
        sessionStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
        sessionStorage.setItem(STORAGE_KEY_TOKEN, session.token);
      } catch (e) { }
    }
    return session;
  } catch (e) {
    return null;
  }
}

// Synchronous initial auth session read during initial script evaluation
let currentSession = getActiveSession();

function isStudentSession(session) {
  if (!session) return false;
  return session.role === 'Student Portal' || session.role === 'student' || session.roleType === 'student';
}

function isAdminSession(session) {
  if (!session) return false;
  return session.role === 'Prefect Desk (Admin)' || session.role === 'admin' || session.roleType === 'admin';
}

function setActiveSession(sessionData) {
  if (!sessionData) return;
  if (!sessionData.token) {
    sessionData.token = 'cdm_auth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10);
  }
  if (!sessionData.loginTimestamp) {
    sessionData.loginTimestamp = Date.now();
  }
  if (!sessionData.loginTime) {
    sessionData.loginTime = new Date().toISOString();
  }
  currentSession = sessionData;
  const serialized = JSON.stringify(sessionData);
  try {
    sessionStorage.setItem(STORAGE_KEY_SESSION, serialized);
    sessionStorage.setItem(STORAGE_KEY_TOKEN, sessionData.token);
    localStorage.setItem(STORAGE_KEY_SESSION, serialized);
    localStorage.setItem(STORAGE_KEY_TOKEN, sessionData.token);
  } catch (e) {
    console.error('Session write error:', e);
  }
}

function clearActiveSession() {
  currentSession = null;
  try {
    sessionStorage.removeItem(STORAGE_KEY_SESSION);
    sessionStorage.removeItem(STORAGE_KEY_TOKEN);
    sessionStorage.removeItem(STORAGE_KEY_ACTIVE_TAB);
    sessionStorage.removeItem(STORAGE_KEY_ACTIVE_DOCKET);
    sessionStorage.removeItem('osas_auth_session');
    localStorage.removeItem(STORAGE_KEY_SESSION);
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem('osas_auth_session');
    // CRITICAL: NEVER call localStorage.clear(), preserving user's theme!
  } catch (e) {
    console.error('Session clear error:', e);
  }
  // Re-apply preserved theme immediately
  const savedTheme = localStorage.getItem('safetrack_app_theme') || localStorage.getItem('safetrack_chat_theme') || 'dark';
  setAppTheme(savedTheme);
}

// ========================================================
// URL ROUTING, PROTECTED ROUTE GUARDS & HISTORY MANAGEMENT
// ========================================================
function normalizeAdminTab(tab) {
  if (!tab) return 'home';
  const t = tab.toString().toLowerCase().trim();
  if (t === 'home' || t === 'overview' || t === 'institutional overview') return 'home';
  if (t === 'registry' || t === 'disciplinary case registry' || t === 'cases') return 'registry';
  if (t === 'clearance' || t === 'clearance & good moral verification' || t === 'goodmoral' || t === 'verification') return 'clearance';
  if (t === 'appointments' || t === 'appointment' || t === 'consultation' || t === 'queue' || t === 'appointments & queue') return 'appointments';
  if (t === 'messages' || t === 'chat' || t === 'osas chat') return 'messages';
  return 'home';
}

function normalizeStudentTab(tab) {
  if (!tab) return 'home';
  const t = tab.toString().toLowerCase().trim();
  if (t === 'home' || t === 'home hub') return 'home';
  if (t === 'form' || t === 'submit incident' || t === 'submit' || t === 'report') return 'form';
  if (t === 'tickets' || t === 'my submitted tickets' || t === 'my tickets' || t === 'reports') return 'tickets';
  if (t === 'clearance' || t === 'clearance status') return 'clearance';
  if (t === 'appointments' || t === 'appointment' || t === 'book consultation' || t === 'consultation booking') return 'appointments';
  if (t === 'messages' || t === 'chat' || t === 'osa consultation & messages' || t === 'consultation') return 'messages';
  return 'home';
}

function getCleanPathname() {
  let p = window.location.pathname || '/';
  if (p.length > 1 && p.endsWith('/')) {
    p = p.slice(0, -1);
  }
  return p;
}

function getRouteParams() {
  const hash = window.location.hash || '';
  let qs = window.location.search || '';
  if (hash.includes('?')) {
    qs = hash.substring(hash.indexOf('?'));
  }
  return new URLSearchParams(qs);
}

function isLoginRoute() {
  if (document.getElementById('screen-login')) return true;
  const p = getCleanPathname();
  if (p.endsWith('index.html') || p.endsWith('/index') || p === '/' || p === '') return true;
  return false;
}

function isDashboardRoute() {
  if (document.getElementById('screen-student') || document.getElementById('screen-admin')) return true;
  const p = getCleanPathname();
  if (p.endsWith('dashboard.html') || p.includes('dashboard')) return true;
  return false;
}

function buildDashboardUrl(tab, docketId) {
  const params = new URLSearchParams();
  if (tab) {
    params.set('tab', tab);
  }
  if (docketId) {
    params.set('docket', docketId);
  }
  const qs = params.toString();
  return qs ? '?' + qs : '';
}

// Rule B: ProtectedRoute Guard
function protectedRouteGuard() {
  currentSession = getActiveSession();
  const token = sessionStorage.getItem(STORAGE_KEY_TOKEN) || localStorage.getItem(STORAGE_KEY_TOKEN);
  if (!currentSession || !currentSession.token || !token || currentSession.token !== token) {
    clearActiveSession();
    window.location.replace('./index.html');
    return false;
  }
  return true;
}

function navigate(targetUrl, { replace = false } = {}) {
  if (targetUrl === '/login' || targetUrl === '#/login' || targetUrl === './index.html' || targetUrl === 'index.html') {
    window.location.replace('./index.html');
    return;
  }
  if (targetUrl.startsWith('./dashboard.html') || targetUrl.startsWith('/dashboard.html') || targetUrl.startsWith('dashboard.html')) {
    window.location.replace(targetUrl);
    return;
  }

  if (isLoginRoute()) {
    window.location.replace('./dashboard.html');
    return;
  }

  try {
    let url = targetUrl;
    if (url.startsWith('#/dashboard')) {
      const idx = url.indexOf('?');
      url = idx !== -1 ? url.substring(idx) : '';
    }
    if (replace) {
      window.history.replaceState({ url: url }, '', url || window.location.pathname);
    } else {
      window.history.pushState({ url: url }, '', url || window.location.pathname);
    }
  } catch (e) {}
}

function handleLogout() {
  toggleNavDrawer(false);
  clearActiveSession();
  window.location.replace('./index.html');
}

function resolveCurrentRoute() {
  if (isLoginRoute()) {
    clearActiveSession();
    showScreen('screen-login');
    setAuthRole('student');
    return;
  }

  if (isDashboardRoute()) {
    if (!protectedRouteGuard()) {
      return;
    }

    const routeParams = getRouteParams();
    let tab = routeParams.get('tab') || sessionStorage.getItem(STORAGE_KEY_ACTIVE_TAB) || 'home';
    let docketId = routeParams.get('docket') || sessionStorage.getItem(STORAGE_KEY_ACTIVE_DOCKET);

    if (isAdminSession(currentSession)) {
      showScreen('screen-admin');
      mountAdminDashboard(currentSession);
      const adminTab = normalizeAdminTab(tab);
      switchAdminTab(adminTab, false);
      resetTabVisibility('admin', adminTab);
      if (adminTab === 'registry' && docketId) {
        openInspectorModal(docketId, false);
      } else {
        closeInspector(false);
      }
    } else {
      showScreen('screen-student');
      mountStudentDesk(currentSession);
      const studentTab = normalizeStudentTab(tab);
      switchStudentTab(studentTab, false);
      resetTabVisibility('student', studentTab);
    }
    return;
  }

  currentSession = getActiveSession();
  if (currentSession && currentSession.token) {
    window.location.replace('./dashboard.html');
  } else {
    window.location.replace('./index.html');
  }
}

// ========================================================
// SCREEN ROUTING ARCHITECTURE
// ========================================================
function showScreen(screenId) {
  // 1. Remove is-dashboard-auth when mounting login so anti-flash CSS never hides screen-login
  if (screenId === 'screen-login') {
    document.documentElement.classList.remove('is-dashboard-auth');
  } else {
    document.documentElement.classList.add('is-dashboard-auth');
  }

  // 2. Hide all screens explicitly
  document.querySelectorAll('.app-screen').forEach((el) => {
    el.classList.add('hidden');
    el.style.display = 'none';
  });

  // 3. Mount requested screen explicitly with display: flex
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.remove('hidden');
    target.style.display = 'flex';
    window.scrollTo(0, 0);
  }

  // 4. Adjust body mode and scrolling
  if (screenId === 'screen-login') {
    document.body.classList.add('is-login');
    document.body.style.backgroundColor = '';
    document.body.style.backgroundColor = '#050811';
    document.body.style.color = '#ffffff';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.body.style.minHeight = '100vh';
  } else {
    document.body.classList.remove('is-login');
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  }

  // 5. Sync Login screen theme toggle button state
  const currentTheme = localStorage.getItem('safetrack_app_theme') || 'dark';
  updateLoginThemeToggleUI(currentTheme);
}

function navigateTo(target) {
  if (typeof target === 'string') {
    if (target === 'screen-login' || target === '/login' || target === '#/login') {
      window.location.replace('./index.html');
      return;
    }
    if (target === 'screen-admin' || target === 'screen-student' || target === '/dashboard' || target === '#/dashboard') {
      window.location.replace('./dashboard.html');
      return;
    }
    if (target.startsWith('/') || target.startsWith('#')) {
      navigate(target);
      return;
    }
  }
  showScreen(target);
}

window.getActiveSession = getActiveSession;
window.setActiveSession = setActiveSession;
window.clearActiveSession = clearActiveSession;
window.isStudentSession = isStudentSession;
window.isAdminSession = isAdminSession;
window.showScreen = showScreen;
window.navigateTo = navigateTo;
window.navigate = navigate;
window.handleLogout = handleLogout;
window.resolveCurrentRoute = resolveCurrentRoute;
window.buildDashboardUrl = buildDashboardUrl;

// ========================================================
// MINIMAL REDESIGN PORTAL & ROLE SWITCHER
// ========================================================
function updateDrawerPortalButtons(activeRole) {
  const isStudent = activeRole === 'student';
  const roleBadge = document.getElementById('role-badge-sidebar');
  const roleBadgeTop = document.getElementById('role-badge-sidebar-top');
  const stuBtn = document.getElementById('switch-student-btn');
  const preBtn = document.getElementById('switch-prefect-btn');
  const nameEl = document.getElementById('drawer-user-name');
  const roleEl = document.getElementById('drawer-user-role');
  const avatarEl = document.getElementById('drawer-user-avatar');

  if (roleBadge) {
    roleBadge.textContent = isStudent ? 'Student Space' : 'Prefect Desk';
    roleBadge.className = `text-[10px] font-semibold uppercase tracking-wider font-mono ${isStudent ? 'text-[#00D4B6]' : 'text-purple-300'}`;
  }
  if (roleBadgeTop) {
    roleBadgeTop.textContent = isStudent ? 'Student Space' : 'Prefect Desk';
    roleBadgeTop.className = `text-[10px] px-2 py-0.5 rounded border border-white/10 bg-white/5 font-mono ${isStudent ? 'text-[#00D4B6]' : 'text-purple-300'}`;
  }

  if (stuBtn) {
    if (isStudent) {
      stuBtn.className = 'portal-view-btn active px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center bg-[#635BFF] text-white shadow-xs';
    } else {
      stuBtn.className = 'portal-view-btn px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center text-[#E2E8F0] hover:text-white hover:bg-white/10';
    }
  }

  if (preBtn) {
    if (!isStudent) {
      preBtn.className = 'portal-view-btn active px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center bg-[#635BFF] text-white shadow-xs';
    } else {
      preBtn.className = 'portal-view-btn px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center text-[#E2E8F0] hover:text-white hover:bg-white/10';
    }
  }

  if (nameEl) {
    nameEl.textContent = isStudent ? 'Samantha Nicole Cruz' : 'Prefect Officer Samantha Nicole Cruz';
  }
  if (roleEl) {
    roleEl.textContent = isStudent ? 'Student • 2023-01842-CM-0' : 'Office of Student Affairs (Prefect)';
  }
  if (avatarEl) {
    avatarEl.textContent = isStudent ? '👤' : '🛡️';
  }
}

function switchActivePortalRole(targetRole) {
  if (targetRole === 'admin') {
    const adminSession = {
      token: 'cdm_auth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10),
      role: 'Prefect Desk (Admin)',
      roleType: 'admin',
      user: 'Prefect of Discipline',
      username: 'prefect@cdm.edu.ph',
      studentNumber: 'prefect@cdm.edu.ph',
      studentName: 'Prefect Officer Samantha Nicole Cruz',
      designation: 'Prefect of Discipline & Student Affairs',
      loginTimestamp: Date.now(),
      loginTime: new Date().toISOString()
    };
    setActiveSession(adminSession);
    sessionStorage.setItem(STORAGE_KEY_ACTIVE_TAB, 'home');
    sessionStorage.setItem('safetrack_admin_active_tab', 'home');

    try {
      window.history.replaceState({ url: '?tab=home' }, '', '?tab=home');
    } catch (e) {}

    showScreen('screen-admin');
    mountAdminDashboard(adminSession);
    switchAdminTab('home', false);
    resetTabVisibility('admin', 'home');
    updateDrawerPortalButtons('admin');

    if (typeof showSafeTrackToast === 'function') {
      showSafeTrackToast('Switched to Prefect Desk', 'Viewing institutional registry and discipline records as Prefect of Discipline.', 'info');
    }
  } else {
    const studentSession = {
      token: 'cdm_auth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10),
      role: 'Student Portal',
      roleType: 'student',
      user: '2023-01842-CM-0',
      studentNumber: '2023-01842-CM-0',
      studentName: 'Samantha Nicole Cruz (2023-01842-CM-0)',
      loginTimestamp: Date.now(),
      loginTime: new Date().toISOString()
    };
    setActiveSession(studentSession);
    sessionStorage.setItem(STORAGE_KEY_ACTIVE_TAB, 'home');

    try {
      window.history.replaceState({ url: '?tab=home' }, '', '?tab=home');
    } catch (e) {}

    showScreen('screen-student');
    mountStudentDesk(studentSession);
    switchStudentTab('home', false);
    resetTabVisibility('student', 'home');
    updateDrawerPortalButtons('student');

    if (typeof showSafeTrackToast === 'function') {
      showSafeTrackToast('Switched to Student Space', 'Viewing incident reporting and clearance status as Samantha Nicole Cruz.', 'info');
    }
  }
}
window.updateDrawerPortalButtons = updateDrawerPortalButtons;
window.switchActivePortalRole = switchActivePortalRole;

// ========================================================
// OFF-CANVAS HAMBURGER DRAWER CONTROLLER
// ========================================================
function toggleNavDrawer(open) {
  const drawer = document.getElementById('nav-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const nameEl = document.getElementById('drawer-user-name');
  const roleEl = document.getElementById('drawer-user-role');
  const linksContainer = document.getElementById('drawer-nav-links');

  if (!drawer || !backdrop) return;

  if (open) {
    const session = getActiveSession();
    const isStudent = isStudentSession(session);

    if (nameEl) nameEl.textContent = session ? (isStudent ? (session.studentName || session.studentNumber) : 'Prefect of Discipline') : 'Guest';
    if (roleEl) roleEl.textContent = session ? (isStudent ? `Student • ${session.studentNumber}` : 'Office of Student Affairs') : 'SafeTrack Portal';

    if (linksContainer) {
      if (isStudent) {
        const activeTab = sessionStorage.getItem(STORAGE_KEY_ACTIVE_TAB) || 'home';
        const isHome = activeTab === 'home';
        const isForm = activeTab === 'form';
        const isTickets = activeTab === 'tickets';
        const isClearance = activeTab === 'clearance';
        const isAppt = activeTab === 'appointments';
        const isChat = activeTab === 'messages';

        linksContainer.innerHTML = `
          <div class="px-2 py-1 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
            Navigation Menu
          </div>

          <button onclick="switchStudentTab('home'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isHome ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">🏠</span>
              <span class="truncate">Home</span>
            </div>
            ${isHome ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <button onclick="switchStudentTab('form'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isForm ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">📝</span>
              <span class="truncate">Submit Incident</span>
            </div>
            ${isForm ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <button onclick="switchStudentTab('tickets'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isTickets ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">🎫</span>
              <span class="truncate">My Submitted Tickets</span>
            </div>
            ${isTickets ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <button onclick="switchStudentTab('clearance'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isClearance ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">📜</span>
              <span class="truncate">Clearance Status</span>
            </div>
            ${isClearance ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <button onclick="switchStudentTab('appointments'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isAppt ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">📅</span>
              <span class="truncate">Book Consultation</span>
            </div>
            ${isAppt ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <div class="pt-2 mt-2 border-t border-white/10">
            <button onclick="switchStudentTab('messages'); toggleNavDrawer(false);" 
              class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isChat ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
              <div class="flex items-center gap-3 min-w-0 flex-1">
                <span class="text-sm shrink-0">💬</span>
                <span class="truncate">OSAS Chat Desk</span>
              </div>
              ${isChat ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Active</span>' : ''}
            </button>
          </div>
        `;
      } else {
        const activeTab = sessionStorage.getItem('safetrack_admin_active_tab') || 'home';
        const isHome = activeTab === 'home';
        const isRegistry = activeTab === 'registry';
        const isClearance = activeTab === 'clearance';
        const isAppt = activeTab === 'appointments';
        const isChat = activeTab === 'messages';

        linksContainer.innerHTML = `
          <div class="px-2 py-1 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
            Admin Management
          </div>

          <button onclick="switchAdminTab('home'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isHome ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">📊</span>
              <span class="truncate">Institutional Overview</span>
            </div>
            ${isHome ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <button onclick="switchAdminTab('registry'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isRegistry ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">🗂️</span>
              <span class="truncate">Disciplinary Case Registry</span>
            </div>
            ${isRegistry ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <button onclick="switchAdminTab('clearance'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isClearance ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">✅</span>
              <span class="truncate">Clearance Verification</span>
            </div>
            ${isClearance ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <button onclick="switchAdminTab('appointments'); toggleNavDrawer(false);" 
            class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isAppt ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-sm shrink-0">📅</span>
              <span class="truncate">Consultation Appointments</span>
            </div>
            ${isAppt ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Current</span>' : ''}
          </button>

          <div class="pt-2 mt-2 border-t border-white/10">
            <button onclick="switchAdminTab('messages'); toggleNavDrawer(false);" 
              class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition cursor-pointer ${isChat ? 'bg-[#635BFF] text-white font-bold shadow-xs' : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'}">
              <div class="flex items-center gap-3 min-w-0 flex-1">
                <span class="text-sm shrink-0">💬</span>
                <span class="truncate">OSAS Chat Desk</span>
              </div>
              ${isChat ? '<span class="text-[10px] uppercase font-bold opacity-90 shrink-0 px-1.5 py-0.5 rounded bg-white/20 whitespace-nowrap">Active</span>' : ''}
            </button>
          </div>
        `;
      }
    }

    updateDrawerThemeUI(localStorage.getItem('safetrack_app_theme') || 'dark');
    updateDrawerPortalButtons(isStudent ? 'student' : 'admin');
    backdrop.classList.remove('hidden');
    drawer.classList.remove('-translate-x-full');
    drawer.classList.add('translate-x-0');
  } else {
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
  }
}
window.toggleNavDrawer = toggleNavDrawer;

// ========================================================
// GLOBAL APPLICATION THEME ENGINE (DARK / LIGHT MODE)
// ========================================================
function setAppTheme(theme) {
  const targetTheme = (theme === 'light' || theme === 'daylight') ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', targetTheme);
  document.body.setAttribute('data-theme', targetTheme);
  localStorage.setItem('safetrack_app_theme', targetTheme);
  localStorage.setItem('safetrack_chat_theme', targetTheme);

  // Keep OSAS chat synchronized if initialized
  if (typeof osasChatTheme !== 'undefined') {
    osasChatTheme = targetTheme;
    const chatFrame = document.getElementById('osas-chat-frame');
    if (chatFrame) {
      chatFrame.setAttribute('data-theme', targetTheme);
    }
  }

  updateDrawerThemeUI(targetTheme);
  updateLoginThemeToggleUI(targetTheme);
}
window.setAppTheme = setAppTheme;

function toggleLoginTheme() {
  const current = localStorage.getItem('safetrack_app_theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  setAppTheme(next);
}
window.toggleLoginTheme = toggleLoginTheme;

function updateLoginThemeToggleUI(theme) {
  const btn = document.getElementById('btn-login-theme-toggle');
  const icon = document.getElementById('login-theme-toggle-icon');
  const text = document.getElementById('login-theme-toggle-text');
  if (!btn) return;
  if (theme === 'light') {
    if (icon) icon.textContent = '🌙';
    if (text) text.textContent = 'Switch to Dark Mode';
    btn.setAttribute('aria-label', 'Switch to Dark Mode');
    btn.title = 'Switch to Dark Mode';
  } else {
    if (icon) icon.textContent = '☀️';
    if (text) text.textContent = 'Switch to Light Mode';
    btn.setAttribute('aria-label', 'Switch to Light Mode');
    btn.title = 'Switch to Light Mode';
  }
}
window.updateLoginThemeToggleUI = updateLoginThemeToggleUI;

function updateDrawerThemeUI(theme) {
  const badge = document.getElementById('drawer-theme-badge');
  const btnLight = document.getElementById('drawer-theme-btn-light');
  const btnDark = document.getElementById('drawer-theme-btn-dark');

  if (theme === 'light') {
    if (badge) {
      badge.textContent = 'Light Mode';
      badge.className = 'text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-300 bg-amber-50 text-amber-700 font-mono';
    }
    if (btnLight) {
      btnLight.className = 'py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer bg-white text-slate-900 shadow-sm border border-slate-300';
    }
    if (btnDark) {
      btnDark.className = 'py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer text-slate-400 hover:text-slate-800 border border-transparent';
    }
  } else {
    if (badge) {
      badge.textContent = 'Dark Mode';
      badge.className = 'text-[10px] font-semibold px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900 text-emerald-400 font-mono';
    }
    if (btnDark) {
      btnDark.className = 'py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer bg-[#2563eb] text-white shadow-sm border border-blue-500';
    }
    if (btnLight) {
      btnLight.className = 'py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer text-slate-400 hover:text-white border border-transparent';
    }
  }
}
window.updateDrawerThemeUI = updateDrawerThemeUI;

// ========================================================
// POLICY MODAL CONTROLLER
// ========================================================
function openPolicyModal(type) {
  const modal = document.getElementById('modal-policy');
  const iconEl = document.getElementById('policy-modal-icon');
  const titleEl = document.getElementById('policy-modal-title');
  const bodyEl = document.getElementById('policy-modal-body');
  const searchContainer = document.getElementById('handbook-search-container');
  const searchInput = document.getElementById('handbook-search-input');
  const countEl = document.getElementById('handbook-filter-count');

  if (!modal) return;
  const policyType = type || 'handbook';
  const data = POLICY_TEXTS[policyType] || POLICY_TEXTS.handbook;

  if (iconEl) iconEl.textContent = data.icon;
  if (titleEl) titleEl.textContent = (data.title || '').replace(/&amp;/g, '&');
  if (bodyEl) bodyEl.innerHTML = typeof data.body === 'function' ? data.body() : data.body;

  if (searchContainer) {
    if (policyType === 'handbook') {
      searchContainer.classList.remove('hidden');
      if (searchInput) searchInput.value = '';
      if (countEl) countEl.textContent = `Showing all ${typeof HANDBOOK_OFFENSES !== 'undefined' ? HANDBOOK_OFFENSES.length : 57} offenses`;
    } else {
      searchContainer.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');
}

function filterHandbookOffenses(query) {
  const q = (query || '').toLowerCase().trim();
  const rows = document.querySelectorAll('.handbook-offense-row');
  const countEl = document.getElementById('handbook-filter-count');
  let visibleCount = 0;

  rows.forEach((row) => {
    const text = row.getAttribute('data-search') || row.innerText.toLowerCase();
    if (!q || text.includes(q)) {
      row.style.display = '';
      visibleCount++;
    } else {
      row.style.display = 'none';
    }
  });

  if (countEl) {
    countEl.textContent = q 
      ? `Showing ${visibleCount} of ${rows.length} offenses matching "${query}"` 
      : `Showing all ${rows.length} offenses`;
  }
}

function closePolicyModal() {
  const modal = document.getElementById('modal-policy');
  if (modal) modal.classList.add('hidden');
}

function openGoodMoralCertificate(studentId, studentName, institute) {
  const modal = document.getElementById('modal-good-moral-cert');
  const nameEl = document.getElementById('cert-student-name');
  const idEl = document.getElementById('cert-student-id');
  const instEl = document.getElementById('cert-student-institute');
  const dateEl = document.getElementById('cert-issue-date');
  const hashEl = document.getElementById('cert-hash');

  const instNames = {
    'ICS': 'Institute of Computer Studies',
    'IEd': 'Institute of Education',
    'IBA': 'Institute of Business & Accountancy',
    'IE': 'Institute of Engineering'
  };

  if (nameEl) nameEl.textContent = studentName || 'Student Montalbano';
  if (idEl) idEl.textContent = studentId || '2023-01842-CM-0';
  if (instEl) instEl.textContent = instNames[institute] || `${institute} Academic Institute`;
  if (dateEl) dateEl.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  if (hashEl) hashEl.textContent = `CDM-GMC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

  if (modal) modal.classList.remove('hidden');
}

function closeGoodMoralCertificate() {
  const modal = document.getElementById('modal-good-moral-cert');
  if (modal) modal.classList.add('hidden');
}

window.openPolicyModal = openPolicyModal;
window.closePolicyModal = closePolicyModal;
window.filterHandbookOffenses = filterHandbookOffenses;
window.openGoodMoralCertificate = openGoodMoralCertificate;
window.closeGoodMoralCertificate = closeGoodMoralCertificate;

// ========================================================
// STUDENT CLEARANCE STATUS RENDERER
// ========================================================
function renderStudentClearance() {
  const container = document.getElementById('student-clearance-display');
  if (!container) return;
  const session = getActiveSession();
  const studentId = session?.studentNumber || '2023-01842-CM-0';

  if (studentId === 'ANONYMOUS') {
    container.innerHTML = `
      <div class="bg-[#0c1425] border border-amber-500/30 rounded-2xl p-6 text-amber-200 shadow-xl">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-lg">⚠️</span>
          <h3 class="font-bold text-base text-amber-400">Anonymous Session Active</h3>
        </div>
        <p class="text-xs leading-relaxed text-slate-300 mb-4">
          Institutional clearance verification requires an authenticated student number. Please log in with your official Colegio de Montalban student credentials to view your Good Moral status.
        </p>
        <button onclick="document.getElementById('btn-student-logout')?.click()" class="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold cursor-pointer transition">
          Sign In with Student ID
        </button>
      </div>
    `;
    return;
  }

  const allCases = store.getAll();
  const matches = allCases.filter((c) => {
    const num1 = (c.studentNumber || '').trim().toUpperCase();
    const num2 = (c.actualStudentNumber || '').trim().toUpperCase();
    return num1 === studentId.trim().toUpperCase() || num2 === studentId.trim().toUpperCase();
  });

  const activeInfractions = matches.filter((c) => c.status !== 'Resolved');
  const resolvedInfractions = matches.filter((c) => c.status === 'Resolved');
  const timestamp = new Date().toLocaleString();

  if (activeInfractions.length > 0) {
    container.innerHTML = `
      <div class="bg-[#0c1425] border border-rose-500/30 rounded-2xl p-6 text-white shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2.5 py-0.5 rounded">Action Required</span>
            <h3 class="text-lg font-bold text-rose-400 mt-1">Disciplinary Hold Active • Clearance Not Granted</h3>
            <p class="text-xs text-slate-400">Student ID: <span class="font-mono font-bold text-white">${escapeHtml(studentId)}</span></p>
          </div>
          <span class="clearance-badge-pill px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-500/10 border border-rose-500/30 text-rose-400 self-start">
            ${activeInfractions.length} Active Hold(s)
          </span>
        </div>
        <p class="text-xs text-slate-300 mb-4 leading-relaxed">
          Issuance of Good Moral Character and graduation clearance is currently deferred due to an ongoing administrative review or pending restorative sanction. Please report to the Office of Student Affairs & Discipline to schedule a conference.
        </p>
        <div class="space-y-2.5 mb-4">
          ${activeInfractions.map((c) => `
            <div class="bg-[#070d1a] border border-rose-500/20 rounded-xl p-3.5 text-xs shadow-xs">
              <div class="flex justify-between items-center mb-1">
                <span class="font-bold text-white font-mono">${escapeHtml(c.id)}</span>
                ${getStatusBadge(c.status)}
              </div>
              <div class="text-white font-semibold">${escapeHtml(c.classification)}</div>
              <div class="text-[11px] text-slate-400 mt-0.5">${escapeHtml(c.date)} • Location: ${escapeHtml(c.location)}</div>
              <div class="text-[11px] text-slate-300 mt-1 bg-[#0c1425] p-2 rounded border border-[#16233b]">
                <strong class="text-rose-400">Hold Reason:</strong> ${escapeHtml(c.sanctionNotes || c.description)}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="pt-3 border-t border-[#16233b] flex flex-wrap items-center justify-between text-[11px] text-slate-400">
          <span>Office of Student Affairs & Discipline Desk</span>
          <button onclick="switchStudentTab('messages')" class="text-blue-400 hover:text-blue-300 underline font-semibold cursor-pointer">
            Inquire with Guidance Desk →
          </button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="bg-[#0c1425] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-5">
        <!-- Row 1: Verification Header Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#16233b]">
          <div class="flex items-center gap-2.5 flex-wrap">
            <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-md">
              Discipline Verified
            </span>
            <span class="text-xs text-slate-400">Institutional Standing: <strong class="text-emerald-400">Exemplary</strong></span>
          </div>
          <div class="self-start sm:self-auto">
            <span class="clearance-badge-pill px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 inline-flex items-center gap-1.5 shadow-xs">
              <span class="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Cleared for Issuance</span>
            </span>
          </div>
        </div>

        <!-- Row 2: Title and Student Identity -->
        <div>
          <h3 class="text-xl font-bold text-white tracking-tight">Good Moral &amp; Disciplinary Clearance</h3>
          <p class="text-xs text-slate-400 mt-1">Official clearance record for Student ID: <span class="font-mono font-bold text-white bg-[#070d1a] px-2 py-0.5 rounded border border-[#1e293b]">${escapeHtml(studentId)}</span></p>
        </div>

        <!-- Row 3: Official Verification Statement -->
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The institutional discipline registry confirms that you are in good disciplinary standing with Colegio de Montalban. No active grievances, unresolved dockets, or outstanding behavioral sanctions are recorded against your student account.
        </p>
        ${resolvedInfractions.length > 0 ? `
          <div class="bg-[#070d1a] border border-emerald-500/20 rounded-xl p-3.5 text-xs text-slate-300">
            <div class="font-bold text-white mb-1">Historical Case Clearance Notes:</div>
            <div class="text-[11px] text-slate-400 leading-relaxed">${resolvedInfractions.length} prior docket(s) fully settled and cleared under official Prefect board disposition.</div>
          </div>
        ` : ''}

        <!-- Row 4: Audit & Verification Identifiers -->
        <div class="pt-4 border-t border-[#16233b] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <span>Verified:</span>
            <span class="font-mono text-slate-300">${timestamp}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>Verification Code:</span>
            <span class="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">CdM-VERIFIED-${studentId.replace(/[^0-9]/g, '').slice(-4)}</span>
          </div>
        </div>

        <!-- Row 5: Action Deck (Full-width on mobile) -->
        <div class="pt-3 border-t border-[#16233b] flex flex-col sm:flex-row justify-end">
          <button onclick="openGoodMoralCertificate('${escapeHtml(studentId)}', '${escapeHtml(session?.studentName || 'Student Montalbano')}', '${escapeHtml(matches[0]?.institute || 'ICS')}')"
            class="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-[#2563eb] hover:bg-blue-600 active:scale-[0.99] text-white text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.35)]">
            <svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span>Print / View Certificate of Good Moral</span>
          </button>
        </div>
      </div>
    `;
  }
}

// ========================================================
// TAB SWITCHERS: STUDENT & ADMIN
// ========================================================
function switchStudentTab(tab, updateHistory = true) {
  tab = normalizeStudentTab(tab);
  sessionStorage.setItem(STORAGE_KEY_ACTIVE_TAB, tab);

  if (updateHistory && isDashboardRoute()) {
    const targetUrl = buildDashboardUrl(tab, null);
    const curFull = window.location.hash || (window.location.pathname + window.location.search);
    if (curFull !== targetUrl) {
      window.history.pushState({ tab }, '', targetUrl);
    }
  }

  const tabHome = document.getElementById('student-tab-home');
  const tabForm = document.getElementById('student-tab-form');
  const tabTickets = document.getElementById('student-tab-tickets');
  const tabClearance = document.getElementById('student-tab-clearance');
  const tabAppointments = document.getElementById('student-tab-appointments');
  const tabMessages = document.getElementById('student-tab-messages');

  const viewHome = document.getElementById('student-view-home');
  const viewForm = document.getElementById('student-view-form');
  const viewTickets = document.getElementById('student-view-tickets');
  const viewClearance = document.getElementById('student-view-clearance');
  const viewAppointments = document.getElementById('student-view-appointments');
  const viewMessages = document.getElementById('student-view-messages');

  const footer = document.querySelector('#screen-student footer');
  const main = document.querySelector('#screen-student main');
  const screenStudent = document.getElementById('screen-student');

  const allTabs = [tabHome, tabForm, tabTickets, tabClearance, tabAppointments, tabMessages];
  const allViews = [viewHome, viewForm, viewTickets, viewClearance, viewAppointments, viewMessages];

  allTabs.forEach((t) => {
    t?.classList.remove('bg-[#2563eb]', 'text-white', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]', 'font-bold', 'bg-[#064e3b]', 'shadow-xs');
    t?.classList.remove('bg-white', 'border-slate-200', 'text-slate-700', 'hover:bg-slate-50');
    t?.classList.add('bg-[#0c1425]', 'hover:bg-[#111c33]', 'border', 'border-[#16233b]', 'text-slate-400', 'hover:text-white', 'text-xs', 'font-semibold');
  });
  allViews.forEach((v) => {
    v?.classList.add('hidden');
    if (v) v.style.display = 'none';
  });

  const studentMsgContainer = document.getElementById('student-messaging-container');
  if (studentMsgContainer) {
    studentMsgContainer.classList.add('hidden');
    studentMsgContainer.style.display = 'none';
  }

  const activate = (btnEl, viewEl) => {
    btnEl?.classList.remove('bg-[#0c1425]', 'hover:bg-[#111c33]', 'border', 'border-[#16233b]', 'text-slate-400', 'hover:text-white', 'font-semibold', 'bg-white', 'border-slate-200', 'text-slate-700', 'hover:bg-slate-50');
    btnEl?.classList.add('bg-[#2563eb]', 'text-white', 'text-xs', 'font-bold', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]');
    if (viewEl) {
      viewEl.classList.remove('hidden');
      if (viewEl === viewMessages) {
        viewEl.style.display = 'flex';
      } else if (viewEl === viewAppointments) {
        viewEl.style.display = 'flex';
        viewEl.style.flexDirection = 'column';
        viewEl.style.gap = '24px';
      } else {
        viewEl.style.display = 'block';
      }
    }
  };

  // Control Secondary Navigation Bar Visibility
  const studentSecondaryNav = document.getElementById('student-secondary-nav-wrapper') || document.querySelector('#screen-student .student-secondary-nav');
  if (studentSecondaryNav) {
    if (tab === 'messages') {
      studentSecondaryNav.classList.add('hidden');
      studentSecondaryNav.style.display = 'none';
    } else {
      studentSecondaryNav.classList.remove('hidden');
      studentSecondaryNav.style.display = '';
    }
  }

  if (tab === 'form') {
    screenStudent?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenStudent?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'pt-4', 'pb-12');
    }
    activate(tabForm, viewForm);
    const dateInput = document.getElementById('student-input-date');
    if (dateInput && !dateInput.value) {
      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000;
      dateInput.value = (new Date(now.getTime() - offset)).toISOString().slice(0, 16);
    }
  } else if (tab === 'tickets') {
    screenStudent?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenStudent?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'pt-4', 'pb-12');
    }
    activate(tabTickets, viewTickets);
    renderStudentTickets();
  } else if (tab === 'clearance') {
    screenStudent?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenStudent?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'pt-4', 'pb-12');
    }
    activate(tabClearance, viewClearance);
    renderStudentClearance();
  } else if (tab === 'appointments') {
    screenStudent?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenStudent?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'pt-4', 'pb-12');
    }
    activate(tabAppointments, viewAppointments);
    if (currentAppointmentMode === 'records') {
      renderStudentAppointments();
    } else if (currentAppointmentMode === 'walkin') {
      renderWalkInTicketView();
    } else {
      updateTimeSlotAvailability();
    }
  } else if (tab === 'messages') {
    // Full Viewport Messaging Workspace: Collapse secondary nav bar and expand chat to 100%
    document.body.classList.add('overflow-hidden');
    screenStudent?.classList.add('h-screen', 'overflow-hidden', 'tab-messages-active');
    if (footer) footer.classList.add('hidden');
    if (main) {
      main.classList.remove('pt-4', 'pb-12', 'py-8', 'py-2', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'h-[calc(100dvh-64px)]', 'h-[calc(100vh-120px)]');
      main.classList.add('p-0', 'm-0', 'w-screen', 'flex-1', 'min-h-0', 'h-full', 'overflow-hidden');
      main.style.display = 'flex';
      main.style.flexDirection = 'column';
      main.style.height = 'calc(100dvh - 64px)';
    }
    activate(tabMessages, viewMessages);
    if (viewMessages) {
      viewMessages.classList.remove('hidden');
      viewMessages.style.display = 'flex';
      viewMessages.style.flexDirection = 'column';
      viewMessages.style.flex = '1 1 0%';
      viewMessages.style.width = '100%';
      viewMessages.style.height = '100%';
    }
    if (studentMsgContainer) {
      studentMsgContainer.classList.remove('hidden');
      studentMsgContainer.style.display = 'flex';
      studentMsgContainer.style.flexDirection = 'column';
      studentMsgContainer.style.flex = '1 1 0%';
      studentMsgContainer.style.width = '100%';
      studentMsgContainer.style.height = '100%';
    }
    renderInstagramDMHub('student-messaging-container', 'student');
  } else {
    // Default to 'home'
    screenStudent?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenStudent?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'pt-4', 'pb-12');
    }
    activate(tabHome, viewHome);
    const session = getActiveSession();
    const badge = document.getElementById('home-student-badge');
    if (badge && session) {
      badge.textContent = session.studentNumber || '2023-01842-CM-0';
    }
  }
}

function switchAdminTab(tab, updateHistory = true) {
  tab = normalizeAdminTab(tab);
  sessionStorage.setItem(STORAGE_KEY_ACTIVE_TAB, tab);

  const activeDocket = (tab === 'registry') ? sessionStorage.getItem(STORAGE_KEY_ACTIVE_DOCKET) : null;
  if (tab !== 'registry') {
    sessionStorage.removeItem(STORAGE_KEY_ACTIVE_DOCKET);
    const modalInspector = document.getElementById('modal-case-viewer');
    if (modalInspector) modalInspector.classList.add('hidden');
  }

  if (updateHistory && isDashboardRoute()) {
    const targetUrl = buildDashboardUrl(tab, activeDocket);
    const curFull = window.location.hash || (window.location.pathname + window.location.search);
    if (curFull !== targetUrl) {
      window.history.pushState({ tab, docket: activeDocket }, '', targetUrl);
    }
  }

  const tabHome = document.getElementById('admin-tab-home');
  const tabRegistry = document.getElementById('admin-tab-registry');
  const tabClearance = document.getElementById('admin-tab-clearance');
  const tabAppointments = document.getElementById('admin-tab-appointments');
  const tabMessages = document.getElementById('admin-tab-messages');

  const viewHome = document.getElementById('admin-view-home');
  const viewRegistry = document.getElementById('admin-view-registry');
  const viewClearance = document.getElementById('admin-view-clearance');
  const viewAppointments = document.getElementById('admin-view-appointments');
  const viewMessages = document.getElementById('admin-view-messages');

  const footer = document.querySelector('#screen-admin footer');
  const main = document.querySelector('#screen-admin main');
  const screenAdmin = document.getElementById('screen-admin');

  const allTabs = [tabHome, tabRegistry, tabClearance, tabAppointments, tabMessages];
  const allViews = [viewHome, viewRegistry, viewClearance, viewAppointments, viewMessages];

  allTabs.forEach((t) => {
    t?.classList.remove('bg-[#2563eb]', 'text-white', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]', 'font-bold', 'bg-[#064e3b]', 'shadow-xs');
    t?.classList.remove('bg-white', 'border-slate-200', 'text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-50', 'shadow-2xs');
    t?.classList.add('bg-[#0c1425]', 'hover:bg-[#111c33]', 'border', 'border-[#16233b]', 'text-slate-400', 'hover:text-white', 'text-xs', 'font-semibold');
  });
  allViews.forEach((v) => {
    v?.classList.add('hidden');
    if (v) v.style.display = 'none';
  });

  const adminMsgContainer = document.getElementById('admin-messaging-container');
  if (adminMsgContainer) {
    adminMsgContainer.classList.add('hidden');
    adminMsgContainer.style.display = 'none';
  }

  const activate = (btnEl, viewEl) => {
    btnEl?.classList.remove('bg-[#0c1425]', 'hover:bg-[#111c33]', 'border', 'border-[#16233b]', 'text-slate-400', 'hover:text-white', 'font-semibold', 'bg-white', 'border-slate-200', 'text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-50', 'shadow-2xs');
    btnEl?.classList.add('bg-[#2563eb]', 'text-white', 'text-xs', 'font-bold', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]');
    if (viewEl) {
      viewEl.classList.remove('hidden');
      viewEl.style.display = (viewEl === viewMessages) ? 'flex' : (viewEl === viewHome ? 'flex' : 'block');
    }
  };

  // Control Secondary Navigation Bar Visibility
  const adminSecondaryNav = document.getElementById('admin-secondary-nav-wrapper') || document.querySelector('#screen-admin .admin-secondary-nav');
  if (adminSecondaryNav) {
    if (tab === 'messages') {
      adminSecondaryNav.classList.add('hidden');
      adminSecondaryNav.style.display = 'none';
    } else {
      adminSecondaryNav.classList.remove('hidden');
      adminSecondaryNav.style.display = '';
    }
  }

  if (tab === 'registry') {
    screenAdmin?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenAdmin?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'py-8');
    }
    activate(tabRegistry, viewRegistry);
    renderAdminKPIs();
    renderRegistryTable();
  } else if (tab === 'clearance') {
    screenAdmin?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenAdmin?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'py-8');
    }
    activate(tabClearance, viewClearance);
  } else if (tab === 'appointments') {
    screenAdmin?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenAdmin?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'pt-4', 'pb-12');
    }
    activate(tabAppointments, viewAppointments);
    renderAdminAppointments();
  } else if (tab === 'messages') {
    // Full Viewport Messaging Workspace: Collapse secondary nav bar and expand chat to 100%
    document.body.classList.add('overflow-hidden');
    screenAdmin?.classList.add('h-screen', 'overflow-hidden', 'tab-messages-active');
    if (footer) footer.classList.add('hidden');
    if (main) {
      main.classList.remove('py-8', 'py-2', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'h-[calc(100dvh-64px)]', 'h-[calc(100vh-120px)]');
      main.classList.add('p-0', 'm-0', 'w-screen', 'flex-1', 'min-h-0', 'h-full', 'overflow-hidden');
      main.style.display = 'flex';
      main.style.flexDirection = 'column';
      main.style.height = 'calc(100dvh - 64px)';
    }
    activate(tabMessages, viewMessages);
    if (viewMessages) {
      viewMessages.classList.remove('hidden');
      viewMessages.style.display = 'flex';
      viewMessages.style.flexDirection = 'column';
      viewMessages.style.flex = '1 1 0%';
      viewMessages.style.width = '100%';
      viewMessages.style.height = '100%';
    }
    if (adminMsgContainer) {
      adminMsgContainer.classList.remove('hidden');
      adminMsgContainer.style.display = 'flex';
      adminMsgContainer.style.flexDirection = 'column';
      adminMsgContainer.style.flex = '1 1 0%';
      adminMsgContainer.style.width = '100%';
      adminMsgContainer.style.height = '100%';
    }
    renderInstagramDMHub('admin-messaging-container', 'osa');
  } else {
    // Default to 'home'
    screenAdmin?.classList.remove('tab-messages-active');
    document.body.classList.remove('overflow-hidden');
    screenAdmin?.classList.remove('h-screen', 'overflow-hidden');
    if (footer) footer.classList.remove('hidden');
    if (main) {
      main.classList.remove('p-0', 'm-0', 'w-screen', 'h-[calc(100dvh-64px)]', 'py-2', 'h-[calc(100vh-120px)]', 'overflow-hidden');
      main.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'space-y-8', 'py-8');
    }
    activate(tabHome, viewHome);
    renderAdminKPIs();
  }
}

window.switchStudentTab = switchStudentTab;
window.switchAdminTab = switchAdminTab;

function resetTabVisibility(role, activeTab) {
  const isStudent = role === 'student' || (!role && document.getElementById('screen-student')?.style.display !== 'none');
  const isAdmin = role === 'admin' || (!role && document.getElementById('screen-admin')?.style.display !== 'none');

  if (isStudent || document.getElementById('student-view-messages')) {
    const isMessages = (activeTab === 'messages');
    const sMsg = document.getElementById('student-view-messages');
    const sCont = document.getElementById('student-messaging-container');
    if (sMsg) {
      if (isMessages) {
        sMsg.classList.remove('hidden');
        sMsg.style.display = 'flex';
      } else {
        sMsg.classList.add('hidden');
        sMsg.style.display = 'none';
      }
    }
    if (sCont) {
      if (isMessages) {
        sCont.classList.remove('hidden');
        sCont.style.display = 'flex';
      } else {
        sCont.classList.add('hidden');
        sCont.style.display = 'none';
      }
    }
    const isApt = (activeTab === 'appointments');
    const sApt = document.getElementById('student-view-appointments');
    if (sApt) {
      if (isApt) {
        sApt.classList.remove('hidden');
        sApt.style.display = 'block';
      } else {
        sApt.classList.add('hidden');
        sApt.style.display = 'none';
      }
    }
  }

  if (isAdmin || document.getElementById('admin-view-messages')) {
    const isMessages = (activeTab === 'messages');
    const aMsg = document.getElementById('admin-view-messages');
    const aCont = document.getElementById('admin-messaging-container');
    if (aMsg) {
      if (isMessages) {
        aMsg.classList.remove('hidden');
        aMsg.style.display = 'flex';
      } else {
        aMsg.classList.add('hidden');
        aMsg.style.display = 'none';
      }
    }
    if (aCont) {
      if (isMessages) {
        aCont.classList.remove('hidden');
        aCont.style.display = 'flex';
      } else {
        aCont.classList.add('hidden');
        aCont.style.display = 'none';
      }
    }
    const isApt = (activeTab === 'appointments');
    const aApt = document.getElementById('admin-view-appointments');
    if (aApt) {
      if (isApt) {
        aApt.classList.remove('hidden');
        aApt.style.display = 'block';
      } else {
        aApt.classList.add('hidden');
        aApt.style.display = 'none';
      }
    }
  }
}
window.resetTabVisibility = resetTabVisibility;

// ========================================================
// KPI METRICS GENERATOR
// ========================================================
function getKPICardsHTML(stats) {
  return `
    <!-- Card 1: TOTAL INQUIRIES -->
    <div class="bg-[#0c1425] rounded-2xl border border-[#1e293b] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-between min-h-[105px] hover:border-slate-700 transition">
      <div class="flex flex-col justify-center min-w-0 flex-1 pr-3">
        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 leading-none">Total Inquiries</span>
        <span class="text-3xl font-extrabold text-white tracking-tight leading-tight tabular-nums">${stats.total}</span>
        <span class="text-[11px] text-slate-400 mt-1 leading-snug">AY 2024–2025 Registry</span>
      </div>
      <div class="size-11 rounded-xl bg-[#070d1a] border border-[#1e293b] text-slate-300 flex items-center justify-center shrink-0">
        <svg class="size-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      </div>
    </div>

    <!-- Card 2: PENDING HEARING -->
    <div class="bg-[#0c1425] rounded-2xl border border-[#1e293b] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-between min-h-[105px] hover:border-slate-700 transition">
      <div class="flex flex-col justify-center min-w-0 flex-1 pr-3">
        <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1 leading-none">Pending Hearing</span>
        <span class="text-3xl font-extrabold text-white tracking-tight leading-tight tabular-nums">${stats.pending}</span>
        <span class="text-[11px] text-slate-400 mt-1 leading-snug">Awaiting Board Disposition</span>
      </div>
      <div class="size-11 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
        <svg class="size-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>
    </div>

    <!-- Card 3: UNDER INVESTIGATION -->
    <div class="bg-[#0c1425] rounded-2xl border border-[#1e293b] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-between min-h-[105px] hover:border-slate-700 transition">
      <div class="flex flex-col justify-center min-w-0 flex-1 pr-3">
        <span class="text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-1 leading-none">Under Investigation</span>
        <span class="text-3xl font-extrabold text-blue-400 tracking-tight leading-tight tabular-nums">${stats.investigation}</span>
        <span class="text-[11px] text-slate-400 mt-1 leading-snug">Active Inquiry &amp; Conciliation</span>
      </div>
      <div class="size-11 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
        <svg class="size-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"/>
        </svg>
      </div>
    </div>

    <!-- Card 4: GUIDANCE REFERRALS -->
    <div class="bg-[#0c1425] rounded-2xl border border-[#1e293b] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-between min-h-[105px] hover:border-slate-700 transition">
      <div class="flex flex-col justify-center min-w-0 flex-1 pr-3">
        <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1 leading-none">Guidance Referrals</span>
        <span class="text-3xl font-extrabold text-emerald-400 tracking-tight leading-tight tabular-nums">${stats.guidance}</span>
        <span class="text-[11px] text-slate-400 mt-1 leading-snug">Endorsed to CGCC Desk</span>
      </div>
      <div class="size-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
        <svg class="size-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </div>
    </div>
  `;
}

function renderAdminKPIs() {
  const stats = store.getAnalytics();
  const homeDeck = document.getElementById('admin-home-kpi-deck');
  const regDeck = document.getElementById('admin-registry-kpi-deck');
  const html = getKPICardsHTML(stats);
  if (homeDeck) homeDeck.innerHTML = html;
  if (regDeck) regDeck.innerHTML = html;
}

// ========================================================
// RENDER STUDENT SUBMITTED TICKETS
// ========================================================
function renderStudentTickets() {
  const listBody = document.getElementById('student-tickets-table-body');
  const emptyNotice = document.getElementById('student-tickets-empty');
  if (!listBody) return;

  const myReports = store.getMyReports();
  if (myReports.length === 0) {
    listBody.innerHTML = '';
    emptyNotice?.classList.remove('hidden');
    return;
  }

  emptyNotice?.classList.add('hidden');
  listBody.innerHTML = myReports
    .map((item) => {
      const guidancePill = item.guidanceEndorsed
        ? `<span class="whitespace-nowrap inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE] shrink-0">Guidance Referral</span>`
        : `<span class="text-[#64748B] text-xs">Standard</span>`;

      return `
        <tr class="hover:bg-[#F6F9FC] transition border-b border-[#E3E8EE]">
          <td class="p-4 text-xs font-bold font-mono text-[#533AFD] whitespace-nowrap">${escapeHtml(item.id)}</td>
          <td class="p-4">
            <div class="font-bold text-xs text-[#0A2540]">${escapeHtml(item.classification)}</div>
            <div class="text-[11px] text-[#64748B] mt-0.5">${escapeHtml(item.date)} • ${escapeHtml(item.location)}</div>
          </td>
          <td class="p-4">
            <div class="text-xs font-semibold text-[#0A2540]">${escapeHtml(item.studentName)}</div>
            <div class="text-[11px] text-[#64748B] font-mono mt-0.5">${escapeHtml(item.studentNumber)} (${escapeHtml(item.institute)})</div>
          </td>
          <td class="p-4 text-center whitespace-nowrap">
            ${guidancePill}
          </td>
          <td class="p-4 text-center whitespace-nowrap">
            ${getStatusBadge(item.status)}
          </td>
          <td class="p-4 text-xs text-[#334155] leading-relaxed">
            ${escapeHtml(item.sanctionNotes || 'Pending initial review by Prefect of Discipline.')}
          </td>
        </tr>
      `;
    })
    .join('');
}

// ========================================================
// RENDER ADMIN DISCIPLINARY CASE REGISTRY TABLE
// ========================================================
function renderRegistryTable() {
  const inputSearch = document.getElementById('input-search');
  const selectInstitute = document.getElementById('filter-institute');
  const selectStatus = document.getElementById('filter-status');
  const tableBody = document.getElementById('registry-table-body');
  const emptyState = document.getElementById('registry-empty-state');
  const countIndicator = document.getElementById('filter-count');

  if (!tableBody) return;

  const query = (inputSearch?.value || '').trim().toLowerCase();
  const selectedInst = selectInstitute?.value || 'ALL';
  const selectedStat = selectStatus?.value || 'ALL';

  const allCases = store.getAll();
  const filtered = allCases.filter((item) => {
    const matchInst = selectedInst === 'ALL' || item.institute === selectedInst;
    const matchStat = selectedStat === 'ALL' || item.status === selectedStat;
    const matchQuery =
      !query ||
      item.id.toLowerCase().includes(query) ||
      item.studentName.toLowerCase().includes(query) ||
      item.studentNumber.toLowerCase().includes(query) ||
      item.classification.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      (item.actualStudentName && item.actualStudentName.toLowerCase().includes(query)) ||
      (item.actualStudentNumber && item.actualStudentNumber.toLowerCase().includes(query));

    return matchInst && matchStat && matchQuery;
  });

  if (countIndicator) {
    countIndicator.textContent = `${filtered.length} of ${allCases.length} records`;
  }

  if (filtered.length === 0) {
    tableBody.innerHTML = '';
    emptyState?.classList.remove('hidden');
    return;
  }

  emptyState?.classList.add('hidden');
  tableBody.innerHTML = filtered
    .map((item) => {
      const docket = item;
      const guidancePill = item.guidanceEndorsed
        ? `<span class="whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE] shrink-0">Guidance</span>`
        : `<span class="text-[#94A3B8] text-xs font-normal">Standard</span>`;

      // Identity Visibility: Sensitive/anonymous records default to [🔒 AES-256 Confidential Record]
      let studentDisplayHtml = '';
      if (item.isAnonymousToPublic || item.isAnonymous) {
        const isRevealed = (typeof revealedDockets !== 'undefined' && revealedDockets.has(item.id));
        studentDisplayHtml = `
          <div class="flex flex-col gap-1 min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-bold text-[#F8FAFC] text-xs truncate max-w-[150px]">${escapeHtml(item.maskedAlias || item.studentName || 'Anonymous Montalbano #4812')}</span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[#CBD5E1] whitespace-nowrap shrink-0">Protected Identity</span>
            </div>
            <div class="mt-0.5">
              ${isRevealed ? `
                <span class="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/40 border border-amber-500/40 text-amber-300 font-semibold tabular-nums whitespace-nowrap">
                  [🔓 Unmasked: ${escapeHtml(item.actualStudentName || item.studentName)} (${escapeHtml(item.actualStudentNumber || item.studentNumber)})]
                </span>
              ` : `
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/40 border border-purple-500/30 text-purple-300 font-semibold whitespace-nowrap shrink-0">
                    🔒 Confidential Record
                  </span>
                  <button type="button" onclick="requestRevealIdentity('${escapeHtml(item.id)}')"
                    class="text-[10px] text-blue-400 hover:text-blue-300 hover:underline font-semibold cursor-pointer whitespace-nowrap shrink-0">
                    👁️ Reveal
                  </button>
                </div>
              `}
            </div>
          </div>
        `;
      } else {
        studentDisplayHtml = `
          <div class="font-bold text-[#F8FAFC] text-xs truncate max-w-[200px]">${escapeHtml(item.studentName)}</div>
          <div class="text-[11px] text-[#94A3B8] font-mono mt-0.5 tabular-nums whitespace-nowrap">${escapeHtml(item.studentNumber)}</div>
        `;
      }

      return `
        <tr class="hover:bg-white/5 transition border-b border-[#16233b]">
          <td class="w-[130px] font-mono text-xs font-bold text-blue-400 py-3.5 px-4 align-middle tabular-nums whitespace-nowrap">${escapeHtml(item.id)}</td>
          <td class="w-[240px] py-3.5 px-4 align-middle">
            ${studentDisplayHtml}
          </td>
          <td class="w-[80px] py-3.5 px-4 text-center align-middle whitespace-nowrap">
            ${getInstituteBadge(item.institute)}
          </td>
          <td class="w-[280px] py-3.5 px-4 align-middle">
            <div class="font-semibold text-xs text-[#F8FAFC] leading-snug">${escapeHtml(item.classification)}</div>
            <div class="text-[11px] text-[#94A3B8] mt-0.5 tabular-nums">${escapeHtml(item.date)} • ${escapeHtml(item.location)}</div>
          </td>
          <td class="w-[110px] py-3.5 px-4 text-center align-middle whitespace-nowrap">
            ${guidancePill}
          </td>
          <td class="w-[140px] py-3.5 px-4 text-center align-middle whitespace-nowrap">
            ${getStatusBadge(item.status)}
          </td>
          <td class="py-3.5 px-4 text-right align-middle whitespace-nowrap min-w-[170px]">
            <div class="inline-flex items-center rounded-xl border border-[#1e293b] bg-[#0c1425] shadow-xs divide-x divide-[#1e293b] relative">
              <!-- Primary Action: Inspect -->
              <button 
                type="button" 
                onclick="openInspectModal('${escapeHtml(item.id)}')" 
                class="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition rounded-l-xl cursor-pointer">
                Inspect
              </button>

              <!-- Dropdown Trigger: Options ▾ -->
              <button 
                type="button" 
                onclick="toggleCaseActionMenu(event, '${escapeHtml(item.id)}')" 
                class="action-menu-btn px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition rounded-r-xl flex items-center gap-1 cursor-pointer">
                <span>Options</span>
                <svg class="size-3 text-slate-400 group-hover:text-white transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <!-- Floating Dropdown Menu -->
              <div 
                id="dropdown-menu-${escapeHtml(item.id)}" 
                class="case-dropdown-menu hidden absolute right-0 top-full mt-1.5 w-52 bg-[#0c1425] border border-[#1e293b] rounded-xl shadow-xl py-1.5 z-50 text-left font-sans text-white">
                
                <div class="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-[#16233b] mb-1">
                  Update Docket Status
                </div>

                <button 
                  type="button" 
                  onclick="updateDocketStatus('${escapeHtml(item.id)}', 'Resolved')" 
                  class="w-full px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 flex items-center gap-2 transition text-left cursor-pointer">
                  <span class="size-2 rounded-full bg-emerald-500 shrink-0"></span>
                  Mark as Resolved
                </button>

                <button 
                  type="button" 
                  onclick="updateDocketStatus('${escapeHtml(item.id)}', 'Pending Hearing')" 
                  class="w-full px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-amber-400 flex items-center gap-2 transition text-left cursor-pointer">
                  <span class="size-2 rounded-full bg-amber-500 shrink-0"></span>
                  Pending Hearing
                </button>

                <button 
                  type="button" 
                  onclick="updateDocketStatus('${escapeHtml(item.id)}', 'Under Investigation')" 
                  class="w-full px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-blue-400 flex items-center gap-2 transition text-left cursor-pointer">
                  <span class="size-2 rounded-full bg-blue-500 shrink-0"></span>
                  Under Investigation
                </button>

                <div class="border-t border-[#16233b] my-1"></div>

                <div class="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Actions
                </div>

                <button 
                  type="button" 
                  onclick="toggleDocketReferral('${escapeHtml(item.id)}')" 
                  class="w-full px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white flex items-center gap-2 transition text-left cursor-pointer">
                  <svg class="size-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                  Toggle CGCC Guidance
                </button>

                <button 
                  type="button" 
                  onclick="openDirectConsultation('${escapeHtml(item.id)}')" 
                  class="w-full px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white flex items-center gap-2 transition text-left cursor-pointer">
                  <svg class="size-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Open Consultation DM
                </button>
              </div>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');
}

// ========================================================
// CASE REGISTRY ACTIONS & DROPDOWN MENU CONTROLLER
// ========================================================
function toggleCaseActionMenu(event, docketId) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const targetMenu = document.getElementById(`dropdown-menu-${docketId}`);
  if (!targetMenu) return;

  const isCurrentlyOpen = !targetMenu.classList.contains('hidden');
  closeAllCaseActionMenus();

  if (!isCurrentlyOpen) {
    targetMenu.classList.remove('hidden');
  }
}

function closeAllCaseActionMenus() {
  document.querySelectorAll('.case-dropdown-menu').forEach((menu) => {
    menu.classList.add('hidden');
  });
}

function updateDocketStatus(docketId, newStatus) {
  closeAllCaseActionMenus();
  let normalized = newStatus;
  if (newStatus === 'Pending Hearing') normalized = 'Pending';
  if (newStatus === 'Under Investigation') normalized = 'Investigation';

  store.updateStatus(docketId, normalized);
  renderRegistryTable();
  renderAdminKPIs();
}

function toggleDocketReferral(docketId) {
  closeAllCaseActionMenus();
  const item = store.getById(docketId);
  if (!item) return;

  item.guidanceEndorsed = !item.guidanceEndorsed;
  store.saveCases(store.cases);
  renderRegistryTable();
  renderAdminKPIs();
}

function openDirectConsultation(docketId) {
  closeAllCaseActionMenus();
  let threads = store.getMessages();
  let thread = threads.find((t) => t.docket === docketId || t.threadId === docketId);

  if (!thread) {
    const docketItem = store.getById(docketId);
    if (docketItem) {
      const pName = docketItem.isAnonymousToPublic
        ? `${docketItem.maskedAlias || 'Anonymous'} (${docketItem.actualStudentName || docketItem.studentName})`
        : docketItem.studentName;
      thread = {
        threadId: docketId,
        title: `${docketItem.classification} Consultation`,
        docket: docketId,
        classification: docketItem.classification,
        institute: docketItem.institute,
        status: 'Open / Active',
        participant: pName,
        studentNumber: docketItem.studentNumber || 'Student',
        studentName: docketItem.studentName,
        actualStudentName: docketItem.actualStudentName || docketItem.studentName,
        isAnonymous: !!docketItem.isAnonymousToPublic,
        isAnonymousToPublic: !!docketItem.isAnonymousToPublic,
        maskedAlias: docketItem.maskedAlias,
        referral: docketItem.guidanceEndorsed ? 'CGCC Guidance Endorsed' : 'Direct OSAS Disciplinary Desk',
        sanctions: docketItem.sanctions || 'Under active administrative review.',
        unreadCount: 0,
        lastUpdate: 'Just now',
        messages: [
          {
            id: 'msg-' + Date.now(),
            sender: 'osa',
            senderName: 'Office of Student Affairs (Prefect Desk)',
            role: 'OSAS Officer',
            type: 'text',
            text: `Initiated direct administrative consultation regarding Docket #${docketId} (${docketItem.classification}).`,
            timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
            date: 'Today',
            status: 'delivered'
          }
        ]
      };
      store.createThread(thread);
    }
  }

  if (thread) {
    activeThreadId = thread.threadId;
  }
  switchAdminTab('messages');
}

function openInspectModal(docketId) {
  closeAllCaseActionMenus();
  openInspectorModal(docketId);
}

// Global exposure
window.toggleCaseActionMenu = toggleCaseActionMenu;
window.closeAllCaseActionMenus = closeAllCaseActionMenus;
window.updateDocketStatus = updateDocketStatus;
window.toggleDocketReferral = toggleDocketReferral;
window.openDirectConsultation = openDirectConsultation;
window.openInspectModal = openInspectModal;

// ========================================================
// ADMIN CASE INSPECTOR MODAL
// ========================================================
function openInspectorModal(id, updateHistory = true) {
  const modalInspector = document.getElementById('modal-case-viewer');
  const modalDetails = document.getElementById('modal-case-details');
  if (!modalInspector || !modalDetails) return;

  const item = store.getById(id);
  if (!item) return;

  sessionStorage.setItem(STORAGE_KEY_ACTIVE_DOCKET, id);
  if (typeof logAuditAction === 'function') {
    logAuditAction(
      'Record Viewed',
      'Prefect Desk (Admin)',
      'Administrator',
      item.id,
      `Inspected case dossier and evidentiary logs for docket #${item.id}`
    );
  }
  if (updateHistory && isDashboardRoute()) {
    const curTab = sessionStorage.getItem(STORAGE_KEY_ACTIVE_TAB) || 'registry';
    const targetUrl = buildDashboardUrl(curTab, id);
    const curFull = window.location.hash || (window.location.pathname + window.location.search);
    if (curFull !== targetUrl) {
      window.history.replaceState({ tab: curTab, docket: id }, '', targetUrl);
    }
  }

  const isGuaranteedEndorsed = Boolean(item.guidanceEndorsed);

  modalDetails.innerHTML = `
    <!-- Modal Fixed Header -->
    <div class="px-6 py-4.5 border-b border-[#16233b] flex items-center justify-between bg-[#070d1a] shrink-0">
      <div class="flex items-center gap-2.5">
        <h3 class="text-base font-extrabold text-white tracking-tight">Case Inspection &amp; Disposition</h3>
        <span class="px-2.5 py-0.5 rounded-md bg-[#0c1425] border border-[#1e293b] font-mono text-xs font-bold text-blue-400">${escapeHtml(item.id)}</span>
      </div>
      <button 
        type="button" 
        id="btn-close-modal"
        onclick="closeInspector()" 
        class="p-1.5 rounded-xl text-slate-400 hover:text-white bg-[#0c1425] hover:bg-[#16233b] border border-[#1e293b] transition cursor-pointer"
        title="Close modal"
        aria-label="Close modal">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Modal Scrollable Body -->
    <div class="flex-1 overflow-y-auto p-6 space-y-4 bg-[#0c1425]">
      <!-- Card 1: Involved Student & Offense Metadata -->
      <div class="p-5 rounded-2xl border border-[#1e293b] bg-[#070d1a] grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1">
          <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase">INVOLVED STUDENT</span>
          ${item.isAnonymous && !(typeof revealedDockets !== 'undefined' && revealedDockets.has(item.id)) ? `
            <div class="text-sm font-bold text-slate-300">${escapeHtml(item.maskedAlias || 'Anonymous Montalbano #4812')}</div>
            <div class="text-xs text-slate-400 font-mono">Protected Identity • ${escapeHtml(item.institute)}</div>
            <div class="mt-1 flex items-center gap-2 flex-wrap">
              <span class="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/40 border border-purple-500/30 text-purple-300 font-semibold">🔒 AES-256 Confidential Record</span>
              <button type="button" onclick="requestRevealIdentity('${escapeHtml(item.id)}')" class="text-[10px] text-blue-400 hover:text-blue-300 font-semibold underline cursor-pointer">👁️ Reveal Confidential Identity</button>
            </div>
          ` : `
            <div class="text-sm font-bold text-white">${escapeHtml(item.actualStudentName || item.studentName)}</div>
            <div class="text-xs text-slate-400 font-mono">${escapeHtml(item.actualStudentNumber || item.studentNumber)} • ${escapeHtml(item.institute)}</div>
            ${item.isAnonymous ? `<div class="text-[10px] text-amber-400 font-semibold mt-1">[🔓 Unmasked: Confidential filing under masked alias "${escapeHtml(item.maskedAlias)}"]</div>` : ''}
          `}
        </div>
        <div class="space-y-1">
          <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase">OFFENSE / PARAMETERS</span>
          <div class="text-sm font-bold text-white flex items-center gap-2 flex-wrap">
            <span>${escapeHtml(item.classification)}</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#635BFF]/20 text-[#a5b4fc] border border-[#635BFF]/30">Handbook Policy Ref</span>
          </div>
          <div class="text-xs text-slate-400">${escapeHtml(item.date)} • ${escapeHtml(item.location)}</div>
          <div class="text-xs text-slate-400">Complainant: <span class="font-medium text-slate-300">${item.isAnonymous ? 'Confidential Protected Filing' : escapeHtml(item.complainant)}</span></div>
        </div>
      </div>

      <!-- Card 2: Official Incident Narrative -->
      <div class="p-5 rounded-2xl border border-[#1e293b] bg-[#070d1a] space-y-1.5">
        <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase">OFFICIAL INCIDENT NARRATIVE</span>
        <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(item.description)}</p>
      </div>

      <!-- Card 3: Guidance & Counseling Endorsement -->
      <div class="p-4 rounded-2xl border border-[#1e293b] bg-[#070d1a] flex items-center justify-between gap-4">
        <div class="space-y-0.5">
          <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase">GUIDANCE ENDORSEMENT</span>
          <p class="text-xs text-slate-400 leading-relaxed">${isGuaranteedEndorsed
      ? 'Endorsed to the College Guidance & Counseling Center (CGCC) for restorative behavioral counseling and psycho-social mediation.'
      : 'Direct administrative discipline case without immediate guidance counseling requirement.'
    }</p>
        </div>
        <div class="shrink-0">
          ${isGuaranteedEndorsed
      ? `<span class="bg-[#635BFF]/15 text-[#a5b4fc] border border-[#635BFF]/30 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap">Active CGCC Referral</span>`
      : `<span class="text-xs text-slate-500 font-normal whitespace-nowrap">Not Referred</span>`
    }
        </div>
      </div>

      <!-- Card 4: Sanctions & Administrative Disciplinary Notes -->
      <div class="p-5 rounded-2xl border border-[#1e293b] bg-[#070d1a] space-y-2">
        <label for="modal-notes" class="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">SANCTIONS / ADMINISTRATIVE DISCIPLINARY NOTES</label>
        <textarea 
          id="modal-notes" 
          rows="3" 
          class="w-full p-3.5 text-xs text-white bg-[#0c1425] border border-[#1e293b] rounded-xl focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 focus:outline-none transition leading-relaxed resize-y placeholder:text-slate-500" 
          placeholder="Record sanctions, hearing outcomes, community service, or administrative remarks...">${escapeHtml(item.sanctionNotes || '')}</textarea>
      </div>
    </div>

    <!-- Modal Fixed Footer -->
    <div class="px-6 py-4 bg-[#070d1a] border-t border-[#16233b] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
      <div class="flex items-center gap-3">
        <span class="text-xs font-semibold text-slate-400 whitespace-nowrap">Update Status:</span>
        <select id="modal-status-select" class="h-10 px-3.5 text-xs font-semibold rounded-xl border border-[#1e293b] bg-[#0c1425] text-white focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 focus:border-[#635BFF] transition cursor-pointer">
          <option value="Pending" ${item.status === 'Pending' || item.status === 'Pending Hearing' ? 'selected' : ''}>Pending Hearing</option>
          <option value="Investigation" ${item.status === 'Investigation' || item.status === 'Under Investigation' ? 'selected' : ''}>Under Investigation</option>
          <option value="Resolved" ${item.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
          <option value="Dismissed" ${item.status === 'Dismissed' ? 'selected' : ''}>Dismissed</option>
        </select>
      </div>

      <div class="flex items-center gap-2.5">
        <button 
          type="button" 
          id="btn-modal-verify-clearance" 
          data-student="${escapeHtml(item.actualStudentNumber || item.studentNumber)}"
          class="h-10 px-4 rounded-xl border border-[#1e293b] bg-[#0c1425] hover:bg-[#16233b] text-slate-300 hover:text-white text-xs font-semibold transition cursor-pointer whitespace-nowrap">
          Verify Clearance
        </button>
        <button 
          type="button" 
          id="btn-save-case-modal" 
          data-id="${escapeHtml(item.id)}"
          class="h-10 px-5 rounded-xl bg-[#635BFF] hover:bg-[#533AFD] text-white font-bold text-xs shadow-[0_4px_16px_rgba(99,91,255,0.35)] transition cursor-pointer whitespace-nowrap">
          Save Changes
        </button>
      </div>
    </div>
  `;

  modalInspector.classList.remove('hidden');

  // Re-bind close button and modal actions
  document.getElementById('btn-close-modal')?.addEventListener('click', closeInspector);

  document.getElementById('btn-save-case-modal')?.addEventListener('click', () => {
    const updatedStatus = document.getElementById('modal-status-select').value;
    const updatedNotes = document.getElementById('modal-notes').value;

    store.updateCase({
      id: item.id,
      status: updatedStatus,
      sanctionNotes: updatedNotes
    });

    modalInspector.classList.add('hidden');
    renderRegistryTable();
    renderAdminKPIs();
  });

  document.getElementById('btn-modal-verify-clearance')?.addEventListener('click', () => {
    modalInspector.classList.add('hidden');
    switchAdminTab('clearance');
    const clearanceInput = document.getElementById('input-verify-id');
    const studentToVerify = item.actualStudentNumber || item.studentNumber;
    if (clearanceInput) {
      clearanceInput.value = studentToVerify;
      performClearanceVerification(studentToVerify);
    }
  });
}

function closeInspector(updateHistory = true) {
  const modalInspector = document.getElementById('modal-case-viewer');
  if (modalInspector) modalInspector.classList.add('hidden');
  sessionStorage.removeItem(STORAGE_KEY_ACTIVE_DOCKET);
  if (updateHistory && isDashboardRoute()) {
    const curTab = sessionStorage.getItem(STORAGE_KEY_ACTIVE_TAB) || 'registry';
    const targetUrl = buildDashboardUrl(curTab, null);
    const curFull = window.location.hash || (window.location.pathname + window.location.search);
    if (curFull !== targetUrl) {
      window.history.replaceState({ tab: curTab }, '', targetUrl);
    }
  }
}

window.closeInspector = closeInspector;
window.openInspectorModal = openInspectorModal;

// ========================================================
// CLEARANCE & GOOD MORAL VERIFICATION (ADMIN DESK)
// ========================================================
function performClearanceVerification(idToVerify) {
  const clearanceResult = document.getElementById('clearance-result');
  if (!clearanceResult) return;

  const studentId = (idToVerify || '').trim();
  if (!studentId) {
    clearanceResult.classList.add('hidden');
    return;
  }

  const matches = store.getByStudentNumber(studentId);
  clearanceResult.classList.remove('hidden');

  const pendingCases = matches.filter((c) => c.status === 'Pending' || c.status === 'Investigation');
  const resolvedCases = matches.filter((c) => c.status === 'Resolved');
  const timestamp = new Date().toLocaleString();

  if (matches.length === 0) {
    clearanceResult.innerHTML = `
      <div class="bg-[#0c1425] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-xl text-white space-y-5">
        <!-- Row 1: Status & Eligibility Badges -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#16233b]">
          <div class="flex items-center gap-2.5 flex-wrap">
            <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-md">
              Discipline Verified
            </span>
            <span class="text-xs text-slate-400">Status: <strong class="text-emerald-400">Clean Disciplinary Record</strong></span>
          </div>
          <div class="self-start sm:self-auto">
            <span class="clearance-badge-pill px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 inline-flex items-center gap-1.5 shadow-xs">
              <span class="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Cleared for Issuance</span>
            </span>
          </div>
        </div>

        <!-- Row 2: Title and Student Identity -->
        <div>
          <h3 class="text-xl font-bold text-white tracking-tight">CdM Clearance &amp; Good Moral Eligibility</h3>
          <p class="text-xs text-slate-400 mt-1">Verified record for Student ID: <span class="font-mono font-bold text-white bg-[#070d1a] px-2 py-0.5 rounded border border-[#1e293b]">${escapeHtml(studentId)}</span></p>
        </div>

        <!-- Row 3: Narrative Text -->
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          No disciplinary violations, active grievances, or behavioral sanctions exist for this student ID in the SafeTrack institutional database. The student is in good standing and cleared for the issuance of the <strong>Certificate of Good Moral Character</strong> and enrollment credential release.
        </p>

        <!-- Row 4: Audit Verification Identifiers -->
        <div class="pt-4 border-t border-[#16233b] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <span>Verified:</span>
            <span class="font-mono text-slate-300">${timestamp}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>Verification Code:</span>
            <span class="font-mono text-slate-500">Ref: CdM-CLR-${Date.now().toString().slice(-6)}</span>
          </div>
        </div>

        <!-- Row 5: Action Deck (Full-width on mobile) -->
        <div class="pt-3 border-t border-[#16233b] flex flex-col sm:flex-row justify-end">
          <button onclick="openGoodMoralCertificate('${escapeHtml(studentId)}', '${escapeHtml(matches[0]?.actualStudentName || matches[0]?.studentName || 'Student Montalbano')}', '${escapeHtml(matches[0]?.institute || 'ICS')}')"
            class="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-[#2563eb] hover:bg-blue-600 active:scale-[0.99] text-white text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.35)]">
            <svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span>Print Certificate of Good Moral</span>
          </button>
        </div>
      </div>
    `;
  } else if (pendingCases.length > 0) {
    const caseListHtml = pendingCases
      .map(
        (c) => `
          <div class="bg-[#070d1a] border border-red-500/20 rounded-xl p-4 text-xs mb-2.5 shadow-xs">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-white font-mono">${escapeHtml(c.id)} • ${escapeHtml(c.classification)}</span>
              ${getStatusBadge(c.status)}
            </div>
            <div class="text-slate-400 mb-1.5">Date: ${escapeHtml(c.date)} | Institute: ${escapeHtml(c.institute)} | Location: ${escapeHtml(c.location)}</div>
            <div class="text-slate-300 bg-[#0c1425] p-2.5 rounded-lg border border-[#16233b]">
              <strong class="text-red-400">Hold Reason:</strong> ${escapeHtml(c.sanctionNotes || c.description)}
            </div>
          </div>
        `
      )
      .join('');

    clearanceResult.innerHTML = `
      <div class="bg-[#0c1425] border border-red-500/30 rounded-2xl p-6 shadow-xl text-white">
        <div class="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
          <div>
            <div class="text-xs text-red-400 font-semibold uppercase tracking-wider">Disciplinary Hold Advisory</div>
            <div class="text-xl font-bold text-red-400">HOLD - NOT ELIGIBLE FOR CLEARANCE</div>
            <div class="text-xs text-slate-400 mt-0.5">Student ID: <span class="font-semibold text-white font-mono">${escapeHtml(studentId)}</span> (${escapeHtml(matches[0].actualStudentName || matches[0].studentName)})</div>
          </div>
          <span class="bg-red-500/10 text-red-400 border border-red-500/30 px-4 py-2 rounded-full text-xs font-bold">
            ${pendingCases.length} Active Hold(s)
          </span>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed mb-3">
          Issuance of the <strong>Certificate of Good Moral Character</strong> and Clearance is strictly held due to unresolved disciplinary proceedings or unfulfilled sanctions. The student must report to the Office of the Prefect of Discipline to resolve the following docket(s):
        </p>

        <div class="mb-4">
          ${caseListHtml}
        </div>

        <div class="flex flex-wrap items-center justify-between text-xs text-slate-400 border-t border-[#16233b] pt-4 gap-2">
          <span>Action Required: Fulfill sanctions with Student Discipline Board</span>
          <span class="font-mono text-slate-500">Ref: CdM-HOLD-${Date.now().toString().slice(-6)} • ${timestamp}</span>
        </div>
      </div>
    `;
  } else {
    const resolvedListHtml = resolvedCases
      .map(
        (c) => `
          <div class="bg-[#070d1a] border border-[#1e293b] rounded-xl p-3.5 text-xs mb-2">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-white font-mono">${escapeHtml(c.id)} • ${escapeHtml(c.classification)}</span>
              ${getStatusBadge(c.status)}
            </div>
            <div class="text-slate-400">Resolution: <span class="text-slate-300">${escapeHtml(c.sanctionNotes || 'Completed')}</span></div>
          </div>
        `
      )
      .join('');

    clearanceResult.innerHTML = `
      <div class="bg-[#0c1425] border border-emerald-500/30 rounded-2xl p-6 shadow-xl text-white">
        <div class="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
          <div>
            <div class="text-xs text-emerald-400 font-semibold uppercase tracking-wider">CdM Disciplinary Verification</div>
            <div class="text-xl font-bold text-emerald-400">ELIGIBLE - PREVIOUS INFRACTIONS RESOLVED</div>
            <div class="text-xs text-slate-400 mt-0.5">Student ID: <span class="font-semibold text-white font-mono">${escapeHtml(studentId)}</span> (${escapeHtml(matches[0].actualStudentName || matches[0].studentName)})</div>
          </div>
          <span class="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-full text-xs font-bold">
            Sanctions Completed
          </span>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed mb-3">
          Prior disciplinary cases on record have all been formally marked as <strong>Resolved</strong> with all required counseling or sanctions completed. Good Moral Character certification is cleared for processing.
        </p>

        <div class="mb-4">
          ${resolvedListHtml}
        </div>

        <div class="text-xs text-slate-400 border-t border-[#16233b] pt-4 flex flex-wrap items-center justify-between gap-2">
          <span>Disciplinary Record Cleared</span>
          <span class="font-mono text-slate-500">Ref: CdM-CLR-RES-${Date.now().toString().slice(-6)} • ${timestamp}</span>
        </div>

        <div class="mt-4 pt-3 border-t border-[#16233b] flex justify-end">
          <button onclick="openGoodMoralCertificate('${escapeHtml(studentId)}', '${escapeHtml(matches[0]?.actualStudentName || matches[0]?.studentName || 'Student Montalbano')}', '${escapeHtml(matches[0]?.institute || 'ICS')}')" class="px-5 py-2.5 rounded-xl bg-[#2563eb] hover:bg-blue-600 text-white text-xs font-bold transition cursor-pointer flex items-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.35)]">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span>Print Certificate of Good Moral</span>
          </button>
        </div>
      </div>
    `;
  }
}

// ========================================================
// ========================================================
// ========================================================
// TWO-WAY FORMAL INSTITUTIONAL MESSAGING HUB (MODULE 6)
// OFFICE OF STUDENT AFFAIRS SERVICES (OSAS) CHAT SYSTEM
// ========================================================
let activeThreadId = null;
let osasSearchQuery = '';
let osasActiveFilter = 'all'; // 'all' | 'active' | 'followup' | 'resolved'
let osasInfoDrawerOpen = typeof window !== 'undefined' ? window.innerWidth >= 1280 : true;
let osasQuickTemplatesOpen = false;
let osasStagedAttachment = null;
let osasMobileView = 'list'; // 'list' | 'chat' (Mobile PWA single-pane state)

// Initialize theme: support migration from legacy daylight/softdark, default to dark
let savedTheme = localStorage.getItem('safetrack_chat_theme');
let osasChatTheme = (savedTheme === 'light' || savedTheme === 'daylight') ? 'light' : 'dark';

function toggleOSASChatTheme(containerId, currentRole) {
  osasChatTheme = osasChatTheme === 'dark' ? 'light' : 'dark';
  setAppTheme(osasChatTheme);
  renderOSASChatSystem(containerId, currentRole);
}
window.toggleOSASChatTheme = toggleOSASChatTheme;

function setOSASMobileView(view, containerId, currentRole) {
  osasMobileView = view;
  renderOSASChatSystem(containerId, currentRole);
}
window.setOSASMobileView = setOSASMobileView;

function renderInstagramDMHub(containerId, currentRole) {
  renderOSASChatSystem(containerId, currentRole);
}
window.renderInstagramDMHub = renderInstagramDMHub;

/**
 * Modern Messenger-style Avatar Generator
 * Renders compact circular profile avatars (36px list, 34px header, 26px received messages)
 * with online indicator dot positioned at bottom-right of avatar.
 */
function renderOSASAvatar(options) {
  const {
    name = 'Student',
    classification = '',
    isAnonymous = false,
    isOSA = false,
    avatarUrl = null,
    sizePx = 36,
    showOnline = true,
    status = 'active',
    extraClass = ''
  } = options;

  const dotSize = Math.max(7, Math.round(sizePx * 0.24));
  let dotColor = '#10b981'; // green
  if (status === 'followup' || status === 'Follow-Up Needed') dotColor = '#f59e0b';
  else if (status === 'resolved' || status === 'Resolved / Closed') dotColor = '#94a3b8';

  let bg = 'linear-gradient(135deg, #047857, #065f46)';
  let content = '🏛️';
  let fontSize = `${Math.round(sizePx * 0.44)}px`;

  if (isOSA) {
    // Differentiate student's case avatars by classification for visual recognition
    const classLower = (classification || '').toLowerCase();
    if (classLower.includes('bullying') || classLower.includes('harassment')) {
      bg = 'linear-gradient(135deg, #0d9488, #0f766e)';
      content = '🛡️';
    } else if (classLower.includes('academic') || classLower.includes('dishonesty')) {
      bg = 'linear-gradient(135deg, #6366f1, #4338ca)';
      content = '🎓';
    } else if (classLower.includes('workshop') || classLower.includes('property')) {
      bg = 'linear-gradient(135deg, #f59e0b, #d97706)';
      content = '🔨';
    } else if (classLower.includes('audio') || classLower.includes('disruption')) {
      bg = 'linear-gradient(135deg, #06b6d4, #0891b2)';
      content = '🎬';
    } else {
      bg = 'linear-gradient(135deg, #047857, #065f46)';
      content = '🏛️';
    }
    fontSize = `${Math.round(sizePx * 0.44)}px`;
  } else if (isAnonymous) {
    bg = 'linear-gradient(135deg, #1e293b, #0f172a)';
    content = '🕶️';
    fontSize = `${Math.round(sizePx * 0.42)}px`;
  } else {
    const parts = (name || 'Student').trim().split(/\s+/);
    const initials = (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
    content = initials || 'S';
    fontSize = `${Math.round(sizePx * 0.38)}px`;

    const gradients = [
      'linear-gradient(135deg, #6366f1, #4338ca)',
      'linear-gradient(135deg, #f59e0b, #d97706)',
      'linear-gradient(135deg, #06b6d4, #0891b2)',
      'linear-gradient(135deg, #ec4899, #be185d)',
      'linear-gradient(135deg, #10b981, #047857)',
      'linear-gradient(135deg, #8b5cf6, #6d28d9)'
    ];
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) hash += name.charCodeAt(i);
    bg = gradients[Math.abs(hash) % gradients.length];
  }

  const onlineDotHTML = showOnline
    ? `<span class="absolute bottom-0 right-0 rounded-full ring-2 ring-white dark:ring-[#1f2937] shrink-0 pointer-events-none" style="width: ${dotSize}px; height: ${dotSize}px; background-color: ${dotColor};"></span>`
    : '';

  if (avatarUrl) {
    return `
      <div class="relative shrink-0 select-none ${extraClass}" style="width: ${sizePx}px; height: ${sizePx}px; min-width: ${sizePx}px; min-height: ${sizePx}px;">
        <img src="${avatarUrl}" alt="${escapeHtml(name)}" class="w-full h-full rounded-full object-cover shrink-0" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="hidden w-full h-full rounded-full items-center justify-center font-bold text-white shadow-xs shrink-0" style="background: ${bg}; font-size: ${fontSize};">
          ${content}
        </div>
        ${onlineDotHTML}
      </div>
    `;
  }

  return `
    <div class="relative shrink-0 select-none ${extraClass}" style="width: ${sizePx}px; height: ${sizePx}px; min-width: ${sizePx}px; min-height: ${sizePx}px;">
      <div class="w-full h-full rounded-full flex items-center justify-center font-bold text-white shadow-xs shrink-0" style="background: ${bg}; font-size: ${fontSize};">
        ${content}
      </div>
      ${onlineDotHTML}
    </div>
  `;
}

function handleOSASTextareaInput(el) {
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = Math.min(Math.max(el.scrollHeight, 34), 100) + 'px';

  // Real-time update send button enabled/disabled state
  const sendBtn = el.form ? el.form.querySelector('.osas-send-circle-btn') : document.querySelector('.osas-send-circle-btn');
  if (sendBtn) {
    const hasContent = el.value.trim().length > 0 || !!osasStagedAttachment;
    sendBtn.disabled = !hasContent;
    sendBtn.style.opacity = hasContent ? '1' : '0.35';
    sendBtn.style.cursor = hasContent ? 'pointer' : 'not-allowed';
    sendBtn.style.pointerEvents = hasContent ? 'auto' : 'none';
  }
}
window.handleOSASTextareaInput = handleOSASTextareaInput;

function handleOSASTextareaKeydown(event, threadId, containerId, currentRole) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    handleOSASMessageSubmit(event, threadId, containerId, currentRole);
  }
}
window.handleOSASTextareaKeydown = handleOSASTextareaKeydown;

function handleOSASStreamScroll(e) {
  const el = e.target;
  if (!el) return;
  const isScrolledUp = el.scrollHeight - el.scrollTop - el.clientHeight > 140;
  const pill = document.getElementById('osas-scroll-bottom-btn');
  if (pill) {
    if (isScrolledUp) {
      pill.classList.remove('hidden');
    } else {
      pill.classList.add('hidden');
    }
  }
}
window.handleOSASStreamScroll = handleOSASStreamScroll;

function scrollOSASMessagesToBottom(smooth = false) {
  const el = document.getElementById('osas-messages-stream');
  if (el) {
    el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
  }
  const pill = document.getElementById('osas-scroll-bottom-btn');
  if (pill) pill.classList.add('hidden');
}
window.scrollOSASMessagesToBottom = scrollOSASMessagesToBottom;

function renderOSASChatSystem(containerId, currentRole) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const isDark = osasChatTheme === 'dark';
  let allThreads = store.getMessages();

  if (activeThreadId && !allThreads.some((t) => t.threadId === activeThreadId || t.docket === activeThreadId)) {
    const docketItem = store.getById(activeThreadId);
    if (docketItem) {
      const pName = docketItem.isAnonymousToPublic
        ? `${docketItem.maskedAlias || 'Anonymous'} (${docketItem.actualStudentName || docketItem.studentName})`
        : docketItem.studentName;
      const newThread = {
        threadId: activeThreadId,
        title: `${docketItem.classification} Consultation`,
        docket: activeThreadId,
        classification: docketItem.classification,
        institute: docketItem.institute,
        status: 'Open / Active',
        participant: pName,
        studentNumber: docketItem.studentNumber || 'Student',
        studentName: docketItem.studentName,
        actualStudentName: docketItem.actualStudentName || docketItem.studentName,
        isAnonymous: !!docketItem.isAnonymousToPublic,
        isAnonymousToPublic: !!docketItem.isAnonymousToPublic,
        maskedAlias: docketItem.maskedAlias,
        referral: docketItem.guidanceEndorsed ? 'CGCC Guidance Endorsed' : 'Direct OSAS Disciplinary Desk',
        sanctions: docketItem.sanctions || 'Under active administrative review.',
        unreadCount: 0,
        lastUpdate: 'Just now',
        messages: [
          {
            id: 'msg-' + Date.now(),
            sender: currentRole,
            senderName: currentRole === 'student' ? (docketItem.isAnonymousToPublic ? (docketItem.maskedAlias || 'Anonymous Student') : docketItem.studentName) : 'Office of Student Affairs (Prefect Desk)',
            role: currentRole === 'student' ? 'Student' : 'OSAS Officer',
            type: 'text',
            text: `Initiated direct consultation inquiry for Docket #${activeThreadId} (${docketItem.classification}).`,
            timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
            date: 'Today',
            status: 'delivered'
          }
        ]
      };
      store.createThread(newThread);
      allThreads = store.getMessages();
    }
  }

  // On desktop / wide screens, default to first thread (CDM-2024-002) if none active
  if (!activeThreadId && allThreads.length > 0) {
    const preferredThread = allThreads.find((t) => t.docket === 'CDM-2024-002' || t.threadId === 'CDM-2024-002');
    activeThreadId = preferredThread ? preferredThread.threadId : allThreads[0].threadId;
  }

  if (activeThreadId && !allThreads.some((t) => t.threadId === activeThreadId || t.docket === activeThreadId)) {
    if (allThreads.length > 0) {
      activeThreadId = allThreads[0].threadId;
    }
  }

  // Ensure current active thread unread count is cleared
  const currentActiveThread = allThreads.find((t) => t.threadId === activeThreadId);
  if (currentActiveThread && currentActiveThread.unreadCount) {
    currentActiveThread.unreadCount = 0;
    store.saveMessages(allThreads);
  }

  container.innerHTML = `
    <div id="osas-chat-frame" data-theme="${osasChatTheme}" class="osas-chat-wrapper ${osasMobileView === 'chat' ? 'osas-mobile-chat' : 'osas-mobile-list'}">
      
      <!-- ZONE 1: MESSENGER LEFT PANEL (310px Desktop) -->
      <aside class="osas-left-pane">
        
        <!-- Messenger "Chats" Header (Accessible WCAG AA Contrast) -->
        <header class="h-[62px] px-4 border-b flex items-center justify-between shrink-0" style="border-color: var(--osas-border); background-color: var(--osas-header-bg);">
          <div class="flex items-center gap-2 min-w-0">
            <h1 class="text-[21px] font-bold tracking-tight" style="color: var(--osas-text-primary);">Chats</h1>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <button 
              type="button" 
              onclick="toggleOSASChatTheme('${containerId}', '${currentRole}')" 
              aria-label="Toggle dark mode"
              title="Switch to ${isDark ? 'Light' : 'Dark'} theme"
              class="size-9 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/10"
              style="color: var(--osas-text-primary);">
              ${isDark ? '☀️' : '🌙'}
            </button>
            <button 
              type="button" 
              title="More Chat Options"
              aria-label="Chat options"
              class="size-9 rounded-full flex items-center justify-center text-base font-bold cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/10"
              style="color: var(--osas-text-primary);">
              •••
            </button>
          </div>
        </header>

        <!-- Messenger Search Field (Single centered pill container) -->
        <div class="shrink-0" style="background-color: var(--osas-sidebar-bg);">
          <div class="osas-search-pill-container mx-4 my-3 px-3.5 h-10 rounded-full flex items-center gap-2.5 ${isDark ? 'bg-slate-800/80 border border-slate-700/70 text-slate-100' : 'bg-slate-100 border border-slate-200/80 text-slate-800'} transition">
            <svg class="size-4 opacity-60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              id="osas-search-input"
              type="text" 
              value="${escapeHtml(osasSearchQuery)}"
              class="w-full bg-transparent border-0 outline-none p-0 text-sm"
              style="background: transparent !important; border: 0 !important; outline: none !important; padding: 0 !important; min-height: unset !important; height: auto !important; color: ${isDark ? '#F1F5F9' : '#0F172A'} !important;"
              placeholder="Search Messenger">
            ${osasSearchQuery ? `
              <button type="button" onclick="clearOSASSearch('${containerId}', '${currentRole}')" class="size-4 rounded-full hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center text-[10px] opacity-70 hover:opacity-100 cursor-pointer shrink-0">✕</button>
            ` : ''}
          </div>
        </div>

        <!-- 4 Status Filter Tabs: [ All ] [ Active ] [ Follow-Up ] [ Resolved ] (No visible scrollbar) -->
        <nav aria-label="Status Filters" class="px-4 pb-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0" style="background-color: var(--osas-sidebar-bg);">
          ${renderFilterPill('all', 'All', allThreads, isDark, containerId, currentRole)}
          ${renderFilterPill('active', 'Active', allThreads, isDark, containerId, currentRole)}
          ${renderFilterPill('followup', 'Follow-Up', allThreads, isDark, containerId, currentRole)}
          ${renderFilterPill('resolved', 'Resolved', allThreads, isDark, containerId, currentRole)}
        </nav>

        <!-- Scrollable Conversation Threads (Spacious 10-12px padding, 8px spacing between items) -->
        <div id="osas-threads-container" class="flex-1 overflow-y-auto osas-scrollbar">
          ${renderThreadsListHTML(allThreads, currentRole, isDark, containerId)}
        </div>

      </aside>

      <!-- ZONE 2: ACTIVE PRIVATE CHAT VIEWPORT -->
      <section class="osas-right-pane">
        ${renderChatViewportHTML(containerId, currentRole, isDark)}
      </section>

      <!-- ZONE 3: COLLAPSIBLE CASE INFO & STATUS DRAWER -->
      ${renderCaseInfoDrawerHTML(containerId, currentRole, isDark)}

    </div>
  `;

  // Attach search listener
  const searchEl = container.querySelector('#osas-search-input');
  searchEl?.addEventListener('input', (e) => {
    osasSearchQuery = e.target.value;
    const threadsCont = container.querySelector('#osas-threads-container');
    if (threadsCont) {
      threadsCont.innerHTML = renderThreadsListHTML(store.getMessages(), currentRole, isDark, containerId);
    }
  });

  // Attach messages stream scroll listener
  const msgsStream = container.querySelector('#osas-messages-stream');
  if (msgsStream) {
    msgsStream.addEventListener('scroll', handleOSASStreamScroll);
    msgsStream.scrollTop = msgsStream.scrollHeight;
    setTimeout(() => {
      if (msgsStream) msgsStream.scrollTop = msgsStream.scrollHeight;
    }, 60);
  }
}
window.renderOSASChatSystem = renderOSASChatSystem;

function clearOSASSearch(containerId, currentRole) {
  osasSearchQuery = '';
  renderOSASChatSystem(containerId, currentRole);
}
window.clearOSASSearch = clearOSASSearch;

function setOSASFilter(filterKey, containerId, currentRole) {
  osasActiveFilter = filterKey;
  renderOSASChatSystem(containerId, currentRole);
}
window.setOSASFilter = setOSASFilter;

function renderFilterPill(key, label, threads, isDark, containerId, currentRole) {
  const isSelected = osasActiveFilter === key;
  let count = 0;

  if (key === 'all') {
    count = threads.length;
  } else if (key === 'active') {
    count = threads.filter((t) => t.status === 'Open / Active' || t.status === 'Awaiting Student Reply').length;
  } else if (key === 'followup') {
    count = threads.filter((t) => t.status === 'Follow-Up Needed').length;
  } else if (key === 'resolved') {
    count = threads.filter((t) => t.status === 'Resolved / Closed').length;
  }

  return `
    <button 
      type="button" 
      role="tab"
      aria-selected="${isSelected ? 'true' : 'false'}"
      aria-pressed="${isSelected ? 'true' : 'false'}"
      onclick="setOSASFilter('${key}', '${containerId}', '${currentRole}')"
      class="osas-filter-pill px-2.5 py-1 text-[11px] font-medium shrink-0 whitespace-nowrap ${isSelected ? 'active' : ''}">
      <span>${escapeHtml(label)}</span>
      <span class="count">${count}</span>
    </button>
  `;
}

function getFilteredThreads(threads) {
  return threads.filter((thread) => {
    if (osasActiveFilter === 'active') {
      if (thread.status !== 'Open / Active' && thread.status !== 'Awaiting Student Reply') return false;
    } else if (osasActiveFilter === 'followup') {
      if (thread.status !== 'Follow-Up Needed') return false;
    } else if (osasActiveFilter === 'resolved') {
      if (thread.status !== 'Resolved / Closed') return false;
    }

    if (osasSearchQuery.trim()) {
      const q = osasSearchQuery.toLowerCase();
      const inDocket = (thread.docket || '').toLowerCase().includes(q);
      const inStudent = (thread.studentName || '').toLowerCase().includes(q);
      const inAlias = (thread.maskedAlias || '').toLowerCase().includes(q);
      const inActual = (thread.actualStudentName || '').toLowerCase().includes(q);
      const inClassification = (thread.classification || '').toLowerCase().includes(q);
      const inMsgs = (thread.messages || []).some((m) => (m.text || '').toLowerCase().includes(q));
      return inDocket || inStudent || inAlias || inActual || inClassification || inMsgs;
    }

    return true;
  });
}

function renderThreadsListHTML(allThreads, currentRole, isDark, containerId) {
  const filtered = getFilteredThreads(allThreads);

  if (filtered.length === 0) {
    return `
      <div class="p-6 text-center text-xs opacity-60" style="font-family: Arial, sans-serif;">
        No conversations found.
      </div>
    `;
  }

  return filtered.map((thread) => {
    const isSelected = activeThreadId === thread.threadId;
    const lastMsg = thread.messages && thread.messages.length > 0
      ? thread.messages[thread.messages.length - 1]
      : null;

    let snippet = 'No messages yet';
    if (lastMsg) {
      if (lastMsg.isFollowUpNotice) {
        snippet = '🔔 Notice: Action required';
      } else if (lastMsg.attachment) {
        snippet = `📎 ${lastMsg.attachment.name || 'Attachment'}`;
      } else {
        const prefix = lastMsg.sender === currentRole ? 'You: ' : (lastMsg.senderName ? `${lastMsg.senderName.split(' ')[0]}: ` : '');
        snippet = `${prefix}${lastMsg.text}`;
      }
    }

    const displayName = currentRole === 'student'
      ? (thread.title ? thread.title : 'Office of Student Affairs')
      : (thread.isAnonymous ? (thread.maskedAlias || 'Anonymous Montalbano #4812') : (thread.studentName || 'Student Montalbano'));

    const statusMeta = getStatusBadgeInfo(thread.status, isDark);
    const isUnread = !!(thread.unreadCount && thread.unreadCount > 0);

    return `
      <div 
        tabindex="0"
        role="button"
        aria-selected="${isSelected ? 'true' : 'false'}"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); selectOSASThread('${thread.threadId}', '${containerId}', '${currentRole}');}"
        onclick="selectOSASThread('${thread.threadId}', '${containerId}', '${currentRole}')"
        class="osas-convo-row px-4 py-3.5 ${isSelected ? 'active' : ''}">
        
        <!-- Row 1: Title on the Left, Timestamp on the Right -->
        <div class="flex items-center justify-between gap-2 w-full">
          <span class="convo-title text-[13.5px] font-semibold tracking-tight truncate leading-tight flex-1 min-w-0" style="color: var(--osas-text-primary);">
            ${escapeHtml(displayName)}
          </span>
          <span class="text-[11px] font-medium whitespace-nowrap shrink-0" style="color: var(--osas-text-secondary);">
            ${escapeHtml(thread.lastUpdate || '')}
          </span>
        </div>

        <!-- Row 2: Message Preview Snippet -->
        <div class="w-full">
          <p class="text-xs leading-relaxed truncate mt-0.5 font-normal" style="color: var(--osas-text-secondary);">
            ${escapeHtml(snippet)}
          </p>
        </div>

        <!-- Row 3: Meta: Docket ID on Left, Status Chip Aligned Right -->
        <div class="flex items-center justify-between gap-2 w-full mt-2">
          <span class="font-mono text-[11px] tabular-nums truncate" style="color: var(--osas-text-muted);">
            #${escapeHtml(thread.docket || '')}
          </span>

          <div class="flex items-center gap-1.5 shrink-0">
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusMeta.badgeClass}">
              ${statusMeta.shortLabel}
            </span>
            ${isUnread ? `
              <span class="size-2 rounded-full bg-emerald-500 shrink-0" title="Unread Message"></span>
            ` : ''}
          </div>
        </div>

      </div>
    `;
  }).join('');
}

function selectOSASThread(threadId, containerId, currentRole) {
  activeThreadId = threadId;
  osasMobileView = 'chat';
  const threads = store.getMessages();
  const thread = threads.find((t) => t.threadId === threadId);
  if (thread && thread.unreadCount) {
    thread.unreadCount = 0;
    store.saveMessages(threads);
  }
  renderOSASChatSystem(containerId, currentRole);
}
window.selectOSASThread = selectOSASThread;

function getStatusBadgeInfo(status, isDark) {
  switch (status) {
    case 'Awaiting Student Reply':
      return {
        shortLabel: 'Awaiting',
        badgeClass: 'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]',
        dotColor: 'bg-[#92400E]',
        classes: 'bg-[#FFFBEB] text-[#92400E] border-[#FDE68A]'
      };
    case 'Follow-Up Needed':
      return {
        shortLabel: 'Follow-Up',
        badgeClass: 'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]',
        dotColor: 'bg-[#92400E]',
        classes: 'bg-[#FFFBEB] text-[#92400E] border-[#FDE68A]'
      };
    case 'Resolved / Closed':
      return {
        shortLabel: 'Resolved',
        badgeClass: 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
        dotColor: 'bg-[#065F46]',
        classes: 'bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]'
      };
    case 'Open / Active':
    default:
      return {
        shortLabel: 'Active',
        badgeClass: 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]',
        dotColor: 'bg-[#3730A3]',
        classes: 'bg-[#EEF2FF] text-[#3730A3] border-[#C7D2FE]'
      };
  }
}

function renderChatViewportHTML(containerId, currentRole, isDark) {
  const allThreads = store.getMessages();
  const thread = allThreads.find((t) => t.threadId === activeThreadId);

  // Polished Messenger Empty State
  if (!thread) {
    return `
      <div class="flex-1 flex flex-col items-center justify-center p-6 text-center my-auto" style="font-family: Arial, sans-serif;">
        <div class="size-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mb-3 shadow-xs">
          💬
        </div>
        <h3 class="text-sm font-bold mb-1.5" style="color: var(--osas-text-primary);">Select a Conversation</h3>
        <p class="text-xs opacity-70 max-w-sm mb-4 leading-relaxed">
          Choose a conversation from the left sidebar to read official messages or review case documentation.
        </p>
        <button 
          type="button" 
          onclick="selectOSASThread('CDM-2024-002', '${containerId}', '${currentRole}')"
          class="px-3.5 py-2 rounded-xl bg-[#047857] hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer">
          <span>📂 Open Latest Docket (CDM-2024-002)</span>
        </button>
      </div>
    `;
  }

  const contactName = currentRole === 'student'
    ? 'Office of Student Affairs & Services (Prefect Desk)'
    : (thread.isAnonymous ? `${thread.maskedAlias || 'Anonymous Montalbano #4812'}` : thread.studentName);

  const statusMeta = getStatusBadgeInfo(thread.status, isDark);
  const isResolved = thread.status === 'Resolved / Closed';

  const contactAvatarHTML = renderOSASAvatar({
    name: thread.actualStudentName || thread.studentName,
    classification: thread.classification,
    isAnonymous: !!thread.isAnonymous,
    isOSA: currentRole === 'student',
    sizePx: 40,
    showOnline: true,
    status: thread.status
  });

  return `
    <!-- Top Active Contact Header -->
    <header class="osas-chat-header h-[68px] px-4 sm:px-5 border-b flex items-center justify-between shrink-0" style="border-color: var(--osas-border); background-color: var(--osas-header-bg);">
      
      <!-- Contact Avatar & Details Card -->
      <div class="osas-chat-header-left flex items-center gap-3 min-w-0 flex-1 mr-2">
        <!-- Mobile Back to Chats button -->
        <button 
          type="button" 
          onclick="setOSASMobileView('list', '${containerId}', '${currentRole}')"
          class="osas-chat-back-btn md:hidden w-9 h-9 rounded-full flex items-center justify-center text-lg cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/10 shrink-0 mr-1"
          style="color: var(--osas-text-primary);"
          aria-label="Back to chats list">
          <span>←</span>
        </button>

        ${contactAvatarHTML}

        <div class="osas-chat-header-info min-w-0 flex-1">
          <!-- Line 1: Office/Contact Name + Protected Badge -->
          <div class="osas-chat-title-row flex items-center gap-2 min-w-0">
            <h2 class="text-sm font-semibold tracking-tight leading-snug truncate" style="color: var(--osas-text-primary);">
              ${escapeHtml(contactName)}
            </h2>
            ${thread.isAnonymous ? `
              <span class="osas-chat-protected-badge text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-teal-500/15 text-teal-400 border-teal-500/30 shrink-0">Protected</span>
            ` : ''}
          </div>

          <!-- Line 2: Docket Number + Category + Status Chip -->
          <div class="osas-chat-subtitle-row flex items-center gap-2 text-xs font-mono tabular-nums mt-0.5 min-w-0 flex-wrap" style="color: var(--osas-text-secondary);">
            <span class="font-mono font-medium shrink-0">#${escapeHtml(thread.docket)}</span>
            <span class="opacity-40 shrink-0">•</span>
            <span class="font-sans font-normal truncate max-w-[140px] sm:max-w-[220px]">${escapeHtml(thread.classification)}</span>
            <span class="opacity-40 shrink-0">•</span>
            <span class="osas-status-pill font-sans inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10.5px] font-semibold ${statusMeta.badgeClass} shrink-0">
              <span class="osas-status-dot size-1.5 rounded-full ${statusMeta.dotColor}"></span>
              <span class="osas-status-text" style="background: transparent !important; background-color: transparent !important; padding: 0 !important; box-shadow: none !important; border: none !important;">${statusMeta.shortLabel}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Header Actions: Messenger Action Buttons (Call, Video, Auto-width Case Dossier Pill) -->
      <div class="osas-chat-header-right flex items-center gap-2.5 shrink-0">
        <button 
          type="button" 
          title="Start Audio Consultation (Live Office Hours)"
          aria-label="Voice Consultation"
          class="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/10 text-emerald-600 dark:text-emerald-400 text-base shrink-0">
          📞
        </button>
        <button 
          type="button" 
          title="Start Virtual Hearing / Conciliation"
          aria-label="Virtual Hearing"
          class="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/10 text-emerald-600 dark:text-emerald-400 text-base shrink-0">
          🎥
        </button>
        <button 
          type="button" 
          onclick="toggleOSASCaseDrawer('${containerId}', '${currentRole}')"
          title="Case Dossier Details & Evidentiary Archive"
          aria-label="Toggle Case Dossier Info"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer transition border"
          style="background-color: ${osasInfoDrawerOpen ? 'var(--osas-row-active)' : 'var(--osas-pill-bg)'}; border-color: var(--osas-border); color: var(--osas-text-primary);">
          <span>ℹ️</span>
          <span>${osasInfoDrawerOpen ? 'Hide Dossier' : 'Case Dossier'}</span>
        </button>
      </div>

    </header>

    <!-- Pinned Confidentiality Banner (Balanced px-5 py-2 text-xs) -->
    <div class="px-5 py-2 text-xs border-b flex items-center justify-between shrink-0" style="border-color: var(--osas-border); background-color: var(--osas-chat-bg); color: var(--osas-text-secondary);">
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">🔒</span>
        <span class="font-normal opacity-90">Confidential Disciplinary Channel — Official Record</span>
      </div>
      <span class="text-[10px] font-mono opacity-65 hidden md:inline">256-Bit Encrypted</span>
    </div>

    <!-- Scrollable Messages Stream -->
    <div id="osas-messages-stream" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4 space-y-2 osas-scrollbar relative" style="font-family: Arial, sans-serif;">
      ${renderOSASMessagesStream(thread.messages, currentRole, isDark)}
      
      <!-- Floating "New message ↓" Scroll Pill -->
      <button 
        id="osas-scroll-bottom-btn" 
        type="button" 
        onclick="scrollOSASMessagesToBottom(true)"
        class="osas-scroll-bottom-btn hidden"
        aria-label="Scroll to newest message">
        <span>New message ↓</span>
      </button>
    </div>

    <!-- Quick Follow-Up Templates Bar (Collapsible, OSAS Prefect) -->
    ${currentRole === 'osa' && !isResolved && osasQuickTemplatesOpen ? `
      <div class="px-3 py-1.5 border-t text-xs shrink-0" style="border-color: var(--osas-border); background-color: var(--osas-sidebar-bg); font-family: Arial, sans-serif;">
        <div class="flex items-center justify-between mb-1">
          <span class="text-[10px] font-bold opacity-70 uppercase tracking-wider">⚡ Quick Follow-Up Directives</span>
          <button 
            type="button" 
            onclick="toggleOSASQuickTemplates('${containerId}', '${currentRole}')"
            class="text-[10px] text-emerald-600 font-semibold hover:underline cursor-pointer">
            Close ▲
          </button>
        </div>

        <div class="flex items-center gap-1.5 overflow-x-auto pb-0.5 osas-scrollbar">
          <button 
            type="button" 
            onclick="insertOSASTemplate('conference', '${escapeHtml(thread.docket)}')"
            class="px-2 py-0.5 rounded-lg border text-[11px] font-medium transition cursor-pointer whitespace-nowrap"
            style="background-color: var(--osas-card-bg); border-color: var(--osas-border); color: var(--osas-text-primary);">
            📅 Conference
          </button>

          <button 
            type="button" 
            onclick="insertOSASTemplate('evidence', '${escapeHtml(thread.docket)}')"
            class="px-2 py-0.5 rounded-lg border text-[11px] font-medium transition cursor-pointer whitespace-nowrap"
            style="background-color: var(--osas-card-bg); border-color: var(--osas-border); color: var(--osas-text-primary);">
            📁 Evidence
          </button>

          <button 
            type="button" 
            onclick="insertOSASTemplate('followup', '${escapeHtml(thread.docket)}')"
            class="px-2 py-0.5 rounded-lg border text-[11px] font-medium transition cursor-pointer whitespace-nowrap"
            style="background-color: var(--osas-card-bg); border-color: var(--osas-border); color: var(--osas-text-primary);">
            ⏱️ 48hr Check
          </button>

          <button 
            type="button" 
            onclick="insertOSASTemplate('clearance', '${escapeHtml(thread.docket)}')"
            class="px-2 py-0.5 rounded-lg border text-[11px] font-medium transition cursor-pointer whitespace-nowrap"
            style="background-color: var(--osas-card-bg); border-color: var(--osas-border); color: var(--osas-text-primary);">
            📜 Clearance
          </button>
        </div>
      </div>
    ` : ''}

    <!-- Bottom Composer or Closed Banner -->
    ${isResolved ? `
      <!-- Resolved / Closed State Banner -->
      <div class="p-3 border-t shrink-0" style="border-color: var(--osas-border); background-color: var(--osas-sidebar-bg); font-family: Arial, sans-serif;">
        <div class="rounded-xl p-3 border flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs" style="border-color: var(--osas-border); background-color: var(--osas-card-bg); color: var(--osas-text-primary);">
          <div class="flex items-center gap-2">
            <span class="text-base">🔒</span>
            <div>
              <p class="font-bold text-xs">Consultation Docket #${escapeHtml(thread.docket)} Marked Resolved</p>
              <p class="text-[11px] opacity-70">Messaging is archived. Reopen if further review is needed.</p>
            </div>
          </div>
          ${currentRole === 'osa' ? `
            <button 
              type="button" 
              onclick="reopenOSASThread('${thread.threadId}', '${containerId}', '${currentRole}')"
              class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition cursor-pointer shrink-0">
              Reopen Docket
            </button>
          ` : `
            <span class="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Archived Record</span>
          `}
        </div>
      </div>
    ` : `
      <!-- Active Message Input Composer (Seamless Floating Island Pill) -->
      <div id="osas-chat-composer" class="mx-4 mb-3 px-2.5 py-2 rounded-full flex items-center gap-2 border shrink-0 sticky bottom-0 z-20" style="border-color: var(--osas-border); background-color: var(--osas-composer-bg);">
        
        <!-- Staged Attachment Preview Pill (Before Sending) -->
        ${osasStagedAttachment ? `
          <div class="mb-1.5 p-1.5 rounded-lg border flex items-center justify-between gap-2 max-w-xs shadow-xs" style="background-color: var(--osas-pill-bg); border-color: var(--osas-border); color: var(--osas-text-primary);">
            <div class="flex items-center gap-1.5 min-w-0">
              ${osasStagedAttachment.type === 'image' ? `
                <img src="${osasStagedAttachment.dataUrl}" alt="Attachment preview" class="size-6 rounded object-cover border border-slate-300 dark:border-slate-700">
              ` : `
                <div class="size-6 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] uppercase">
                  ${osasStagedAttachment.ext || 'DOC'}
                </div>
              `}
              <div class="min-w-0">
                <p class="text-[11px] font-semibold truncate leading-tight">${escapeHtml(osasStagedAttachment.name)}</p>
                <p class="text-[9.5px] opacity-60 font-mono">${escapeHtml(osasStagedAttachment.size)} • Ready to send</p>
              </div>
            </div>
            <button 
              type="button" 
              onclick="clearOSASStagedAttachment('${containerId}', '${currentRole}')" 
              class="size-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 opacity-70 hover:opacity-100 flex items-center justify-center transition cursor-pointer text-[10px]">
              ✕
            </button>
          </div>
        ` : ''}

        <form onsubmit="handleOSASMessageSubmit(event, '${thread.threadId}', '${containerId}', '${currentRole}')" class="flex items-center gap-2 w-full">
          
          <!-- Attachment Triggers: (+) and Camera (📷) (w-9 h-9 circular buttons) -->
          <div class="flex items-center gap-1.5 shrink-0">
            <input 
              type="file" 
              id="osas-file-doc-input" 
              accept=".pdf,.docx,.doc,.txt,image/*" 
              class="hidden" 
              onchange="handleOSASFileChange(event, 'file', '${containerId}', '${currentRole}')">

            <button 
              type="button" 
              onclick="document.getElementById('osas-file-doc-input').click()" 
              title="Attach File or Evidentiary Document"
              aria-label="Attach File"
              class="osas-composer-action-btn w-9 h-9 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition">
              <span class="text-xl font-bold leading-none">+</span>
            </button>

            <button 
              type="button" 
              onclick="document.getElementById('osas-file-doc-input').click()" 
              title="Upload Screenshot / Photo Evidence"
              aria-label="Upload Photo"
              class="osas-composer-action-btn w-9 h-9 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition">
              <span class="text-base">📷</span>
            </button>

            ${currentRole === 'osa' ? `
              <!-- Quick-Template Trigger (📋) -->
              <button 
                type="button" 
                onclick="toggleOSASQuickTemplates('${containerId}', '${currentRole}')" 
                title="Quick Directive Templates"
                aria-label="Quick Templates"
                class="osas-composer-action-btn w-9 h-9 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition">
                <span class="text-base">📋</span>
              </button>
            ` : ''}
          </div>

          <!-- Seamless Input Wrapper (no inner border) -->
          <div class="osas-composer-pill flex-1 flex items-center min-w-0 bg-transparent border-0">
            <textarea 
              id="osas-input-text"
              rows="1"
              placeholder="Type a message..."
              class="w-full bg-transparent border-0 outline-none text-sm resize-none"
              style="background: transparent; border: 0; outline: none;"
              oninput="handleOSASTextareaInput(this)"
              onkeydown="handleOSASTextareaKeydown(event, '${thread.threadId}', '${containerId}', '${currentRole}')"></textarea>
            
            <button 
              type="button" 
              onclick="insertOSASTemplate('emoji', '')" 
              title="Insert Emoji" 
              aria-label="Emoji"
              class="osas-composer-emoji-btn w-9 h-9 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition">
              😊
            </button>
          </div>

          <!-- Right Send Button (w-9 h-9 Circular Royal Blue Button) -->
          <button 
            type="submit" 
            disabled
            id="osas-btn-send"
            class="osas-send-circle-btn w-9 h-9 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition"
            title="Send Message"
            aria-label="Send Message">
            <svg class="size-4 rotate-45 -mr-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>

        </form>
      </div>
    `}
  `;
}

function renderOSASMessagesStream(messages, currentRole, isDark) {
  if (!messages || messages.length === 0) {
    return `
      <div class="p-6 text-center text-xs opacity-60" style="font-family: Arial, sans-serif;">
        No messages in this conversation yet. Send a message to begin.
      </div>
    `;
  }

  // Group messages consecutively by date and sender
  const groups = [];
  let currentGroup = null;

  messages.forEach((msg) => {
    const msgDate = msg.date || 'Today';
    const isSpecialNotice = !!msg.isFollowUpNotice;

    if (
      !currentGroup ||
      currentGroup.date !== msgDate ||
      currentGroup.sender !== msg.sender ||
      isSpecialNotice ||
      currentGroup.isSpecialNotice
    ) {
      currentGroup = {
        date: msgDate,
        sender: msg.sender,
        senderName: msg.senderName,
        role: msg.role,
        isSpecialNotice,
        messages: [msg]
      };
      groups.push(currentGroup);
    } else {
      currentGroup.messages.push(msg);
    }
  });

  let lastDateRendered = '';

  return groups.map((group) => {
    let dateDividerHTML = '';
    if (group.date !== lastDateRendered) {
      lastDateRendered = group.date;
      dateDividerHTML = `
        <div class="flex items-center justify-center my-2">
          <span class="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border shadow-2xs" style="background-color: var(--osas-pill-bg); border-color: var(--osas-border); color: var(--osas-text-secondary); font-family: Arial, sans-serif;">
            ${escapeHtml(group.date)}
          </span>
        </div>
      `;
    }

    // Special Official Follow-Up Notice Banner
    if (group.isSpecialNotice) {
      const msg = group.messages[0];
      return `
        ${dateDividerHTML}
        <div class="my-2 p-3 rounded-xl border shadow-xs max-w-md mx-auto bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200" style="font-family: Arial, sans-serif;">
          <div class="flex items-center gap-1.5 font-bold text-xs mb-1 text-sky-700 dark:text-sky-300">
            <span class="size-1.5 rounded-full bg-sky-500 animate-ping"></span>
            <span>🔔 OFFICIAL OSAS DIRECTIVE</span>
          </div>
          <p class="text-[12px] leading-relaxed font-normal">${escapeHtml(msg.text)}</p>
          <div class="mt-2 pt-1.5 border-t flex items-center justify-between text-[10px] opacity-75 border-sky-200 dark:border-sky-800/60 font-mono">
            <span>Prefect Desk</span>
            <span>${escapeHtml(msg.timestamp || 'Now')}</span>
          </div>
        </div>
      `;
    }

    const isOutgoing = group.sender === currentRole;
    const msgCount = group.messages.length;
    const lastMsg = group.messages[msgCount - 1];

    if (isOutgoing) {
      // Outgoing Group (Right-aligned, w-fit max-w-[75%], hugging right edge directly above timestamp)
      const bubblesHTML = group.messages.map((m, idx) => {
        let shapeClass = 'single-bubble';
        if (msgCount > 1) {
          if (idx === 0) shapeClass = 'first-of-group';
          else if (idx === msgCount - 1) shapeClass = 'last-of-group';
          else shapeClass = 'middle-of-group';
        }

        return `
          <div class="osas-bubble-outgoing ${shapeClass} px-4 py-2.5 text-[14px] leading-[1.55] tracking-normal rounded-2xl w-fit max-w-full">
            ${m.text ? `<p class="whitespace-pre-wrap">${escapeHtml(m.text)}</p>` : ''}
            ${renderMessageAttachment(m.attachment, true, isDark)}
          </div>
        `;
      }).join('');

      return `
        ${dateDividerHTML}
        <div class="osas-msg-group flex flex-col items-end w-full">
          <div class="flex flex-col items-end w-fit max-w-[75%]">
            <div class="osas-msg-group-outgoing flex flex-col items-end gap-1 w-fit">
              ${bubblesHTML}
            </div>
            <div class="text-[11px] font-mono tabular-nums mt-1 mr-0.5 text-right flex items-center justify-end gap-1 opacity-65" style="color: var(--osas-text-secondary);">
              <span>${escapeHtml(lastMsg.timestamp || 'Now')}</span>
              <span>•</span>
              <span class="text-blue-600 dark:text-blue-400 font-semibold">${lastMsg.status === 'seen' ? 'Seen' : 'Delivered'}</span>
            </div>
          </div>
        </div>
      `;
    } else {
      // Incoming Group (Left-aligned, max-w-[75%], sender name above bubble, timestamp underneath)
      const senderDisplayName = group.senderName || (group.sender === 'osa' ? 'Office of Student Affairs' : 'Student');

      const avatarHTML = renderOSASAvatar({
        name: group.senderName || (group.sender === 'osa' ? 'Office of Student Affairs' : 'Student'),
        isAnonymous: group.role && group.role.includes('Protected'),
        isOSA: group.sender === 'osa',
        sizePx: 26,
        showOnline: false,
        extraClass: 'self-end mb-0.5 shrink-0'
      });

      const bubblesHTML = group.messages.map((m, idx) => {
        let shapeClass = 'single-bubble';
        if (msgCount > 1) {
          if (idx === 0) shapeClass = 'first-of-group';
          else if (idx === msgCount - 1) shapeClass = 'last-of-group';
          else shapeClass = 'middle-of-group';
        }

        return `
          <div class="osas-bubble-incoming ${shapeClass} px-4 py-2.5 text-[14px] leading-[1.55] tracking-normal rounded-2xl w-fit max-w-full">
            ${m.text ? `<p class="whitespace-pre-wrap">${escapeHtml(m.text)}</p>` : ''}
            ${renderMessageAttachment(m.attachment, false, isDark)}
          </div>
        `;
      }).join('');

      return `
        ${dateDividerHTML}
        <div class="osas-msg-group flex flex-col items-start w-full">
          <!-- Sender Name above the bubble -->
          <div class="text-xs font-medium mb-1 ml-10" style="color: var(--osas-text-secondary);">
            ${escapeHtml(senderDisplayName)}
          </div>
          <!-- Avatar beside bubble -->
          <div class="flex items-end gap-2.5 max-w-[75%]">
            ${avatarHTML}
            <div class="flex flex-col gap-1 w-fit">
              ${bubblesHTML}
            </div>
          </div>
          <!-- Timestamp neatly aligned underneath -->
          <div class="text-[11px] font-mono tabular-nums mt-1.5 ml-10 opacity-65" style="color: var(--osas-text-secondary);">
            <span>${escapeHtml(lastMsg.timestamp || 'Now')}</span>
          </div>
        </div>
      `;
    }
  }).join('');
}

/**
 * Compact Evidence & Attachment Card
 * Replaces oversized terminal blocks with a compact, clean media card (~250px)
 * that fits neatly inside bubbles without breaking layout.
 */
function renderMessageAttachment(att, isOutgoing, isDark) {
  if (!att) return '';

  if (att.type === 'image') {
    return `
      <!-- Messenger Discord-Style Server / Media Embed Card -->
      <div class="osas-attachment-media-card text-left" onclick="openOSASLightbox('${encodeURI(att.url)}', '${escapeHtml(att.name)}')">
        <div class="relative w-full overflow-hidden bg-slate-900" style="height: 150px; max-height: 150px;">
          <img src="${att.url}" alt="${escapeHtml(att.name)}" class="w-full h-full object-cover object-top hover:scale-[1.02] transition duration-200 cursor-pointer">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          <span class="absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/70 text-white backdrop-blur-xs flex items-center gap-1 shadow-xs">
            <span>🔍</span>
            <span>View</span>
          </span>
        </div>
        <div class="p-3.5 sm:p-4" style="background-color: var(--osas-card-bg); color: var(--osas-text-primary);">
          <div class="flex items-center justify-between gap-2.5 mb-1.5">
            <h4 class="text-xs sm:text-[13px] font-bold truncate leading-tight flex-1 min-w-0" style="color: var(--osas-text-primary);">
              ${escapeHtml(att.name)}
            </h4>
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
              Verified
            </span>
          </div>
          <p class="text-[11px] leading-relaxed mb-3" style="color: var(--osas-text-secondary);">
            Evidentiary screen capture logged into Docket #CDM-2024-002 • <span class="font-mono">${escapeHtml(att.size || '1.2 MB')} PNG</span>
          </p>
          <div class="flex items-center justify-between gap-2 pt-2.5 border-t border-slate-700/40 text-[11px]">
            <span class="text-[10px] font-mono opacity-70 truncate" style="color: var(--osas-text-muted);">Confidential Case File</span>
            <button type="button" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition shadow-xs text-xs cursor-pointer shrink-0">
              Inspect Evidence
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Document / PDF compact card
  const ext = (att.ext || 'doc').toUpperCase();
  return `
    <div class="osas-attachment-doc-card text-left" onclick="downloadOSASFile('${escapeHtml(att.name)}', '${att.ext || 'doc'}')">
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="size-8 rounded-lg ${ext === 'PDF' ? 'bg-red-500/20 text-red-500' : 'bg-blue-500/20 text-blue-500'} flex items-center justify-center font-bold text-[11px] uppercase shrink-0">
          ${ext}
        </div>
        <div class="min-w-0">
          <p class="text-[11.5px] font-semibold truncate leading-tight" style="font-family: Arial, sans-serif;">${escapeHtml(att.name)}</p>
          <p class="text-[10px] opacity-65 font-mono">${escapeHtml(att.size || 'Document')} • Official Dossier Item</p>
        </div>
      </div>
      <button 
        type="button" 
        class="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition shrink-0 shadow-xs cursor-pointer">
        Download
      </button>
    </div>
  `;
}

function renderCaseInfoDrawerHTML(containerId, currentRole, isDark) {
  if (!osasInfoDrawerOpen) return '';

  const allThreads = store.getMessages();
  const thread = allThreads.find((t) => t.threadId === activeThreadId);
  if (!thread) return '';

  // Aggregate attachments across all messages in this thread
  const attachments = [];
  if (thread.messages) {
    thread.messages.forEach((m) => {
      if (m.attachment) attachments.push(m.attachment);
    });
  }

  return `
    <!-- Mobile/Tablet Backdrop Overlay (Closes drawer on tap) -->
    <div class="fixed inset-0 bg-black/40 z-40 xl:hidden" onclick="toggleOSASCaseDrawer('${containerId}', '${currentRole}')"></div>

    <!-- ZONE 3: CASE INFO & STATUS DRAWER (300px Desktop / Overlay on Tablet) -->
    <aside class="osas-drawer-pane">
      
      <!-- Drawer Header -->
      <div class="h-[50px] px-3.5 border-b flex items-center justify-between shrink-0" style="border-color: var(--osas-border); background-color: var(--osas-header-bg);">
        <div class="flex items-center gap-1.5">
          <span class="text-sm">📋</span>
          <h3 class="font-bold text-xs uppercase tracking-wider" style="color: var(--osas-text-primary); font-family: Arial, sans-serif;">Case Dossier</h3>
        </div>
        <button 
          type="button" 
          onclick="toggleOSASCaseDrawer('${containerId}', '${currentRole}')"
          class="size-7 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/10"
          title="Close Dossier"
          aria-label="Close Case Dossier">
          ✕
        </button>
      </div>

      <!-- Drawer Scrollable Content -->
      <div class="flex-1 overflow-y-auto p-3 space-y-3 osas-scrollbar text-xs" style="font-family: Arial, sans-serif;">
        
        <!-- Case Status Directive -->
        <div class="p-3 rounded-xl border" style="background-color: var(--osas-card-bg); border-color: var(--osas-border);">
          <span class="text-[10px] font-bold opacity-60 uppercase tracking-wider block mb-1.5">Docket Status</span>
          
          <div class="space-y-1.5">
            ${currentRole === 'osa' ? `
              <!-- Admin Can Update Docket Status -->
              <div>
                <label class="block text-[10.5px] opacity-75 mb-1 font-semibold">Prefect Status Override:</label>
                <select 
                  onchange="handleOSASStatusChange(event, '${thread.threadId}', '${containerId}', '${currentRole}')"
                  class="w-full text-xs p-1.5 rounded-lg border font-semibold cursor-pointer focus:outline-none"
                  style="background-color: var(--osas-pill-bg); border-color: var(--osas-border); color: var(--osas-text-primary);">
                  <option value="Open / Active" ${thread.status === 'Open / Active' ? 'selected' : ''}>🟢 Open / Active</option>
                  <option value="Awaiting Student Reply" ${thread.status === 'Awaiting Student Reply' ? 'selected' : ''}>🔵 Awaiting Student Reply</option>
                  <option value="Follow-Up Needed" ${thread.status === 'Follow-Up Needed' ? 'selected' : ''}>🟡 Follow-Up Needed</option>
                  <option value="Resolved / Closed" ${thread.status === 'Resolved / Closed' ? 'selected' : ''}>⚪ Resolved / Closed</option>
                </select>
              </div>

              <button 
                type="button" 
                onclick="sendOSASFollowUpReminder('${thread.threadId}', '${containerId}', '${currentRole}')"
                class="w-full py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1">
                <span>⏱️ Transmit 48hr Directive</span>
              </button>
            ` : `
              <div class="flex items-center justify-between">
                <span class="font-bold">${escapeHtml(thread.status)}</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold ${getStatusBadgeInfo(thread.status, isDark).badgeClass}">
                  ${getStatusBadgeInfo(thread.status, isDark).shortLabel}
                </span>
              </div>
            `}
          </div>
        </div>

        <!-- Student Profile Card -->
        <div class="p-3 rounded-xl border" style="background-color: var(--osas-card-bg); border-color: var(--osas-border);">
          <span class="text-[10px] font-bold opacity-60 uppercase tracking-wider block mb-1.5">Involved Student</span>
          
          ${thread.isAnonymous ? `
            <div class="space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="text-sm">🕶️</span>
                <div>
                  <p class="font-bold text-xs">${escapeHtml(thread.maskedAlias || 'Anonymous Montalbano #4812')}</p>
                  <p class="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">Protected Student Reporter</p>
                </div>
              </div>

              ${currentRole === 'osa' ? `
                <!-- Admin Revealed Identity Box -->
                <div class="mt-1.5 p-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10">
                  <div class="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">
                    <span>🔒</span>
                    <span>Prefect Verified Identity</span>
                  </div>
                  <p class="font-bold text-xs" style="color: var(--osas-text-primary);">${escapeHtml(thread.actualStudentName || 'Samantha Nicole Cruz')}</p>
                  <p class="text-[10.5px] opacity-70 font-mono">ID: ${escapeHtml(thread.studentNumber || '2023-08124-CM-0')}</p>
                </div>
              ` : `
                <div class="mt-1.5 p-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-[10.5px] text-teal-800 dark:text-teal-200">
                  Your identity is protected under OSAS confidential protocols.
                </div>
              `}
            </div>
          ` : `
            <div>
              <p class="font-bold text-xs" style="color: var(--osas-text-primary);">${escapeHtml(thread.studentName || 'Student Montalbano')}</p>
              <p class="text-[10.5px] opacity-70 font-mono">ID: ${escapeHtml(thread.studentNumber || 'N/A')}</p>
              <p class="text-[10.5px] opacity-70">Institute: ${escapeHtml(thread.institute || 'CdM')}</p>
            </div>
          `}
        </div>

        <!-- Evidentiary Attachments Archive -->
        <div class="p-3 rounded-xl border" style="background-color: var(--osas-card-bg); border-color: var(--osas-border);">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[10px] font-bold opacity-60 uppercase tracking-wider">Evidentiary Archive</span>
            <span class="font-mono text-[10px] opacity-60 font-semibold">${attachments.length} Item(s)</span>
          </div>
          
          ${attachments.length === 0 ? `
            <p class="text-[10.5px] opacity-60 italic">No files transmitted in this channel yet.</p>
          ` : `
            <div class="space-y-1.5">
              ${attachments.map((att) => `
                <div class="p-1.5 rounded-lg border flex items-center justify-between gap-1.5" style="background-color: var(--osas-pill-bg); border-color: var(--osas-border);">
                  <div class="flex items-center gap-1.5 min-w-0">
                    <span class="text-xs">${att.type === 'image' ? '🖼️' : '📄'}</span>
                    <div class="min-w-0">
                      <p class="text-[10.5px] font-semibold truncate leading-tight">${escapeHtml(att.name)}</p>
                      <p class="text-[9.5px] opacity-60 font-mono">${escapeHtml(att.size)}</p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onclick="${att.type === 'image' ? `openOSASLightbox('${att.url}', '${escapeHtml(att.name)}')` : `downloadOSASFile('${escapeHtml(att.name)}', '${att.ext || 'doc'}')`}"
                    class="text-[9.5px] font-semibold px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer shrink-0">
                    View
                  </button>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Sanctions & Administrative Disciplinary Directive -->
        <div class="p-3 rounded-xl border" style="background-color: var(--osas-card-bg); border-color: var(--osas-border);">
          <span class="text-[10px] font-bold opacity-60 uppercase tracking-wider block mb-1">Prefect Disciplinary Directive</span>
          <p class="text-[11px] leading-relaxed opacity-85 font-medium">
            ${escapeHtml(thread.sanctions || 'Under active administrative review by OSAS Board.')}
          </p>
        </div>

      </div>

    </aside>
  `;
}

function toggleOSASCaseDrawer(containerId, currentRole) {
  osasInfoDrawerOpen = !osasInfoDrawerOpen;
  renderOSASChatSystem(containerId, currentRole);
}
window.toggleOSASCaseDrawer = toggleOSASCaseDrawer;

function toggleOSASQuickTemplates(containerId, currentRole) {
  osasQuickTemplatesOpen = !osasQuickTemplatesOpen;
  renderOSASChatSystem(containerId, currentRole);
}
window.toggleOSASQuickTemplates = toggleOSASQuickTemplates;

function insertOSASTemplate(templateType, docket) {
  const input = document.getElementById('osas-input-text');
  if (!input) return;

  let text = '';
  switch (templateType) {
    case 'conference':
      text = `Good day. Please report to the Office of Student Affairs & Services (Room 204, Administration Bldg) for an official disciplinary conference regarding Docket #${docket}. Please bring your valid CdM student ID and any relevant documentation.`;
      break;
    case 'evidence':
      text = `Greetings. Kindly submit any supporting documents, incident photographs, or written statements related to Docket #${docket} to this channel within 48 hours for administrative evaluation.`;
      break;
    case 'followup':
      text = `This is an official 48-hour follow-up check regarding your pending case under Docket #${docket}. Please confirm if you have complied with the initial guidance directives issued by the Prefect Desk.`;
      break;
    case 'clearance':
      text = `Your case docket #${docket} has been reviewed. Disciplinary requirements are fully fulfilled and your student record has been updated for Good Moral / Clearance issuance.`;
      break;
  }

  input.value = text;
  handleOSASTextareaInput(input);
  input.focus();
}
window.insertOSASTemplate = insertOSASTemplate;

function handleOSASStatusChange(event, threadId, containerId, currentRole) {
  const newStatus = event.target.value;
  store.updateThreadStatus(threadId, newStatus);
  renderOSASChatSystem(containerId, currentRole);
}
window.handleOSASStatusChange = handleOSASStatusChange;

function reopenOSASThread(threadId, containerId, currentRole) {
  store.updateThreadStatus(threadId, 'Open / Active');
  renderOSASChatSystem(containerId, currentRole);
}
window.reopenOSASThread = reopenOSASThread;

function sendOSASFollowUpReminder(threadId, containerId, currentRole) {
  const threads = store.getMessages();
  const thread = threads.find((t) => t.threadId === threadId);
  if (!thread) return;

  const followUpMsg = {
    id: 'msg-' + Date.now(),
    sender: 'osa',
    senderName: 'Office of Student Affairs (Prefect Desk)',
    role: 'OSAS Officer',
    type: 'text',
    isFollowUpNotice: true,
    text: `OFFICIAL OSAS FOLLOW-UP NOTICE: You have an outstanding compliance requirement for Docket #${thread.docket}. Please respond to this official inquiry immediately to avoid administrative holds on your student account.`,
    timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
    date: 'Today',
    status: 'delivered'
  };

  thread.messages.push(followUpMsg);
  thread.status = 'Follow-Up Needed';
  thread.lastUpdate = 'Just now';
  store.saveMessages(threads);

  renderOSASChatSystem(containerId, currentRole);
}
window.sendOSASFollowUpReminder = sendOSASFollowUpReminder;

function handleOSASFileChange(event, type, containerId, currentRole) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const ext = file.name.split('.').pop().toLowerCase();
    osasStagedAttachment = {
      type: file.type.startsWith('image/') ? 'image' : 'file',
      name: file.name,
      size: formatBytes(file.size),
      dataUrl: e.target.result,
      ext
    };
    renderOSASChatSystem(containerId, currentRole);
  };
  reader.readAsDataURL(file);
}
window.handleOSASFileChange = handleOSASFileChange;

function clearOSASStagedAttachment(containerId, currentRole) {
  osasStagedAttachment = null;
  renderOSASChatSystem(containerId, currentRole);
}
window.clearOSASStagedAttachment = clearOSASStagedAttachment;

function handleOSASMessageSubmit(event, threadId, containerId, currentRole) {
  if (event && event.preventDefault) event.preventDefault();

  const input = document.getElementById('osas-input-text');
  const text = (input?.value || '').trim();

  if (!text && !osasStagedAttachment) return;

  const allThreads = store.getMessages();
  const thread = allThreads.find((t) => t.threadId === threadId);
  if (!thread) return;

  const session = getActiveSession();
  let senderName = 'Student Montalbano';
  let senderRole = 'Student';

  if (currentRole === 'osa') {
    senderName = 'Office of Student Affairs (Prefect Desk)';
    senderRole = 'OSAS Officer';
  } else {
    if (thread.isAnonymous) {
      senderName = thread.maskedAlias || 'Anonymous Montalbano #4812';
      senderRole = 'Student (Protected)';
    } else {
      senderName = session?.studentName || thread.studentName || 'Student Montalbano';
      senderRole = 'Student';
    }
  }

  const newMsg = {
    id: 'msg-' + Date.now(),
    sender: currentRole,
    senderName,
    role: senderRole,
    type: osasStagedAttachment ? (osasStagedAttachment.type === 'image' ? 'photo' : 'file') : 'text',
    text,
    attachment: osasStagedAttachment ? {
      type: osasStagedAttachment.type,
      name: osasStagedAttachment.name,
      size: osasStagedAttachment.size,
      url: osasStagedAttachment.dataUrl,
      ext: osasStagedAttachment.ext
    } : null,
    timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
    date: 'Today',
    status: 'delivered'
  };

  thread.messages.push(newMsg);
  thread.lastUpdate = 'Just now';

  // If student replied and status was awaiting student reply, advance it
  if (currentRole === 'student' && thread.status === 'Awaiting Student Reply') {
    thread.status = 'Open / Active';
  }

  store.saveMessages(allThreads);

  osasStagedAttachment = null;
  renderOSASChatSystem(containerId, currentRole);
}
window.handleOSASMessageSubmit = handleOSASMessageSubmit;

function openOSASLightbox(url, title) {
  const modal = document.getElementById('osas-lightbox-modal');
  const img = document.getElementById('osas-lightbox-img');
  const titleEl = document.getElementById('osas-lightbox-title');
  const downloadEl = document.getElementById('osas-lightbox-download');

  if (modal && img) {
    img.src = decodeURI(url);
    if (titleEl) titleEl.textContent = title ? `— ${title}` : '';
    if (downloadEl) {
      downloadEl.href = decodeURI(url);
      downloadEl.download = title || 'evidence.png';
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}
window.openOSASLightbox = openOSASLightbox;

function closeOSASLightbox() {
  const modal = document.getElementById('osas-lightbox-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
window.closeOSASLightbox = closeOSASLightbox;

function downloadOSASFile(fileName, ext) {
  const dummyContent = `Colegio de Montalban - Office of Student Affairs & Services (OSAS)\n\nOfficial Digital Document: ${fileName}\nFormat: ${ext}\nDate: ${new Date().toLocaleDateString()}\nStatus: Verified Institutional Record\nSecurity Hash: CDM-DOC-${Math.floor(Math.random() * 89999 + 10000)}\n\nThis record is protected under the Colegio de Montalban Student Discipline Policy.`;
  const blob = new Blob([dummyContent], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
window.downloadOSASFile = downloadOSASFile;

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}


// AUTHENTICATION CONTROLLER & DOM INITIALIZATION
// ========================================================
function fillAuthDemo() {
  const u = document.getElementById('auth-input-user') || document.getElementById('input-student-auth-id');
  const p = document.getElementById('auth-input-pass') || document.getElementById('input-student-auth-pin');
  if (u) u.value = '2023-01842-CM-0';
  if (p) p.value = '123456';
}
window.fillAuthDemo = fillAuthDemo;

function handleAuthSubmit(event) {
  if (event && event.preventDefault) event.preventDefault();
  const fStudent = document.getElementById('form-student-login');
  if (fStudent && !fStudent.classList.contains('hidden')) {
    const studentIdInput = document.getElementById('auth-input-user') || document.getElementById('input-student-auth-id');
    const studentId = (studentIdInput?.value || '').trim() || '2023-01842-CM-0';
    const session = {
      token: 'cdm_auth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10),
      role: 'Student Portal',
      roleType: 'student',
      user: studentId,
      studentNumber: studentId,
      studentName: 'Student User (' + studentId + ')',
      loginTimestamp: Date.now(),
      loginTime: new Date().toISOString()
    };
    setActiveSession(session);
    sessionStorage.setItem(STORAGE_KEY_ACTIVE_TAB, 'home');
    window.location.replace('./dashboard.html');
  } else {
    const username = document.getElementById('input-admin-auth-user')?.value.trim() || 'prefect@cdm.edu.ph';
    const password = document.getElementById('input-admin-auth-pass')?.value.trim() || 'cdm_admin_2024';
    executeAdminLogin(username, password);
  }
}
window.handleAuthSubmit = handleAuthSubmit;

function executeAdminLogin(username, password) {
  const errorAlert = document.getElementById('admin-login-error');
  const u = (username || '').toLowerCase().trim();
  const p = (password || '').trim();

  const isValid =
    (u === 'prefect@cdm.edu.ph' && (p === 'cdm_admin_2024' || p === 'cdm2024')) ||
    (u === 'admin' && (p === 'admin123' || p === 'cdm_admin_2024' || p === 'cdm2024')) ||
    (u === 'prefect' && (p === 'cdm_admin_2024' || p === 'cdm2024'));

  if (!isValid) {
    if (errorAlert) {
      errorAlert.classList.remove('hidden');
    }
    return false;
  }

  if (errorAlert) {
    errorAlert.classList.add('hidden');
  }

  const session = {
    token: 'cdm_auth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10),
    role: 'Prefect Desk (Admin)',
    roleType: 'admin',
    user: 'Prefect of Discipline',
    username: username || 'prefect@cdm.edu.ph',
    designation: 'Prefect of Discipline & Student Affairs',
    loginTimestamp: Date.now(),
    loginTime: new Date().toISOString()
  };

  setActiveSession(session);
  sessionStorage.setItem(STORAGE_KEY_ACTIVE_TAB, 'home');
  window.location.replace('./dashboard.html');
  return true;
}

function mountStudentDesk(session) {
  const displayStudentId = document.getElementById('student-header-id');
  if (displayStudentId && session) {
    displayStudentId.textContent = session.studentNumber || 'Student User';
  }
  const curTab = sessionStorage.getItem(STORAGE_KEY_ACTIVE_TAB) || 'home';
  resetTabVisibility('student', curTab);
}

function mountAdminDashboard(session) {
  renderAdminKPIs();
  renderRegistryTable();
  const curTab = sessionStorage.getItem(STORAGE_KEY_ACTIVE_TAB) || 'home';
  resetTabVisibility('admin', curTab);
}

// Main Boot Lifecycle

// ========================================================
// HCI USABILITY MODULES 1, 2, & 3 INTEGRATION
// (Quick Help, System Notifier, Security Audit Log, Appointments)
// ========================================================

const STORAGE_KEY_QUICK_HELP = 'safetrack_quick_help_requests';
const STORAGE_KEY_NOTIFICATIONS = 'safetrack_notifications';
const STORAGE_KEY_AUDIT_LOGS = 'safetrack_audit_logs';
const STORAGE_KEY_APPOINTMENTS = 'safetrack_appointments';

// Revealed Confidential Dockets Set (In-Session Authorization)
const revealedDockets = new Set();
let pendingUnmaskDocketId = null;

// Module 1 State
let currentQHCategory = 'Bullying';

// Module 3 State
let currentAppointmentMode = 'scheduled';
let selectedConsultOffice = 'OSAS Prefect Desk';
let selectedConsultSlot = '08:30 AM - 09:15 AM';

const CONSULT_SLOTS = [
  '08:30 AM - 09:15 AM',
  '09:30 AM - 10:15 AM',
  '10:30 AM - 11:15 AM',
  '01:00 PM - 01:45 PM',
  '02:00 PM - 02:45 PM',
  '03:00 PM - 03:45 PM'
];

// --------------------------------------------------------
// SEED DATA INITIALIZERS
// --------------------------------------------------------
const INITIAL_QUICK_HELP = [
  {
    id: 'QHB-2026-1042',
    category: 'Bullying',
    urgency: 'Urgent',
    location: 'Quadrangle Near Library Walkway',
    description: 'Report of aggressive taunting and group harassment observed after dismissal.',
    isAnonymous: true,
    studentNumber: '2023-01842-CM-0',
    studentName: 'Anonymous Montalbano #4812',
    timestamp: '2026-11-16 09:30 AM',
    status: 'Action in Progress',
    stepIndex: 2
  },
  {
    id: 'QHB-2026-0891',
    category: 'Academic',
    urgency: 'Standard',
    location: 'ICS Computer Lab 2',
    description: 'Urgent request for consultation regarding midterm programming project dispute.',
    isAnonymous: false,
    studentNumber: '2023-01842-CM-0',
    studentName: 'Christian Reyes',
    timestamp: '2026-11-14 02:15 PM',
    status: 'Resolved',
    stepIndex: 3
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    targetRole: 'student',
    studentNumber: '2023-01842-CM-0',
    title: 'Docket Status Updated',
    message: 'Docket #CDM-2024-002 status is currently set to Open / Active with Prefect desk.',
    type: 'Status Update',
    timeAgo: '10 mins ago',
    timestamp: Date.now() - 600000,
    read: false,
    targetId: 'CDM-2024-002'
  },
  {
    id: 'notif-2',
    targetRole: 'student',
    studentNumber: '2023-01842-CM-0',
    title: 'Consultation Confirmed',
    message: 'Face-to-face consultation confirmed for Nov 18, 10:00 AM at OSAS Prefect Desk.',
    type: 'Appointment',
    timeAgo: '1 hr ago',
    timestamp: Date.now() - 3600000,
    read: false,
    targetId: 'APT-2026-0814'
  },
  {
    id: 'notif-3',
    targetRole: 'admin',
    studentNumber: null,
    title: 'Urgent Quick Help Dispatched',
    message: 'New bullying incident flagged near library quadrangle [Ref: QHB-2026-1042].',
    type: 'Quick Help',
    timeAgo: '25 mins ago',
    timestamp: Date.now() - 1500000,
    read: false,
    targetId: 'QHB-2026-1042'
  },
  {
    id: 'notif-4',
    targetRole: 'admin',
    studentNumber: null,
    title: 'Walk-In Student Waiting',
    message: 'Walk-in Ticket #W-03 queued for CGCC Room 201 (Peer Dispute).',
    type: 'Walk-In Queue',
    timeAgo: '45 mins ago',
    timestamp: Date.now() - 2700000,
    read: true,
    targetId: 'WALK-IN #W-03'
  }
];

const INITIAL_AUDIT_LOGS = [
  {
    id: 'AUD-2026-0091',
    timestamp: '2026-11-16 10:15:22',
    actor: 'Prefect Desk (Admin)',
    role: 'Administrator',
    actionType: 'Record Viewed',
    category: 'Access / Views',
    targetId: 'CDM-2024-002',
    ip: '127.0.0.1 (Prefect Station)',
    details: 'Viewed Case Dossier and evidentiary logs for docket #CDM-2024-002'
  },
  {
    id: 'AUD-2026-0090',
    timestamp: '2026-11-16 09:45:10',
    actor: 'Prefect Desk (Admin)',
    role: 'Administrator',
    actionType: 'Status Updated',
    category: 'Status Changes',
    targetId: 'CDM-2024-001',
    ip: '127.0.0.1 (Prefect Station)',
    details: 'Case disposition updated to Resolved upon completion of conciliation'
  },
  {
    id: 'AUD-2026-0089',
    timestamp: '2026-11-16 09:30:05',
    actor: 'Student Montalbano',
    role: 'Student Portal',
    actionType: 'New Report Submitted',
    category: 'Intake / Reports',
    targetId: 'QHB-2026-1042',
    ip: '127.0.0.1 (Campus Wi-Fi)',
    details: 'Quick Help request filed (Bullying, Quadrangle Near Library Walkway)'
  },
  {
    id: 'AUD-2026-0088',
    timestamp: '2026-11-16 09:15:40',
    actor: 'Prefect Desk (Admin)',
    role: 'Administrator',
    actionType: 'Appointment Approved',
    category: 'Appointments',
    targetId: 'APT-2026-0814',
    ip: '127.0.0.1 (Prefect Station)',
    details: 'Confirmed face-to-face consultation booking for 2026-11-18 10:00 AM'
  },
  {
    id: 'AUD-2026-0087',
    timestamp: '2026-11-16 08:50:11',
    actor: 'Prefect Desk (Admin)',
    role: 'Administrator',
    actionType: 'Walk-In Called',
    category: 'Appointments',
    targetId: 'WALK-IN #W-02',
    ip: '127.0.0.1 (Prefect Station)',
    details: 'Dispatched next queue ticket #W-02 to OSAS Prefect Desk'
  }
];

const INITIAL_APPOINTMENTS = [
  {
    id: 'APT-2026-0814',
    type: 'Face-to-Face',
    office: 'OSAS Prefect Desk',
    category: 'Disciplinary Conciliation & Appeal',
    date: '2026-11-18',
    slot: '10:00 AM - 10:45 AM',
    studentNumber: '2023-01842-CM-0',
    studentName: 'Student Montalbano',
    notes: 'Preliminary case conciliation regarding Docket #CDM-2024-002.',
    status: 'Confirmed',
    created: '2026-11-15 03:20 PM'
  },
  {
    id: 'APT-2026-0815',
    type: 'Face-to-Face',
    office: 'CGCC Room 201',
    category: 'Restorative Guidance Session',
    date: '2026-11-19',
    slot: '02:00 PM - 02:45 PM',
    studentNumber: '2023-01842-CM-0',
    studentName: 'Student Montalbano',
    notes: 'Mental health and wellness check-in.',
    status: 'Pending',
    created: '2026-11-16 08:30 AM'
  },
  {
    id: 'APT-2026-0810',
    type: 'Face-to-Face',
    office: 'OSAS Prefect Desk',
    category: 'Clearance & Good Moral Inquiries',
    date: '2026-11-16',
    slot: '01:00 PM - 01:45 PM',
    studentNumber: '2022-01492-CM-0',
    studentName: 'Christian Reyes',
    notes: 'Good moral clearance verification review.',
    status: 'Pending',
    created: '2026-11-16 09:15 AM'
  },
  {
    id: 'WALK-IN #W-02',
    type: 'Walk-In',
    office: 'OSAS Prefect Desk',
    category: 'Emergency Clearance Signing',
    date: '2026-11-16',
    slot: 'Immediate Walk-In',
    studentNumber: '2021-00213-CM-0',
    studentName: 'Mark Joseph Villanueva',
    notes: 'Walk-in inquiry regarding workshop equipment restitution hold.',
    status: 'Serving',
    created: '2026-11-16 10:00 AM',
    queueNumber: 'W-02'
  },
  {
    id: 'WALK-IN #W-03',
    type: 'Walk-In',
    office: 'CGCC Room 201',
    category: 'Peer Dispute Mediation',
    date: '2026-11-16',
    slot: 'Immediate Walk-In',
    studentNumber: '2024-03912-CM-0',
    studentName: 'Alyssa Marie Flores',
    notes: 'Walk-in guidance consultation.',
    status: 'Waiting',
    created: '2026-11-16 10:15 AM',
    queueNumber: 'W-03'
  },
  {
    id: 'WALK-IN #W-04',
    type: 'Walk-In',
    office: 'OSAS Prefect Desk',
    category: 'Student Welfare',
    date: '2026-11-16',
    slot: 'Immediate Walk-In',
    studentNumber: '2023-01842-CM-0',
    studentName: 'Student Montalbano',
    notes: 'Walk-in ticket claimed by student.',
    status: 'Waiting',
    created: '2026-11-16 10:20 AM',
    queueNumber: 'W-04'
  }
];

// Helper to seed localStorage cleanly
function ensureSeedStorage(key, initialData) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(initialData));
      return initialData;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(key, JSON.stringify(initialData));
      return initialData;
    }
    return parsed;
  } catch (e) {
    localStorage.setItem(key, JSON.stringify(initialData));
    return initialData;
  }
}


// ========================================================
// 1. QUICK HELP BUTTON & REQUEST TRACKER ENGINE
// ========================================================
function getQuickHelpRequests() {
  return ensureSeedStorage(STORAGE_KEY_QUICK_HELP, INITIAL_QUICK_HELP);
}

function saveQuickHelpRequests(items) {
  localStorage.setItem(STORAGE_KEY_QUICK_HELP, JSON.stringify(items));
}

function openQuickHelpModal() {
  const modal = document.getElementById('modal-quick-help');
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }
  switchQuickHelpTab('submit');
  updateQuickHelpBadge();
}
window.openQuickHelpModal = openQuickHelpModal;

function closeQuickHelpModal() {
  const modal = document.getElementById('modal-quick-help');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}
window.closeQuickHelpModal = closeQuickHelpModal;

function switchQuickHelpTab(tab) {
  const btnSubmit = document.getElementById('btn-qh-tab-submit');
  const btnTrack = document.getElementById('btn-qh-tab-track');
  const paneSubmit = document.getElementById('pane-qh-submit');
  const paneTrack = document.getElementById('pane-qh-track');

  if (tab === 'track') {
    btnTrack?.classList.remove('bg-[#070d1a]', 'text-slate-400');
    btnTrack?.classList.add('bg-[#2563eb]', 'text-white', 'font-bold', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]');
    btnSubmit?.classList.remove('bg-[#2563eb]', 'text-white', 'font-bold', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]');
    btnSubmit?.classList.add('bg-[#070d1a]', 'text-slate-400');

    paneSubmit?.classList.add('hidden');
    if (paneSubmit) paneSubmit.style.display = 'none';
    paneTrack?.classList.remove('hidden');
    if (paneTrack) paneTrack.style.display = 'block';

    renderQuickHelpTracker();
  } else {
    btnSubmit?.classList.remove('bg-[#070d1a]', 'text-slate-400');
    btnSubmit?.classList.add('bg-[#2563eb]', 'text-white', 'font-bold', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]');
    btnTrack?.classList.remove('bg-[#2563eb]', 'text-white', 'font-bold', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]');
    btnTrack?.classList.add('bg-[#070d1a]', 'text-slate-400');

    paneTrack?.classList.add('hidden');
    if (paneTrack) paneTrack.style.display = 'none';
    paneSubmit?.classList.remove('hidden');
    if (paneSubmit) paneSubmit.style.display = 'block';
  }
}
window.switchQuickHelpTab = switchQuickHelpTab;

function selectQuickHelpCategory(catName, cardEl) {
  currentQHCategory = catName;
  document.querySelectorAll('.qh-category-card').forEach((card) => {
    card.classList.remove('selected');
    card.style.border = '1px solid rgba(148, 163, 184, 0.22)';
    card.style.background = '';
  });
  if (cardEl) {
    cardEl.classList.add('selected');
    cardEl.style.border = '2px solid #3b82f6';
    cardEl.style.background = 'rgba(37, 99, 235, 0.14)';
  }
}
window.selectQuickHelpCategory = selectQuickHelpCategory;

function submitQuickHelpRequest() {
  const locationInput = document.getElementById('qh-input-location');
  const descInput = document.getElementById('qh-input-desc');
  const isAnonCheck = document.getElementById('qh-check-anonymous');
  const urgencyRadio = document.querySelector('input[name="qh-urgency"]:checked');

  const loc = (locationInput?.value || '').trim() || 'Campus Grounds / Main Quadrangle';
  const desc = (descInput?.value || '').trim();
  const urgency = urgencyRadio?.value || 'Standard';
  const isAnon = isAnonCheck ? isAnonCheck.checked : false;

  if (!desc) {
    alert('Please provide a brief description of the situation so OSAS can provide proper assistance.');
    descInput?.focus();
    return;
  }

  const session = getActiveSession();
  const studentNum = session?.studentNumber || '2023-01842-CM-0';
  const studentName = isAnon ? 'Anonymous Montalbano #4812' : (session?.studentName || 'Student Montalbano');

  const refCode = 'QHB-2026-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const timeStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newRequest = {
    id: refCode,
    category: currentQHCategory || 'Bullying',
    urgency: urgency,
    location: loc,
    description: desc,
    isAnonymous: isAnon,
    studentNumber: studentNum,
    studentName: studentName,
    timestamp: timeStr,
    status: 'Submitted',
    stepIndex: 0
  };

  const allReqs = getQuickHelpRequests();
  allReqs.unshift(newRequest);
  saveQuickHelpRequests(allReqs);

  // Link to OSAS Chat thread so student & OSAS can communicate directly
  const chatThread = {
    threadId: refCode,
    title: `[Quick Help] ${newRequest.category} - ${refCode}`,
    docket: refCode,
    classification: `Quick Help: ${newRequest.category}`,
    status: 'Open / Active',
    participant: studentName,
    studentNumber: studentNum,
    actualStudentName: session?.studentName || 'Student Montalbano',
    studentName: studentName,
    institute: 'ICS',
    isAnonymous: isAnon,
    isAnonymousToPublic: isAnon,
    maskedAlias: isAnon ? 'Anonymous Montalbano #4812' : null,
    unreadCount: 0,
    lastUpdate: 'Just now',
    lastDate: 'Today',
    location: loc,
    referral: urgency === 'Urgent' ? 'Immediate OSAS Intervention' : 'Standard Student Assistance',
    sanctions: 'Under immediate intake assessment.',
    messages: [
      {
        id: 'msg-qh-' + Date.now(),
        sender: 'student',
        senderName: studentName,
        role: 'Student',
        type: 'text',
        text: `🆘 [QUICK HELP DISPATCH - ${refCode}]\nCategory: ${newRequest.category} (${urgency})\nLocation: ${loc}\n\nDescription: ${desc}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: 'Today',
        status: 'delivered'
      },
      {
        id: 'msg-qh-ack-' + Date.now(),
        sender: 'osa',
        senderName: 'Office of Student Affairs',
        role: 'OSAS Duty Officer',
        type: 'text',
        text: `Official acknowledgment: Quick Help request ${refCode} received. A guidance officer has been assigned to monitor your case.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: 'Today',
        status: 'delivered'
      }
    ]
  };
  store.createThread(chatThread);

  // Trigger Notifications & Audit Log
  addSystemNotification({
    targetRole: 'student',
    studentNumber: studentNum,
    title: 'Quick Help Request Transmitted',
    message: `Your Quick Help ticket [${refCode}] was sent to the OSAS Duty Desk.`,
    type: 'Quick Help',
    targetId: refCode
  });

  addSystemNotification({
    targetRole: 'admin',
    studentNumber: null,
    title: `Quick Help Alert (${urgency})`,
    message: `New request: ${newRequest.category} at ${loc} [${refCode}].`,
    type: 'Quick Help',
    targetId: refCode
  });

  logAuditAction(
    'New Report Submitted',
    studentName,
    'Student Portal',
    refCode,
    `Quick Help Request filed (${newRequest.category}, Urgency: ${urgency}, Loc: ${loc})`
  );

  showSafeTrackToast(
    'Quick Help Transmitted',
    `Request ${refCode} successfully routed to OSAS Duty Officer.`,
    urgency === 'Urgent' ? 'warning' : 'success'
  );

  // Clear inputs
  if (descInput) descInput.value = '';
  if (locationInput) locationInput.value = '';

  // Switch to Track tab to see the visual stepper
  switchQuickHelpTab('track');
  updateQuickHelpBadge();
}
window.submitQuickHelpRequest = submitQuickHelpRequest;

function updateQuickHelpBadge() {
  const session = getActiveSession();
  const cleanId = (session?.studentNumber || '').trim().toUpperCase();
  const allReqs = getQuickHelpRequests();
  const myCount = allReqs.filter((r) => {
    return !cleanId || cleanId === 'ANONYMOUS' || (r.studentNumber || '').trim().toUpperCase() === cleanId;
  }).length;

  const badge = document.getElementById('badge-qh-track-count');
  if (badge) badge.textContent = String(myCount);
}

function renderQuickHelpTracker() {
  const container = document.getElementById('qh-tracking-list');
  if (!container) return;

  const session = getActiveSession();
  const cleanId = (session?.studentNumber || '').trim().toUpperCase();
  const allReqs = getQuickHelpRequests();
  const myReqs = allReqs.filter((r) => {
    return !cleanId || cleanId === 'ANONYMOUS' || (r.studentNumber || '').trim().toUpperCase() === cleanId;
  });

  if (myReqs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-500 bg-[#070d1a] rounded-2xl border border-[#1e293b]">
        <div class="text-2xl mb-2">📋</div>
        <div class="text-xs font-semibold text-slate-400">No Quick Help requests submitted yet.</div>
        <div class="text-[11px] text-slate-500 mt-1">When you submit an immediate concern, track real-time resolution progress here.</div>
      </div>
    `;
    return;
  }

  const steps = ['Submitted', 'Reviewed by OSAS', 'Action in Progress', 'Resolved'];

  container.innerHTML = myReqs.map((req) => {
    const stepIdx = typeof req.stepIndex === 'number' ? req.stepIndex : 0;
    const isUrgent = req.urgency === 'Urgent';

    const stepperHtml = steps.map((stepName, idx) => {
      const isCompleted = idx < stepIdx;
      const isCurrent = idx === stepIdx;

      let circleClass = 'bg-slate-800 border-slate-700 text-slate-500';
      let textClass = 'text-slate-500';
      let icon = idx + 1;

      if (isCompleted) {
        circleClass = 'bg-emerald-600 border-emerald-500 text-white';
        textClass = 'text-emerald-400 font-semibold';
        icon = '✓';
      } else if (isCurrent) {
        circleClass = 'bg-blue-600 border-blue-400 text-white shadow-[0_0_12px_rgba(37,99,235,0.6)] animate-pulse';
        textClass = 'text-blue-300 font-bold';
      }

      return `
        <div class="flex-1 flex flex-col items-center text-center relative z-10">
          <div class="size-7 rounded-full border-2 flex items-center justify-center text-xs ${circleClass}">
            ${icon}
          </div>
          <span class="text-[10px] mt-1.5 leading-tight ${textClass}">${stepName}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="p-4 rounded-2xl bg-[#070d1a] border border-[#1e293b] space-y-3.5 shadow-md">
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs font-bold text-blue-400">${escapeHtml(req.id)}</span>
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${isUrgent ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-slate-800 text-slate-300'}">${escapeHtml(req.urgency)}</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">${escapeHtml(req.category)}</span>
          </div>
          <span class="text-[11px] text-slate-400">${escapeHtml(req.timestamp)}</span>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(req.description)}</p>
        <div class="text-[11px] text-slate-500">📍 ${escapeHtml(req.location)} ${req.isAnonymous ? '• <span class="text-blue-400">Identity Protected</span>' : ''}</div>

        <!-- 4-Step Progress Stepper (Visibility of System Status) -->
        <div class="py-2.5 px-3 bg-[#0c1425] rounded-xl border border-[#16233b] relative">
          <div class="flex items-center justify-between relative">
            <div class="absolute left-6 right-6 top-3.5 h-0.5 bg-slate-800 -z-0"></div>
            ${stepperHtml}
          </div>
        </div>

        <!-- 1-Click Action to OSAS Chat -->
        <div class="flex items-center justify-between pt-2 border-t border-[#16233b]">
          <span class="text-[11px] text-slate-400">Current Status: <strong class="text-white">${escapeHtml(req.status)}</strong></span>
          <button onclick="openQuickHelpInChat('${escapeHtml(req.id)}')"
            class="px-3.5 py-1.5 rounded-xl bg-[#2563eb] hover:bg-blue-600 text-white text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
            <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>Open in OSAS Chat</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}
window.renderQuickHelpTracker = renderQuickHelpTracker;

function openQuickHelpInChat(reqId) {
  closeQuickHelpModal();
  switchStudentTab('messages');
  if (typeof activeThreadId !== 'undefined') {
    activeThreadId = reqId;
  }
  renderInstagramDMHub('student-messaging-container', 'student');
}
window.openQuickHelpInChat = openQuickHelpInChat;

// Keyboard shortcut: Alt+Q for Quick Help
window.addEventListener('keydown', (e) => {
  if (e.altKey && (e.key === 'q' || e.key === 'Q')) {
    e.preventDefault();
    openQuickHelpModal();
  }
});

// ========================================================
// 2. SYSTEM NOTIFIER, CONFIDENTIALITY & AUDIT LOG ENGINE
// ========================================================
function getNotifications(role, studentNumber) {
  const all = ensureSeedStorage(STORAGE_KEY_NOTIFICATIONS, INITIAL_NOTIFICATIONS);
  if (!role) return all;

  return all.filter((n) => {
    if (role === 'admin') return n.targetRole === 'admin' || n.targetRole === 'all';
    // student
    if (n.targetRole === 'admin') return false;
    if (!studentNumber || studentNumber === 'ANONYMOUS') return true;
    return !n.studentNumber || (n.studentNumber || '').trim().toUpperCase() === (studentNumber || '').trim().toUpperCase();
  });
}

function addSystemNotification(notif) {
  const all = ensureSeedStorage(STORAGE_KEY_NOTIFICATIONS, INITIAL_NOTIFICATIONS);
  const newNotif = {
    id: 'notif-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    timestamp: Date.now(),
    timeAgo: 'Just now',
    read: false,
    ...notif
  };
  all.unshift(newNotif);
  localStorage.setItem(STORAGE_KEY_NOTIFICATIONS, JSON.stringify(all));
  updateNotificationBadges();
  return newNotif;
}
window.addSystemNotification = addSystemNotification;

function showSafeTrackToast(title, message, type = 'info', duration = 4000) {
  const container = document.getElementById('safetrack-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const typeIcons = {
    success: '✓',
    error: '✕',
    warning: '⚠️',
    info: 'ℹ️'
  };
  const typeStyles = {
    success: 'border-emerald-500/40 bg-[#0c1425] text-white shadow-[0_8px_25px_rgba(16,185,129,0.25)]',
    error: 'border-red-500/40 bg-[#0c1425] text-white shadow-[0_8px_25px_rgba(239,68,68,0.25)]',
    warning: 'border-amber-500/40 bg-[#0c1425] text-white shadow-[0_8px_25px_rgba(245,158,11,0.25)]',
    info: 'border-blue-500/40 bg-[#0c1425] text-white shadow-[0_8px_25px_rgba(37,99,235,0.25)]'
  };
  const iconColors = {
    success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40',
    error: 'bg-red-500/20 text-red-400 border border-red-500/40',
    warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/40',
    info: 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
  };

  toast.className = `p-4 rounded-2xl border ${typeStyles[type] || typeStyles.info} flex items-start gap-3 pointer-events-auto toast-animate-in transition-all`;
  toast.innerHTML = `
    <div class="size-7 rounded-xl flex items-center justify-center text-xs shrink-0 font-bold ${iconColors[type] || iconColors.info}">
      ${typeIcons[type] || 'ℹ️'}
    </div>
    <div class="flex-1 min-w-0 pr-2">
      <div class="font-bold text-xs text-white leading-tight">${escapeHtml(title)}</div>
      <div class="text-[11px] text-slate-300 mt-0.5 leading-snug">${escapeHtml(message)}</div>
    </div>
    <button type="button" class="text-slate-400 hover:text-white p-1 rounded-lg text-xs cursor-pointer leading-none">&times;</button>
  `;

  const closeBtn = toast.querySelector('button');
  const dismiss = () => {
    toast.classList.remove('toast-animate-in');
    toast.classList.add('toast-animate-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  };

  closeBtn?.addEventListener('click', dismiss);
  container.appendChild(toast);

  if (duration > 0) {
    setTimeout(dismiss, duration);
  }
}
window.showSafeTrackToast = showSafeTrackToast;

function toggleNotificationDropdown(role, e) {
  if (e && typeof e.stopPropagation === 'function') {
    e.stopPropagation();
  } else if (typeof window !== 'undefined' && window.event && typeof window.event.stopPropagation === 'function') {
    window.event.stopPropagation();
  }

  const dropdownId = role === 'admin' ? 'dropdown-notifications-admin' : 'dropdown-notifications-student';
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;

  // Also close the other role's dropdown if open
  const otherDropdownId = role === 'admin' ? 'dropdown-notifications-student' : 'dropdown-notifications-admin';
  const otherDropdown = document.getElementById(otherDropdownId);
  if (otherDropdown) {
    otherDropdown.classList.add('hidden');
    otherDropdown.style.display = 'none';
  }

  const isHidden = dropdown.classList.contains('hidden') || dropdown.style.display === 'none';
  if (isHidden) {
    renderNotificationDropdown(role);
    dropdown.classList.remove('hidden');
    dropdown.style.display = 'block';

    const handleOutsideClick = (evt) => {
      if (!dropdown.contains(evt.target) && !evt.target.closest(`#btn-notifications-${role}`)) {
        dropdown.classList.add('hidden');
        dropdown.style.display = 'none';
        document.removeEventListener('click', handleOutsideClick);
      }
    };
    setTimeout(() => {
      document.removeEventListener('click', handleOutsideClick);
      document.addEventListener('click', handleOutsideClick);
    }, 10);
  } else {
    dropdown.classList.add('hidden');
    dropdown.style.display = 'none';
  }
}
window.toggleNotificationDropdown = toggleNotificationDropdown;

function updateNotificationBadges() {
  const session = getActiveSession();
  const studentNum = session?.studentNumber;

  const studentNotifs = getNotifications('student', studentNum);
  const studentUnread = studentNotifs.filter((n) => !n.read).length;
  const badgeStudent = document.getElementById('badge-notifications-student');
  if (badgeStudent) {
    badgeStudent.textContent = String(studentUnread);
    badgeStudent.style.display = studentUnread > 0 ? 'flex' : 'none';
  }

  const adminNotifs = getNotifications('admin', null);
  const adminUnread = adminNotifs.filter((n) => !n.read).length;
  const badgeAdmin = document.getElementById('badge-notifications-admin');
  if (badgeAdmin) {
    badgeAdmin.textContent = String(adminUnread);
    badgeAdmin.style.display = adminUnread > 0 ? 'flex' : 'none';
  }
}
window.updateNotificationBadges = updateNotificationBadges;

function markAllNotificationsRead(role) {
  const session = getActiveSession();
  const studentNum = session?.studentNumber;
  const all = ensureSeedStorage(STORAGE_KEY_NOTIFICATIONS, INITIAL_NOTIFICATIONS);

  all.forEach((n) => {
    if (role === 'admin' && (n.targetRole === 'admin' || n.targetRole === 'all')) {
      n.read = true;
    } else if (role === 'student' && n.targetRole === 'student') {
      if (!studentNum || !n.studentNumber || (n.studentNumber || '').toUpperCase() === (studentNum || '').toUpperCase()) {
        n.read = true;
      }
    }
  });

  localStorage.setItem(STORAGE_KEY_NOTIFICATIONS, JSON.stringify(all));
  updateNotificationBadges();
  renderNotificationDropdown(role);
  showSafeTrackToast('Notifications Cleared', 'All system notifications marked as read.', 'info', 2000);
}
window.markAllNotificationsRead = markAllNotificationsRead;

function renderNotificationDropdown(role) {
  const dropdown = document.getElementById(role === 'admin' ? 'dropdown-notifications-admin' : 'dropdown-notifications-student');
  if (!dropdown) return;

  const session = getActiveSession();
  const studentNum = session?.studentNumber;
  const notifs = getNotifications(role, studentNum);

  const unreadCount = notifs.filter(n => !n.read).length;

  const headerHtml = `
    <div class="flex items-center justify-between pb-3 border-b border-[#16233b] mb-2.5 px-0.5">
      <div class="flex items-center gap-2">
        <span class="text-sm">🔔</span>
        <span class="font-bold text-white text-xs">System Notifications</span>
        <span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 font-mono font-bold">${unreadCount} Unread</span>
      </div>
      <button onclick="markAllNotificationsRead('${role}')" 
        class="text-[11px] text-blue-400 hover:text-blue-300 font-semibold cursor-pointer px-2 py-1 rounded-lg hover:bg-blue-500/10 transition">
        Mark all as read
      </button>
    </div>
  `;

  if (notifs.length === 0) {
    dropdown.innerHTML = headerHtml + `
      <div class="text-center py-8 text-slate-400 text-xs">
        <div class="text-2xl mb-1.5 opacity-60">🔕</div>
        <div class="font-medium">No notifications at this time.</div>
        <div class="text-[11px] text-slate-500 mt-0.5">All official OSAS records are up to date.</div>
      </div>
    `;
    return;
  }

  const listHtml = notifs.map((n) => {
    const isUnread = !n.read;
    let notifIcon = '🔔';
    if ((n.type || '').includes('Appointment') || (n.title || '').includes('Appointment')) notifIcon = '📅';
    else if ((n.type || '').includes('Status') || (n.title || '').includes('Docket')) notifIcon = '⚖️';
    else if ((n.type || '').includes('Clearance')) notifIcon = '📜';

    return `
      <div onclick="handleNotificationClick('${role}', '${escapeHtml(n.targetId || '')}', '${escapeHtml(n.id)}')"
        class="notif-card-item ${isUnread ? 'is-unread' : ''}">
        
        <!-- Left: Icon & Unread Dot -->
        <div class="relative shrink-0 mt-0.5">
          <div class="size-8 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-sm">
            ${notifIcon}
          </div>
          ${isUnread ? `
            <span class="absolute -top-1 -right-1 size-2.5 rounded-full bg-blue-500 ring-2 ring-[#0c1425] animate-pulse"></span>
          ` : ''}
        </div>

        <!-- Right Content Body -->
        <div class="flex-1 min-w-0">
          <!-- Top Row: Bold Title & Relative Time -->
          <div class="flex items-center justify-between gap-2 mb-0.5">
            <span class="font-bold text-xs text-white truncate flex-1 min-w-0">${escapeHtml(n.title)}</span>
            <span class="text-[10.5px] text-slate-400 font-medium whitespace-nowrap shrink-0">${escapeHtml(n.timeAgo || 'Just now')}</span>
          </div>

          <!-- Middle Row: Message text (line-height 1.45, properly wrapped) -->
          <p class="text-xs text-slate-300 leading-relaxed break-words mb-1.5">${escapeHtml(n.message)}</p>

          <!-- Bottom Row: Type Tag & Monospace Ref Line -->
          <div class="flex flex-wrap items-center gap-2 pt-0.5">
            <span class="text-[10px] px-2 py-0.5 rounded font-medium bg-blue-500/15 text-blue-300 border border-blue-500/25">${escapeHtml(n.type || 'Status Update')}</span>
            ${n.targetId ? `<span class="text-[10px] text-slate-400 font-mono">Ref: ${escapeHtml(n.targetId)}</span>` : ''}
          </div>
        </div>

      </div>
    `;
  }).join('');

  dropdown.innerHTML = headerHtml + `<div class="space-y-2.5 max-h-80 overflow-y-auto p-1 osas-scrollbar">${listHtml}</div>`;
}

function handleNotificationClick(role, targetId, notifId) {
  // Mark clicked as read
  const all = ensureSeedStorage(STORAGE_KEY_NOTIFICATIONS, INITIAL_NOTIFICATIONS);
  const found = all.find((n) => n.id === notifId);
  if (found) found.read = true;
  localStorage.setItem(STORAGE_KEY_NOTIFICATIONS, JSON.stringify(all));
  updateNotificationBadges();

  const dropdown = document.getElementById(role === 'admin' ? 'dropdown-notifications-admin' : 'dropdown-notifications-student');
  if (dropdown) {
    dropdown.classList.add('hidden');
    dropdown.style.display = 'none';
  }

  if (!targetId) return;

  if (targetId.startsWith('CDM-')) {
    if (role === 'admin') {
      switchAdminTab('registry');
      openInspectModal(targetId);
    } else {
      switchStudentTab('tickets');
    }
  } else if (targetId.startsWith('QHB-')) {
    if (role === 'admin') {
      switchAdminTab('messages');
      if (typeof activeThreadId !== 'undefined') activeThreadId = targetId;
      renderInstagramDMHub('admin-messaging-container', 'osa');
    } else {
      openQuickHelpModal();
      switchQuickHelpTab('track');
    }
  } else if (targetId.startsWith('APT-') || targetId.startsWith('WALK-IN')) {
    if (role === 'admin') {
      switchAdminTab('appointments');
    } else {
      switchStudentTab('appointments');
      switchAppointmentMode('records');
    }
  }
}
window.handleNotificationClick = handleNotificationClick;

// ========================================================
// 2B. SECURITY & CONFIDENTIALITY: IDENTITY UNMASKING
// ========================================================
function requestRevealIdentity(docketId) {
  pendingUnmaskDocketId = docketId;
  const modal = document.getElementById('modal-confirm-unmask');
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }
}
window.requestRevealIdentity = requestRevealIdentity;

function closeConfirmUnmaskModal() {
  pendingUnmaskDocketId = null;
  const modal = document.getElementById('modal-confirm-unmask');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}
window.closeConfirmUnmaskModal = closeConfirmUnmaskModal;

function executeConfirmUnmask() {
  if (!pendingUnmaskDocketId) return;

  const docketId = pendingUnmaskDocketId;
  revealedDockets.add(docketId);
  closeConfirmUnmaskModal();

  logAuditAction(
    'Identity Unmasked',
    'Prefect Desk (Admin)',
    'Administrator',
    docketId,
    `Authorized unmasking of confidential student identity for formal disciplinary inquiry.`
  );

  showSafeTrackToast(
    'Identity Unmasked',
    `Confidential identity revealed for Docket #${docketId}. Action permanently recorded in Audit Log.`,
    'warning'
  );

  renderRegistryTable();
  const modalInspector = document.getElementById('modal-case-viewer');
  if (modalInspector && !modalInspector.classList.contains('hidden')) {
    openInspectorModal(docketId, false);
  }
}
window.executeConfirmUnmask = executeConfirmUnmask;

// ========================================================
// 2C. ADMIN-ONLY SECURITY AUDIT LOG
// ========================================================
function getAuditLogs() {
  return ensureSeedStorage(STORAGE_KEY_AUDIT_LOGS, INITIAL_AUDIT_LOGS);
}

function logAuditAction(actionType, actorName, actorRole, targetId, details) {
  const all = getAuditLogs();
  const now = new Date();
  const dateStr = now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0') + ' ' +
    now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  let category = 'Access / Views';
  if (actionType.includes('Status') || actionType.includes('Update')) category = 'Status Changes';
  else if (actionType.includes('Identity') || actionType.includes('Security') || actionType.includes('Auth')) category = 'Security';
  else if (actionType.includes('Appointment') || actionType.includes('Walk-In') || actionType.includes('Queue')) category = 'Appointments';

  const entry = {
    id: 'AUD-2026-' + String(all.length + 1).padStart(4, '0'),
    timestamp: dateStr,
    actor: actorName || 'Prefect Desk (Admin)',
    role: actorRole || 'Administrator',
    actionType: actionType,
    category: category,
    targetId: targetId || 'N/A',
    ip: '127.0.0.1 (Prefect Station)',
    details: details || ''
  };

  all.unshift(entry);
  localStorage.setItem(STORAGE_KEY_AUDIT_LOGS, JSON.stringify(all));
  return entry;
}
window.logAuditAction = logAuditAction;

function openAuditLogModal() {
  const modal = document.getElementById('modal-audit-log');
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }
  renderAuditLogs('ALL', '');
}
window.openAuditLogModal = openAuditLogModal;

function closeAuditLogModal() {
  const modal = document.getElementById('modal-audit-log');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}
window.closeAuditLogModal = closeAuditLogModal;

let currentAuditCategory = 'ALL';
let currentAuditSearch = '';

function filterAuditLogs(cat, btnEl) {
  currentAuditCategory = cat;
  document.querySelectorAll('.audit-pill').forEach((b) => {
    b.classList.remove('bg-purple-600', 'text-white', 'font-bold');
    b.classList.add('bg-[#070d1a]', 'text-slate-400');
  });
  if (btnEl) {
    btnEl.classList.remove('bg-[#070d1a]', 'text-slate-400');
    btnEl.classList.add('bg-purple-600', 'text-white', 'font-bold');
  }
  renderAuditLogs(currentAuditCategory, currentAuditSearch);
}
window.filterAuditLogs = filterAuditLogs;

function searchAuditLogs(val) {
  currentAuditSearch = (val || '').toLowerCase().trim();
  renderAuditLogs(currentAuditCategory, currentAuditSearch);
}
window.searchAuditLogs = searchAuditLogs;

function renderAuditLogs(cat = 'ALL', search = '') {
  const tbody = document.getElementById('audit-table-body');
  const countIndicator = document.getElementById('audit-count-indicator');
  if (!tbody) return;

  const allLogs = getAuditLogs();
  const filtered = allLogs.filter((l) => {
    const matchCat = cat === 'ALL' || l.category === cat || l.actionType === cat;
    const matchSearch =
      !search ||
      l.id.toLowerCase().includes(search) ||
      l.actor.toLowerCase().includes(search) ||
      l.actionType.toLowerCase().includes(search) ||
      l.targetId.toLowerCase().includes(search) ||
      (l.details && l.details.toLowerCase().includes(search));
    return matchCat && matchSearch;
  });

  if (countIndicator) {
    countIndicator.textContent = `Showing ${filtered.length} of ${allLogs.length} immutable events`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-8 text-center text-slate-500">No audit log records matching the selected criteria.</td>
      </tr>
    `;
    return;
  }

  const actionPillClasses = {
    'Record Viewed': 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]',
    'Identity Unmasked': 'bg-[#FFF1F2] text-[#9F1239] border border-[#FECDD3] font-bold',
    'Status Updated': 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]',
    'New Report Submitted': 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    'Appointment Approved': 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    'Walk-In Called': 'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]'
  };

  tbody.innerHTML = filtered.map((l) => {
    const pillClass = actionPillClasses[l.actionType] || 'bg-[#EEF3F8] text-[#475569] border border-[#E3E8EE]';
    return `
      <tr class="hover:bg-white/5 transition border-b border-[#16233b]">
        <td class="py-2.5 px-3 font-mono text-[11px] font-bold text-purple-400 tabular-nums whitespace-nowrap">${escapeHtml(l.id)}</td>
        <td class="py-2.5 px-3 text-[11px] text-[#94A3B8] whitespace-nowrap tabular-nums">${escapeHtml(l.timestamp)}</td>
        <td class="py-2.5 px-3 text-[11px] font-bold text-[#F8FAFC]">${escapeHtml(l.actor)}</td>
        <td class="py-2.5 px-3"><span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold inline-block whitespace-nowrap ${pillClass}">${escapeHtml(l.actionType)}</span></td>
        <td class="py-2.5 px-3 font-mono text-[11px] font-semibold text-blue-400 tabular-nums whitespace-nowrap">${escapeHtml(l.targetId)}</td>
        <td class="py-2.5 px-3 font-mono text-[10px] text-[#94A3B8] whitespace-nowrap tabular-nums">${escapeHtml(l.ip)}</td>
        <td class="py-2.5 px-3 text-[11px] text-[#CBD5E1] max-w-xs truncate" title="${escapeHtml(l.details)}">${escapeHtml(l.details)}</td>
      </tr>
    `;
  }).join('');
}
window.renderAuditLogs = renderAuditLogs;

function exportAuditLogs() {
  const logs = getAuditLogs();
  let csv = 'Log ID,Timestamp,Actor,Role,Action Type,Category,Target,IP,Details\\n';
  logs.forEach((l) => {
    csv += `"${l.id}","${l.timestamp}","${l.actor}","${l.role}","${l.actionType}","${l.category}","${l.targetId}","${l.ip}","${(l.details || '').replace(/"/g, '""')}"\\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SafeTrack_Security_Audit_Log_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showSafeTrackToast('Audit Log Exported', 'Audit ledger successfully downloaded as CSV.', 'success');
}
window.exportAuditLogs = exportAuditLogs;

// ========================================================
// 3. APPOINTMENT BOOKING & QUEUE MANAGEMENT ENGINE
// ========================================================
function getAppointments() {
  return ensureSeedStorage(STORAGE_KEY_APPOINTMENTS, INITIAL_APPOINTMENTS);
}

function saveAppointments(items) {
  localStorage.setItem(STORAGE_KEY_APPOINTMENTS, JSON.stringify(items));
}


function switchAppointmentMode(mode) {
  currentAppointmentMode = mode;
  const btnScheduled = document.getElementById('btn-mode-face-to-face');
  const btnWalkin = document.getElementById('btn-mode-walkin');
  const btnRecords = document.getElementById('btn-mode-my-bookings');

  const paneScheduled = document.getElementById('pane-appointment-scheduled');
  const paneWalkin = document.getElementById('pane-appointment-walkin');
  const paneRecords = document.getElementById('pane-appointment-records');

  const allBtns = [btnScheduled, btnWalkin, btnRecords];
  const allPanes = [paneScheduled, paneWalkin, paneRecords];

  allBtns.forEach((b) => {
    b?.classList.remove('bg-[#2563eb]', 'text-white', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]', 'font-bold', 'active-mode');
    b?.classList.add('bg-[#0c1425]', 'text-slate-400');
  });

  allPanes.forEach((p) => {
    p?.classList.add('hidden');
    if (p) p.style.display = 'none';
  });

  if (mode === 'walkin') {
    btnWalkin?.classList.remove('bg-[#0c1425]', 'text-slate-400');
    btnWalkin?.classList.add('bg-[#2563eb]', 'text-white', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]', 'font-bold', 'active-mode');
    paneWalkin?.classList.remove('hidden');
    if (paneWalkin) paneWalkin.style.display = 'block';
  } else if (mode === 'records') {
    btnRecords?.classList.remove('bg-[#0c1425]', 'text-slate-400');
    btnRecords?.classList.add('bg-[#2563eb]', 'text-white', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]', 'font-bold', 'active-mode');
    paneRecords?.classList.remove('hidden');
    if (paneRecords) paneRecords.style.display = 'block';
    renderMyAppointmentsTable();
  } else {
    // default scheduled
    btnScheduled?.classList.remove('bg-[#0c1425]', 'text-slate-400');
    btnScheduled?.classList.add('bg-[#2563eb]', 'text-white', 'shadow-[0_4px_16px_rgba(37,99,235,0.35)]', 'font-bold', 'active-mode');
    paneScheduled?.classList.remove('hidden');
    if (paneScheduled) paneScheduled.style.display = 'block';
    updateTimeSlotAvailability();
  }
}
window.switchAppointmentMode = switchAppointmentMode;

function selectConsultationOffice(office) {
  selectedConsultOffice = office;
  const cardOsas = document.getElementById('card-office-osas');
  const cardCgcc = document.getElementById('card-office-cgcc');
  const checkOsas = cardOsas?.querySelector('.check-indicator');
  const checkCgcc = cardCgcc?.querySelector('.check-indicator');

  if (office === 'OSAS Prefect Desk') {
    cardOsas?.classList.add('selected');
    cardCgcc?.classList.remove('selected');
    checkOsas?.classList.remove('hidden');
    checkCgcc?.classList.add('hidden');
  } else {
    cardCgcc?.classList.add('selected');
    cardOsas?.classList.remove('selected');
    checkCgcc?.classList.remove('hidden');
    checkOsas?.classList.add('hidden');
  }
  updateTimeSlotAvailability();
}
window.selectConsultationOffice = selectConsultationOffice;

function updateTimeSlotAvailability() {
  const container = document.getElementById('apt-slots-container');
  const dateInput = document.getElementById('apt-input-date');
  if (!container) return;

  const selectedDate = dateInput?.value || new Date().toISOString().split('T')[0];
  const allApts = getAppointments();

  // Find booked slots for this date and office
  const bookedSlots = new Set(
    allApts
      .filter((a) => a.date === selectedDate && a.office === selectedConsultOffice && a.status !== 'Cancelled')
      .map((a) => a.slot)
  );

  container.innerHTML = CONSULT_SLOTS.map((slot) => {
    const isBooked = bookedSlots.has(slot);
    const isSelected = selectedConsultSlot === slot && !isBooked;

    let baseClass = 'slot-pill px-3.5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-between border ';
    if (isBooked) {
      baseClass += 'bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed line-through opacity-50 ';
    } else if (isSelected) {
      baseClass += 'bg-blue-600 border-blue-400 text-white shadow-[0_4px_12px_rgba(37,99,235,0.35)] cursor-pointer selected ';
    } else {
      baseClass += 'bg-[#070d1a] border-[#1e293b] text-slate-300 hover:border-slate-400 hover:text-white cursor-pointer ';
    }

    const clickAttr = isBooked ? '' : `onclick="selectConsultationSlot('${slot}')"`;
    const checkBadge = isSelected ? '<span class="text-[11px] font-bold ml-1.5">✓</span>' : '';
    const statusText = isBooked
      ? '<span class="text-[10px] text-red-400 font-mono">Booked</span>'
      : (isSelected
          ? '<span class="text-[10px] text-blue-100 font-mono">Selected</span>'
          : '<span class="text-[10px] text-emerald-400 font-mono">Available</span>');

    return `<button type="button" class="${baseClass}" ${clickAttr}>
      <span class="flex items-center gap-1">${slot} ${checkBadge}</span>
      ${statusText}
    </button>`;
  }).join('');
}
window.updateTimeSlotAvailability = updateTimeSlotAvailability;

function selectAppointmentSlot(slot, btnEl) {
  selectedConsultSlot = slot;
  updateTimeSlotAvailability();
}
window.selectAppointmentSlot = selectAppointmentSlot;

function submitScheduledAppointment() {
  const dateInput = document.getElementById('apt-input-date');
  const catInput = document.getElementById('apt-input-category');
  const notesInput = document.getElementById('apt-input-notes');

  const dateVal = dateInput?.value;
  if (!dateVal) {
    alert('Please select an appointment date.');
    dateInput?.focus();
    return;
  }

  if (!selectedConsultSlot) {
    alert('Please select an available time slot.');
    return;
  }

  const session = getActiveSession();
  const studentNum = session?.studentNumber || '2023-01842-CM-0';
  const studentName = session?.studentName || 'Student Montalbano';
  const category = catInput?.value || 'Disciplinary Conciliation & Appeal';
  const notes = (notesInput?.value || '').trim();

  const refCode = 'APT-2026-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const createdStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newApt = {
    id: refCode,
    type: 'Face-to-Face',
    office: selectedConsultOffice,
    category: category,
    date: dateVal,
    slot: selectedConsultSlot,
    studentNumber: studentNum,
    studentName: studentName,
    notes: notes,
    status: 'Pending',
    created: createdStr
  };

  const allApts = getAppointments();
  allApts.unshift(newApt);
  saveAppointments(allApts);

  // Trigger Notifications & Audit Log
  addSystemNotification({
    targetRole: 'student',
    studentNumber: studentNum,
    title: 'Consultation Appointment Requested',
    message: `Appointment ${refCode} booked for ${dateVal} at ${selectedConsultSlot} (${selectedConsultOffice}). Awaiting Prefect confirmation.`,
    type: 'Appointment',
    targetId: refCode
  });

  addSystemNotification({
    targetRole: 'admin',
    studentNumber: null,
    title: 'New Consultation Booking',
    message: `${studentName} (${studentNum}) booked ${category} on ${dateVal} (${selectedConsultOffice}).`,
    type: 'Appointment',
    targetId: refCode
  });

  logAuditAction(
    'New Report Submitted',
    studentName,
    'Student Portal',
    refCode,
    `Scheduled face-to-face consultation (${category}, Office: ${selectedConsultOffice}, Date: ${dateVal}, Slot: ${selectedConsultSlot})`
  );

  showSafeTrackToast(
    'Appointment Booked',
    `Consultation request [${refCode}] submitted. OSAS Prefect will confirm availability.`,
    'success'
  );

  if (notesInput) notesInput.value = '';
  switchAppointmentMode('records');
  updateAppointmentBadges();
}
window.submitScheduledAppointment = submitScheduledAppointment;

function generateWalkInTicket() {
  const officeInput = document.getElementById('walkin-input-office');
  const concernInput = document.getElementById('walkin-input-concern');

  const office = officeInput?.value || 'OSAS Prefect Desk';
  const concern = concernInput?.value || 'Student Welfare & Urgent Inquiry';

  const session = getActiveSession();
  const studentNum = session?.studentNumber || '2023-01842-CM-0';
  const studentName = session?.studentName || 'Student Montalbano';

  const allApts = getAppointments();
  const walkinCount = allApts.filter((a) => a.type === 'Walk-In').length + 1;
  const ticketNum = 'W-' + String(walkinCount).padStart(2, '0');
  const ticketId = `WALK-IN #${ticketNum}`;

  const now = new Date();
  const createdStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newTicket = {
    id: ticketId,
    type: 'Walk-In',
    office: office,
    category: concern,
    date: new Date().toISOString().split('T')[0],
    slot: 'Immediate Walk-In',
    studentNumber: studentNum,
    studentName: studentName,
    notes: 'Walk-in ticket generated by student.',
    status: 'Waiting',
    created: createdStr,
    queueNumber: ticketNum
  };

  allApts.unshift(newTicket);
  saveAppointments(allApts);

  addSystemNotification({
    targetRole: 'student',
    studentNumber: studentNum,
    title: 'Walk-In Ticket Generated',
    message: `Queue Ticket ${ticketId} issued for ${office}. Please proceed to the waiting area.`,
    type: 'Queue Ticket',
    targetId: ticketId
  });

  addSystemNotification({
    targetRole: 'admin',
    studentNumber: null,
    title: 'Walk-In Student Arrived',
    message: `New Walk-In ticket ${ticketId} queued for ${office} (${concern}).`,
    type: 'Queue Ticket',
    targetId: ticketId
  });

  logAuditAction(
    'Walk-In Called',
    studentName,
    'Student Portal',
    ticketId,
    `Digital queue pass issued: ${ticketId} for ${office}`
  );

  showSafeTrackToast(
    'Ticket Issued',
    `Digital Pass ${ticketId} active. Estimated wait time ~12 minutes.`,
    'info'
  );

  renderWalkInTicketView();
  updateAppointmentBadges();
}
window.generateWalkInTicket = generateWalkInTicket;

function renderWalkInTicketView() {
  const session = getActiveSession();
  const studentNum = (session?.studentNumber || '').trim().toUpperCase();

  const allApts = getAppointments();
  const myTicket = allApts.find((a) => {
    return a.type === 'Walk-In' && (a.status === 'Waiting' || a.status === 'Serving') &&
      (!studentNum || studentNum === 'ANONYMOUS' || (a.studentNumber || '').trim().toUpperCase() === studentNum);
  });

  const card = document.getElementById('walkin-ticket-active-card');
  const nowServingEl = document.getElementById('walkin-now-serving');
  const ticketNumEl = document.getElementById('walkin-ticket-number');
  const ticketStatusEl = document.getElementById('walkin-ticket-status');
  const assignedOfficeEl = document.getElementById('walkin-assigned-office');
  const estimatedWaitEl = document.getElementById('walkin-estimated-wait');

  // Currently serving walk-in
  const currentlyServing = allApts.find((a) => a.type === 'Walk-In' && a.status === 'Serving');
  const nowServingText = currentlyServing ? currentlyServing.queueNumber || currentlyServing.id.replace('WALK-IN #', '') : '#W-02';
  if (nowServingEl) nowServingEl.textContent = '#' + nowServingText.replace('#', '');

  if (myTicket) {
    if (card) {
      card.classList.remove('hidden');
      card.style.display = 'block';
    }
    if (ticketNumEl) ticketNumEl.textContent = myTicket.id;
    if (ticketStatusEl) {
      ticketStatusEl.textContent = myTicket.status.toUpperCase();
      ticketStatusEl.className = myTicket.status === 'Serving' ?
        'px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse' :
        'px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40';
    }
    if (assignedOfficeEl) assignedOfficeEl.textContent = myTicket.office;
    if (estimatedWaitEl) estimatedWaitEl.textContent = myTicket.status === 'Serving' ? 'Now at Desk' : '~10-15 mins';
  } else {
    if (card) {
      card.classList.add('hidden');
      card.style.display = 'none';
    }
  }
}

function updateAppointmentBadges() {
  const session = getActiveSession();
  const studentNum = (session?.studentNumber || '').trim().toUpperCase();

  const allApts = getAppointments();
  const myApts = allApts.filter((a) => {
    return !studentNum || studentNum === 'ANONYMOUS' || (a.studentNumber || '').trim().toUpperCase() === studentNum;
  });

  const badgeCount = document.getElementById('badge-my-appointments-count');
  if (badgeCount) badgeCount.textContent = String(myApts.length);

  // Admin stats
  const statConfirmed = document.getElementById('stat-apt-confirmed');
  const statPending = document.getElementById('stat-apt-pending');
  const statCompleted = document.getElementById('stat-apt-completed');
  const queueCount = document.getElementById('admin-waiting-queue-count');
  const nowServingAdmin = document.getElementById('admin-now-serving-badge');

  const confirmedCount = allApts.filter((a) => a.status === 'Confirmed').length;
  const pendingCount = allApts.filter((a) => a.status === 'Pending').length;
  const completedCount = allApts.filter((a) => a.status === 'Completed').length;
  const waitingWalkins = allApts.filter((a) => a.type === 'Walk-In' && a.status === 'Waiting').length;
  const servingWalkin = allApts.find((a) => a.type === 'Walk-In' && a.status === 'Serving');

  if (statConfirmed) statConfirmed.textContent = String(confirmedCount);
  if (statPending) statPending.textContent = String(pendingCount);
  if (statCompleted) statCompleted.textContent = String(completedCount);
  if (queueCount) queueCount.textContent = String(waitingWalkins);
  if (nowServingAdmin) {
    const sId = servingWalkin ? (servingWalkin.queueNumber || servingWalkin.id.replace('WALK-IN ', '')) : '#W-02';
    nowServingAdmin.textContent = sId.startsWith('#') ? sId : `#${sId}`;
  }
}

function renderStudentAppointments() {
  const container = document.getElementById('student-appointments-list');
  if (!container) return;

  const session = getActiveSession();
  const studentNum = (session?.studentNumber || '').trim().toUpperCase();

  const allApts = getAppointments();
  const myApts = allApts.filter((a) => {
    return !studentNum || studentNum === 'ANONYMOUS' || (a.studentNumber || '').trim().toUpperCase() === studentNum;
  });

  updateAppointmentBadges();

  if (myApts.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 bg-[#070d1a] border border-[#1e293b] rounded-2xl text-slate-500">
        <div class="text-3xl mb-2">📅</div>
        <div class="text-xs font-semibold text-slate-400">No scheduled consultations or walk-in tickets.</div>
        <div class="text-[11px] text-slate-500 mt-1">Book a consultation above or generate a walk-in digital pass to consult with OSAS.</div>
      </div>
    `;
    return;
  }

  const statusStyles = {
    Confirmed: 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    Resolved: 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    Pending: 'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]',
    Serving: 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE] font-bold animate-pulse',
    Waiting: 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]',
    Completed: 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    Cancelled: 'bg-[#FFF1F2] text-[#9F1239] border border-[#FECDD3]'
  };

  container.innerHTML = myApts.map((apt) => {
    const isWalkIn = apt.type === 'Walk-In';
    return `
      <div class="p-4 rounded-2xl bg-white border border-[#E3E8EE] space-y-3 hover:border-slate-300 transition">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs font-bold text-[#533AFD]">${escapeHtml(apt.id)}</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${isWalkIn ? 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]' : 'bg-[#EEF3F8] text-[#475569] border border-[#E3E8EE]'}">${escapeHtml(apt.type)}</span>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${statusStyles[apt.status] || 'bg-[#EEF3F8] text-[#475569] border border-[#E3E8EE]'}">${escapeHtml(apt.status)}</span>
          </div>
          <span class="text-[11px] text-[#64748B] font-mono">${escapeHtml(apt.date)} • ${escapeHtml(apt.slot)}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          <div>
            <span class="text-[#64748B] text-[11px]">Office / Location:</span>
            <div class="text-[#0A2540] font-bold mt-0.5">🏢 ${escapeHtml(apt.office)}</div>
          </div>
          <div>
            <span class="text-[#64748B] text-[11px]">Nature of Consultation:</span>
            <div class="text-[#334155] mt-0.5">${escapeHtml(apt.category)}</div>
          </div>
        </div>

        ${apt.notes ? `<div class="text-[11px] text-[#334155] bg-[#EEF3F8] p-2.5 rounded-xl border border-[#E3E8EE]"><strong>Notes:</strong> ${escapeHtml(apt.notes)}</div>` : ''}

        <div class="flex items-center justify-between pt-2 border-t border-[#E3E8EE] text-[11px] text-[#64748B]">
          <span>Booked on: ${escapeHtml(apt.created || 'Recent')}</span>
          ${apt.status === 'Pending' || apt.status === 'Waiting' ? `
            <button onclick="cancelStudentAppointment('${escapeHtml(apt.id)}')"
              class="text-[#9F1239] hover:underline font-semibold cursor-pointer">
              Cancel Booking &times;
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}
window.renderStudentAppointments = renderStudentAppointments;

function cancelStudentAppointment(aptId) {
  if (!confirm(`Are you sure you want to cancel appointment ${aptId}?`)) return;

  const allApts = getAppointments();
  const apt = allApts.find((a) => a.id === aptId);
  if (apt) {
    apt.status = 'Cancelled';
    saveAppointments(allApts);

    showSafeTrackToast('Appointment Cancelled', `Booking ${aptId} has been cancelled.`, 'info');
    renderStudentAppointments();
    updateAppointmentBadges();

    logAuditAction(
      'Status Updated',
      'Student Portal',
      'Student',
      aptId,
      `Student cancelled consultation appointment ${aptId}`
    );
  }
}
window.cancelStudentAppointment = cancelStudentAppointment;

function renderAdminAppointments() {
  const tbody = document.getElementById('admin-appointments-table-body');
  if (!tbody) return;

  const filterType = document.getElementById('admin-filter-apt-type')?.value || 'ALL';
  const filterStatus = document.getElementById('admin-filter-apt-status')?.value || 'ALL';

  const allApts = getAppointments();
  const filtered = allApts.filter((a) => {
    const matchType = filterType === 'ALL' || a.type === filterType;
    const matchStatus = filterStatus === 'ALL' || a.status === filterStatus;
    return matchType && matchStatus;
  });

  updateAppointmentBadges();

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-8 text-center text-slate-500">No appointments or tickets matching the selected filters.</td>
      </tr>
    `;
    return;
  }

  const statusStyles = {
    Confirmed: 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    Resolved: 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    Pending: 'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]',
    Serving: 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE] font-bold animate-pulse',
    Waiting: 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]',
    Completed: 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    Cancelled: 'bg-[#FFF1F2] text-[#9F1239] border border-[#FECDD3]'
  };

  tbody.innerHTML = filtered.map((a) => {
    const isWalkIn = a.type === 'Walk-In';
    const canConfirm = a.status === 'Pending';
    const canComplete = a.status === 'Confirmed' || a.status === 'Serving';

    return `
      <tr class="hover:bg-white/5 transition border-b border-[#16233b]">
        <td class="py-3.5 px-3">
          <div class="font-mono text-xs font-bold text-blue-400 tabular-nums whitespace-nowrap">${escapeHtml(a.id)}</div>
          <span class="text-[9px] px-1.5 py-0.5 rounded font-semibold ${isWalkIn ? 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]' : 'bg-slate-800 text-[#CBD5E1] border border-slate-700'}">${escapeHtml(a.type)}</span>
        </td>
        <td class="py-3.5 px-3">
          <div class="text-xs font-bold text-[#F8FAFC]">${escapeHtml(a.studentName)}</div>
          <div class="font-mono text-[10px] text-[#94A3B8] tabular-nums">${escapeHtml(a.studentNumber)}</div>
        </td>
        <td class="py-3.5 px-3">
          <div class="text-xs text-[#CBD5E1] font-medium">${escapeHtml(a.category)}</div>
          <div class="text-[10px] text-[#94A3B8]">🏢 ${escapeHtml(a.office)}</div>
        </td>
        <td class="py-3.5 px-3 font-mono text-[11px] text-[#CBD5E1] whitespace-nowrap tabular-nums">
          <div class="font-semibold text-[#F8FAFC]">${escapeHtml(a.date)}</div>
          <div class="text-[10px] text-[#94A3B8]">${escapeHtml(a.slot)}</div>
        </td>
        <td class="py-3.5 px-3 text-center">
          <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap ${statusStyles[a.status] || 'bg-slate-800 text-slate-300 border border-slate-700'}">${escapeHtml(a.status)}</span>
        </td>
        <td class="py-3.5 px-3 text-[11px] text-[#94A3B8] max-w-xs truncate" title="${escapeHtml(a.notes || '')}">
          ${escapeHtml(a.notes || '—')}
        </td>
        <td class="py-3.5 px-3 text-right whitespace-nowrap">
          <div class="flex items-center justify-end gap-1.5">
            ${canConfirm ? `
              <button onclick="adminConfirmAppointment('${escapeHtml(a.id)}')"
                class="px-2.5 py-1 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white text-[11px] font-semibold cursor-pointer shadow-xs transition">
                Confirm
              </button>
            ` : ''}
            ${canComplete ? `
              <button onclick="adminMarkCompletedAppointment('${escapeHtml(a.id)}')"
                class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold cursor-pointer shadow-xs transition">
                Complete
              </button>
            ` : ''}
            ${a.status !== 'Cancelled' && a.status !== 'Completed' ? `
              <button onclick="adminRescheduleAppointment('${escapeHtml(a.id)}')"
                class="px-2 py-1 rounded-lg bg-[#070d1a] border border-[#1e293b] hover:bg-white/10 text-slate-300 text-[11px] font-semibold cursor-pointer transition">
                Reschedule
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}
window.renderAdminAppointments = renderAdminAppointments;

function adminConfirmAppointment(aptId) {
  const allApts = getAppointments();
  const apt = allApts.find((a) => a.id === aptId);
  if (!apt) return;

  apt.status = 'Confirmed';
  saveAppointments(allApts);

  addSystemNotification({
    targetRole: 'student',
    studentNumber: apt.studentNumber,
    title: 'Consultation Confirmed',
    message: `Your appointment ${apt.id} on ${apt.date} at ${apt.slot} has been confirmed by the Prefect Desk.`,
    type: 'Appointment',
    targetId: apt.id
  });

  logAuditAction(
    'Appointment Approved',
    'Prefect Desk (Admin)',
    'Administrator',
    apt.id,
    `Prefect confirmed appointment for ${apt.studentName} (${apt.category})`
  );

  showSafeTrackToast('Appointment Confirmed', `Appointment ${apt.id} marked as Confirmed. Student notified.`, 'success');
  renderAdminAppointments();
}
window.adminConfirmAppointment = adminConfirmAppointment;

function adminMarkCompletedAppointment(aptId) {
  const allApts = getAppointments();
  const apt = allApts.find((a) => a.id === aptId);
  if (!apt) return;

  apt.status = 'Completed';
  saveAppointments(allApts);

  addSystemNotification({
    targetRole: 'student',
    studentNumber: apt.studentNumber,
    title: 'Consultation Completed',
    message: `Consultation session ${apt.id} with ${apt.office} has concluded.`,
    type: 'Appointment',
    targetId: apt.id
  });

  logAuditAction(
    'Status Updated',
    'Prefect Desk (Admin)',
    'Administrator',
    apt.id,
    `Consultation ${apt.id} marked as Completed`
  );

  showSafeTrackToast('Consultation Completed', `Record ${apt.id} updated to Completed.`, 'info');
  renderAdminAppointments();
}
window.adminMarkCompletedAppointment = adminMarkCompletedAppointment;

function adminRescheduleAppointment(aptId) {
  const allApts = getAppointments();
  const apt = allApts.find((a) => a.id === aptId);
  if (!apt) return;

  const newDate = prompt(`Enter new consultation date for ${apt.id} (YYYY-MM-DD):`, apt.date);
  if (!newDate) return;

  const newSlot = prompt(`Enter new time slot (e.g. 10:00 AM - 10:45 AM):`, apt.slot);
  if (!newSlot) return;

  apt.date = newDate;
  apt.slot = newSlot;
  apt.status = 'Confirmed';
  saveAppointments(allApts);

  addSystemNotification({
    targetRole: 'student',
    studentNumber: apt.studentNumber,
    title: 'Appointment Rescheduled',
    message: `Your appointment ${apt.id} was rescheduled to ${newDate} at ${newSlot}.`,
    type: 'Appointment',
    targetId: apt.id
  });

  logAuditAction(
    'Status Updated',
    'Prefect Desk (Admin)',
    'Administrator',
    apt.id,
    `Rescheduled to ${newDate} (${newSlot})`
  );

  showSafeTrackToast('Appointment Rescheduled', `Updated to ${newDate} (${newSlot}). Student notified.`, 'info');
  renderAdminAppointments();
}
window.adminRescheduleAppointment = adminRescheduleAppointment;

function adminCallNextWalkIn() {
  const allApts = getAppointments();

  // Mark current serving as completed
  const currentServing = allApts.find((a) => a.type === 'Walk-In' && a.status === 'Serving');
  if (currentServing) {
    currentServing.status = 'Completed';
  }

  // Find next waiting walk-in ticket
  const nextWaiting = allApts
    .filter((a) => a.type === 'Walk-In' && a.status === 'Waiting')
    .sort((a, b) => (a.created || '').localeCompare(b.created || ''))[0];

  if (!nextWaiting) {
    saveAppointments(allApts);
    showSafeTrackToast('Queue Empty', 'No more walk-in students waiting in the queue.', 'info');
    renderAdminAppointments();
    return;
  }

  nextWaiting.status = 'Serving';
  saveAppointments(allApts);

  addSystemNotification({
    targetRole: 'student',
    studentNumber: nextWaiting.studentNumber,
    title: '🔔 Your Ticket is Being Called!',
    message: `Ticket ${nextWaiting.id} is now being served at ${nextWaiting.office}. Please enter immediately.`,
    type: 'Walk-In Call',
    targetId: nextWaiting.id
  });

  logAuditAction(
    'Walk-In Called',
    'Prefect Desk (Admin)',
    'Administrator',
    nextWaiting.id,
    `Called next walk-in ticket ${nextWaiting.id} to ${nextWaiting.office}`
  );

  showSafeTrackToast(
    'Next Walk-In Called',
    `Now Serving: ${nextWaiting.id} (${nextWaiting.studentName}). Notification sent.`,
    'warning'
  );

  renderAdminAppointments();
}
window.adminCallNextWalkIn = adminCallNextWalkIn;

function adminResetQueue() {
  if (!confirm('Are you sure you want to reset the walk-in queue for the day? All remaining waiting tickets will be marked Completed.')) return;

  const allApts = getAppointments();
  allApts.forEach((a) => {
    if (a.type === 'Walk-In' && (a.status === 'Waiting' || a.status === 'Serving')) {
      a.status = 'Completed';
    }
  });
  saveAppointments(allApts);

  logAuditAction(
    'Status Updated',
    'Prefect Desk (Admin)',
    'Administrator',
    'QUEUE-RESET',
    'Daily walk-in queue cleared and reset'
  );

  showSafeTrackToast('Queue Reset', 'Walk-in queue has been cleared for the day.', 'info');
  renderAdminAppointments();
}
window.adminResetQueue = adminResetQueue;


function bootSafeTrackApp() {
  // Setup Role Switcher
  const toggleStudent = document.getElementById('toggle-role-student');
  const toggleAdmin = document.getElementById('toggle-role-admin');
  const formStudent = document.getElementById('form-student-login');
  const formAdmin = document.getElementById('form-admin-login');

  function setAuthRole(role) {
    document.getElementById('admin-login-error')?.classList.add('hidden');
    if (role === 'student') {
      toggleStudent?.classList.add('active', 'role-active', 'bg-[#2563eb]', 'text-white', 'shadow-sm');
      toggleStudent?.classList.remove('text-slate-400', 'hover:text-white', 'bg-transparent');
      toggleAdmin?.classList.remove('active', 'role-active', 'bg-[#2563eb]', 'text-white', 'shadow-sm');
      toggleAdmin?.classList.add('text-slate-400', 'hover:text-white', 'bg-transparent');
      formStudent?.classList.remove('hidden');
      formAdmin?.classList.add('hidden');
    } else {
      toggleAdmin?.classList.add('active', 'role-active', 'bg-[#2563eb]', 'text-white', 'shadow-sm');
      toggleAdmin?.classList.remove('text-slate-400', 'hover:text-white', 'bg-transparent');
      toggleStudent?.classList.remove('active', 'role-active', 'bg-[#2563eb]', 'text-white', 'shadow-sm');
      toggleStudent?.classList.add('text-slate-400', 'hover:text-white', 'bg-transparent');
      formAdmin?.classList.remove('hidden');
      formStudent?.classList.add('hidden');
    }
  }
  window.setAuthRole = setAuthRole;

  toggleStudent?.addEventListener('click', () => setAuthRole('student'));
  toggleAdmin?.addEventListener('click', () => setAuthRole('admin'));

  // Anonymous Direct Bypass Button
  document.getElementById('btn-anonymous-bypass')?.addEventListener('click', () => {
    const session = {
      token: 'cdm_auth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10),
      role: 'Student Portal',
      roleType: 'student',
      user: 'ANONYMOUS',
      studentNumber: 'ANONYMOUS',
      studentName: 'Anonymous Reporter',
      loginTimestamp: Date.now(),
      loginTime: new Date().toISOString()
    };
    setActiveSession(session);
    sessionStorage.setItem(STORAGE_KEY_ACTIVE_TAB, 'form');
    window.location.replace('./dashboard.html');
  });

  // Demo Fill Helpers
  document.getElementById('auth-demo-action')?.addEventListener('click', fillAuthDemo);
  document.getElementById('btn-preset-student-demo')?.addEventListener('click', fillAuthDemo);

  document.getElementById('btn-preset-admin-demo')?.addEventListener('click', () => {
    const userInput = document.getElementById('input-admin-auth-user');
    const passInput = document.getElementById('input-admin-auth-pass');
    if (userInput) userInput.value = 'prefect@cdm.edu.ph';
    if (passInput) passInput.value = 'cdm_admin_2024';
    document.getElementById('admin-login-error')?.classList.add('hidden');
  });

  document.getElementById('btn-quick-admin-login')?.addEventListener('click', () => {
    const userInput = document.getElementById('input-admin-auth-user');
    const passInput = document.getElementById('input-admin-auth-pass');
    if (userInput) userInput.value = 'prefect@cdm.edu.ph';
    if (passInput) passInput.value = 'cdm_admin_2024';
    executeAdminLogin('prefect@cdm.edu.ph', 'cdm_admin_2024');
  });

  // Navigation Drawer Wiring
  document.getElementById('btn-hamburger-student')?.addEventListener('click', () => toggleNavDrawer(true));
  document.getElementById('btn-hamburger-admin')?.addEventListener('click', () => toggleNavDrawer(true));
  document.getElementById('btn-close-drawer')?.addEventListener('click', () => toggleNavDrawer(false));
  document.getElementById('drawer-backdrop')?.addEventListener('click', () => toggleNavDrawer(false));

  // Initialize App Theme (Dark Mode default / persisted preference)
  const savedAppTheme = localStorage.getItem('safetrack_app_theme') || localStorage.getItem('safetrack_chat_theme') || 'dark';
  setAppTheme(savedAppTheme);

  // Drawer Theme Buttons Wiring
  document.getElementById('drawer-theme-btn-light')?.addEventListener('click', () => setAppTheme('light'));
  document.getElementById('drawer-theme-btn-dark')?.addEventListener('click', () => setAppTheme('dark'));

  document.getElementById('btn-drawer-logout')?.addEventListener('click', handleLogout);

  // Logout Buttons
  document.getElementById('btn-student-logout')?.addEventListener('click', handleLogout);
  document.getElementById('btn-admin-logout')?.addEventListener('click', handleLogout);

  // Policy Modal Wiring
  document.getElementById('btn-close-policy-modal')?.addEventListener('click', closePolicyModal);
  document.getElementById('btn-policy-modal-ok')?.addEventListener('click', closePolicyModal);
  document.getElementById('modal-policy')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-policy')) closePolicyModal();
  });

  // Certificate Modal Wiring
  document.getElementById('btn-close-cert')?.addEventListener('click', closeGoodMoralCertificate);
  document.getElementById('modal-good-moral-cert')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-good-moral-cert')) closeGoodMoralCertificate();
  });

  document.getElementById('btn-policy-handbook')?.addEventListener('click', () => openPolicyModal('handbook'));
  document.getElementById('btn-policy-antibullying')?.addEventListener('click', () => openPolicyModal('antibullying'));
  document.getElementById('btn-policy-cgcc')?.addEventListener('click', () => openPolicyModal('cgcc'));

  // Student Tab Click Listeners
  document.getElementById('btn-back-home-student')?.addEventListener('click', () => switchStudentTab('home'));
  document.getElementById('btn-back-home-admin')?.addEventListener('click', () => switchAdminTab('home'));
  document.getElementById('student-tab-home')?.addEventListener('click', () => switchStudentTab('home'));
  document.getElementById('student-tab-form')?.addEventListener('click', () => switchStudentTab('form'));
  document.getElementById('student-tab-tickets')?.addEventListener('click', () => switchStudentTab('tickets'));
  document.getElementById('student-tab-clearance')?.addEventListener('click', () => switchStudentTab('clearance'));
  document.getElementById('student-tab-appointments')?.addEventListener('click', () => switchStudentTab('appointments'));
  document.getElementById('student-tab-messages')?.addEventListener('click', () => switchStudentTab('messages'));

  // Admin Tab Click Listeners
  document.getElementById('admin-tab-home')?.addEventListener('click', () => switchAdminTab('home'));
  document.getElementById('admin-tab-registry')?.addEventListener('click', () => switchAdminTab('registry'));
  document.getElementById('admin-tab-clearance')?.addEventListener('click', () => switchAdminTab('clearance'));
  document.getElementById('admin-tab-appointments')?.addEventListener('click', () => switchAdminTab('appointments'));
  document.getElementById('admin-tab-messages')?.addEventListener('click', () => switchAdminTab('messages'));

  // HCI Usability Modals & Triggers Wiring
  document.getElementById('btn-quick-help-nav')?.addEventListener('click', () => openQuickHelpModal());
  document.getElementById('btn-quick-help-fab')?.addEventListener('click', () => openQuickHelpModal());
  document.getElementById('btn-audit-log-admin')?.addEventListener('click', () => openAuditLogModal());

  // Initialize HCI Seed Data & Badges
  ensureSeedStorage(STORAGE_KEY_QUICK_HELP, INITIAL_QUICK_HELP);
  ensureSeedStorage(STORAGE_KEY_NOTIFICATIONS, INITIAL_NOTIFICATIONS);
  ensureSeedStorage(STORAGE_KEY_AUDIT_LOGS, INITIAL_AUDIT_LOGS);
  ensureSeedStorage(STORAGE_KEY_APPOINTMENTS, INITIAL_APPOINTMENTS);
  updateNotificationBadges();
  updateAppointmentBadges();
  updateQuickHelpBadge();

  // Student Complaint Form Submit & Identity Mode Logic
  const formStudentComplaint = document.getElementById('student-complaint-form');
  const checkStudentAnon = document.getElementById('student-check-anonymous');
  const wrapperStudentComplainant = document.getElementById('student-complainant-wrapper');
  const bannerStudentSuccess = document.getElementById('student-form-success');
  const radioModeAnon = document.getElementById('mode-anonymous');
  const radioModeVerified = document.getElementById('mode-verified');
  const cardModeAnon = document.getElementById('card-mode-anonymous');
  const cardModeVerified = document.getElementById('card-mode-verified');

  function initDateTimeInput() {
    const dateInput = document.getElementById('student-input-date');
    if (dateInput && !dateInput.value) {
      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000;
      const localISOTime = (new Date(now.getTime() - offset)).toISOString().slice(0, 16);
      dateInput.value = localISOTime;
    }
  }

  function updateIdentityModeUI(isAnon) {
    if (isAnon) {
      cardModeAnon?.classList.add('border-2', 'border-blue-500', 'bg-blue-50/50', 'shadow-xs');
      cardModeAnon?.classList.remove('border', 'border-slate-200', 'bg-white', 'border-[#1e293b]', 'bg-[#0c1425]', 'border-[#047857]', 'bg-[#f0fdf4]');
      cardModeVerified?.classList.remove('border-2', 'border-blue-500', 'bg-blue-50/50', 'shadow-xs', 'border-[#047857]', 'bg-[#f0fdf4]');
      cardModeVerified?.classList.add('border', 'border-slate-200', 'bg-white');
      wrapperStudentComplainant?.classList.add('hidden');
      if (checkStudentAnon) checkStudentAnon.checked = true;
    } else {
      cardModeVerified?.classList.add('border-2', 'border-blue-500', 'bg-blue-50/50', 'shadow-xs');
      cardModeVerified?.classList.remove('border', 'border-slate-200', 'bg-white', 'border-[#1e293b]', 'bg-[#0c1425]', 'border-[#047857]', 'bg-[#f0fdf4]');
      cardModeAnon?.classList.remove('border-2', 'border-blue-500', 'bg-blue-50/50', 'shadow-xs', 'border-[#047857]', 'bg-[#f0fdf4]');
      cardModeAnon?.classList.add('border', 'border-slate-200', 'bg-white');
      wrapperStudentComplainant?.classList.remove('hidden');
      if (checkStudentAnon) checkStudentAnon.checked = false;
    }
  }

  radioModeAnon?.addEventListener('change', () => updateIdentityModeUI(true));
  radioModeVerified?.addEventListener('change', () => updateIdentityModeUI(false));

  document.getElementById('btn-clear-student-form')?.addEventListener('click', () => {
    formStudentComplaint?.reset();
    if (radioModeAnon) radioModeAnon.checked = true;
    updateIdentityModeUI(true);
    setTimeout(initDateTimeInput, 50);
  });

  checkStudentAnon?.addEventListener('change', () => {
    updateIdentityModeUI(checkStudentAnon.checked);
  });

  initDateTimeInput();

  formStudentComplaint?.addEventListener('submit', (e) => {
    e.preventDefault();

    const classification = document.getElementById('student-select-classification').value;
    const isAnonymousToPublic = checkStudentAnon ? checkStudentAnon.checked : false;
    const complainantInput = document.getElementById('student-input-complainant');
    const complainant = isAnonymousToPublic ? 'Confidential OSA Protected Report' : (complainantInput?.value.trim() || 'Undisclosed Complainant');

    const studentNumber = document.getElementById('student-input-student-number').value.trim();
    const studentName = document.getElementById('student-input-student-name').value.trim();
    const institute = document.getElementById('student-select-institute').value;
    const rawDate = document.getElementById('student-input-date').value;
    const date = rawDate ? rawDate.replace('T', ' ') : new Date().toISOString().replace('T', ' ').slice(0, 16);
    const location = document.getElementById('student-input-location').value.trim();
    const guidanceEndorsed = document.getElementById('student-check-guidance').checked;
    const description = document.getElementById('student-textarea-description').value.trim();

    const allCases = store.getAll();
    const nextSeq = allCases.length + 1;
    const newId = `CDM-2024-${String(nextSeq).padStart(3, '0')}`;

    const maskedAlias = isAnonymousToPublic ? `Anonymous Montalbano #${Math.floor(1000 + Math.random() * 9000)}` : '';
    const actualStudentNumber = studentNumber;
    const actualStudentName = studentName;

    const newCase = {
      id: newId,
      studentNumber: isAnonymousToPublic ? maskedAlias : studentNumber,
      studentName: isAnonymousToPublic ? maskedAlias : studentName,
      institute,
      classification,
      date,
      location,
      complainant,
      isAnonymous: isAnonymousToPublic,
      isAnonymousToPublic: isAnonymousToPublic,
      maskedAlias: maskedAlias,
      actualStudentNumber: actualStudentNumber,
      actualStudentName: actualStudentName,
      guidanceEndorsed,
      status: 'Pending',
      sanctionNotes: isAnonymousToPublic
        ? `[CONFIDENTIAL REPORT] Identity securely verified and confirmed by OSA: ${actualStudentName} (${actualStudentNumber}). Masked from public viewing.`
        : 'Submitted via SafeTrack Student Portal. Queued for Prefect of Discipline docket review.'
    };

    store.addCase(newCase, true);

    // Auto-create Instagram DM thread in safetrack_messages
    store.createThread({
      threadId: newId,
      title: `${classification} Consultation`,
      docket: newId,
      participant: isAnonymousToPublic ? `${maskedAlias} (${actualStudentName})` : actualStudentName,
      maskedAlias: maskedAlias || actualStudentName,
      studentNumber: actualStudentNumber,
      studentName: actualStudentName,
      institute: institute,
      isAnonymous: isAnonymousToPublic,
      lastUpdate: 'Just now',
      unread: true,
      messages: [
        {
          id: 'msg-' + Date.now(),
          sender: 'student',
          senderName: isAnonymousToPublic ? maskedAlias : actualStudentName,
          text: `[Incident Filed: ${classification}] ${description.slice(0, 160)}${description.length > 160 ? '...' : ''} (Location: ${location})`,
          timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
          date: 'Today'
        },
        {
          id: 'msg-' + (Date.now() + 1),
          sender: 'osa',
          senderName: 'Office of Student Affairs (Prefect)',
          text: `Hello ${isAnonymousToPublic ? 'Montalbano' : actualStudentName}. Your confidential report has been officially logged under docket ${newId}. A counselor or hearing officer is reviewing your submission. You can message here anytime.`,
          timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
          date: 'Today'
        }
      ]
    });

    formStudentComplaint.reset();
    if (radioModeAnon) radioModeAnon.checked = true;
    updateIdentityModeUI(true);

    if (bannerStudentSuccess) {
      bannerStudentSuccess.innerHTML = `
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="font-bold text-sm text-emerald-400">Disciplinary Docket Created:</span>
            <span class="text-sm text-slate-300">Ticket <strong class="text-white font-mono">${escapeHtml(newId)}</strong> has been logged with the Prefect of Discipline.</span>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-shortcut-view-ticket" class="bg-[#070d1a] hover:bg-[#111c33] border border-[#1e293b] text-slate-200 hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition">
              View My Tickets
            </button>
            <button id="btn-shortcut-view-chat" class="bg-[#2563eb] hover:bg-blue-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition shadow-[0_4px_16px_rgba(37,99,235,0.35)]">
              Open Consultation Chat
            </button>
          </div>
        </div>
      `;
      bannerStudentSuccess.classList.remove('hidden');

      document.getElementById('btn-shortcut-view-ticket')?.addEventListener('click', () => {
        bannerStudentSuccess.classList.add('hidden');
        switchStudentTab('tickets');
      });

      document.getElementById('btn-shortcut-view-chat')?.addEventListener('click', () => {
        bannerStudentSuccess.classList.add('hidden');
        activeThreadId = newId;
        switchStudentTab('messages');
      });
    }

    renderStudentTickets();
  });

  // Admin Case Registry Filters
  document.getElementById('input-search')?.addEventListener('input', renderRegistryTable);
  document.getElementById('filter-institute')?.addEventListener('change', renderRegistryTable);
  document.getElementById('filter-status')?.addEventListener('change', renderRegistryTable);

  document.getElementById('btn-reset-filter')?.addEventListener('click', () => {
    const sInput = document.getElementById('input-search');
    const sInst = document.getElementById('filter-institute');
    const sStat = document.getElementById('filter-status');
    if (sInput) sInput.value = '';
    if (sInst) sInst.value = 'ALL';
    if (sStat) sStat.value = 'ALL';
    renderRegistryTable();
  });

  // Close case action dropdown menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.action-menu-btn') && !e.target.closest('.case-dropdown-menu')) {
      closeAllCaseActionMenus();
    }
  });

  document.getElementById('registry-table-body')?.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    const id = btn.getAttribute('data-id');

    if (action === 'inspect') {
      openInspectorModal(id);
    } else if (action === 'toggle') {
      store.toggleStatus(id);
      renderRegistryTable();
      renderAdminKPIs();
    }
  });

  // Admin Case Inspector Modal Close
  document.getElementById('btn-close-modal')?.addEventListener('click', closeInspector);
  document.getElementById('modal-case-viewer')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-case-viewer')) closeInspector();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeInspector();
      document.getElementById('modal-admin-docket')?.classList.add('hidden');
    }
  });

  // Admin Quick Docket Modal ("+ New Incident")
  const modalAdminDocket = document.getElementById('modal-admin-docket');
  const btnOpenAdminDocket = document.getElementById('btn-open-admin-docket');
  const btnCloseAdminDocket = document.getElementById('btn-close-admin-docket');
  const formAdminDocket = document.getElementById('admin-docket-form');

  btnOpenAdminDocket?.addEventListener('click', () => {
    modalAdminDocket?.classList.remove('hidden');
  });

  btnCloseAdminDocket?.addEventListener('click', () => {
    modalAdminDocket?.classList.add('hidden');
  });

  modalAdminDocket?.addEventListener('click', (e) => {
    if (e.target === modalAdminDocket) modalAdminDocket.classList.add('hidden');
  });

  formAdminDocket?.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentNumber = document.getElementById('docket-student-number').value.trim();
    const studentName = document.getElementById('docket-student-name').value.trim();
    const institute = document.getElementById('docket-institute').value;
    const classification = document.getElementById('docket-classification').value;
    const date = document.getElementById('docket-date').value || new Date().toISOString().split('T')[0];
    const location = document.getElementById('docket-location').value.trim();
    const guidanceEndorsed = document.getElementById('docket-guidance').checked;
    const description = document.getElementById('docket-description').value.trim();
    const sanctionNotes = document.getElementById('docket-sanctions').value.trim() || 'Awaiting initial board hearing.';

    const allCases = store.getAll();
    const nextSeq = allCases.length + 1;
    const newId = `CDM-2024-${String(nextSeq).padStart(3, '0')}`;

    const newCase = {
      id: newId,
      studentNumber,
      studentName,
      institute,
      classification,
      date,
      location,
      complainant: 'Prefect of Discipline / OSA Intake',
      isAnonymous: false,
      isAnonymousToPublic: false,
      guidanceEndorsed,
      status: 'Pending',
      sanctionNotes
    };

    store.addCase(newCase, false);
    formAdminDocket.reset();
    modalAdminDocket?.classList.add('hidden');

    renderAdminKPIs();
    renderRegistryTable();
  });

  // Admin Clearance Verification Tool
  document.getElementById('btn-verify-clearance')?.addEventListener('click', () => {
    const inputVal = document.getElementById('input-verify-id')?.value;
    performClearanceVerification(inputVal);
  });

  document.querySelectorAll('[data-test-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-test-id');
      const input = document.getElementById('input-verify-id');
      if (input) input.value = id;
      performClearanceVerification(id);
    });
  });

  // Reset Sample Records
  document.getElementById('btn-reset-data')?.addEventListener('click', () => {
    if (confirm('Reset SafeTrack database to default Colegio de Montalban test records?')) {
      store.resetToDefault();
      renderAdminKPIs();
      renderRegistryTable();
      renderStudentTickets();
      document.getElementById('clearance-result')?.classList.add('hidden');
      alert('SafeTrack records restored to initial test dataset.');
    }
  });

  // Network online/offline status
  function updateNetworkStatus() {
    const badgeAdmin = document.getElementById('network-badge-admin');
    const badgeStudent = document.getElementById('network-badge-student');

    const content = navigator.onLine
      ? `<span class="network-pwa-badge"><span class="network-pwa-dot"></span>Online (PWA Ready)</span>`
      : `<span class="network-offline-badge"><span class="network-offline-dot"></span>Offline Mode (Cached)</span>`;

    if (badgeAdmin) badgeAdmin.innerHTML = content;
    if (badgeStudent) badgeStudent.innerHTML = content;
  }

  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  updateNetworkStatus();

  // Synchronous Routing & Route Guard Initialization
  resolveCurrentRoute();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootSafeTrackApp);
} else {
  bootSafeTrackApp();
}

// Rule C: Disable Back-Forward Cache (bfcache) & re-verify storage token on every history traversal
window.addEventListener('pageshow', (event) => {
  const isLogin = isLoginRoute();
  const storedSession = getActiveSession();

  if (isLogin) {
    clearActiveSession();
    return;
  }

  if (isDashboardRoute()) {
    if (!storedSession || !storedSession.token) {
      clearActiveSession();
      window.location.replace('./index.html');
      return;
    }
  }
});

window.addEventListener('popstate', (event) => {
  const isLogin = isLoginRoute();
  const storedSession = getActiveSession();

  if (isLogin) {
    clearActiveSession();
    showScreen('screen-login');
    setAuthRole('student');
    return;
  }

  if (isDashboardRoute()) {
    if (!storedSession || !storedSession.token) {
      clearActiveSession();
      window.location.replace('./index.html');
      return;
    }
    resolveCurrentRoute();
  }
});

window.addEventListener('hashchange', () => {
  resolveCurrentRoute();
});

// PWA Service Worker Registration & Live Cache Invalidation
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js?v=20261110-v26-floating-desk')
      .then((reg) => {
        reg.update();
        console.log('SafeTrack Service Worker active:', reg.scope);
      })
      .catch((err) => {
        console.warn('SafeTrack Service Worker bypassed:', err);
      });
  });
}
