// Las áreas de Wúru (el "otro eje" de la matriz: áreas × ejes).
// Cada solución vive en UNA de las tres capas — no en varias.
// Textos y asignación de capa tomados del overview de producto de Wúru.
export type AxisUse = "core" | "light" | "none";

export interface Solution {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  /** en qué capa vive esta solución: workflow · embedded · standalone */
  axes: { workflow: AxisUse; embedded: AxisUse; standalone: AxisUse };
}

const WORKFLOW: Solution["axes"] = { workflow: "core", embedded: "none", standalone: "none" };
const STANDALONE: Solution["axes"] = { workflow: "none", embedded: "none", standalone: "core" };
// Surgery es la única que usa las tres capas: el workflow de programación, la
// IA dentro del flujo (Agenda Mágica) y el asistente por WhatsApp.
const ALL: Solution["axes"] = { workflow: "core", embedded: "core", standalone: "core" };

export const solutions: Solution[] = [
  {
    slug: "surgery",
    name: "Surgery",
    summary:
      "Surgical scheduling, real-time coordination and booking over WhatsApp.",
    detail:
      "Scheduling an operating room means coordinating people: surgeons, anesthesiologists, scrub nurses, admissions and patients. Wúru QX orchestrates that team across four moments — request, planning, confirmation and execution — and in each one the AI does the repetitive work.",
    axes: ALL,
  },
  {
    slug: "infusion",
    name: "Infusion Chairs",
    summary: "Full treatment cycles scheduled in one step, from order to discharge.",
    detail:
      "Infusion centers run on spreadsheets, scattered rules and manual back-and-forth between pharmacy, nursing, audit and scheduling. The result: rooms that feel saturated while actually running at 50–60% occupancy. Wúru digitizes the process end to end, from the medical order to discharge.",
    axes: WORKFLOW,
  },
  {
    slug: "quoting",
    name: "Surgical Quoting",
    summary: "Quotes built from real comparable episodes, with full traceability.",
    detail:
      "A surgical quote is built by hand today and depends on each person's know-how: different criteria, forgotten items and margins nobody can explain afterwards. Wúru builds the quote from real comparable episodes — same surgeries, same surgeons, same supplies — and keeps a trace of every decision.",
    axes: WORKFLOW,
  },
  {
    slug: "radiology",
    name: "Radiology",
    summary: "Structured reports dictated in the reading room.",
    detail:
      "An agent that sits with the radiologist in the reading room. They dictate as always — the AI transcribes, structures the report on the service's own template and leaves it ready to sign. No new platform, no change in how they work.",
    axes: STANDALONE,
  },
  {
    slug: "bedside",
    name: "Bedside Notes",
    summary: "Clinical notes dictated over WhatsApp and posted into the HIS.",
    detail:
      "The clinical record competes with the patient: it gets postponed, piles up and is filled in from memory at the end of the shift. This agent solves it through the channel the professional already has in hand — send an audio, get a structured draft, confirm, and the note lands in the institution's HIS.",
    axes: STANDALONE,
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    summary: "Objective operating-room timestamps, with no logging burden.",
    detail:
      "Everything Wúru optimizes depends on one thing: knowing when each thing happened. Today those times are entered by hand, late and with bias. A computer-vision agent on the OR camera detects patient in and patient out and leaves an objective timestamp, without adding a single logging task to the team.",
    axes: STANDALONE,
  },
];

export const AXIS_LABELS: Record<string, string> = {
  workflow: "workflow",
  embedded: "embedded",
  standalone: "standalone",
};
