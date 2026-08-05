import ResultCard from "../components/ResultCard";

export default function Analysis() {
    return (
        <div className="container">
            <h1>Analysis</h1>
            <p className="muted">Below is a summary of your latest assessment and suggestions to help improve your wellbeing.</p>

            <div className="card">
                <ResultCard/>
            </div>

           
        </div>
    );
}