'use client';

import { Mail, Phone, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // ============================================
  // SKILLS SECTION - EDIT HERE
  // ============================================
  // To add a new skill category:
  // 1. Add a new object to this array with title and skills array
  // 2. Example: { title: 'New Category', skills: ['Skill1', 'Skill2'] }
  // 3. It will automatically appear in the grid (2 boxes per row)
  // To modify existing skills:
  // 1. Find the category title you want to edit
  // 2. Change the skills array items
  const skillsCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'Shell Scripting'],
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure (Basics)', 'GCP (Basics)'],
    },
    {
      title: 'AWS Services',
      skills: ['S3', 'EC2', 'Lambda', 'EKS', 'CloudFront', 'RDS', 'VPC', 'Route 53'],
    },
    {
      title: 'Containerization & Orchestration',
      skills: ['Docker', 'Kubernetes', 'Docker Compose'],
    },
    {
      title: 'CI/CD',
      skills: ['GitHub Actions', 'Argo CD','Jenkins', 'GitLab CI'],
    },
    {
      title: 'DevSecOps & Security Tools',
      skills: ['SonarQube', 'Trivy', 'Docker Scout', 'OWASP Dependency-Check'],
    },
    {
      title: 'Infrastructure as Code',
      skills: ['Terraform', 'CloudFormation'],
    },
    {
      title: 'Version Control',
      skills: ['Git'],
    },
    {
      title: 'Monitoring & Logging',
      skills: ['CloudWatch', 'Prometheus', 'Grafana'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Methodologies',
      skills: ['Agile'],
    },
    {
      title: 'Languages',
      skills: ['Telugu (Native)', 'Hindi (Fluent)', 'English (Fluent)', 'Tamil (Conversational)'],
    },
  ];


  // ============================================
  // PROJECTS SECTION - EDIT HERE
  // ============================================
  // To add a new project:
  // 1. Add a new object to this array with title, description, and link
  // 2. The link should point to your GitHub repository URL
  // 3. Example: { title: 'My Project', description: 'What it does', link: 'https://github.com/username/project' }
  // Projects will automatically arrange in a grid (2 projects per row)
  const projects = [
  {
    title: 'Personal Portfolio - AWS S3 + CloudFront',
    description: 'Architected a highly available, secure static hosting solution using S3 (Private) and CloudFront OAC. Automated the entire infrastructure lifecycle with Terraform and implemented a seamless CI/CD pipeline via GitHub Actions.',
    link: '#',
  },
  {
    title: 'FreshBite - DevSecOps Food Delivery App',
    description: 'End-to-end DevSecOps implementation for a microservices app. Orchestrated containerized workloads on AWS EKS using Argo CD for GitOps. Integrated automated security scanning and established observability with Prometheus & Grafana.',
    link: 'https://github.com/Mani0013/devsecops-food-delivery',
  },
  {
    title: 'AppTracker Pro - Job Application Tracker',
    description: 'Developed a cloud-native Next.js application featuring automated infrastructure provisioning through Terraform. Leveraged Kubernetes for orchestration and simplified deployment workflows using Argo CD for consistent state management.',
    link: '#',
  },
];

  // ============================================
  // CERTIFICATES SECTION - EDIT HERE
  // ============================================
  // To add a new certificate:
  // 1. Add a new string to this array with the certificate name
  // 2. Example: 'AWS Solutions Architect - Associate'
  // 3. Certificates will automatically appear in the list
  const certificates = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Skill Builder',
    detail: 'Foundational knowledge of AWS Cloud infrastructure and security.'
  },
  {
    title: 'Implement CI/CD Pipelines on Google Cloud Badge',
    issuer: 'Google Skills',
    detail: 'Mastered automated deployment workflows and GCP ecosystem tools.'
  },
  {
    title: 'Google Project Management Professional Certificate',
    issuer: 'Coursera',
    detail: 'Proficiency in Agile methodologies and project lifecycle planning.'
  },
  {
  title: 'Microsoft Azure Internship - Emerging Technologies',
  issuer: 'Microsoft Elevate & AICTE',
  detail: 'Completed a specialized 4-week program focusing on Azure cloud services and emerging technical implementations.'
}

];

  // ============================================
  // EDUCATION SECTION - EDIT HERE
  // ============================================
  // To add a new education entry:
  // 1. Add a new object with degree, field, institute, duration, and cgpa
  // 2. Example: { degree: 'Masters', field: 'Computer Science', institute: 'University Name', duration: '2023-2025', cgpa: '4.0' }
  // To modify existing education:
  // 1. Find the entry and update the corresponding fields
  const education = [
    {
      degree: 'Integrated M.Tech in Software Engineering',
      field: 'Computer Science and Engineering',
      institute: 'Vellore Institute of Technology (VIT), Vellore',
      duration: '2020 - 2025',
      cgpa: '7.95/10',
    },
  ];

    // ============================================
  // EXPERIENCE SECTION - EDIT HERE
  // ============================================
  // To add a new experience:
  // 1. Add a new object with title, company, duration, and points array
  // 2. Example: { title: 'Role', company: 'Company Name', duration: 'Month Year - Month Year', points: ['Point 1', 'Point 2'] }
  /* const experience = [
    {
      title: 'DevOps Intern',
      company: 'Company Name',
      duration: 'Jan 2026 - Present',
      points: [
        'Set up CI/CD pipelines using GitHub Actions',
        'Deployed applications using Docker and Kubernetes',
        'Managed AWS infrastructure with Terraform',
        'Monitored application performance with CloudWatch',
        'Collaborated with team to improve deployment process',
      ],
    },
  ];*/

  return (
    <div className="flex min-h-screen" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #1e40af 50%, #0c4a6e 75%, #0f172a 100%)', backgroundAttachment: 'fixed'}}>
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-slate-950/80 backdrop-blur-md border-r border-cyan-500/30 p-8 overflow-y-auto hidden lg:block z-50">
          <div className="mb-8">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-lg font-bold text-slate-950">
              MC
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Education', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>

          <div className="pt-8 border-t border-cyan-500/30">
            <p className="text-xs text-cyan-400/70">© 2025 Manideep</p>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 w-full bg-black/20 backdrop-blur-sm text-foreground font-sans">
          
          {/* ============================================ */}
          {/* HOME/HERO SECTION - EDIT HERE */}
          {/* ============================================ */}
          {/* TO EDIT:
              - Name: Line 177 - Change "Manideep Challagundla" to your name
              - Title: Line 180 - Change "Cloud & DevOps Enthusiast" to your title
              - Description: Lines 183-186 - Edit the paragraph about yourself
              - Profile Picture: Line 166 - Replace "/placeholder-user.jpg" with your image path
                                Put your image in the /public folder and reference it here
              - Buttons stay the same (they link to other sections)
          */}
          <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl w-full">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/50">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Manideep Challagundla"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                    Manideep Challagundla
                  </h1>
                  <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-4">
                    Cloud & DevOps Enthusiast
                  </p>
                  <p className="text-base md:text-lg text-cyan-100 mb-8 leading-relaxed max-w-2xl">
                    I design, automate, and scale resilient cloud architectures using <strong>Terraform</strong>, <strong>Kubernetes</strong>, and <strong>AWS</strong>. 
                    I specialize in transforming complex requirements into secure, production-ready systems through <strong>Infrastructure as Code 
                    (IaC)</strong>, <strong>GitOps</strong>, and automated <strong>CI/CD</strong> pipelines. Passionate about building the foundation of modern cloud-native applications 
                    — always learning, always shipping.
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="px-6 py-3 bg-cyan-500 text-slate-950 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-200 transform hover:scale-105"
                    >
                      Let's Connect
                    </button>
                    <a
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('projects');
                      }}
                      className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-950 transition-all duration-200"
                    >
                      Explore My Work
                    </a>
                  </div>
            </div>
            </div>
          </div>
        </section>

          {/* ============================================ */}
          {/* ABOUT SECTION - EDIT HERE */}
          {/* ============================================ */}
          {/* TO EDIT:
              - About text: Lines 223-236 - Edit the paragraphs about yourself
              - Simply replace the text within the <p> tags
              - Add more paragraphs by duplicating: <p>Your text here</p>
              - The section will automatically expand to fit content
          */}
          <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-300">About Me</h2>
            <div className="space-y-4 text-base md:text-lg text-cyan-100 leading-relaxed">
              <p>
                Hey, I'm Manideep — a dedicated <strong>Cloud & DevOps Engineer</strong> who thrives on transforming infrastructure complexity into elegant, automated, and scalable systems. There is nothing more satisfying to me than watching a pipeline deploy flawlessly while maintaining 100% uptime.
              </p>
              <p>
                My journey began with a single question: <em>"How do global-scale applications stay resilient under massive load?"</em> That curiosity pulled me into the world of Cloud Engineering. Since then, I’ve been hands-on with real-world problems—learning by breaking, fixing, and architecting better solutions with every iteration.
              </p>
              <p>
                <strong>My technical focus right now:</strong>
              </p>
              <ul className="skills-highlight">
                <li><strong>Infrastructure as Code (IaC):</strong> Developing modular, reusable infrastructure with <strong>Terraform</strong> for multi-environment scalability.</li>
                <li><strong>Container Orchestration:</strong> Managing microservices and clusters with <strong>Kubernetes</strong> (with a deep focus on <strong>Amazon EKS</strong>).</li>
                <li><strong>Automated CI/CD:</strong> Engineering robust pipelines that eliminate manual toil and accelerate deployment frequency.</li>
                <li><strong>Multi-Cloud Fluency:</strong> Deep specialization in <strong>AWS</strong> (S3, Lambda, EKS, CloudFront, WAF) while expanding expertise in <strong>Azure</strong> and <strong>GCP</strong>.</li>
                <li><strong>DevSecOps:</strong> Integrating security early in the lifecycle—shifting left with automated scanning and policy enforcement.</li>
              </ul>
              <p>
                I believe great infrastructure should be "invisible"—it should scale effortlessly, optimize costs, and empower developers to ship faster. To me, automation isn't just a buzzword; it’s the difference between firefighting and true engineering excellence.
              </p>
              <p className="hobbies">
                When I’m not deep in configs or dashboards, I spend my free time exploring the latest DevOps tools, experimenting with new cloud services, and picking up fresh concepts that push my skills forward.
              </p>
            </div>
          </section>

        {/* ============================================ */}
        {/* SKILLS SECTION - GRID LAYOUT */}
        {/* ============================================ */}
        {/* This section displays all skill categories in a 2-column grid
            Edit the skillsCategories array at the top of this file (lines 21-62)
            See instructions there for adding/editing skills
        */}
        <section id="skills" className="py-20 px-6 bg-slate-950/40 max-w-4xl mx-auto w-full lg:rounded-lg my-8 backdrop-blur-sm border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-300">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsCategories.map((category) => (
                <div key={category.title} className="bg-slate-950/50 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm font-medium hover:bg-cyan-500/20 transition-all duration-200 border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        {/* ============================================ */}
        {/* EXPERIENCE SECTION */}
        {/* ============================================ */}
        {/* This section displays work experience with company, role, duration, and accomplishments
            Edit the experience array (add it near other data arrays) to add/modify experience entries
        */}
        {/* <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-300">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company} className="bg-slate-950/50 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-cyan-300/70 whitespace-nowrap">{exp.duration}</p>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-cyan-100/80">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section> */}

        {/* ============================================ */}
        {/* PROJECTS SECTION - GRID LAYOUT */}
        {/* ============================================ */}
        {/* This section displays all projects in a 2-column grid
            Edit the projects array (lines 65-95) to add/modify projects
            To add links: set the 'link' field to your GitHub repository URL
        */}
        <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-300">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-slate-950/50 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 group hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-cyan-300 transition-colors duration-200 text-balance text-white">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-transform duration-200 flex-shrink-0 ml-2"
                      title="View on GitHub"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-sm text-cyan-100/80 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

        {/* ============================================ */}
        {/* CERTIFICATES SECTION */}
        {/* ============================================ */}
        {/* Edit the certificates array (lines 96-102) to add/modify certificates
            Add certificate names to the array, they will automatically appear here
        */}
        <section id="certificates" className="py-20 px-6 bg-slate-950/40 max-w-4xl mx-auto w-full lg:rounded-lg my-8 backdrop-blur-sm border border-cyan-500/20">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-300">Certificates</h2>
    <ul className="space-y-6">
      {certificates.map((cert, index) => (
        <li key={index} className="group">
          <div className="flex items-start text-base text-cyan-100 transition-colors duration-200">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
            <div>
              <span className="font-bold text-cyan-300 block text-lg">{cert.title}</span>
              <span className="text-sm text-cyan-200/70 block mb-1">{cert.issuer}</span>
              <p className="text-sm text-cyan-100/60 leading-relaxed">{cert.detail}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
</section>

        {/* ============================================ */}
        {/* EDUCATION SECTION */}
        {/* ============================================ */}
        {/* Edit the education array (lines 109-127) to add/modify education entries
            Each entry should have: degree, field, institute, duration, and cgpa
        */}
        <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-300">Education</h2>
            {education.map((edu) => (
              <div key={edu.degree} className="bg-slate-950/50 p-6 rounded-lg border border-cyan-500/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-cyan-400">{edu.field}</p>
                  </div>
                  <p className="text-sm text-cyan-300/70">{edu.duration}</p>
                </div>
                <p className="text-cyan-100/80 mb-2">{edu.institute}</p>
                <p className="text-sm text-cyan-400 font-semibold">CGPA: {edu.cgpa}</p>
              </div>
            ))}
          </section>

        {/* ============================================ */}
        {/* CONTACT SECTION */}
        {/* ============================================ */}
        {/* TO EDIT:
            - Email: Line 373 - Change 'manideep@example.com' to your actual email
            - Phone: Line 384 - Change '+91 9876 543 210' to your actual phone number
            - LinkedIn: Line 401 - Change '#' to your LinkedIn profile URL
            - GitHub: Line 408 - Change '#' to your GitHub profile URL
            - Twitter: Line 415 - Change '#' to your Twitter profile URL (or any other social media)
        */}
        <section id="contact" className="py-20 px-6 bg-slate-950/40 max-w-4xl mx-auto w-full lg:rounded-lg my-8 backdrop-blur-sm border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-300">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:manideep1145@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 group"
              >
                <Mail className="text-cyan-400 group-hover:scale-110 transition-transform duration-200" size={24} />
                <div>
                  <p className="text-sm text-cyan-300/70">Email</p>
                  <p className="font-semibold text-cyan-100 group-hover:text-cyan-300 transition-colors duration-200">manideep1145@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+91 9390950569"
                className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 group"
              >
                <Phone className="text-cyan-400 group-hover:scale-110 transition-transform duration-200" size={24} />
                <div>
                  <p className="text-sm text-cyan-300/70">Phone</p>
                  <p className="font-semibold text-cyan-100 group-hover:text-cyan-300 transition-colors duration-200">+91 9390950569</p>
                </div>
              </a>
            </div>

            <div className="border-t border-cyan-500/30 pt-12">
              <p className="text-center text-cyan-300/80 mb-8">Connect with me on social platforms</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/manideep-challagundla-546b6027b/"
                  className="p-3 bg-slate-950/50 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Mani0013"
                  className="p-3 bg-slate-950/50 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </section>

        {/* ============================================ */}
        {/* FOOTER SECTION */}
        {/* ============================================ */}
        {/* TO EDIT:
            - Copyright text: Change "2025" to current year and "Manideep Challagundla" to your name
            - Footer description: Modify the "Built with" message if needed
        */}
        <footer className="bg-slate-950/60 border-t border-cyan-500/30 py-8 px-6 text-center text-sm text-cyan-300/70 mt-12 backdrop-blur-sm">
            <p>© 2025 Manideep Challagundla. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
