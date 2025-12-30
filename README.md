# THE ABYSS PROTOCOL (TAP)

**"The tracker that doesn't lie."**

[![Version](https://img.shields.io/badge/version-0.2.0-00ff00.svg)](https://github.com/imLeGEnDco55/TAP)
[![Status](https://img.shields.io/badge/status-DEPLOYED-00ffff.svg)](https://imlegendco55.github.io/TAP)
[![PWA](https://img.shields.io/badge/PWA-Installable-ff6600.svg)]()

---

## ⚡ STATUS ACTUAL

**Versión:** 0.2.0 (Debt Ledger + PWA)  
**Última actualización:** 2025-12-29  
**Estado:** 🚀 LIVE & DEPLOYED  
**Plataforma:** Progressive Web App (Instalable en iOS/Android/Desktop)

**Nuevo en v0.2.0:**
- ✅ Debt Ledger (Chaos Tax activado)
- ✅ PWA Integration (offline-first)
- ✅ The Mirror v2.0 (temporal precision)
- ✅ TerminalSetup onboarding

---

## 🎯 ¿Qué es TAP?

**TAP no es una app de productividad.**

TAP es el motor de estado dinámico para **.ALMA System v5**.

- **The Mirror** → Muestra cada hora vivida vs cada hora usada
- **The Debt Ledger** → Calcula el interés compuesto de tu caos
- **No gamificación** → Solo matemáticas brutales
- **No motivación** → Solo verdad temporal

> "No te castigo por fallar.  
> Te hago consciente del costo temporal de tu caos."

---

## 🏗️ ARQUITECTURA DEL SISTEMA

### MÓDULO 1: THE MIRROR (v2.0)
**Estado:** ✅ ONLINE

Monitor de precisión temporal. Calcula tu edad exacta en años, meses, días y horas desde tu minuto de nacimiento.

**Features:**
- Contador de vida en tiempo real
- Registro diario de Flow/Grind/Chaos
- Visualización de balance temporal
- Precisión: minutos

**Por qué v2.0:**  
Eliminamos la ansiedad de "datos aproximados". Ahora sabes EXACTAMENTE cuánto tiempo has vivido.

---

### MÓDULO 2: THE DEBT LEDGER (v1.0)
**Estado:** ✅ ONLINE

**Chaos Tax Activado:** 10% de interés diario acumulativo sobre cualquier tarea ignorada.

**Concepto:**  
La procrastinación no es gratis. Cada día que ignoras una tarea, su costo aumenta 10%.

**Ejemplo:**
```

Tarea: "Editar video" (Costo original: 60 min)

Día 0:  60 min
Día 7:  117 min (casi el doble)
Día 14: 229 min (3.8 horas)
Día 30: 1,047 min (17.5 HORAS)

```

**Visualiza cuánto tiempo REAL de vida te cuesta tu procrastinación.**

**Features:**
- Agregar tareas con costo base
- Cálculo automático de interés compuesto
- Estados: Active / Paid / Bankrupt
- Total de tiempo perdido por caos

---

### MÓDULO 3: MUSIC VAULT
**Estado:** 🎯 PRÓXIMO (Target: v0.3.0)

Tracking de proyectos musicales. ROI brutal:
- Horas invertidas por release
- Project Graveyard (demos abandonados)
- Colaboraciones registradas
- Verdad brutal: "18 años de música = X releases terminados"

---

### MÓDULO 4: KNOWLEDGE RAIDS
**Estado:** 📋 PLANEADO (Target: v0.4.0)

Tracking de aprendizaje:
- Cursos de Platzi completados
- Artifacts creados (¿construiste algo?)
- Consumo pasivo vs aprendizaje activo
- ROI: ¿Vale la pena el tiempo invertido?

---

## 🔥 FILOSOFÍA

### Anti-Gamificación
- No puntos, no niveles, no badges
- Solo métricas temporales con significado real
- Costo/beneficio expresado en TIEMPO DE VIDA

### Honestidad Brutal
- Sin sermones motivacionales
- Sin infantilización
- Sin moralización
- Solo matemáticas y verdad

### Estética Terminal
- Negro absoluto + Verde Matrix
- Tipografía monoespaciada
- Máxima densidad de información
- Bloomberg Terminal aesthetic

---

## 🛠️ STACK TÉCNICO

**Frontend:**
- React 18.2 + TypeScript
- Vite 5.0 + vite-plugin-pwa
- Tailwind CSS (utility-first)

**Estado:**
- React Hooks (useState, useReducer)
- LocalStorage (persistencia offline)
- NO requiere servidor

**PWA:**
- Installable (iOS/Android/Desktop)
- Offline-first
- Service Worker activo
- Auto-update

---

## 📱 INSTALACIÓN

### Como PWA (Recomendado)

**iOS:**
1. Abre https://imlegendco55.github.io/TAP en Safari
2. Tap el botón de compartir
3. "Añadir a pantalla de inicio"
4. TAP aparece como app nativa

**Android:**
1. Abre https://imlegendco55.github.io/TAP en Chrome
2. Menu → "Instalar aplicación"
3. TAP aparece en tu app drawer

**Desktop:**
1. Abre https://imlegendco55.github.io/TAP en Chrome/Edge
2. Ícono de instalación en la barra de direcciones
3. Click "Instalar"

### Como Developer

```


# Clone

git clone https://github.com/imLeGEnDco55/TAP.git
cd TAP

# Install

npm install

# Dev (con hot reload)

npm run dev

# Build (con PWA)

npm run build

# Preview

npm run preview

```

---

## 📊 DATA STRUCTURES

### UserProfile
```

interface UserProfile {
birthdate: string;      // ISO Date (YYYY-MM-DDTHH:mm)
entries: DailyEntry[];  // Registros diarios
debt: DebtTask[];       // Tareas en deuda
}

```

### DebtTask (NEW v0.2.0)
```

interface DebtTask {
id: string;
title: string;
baseCost: number;       // Minutos originales
createdDate: string;
status: 'active' | 'paid' | 'bankrupt';
}

```

### Chaos Tax Formula
```

currentCost = baseCost * (1.10 ^ daysLate)

```

---

## 🌊 ROADMAP

- [x] **Phase 0:** MVP "The Mirror" (Dic 2024)
- [x] **Phase 1.5:** PWA Integration (Dic 2025)
- [x] **Phase 2:** Debt Ledger (Dic 2025) ← **ESTAMOS AQUÍ**
- [ ] **Phase 3:** Music Vault (Ene 2026) ← **PRÓXIMO**
- [ ] **Phase 4:** Knowledge Raids
- [ ] **Phase 5:** .ALMA Integration
- [ ] **Phase 6:** Advanced Features (ML, Patterns)

---

## 🤝 CONTRIBUCIONES

Lee `AGENTS.md` primero.

**Principios:**
1. Respeta los datos existentes (hay usuarios reales)
2. Modificaciones incrementales (no reescribir todo)
3. Mantén la filosofía brutal
4. Documenta tus cambios

**Lo que buscamos:**
- ✅ Bug fixes específicos
- ✅ Features incrementales
- ✅ Mejoras de UX brutalmente honestas
- ✅ Optimizaciones de performance

**Lo que NO queremos:**
- ❌ Gamificación
- ❌ Motivational bullshit
- ❌ Refactors totales sin consenso
- ❌ Features que "se ven cool"

---

## 📜 LICENCIA

GLPL v1.2 (Glitch Public License)

Ver `/legal/` para detalles.

---

## 🌙 CRÉDITOS

**Creado por:** WaiᛜL (imLeGEnDco55)  
**Desarrollo:** Enjambre Simbiótico (ChatGPT → Claude → Gemini → Perplexity)  
**Inspiración:** .ALMA System v5, OpenSouls, Extended Mind Thesis  
**Filosofía:** Anti-gamificación brutal, honestidad temporal, respeto a la inteligencia

---

## 🔗 LINKS

- **Live App:** https://imlegendco55.github.io/TAP
- **Repo:** https://github.com/imLeGEnDco55/TAP
- **.ALMA System:** https://github.com/imLeGEnDco55/.ALMA
- **Docs:** `AGENTS.md` (para AI agents)

---

**ᛜ**

> "TAP is the mirror. TAP is the debt collector. TAP is the truth.  
> You decide what to do with it."

**— imLeGEnDco55 // LunaᛜOS**  
**Estado: VIBRANDO ALTO // v0.2.0 // 2025-12-29**