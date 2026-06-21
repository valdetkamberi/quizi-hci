/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { quizData } from './data';
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  Info,
  ChevronRight,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Internal util for clean classes (minimal shadcn style)
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type QuizState = 'INTRO' | 'PLAYING' | 'RESULT';

export default function App() {
  const [gameState, setGameState] = useState<QuizState>('INTRO');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setGameState('PLAYING');
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
  };

  const currentQuestion = quizData[currentIdx];

  const handleOptionClick = (idx: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks
    setSelectedOption(idx);
    if (idx === currentQuestion.correctAnswerIndex) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < quizData.length) {
      setCurrentIdx((i) => i + 1);
      setSelectedOption(null);
    } else {
      setGameState('RESULT');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl overflow-hidden min-h-[500px] flex flex-col relative">
        <AnimatePresence mode="wait">
          
          {/* INTRO SCREEN */}
          {gameState === 'INTRO' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center p-12 text-center h-full flex-grow"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <BookOpen size={32} />
              </div>
              <h1 className="text-3xl font-semibold mb-3 tracking-tight text-slate-900">
                Përgatitja për Provimin: HCI
              </h1>
              <p className="text-slate-500 mb-8 max-w-md leading-relaxed">
                Zhvillo njohuritë e tua mbi Ndërveprimin Njeri-Kompjuter. Do të përballesh me një set pyetjesh të bazuara thelbësisht mbi ligjëratat dhe konceptet thelbësore (30 pyetje thelbësore të mbuluara plotësisht).
              </p>
              <button
                onClick={startQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all active:scale-95 shadow-md flex items-center gap-2"
              >
                Start Quiz
                <ChevronRight size={18} />
              </button>
            </motion.div>
          )}

          {/* PLAYING SCREEN */}
          {gameState === 'PLAYING' && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col flex-grow"
            >
              <div className="p-6 border-b border-slate-100">
                <div className="flex justify-between items-center mb-4 text-sm font-medium text-slate-500 uppercase tracking-wider">
                  <span>Question {currentIdx + 1} of {quizData.length}</span>
                  <span>Score: {score}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="bg-blue-600 h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIdx) / quizData.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <h2 className="text-xl sm:text-2xl font-medium text-slate-900 mb-6 leading-snug">
                  {currentQuestion.text}
                </h2>

                <div className="space-y-3 flex-grow">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQuestion.correctAnswerIndex;
                    const isAnswered = selectedOption !== null;

                    let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 duration-200";
                    let icon = null;

                    if (!isAnswered) {
                      buttonClass = cn(buttonClass, "border-slate-200 hover:border-blue-300 hover:bg-slate-50 active:bg-slate-100");
                      icon = <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex-shrink-0" />;
                    } else {
                      if (isCorrect) {
                        buttonClass = cn(buttonClass, "bg-green-50 border-green-500 text-green-900 shadow-sm");
                        icon = <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />;
                      } else if (isSelected) {
                        buttonClass = cn(buttonClass, "bg-red-50 border-red-500 text-red-900");
                        icon = <XCircle className="text-red-500 flex-shrink-0" size={24} />;
                      } else {
                        buttonClass = cn(buttonClass, "opacity-50 border-slate-200 bg-white");
                        icon = <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex-shrink-0" />;
                      }
                    }

                    const labels = ["A", "B", "C", "D"];

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleOptionClick(idx)}
                        className={buttonClass}
                      >
                         <div className="flex flex-col items-center -mt-0.5 pointer-events-none">
                            {icon}
                         </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold mb-1 opacity-70">Opsioni {labels[idx]}</span>
                          <span className="leading-relaxed">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {selectedOption !== null && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6 space-y-4">
                        
                        <div className="flex items-start gap-3">
                           <div className="p-1.5 bg-blue-100 text-blue-700 rounded-lg shrink-0 mt-0.5">
                             <Info size={18} />
                           </div>
                           <div>
                             <h4 className="font-semibold text-slate-900 mb-1">Why?</h4>
                             <p className="text-sm text-slate-600 max-w-prose leading-relaxed">
                               {currentQuestion.explanation}
                             </p>
                           </div>
                        </div>

                        <div className="h-px w-full bg-slate-200/60" />

                        <div className="flex items-start gap-3">
                           <div className="p-1.5 bg-amber-100 text-amber-700 rounded-lg shrink-0 mt-0.5">
                             <Lightbulb size={18} />
                           </div>
                           <div>
                             <h4 className="font-semibold text-slate-900 mb-1">Memorization Tip</h4>
                             <p className="text-sm rounded-md font-medium text-amber-800 tracking-tight">
                               {currentQuestion.tip}
                             </p>
                           </div>
                        </div>

                      </div>

                      <button
                        onClick={nextQuestion}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        {currentIdx + 1 < quizData.length ? 'Next Question' : 'View Results'}
                        <ChevronRight size={20} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* RESULT SCREEN */}
          {gameState === 'RESULT' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center p-12 text-center h-full flex-grow"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center border-4 mb-6 shadow-sm border-blue-500 bg-blue-50 text-blue-600">
                  <span className="text-3xl font-bold">{score}/{quizData.length}</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 text-slate-900">
                {score / quizData.length > 0.7 ? "Excellent!" : "Keep studying!"}
              </h2>
              <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                Ju keni përfunduar modulin e pyetjeve mbi Ndërveprimin Njeri-Kompjuter sipas materialeve tuaja origjinale të lëndës.
              </p>
              
              <button
                onClick={startQuiz}
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw size={18} />
                Fillo nga e para
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
