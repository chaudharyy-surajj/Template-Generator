const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'app/templates/page.tsx');
let content = fs.readFileSync(FILE_PATH, 'utf8');

// The elegant, nature-inspired, futuristic SVG packs.
// Opacities strictly kept very low (0.05 - 0.20) for 80% UI / 20% atmosphere balance.
const NATURE_SVG_PACKS = [
  // Pack 1: Ocean Flow (Flowing wave + deep water dust)
  `
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>`,

  // Pack 2: Cyber Forest (Minimal leaf silhouettes + green fireflies)
  `
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>`,

  // Pack 3: Atmospheric Sky (Sunset gradients + slow abstract clouds)
  `
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>`,
      
  // Pack 4: Night Node (Grid + glowing neon star dust)
  `
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>`
];

const idRegex = /id:\s*['"]([^'"]+)['"]/g;
let match;
let idsToProcess = [];
while ((match = idRegex.exec(content)) !== null) {
  idsToProcess.push(match[1]);
}
idsToProcess = [...new Set(idsToProcess)];

console.log("Found " + idsToProcess.length + " total templates to inject Nature/Futuristic elements.");

let colorIndex = 0;
for (const id of idsToProcess) {
  const regex = new RegExp('(id:\\s*"' + id + '".*?code:\\s*\`)([\\s\\S]*?)(\`,\\s*preview:\\s*\\()([\\s\\S]*?)(\\)\\s*\\})', 's');
  
  const blockMatch = regex.exec(content);
  if (!blockMatch) continue;

  let openCount = 0;
  const previewDataStart = blockMatch.index + blockMatch[1].length + blockMatch[2].length + blockMatch[3].length;
  let actualEndIndex = -1;
  
  for (let i = previewDataStart; i < content.length; i++) {
    if (content[i] === '(') openCount++;
    if (content[i] === ')') {
      if (openCount === 0) {
        actualEndIndex = i;
        break;
      }
      openCount--;
    }
  }

  if (actualEndIndex !== -1) {
    const oldCode = blockMatch[2];
    const oldPreview = content.substring(previewDataStart, actualEndIndex);

    const packToInject = NATURE_SVG_PACKS[colorIndex % NATURE_SVG_PACKS.length];

    const injectIntoSnippet = (snippet) => {
      // Prevent duplicates
      if (snippet.includes("Elegant Nature Layer")) return snippet;
      
      // Inject behind the UI (i.e. directly after the first opening wrapper div)
      return snippet.replace(/(<div[^>]*>)/, (matched) => {
        return matched + packToInject;
      });
    };

    const newCode = injectIntoSnippet(oldCode);
    const newPreview = injectIntoSnippet(oldPreview);
    
    const beforeCode = content.substring(0, blockMatch.index + blockMatch[1].length);
    const betweenCodeAndPreview = content.substring(blockMatch.index + blockMatch[1].length + blockMatch[2].length, previewDataStart);
    const afterPreview = content.substring(actualEndIndex);
      
    content = beforeCode + newCode + betweenCodeAndPreview + newPreview + afterPreview;
    console.log("✓ Added ELEGANT NATURE Elements to " + id);
  } else {
    console.log("Failed to parse parenthesis for " + id);
  }
  
  colorIndex++;
}

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log('✅ Global Elegant Nature SVG Inject done!');
