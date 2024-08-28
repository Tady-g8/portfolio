import './css/nextButton.css'

export default function PrevButton({ part }) {
    return (
        <div className="prevButton">
            <a href={`#${part}`}>↑</a>
        </div>
    );
}