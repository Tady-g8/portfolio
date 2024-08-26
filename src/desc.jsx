import './css/desc.css'
import NextButton from './nextButton';

export default function Desc() {
    
    let words = [
        "You’re gonna need a bigger array.",
        "Houston, we have a solution.",
        "I see dead pixels.",
        "Keep calm and carry code.",
        "To infinity and beyond... in code!",
        "I’m the king of the DOM!",
        "Here’s looking at you, code!",
        "This is the code you’re looking for.",
        "You can’t handle the code!",
        "It’s alive! It’s alive!",
        "There’s no place like 127.0.0.1.",
        "Why so serious? Let’s code!",
        "I love the smell of fresh code in the morning.",
        "Say ‘hello’ to my little script!",
    ];

    return (
        <>
            <div className="desc">

                <h2><span className='colorText'>Front-end</span> <br /> developer <br /> portfolio</h2>
                
                <div className="boxes">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <h3 className='message'>{words[Math.floor(Math.random() * words.length)]}</h3>
                </div>

            </div>

            <div className="nextButtonDiv">
                <NextButton part="about" />
            </div>
        </>
    )
}