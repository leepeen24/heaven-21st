import { useState } from 'react';
import { motion } from 'framer-motion';
import TextType from './reactbits/TextType';

export default function LetterPane() {
  const [showBody, setShowBody] = useState(false);

  return (
    <div className="bg-white/90 p-8 rounded-lg shadow-xl max-w-2xl mx-auto my-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-200 relative">
      {/* Tape effect */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/80 rotate-2 shadow-sm z-10"></div>
      
      <div className="font-handwriting text-4xl text-gray-800 mb-6 leading-relaxed min-h-[60px]">
        <TextType
          text={["My Dearest Love,", "To my favorite person,", "Happy Birthday!"]}
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={1500}
          loop={false}
          cursorCharacter="|"
          onSentenceComplete={(index) => {
            if (index === 2) {
              setTimeout(() => setShowBody(true), 500);
            }
          }}
        />
      </div>

      {showBody && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-caveat text-3xl text-gray-700 space-y-6 leading-loose"
        >
          <p>
            As I look back on all our memories together, I realize how lucky I am to have you in my life.
            Every moment with you is a treasure I keep close to my heart.
          </p>
          <p>
            You bring so much joy, laughter, and warmth into my world. I hope this little digital scrapbook
            reminds you of some of our beautiful times together.
          </p>
          <p>
            Here's to many more adventures, sunsets, and quiet moments. I love you more than words can say.
          </p>
          <p className="mt-12 text-right font-bold text-4xl text-rose-600 transform -rotate-2">
            Yours always, <br/>
            <span className="text-2xl text-gray-500 font-normal mt-2 block">Your Name</span>
          </p>
        </motion.div>
      )}
    </div>
  );
}

