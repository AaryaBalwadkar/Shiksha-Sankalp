// import React, { useState, useEffect } from 'react';

// function TypingEffect() {
//   const text = "This is a typing effect";
//   const targetWord = "typing";
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     let timeout;
//     if (!isPaused) {
//       // Typing effect: display next character
//       if (index < text.length) {
//         timeout = setTimeout(() => {
//           setDisplayedText((prev) => prev + text[index]);
//           setIndex((prev) => prev + 1);
//         }, 150);
//       } else {
//         // Full text displayed; pause for 10 seconds
//         setIsPaused(true);
//         timeout = setTimeout(() => {
//           setDisplayedText("");
//           setIndex(0);
//           setIsPaused(false); // Resume typing after 10 seconds
//         }, 2000);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [index, isPaused, text]);

//   const splitText = displayedText.split(targetWord);

//   return (
//     <div className="typing-effect">
//       {splitText.map((part, idx) => (
//         <span key={idx}>
//           {part}
//           {idx < splitText.length - 1 && (
//             <span style={{ color: "yellow" }}>{targetWord}</span>
//           )}
//         </span>
//       ))}
//     </div>
//   );
// }

// export default TypingEffect;
import React, { useState, useEffect } from 'react';

function TypingEffect() {
  const texts = ["Hey! I am Lio", "Your Guide"]; // Updated sentences
  const highlightWords = ["Lio", "Guide"]; // Words to highlight in yellow
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // Track which sentence is being typed

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < texts[textIndex].length) {
        setDisplayedText((prev) => prev + texts[textIndex][index]);
        setIndex((prev) => prev + 1);
      } else {
        // After a sentence is fully typed, pause and switch to the next one
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length); // Loop to the first sentence after the last
        }, 1000); // 1-second pause before switching sentences
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [index, texts, textIndex]);

  // Split the text by highlight words and render with yellow color for those words
  const formattedText = displayedText.split(new RegExp(`(${highlightWords.join("|")})`, "gi")).map((part, idx) => (
    <span
      key={idx}
      style={{ color: highlightWords.includes(part) ? "yellow" : "inherit" }}
    >
      {part}
    </span>
  ));

  return (
    <div className="typing-effect">
      {formattedText}
    </div>
  );
}

export default TypingEffect;
