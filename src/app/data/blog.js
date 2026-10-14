// Blog articles. Each post's `sections` drive the table of contents on its page.
// Content blocks: { p: "text" } | { list: ["item", ...] } | { quote: "text" }
// Read time is calculated from the text, so it stays accurate when articles are edited.

export const posts = [
  {
    slug: "how-to-choose-the-right-it-partner-in-india",
    title: "How to Choose the Right IT Partner in India: A Practical Checklist",
    excerpt:
      "Portfolio, process, communication and support — the questions that separate a vendor from a long-term technology partner.",
    category: "Strategy",
    icon: "compass",
    date: "2026-10-06",
    author: "Future IT Touch Editorial",
    takeaways: [
      "Judge partners on relevant outcomes, not just a long client list.",
      "A clear, written delivery process is a stronger signal than a low quote.",
      "Agree on communication rhythm and post-launch support before you sign.",
    ],
    sections: [
      {
        heading: "Why the choice matters more than the price",
        blocks: [
          {
            p: "India is home to thousands of IT service providers, from global giants to focused boutique teams. That choice is a strength, but it also means two quotes for the same project can look completely different. The cheapest proposal rarely stays the cheapest once rework, delays and missed requirements are counted.",
          },
          {
            p: "A good IT partner reduces risk. They ask the right questions early, flag problems before they become expensive, and build something your team can actually maintain. Treat the selection like a hire, not a purchase.",
          },
        ],
      },
      {
        heading: "Look for relevant proof, not just big names",
        blocks: [
          {
            p: "A long client list is reassuring, but relevance matters more. Ask to see projects similar to yours in scope, industry or technology, and ask what the partner was specifically responsible for.",
          },
          {
            list: [
              "Case studies that describe the problem, the approach and the result.",
              "Live products you can open and use, not just screenshots.",
              "References you can actually speak to.",
              "Independent reviews on platforms such as Google, Clutch or GoodFirms.",
            ],
          },
        ],
      },
      {
        heading: "Understand how they deliver",
        blocks: [
          {
            p: "Process is where projects succeed or fail. A mature team can explain, in plain language, how an idea moves from discovery to design, development, testing and launch — and who is accountable at each step.",
          },
          {
            p: "Ask how requirements are captured, how often you will see working software, how changes are handled, and how quality is checked before anything reaches your users. Vague answers here are a warning sign.",
          },
        ],
      },
      {
        heading: "Agree on communication and support up front",
        blocks: [
          {
            p: "Most friction in outsourced projects comes from communication, not code. Agree on a single point of contact, a regular update rhythm and the tools you will use before work starts.",
          },
          {
            quote: "The best partnerships feel like an extension of your own team — not a ticket queue.",
          },
          {
            p: "Finally, plan for life after launch. Clarify who hosts and maintains the product, how bugs are prioritised, and what ongoing support costs. A partner that is invested in your long-term success will be happy to discuss this early.",
          },
        ],
      },
    ],
  },
  {
    slug: "practical-ai-use-cases-for-growing-businesses",
    title: "AI in Everyday Business: Practical Use Cases That Pay Off",
    excerpt:
      "Skip the hype. Here's where artificial intelligence and machine learning deliver real value for growing businesses today.",
    category: "AI & ML",
    icon: "cpu",
    date: "2026-09-24",
    author: "Future IT Touch Editorial",
    takeaways: [
      "Start with a narrow, repetitive problem that already costs you time.",
      "Good data and clear success metrics matter more than the newest model.",
      "Keep people in the loop for decisions that affect customers.",
    ],
    sections: [
      {
        heading: "Start with problems, not technology",
        blocks: [
          {
            p: "Artificial intelligence is no longer reserved for large enterprises. Cloud services and pre-trained models have made it practical for businesses of every size. The trap is starting with the technology and looking for somewhere to use it.",
          },
          {
            p: "The most successful AI projects begin with a specific, repetitive task that already costs time or money — and a clear way to measure whether automation made it better.",
          },
        ],
      },
      {
        heading: "Use cases that work today",
        blocks: [
          {
            list: [
              "Customer support assistants that answer common questions and hand complex cases to people.",
              "Document processing that extracts data from invoices, forms and contracts.",
              "Demand forecasting that helps plan stock and staffing.",
              "Personalised recommendations in e-commerce and content platforms.",
              "Lead scoring that helps sales teams focus on the most promising enquiries.",
            ],
          },
          {
            p: "None of these replace your team. They remove repetitive work so people can spend their time on judgement, relationships and creativity.",
          },
        ],
      },
      {
        heading: "Data is the foundation",
        blocks: [
          {
            p: "Machine learning models are only as good as the data behind them. Before building anything, check that the data you need exists, is reasonably clean, and can be used responsibly and legally.",
          },
          {
            quote: "A simple model on well-organised data usually beats a sophisticated model on messy data.",
          },
        ],
      },
      {
        heading: "Rolling out AI responsibly",
        blocks: [
          {
            p: "Pilot with a small group, measure results against your baseline, and expand only when the numbers justify it. Keep a human in the loop wherever decisions affect customers, and be transparent with users when they are interacting with an automated system.",
          },
          {
            p: "Treat AI as an ongoing capability rather than a one-off project. Models need monitoring, and the best results come from steady, measured improvement.",
          },
        ],
      },
    ],
  },
  {
    slug: "cloud-migration-playbook",
    title: "Cloud Migration Without the Chaos: A Step-by-Step Playbook",
    excerpt:
      "Moving to the cloud can cut costs and improve reliability — if you plan it properly. A phased approach that keeps the business running.",
    category: "Cloud",
    icon: "cloud",
    date: "2026-09-11",
    author: "Future IT Touch Editorial",
    takeaways: [
      "Inventory everything before you move anything.",
      "Migrate in phases, starting with low-risk workloads.",
      "Plan cost monitoring and security from day one, not after launch.",
    ],
    sections: [
      {
        heading: "Why businesses move to the cloud",
        blocks: [
          {
            p: "Cloud platforms let businesses pay for what they use, scale when demand changes, and rely on infrastructure that is maintained and secured by specialists. For many teams, the biggest benefit is speed: new environments in minutes instead of weeks.",
          },
          {
            p: "But a migration done in a hurry can bring downtime, surprise bills and security gaps. The difference is planning.",
          },
        ],
      },
      {
        heading: "Step 1: Assess what you have",
        blocks: [
          {
            p: "List every application, database and integration you run today, along with who owns it and how critical it is. Note dependencies — the systems that talk to each other — because they usually need to move together.",
          },
        ],
      },
      {
        heading: "Step 2: Choose the right approach for each workload",
        blocks: [
          {
            list: [
              "Rehost: move as-is for a quick win with minimal change.",
              "Replatform: make small optimisations, such as moving to a managed database.",
              "Refactor: redesign for cloud-native services when long-term benefits justify it.",
              "Retire: switch off systems nobody needs any more.",
            ],
          },
        ],
      },
      {
        heading: "Step 3: Migrate in phases",
        blocks: [
          {
            p: "Start with low-risk, non-critical workloads to build confidence and refine the process. Test thoroughly, keep a rollback plan for every step, and schedule cutovers for quiet periods.",
          },
          {
            quote: "Every migration step should have a tested way back.",
          },
        ],
      },
      {
        heading: "Step 4: Optimise after you land",
        blocks: [
          {
            p: "Once workloads are running, review usage and costs regularly. Right-size resources, set up budget alerts, and apply security best practices such as least-privilege access and encrypted backups. The cloud rewards continuous attention.",
          },
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-basics-for-growing-businesses",
    title: "Cybersecurity Basics Every Growing Business Should Get Right",
    excerpt:
      "Most attacks exploit simple gaps. These fundamentals protect your data, your customers and your reputation.",
    category: "Security",
    icon: "shield",
    date: "2026-08-28",
    author: "Future IT Touch Editorial",
    takeaways: [
      "Multi-factor authentication and timely updates close the most common gaps.",
      "Back up regularly — and test that you can restore.",
      "Train your team; people are the first line of defence.",
    ],
    sections: [
      {
        heading: "Security is a business issue",
        blocks: [
          {
            p: "Cybersecurity is often seen as a technical problem, but its impact is commercial: lost data, interrupted operations and damaged customer trust. Smaller businesses are frequently targeted precisely because attackers expect weaker defences.",
          },
          {
            p: "The good news is that a handful of fundamentals block a large share of everyday attacks.",
          },
        ],
      },
      {
        heading: "The essentials",
        blocks: [
          {
            list: [
              "Turn on multi-factor authentication for email, cloud services and admin accounts.",
              "Keep operating systems, applications and plugins updated.",
              "Use a password manager and unique passwords everywhere.",
              "Give each person only the access they need for their role.",
              "Encrypt devices and sensitive data.",
            ],
          },
        ],
      },
      {
        heading: "Backups you can trust",
        blocks: [
          {
            p: "Backups are your safety net against ransomware, hardware failure and human error. Keep at least one copy offline or isolated, automate the schedule, and — most importantly — regularly test that you can actually restore.",
          },
          {
            quote: "A backup you have never restored is a hope, not a plan.",
          },
        ],
      },
      {
        heading: "People and planning",
        blocks: [
          {
            p: "Many incidents begin with a convincing email. Short, regular training helps your team recognise phishing and know how to report it. Pair that with a simple incident response plan so everyone knows who to call and what to do if something goes wrong.",
          },
        ],
      },
    ],
  },
  {
    slug: "website-or-mobile-app-what-does-your-business-need",
    title: "Website or Mobile App? Choosing What Your Business Really Needs",
    excerpt:
      "A responsive website, a progressive web app or a native app — how to pick the right platform for your customers and budget.",
    category: "Web & Apps",
    icon: "code",
    date: "2026-08-14",
    author: "Future IT Touch Editorial",
    takeaways: [
      "Most businesses should start with a fast, responsive website.",
      "Progressive web apps offer app-like features without app-store friction.",
      "Native apps make sense for frequent use and deep device features.",
    ],
    sections: [
      {
        heading: "Start with your customers",
        blocks: [
          {
            p: "The right platform depends on how your customers find you and how often they come back. Someone searching for a service once a year has very different needs from someone who checks an app every day.",
          },
        ],
      },
      {
        heading: "When a website is enough",
        blocks: [
          {
            p: "A fast, responsive website works on every device, is found through search engines, and is usually the most cost-effective way to reach new customers. For most businesses, it is the foundation everything else builds on.",
          },
        ],
      },
      {
        heading: "The middle ground: progressive web apps",
        blocks: [
          {
            p: "Progressive web apps (PWAs) run in the browser but can be installed on the home screen, work offline and send notifications on supported devices. They offer an app-like experience without the friction of app-store downloads.",
          },
        ],
      },
      {
        heading: "When a native app is worth it",
        blocks: [
          {
            list: [
              "Customers use your product frequently, often daily.",
              "You need deep device features such as advanced camera, Bluetooth or background tasks.",
              "Performance and polish are central to the experience.",
              "Presence in the App Store and Google Play matters to your audience.",
            ],
          },
          {
            quote: "Build for how your customers behave, not for what is fashionable.",
          },
          {
            p: "Many businesses start with a strong website, validate demand, then invest in an app once they understand what their most loyal customers need.",
          },
        ],
      },
    ],
  },
];

// ---------- Helpers ----------

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const wordsIn = (post) =>
  post.sections
    .flatMap((s) => [s.heading, ...s.blocks.flatMap((b) => b.p || b.quote || b.list || [])])
    .join(" ")
    .split(/\s+/).length;

export const readTime = (post) => `${Math.max(1, Math.ceil(wordsIn(post) / 180))} min read`;

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

// Newest first
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug) => posts.find((p) => p.slug === slug);
