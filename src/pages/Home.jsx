import { useState, useRef, useEffect } from "react";

export default function Home() {
    const disorders = [
        {
            title: "Anxiety",
            text: "Excessive worry, restlessness, racing thoughts, or panic-like feelings that affect daily life.",
        },
        {
            title: "Depression",
            text: "Low mood, loss of interest, low energy, sleep changes, or feeling hopeless for many days.",
        },
        {
            title: "Stress",
            text: "Mental pressure, irritability, headaches, fatigue, or difficulty focusing during demanding periods.",
        },
        {
            title: "Burnout",
            text: "Emotional exhaustion, reduced motivation, and feeling detached from study, work, or responsibilities.",
        },
        {
            title: "ADHD",
            text: "A pattern of inattention, impulsivity, or hyperactivity that can affect learning, work, and routines.",
        },
        {
            title: "PTSD",
            text: "Stress responses after trauma, including flashbacks, avoidance, sleep issues, or feeling constantly alert.",
        },
        {
            title: "Autism",
            text: "A neurodevelopmental difference that can affect communication, sensory processing, and social interaction.",
        },
        {
            title: "FOMO",
            text: "Fear of missing out can create anxiety, comparison, and pressure to stay constantly connected.",
        },
        {
            title: "OCD",
            text: "Unwanted repeated thoughts and urges that may lead to rituals or behaviors done to reduce distress.",
        },
        {
            title: "Panic Disorder",
            text: "Repeated panic attacks with sudden fear, fast heartbeat, shortness of breath, or fear of losing control.",
        },
        {
            title: "Bipolar Disorder",
            text: "Mood shifts that may include depressive lows and periods of unusually high energy or impulsive activity.",
        },
        {
            title: "Eating Disorders",
            text: "Unhealthy patterns around food, body image, control, or weight that can affect physical and mental health.",
        },
    ];

    const [disorderPage, setDisorderPage] = useState(0);
    const cardsPerPage = 4;
    const visibleDisorders = disorders.slice(disorderPage, disorderPage + cardsPerPage);

    const showNextDisorders = () => {
        setDisorderPage((currentPage) => {
            const nextPage = currentPage + cardsPerPage;
            return nextPage >= disorders.length ? 0 : nextPage;
        });
    };

    const categories = ["Mood", "Anxiety", "Sleep", "Stress", "Trauma", "Focus", "Neurodiversity", "Self-esteem"];
    const analysisOptions = [
        "Mood score overview",
        "Weekly wellbeing pattern",
        "Personalized self-care suggestions",
    ];

    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="container home-hero-inner">
                    <p className="eyebrow">Mental wellbeing companion</p>
                    <h1>Welcome to <span className="brand-script">Mythiorapy</span></h1>
                    <p className="hero-copy">
                        A calm place to understand your mood, take a quick quiz, and learn about common mental
                        health patterns in a simple way.
                    </p>
                    <div className="hero-actions">
                        <a className="btn" href="/quiz">Start Quiz</a>
                        <a className="btn secondary" href="/analysis">View Analysis</a>
                    </div>
                </div>
            </section>

            <main className="container home-content">
                <section className="quiz-panel">
                    <div>
                        <p className="eyebrow">Quick check-in</p>
                        <h2>Take a short mood quiz</h2>
                        <p className="muted">
                            Answer a few guided questions and get a clearer snapshot of how you are feeling today.
                        </p>
                    </div>
                    <a className="btn quiz-button" href="/quiz">Open Quiz</a>
                </section>

                <section className="home-section" id="information">
                    <div className="section-heading">
                        <p className="eyebrow">Information</p>
                        <h2>Mental health disorders</h2>
                        <p className="muted">
                            Learn the basics of common conditions. This information is educational and not a medical
                            diagnosis.
                        </p>
                    </div>

                    <div className="disorder-carousel">
                        <div className="disorder-grid">
                            {visibleDisorders.map((item) => (
                                <article className="info-card" key={item.title}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                        <button
                            className="carousel-arrow"
                            type="button"
                            aria-label="Show more mental health disorder cards"
                            onClick={showNextDisorders}
                        >
                            <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </section>

                <section className="home-section split-section">
                    <div>
                        <p className="eyebrow">Categories</p>
                        <h2>AI Helps</h2>
                    </div>
                    <div className="AI-helps">
                            
                        </div>
                </section>

                <section className="home-section analysis-preview">
                    <div className="section-heading">
                        <p className="eyebrow">Analysis</p>
                        <h2>Helpful insights after your quiz</h2>
                    </div>
                    <div className="analysis-options">
                        {analysisOptions.map((option, index) => (
                            <a className="analysis-option" href="/analysis" key={option}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                {option}
                            </a>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container footer-inner">
                    <a className="footer-brand brand-script" href="/">Mythiorapy</a>
                    <p>Supportive mental health awareness, mood tracking, and self-reflection tools.</p>
                </div>
            </footer>
        </div>
    );
}

function RuixenQueryBox() {
    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [showPopover, setShowPopover] = useState(false);

    useEffect(() => {
        // adjust height on mount and when input changes
        adjustHeight();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    function adjustHeight(reset) {
        const ta = textareaRef.current;
        if (!ta) return;
        if (reset) {
            ta.style.height = '56px';
            return;
        }
        ta.style.height = 'auto';
        const h = Math.min(Math.max(ta.scrollHeight, 56), 220);
        ta.style.height = h + 'px';
    }

    const handleSend = () => {
        if (!inputValue.trim()) return;
        console.log('Submitted:', inputValue);
        setInputValue('');
        adjustHeight(true);
    };

    const handleFileUpload = (files) => {
        if (!files) return;
        console.log('Uploaded files:', files);
        setShowPopover(false);
    };

    return (
        <div className="w-full px-4 py-6">
            <div
                className="relative max-w-2xl mx-auto rounded-2xl border overflow-hidden"
                style={{
                    backgroundImage: "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_chat_gradient.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '1px solid rgba(0,0,0,0.06)'
                }}
            >
                <textarea
                    id="ai-textarea"
                    ref={textareaRef}
                    placeholder="Ask anything..."
                    className="w-full resize-none border-none bg-transparent text-base text-white px-5 py-4 pr-24 rounded-2xl leading-[1.4]"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                    style={{ minHeight: 56, maxHeight: 220, outline: 'none' }}
                />

                <div style={{ position: 'absolute', bottom: 12, right: 12, display: 'flex', gap: 8 }}>
                    <button
                        type="button"
                        title="Record"
                        className="p-2 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.8)' }}
                        onClick={() => console.log('Mic click')}
                    >
                        🎤
                    </button>

                    <div style={{ position: 'relative' }}>
                        <button
                            type="button"
                            title="Upload"
                            className="p-2 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.8)' }}
                            onClick={() => setShowPopover((s) => !s)}
                        >
                            ⬆️
                        </button>

                        {showPopover && (
                            <div style={{ position: 'absolute', right: 0, bottom: 44, width: 220, background: 'white', borderRadius: 8, padding: 10, boxShadow: '0 6px 18px rgba(0,0,0,0.12)' }}>
                                <p style={{ margin: 0, fontSize: 13, color: '#333' }}>Upload files:</p>
                                <input type="file" multiple ref={fileInputRef} onChange={(e) => handleFileUpload(e.target.files)} style={{ marginTop: 8, width: '100%' }} />
                                <button className="btn" style={{ marginTop: 8, width: '100%' }} onClick={() => fileInputRef.current?.click()}>Choose Files</button>
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className="p-2 rounded-full"
                        style={{ background: inputValue.trim() ? '#004a58' : '#e6e6e6', color: inputValue.trim() ? '#fff' : '#999' }}
                    >
                        ➤
                    </button>
                </div>
            </div>
        </div>
    );
}
