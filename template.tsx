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
    \usepackage{verbatim}
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
      \resumeItem{Developed \textbf{ControllerSync}, a Kubernetes custom controller in Golang that applies shard-based consistent hashing to evenly balance custom resources across replicas.}
      \resumeItem{Engineered automatic shard redistribution and lease-based leader election, achieving \textbf{99.95\% uptime} and significantly reducing reconciliation latency.}
      \resumeItem{Optimized shard coordination logic, enabling \textbf{2× faster horizontal scaling} and lowering CPU utilization by \textbf{28\%} under peak cluster workloads.}
      \resumeItem{Strengthened cluster resilience by enabling seamless failover and zero data loss during replica scale-up/down events across clusters with \textbf{500+ nodes}.}
    \resumeItemListEnd

\resumeSubHeadingListEnd
\vspace{-16pt}
    %-----------PROJECTS-----------
    \section{Projects}
    \vspace{-5pt}
    \resumeSubHeadingListStart
     \resumeProjectHeading
      {\textbf{Spotlight - AI-Powered Webinar \& Sales Platform} $|$ \footnotesize\emph{{Next.js, Node.js, Vapi AI, Pinecone, OBS, PostgreSQL}}}{{{{\href{https://github.com/TuShArBhArDwA/Spotlight}{\faGithub\ \textcolor{blue}{\textbf{GitHub}}}}}}}
\resumeItemListStart
  \resumeItem{Increased lead conversion rate by 45\% by deploying AI-powered sales agents in breakout rooms, enabling automated voice interactions and instant call-to-action execution.}
  \resumeItem{Boosted attendee engagement by 50\% through real-time CTAs, product pop-ups, and personalized lead funnels integrated into webinar streams.}
  \resumeItem{Accelerated sales cycle tracking by 60\% with an adaptive lead pipeline, automated follow-ups, and AI-assisted status progression, while ensuring secure multi-role access via Clerk.}
  \resumeItem{Reduced streaming latency by 35\% via OBS/WebRTC integration and optimized session management using the Stream SDK.}
\resumeItemListEnd
\vspace{-13pt}

           \resumeProjectHeading
          {\textbf{Hire Me - Full Stack Job Portal} $|$ \footnotesize\emph{{MongoDB, Express.js, React, Node.js, Clerk, Sentry}}}
            {{{{\href{https://github.com/TuShArBhArDwA/HireMe}{\faGithub\ \textcolor{blue}{\textbf{GitHub}}}}}}}
          \resumeItemListStart
            \resumeItem{Transformed job seeker experience, increasing user engagement by 40\% through seamless job search, resume uploads, and application tracking.}
            \resumeItem{Boosted hiring efficiency by 35\% by implementing recruiter dashboards for job posting, application management, and candidate evaluation, streamlining the recruitment process.}
            \resumeItem{Revamped system performance, reducing database response times by 30\% through leveraged MongoDB queries using Sentry, ensuring faster and smoother user interactions.}
          \resumeItemListEnd
          
          \vspace{-13pt}

    \resumeProjectHeading
          {\textbf{Snappy - Realtime Chat Application} $|$ \footnotesize\emph{{React, MongoDB, Express.js, Socket.io, Node.js}}}
          {{{{\href{https://github.com/TuShArBhArDwA/Snappy}{\faGithub\ \textcolor{blue}{\textbf{GitHub}}}}}}}
          \resumeItemListStart
            \resumeItem{Achieved 99.9\% uptime, ensuring seamless real-time communication with minimal latency, enhancing user experience and engagement.}
            \resumeItem{Optimized WebSocket connections, reducing server load by 40\%, leading to improved scalability and performance.}
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
        \textbf{Core CS Topics:} Data Structures \& Algorithms, Object-Oriented Programming, 
        Multithreading \& Concurrency, Operating Systems, Computer Networks, Database Systems (DBMS), System Design \\
        \textbf{Special Interests:} Performance Optimization, Distributed Systems, Parallel Computing \\
    }}
\end{itemize}

    
     \vspace{-15pt}
    
    
    %-----------ACHIEVEMENTS---------------
    \section{Achievements}
    \resumeSubHeadingListStart
        \resumeItemListStart

            \resumeItem{Secured a position in the Dean’s List, representing the\textbf{ top 1\%} of the college for academic excellence.}
            \resumeItem{Secured \textbf{7th position} in the New Year Codeathon 2025, organized by Sakshm AI and supported by Microsoft.}
            \resumeItem{Technical Head of a student coding \textbf{\href{https://linkedin.com/company/apnacollegelpu}{\textcolor{blue}{community}}}, followed by 3,000+ students.}
            \resumeItem{Ranked in the \textbf{top 0.1\% mentors} on \textbf{\href{https://topmate.io/tusharbhardwaj}{\textcolor{blue}{Topmate}}}, recognized for impactful mentorship and guidance.}
            \resumeItem{Solved \textbf{1000+ DSA problems} and maintaining a \textbf{650+ day streak} on \textbf{\href{https://leetcode.com/u/Tusharr2004/}{\textcolor{blue}{LeetCode}}} , demonstrating consistency and coding efficiency.}
            \resumeItem{ Div3 on \textbf{\href{https://www.codechef.com/users/tushar2004b}{\textcolor{blue}{CodeChef}}} with a \textbf{850+ days streak}.}
            \resumeItem{Winner of Unstop Giveaway, recognized for active participation in tech competitions}
        \resumeItemListEnd
    \resumeSubHeadingListEnd
    
    
    
    \end{document}
    
