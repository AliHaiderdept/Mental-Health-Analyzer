import { useEffect, useState } from 'react';

export default function ResultCard() {
    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('latestAnalysis');
            if (raw) setAnalysis(JSON.parse(raw));
        } catch (e) {
            // ignore
        }
    }, []);

    if (!analysis) {
        return (
            <div className="result">
                <h2 style={{ marginTop: 0 }}>Analysis Result</h2>
                <p className="muted">No recent analysis found.</p>
                <p>Take the focused quiz to get an analysis.</p>
                <div style={{ marginTop: 10 }}>
                    <a className="btn" href="/quiz">Start Quiz</a>
                </div>
            </div>
        );
    }

    const { percent, categoryScores, predictions, symptoms, recommendations, stability, urgent } = analysis;

    return (
        <div className="result">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ marginTop: 0 }}>Analysis Result</h2>
                <div style={{ textAlign: 'right' }}>
                    <div className="muted">Mental stability</div>
                    <strong style={{ fontSize: '1.1rem' }}>{stability}</strong>
                </div>
            </div>

            {urgent && (
                <div className="alert alert-high" role="alert" style={{ marginTop: 8 }}>
                    Immediate attention recommended: suicidal thoughts reported. Please contact emergency services or a mental-health professional.
                </div>
            )}

            <div style={{ marginTop: 12 }}>
                <div className="muted">Severity Score</div>
                <div className="progress" aria-hidden style={{ marginTop: 8 }}>
                    <div className="progress-bar" style={{ width: `${percent}%` }} />
                </div>
                <div style={{ marginTop: 8 }}><strong>{percent}%</strong> overall symptom severity</div>
            </div>

            <div className="stats" style={{ marginTop: 14 }}>
                {Object.entries(categoryScores).map(([k, v]) => (
                    <div className="stat" key={k}>
                        <div style={{ fontSize: '.95rem', marginBottom: 6 }}>{k.charAt(0).toUpperCase() + k.slice(1)}</div>
                        <div style={{ height: 8, background: '#eef6f9', borderRadius: 8, overflow: 'hidden' }}>
                            <div style={{ height: 8, width: `${v}%`, background: `linear-gradient(90deg,#ff7a7a,#ffb86b)`, transition: 'width .9s ease' }} />
                        </div>
                        <div style={{ marginTop: 8, fontSize: '.9rem' }}>{v}%</div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: 16 }}>
                <h3>Predicted Issues</h3>
                <div>
                    {predictions.map((p, i) => (
                        <span key={i} className="healing-list" style={{ display: 'inline-block', marginRight: 8 }}>
                            <strong style={{ color: '#d14' }}>{p}</strong>
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: 12 }}>
                <h3>Common Symptoms</h3>
                {symptoms.length === 0 ? <p className="muted">No major symptoms identified.</p> : (
                    <ul>
                        {symptoms.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                )}
            </div>

            <div style={{ marginTop: 12 }}>
                <h3>Recommendations</h3>
                {recommendations.length === 0 ? <p className="muted">General wellbeing practices: sleep hygiene, regular exercise, and reach out if you need support.</p> : (
                    <ul>
                        {recommendations.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                )}
            </div>

            <div style={{ marginTop: 14 }}>
                <a className="btn" href="/dashboard">View Dashboard</a>
                <a className="btn secondary" href="/info" style={{ marginLeft: 8 }}>Resources</a>
            </div>
        </div>
    );
}