export const eventsData = [
    {
        id: 'vibe-coding',
        stageNumber: 1,
        title: 'VIBE CODING',
        description: 'Code freely to the rhythm of the retro beats. Show your flow state.',
        color: 'pink',
        icon: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200&h=200&fit=crop',
        qrCode: '/qrcodes/Vibe Coding.jpg',
        fullDescription: 'An AI-assisted hackathon! Build a full-stack web app from an on-the-spot problem statement. You can use Conversational AI (ChatGPT/Gemini) for guidance, but direct code-editing plugins (like Cursor/Copilot) are prohibited. Test your prompt-engineering and engineering flow.',
        rules: [
            'Teams must consist of 1-2 members.',
            'Only one laptop is allowed per team.',
            'No external help is permitted during the build phase.',
            'Problem statement will be provided on spot along with the description of the minimum functionalities.',
            'Task: Build a full-stack web application (Frontend + Backend) based on a selected topic.',
            'Conversational Al tools (e.g., ChatGPT, Gemini etc.) may be used for reference and guidance only. However, Al tools that directly generate or edit code inside the development environment (such as Cursor Al, Lovable, Copilot, etc.) are not allowed.',
            'Prohibited to Use pre-built GitHub projects.',
            'Prohibited to Use code written before the event.',
            'Prohibited to copy full applications directly from tutorials.',
            'Prohibited to Share code between competing teams.',
            'Elimination Rounds if Any: No.'
        ],
        coordinators: ['Vijeesh V - 9061316079'],
        judging: [
            'Alignment with the problem statement.',
            'Quality of the user interface and user experience design.',
            'Prompt quality-including clarity, intent, structure, and iterative improvement.',
            'Effective use of Al tools to generate code and solve problems.',
            'Clarity and quality of the 5-minute demo.',
            'Violation of rules, plagiarism, or unethical conduct may result in immediate disqualification'
        ],
        prize: ['1st Prize - ₹2,500', '2nd Prize - ₹1,500'],
        fee: '₹100 Per Person',
        date: '18 MARCH',
        time: '10:00 AM',
        isTeamEvent: true
    },
    {
        id: 'treasure-hunt',
        stageNumber: 2,
        title: 'TREASURE HUNT',
        description: 'Follow the clues, decode the ciphers, find the legendary loot.',
        color: 'yellow',
        points: '1500 PT',
        icon: './assets/treasurehunt.jpg',
        qrCode: '/qrcodes/Treasure Hunt.png',
        fullDescription: 'Embark on a campus-wide quest to find the ultimate hidden treasure. You will need sharp wits, teamwork, and an eye for cryptic details. Solve digital riddles, decode QR ciphers hidden around the venue, and race against time to claim the prize.',
        rules: [
            'Teams must consist of 2-4 members.',
            'Smartphones are allowed for scanning clues.',
            'Damaging property while searching for clues leads to elimination.',
            'The first team to reach the final location wins.'
        ],
        coordinators: ['Rahul (Dept. of ECE) - 9207284859', 'Priya (Dept. of Mech)'],
        judging: [
            'Time taken to finish the hunt',
            'Deductions for hints requested',
            'No team penalties incurred along the way'
        ],
        prize: ['1st Prize - ₹7,500', 'Mystery Gadget For MVP'],
        fee: '₹150 Per Team',
        date: '18 MARCH',
        time: '02:00 PM',
        isTeamEvent: true
    },
    {
        id: 'computer-quiz',
        stageNumber: 3,
        title: 'COMPUTER QUIZ',
        description: 'Test your tech trivia. Can you beat the high score?',
        color: 'green',
        points: '500 PT',
        icon: './assets/computerquiz.jpg',
        qrCode: '/qrcodes/Computer Quiz.png',
        fullDescription: 'Are you a walking encyclopedia of tech history, modern computing, and internet culture? Test your mettle in the Computer Quiz. The questions will cover everything from the origins of ARPANET to modern AI advancements, hardware trivia, and pop culture tech references.',
        rules: [
            'Individual participation only.',
            'No electronic devices allowed during the quiz.',
            'Answers must be final; no changing once submitted.',
            'Ties will be decided by a rapid-fire buzzer round.'
        ],
        coordinators: ['Dr. Vikram (Faculty In-Charge) - 9747409785', 'Neha (Dept. of CSE)'],
        judging: [
            'Number of correct answers',
            'Time taken to answer during rapid-fire',
            'Tie breakers settled via sudden death'
        ],
        prize: ['1st Prize - ₹3,000', '2nd Prize - Tech Books Bundle'],
        fee: '₹50 Per Person',
        date: '18 MARCH',
        time: '11:00 AM'
    },
    {
        id: 'poster-making',
        stageNumber: 4,
        title: 'POSTER MAKING',
        description: 'Design the ultimate cyberpunk visual. Creativity unleashed.',
        color: 'blue',
        points: '600 PT',
        icon: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&h=200&fit=crop',
        qrCode: '/qrcodes/Poster Making.png',
        fullDescription: 'Channel your inner artist and envision the future. The Poster Making competition challenges you to design visually stunning artwork based on the theme "Cybernetic Horizons". Use digital tools to create a masterpiece that blends technology and existential aesthetics.',
        rules: [
            'Software allowed: Photoshop, Illustrator, Figma, GIMP.',
            'All assets must be created originally or be royalty-free.',
            'Time limit: 2 hours.',
            'Final submission must be in high-res PNG/PDF format.'
        ],
        coordinators: ['Karan (Design Club) - 9995688036', 'Sneha (Design Club)'],
        judging: [
            'Originality and creativity',
            'Relevance to the cyberpunk theme',
            'Visual impact and composition'
        ],
        prize: ['1st Prize - ₹4,000', '2nd Prize - Drawing Tablet'],
        fee: '₹100 Per Person',
        date: '18 MARCH',
        time: '09:00 AM'
    },
    {
        id: 'reel-making',
        stageNumber: 5,
        title: 'REEL MAKING',
        description: 'Capture the chaotic energy of the campus. Make it go viral.',
        color: 'yellow',
        points: '700 PT',
        icon: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=200&h=200&fit=crop',
        qrCode: '/qrcodes/Reel Making.png',
        fullDescription: 'You are the director. Your mission: capture the essence, energy, and excitement of Techxell 2026 in a 60-second video. Use your smartphone or camera to document the events, the people, and the vibe. The most creative, engaging, and hype-inducing reel wins.',
        rules: [
            'Maximum length: 60 seconds.',
            'Content must be shot exclusively during the fest.',
            'Use of copyrighted music is allowed if properly credited.',
            'Teams of up to 3 members are allowed.'
        ],
        coordinators: ['Arjun (Media Team) - 8590396483', 'Ravi (Media Team)'],
        judging: [
            'Engagement and virality potential',
            'Quality of editing and transitions',
            'Capturing the fest energy'
        ],
        prize: ['1st Prize - ₹5,000', '2nd Prize - Gimbal Stabilizer'],
        fee: 'Free Registration',
        date: '18 MARCH',
        time: 'Deadline: March 18, 06:00 PM',
        isTeamEvent: true
    },
    {
        id: 'e-football',
        stageNumber: 6,
        title: 'E-FOOTBALL',
        description: 'Virtual pitch, real stakes. Prove your tactical genius.',
        color: 'green',
        points: '2000 PT',
        icon: './assets/e-football.jpg',
        qrCode: '/qrcodes/E-football.png',
        fullDescription: 'Step onto the virtual pitch and show off your dribbling, passing, and shooting skills in the E-Football tournament. Compete against the best virtual managers on campus. Tactical prowess, quick reflexes, and a cool head under pressure are required.',
        rules: [
            'Platform: PS5 / PC (Controllers provided, or bring your own).',
            'Format: 1v1 Knockout tournament.',
            'Match duration: 6 minutes per half.',
            'Standard tournament settings apply (Injuries OFF, Time of Day: Night).'
        ],
        coordinators: ['Vikash (Esports Club) - 7902820178', 'Manoj (Esports Club)'],
        judging: [
            'Tournament progression (Knockout format)',
            'Goal difference in tie-breaking scenarios',
            'Fair play rules maintained'
        ],
        prize: ['1st Prize - ₹10,000', '2nd Prize - Gaming Headset'],
        fee: '₹150 Per Person',
        date: '18 MARCH',
        time: '10:00 AM Onwards',
        bookedSeats: 16
    },
    {
        id: 'mini-militia',
        stageNumber: 7,
        title: 'MINI MILITIA',
        description: 'Intense 2D multiplayer combat. Survive the chaos.',
        color: 'pink',
        points: '2000 PT',
        icon: './assets/mini-militia.png',
        qrCode: '/qrcodes/Mini Militia.png',
        fullDescription: 'Experience the pure nostalgia and chaotic fun of Mini Militia (Doodle Army 2). Form your squad and engage in intense, fast-paced 2D combat. Master the jetpack, control the heavy weapons, and outlive the opposing team in this classic mobile shooter.',
        rules: [
            'Platform: Mobile (Android/iOS).',
            'Format: 4v4 Team Deathmatch.',
            'No hacking, modding, or unauthorized third-party apps.',
            'Matches will be hosted on private local servers.'
        ],
        coordinators: ['Suraj (Esports Club) - 9544828035', 'Tarun (Esports Club)'],
        judging: [
            'Total team kills across matches',
            'Survival time and map control',
            'Objective clearance'
        ],
        prize: ['1st Prize - ₹8,000', '2nd Prize - Google Play Gift Cards'],
        fee: '₹200 Per Team',
        date: '18 MARCH',
        time: '01:00 PM Onwards',
        isTeamEvent: true
    }
];