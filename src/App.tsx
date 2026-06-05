import React from 'react';
import { Printer, BookOpen, PenLine, Languages } from 'lucide-react';
import { motion } from 'motion/react';

const words = [
  { en: "Hello", ph: "/həˈloʊ/", uz: "Salom" },
  { en: "Goodbye", ph: "/ɡʊdˈbaɪ/", uz: "Xayr" },
  { en: "Name", ph: "/neɪm/", uz: "Ism" },
  { en: "I am", ph: "/aɪ æm/", uz: "Men" },
  { en: "You are", ph: "/ju ɑr/", uz: "Sen (siz)" },
  { en: "He is", ph: "/hi ɪz/", uz: "U (erkak)" },
  { en: "She is", ph: "/ʃi ɪz/", uz: "U (ayol)" },
  { en: "Nice", ph: "/naɪs/", uz: "Yoqimli" },
  { en: "To meet", ph: "/tə miːt/", uz: "Uchrashmoq" },
  { en: "Friend", ph: "/frɛnd/", uz: "Do'st" },
  { en: "How", ph: "/haʊ/", uz: "Qanday" },
  { en: "What", ph: "/wʌt/", uz: "Nima" },
  { en: "Where", ph: "/wɛr/", uz: "Qayerda" },
  { en: "When", ph: "/wɛn/", uz: "Qachon" },
  { en: "Why", ph: "/waɪ/", uz: "Nima uchun" },
  { en: "Yes", ph: "/jɛs/", uz: "Ha" },
  { en: "No", ph: "/noʊ/", uz: "Yo'q" },
  { en: "Please", ph: "/pliːz/", uz: "Iltimos" },
  { en: "Thank you", ph: "/θæŋk juː/", uz: "Rahmat" },
  { en: "Excuse me", ph: "/ɪkˈskjuːz miː/", uz: "Kechirasiz" },
];

const writeWords = [
  "Goodbye",
  "Name",
  "I am",
  "You are",
  "Nice",
  "To meet",
  "Friend",
  "Where",
  "Why",
  "Please",
  "Thank you",
  "Excuse me"
];

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-sky-100 p-4 md:p-8 font-sans flex flex-col items-center gap-8 print:block print:p-0">
      {/* Print Button */}
      <div className="mb-4 no-print top-6 right-6 fixed z-50">
        <button 
          onClick={handlePrint}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <Printer size={24} />
          <span>Save as PDF / Print</span>
        </button>
      </div>

      {/* Book Page Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-[210mm] min-h-[297mm] rounded-[2rem] shadow-2xl overflow-hidden relative print-only-shadow-none flex flex-col"
      >
        <div className="p-8 md:p-12 flex-1 flex flex-col">
          
          {/* Section 1: Reading */}
          <section className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-100 p-2.5 rounded-full border-4 border-pink-300 text-pink-500 transform -rotate-6 shadow-sm">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">1. Read and translate:</h2>
            </div>

            <div className="bg-blue-50/70 rounded-[1.5rem] p-4 md:p-6 border-4 border-blue-100 space-y-3 shadow-inner">
              
              <Bubble emoji="👧" name="Sarah" color="pink" align="left">
                Hello. My name is Sarah. What is your name?
              </Bubble>
              
              <Bubble emoji="👨🦰" name="Tom" color="blue" align="right">
                Hello. My name is Tom.
              </Bubble>

              <Bubble emoji="👧" name="Sarah" color="pink" align="left">
                I am 9 years old. How old are you, Tom?
              </Bubble>

              <Bubble emoji="👨🦰" name="Tom" color="blue" align="right">
                I am 10 years old.
              </Bubble>

              <Bubble emoji="👧" name="Sarah" color="pink" align="left">
                I am from Canada. Where are you from?
              </Bubble>

              <Bubble emoji="👨🦰" name="Tom" color="blue" align="right">
                I am from America.
              </Bubble>

              <Bubble emoji="👧" name="Sarah" color="pink" align="left">
                I like apples 🍎. And I like reading books 📚.
              </Bubble>

              <Bubble emoji="👨🦰" name="Tom" color="blue" align="right">
                I like bananas 🍌. And I like playing football ⚽.
              </Bubble>

              <Bubble emoji="👧" name="Sarah" color="pink" align="left">
                Nice to meet you! ✨
              </Bubble>

            </div>
          </section>

          {/* Section 2: Writing */}
          <section className="flex-1 flex flex-col">
             <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="bg-green-100 p-2.5 rounded-full border-4 border-green-300 text-green-600 transform rotate-6 shadow-sm">
                <PenLine size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">2. Write about yourself:</h2>
            </div>
            
            <div className="bg-amber-50/50 flex-1 rounded-3xl border-4 border-amber-200 p-8 md:p-10 shadow-inner flex flex-col justify-start space-y-12 min-h-[300px] relative mt-2 mb-4">
               <div className="w-full border-b-4 border-dotted border-gray-400"></div>
               <div className="w-full border-b-4 border-dotted border-gray-400"></div>
               <div className="w-full border-b-4 border-dotted border-gray-400"></div>
               <div className="w-full border-b-4 border-dotted border-gray-400"></div>
               <div className="w-full border-b-4 border-dotted border-gray-400"></div>
               <div className="w-full border-b-4 border-dotted border-gray-400"></div>
            </div>
          </section>

        </div>
      </motion.div>

      {/* Page 2: New Words */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white w-full max-w-[210mm] min-h-[297mm] rounded-[2rem] shadow-2xl overflow-hidden relative print-only-shadow-none flex flex-col mb-8 print:mb-0 print:break-before-page"
      >
        <div className="p-8 md:p-12 flex-1 flex flex-col">
          <section className="flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-2.5 rounded-full border-4 border-purple-300 text-purple-600 transform rotate-3 shadow-sm">
                <Languages size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">3. New words to learn:</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {words.map((w, i) => (
                <div key={i} className="flex flex-col bg-purple-50/50 border-2 border-purple-200 rounded-2xl p-4 shadow-sm text-center relative overflow-hidden transition-colors hover:bg-purple-100/50">
                  <span className="text-2xl md:text-3xl font-bold text-indigo-900 mb-1">{w.en}</span>
                  <span className="text-sm font-mono text-gray-500 mb-2">{w.ph}</span>
                  <div className="h-0.5 w-12 bg-purple-300 mx-auto mb-2"></div>
                  <span className="text-lg md:text-xl font-bold text-purple-700">{w.uz}</span>
                  <span className="absolute top-2 left-3 text-xs md:text-sm font-bold text-purple-400">{i + 1}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>

      {/* Page 3: Write words (Part 1) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white w-full max-w-[210mm] min-h-[297mm] rounded-[2rem] shadow-2xl overflow-hidden relative print-only-shadow-none flex flex-col mb-8 print:mb-0 print:break-before-page"
      >
        <div className="p-8 md:p-12 flex-1 flex flex-col">
          <section className="flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-orange-100 p-2.5 rounded-full border-4 border-orange-300 text-orange-600 transform -rotate-3 shadow-sm">
                <PenLine size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">4. Repeat and write down words:</h2>
            </div>
            
            <div className="flex flex-col flex-1 justify-evenly gap-8">
              {writeWords.slice(0, 6).map((word, i) => (
                <div key={i} className="flex flex-col relative w-full mb-6">
                  <span className="text-xl md:text-2xl font-bold text-indigo-900 mb-4 ml-2 font-['Comic_Sans_MS',cursive,sans-serif]">{word}</span>
                  <div className="flex flex-col gap-[35px]">
                    <div className="w-full border-b-2 border-dotted border-gray-400"></div>
                    <div className="w-full border-b-2 border-dotted border-gray-400"></div>
                    <div className="w-full border-b-2 border-dotted border-gray-400"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>

      {/* Page 4: Write words (Part 2) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white w-full max-w-[210mm] min-h-[297mm] rounded-[2rem] shadow-2xl overflow-hidden relative print-only-shadow-none flex flex-col mb-8 print:mb-0 print:break-before-page"
      >
        <div className="p-8 md:p-12 flex-1 flex flex-col">
          <section className="flex-1 flex flex-col">
             <div className="flex flex-col flex-1 justify-evenly gap-8 pt-4">
              {writeWords.slice(6, 12).map((word, i) => (
                <div key={i + 6} className="flex flex-col relative w-full mb-6">
                  <span className="text-xl md:text-2xl font-bold text-indigo-900 mb-4 ml-2 font-['Comic_Sans_MS',cursive,sans-serif]">{word}</span>
                  <div className="flex flex-col gap-[35px]">
                    <div className="w-full border-b-2 border-dotted border-gray-400"></div>
                    <div className="w-full border-b-2 border-dotted border-gray-400"></div>
                    <div className="w-full border-b-2 border-dotted border-gray-400"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

interface BubbleProps {
  emoji: string;
  name: string;
  color: 'pink' | 'blue';
  align: 'left' | 'right';
  children: React.ReactNode;
}

function Bubble({ emoji, name, color, align, children }: BubbleProps) {
  const isLeft = align === 'left';
  const bgColor = color === 'pink' ? 'bg-pink-100' : 'bg-blue-100';
  const borderColor = color === 'pink' ? 'border-pink-300' : 'border-blue-300';
  const textColor = color === 'pink' ? 'text-pink-950' : 'text-blue-950';
  
  return (
    <div className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex gap-3 max-w-[85%] ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="flex flex-col items-center justify-end">
          <div className="text-2xl md:text-3xl bg-white rounded-full p-2 border-2 border-slate-100 shadow-sm leading-none shrink-0">{emoji}</div>
          <span className="text-[10px] md:text-xs font-bold text-gray-500 mt-1 uppercase tracking-wide">{name}</span>
        </div>
        <div className={`px-4 py-2 md:px-5 md:py-3 rounded-2xl md:rounded-[1.5rem] ${bgColor} ${borderColor} border-2 shadow-sm text-base md:text-lg font-bold ${textColor} flex items-center relative ${isLeft ? 'rounded-bl-none' : 'rounded-br-none'}`}>
            {children}
        </div>
      </div>
    </div>
  );
}
