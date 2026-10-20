import {Link} from "react-router-dom";
import './hado-quiz.css'

function Hado_quiz() {
    return (
        <div className="learn">
            <h1>hado quiz</h1>
            <div className="quiz-description">
                <h2>Hado Quiz</h2>
                <p>
                    Test your knowledge of the Hado language with an
                    interactive multiple-choice quiz!
                </p>

                <p>
                    Each question presents a Hado word. Choose its correct
                    meaning, earn points, and improve your vocabulary.
                </p>

                <h3>Features</h3>

                <ul>
                    <li>Four answer options per question.</li>
                    <li>Instant feedback on your answers.</li>
                    <li>Earn points for every correct answer.</li>
                    <li>Complete 20 questions per round.</li>
                    <li>View your final score at the end.</li>
                </ul>

                <p>
                    Challenge yourself, learn new words, and become more
                    confident in the Hado language!
                </p>
            </div>
            <div className="button-quiz">
                <Link to={"/hado"} type="button" className="btn-primary">
                    Start
                </Link>
            </div>
        </div>
    );
}

export default Hado_quiz;