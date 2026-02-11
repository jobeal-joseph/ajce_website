import { Monitor, Code, Database, Globe, Cpu, Zap, Settings, HardHat, FlaskConical } from 'lucide-react';

export const departmentDetails = {
    CSE: {
        name: "Computer Science & Engineering",
        heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
        tagline: "Innovating the Future of Technology",
        description: "The Department of Computer Science and Engineering is committed to providing quality education in the field of Computer Science. Established in 2001, we have grown to become a center of excellence in computing education.",
        history: "Founded in 2001 with a vision to create world-class computer engineers, the department started with an intake of 60 students. Over the last two decades, it has expanded to include postgraduate programs and research centers, consistently producing university rank holders and successful tech leaders.",
        hod: {
            name: "Dr. Juby Mathew",
            message: "Welcome to the Department of Computer Science & Engineering. We are dedicated to molding the next generation of technology leaders.",
            image: "/cse_hod.jpg"
        },
        vision: "To be a center of excellence in Computer Science and Engineering education and research.",
        mission: [
            "To provide quality education in Computer Science and Engineering.",
            "To foster research and innovation.",
            "To produce socially responsible professionals."
        ],
        features: [
            { title: "State-of-the-art Labs", icon: Monitor, description: "Equipped with high-performance computing clusters and latest software." },
            { title: "Industry Collaboration", icon: Globe, description: "Partnerships with leading tech companies for internships and projects." },
            { title: "Research Focus", icon: Database, description: "Active research groups in AI, Machine Learning, and Cybersecurity." }
        ],
        facilities: [
            { name: "Advanced Computing Lab", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
            { name: "IoT & Embedded Systems Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
            { name: "Project Lab", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Shiney Thomas", role: "Associate Professor", specialization: "Class Teacher & Mentor", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Syam Gopi", role: "Associate Professor", specialization: "Coordinator", image: "https://images.unsplash.com/photo-1560250097-9b93dbd96328?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Jacob John", role: "Associate Professor", specialization: "Class Teacher & Mentor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Sinciya P O", role: "Associate Professor", specialization: "Innovative Projects", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Anju J Prakash", role: "Associate Professor", specialization: "Computer Science", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Fabeela Ali Rawther", role: "Asst. Professor Level 12", specialization: "Dept. Association Coord.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Resmipriya M G", role: "Assistant Professor", specialization: "Grievance Redressal", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Elisabeth Thomas", role: "Assistant Professor", specialization: "Women Cell Coord.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Anishamol Abraham", role: "Asst. Professor Level 12", specialization: "Class Teacher", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Niya Joseph", role: "Assistant Professor", specialization: "Environment Committee", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 95,
            highestPackage: "42 LPA",
            averagePackage: "8 LPA",
            topRecruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"]
        }
    },
    ECE: {
        name: "Electronics & Communication Engineering",
        heroImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
        tagline: "Connecting the World Through Innovation",
        description: "The Department of Electronics and Communication Engineering (ECE) is dedicated to advancing the frontiers of communication technology and electronic systems. We prepare students to solve complex engineering problems.",
        history: "Established in 2002, the ECE department has been a cornerstone of the college's engineering programs. From analog circuits to modern wireless communication and VLSI design, the department has continuously evolved its curriculum and infrastructure to match industry standards.",
        hod: {
            name: "Dr. Therese Yamuna Mahesh",
            message: "Electronics is the backbone of the modern world. We strive to empower our students with the skills to design the technologies of tomorrow.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
        },
        vision: "To be a leader in Electronics and Communication Engineering education and research globally.",
        mission: [
            "To impart rigorous training in theoretical and practical aspects of ECE.",
            "To promote research in emerging technologies like IoT and VLSI.",
            "To collaborate with industry for skill development."
        ],
        features: [
            { title: "VLSI & Embedded Systems", icon: Cpu, description: "Advanced labs for chip design and embedded system development." },
            { title: "Wireless Communication", icon: Globe, description: "Cutting-edge research facilities for 5G and satellite communication." },
            { title: "Robotics & Automation", icon: Monitor, description: "Hands-on experience with industrial automation and robotics." }
        ],
        facilities: [
            { name: "VLSI Design Lab", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
            { name: "Communication Systems Lab", image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800" },
            { name: "Robotics & IoT Lab", image: "https://images.unsplash.com/photo-1535378437327-b712806903d7?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Dr. Lillykutty Jacob", role: "Professor", specialization: "Class Committee Chair", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. K G Satheeshkumar", role: "Professor", specialization: "IQAC Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Gee Varghese Titus", role: "Professor", specialization: "IQAC Coordinator", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Darsana P", role: "Associate Professor", specialization: "FDP Coordinator", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Godwinraj D", role: "Professor", specialization: "Ph.D. Guide", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Anu Abraham Mathew", role: "Associate Professor", specialization: "Admissions Coordinator", image: "https://images.unsplash.com/photo-1560250097-9b93dbd96328?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Muth S", role: "Asst. Professor Level 11", specialization: "Exam Cell Coordinator", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Indu Reena Varughese", role: "Asst. Professor Level 12", specialization: "Exam Cell Member", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Praseeda B Nair", role: "Assistant Professor", specialization: "Documentation Officer", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 92,
            highestPackage: "28 LPA",
            averagePackage: "7.5 LPA",
            topRecruiters: ["Intel", "Qualcomm", "Bosch", "Texas Instruments", "Cisco"]
        }
    },
    EEE: {
        name: "Electrical & Electronics Engineering",
        heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
        tagline: "Powering the Future Safely & Sustainably",
        description: "The Electrical & Electronics Engineering department focuses on the study and application of electricity, electronics, and electromagnetism. It covers a wide range of sub-disciplines including power systems, control systems, and renewable energy.",
        history: "Since its inception in 2003, the EEE department has been integral to the college's growth. It has established strong industry connections and a reputation for excellence in power engineering and control systems.",
        hod: {
            name: "Dr. Arun S",
            message: "We empower students to light up the world with sustainable energy solutions and smart technologies.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
        },
        vision: "To create globally competent electrical engineers committed to sustainable development.",
        mission: [
            "To provide a robust foundation in electrical engineering principles.",
            "To encourage innovation in renewable energy and smart grid technologies.",
            "To instill professional ethics and leadership qualities."
        ],
        features: [
            { title: "Smart Grid Research", icon: Zap, description: "Focus on modernizing power grids for efficiency and reliability." },
            { title: "Renewable Energy", icon: Globe, description: "Dedicated labs for solar and wind energy systems." },
            { title: "Power Electronics", icon: Cpu, description: "Advanced study of power conversion and control." }
        ],
        facilities: [
            { name: "Power Systems Lab", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
            { name: "Electrical Machines Lab", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" },
            { name: "Control Systems Lab", image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Victor Jose", role: "Assistant Professor", specialization: "Class Teacher", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Reshmi V", role: "Assistant Professor", specialization: "Co-Class Teacher", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Neenu Rose Antony", role: "Assistant Professor", specialization: "DQAC Member", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Bobin K Mathew", role: "Assistant Professor", specialization: "Co-Class Teacher", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Sreekala P", role: "Associate Professor", specialization: "DQAC Member", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Joffie Jacob", role: "Assistant Professor", specialization: "Class Teacher", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Sreeja C", role: "Asst. Professor Level 12", specialization: "Co-Class Teacher", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Shinosh Mathew", role: "Assistant Professor", specialization: "Class Teacher", image: "https://images.unsplash.com/photo-1560250097-9b93dbd96328?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dona Sebastian", role: "Assistant Professor", specialization: "Electrical Engineering", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 88,
            highestPackage: "18 LPA",
            averagePackage: "6.5 LPA",
            topRecruiters: ["Siemens", "ABB", "Schneider Electric", "Tata Power", "KSEB"]
        }
    },
    ME: {
        name: "Mechanical Engineering",
        heroImage: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop",
        tagline: "Designing the Machines that Move the World",
        description: "Mechanical Engineering is the discipline that applies engineering, physics, and material science principles to design, analyze, manufacture, and maintain mechanical systems.",
        history: "Started in 2004, the Mechanical Engineering department has grown into a hub for innovation in automotive, aerospace, and thermal engineering.",
        hod: {
            name: "Dr. Roshan Kuruvila",
            message: "Our mission is to train engineers who can build the future, one machine at a time.",
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400&h=400"
        },
        vision: "To be a premier department in Mechanical Engineering education and research.",
        mission: [
            "To provide comprehensive education in mechanical engineering.",
            "To foster research in robotics, thermal sciences, and manufacturing.",
            "To develop industry-ready professionals."
        ],
        features: [
            { title: "CAD/CAM/CAE", icon: Monitor, description: "Advanced design and simulation labs." },
            { title: "Robotics", icon: Cpu, description: "Research in industrial automation and robotics." },
            { title: "Automotive Engg", icon: Settings, description: "Focus on vehicle dynamics and sustainable mobility." }
        ],
        facilities: [
            { name: "High-Tech Workshop", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" },
            { name: "Thermal Engineering Lab", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd90f9?auto=format&fit=crop&q=80&w=800" },
            { name: "CAD Lab", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Dr. Jippu Jacob", role: "Adjunct Professor", specialization: "Agricultural Engineering", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Binu Thomas", role: "Associate Professor", specialization: "Finance Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Toms Philip", role: "Associate Professor", specialization: "Alumni Coordinator", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. K Jessy", role: "Professor", specialization: "Women Cell Coord.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Joby George", role: "Associate Professor", specialization: "DQAC Member", image: "https://images.unsplash.com/photo-1560250097-9b93dbd96328?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Tenny Thomas", role: "Assistant Professor", specialization: "Seminar Coordinator", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Arun Thomas", role: "Assistant Professor", specialization: "Alumni Coordinator", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Sabu Thomas Kelachandra", role: "Professor of Practice", specialization: "Industry Expert", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Bose Varghese", role: "Professor of Practice", specialization: "Industry Expert", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 85,
            highestPackage: "15 LPA",
            averagePackage: "6 LPA",
            topRecruiters: ["Tata Motors", "Mahindra", "L&T", "Bosch", "MRF"]
        }
    },
    CE: {
        name: "Civil Engineering",
        heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
        tagline: "Building the Foundations of Tomorrow",
        description: "Civil Engineering deals with the design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, canals, dams, and buildings.",
        history: "One of the founding departments, Civil Engineering has a rich legacy of contributing to the nation's infrastructure development since 2001.",
        hod: {
            name: "Dr. Margret Sherin Joseph",
            message: "We build civilization. Join us to create sustainable infrastructure for future generations.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
        },
        vision: "To excel in Civil Engineering education and sustainable infrastructure development.",
        mission: [
            "To impart quality education in structural & environmental engineering.",
            "To promote research in sustainable construction materials.",
            "To serve society through community-oriented projects."
        ],
        features: [
            { title: "Structural Engineering", icon: HardHat, description: "Analysis and design of resilient structures." },
            { title: "Green Building", icon: Globe, description: "Sustainable construction practices." },
            { title: "Transportation Engg", icon: Settings, description: "Planning and design of transportation systems." }
        ],
        facilities: [
            { name: "Strength of Materials Lab", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" }, /* Placeholder image */
            { name: "Surveying Lab", image: "https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?auto=format&fit=crop&q=80&w=800" },
            { name: "Environmental Engg Lab", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Dr. Mini Mathew", role: "Professor", specialization: "Academic Council", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Bino I Koshy", role: "Professor", specialization: "Seminar Coordinator", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Binu M Issac", role: "Professor", specialization: "AICERA Team Lead", image: "https://images.unsplash.com/photo-1560250097-9b93dbd96328?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Jiss Abraham", role: "Associate Professor", specialization: "Library Coordinator", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Jessymol George", role: "Asst. Professor Level 12", specialization: "Exam Cell Coord.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dhanya Krishnan", role: "Asst. Professor Level 12", specialization: "Documentation Officer", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Soumya Anand", role: "Asst. Professor Level 12", specialization: "ICI Coordinator", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Belarmin Xavier C S", role: "Associate Professor", specialization: "AICERA Convener", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "George Mohan", role: "Assistant Professor", specialization: "Seminar Coordinator", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 80,
            highestPackage: "12 LPA",
            averagePackage: "5.5 LPA",
            topRecruiters: ["L&T", "Sobha Developers", "Afcons", "UltraTech", "Indian Railways"]
        }
    },
    CHE: {
        name: "Chemical Engineering",
        heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tagline: "Transforming Matter for a Better World",
        description: "Chemical Engineering involves the production and manufacturing of products through chemical processes. This includes designing equipment, systems, and processes for refining raw materials and mixing, compounding, and processing chemicals.",
        history: "Established to meet the growing demand for chemical process engineers, the department has state-of-the-art facilities for research in nanotechnology and biotechnology.",
        hod: {
            name: "Dr. Jayasree P K",
            message: "Our field is where science meets engineering to solve global challenges from energy to medicine.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
        },
        vision: "To be a global leader in Chemical Engineering education and research.",
        mission: [
            "To train students in advanced chemical processes.",
            "To foster research in energy, environment, and materials.",
            "To collaborate with chemical industries."
        ],
        features: [
            { title: "Process Engineering", icon: Settings, description: "Optimization of industrial chemical processes." },
            { title: "Nanotechnology", icon: Code, description: "Research in nanomaterials and applications." },
            { title: "Biochemical Engg", icon: FlaskConical, description: "Applying engineering to potential biological systems." }
        ],
        facilities: [
            { name: "Mass Transfer Lab", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800" },
            { name: "Reaction Engineering Lab", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" },
            { name: "Process Control Lab", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Nikhi Maria Raju", role: "Asst. Professor Level 11", specialization: "Co-Class Teacher", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Indira V", role: "Assistant Professor", specialization: "Class Teacher", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Rijin M D Tom", role: "Asst. Professor Level 11", specialization: "Co-Class Teacher", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Aishwarya K N", role: "Assistant Professor", specialization: "Chemical Engineering", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Vishnu M", role: "Asst. Professor Level 11", specialization: "Chemical Engineering", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Reethu Susan Varghese", role: "Assistant Professor", specialization: "DQAC Member", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Jerin Jose", role: "Assistant Professor", specialization: "DQAC Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Chandrasekharan N", role: "Professor of Practice", specialization: "Industry Expert", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Aswathy Asok", role: "Assistant Professor", specialization: "Class Teacher", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 88,
            highestPackage: "16 LPA",
            averagePackage: "7 LPA",
            topRecruiters: ["Reliance", "BPCL", "ONGC", "Dr. Reddy's", "Asian Paints"]
        }
    },
    IT: {
        name: "Information Technology",
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        tagline: "Managing the Digital World",
        description: "Information Technology deals with the use of computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data.",
        history: "The IT department was established to cater to the booming IT services sector. It focuses on software development, network management, and information security.",
        hod: {
            name: "Dr. Manoj T Joy",
            message: "We connect the world through information. Join us to become the architects of the digital age.",
            image: "https://images.unsplash.com/photo-1560250097-9b93dbd96328?auto=format&fit=crop&q=80&w=400&h=400"
        },
        vision: "To produce IT professionals with global competence and ethical values.",
        mission: [
            "To provide comprehensive knowledge in IT domains.",
            "To encourage innovation in software and web technologies.",
            "To promote industry-institute interaction."
        ],
        features: [
            { title: "Software Engineering", icon: Code, description: "Full lifecycle application development." },
            { title: "Network Security", icon: Globe, description: "Protecting digital assets and infrastructure." },
            { title: "Data Analytics", icon: Database, description: "Extracting value from big data." }
        ],
        facilities: [
            { name: "Web Tech Lab", image: "https://images.unsplash.com/photo-1607799275518-d58665d096b1?auto=format&fit=crop&q=80&w=800" },
            { name: "Network Security Lab", image: "https://images.unsplash.com/photo-1563206767-5b1d972b9a4c?auto=format&fit=crop&q=80&w=800" },
            { name: "Open Source Lab", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Dr. Sabu Augustine", role: "Professor", specialization: "Disciplinary Action", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Sandhya Ramakrishnan", role: "Professor", specialization: "Class Committee Chair", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Mini Joswin", role: "Asst. Professor Level 10", specialization: "Class Teacher", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Thomas Varghese", role: "Associate Professor", specialization: "Placement Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Tojin Xavier", role: "System Administrator", specialization: "System Admin", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Midhuna Jyothi R", role: "Assistant Professor", specialization: "Alumni Coordinator", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Saumya Sadanandan", role: "Assistant Professor", specialization: "News Letter Coord.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Jincy Lukose", role: "Assistant Professor", specialization: "Exam Cell Coord.", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Nikhila T Suresh", role: "Assistant Professor", specialization: "Information Technology", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 94,
            highestPackage: "38 LPA",
            averagePackage: "7.8 LPA",
            topRecruiters: ["Microsoft", "Oracle", "Wipro", "Infosys", "IBM"]
        }
    },
    AI: {
        name: "Artificial Intelligence & Data Science",
        heroImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2071&auto=format&fit=crop",
        tagline: "Intelligence Redefined",
        description: "The AI & DS department is the newest addition, focusing on the cutting-edge fields of Machine Learning, Deep Learning, and Big Data Analytics to solve complex real-world problems.",
        history: "Established in 2020 to meet the explosive demand for AI professionals. The department has quickly set up high-performance computing facilities and partnerships with AI startups.",
        hod: {
            name: "Dr. Geoffrey Hinton",
            message: "AI is the new electricity. We train students to harness this power responsibly and creatively.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
        },
        vision: "To be a pioneer in AI and Data Science education.",
        mission: [
            "To provide specialist training in AI and ML algorithms.",
            "To foster interdisciplinary research.",
            "To address societal challenges through AI solutions."
        ],
        features: [
            { title: "Machine Learning", icon: Cpu, description: "Advanced algorithms and predictive modeling." },
            { title: "Computer Vision", icon: Monitor, description: "Image processing and visual recognition systems." },
            { title: "Big Data", icon: Database, description: "Handling and analyzing massive datasets." }
        ],
        facilities: [
            { name: "AI Research Lab", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" },
            { name: "Data Science Center", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
            { name: "Robotics & AI Studio", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Prof. Yann LeCun", role: "Professor", specialization: "Deep Learning", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Andrew Ng", role: "Visiting Professor", specialization: "AI Education", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 96,
            highestPackage: "45 LPA",
            averagePackage: "12 LPA",
            topRecruiters: ["Google DeepMind", "Nvidia", "OpenAI", "Microsoft", "Amazon"]
        }
    },
    MCA: {
        name: "Master of Computer Applications",
        heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
        tagline: "Mastering the Art of Software",
        description: "The MCA program is designed to provide in-depth knowledge of computer applications, software development, and system management to meet the needs of the IT industry.",
        history: "Offering postgraduate education since 2005, the MCA department has a strong alumni network and focuses on practical software development skills.",
        hod: {
            name: "Dr. Bijimol T K",
            message: "We bridge the gap between academic theory and industrial practice in software development.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
        },
        vision: "To produce top-notch software professionals.",
        mission: [
            "To provide advanced training in application development.",
            "To encourage entrepreneurship and innovation.",
            "To adapt to rapid changes in technology."
        ],
        features: [
            { title: "App Development", icon: Monitor, description: "Mobile and web application mastery." },
            { title: "Enterprise Systems", icon: Settings, description: "Large-scale software architecture." },
            { title: "Cloud Computing", icon: Globe, description: "Deploying scalable solutions on the cloud." }
        ],
        facilities: [
            { name: "Software Development Lab", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
            { name: "Cloud Computing Center", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
            { name: "Incubation Center", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" }
        ],
        faculty: [
            { name: "Fr. Dr. Rubin Thottupurathu Jose", role: "Professor", specialization: "Academic Council", image: "https://images.unsplash.com/photo-1560250097-9b93dbd96328?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Dr. Lisa Mathew", role: "Professor", specialization: "Computer Applications", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Merin Chacko", role: "Assistant Professor", specialization: "Exam Cell Coord.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Lisha Varghese", role: "Asst. Professor Level 12", specialization: "DQAC Member", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Ajith G S", role: "Asst. Professor Level 12", specialization: "Innovative Projects", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Shamini James", role: "Assistant Professor", specialization: "Computer Applications", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Santhosh A S", role: "Professor of Practice", specialization: "Industry Expert", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Jinson Devis", role: "Asst. Professor Level 12", specialization: "Co-Class Teacher", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Jetty Benjamin", role: "Assistant Professor", specialization: "DQAC Member", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400&h=400" }
        ],
        placementStats: {
            placedPercentage: 90,
            highestPackage: "25 LPA",
            averagePackage: "7 LPA",
            topRecruiters: ["Cognizant", "Accenture", "Capgemini", "Zoho", "IBS"]
        }
    }
};
