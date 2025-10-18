    %-------------------------
    % Resume in Latex
    % Author : Tushar Bhardwaj
    % License : MIT
    %------------------------
    
    \documentclass[letterpaper,11pt]{article}
    
    \usepackage{latexsym}
    \usepackage[empty]{fullpage}
    \usepackage{soul}  % Required for colored underline
    \usepackage{xcolor} % Required for colored text
    \usepackage{titlesec}
    \usepackage{marvosym}
    \usepackage[usenames,dvipsnames]{color}
    \usepackage{enumitem}
    \usepackage[hidelinks]{hyperref}
    \usepackage{fancyhdr}
    \usepackage[english]{babel}
    \usepackage{tabularx}
    \usepackage{fontawesome5}
    \usepackage{multicol}
    \setlength{\multicolsep}{-3.0pt}
    \setlength{\columnsep}{-1pt}
    \input{glyphtounicode}
    
    
    %----------FONT OPTIONS----------
    % sans-serif
    % \usepackage[sfdefault]{FiraSans}
    % \usepackage[sfdefault]{roboto}
    % \usepackage[sfdefault]{noto-sans}
    % \usepackage[default]{sourcesanspro}
    
    % serif
    % \usepackage{CormorantGaramond}
    % \usepackage{charter}
    
    
    \pagestyle{fancy}
    \fancyhf{} % clear all header and footer fields
    \fancyfoot{}
    \renewcommand{\headrulewidth}{0pt}
    \renewcommand{\footrulewidth}{0pt}
    
    % Adjust margins
    \addtolength{\oddsidemargin}{-0.6in}
    \addtolength{\evensidemargin}{-0.5in}
    \addtolength{\textwidth}{1.19in}
    \addtolength{\topmargin}{-.7in}
    \addtolength{\textheight}{1.4in}
    
    \urlstyle{same}
    
    \raggedbottom
    \raggedright
    \setlength{\tabcolsep}{0in}
    
    % Sections formatting
    \titleformat{\section}{
      \vspace{-4pt}\scshape\raggedright\large\bfseries
    }{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]
    
    % Ensure that generate pdf is machine readable/ATS parsable
    \pdfgentounicode=1
    
    %-------------------------
    % Custom commands
    \newcommand{\resumeItem}[1]{
      \item\small{
        {#1 \vspace{-2pt}}
      }
    }
    
    \newcommand{\classesList}[4]{
        \item\small{
            {#1 #2 #3 #4 \vspace{-2pt}}
      }
    }
    
    \newcommand{\resumeSubheading}[4]{
      \vspace{-2pt}\item
        \begin{tabular*}{1.0\textwidth}[t]{l@{\extracolsep{\fill}}r}
          \textbf{#1} & \textbf{\small #2} \\
          \textit{\small#3} & \textit{\small #4} \\
        \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeSubSubheading}[2]{
        \item
        \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
          \textit{\small#1} & \textit{\small #2} \\
        \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeProjectHeading}[2]{
        \item
        \begin{tabular*}{1.001\textwidth}{l@{\extracolsep{\fill}}r}
          \small#1 & \textbf{\small #2}\\
        \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}
    
    \renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}
    \renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}
    
    \newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.0in, label={}]}
    \newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
    \newcommand{\resumeItemListStart}{\begin{itemize}}
    \newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}
    
    
    
    %-------------------------------------------
    %%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    
    \begin{document}
    \small
    %----------HEADING----------
    \begin{center}
    \vspace{-6pt}
    \textbf{\Huge \scshape Tushar Bhardwaj} \\ \vspace{6pt}
    \small 
    \faIcon{envelope}
    \textbf{\href{mailto:tusharbhardwaj2617@gmail.com}
    {\textcolor{blue}{\underline{tusharbhardwaj2617@gmail.com}}}}$  $
    \faIcon{linkedin}
    \href{https://www.linkedin.com/in/bhardwajtushar2004/}{\textcolor{blue}{\underline{\textbf{Linkedin}}}} $  $
    \faIcon{github}
    \href{https://github.com/TuShArBhArDwA}{\textcolor{blue}{\underline{\textbf{GitHub}}}} $  $
    \faIcon{code}
    \href{https://leetcode.com/u/Tusharr2004/}{\textcolor{blue}{\underline{\textbf{LeetCode}}}} $  $
    \faIcon{phone}
    \href{+91-7009343545}{\textcolor{blue}{\underline{\textbf{+91-7009343545}}}} $  $
\end{center}
      \vspace{-15pt}
    
    
    
    
    
    
    %-----------EDUCATION-----------
    \section{Education}
      \resumeSubHeadingListStart
        \resumeSubheading
          {Lovely Professional University, Jalandhar}{August 2022 -- Present}
          {B.Tech in Computer Science and Engineering}{CGPA: 8.61/10}
      \resumeSubHeadingListEnd
    
    
    
    %-----------EXPERIENCE-----------
    \section{Experience}
\resumeSubHeadingListStart

  \resumeSubheading
    {Microsoft}{June 2025 -- August 2025}
    {Software Engineer Intern}{Bengaluru}
    \resumeItemListStart
      \resumeItem{Built \textbf{ControllerSync}, a production-grade Kubernetes controller in \textbf{Golang} using shard-based consistent hashing to distribute and manage \textbf{CustomResourceDefinitions (CRDs)} efficiently across controller replicas.}
      \resumeItem{Implemented \textbf{lease-based leader election} and automatic shard reassignment, maintaining \textbf{99.95\% system availability} while minimizing reconciliation overhead.}
      \resumeItem{Redesigned the shard coordination mechanism, achieving \textbf{faster horizontal scalability} and reducing \textbf{CPU utilization by 28\%} under peak workloads.}
      \resumeItem{Enhanced fault tolerance through replica-aware failover logic, ensuring zero state loss during node restarts and maintaining stability across \textbf{500+ node clusters}.}
    \resumeItemListEnd


\resumeSubHeadingListEnd
\vspace{-16pt}
    %-----------PROJECTS-----------
    \section{Projects}
    \vspace{-5pt}
    \resumeSubHeadingListStart
     \resumeProjectHeading
  {\textbf{Spotlight – AI-Powered Webinar \& Sales Platform} $|$ \footnotesize\emph{{Next.js, Node.js, Vapi AI, Pinecone, OBS, PostgreSQL}}}
  {{\href{https://github.com/TuShArBhArDwA/Spotlight}{\faGithub\ \textcolor{blue}{\textbf{GitHub}}}}}
  \resumeItemListStart
    \resumeItem{Increased lead conversion by \textbf{15\%} through deployment of AI-based sales agents in breakout rooms, enabling voice-driven interactions and instant call-to-action execution.}
    \resumeItem{Enhanced attendee engagement by \textbf{20\%} via real-time CTAs, product pop-ups, and personalized lead funnels integrated into webinar sessions.}
    \resumeItem{Improved sales tracking efficiency by \textbf{30\%} using an adaptive lead pipeline with intelligent follow-ups and AI-assisted status progression, ensuring secure role-based access via \textbf{Clerk}.}
    \resumeItem{Reduced streaming latency by \textbf{25\%} through optimized \textbf{OBS/WebRTC integration} and session management with the Stream SDK.}
  \resumeItemListEnd
  \vspace{-13pt}

\resumeProjectHeading
  {\textbf{PulseAI Prep – AI-Powered Interview Assistant} $|$ \footnotesize\emph{{Next.js, TypeScript, Gemini API, Firebase, VAPI}}}
  {{\href{https://github.com/TuShArBhArDwA/PulseAI}{\faGithub\ \textcolor{blue}{\textbf{GitHub}}}}}
  \resumeItemListStart
    \resumeItem{Developed an AI-powered mock interview platform supporting real-time voice interviews, improving preparation experience for over \textbf{100 users}.}
    \resumeItem{Integrated the \textbf{Gemini API} for adaptive question generation and automated scoring across communication, technical, and analytical dimensions.}
    \resumeItem{Implemented secure authentication and data analytics using \textbf{Firebase Auth} and Firestore, achieving \textbf{99.9\% uptime} and reliable user performance tracking.}
    \resumeItem{Reduced response latency by \textbf{35\%} via optimized streaming through \textbf{VAPI}, enhancing conversational realism in AI-led sessions.}
  \resumeItemListEnd
  \vspace{-13pt}

\resumeProjectHeading
  {\textbf{Hire Me – Full Stack Job Portal} $|$ \footnotesize\emph{{MongoDB, Express.js, React, Node.js, Clerk, Sentry}}}
  {{\href{https://github.com/TuShArBhArDwA/HireMe}{\faGithub\ \textcolor{blue}{\textbf{GitHub}}}}}
  \resumeItemListStart
    \resumeItem{Built a full-stack job portal enhancing candidate experience by \textbf{30\%} through seamless job discovery, application tracking, and resume management.}
    \resumeItem{Designed a recruiter dashboard for job posting, candidate evaluation, and progress tracking, reducing the hiring cycle by \textbf{35\%}.}
    \resumeItem{Optimized backend APIs and MongoDB queries, reducing average response time by \textbf{15\%} and improving overall system scalability.}
  \resumeItemListEnd

\resumeSubHeadingListEnd


    \vspace{-15pt}
    
    
    
    
    
%-----------TECHNICAL SKILLS-----------
\section{Technical Skills}
\begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
        \textbf{Languages:} C++, Python, Golang (Go), TypeScript, JavaScript, SQL \\
        \textbf{Frameworks \& Libraries:} React.js, Node.js, Express.js \\
        \textbf{Databases:} MongoDB, PostgreSQL \\
        \textbf{Developer Tools:} Git, Docker, Kubernetes, Azure, VS Code \\
        \textbf{Core CS Topics:} Data Structures \& Algorithms, Object-Oriented Programming, , Operating Systems, Computer Networks, Database Systems (DBMS), System Design \\
    }}
\end{itemize}

    
     \vspace{-15pt}
    
    
    %-----------ACHIEVEMENTS---------------
    \section{Achievements}
    \resumeSubHeadingListStart
        \resumeItemListStart

            \resumeItem{Secured a position in the Dean’s List, representing the\textbf{ top 10\%} of the college for academic excellence.}
            \resumeItem{Secured \textbf{7th position} in the New Year Codeathon 2025, organized by Sakshm AI and supported by Microsoft.}
            \resumeItem{Technical Head of a student coding \textbf{\href{https://linkedin.com/company/apnacollegelpu}{\textcolor{blue}{community}}}, followed by 3,000+ students.}
            \resumeItem{Ranked in the \textbf{top 0.1\% mentors} on \textbf{\href{https://topmate.io/tusharbhardwaj}{\textcolor{blue}{Topmate}}}, recognized for impactful mentorship and guidance.}
            \resumeItem{Achieved a \textbf{LeetCode Contest Rating of 1600} with \textbf{1000+ problems solved} and a \textbf{720+ day streak}, demonstrating strong algorithmic knowledge and coding proficiency.}

        \resumeItemListEnd
    \resumeSubHeadingListEnd
    
    
    
    \end{document}
    
