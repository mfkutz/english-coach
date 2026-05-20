export default function PhoneMockup() {
  return (
    <div className="relative w-[260px] mx-auto animate-float">
      {/* Glow behind phone */}
      <div className="absolute inset-0 -z-10 rounded-[44px] blur-3xl bg-indigo-500/20 scale-110" />

      {/* Phone shell */}
      <div className="relative w-[260px] h-[520px] rounded-[40px] border-2 border-[#2a2a5a] bg-[#0a0a22] shadow-2xl overflow-hidden">

        {/* Dynamic island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-12 pb-2 text-[10px] font-mono text-[#5555aa]">
          <span>9:41</span>
          <span>●●●</span>
        </div>

        {/* App header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1a1a3e]">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold font-display">J</span>
          </div>
          <div>
            <p className="text-white text-xs font-semibold font-body leading-none">JobCoach</p>
            <p className="text-[#5555aa] text-[10px] font-mono mt-0.5">1:1 with Manager</p>
          </div>
          <div className="ml-auto">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex flex-col gap-3 px-3 py-4 overflow-hidden">

          {/* AI message */}
          <div className="flex gap-2 items-end">
            <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-500/40 flex-shrink-0 flex items-center justify-center">
              <span className="text-indigo-300 text-[9px] font-bold">AI</span>
            </div>
            <div className="bg-[#13133a] border border-[#1e1e50] rounded-2xl rounded-bl-sm px-3 py-2 max-w-[170px]">
              <p className="text-[#c0c0f0] text-[11px] leading-relaxed font-body">
                Your manager just gave you critical feedback. How do you respond?
              </p>
            </div>
          </div>

          {/* User message */}
          <div className="flex gap-2 items-end justify-end">
            <div className="bg-indigo-600/80 rounded-2xl rounded-br-sm px-3 py-2 max-w-[160px]">
              <p className="text-white text-[11px] leading-relaxed font-body">
                I appreciate the feedback. Could you help me understand which part...
              </p>
            </div>
          </div>

          {/* AI message 2 */}
          <div className="flex gap-2 items-end">
            <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-500/40 flex-shrink-0 flex items-center justify-center">
              <span className="text-indigo-300 text-[9px] font-bold">AI</span>
            </div>
            <div className="bg-[#13133a] border border-[#1e1e50] rounded-2xl rounded-bl-sm px-3 py-2 max-w-[170px]">
              <p className="text-[#c0c0f0] text-[11px] leading-relaxed font-body">
                Great start! Try adding: "I'd like to make sure I improve in the right areas."
              </p>
            </div>
          </div>

          {/* Score pill */}
          <div className="flex justify-center mt-1">
            <div className="flex items-center gap-3 bg-[#0f0f2e] border border-[#1e1e50] rounded-full px-4 py-1.5">
              <span className="text-[10px] text-[#6060a0] font-mono">Fluency</span>
              <span className="text-indigo-400 text-[10px] font-mono font-bold">8.2</span>
              <span className="text-[10px] text-[#6060a0] font-mono">Clarity</span>
              <span className="text-green-400 text-[10px] font-mono font-bold">↑ 7.5</span>
            </div>
          </div>
        </div>

        {/* Recording button */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 pt-3 bg-gradient-to-t from-[#0a0a22] to-transparent">
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/30 animate-pulse-ring scale-125" />
              <button className="relative w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </button>
            </div>
            <span className="text-[#5555aa] text-[10px] font-mono">Hold to speak</span>
          </div>
        </div>
      </div>
    </div>
  )
}
