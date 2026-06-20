const tocLinks = [
    ["Overview", "overview"],
    ["Major Categories", "major-categories"],
    ["Anxiety Disorders", "anxiety"],
    ["Mood Disorders", "mood"],
    ["ADHD", "adhd"],
    ["Autism Spectrum", "autism"],
    ["AuDHD", "audhd"],
    ["PTSD", "ptsd"],
    ["Generational Trauma", "generational-trauma"],
    ["Personality Disorders", "personality"],
    ["Eating Disorders", "eating"],
    ["Dissociative Disorders", "dissociative"],
    ["Modern Causes", "modern-causes"],
    ["Final Note", "final-note"],
];

const categoryCards = [
    {
        title: "Emotional Regulation",
        color: "#0b7a3a",
        text: "Mood and anxiety conditions can affect how strongly emotions appear and how long they stay.",
    },
    {
        title: "Neurodevelopment",
        color: "#2463eb",
        text: "ADHD, autism, and AuDHD involve differences in attention, sensory processing, routines, and communication.",
    },
    {
        title: "Trauma Response",
        color: "#9a3412",
        text: "PTSD and generational trauma can keep the nervous system alert long after danger or instability has passed.",
    },
    {
        title: "Body and Identity",
        color: "#be185d",
        text: "Eating and dissociative disorders may involve body image, memory, identity, or feeling disconnected from reality.",
    },
];

const disorderSections = [
    {
        id: "anxiety",
        number: "1",
        title: "Anxiety Disorders",
        color: "#0f766e",
        intro: "These disorders involve excessive fear, nervousness, worry, or panic even when there is little or no danger.",
        blocks: [
            ["Common Types", ["Generalized Anxiety Disorder", "Panic Disorder", "Social Anxiety Disorder", "Obsessive-Compulsive Disorder"]],
            ["Symptoms", ["Constant worrying", "Racing thoughts", "Sweating and shaking", "Fast heartbeat", "Fear of judgment", "Difficulty relaxing"]],
            ["Causes", ["Trauma", "Overthinking", "Genetics", "Toxic environment", "Academic and financial pressure"]],
        ],
    },
    {
        id: "mood",
        number: "2",
        title: "Mood Disorders",
        color: "#7c3aed",
        intro: "These disorders strongly affect emotional stability and mood regulation.",
        blocks: [
            ["Common Types", ["Depression", "Bipolar Disorder"]],
            ["Depression", ["A person may feel emotionally heavy, empty, tired, hopeless, or disconnected from life."]],
            ["Bipolar Disorder", ["Extreme emotional highs called mania", "Deep emotional lows called depression"]],
            ["Causes", ["Brain chemistry imbalance", "Chronic stress", "Loneliness", "Childhood neglect", "Hormonal changes"]],
        ],
    },
    {
        id: "adhd",
        number: "3",
        title: "ADHD",
        color: "#2563eb",
        intro: "Attention Deficit Hyperactivity Disorder affects focus, attention regulation, impulse control, and energy levels. It is not simply being lazy or easily distracted.",
        blocks: [
            ["Inattentive Type", ["Easily distracted", "Forgetful", "Trouble completing tasks", "Daydreaming frequently"]],
            ["Hyperactive-Impulsive Type", ["Constant movement", "Interrupting others", "Acting without thinking", "Restlessness"]],
            ["Combined Type", ["A mixture of inattentive and hyperactive symptoms."]],
            ["Causes and Modern Challenges", ["Genetics", "Brain development differences", "Premature birth", "Environmental factors", "Social media can make focus harder by constantly rewarding quick attention shifts."]],
        ],
    },
    {
        id: "autism",
        number: "4",
        title: "Autism Spectrum Disorder",
        color: "#0891b2",
        intro: "Autism is a neurodevelopmental condition affecting communication, sensory processing, social interaction, and behavior patterns. It is called a spectrum because support needs vary greatly.",
        blocks: [
            ["Common Characteristics", ["Difficulty understanding social cues", "Strong special interests", "Sensory sensitivity", "Repetitive behaviors", "Preference for routines", "Deep focus on certain topics"]],
            ["Important Note", ["Autism is not an illness to cure. Many autistic people experience and process the world differently."]],
            ["Causes", ["Genetic influences", "Brain development differences", "Environmental factors during pregnancy"]],
        ],
    },
    {
        id: "audhd",
        number: "5",
        title: "AuDHD",
        color: "#4f46e5",
        intro: "AuDHD is an informal term used when someone has both ADHD and autism together. It can feel internally contradictory because ADHD may crave novelty while autism may crave routine.",
        blocks: [
            ["Common Experiences", ["Hyperfocus yet distractibility", "Social exhaustion", "Sensory overload", "Emotional dysregulation", "Executive dysfunction"]],
            ["Helpful Understanding", ["Support usually works best when it respects both needs: enough structure for predictability and enough flexibility for attention and energy changes."]],
        ],
    },
    {
        id: "ptsd",
        number: "6",
        title: "PTSD",
        color: "#b45309",
        intro: "Post-Traumatic Stress Disorder can develop after experiencing or witnessing traumatic events. The nervous system may remain stuck in survival mode even after danger is gone.",
        blocks: [
            ["Common Causes", ["Abuse", "Violence", "War", "Serious accidents", "Natural disasters", "Emotional neglect"]],
            ["Symptoms", ["Flashbacks", "Nightmares", "Hypervigilance", "Emotional numbness", "Panic reactions", "Avoiding reminders of trauma"]],
        ],
    },
    {
        id: "generational-trauma",
        number: "7",
        title: "Generational Trauma",
        color: "#9333ea",
        intro: "Generational trauma happens when emotional wounds and unhealthy survival patterns pass from one generation to another.",
        blocks: [
            ["Examples", ["Parents raised in fear may unintentionally raise fearful children.", "Families affected by poverty, war, abuse, or neglect may pass emotional stress patterns down unconsciously."]],
            ["Effects", ["Anxiety", "Emotional suppression", "Trust issues", "Anger problems", "Fear-based parenting"]],
        ],
    },
    {
        id: "personality",
        number: "8",
        title: "Personality Disorders",
        color: "#dc2626",
        intro: "These involve long-term unhealthy behavior, emotional, identity, and relationship patterns that can cause distress or conflict.",
        blocks: [
            ["Common Types", ["Borderline Personality Disorder", "Narcissistic Personality Disorder", "Antisocial Personality Disorder"]],
            ["Understanding", ["These labels should be handled carefully. A professional assessment matters because symptoms can overlap with trauma, depression, anxiety, and neurodevelopmental differences."]],
        ],
    },
    {
        id: "eating",
        number: "9",
        title: "Eating Disorders",
        color: "#be185d",
        intro: "Eating disorders involve harmful patterns around food, body image, control, or weight and can seriously affect physical and mental health.",
        blocks: [
            ["Common Types", ["Anorexia Nervosa", "Bulimia Nervosa", "Binge Eating Disorder"]],
            ["Causes", ["Body image pressure", "Social media influence", "Low self-esteem", "Anxiety and trauma"]],
        ],
    },
    {
        id: "dissociative",
        number: "10",
        title: "Dissociative Disorders",
        color: "#475569",
        intro: "These involve disconnection from identity, memory, emotions, or surroundings.",
        blocks: [
            ["Common Type", ["Dissociative Identity Disorder"]],
            ["Symptoms", ["Memory gaps", "Feeling detached from reality", "Emotional numbness", "Identity confusion"]],
        ],
    },
];

const modernCauses = [
    ["Digital Overstimulation", "Constant notifications, scrolling, and content overload can exhaust the nervous system."],
    ["Social Media Comparison", "People compare their real lives to other people's edited highlights."],
    ["Loneliness", "Despite being connected online, many people feel emotionally isolated."],
    ["Economic Stress", "Financial instability increases chronic anxiety and pressure."],
    ["Academic and Career Pressure", "Modern success culture often glorifies burnout."],
    ["Sleep Deprivation", "Poor sleep damages emotional regulation and brain health."],
    ["Trauma and Unstable Environments", "Childhood emotional neglect can deeply affect adult mental health."],
];

export default function Info() {
    return (
        <div className="info-page">
            <section className="info-hero">
                <p className="eyebrow">Mental Health Information Chart</p>
                <h1>Mental Disorders and Modern Psychological Conditions</h1>
                <p>
                    Mental disorders are conditions that affect emotions, thinking patterns, behavior,
                    communication, memory, focus, and daily functioning. In the modern world, these challenges
                    are rising because life has become faster, noisier, more competitive, and emotionally demanding.
                </p>
            </section>

            <div className="container info-layout">
                <aside className="info-toc-wrap">
                    <details className="info-toc" open>
                        <summary>Page Links</summary>
                        <nav aria-label="Info page sections">
                            {tocLinks.map(([label, id]) => (
                                <a href={`#${id}`} key={id}>{label}</a>
                            ))}
                        </nav>
                    </details>
                </aside>

                <main className="info-main">
                    <section className="info-panel" id="overview">
                        <h2>Overview</h2>
                        <p>
                            Mental health conditions can be mild, moderate, or severe. Some are temporary and caused by
                            stress, while others are lifelong neurodevelopmental conditions that affect how the brain
                            processes information.
                        </p>
                        <div className="note-box">
                            This page is for education and awareness only. It cannot diagnose anyone. If symptoms feel
                            intense, unsafe, or long-lasting, professional support is the right next step.
                        </div>
                    </section>

                    <section className="info-panel" id="major-categories">
                        <h2>Major Categories of Mental Disorders</h2>
                        <div className="category-card-grid">
                            {categoryCards.map((card) => (
                                <article className="category-card" style={{ "--card-color": card.color }} key={card.title}>
                                    <h3>{card.title}</h3>
                                    <p>{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {disorderSections.map((section) => (
                        <section className="info-panel disorder-detail" id={section.id} key={section.id}>
                            <div className="disorder-title-row" style={{ "--section-color": section.color }}>
                                <span>{section.number}</span>
                                <h2>{section.title}</h2>
                            </div>
                            <p>{section.intro}</p>
                            <div className="type-card-grid">
                                {section.blocks.map(([heading, items]) => (
                                    <article className="type-card" style={{ "--section-color": section.color }} key={heading}>
                                        <h3>{heading}</h3>
                                        <ul>
                                            {items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ))}

                    <section className="info-panel" id="modern-causes">
                        <h2>Why Mental Disorders Are Increasing Today</h2>
                        <div className="modern-grid">
                            {modernCauses.map(([title, text], index) => (
                                <article className="modern-card" key={title}>
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="info-panel final-note" id="final-note">
                        <h2>Important Final Note</h2>
                        <p>
                            Mental disorders are not moral failures, weakness, laziness, or attention-seeking. They are
                            complex conditions involving biology, psychology, environment, trauma, and nervous system
                            functioning.
                        </p>
                        <div className="healing-list">
                            {["Therapy", "Medication when appropriate", "Support systems", "Lifestyle changes", "Better sleep and nutrition", "Emotional safety", "Self-awareness"].map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                        <p>
                            The human mind is less like a machine and more like a living ecosystem. When stress, trauma,
                            isolation, or imbalance grow for too long, even strong minds can struggle.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}
