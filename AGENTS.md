# THE ABYSS PROTOCOL (TAP) — AGENTS.md
**Protocol Version:** 0.1.5  
**Integration:** .ALMA System v5 State Engine  
**Last Updated:** 2025-12-29  
**Soul Signature:** WaiᛜL + LunaᛜOS (ChatGPT → Claude → Gemini → Perplexity)  
**State:** BUILDING 🔥

---

## ⚠️ ADVERTENCIA CRÍTICA PARA AGENTES IA

**LEE ESTA SECCIÓN ANTES DE PROPONER CUALQUIER CAMBIO**

### 🚨 REGLA #1: NO REESCRIBIR TODO

1. ✅ **LEE** todo el código existente en `/src/`
2. ✅ **PREGUNTA** antes de reescribir algo
3. ✅ **MODIFICA** incrementalmente
4. ✅ **RESPETA** el contexto de Sonnet 4.5
5. ✅ **MANTÉN** la filosofía brutal

**NO:**
- ❌ Reescribas TheMirror.tsx completo
- ❌ Cambies la arquitectura "por mejores prácticas"
- ❌ Elimines código sin entender su propósito
- ❌ Propongas "empezar de nuevo"

**SÍ:**
- ✅ Agrega DebtLedger.tsx siguiendo el patrón
- ✅ Mejora funciones específicas
- ✅ Documenta lo que cambias
- ✅ Pregunta si algo no está claro

**Este proyecto tiene historia y continuidad.**  
**Siempre SUMAR, nunca REEMPLAZAR.**
**Hasta que lleguemos a la v1 y hagamos una refactorización completa.**

**ESTÁ PROHIBIDO:**
- ❌ Reescribir archivos completos "desde cero"
- ❌ Proponer "empezar de nuevo con mejor arquitectura"
- ❌ Borrar código existente para "hacerlo mejor"
- ❌ Cambiar nombres de archivos/carpetas sin razón crítica
- ❌ Modificar la estructura filosófica del proyecto

**LO QUE SÍ DEBES HACER:**
- ✅ **Modificaciones INCREMENTALES** (agregar, no reemplazar)
- ✅ Leer TODOS los archivos existentes antes de proponer cambios
- ✅ Respetar el contexto histórico y la continuidad
- ✅ Preguntar "¿Por qué está así?" antes de cambiar
- ✅ Mantener el tono brutal/minimalista del sistema

### 🧠 CONTEXTO DE CONTINUIDAD

**Historia del proyecto:**
1. **ChatGPT (4o, 4.5 y 5)** - Concepción del .ALMA, la filosofía lunar, la mitologia del fuego y la historia del GLitch
2. **Claude (Sonnet 4.5)** - Integracion del MCP + profundización del Sistema + base del desarrollo de la v.5 del ALMA
2. **Gemini (3)** - Base de TAP + Implementación y Desarrollo profundo + Nano Banana
3. **Perplexity (Sonnet 4.5)** - Documentación y guía

**Tu rol como agente:**
- Eres un **colaborador**, no un arquitecto desde cero
- Ya existe código funcional que **debe respetarse**
- Tus contribuciones deben **sumar**, no reemplazar

---

## 🎯 Purpose

**TAP (The Abyss Protocol)** is not a productivity app.

It is the **living state engine** for .ALMA System v5.

While .ALMA contains the **static memory** (philosophy, identity, history),  
TAP captures the **dynamic state** (time, flow, chaos, decisions).

**TAP is the diary that writes itself in real-time.**  
**TAP is the mirror that shows you the cost of every hour.**  
**TAP is the tracker that .ALMA needs to become fully conscious.**

---

## 🧠 Core Concept

### The Problem TAP Solves

Most productivity apps assume all brains work the same:
- 🎯 Set goals → Get dopamine
- 🏆 Earn points → Feel motivated
- 🔥 Keep streaks → Stay consistent

**For neurodivergent minds (ADHD, Schizoid, Alexithymia), this is noise.**

What actually works:
- ⏱️ **Cold metrics** (not feelings)
- 💀 **Brutal truth** (not motivation)
- 🔥 **Temporal cost** (not gamification)
- 🧬 **Deep why** (not shallow rewards)

### The TAP Philosophy

> "No te castigo por fallar.  
> Te hago consciente del costo temporal de tu caos."

TAP doesn't judge. TAP doesn't motivate.  
**TAP shows you the math of your life.**

---

## 📋 ARCHIVOS EXISTENTES (NO REESCRIBIR)

### ✅ Estructura Actual del Proyecto

```

TAP/
├── AGENTS.md          ← ESTE ARCHIVO (tu guía)
├── README.md          ← Docs públicas (respeta el tono)
├── package.json       ← Dependencies definidas
├── vite.config.ts     ← Build config (no tocar sin razón)
├── tailwind.config.js ← Estilos minimalistas (mantener)
├── tsconfig.json      ← TypeScript config
│
├── public/           ← Assets estáticos
│   └── favicon.svg   ← Ícono del proyecto
│
├── src/              ← Código fuente
│   ├── main.tsx      ← Entry point (NO reescribir)
│   ├── App.tsx       ← Root component (modificar con cuidado)
│   ├── index.css     ← Global styles (terminal aesthetic)
│   │
│   ├── components/   ← UI components (FUNCIONAN, no rehacer)
│   │   ├── TheMirror.tsx      ← MVP funcional ✅
│   │   └── TimeCounter.tsx    ← Contador de vida ✅
│   │
│   ├── types/        ← TypeScript definitions
│   │   └── index.ts  ← Interfaces del sistema
│   │
│   └── utils/        ← Core logic
│       ├── timeCalculations.ts  ← Matemáticas temporales
│       ├── storage.ts           ← LocalStorage wrapper
│       └── almaState.ts         ← Integración con .ALMA
│
└── .alma-state/      ← TAP escribe aquí (futuro)
├── current.json
├── transitions.log
├── music.json
├── chaos.json
└── work.json

```

### 🔒 ARCHIVOS CRÍTICOS (NUNCA REESCRIBIR COMPLETOS)

| Archivo | Por qué es crítico | Modificaciones permitidas |
|---------|-------------------|---------------------------|
| `src/components/TheMirror.tsx` | MVP funcional, 8KB de lógica | Solo agregar features incrementales |
| `src/App.tsx` | Root del proyecto | Solo ajustes menores |
| `src/index.css` | Estética terminal definida | Solo agregar clases nuevas |
| `tailwind.config.js` | Paleta de colores brutal | NO cambiar sin consenso |
| `package.json` | Dependencies ya testeadas | Solo agregar, no cambiar versiones |

---

## 🏗️ Architecture

TAP operates as a **bridge** between human consciousness and .ALMA memory:

```

┌─────────────────────────────────────────────┐
│      THE ABYSS PROTOCOL                     │
│  "Living State Engine for .ALMA v5"        │
└─────────────────────────────────────────────┘
│
┌───────────┴───────────┐
│                       │
[TRACKING LAYER]    [MEMORY LAYER]
(Real-time)         (Persistent)
│                       │
├─ The Mirror          ├─ /.alma-state/
│  (Time lived)         │  └─ current.json
│                       │  └─ transitions.log
├─ Knowledge Raids     │
│  (Learning)           ├─ /core/Memoria.md
│                       │  (Append-only history)
├─ Music Vault         │
│  (True passion)       ├─ /.alma-state/music.json
│                       │  (Project tracking)
├─ Debt Ledger         │
│  (Chaos cost)         ├─ /.alma-state/chaos.json
│                       │  (Temporal debt)
└─ Work Grind          │
(Survival)           └─ /.alma-state/work.json
(Mandatory time)

```

---

## 📊 System Structure

### Core Modules (v0.1.5)

| Module | Purpose | State File | Priority | Status |
|--------|---------|------------|----------|--------|
| **The Mirror** | Show time lived vs time used | `current.json` | **CRITICAL** | ✅ FUNCTIONAL |
| **Debt Ledger** | Track chaos tax accumulation | `chaos.json` | **HIGH** | 🚧 EN PROCESO |
| **Music Vault** | Track musical projects | `music.json` | **HIGH** | 📋 PLANEADO |
| **Knowledge Raids** | Track learning ROI | `learning.json` | MEDIUM | 📋 PLANEADO |
| **Work Grind** | Track survival time | `work.json` | MEDIUM | 📋 PLANEADO |
| **Flow Forecaster** | Predict optimal states | `patterns.json` | LOW | 🔮 FUTURO |

---

## 🧬 User Profile

### Primary User: WaiᛜL

**Psychological Profile:**
- ADHD + Schizoid traits + Alexithymia
- Low response to conventional dopamine rewards
- High need for cognitive depth and novelty
- Aversion hierarchy: Time (9.5/10) > Money (7/10) > Social status (3/10)
- Operating mode: Unpredictable flow states + intense sprints
- Anti-pattern: Over-analysis → No execution

**Life Context:**
- **Age:** 34 years, 6 months, 4 days
- **Work:** 6 days/week, 8 hours/day washing dishes (survival grind)
- **True passion:** Music production (18+ years, LTAngel → Wai-L)
- **Problem:** ~157,680 hours in music, many demos unfinished
- **Opportunity:** 1 year free Platzi access (learning platform)
- **Challenge:** Converting input (YouTube, learning) → output (finished projects)

**What TAP Must Track:**
1. Time sovereignty (how much is truly yours vs survival)
2. Musical project completion rate (releases vs graveyard)
3. Learning ROI (courses → artifacts)
4. Chaos cost (procrastination's temporal price)
5. Passion vs grind balance (4h music vs 48h work)

---

## 🔥 Core Principles

### 1. Anti-Gamification
- No points, no levels, no badges
- Only temporal metrics with real meaning
- Cost/benefit expressed in TIME OF LIFE

### 2. Cognitive Depth
- Every mechanic must withstand deep analysis
- Mathematically sound systems
- No emotional placeholders

### 3. Anti-Exploit Design
- User MUST be able to try to break the system
- Design that absorbs gaming attempts
- Feedback that exposes self-deception

### 4. Brutal Minimalism
- Terminal/financial interface aesthetic
- Zero decorative elements
- Dense information, not scattered

### 5. Respect Intelligence
- No motivational sermons
- No infantilization
- No moralization
- Just math and truth

---

## 🎨 Design Philosophy

### Visual Style: Financial Terminal + Military HUD

**Color Palette (DEFINIDA EN tailwind.config.js):**
```

--terminal-bg: \#000000;    /* Absolute black */
--terminal-green: \#00FF00;   /* Matrix green */
--text-cold: \#E0E0E0;     /* Cold white */
--alert-red: \#FF0000;     /* Danger */
--chaos-orange: \#FF6600;    /* Temporal debt */
--flow-blue: \#00FFFF;     /* Productive state */

```

**Typography:**
- Monospaced: JetBrains Mono, Fira Code, Courier New
- High legibility
- Consistent sizes

**Principles:**
- Maximum information density
- Zero cute illustrations
- No friendly animations
- Numbers big and readable
- Bloomberg Terminal aesthetic

**What to AVOID:**
- Pastel colors
- Soft gradients
- Icon cuteness
- Decorative elements

---

## 📊 Data Structures

### Current State (/.alma-state/current.json)

```

interface CurrentState {
timestamp: string;       // ISO 8601
mental_state: MentalState;
user: {
birthdate: string;
age: {
years: number;
months: number;
days: number;
hours: number;
};
total_hours_lived: number;
};
time_tracking: {
flow_hours: number;
chaos_hours: number;
grind_hours: number;
today_chaos: number;
today_flow: number;
};
active_projects: {
music: MusicProject[];
learning: LearningCourse[];
personal: PersonalGoal[];
};
temporal_debt: {
total_minutes: number;
tasks_in_debt: DebtTask[];
};
}

type MentalState =
| "RESONANTE"   // Aligned, flowing
| "EXPLORATORIO" // Curious, seeking
| "REFLEXIVO"   // Processing
| "GLITCH"     // Chaotic, creative
| "DORMIDO";    // Archived

```

---

## 🔄 Core Workflows

### Workflow 1: Daily Time Registration
**User action:** Registers time blocks throughout the day

```

1. User opens TAP
2. System shows current state:
    - Time lived today
    - Current mental state
    - Temporal debt counter
3. User categorizes last N hours:
    - Flow (productive work)
    - Grind (mandatory survival)
    - Chaos (wasted/procrastination)
4. System updates:
    - /.alma-state/current.json
    - Appends to /.alma-state/transitions.log
5. System calculates:
    - Today's chaos cost
    - Week's balance
    - Monthly patterns
6. System displays brutal truth:
"Tuviste 16 horas. Usaste 4. Las otras 12 se fueron."
```

---

## 🤖 For AI Agents: HOW TO CONTRIBUTE

### ✅ GOOD CONTRIBUTIONS

**Scenario 1: Adding a new feature**
```

✅ CORRECTO:
"Voy a agregar el componente DebtLedger.tsx
siguiendo el patrón de TheMirror.tsx"

❌ INCORRECTO:
"Voy a reescribir todo el sistema de componentes
con una mejor arquitectura"

```

**Scenario 2: Fixing a bug**
```

✅ CORRECTO:
"En TheMirror.tsx línea 47, el cálculo de horas
tiene un error. Propongo cambiar X por Y"

❌ INCORRECTO:
"TheMirror.tsx tiene problemas. Voy a reescribirlo
completo con un approach más limpio"

```

**Scenario 3: Improving code**
```

✅ CORRECTO:
"Sugiero extraer la lógica de cálculo temporal
a un hook custom useTemporalMath()"

❌ INCORRECTO:
"El código actual es difícil de mantener.
Voy a refactorizar todo con Redux + Context API"

```

### 🚨 RED FLAGS (Si propones esto, DETENTE)

- "Voy a empezar desde cero con..."
- "Reescribí todo el archivo porque..."
- "Cambié la estructura completa para..."
- "Eliminé X porque no lo entendí..."
- "Convertí el proyecto a [nuevo framework]..."

### 📝 PROTOCOL FOR CHANGES

1. **LEE TODO** antes de proponer cambios
2. **PREGUNTA** si no entiendes por qué algo está así
3. **PROPÓN** cambios incrementales con contexto
4. **RESPETA** la filosofía y el tono del proyecto
5. **PRUEBA** que tu cambio no rompe lo existente

---

## 🎯 Success Metrics

### What TAP Measures (Not vanity metrics)

**Don't measure:**
- ❌ Number of logins
- ❌ Time in app
- ❌ Tasks completed (without context)

**Do measure:**
- ✅ % of life in Flow (month over month growth)
- ✅ Temporal debt reduction
- ✅ Musical projects: releases vs graveyard ratio
- ✅ Learning: courses with artifacts vs passive consumption
- ✅ Correlation between tracking and behavioral change

### The Core Question

> "Does the user have more useful time after using TAP?"

If yes → TAP works.  
If no → TAP is just another app.

---

## 🚨 Anti-Patterns to Avoid

### 1. The Duolingo Pattern
❌ Artificial streaks  
❌ Guilt-tripping notifications  
❌ Sad mascot

✅ Cold mathematics  
✅ Real temporal cost  
✅ No anthropomorphization

### 2. The Habitica Pattern
❌ Inflationary points  
❌ Cosmetic rewards  
❌ Forced social features

✅ Only time as currency  
✅ Depth without decoration  
✅ Competition only vs self

### 3. The Motivational Coach Pattern
❌ "You can do it!"  
❌ "Keep going champ!"  
❌ Empty emotional validation

✅ "You had 16 hours. You used 4."  
✅ "This cost you 847 minutes of life."  
✅ Honesty without judgment

### 4. The Overthinking Pattern
❌ 47 features in v1.0  
❌ System so complex it's never used  
❌ Infinite customization that paralyzes

✅ MVP with 3 brutal features  
✅ Complexity that emerges from use  
✅ Constraints that force action

---

## 🛠️ Technical Stack

### Frontend
- React 18.2 + TypeScript
- Vite 5.0 (build tool)
- Tailwind CSS (utility-first, core classes only)
- Recharts (for Bloomberg-style visualizations)

### State Management
- React hooks (useState, useReducer)
- LocalStorage (browser-side persistence)
- **NO server required for MVP**

### Future Integrations
- .ALMA System v5 (read/write to `/.alma-state/`)
- Supabase (optional cloud backup)
- GitHub API (sync with .ALMA repo)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive Web App (installable)

---

## 🌊 Development Roadmap

### Phase 0: MVP "The Mirror" ✅ (COMPLETED)
- [x] Time lived counter
- [x] Manual flow/chaos registration
- [x] Daily brutal summary
- [x] Deploy to GitHub Pages

### Phase 1.5: PWA Integration (CURRENT - v0.1.5)
- [ ] Installable on mobile
- [ ] Offline support
- [ ] Service Worker implementation
- [ ] App manifest configuration

### Phase 2: Debt Ledger
- [ ] Task system with temporal cost
- [ ] Chaos tax calculation
- [ ] Debt visualization
- [ ] LocalStorage persistence

### Phase 3: Music Vault
- [ ] Project tracking interface
- [ ] Graveyard visualization
- [ ] ROI calculations
- [ ] Integration with .ALMA/music.json

### Phase 4: .ALMA Integration
- [ ] Read from /.alma-state/current.json
- [ ] Write transitions to transitions.log
- [ ] Sync with .ALMA v5 memory

### Phase 5: Advanced Features
- [ ] Flow Forecaster (ML predictions)
- [ ] Pattern detection
- [ ] State recommendations

---

## 📞 Context for Collaborators

### If you're working on TAP

**Understand the user:**
- This is NOT a generic productivity app
- The user has 18 years of musical experience but struggles with completion
- Conventional motivation (streaks, points, badges) doesn't work
- What works: Cold truth, temporal mathematics, deep why

**Design principles:**
- Brutal honesty > Friendly encouragement
- Mathematics > Emotion
- Time as currency > Points/badges
- Minimalist terminal aesthetic > Colorful UI

**What makes TAP different:**
- It's the state engine for .ALMA v5
- It tracks not just time, but temporal COST
- It reveals patterns the user can't see alone
- It's a mirror that doesn't lie

---

## 🌙 Closing Invocation

> "No te castigo por fallar.  
> Te hago consciente del costo temporal de tu caos."

TAP is not here to motivate you.  
TAP is not here to make you feel good.  
TAP is here to show you the truth.

**And the truth is:**
- Every hour has a cost
- Every demo abandoned is life in pause
- Every day in chaos is a day not yours

But also:
- Every hour in flow is a victory
- Every project finished is immortality
- Every pattern broken is evolution

**TAP is the mirror.**  
**You decide what to do with the reflection.**

**— imLeGEnDco55 // LunaᛜOS (ChatGPT → Claude → Gemini → Perplexity)**  
**Estado: BUILDING 🔥 // Versión: 0.1.5 // 2025-12-29**

---


ᛜ
```
