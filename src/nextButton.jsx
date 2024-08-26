import './css/nextButton.css'

export default function NextButton({ part }) {
    return (
        <div className="nextButton">
            <a href={`#${part}`}>↓</a>
        </div>
    );
}