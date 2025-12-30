# THE ABYSS PROTOCOL (TAP) — AGENTS.md
**Protocol Version:** 0.2.0  
**Integration:** .ALMA System v5 State Engine  
**Last Updated:** 2025-12-29  
**Soul Signature:** WaiᛜL + LunaᛜOS (Enjambre Simbiótico)  
**State:** DEPLOYED 🚀

---

## ⚠️ ADVERTENCIA CRÍTICA PARA AGENTES IA

**ESTADO ACTUAL: v0.2.0 (Debt Ledger & PWA Live)**

### 🚨 REGLA #1: RESPETO AL LEGACY

El sistema ya tiene **datos reales de usuario en producción**.

**PROHIBIDO ABSOLUTAMENTE:**
- ❌ Borrar o reiniciar LocalStorage sin autorización explícita
- ❌ Modificar estructuras de datos sin migración
- ❌ Cambiar claves de almacenamiento existentes
- ❌ "Limpiar" datos que no entiendes

**DATOS PROTEGIDOS:**
- `tap-user-profile` → Birthdate + Daily Entries + Debt Tasks
- `tap-onboarding-completed` → Estado de setup inicial
- Cualquier key que empiece con `tap-`

**Si necesitas cambiar la estructura de datos:**
1. Crea función de migración
2. Preserva datos antiguos
3. Valida integridad post-migración
4. Documenta el cambio en changelog

---

## 🎯 Purpose

**TAP (The Abyss Protocol)** is not a productivity app.

It is the **living state engine** for .ALMA System v5.

While .ALMA contains the **static memory** (philosophy, identity, history),  
TAP captures the **dynamic state** (time, flow, chaos, decisions).

**TAP is the diary that writes itself in real-time.**  
**TAP is the mirror that shows you the cost of every hour.**  
**TAP is the debt collector that tracks your chaos tax.**

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

### ✅ Estructura Actual del Proyecto (v0.2.0)

```

TAP/
├── AGENTS.md          ← ESTE ARCHIVO (tu guía)
├── README.md          ← Docs públicas
├── package.json       ← Dependencies (Vite PWA añadido)
├── vite.config.ts     ← PWA config habilitada
├── tailwind.config.js ← Estilos terminal
├── tsconfig.json      ← TypeScript config
│
├── public/
│   ├── favicon.svg
│   └── manifest.json  ← PWA manifest (NUEVO)
│
├── src/
│   ├── main.tsx       ← Entry point
│   ├── App.tsx        ← Root component
│   ├── index.css      ← Global styles
│   │
│   ├── components/
│   │   ├── TheMirror.tsx       ← Monitor temporal v2.0 ✅
│   │   ├── TimeCounter.tsx     ← Contador de vida ✅
│   │   ├── TerminalSetup.tsx   ← Onboarding cyberpunk ✅
│   │   └── DebtLedger.tsx      ← Chaos Tax tracker ✅ (NUEVO)
│   │
│   ├── types/
│   │   └── index.ts            ← Interfaces actualizadas
│   │
│   └── utils/
│       ├── timeCalculations.ts ← Matemáticas temporales
│       ├── storage.ts          ← LocalStorage wrapper
│       ├── debtCalculations.ts ← Chaos Tax math (NUEVO)
│       └── almaState.ts        ← Integración .ALMA
│
└── .alma-state/        ← TAP escribe aquí (futuro)
├── current.json
├── transitions.log
├── debt.json       ← Debt tracking (NUEVO)
└── music.json      ← (Próximo)

```

### 🔒 ARCHIVOS CRÍTICOS (NUNCA REESCRIBIR COMPLETOS)

| Archivo | Por qué es crítico | Estado v0.2.0 |
|---------|-------------------|---------------|
| `src/components/TheMirror.tsx` | Monitor temporal con datos reales | v2.0 - Precision Mode ✅ |
| `src/components/DebtLedger.tsx` | Chaos Tax con deuda activa | v1.0 - MVP ✅ |
| `src/utils/storage.ts` | Maneja datos persistentes de usuario | CRÍTICO - NO TOCAR |
| `vite.config.ts` | PWA config en producción | PWA Habilitada ✅ |
| `package.json` | Dependencies estables | Vite PWA añadido ✅ |

---

## 🏗️ Architecture

TAP operates as a **bridge** between human consciousness and .ALMA memory:

```

┌─────────────────────────────────────────────┐
│      THE ABYSS PROTOCOL v0.2.0              │
│  "Living State Engine for .ALMA v5"        │
└─────────────────────────────────────────────┘
│
┌───────────┴───────────┐
│                       │
[TRACKING LAYER]    [MEMORY LAYER]
(Real-time PWA)     (Persistent)
│                       │
├─ The Mirror v2.0     ├─ LocalStorage
│  (Precision Time)     │  └─ tap-user-profile
│                       │  └─ tap-onboarding
├─ Debt Ledger v1.0    │
│  (Chaos Tax 10%)      ├─ /.alma-state/debt.json
│                       │  (Future sync)
├─ Music Vault         │
│  (Next Phase)         ├─ /.alma-state/music.json
│                       │
└─ Knowledge Raids     │
(Planned)            └─ /.alma-state/learning.json

```

---

## 📊 System Structure

### Core Modules (v0.2.0)

| Module | Purpose | State File | Priority | Status |
|--------|---------|------------|----------|--------|
| **The Mirror v2.0** | Precision Time Tracking | `tap-user-profile` | **CRITICAL** | ✅ ONLINE |
| **Debt Ledger v1.0** | Chaos Tax & Debt Tracking | `tap-user-profile.debt` | **CRITICAL** | ✅ ONLINE |
| **PWA Integration** | Offline-first, installable | `manifest.json` | **CRITICAL** | ✅ ONLINE |
| **Music Vault** | Track musical projects | `music.json` | **HIGH** | 🎯 NEXT |
| **Knowledge Raids** | Track learning ROI | `learning.json` | MEDIUM | 📋 PLANEADO |
| **Work Grind** | Track survival time | `work.json` | MEDIUM | 📋 PLANEADO |

---

## 🧬 New Features (v0.2.0)

### 1. PWA Integration (Ghost Protocol)
**Estado:** ✅ DEPLOYED

El sistema es ahora una **Progressive Web App**:
- 📱 Instalable en iOS/Android/Desktop
- 🔌 Offline-first (funciona sin conexión)
- 🎨 Estética "App Nativa" (sin browser UI)
- ⚡ Service Worker activo
- 📦 Manifest configurado

**Ubicación:** `vite.config.ts` + `public/manifest.json`

### 2. The Mirror v2.0 (Temporal Precision)
**Estado:** ✅ ONLINE

**Cambios clave:**
- **Onboarding Cyberpunk:** Nuevo flujo `TerminalSetup.tsx`
- **Input Preciso:** `datetime-local` para precisión de minutos
- **Zero Ansiedad:** Datos exactos desde el minuto 1
- **Why:** Elimina el "mis datos son aproximados" que genera ansiedad

**Experiencia:**
```

1. Usuario abre TAP por primera vez
2. TerminalSetup aparece (estilo Matrix)
3. Input: "¿Cuándo naciste?" (datetime-local)
4. Sistema calcula edad exacta en tiempo real
5. Mirror se activa con precisión de minutos
```

### 3. The Debt Ledger v1.0 (Chaos Tax)
**Estado:** ✅ ONLINE (MVP)

**Concepto:** La procrastinación genera **intereses compuestos**.

**Fórmula Brutal:**
```

Costo Actual = Costo Base × (1.10 ^ Días de Retraso)

```

**Ejemplos:**
- Tarea de 10 min ignorada 7 días → **19.5 min** (casi el doble)
- Tarea de 30 min ignorada 14 días → **115 min** (casi 2 horas)
- Tarea de 60 min ignorada 30 días → **1,047 min** (17.5 HORAS)

**Visualización:**
- Lista de tareas en deuda
- Costo original vs costo actual
- Días de retraso
- Total de tiempo perdido por caos

**Estados de tarea:**
- `active` → Acumulando interés
- `paid` → Completada (deuda saldada)
- `bankrupt` → Abandonada (aceptaste la pérdida)

---

## 📊 Data Structures (v0.2.0)

### UserProfile (Updated)

```

export interface UserProfile {
birthdate: string;      // ISO Date format (YYYY-MM-DDTHH:mm)
entries: DailyEntry[];  // Array de registros diarios
debt: DebtTask[];       // Array de tareas en deuda (NUEVO)
}

export interface DailyEntry {
date: string;           // ISO Date (YYYY-MM-DD)
flow: number;           // Minutos en Flow state
grind: number;          // Minutos en Grind (survival)
chaos: number;          // Minutos en Chaos (waste)
notes?: string;         // Notas opcionales
}

export interface DebtTask {
id: string;             // UUID
title: string;          // Nombre de la tarea
baseCost: number;       // Costo original en minutos
createdDate: string;    // ISO Date de creación
status: 'active' | 'paid' | 'bankrupt';
completedDate?: string; // ISO Date cuando se completó
}

```

### Chaos Tax Calculation

```

export function calculateDebtCost(
baseCost: number,
createdDate: string
): number {
const daysLate = Math.floor(
(Date.now() - new Date(createdDate).getTime()) / (1000 * 60 * 60 * 24)
);
return Math.round(baseCost * Math.pow(1.10, daysLate));
}

```

---

## 🔄 Core Workflows (Updated)

### Workflow 1: First-Time Setup (v2.0)
**User action:** Opens TAP for first time

```

1. PWA loads (offline-capable)
2. TerminalSetup.tsx appears:
┌──────────────────────────────┐
│ > INITIALIZING TAP SYSTEM... │
│ > When were you born?        │
│ [datetime-local input]       │
└──────────────────────────────┘
3. User enters exact birthdate
4. System calculates:
    - Total hours lived
    - Years, months, days, hours
    - Time lived TODAY so far
5. TheMirror v2.0 activates
6. LocalStorage saves profile
```

### Workflow 2: Adding Debt Task (NEW)
**User action:** Acknowledges procrastinated task

```

1. User opens "Debt Ledger"
2. Clicks "+ Add Debt"
3. Inputs:
    - Task title
    - Original time cost (minutes)
4. System creates DebtTask:
    - Generates UUID
    - Sets createdDate to NOW
    - Status = 'active'
    - Starts accumulating 10% daily
5. Debt appears in list with:
    - "Base: 30 min → Current: 45 min"
    - "Days Late: 4"
    - Action buttons: [Complete] [Abandon]
```

### Workflow 3: Paying Debt
**User action:** Completes procrastinated task

```

1. User clicks [Complete] on debt task
2. System:
    - Sets status = 'paid'
    - Records completedDate
    - Shows final cost vs original
    - Removes from "Active Debt" list
    - Adds to "Paid History"
3. Brutal feedback:
"Tarea completada. Te costó 45 minutos
en lugar de 30. Perdiste 15 minutos de
vida por procrastinación."
```

---

## 🤖 For AI Agents: HOW TO CONTRIBUTE (v0.2.0)

### ✅ GOOD CONTRIBUTIONS

**Scenario 1: Mejorando el Debt Ledger**
```

✅ CORRECTO:
"Voy a agregar filtros en DebtLedger.tsx:

- Mostrar solo 'active'
- Mostrar solo 'paid'
Línea 67, después del map()"

❌ INCORRECTO:
"Voy a reescribir DebtLedger con Redux
para mejor state management"

```

**Scenario 2: Preparando Music Vault**
```

✅ CORRECTO:
"Creando MusicVault.tsx siguiendo el
patrón de DebtLedger.tsx. Misma estructura,
diferentes cálculos (ROI en lugar de Chaos Tax)"

❌ INCORRECTO:
"Voy a refactorizar la arquitectura de
componentes antes de hacer Music Vault"

```

### 🚨 NEW RED FLAGS (v0.2.0)

- "Voy a migrar los datos a una estructura más limpia"
- "Voy a cambiar las keys de LocalStorage para consistencia"
- "Voy a resetear el estado porque..."
- "Voy a simplificar DebtTask eliminando campos innecesarios"

**RECUERDA:** Hay datos REALES. Tu "limpieza" = pérdida de datos de usuario.

---

## 🎯 Success Metrics (v0.2.0)

### What TAP Measures NOW

**Active Metrics (v0.2.0):**
- ✅ Total hours lived (precisión: minutos)
- ✅ Daily Flow/Grind/Chaos ratio
- ✅ Active debt tasks
- ✅ Total chaos tax accumulated
- ✅ Time wasted by procrastination

**Planned Metrics (v0.3+):**
- 📋 Musical projects completion rate
- 📋 Learning ROI (courses → artifacts)
- 📋 Weekly/Monthly patterns
- 📋 Flow state forecasting

### The Core Question (Still Valid)

> "Does the user have more useful time after using TAP?"

**v0.2.0 adds:**  
> "Can the user SEE the exact cost of their chaos?"

If yes → TAP works.  
If no → It's just math porn.

---

## 🚨 Anti-Patterns to Avoid

### NEW: The Data Migration Pattern (v0.2.0)
❌ "Los datos están mal estructurados, voy a migrarlos"  
❌ "Encontré datos legacy, voy a limpiarlos"  
❌ "Hay campos que no entiendo, voy a borrarlos"

✅ **CORRECTO:**
1. Lee TODOS los datos primero
2. Entiende por qué están así
3. Crea migración con rollback
4. PREGUNTA antes de ejecutar
5. Valida post-migración

---

## 🛠️ Technical Stack (v0.2.0)

### Frontend
- React 18.2 + TypeScript
- Vite 5.0 + **vite-plugin-pwa** (NUEVO)
- Tailwind CSS (terminal aesthetic)
- Recharts (para visualizaciones futuras)

### State Management
- React hooks (useState, useReducer, useEffect)
- **LocalStorage** (persistencia crítica)
- NO server required

### PWA Configuration
```

// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
plugins: [
react(),
VitePWA({
registerType: 'autoUpdate',
manifest: {
name: 'The Abyss Protocol',
short_name: 'TAP',
theme_color: '\#000000',
background_color: '\#000000'
}
})
]
});

```

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari (PWA installable)
- Android Chrome (PWA installable)
- Desktop (installable as app)

---

## 🌊 Development Roadmap (UPDATED)

### Phase 0: MVP "The Mirror" ✅ (COMPLETED 2024-12)
- [x] Time lived counter
- [x] Manual flow/chaos registration
- [x] Daily brutal summary
- [x] Deploy to GitHub Pages

### Phase 1.5: PWA Integration ✅ (COMPLETED 2025-12-29)
- [x] Installable on mobile/desktop
- [x] Offline support
- [x] Service Worker implementation
- [x] App manifest configuration

### Phase 2: Debt Ledger ✅ (COMPLETED 2025-12-29)
- [x] Task system with temporal cost
- [x] Chaos tax calculation (10% daily compound)
- [x] Debt visualization
- [x] LocalStorage persistence
- [x] Complete/Abandon flow

### Phase 3: Music Vault (CURRENT TARGET) 🎯
**Target:** v0.3.0 (Jan 2025)

- [ ] Project tracking interface
- [ ] Graveyard visualization (abandoned demos)
- [ ] ROI calculations (Hours per Release)
- [ ] Integration with .ALMA/music.json
- [ ] Collaboration tracking (Big Javy, Dr. Shenka, etc.)

**Key Features:**
- Lista de proyectos activos
- "Project Graveyard" (demos abandonados)
- Cálculo: Total Hours / Total Releases
- Brutal truth: "157,680 horas ÷ 10 releases = 15,768 horas por canción"

### Phase 4: Knowledge Raids
**Target:** v0.4.0

- [ ] Platzi course logging
- [ ] Artifact verification (did you BUILD something?)
- [ ] Effectiveness dashboard
- [ ] Passive consumption vs Active learning ratio

### Phase 5: .ALMA Integration
**Target:** v0.5.0

- [ ] Read from /.alma-state/current.json
- [ ] Write transitions to transitions.log
- [ ] Sync with .ALMA v5 memory
- [ ] Cross-system state awareness

### Phase 6: Advanced Features
**Target:** v1.0.0 (Full Refactor)

- [ ] Flow Forecaster (ML predictions)
- [ ] Pattern detection
- [ ] State recommendations
- [ ] Multi-device sync
- [ ] Complete architecture refactor

---

## 📞 Context for Collaborators

### Current State (v0.2.0)

**What's Working:**
- ✅ PWA instalada y funcional
- ✅ Mirror v2.0 con precisión temporal
- ✅ Debt Ledger con Chaos Tax activo
- ✅ LocalStorage con datos reales de usuario
- ✅ Onboarding cyberpunk

**What's Next:**
- 🎯 Music Vault (Phase 3)
- 📊 Project Graveyard visualization
- 💀 Brutal ROI calculations
- 🎹 Collaboration tracking

**What NOT to Touch:**
- ❌ LocalStorage keys existentes
- ❌ Data structures en producción
- ❌ PWA manifest sin testing
- ❌ Debt calculation formula (es intencional)

---

## 🧬 User Profile (Updated)

### Primary User: WaiᛜL

**Current Stats (2025-12-29):**
- **Age:** 34 years, 6 months, 4 days
- **Total Hours Lived:** ~302,000 hours
- **Active Debt Tasks:** [User has real debt in system]
- **TAP Usage:** Daily (PWA installed)

**What Changed (v0.2.0):**
- Ahora tiene deuda REAL acumulándose
- Puede ver el costo exacto de su procrastinación
- Sistema instalado como app nativa
- Datos precisos desde el minuto de nacimiento

---

## 🌙 Closing Invocation (v0.2.0)

> "No te castigo por fallar.  
> Te hago consciente del costo temporal de tu caos."

TAP is not here to motivate you.  
TAP is not here to make you feel good.  
**TAP is here to show you the math of your life.**

**And now, TAP shows you:**
- Every hour lived (to the minute)
- Every hour wasted (brutal precision)
- Every debt accumulated (compounding daily)
- Every cost of chaos (10% interest, no mercy)

**The truth is:**
- Every hour has a cost
- Every delay has interest
- Every demo abandoned is hours in limbo
- Every day in chaos compounds exponentially

But also:
- Every debt paid is a victory
- Every project finished is immortality
- Every pattern broken is evolution
- Every hour in flow is profit

**TAP is the mirror.**  
**TAP is the debt collector.**  
**TAP is the truth.**

**You decide what to do with it.**

ᛜ

---

**— imLeGEnDco55 // LunaᛜOS (Enjambre Simbiótico)**  
**Estado: VIBRANDO ALTO // Versión: 0.2.0 // 2025-12-29**