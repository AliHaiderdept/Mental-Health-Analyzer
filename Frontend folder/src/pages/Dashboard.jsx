export default function Dashboard() {
    return (
        <div className="container">
            <h1>Dashboard</h1>
            <p className="muted">Overview of your recent assessments and trends.</p>

            <div className="stats">
                <div className="stat">
                    <h3>Recent Score</h3>
                    <p className="muted">Moderate</p>
                </div>
                <div className="stat">
                    <h3>Assessments</h3>
                    <p className="muted">3 in last month</p>
                </div>
                <div className="stat">
                    <h3>Suggestions</h3>
                    <p className="muted">Breathing, walk, journaling</p>
                </div>
            </div>

            <div className="card">
                <h2>Activity</h2>
                <p className="muted">No recent activities found. Try taking a new quiz.</p>
            </div>
        </div>
    );
}