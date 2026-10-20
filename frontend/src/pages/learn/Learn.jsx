import {Link} from "react-router-dom";

import './Learn.css'

function Learn() {
    return (
        <div className="learn">
            <h1>Learn</h1>
            <h2>assignments</h2>
                <div className="card-container-learn">

                    <Link to="/hadoQuiz" className="card-learn">
                        <h2>🕸 Hado quiz</h2>
                        <p>
                            Test your Hado vocabulary with a fun multiple-choice quiz! Answer 20 questions, earn points,
                            and improve your language skills.
                        </p>
                    </Link>

                    <Link to="" className="card-learn">
                        <h2>🕸 -</h2>
                        <p>
                            coming soon
                        </p>
                    </Link>

                    <Link to="" className="card-learn">
                        <h2>🕸 -</h2>
                        <p>
                            coming soon
                        </p>
                    </Link>

                    <Link to="" className="card-learn">
                        <h2>🕸 -</h2>
                        <p>
                            coming soon
                        </p>
                    </Link>

                    <Link to="" className="card-learn">
                        <h2>🕸 -</h2>
                        <p>
                            coming soon
                        </p>
                    </Link>

                    <Link to="" className="card-learn">
                        <h2>🕸 -</h2>
                        <p>
                            coming soon
                        </p>
                    </Link>

                </div>
        </div>
    );
}
export default Learn;