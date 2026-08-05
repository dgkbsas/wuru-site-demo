// Las áreas de Wúru (el "otro eje" de la matriz: áreas × ejes).
// Se usan en la sección Solutions de la home y en la página de cada solución.
export type AxisUse = "core" | "light" | "none";

export interface Solution {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  /** qué ejes participan en esta área: workflow · embedded · standalone */
  axes: { workflow: AxisUse; embedded: AxisUse; standalone: AxisUse };
}

export const solutions: Solution[] = [
  {
    slug: "surgery",
    name: "Surgery",
    summary: "The surgical day, end to end — scheduling, pre-op, turnover and notes.",
    detail:
      "Wúru runs the operating room as one flow: it schedules cases against real capacity, verifies pre-op requirements, watches turnover in real time and drafts the operative documentation that follows.",
    axes: { workflow: "core", embedded: "core", standalone: "light" },
  },
  {
    slug: "infusion",
    name: "Infusion",
    summary: "Chair planning, protocol timing and reconstitutables that hold up.",
    detail:
      "Infusion capacity is planned by chair, nurse and protocol at once — with the timing of reconstitutable drugs, premedication and oncologic requirements built into the flow.",
    axes: { workflow: "core", embedded: "light", standalone: "core" },
  },
  {
    slug: "radiology",
    name: "Radiology",
    summary: "Study scheduling, reading worklists and prior-study matching.",
    detail:
      "Studies are scheduled against equipment and technician availability, and the reading room gets worklists with the prior studies already matched to each case.",
    axes: { workflow: "light", embedded: "core", standalone: "core" },
  },
  {
    slug: "bedside",
    name: "Bedside",
    summary: "Rounds, follow-ups and patient status where care happens.",
    detail:
      "Rounds and follow-ups stay structured at the bedside: status changes, pending tasks and clinical notes are captured where the care actually happens, not hours later.",
    axes: { workflow: "core", embedded: "core", standalone: "core" },
  },
  {
    slug: "quoting",
    name: "Quoting",
    summary: "Procedure pricing and coverage checks, answered in minutes.",
    detail:
      "Quotes are built from the procedure itself — materials, professional fees and coverage rules — so an answer that used to take days is delivered in minutes.",
    axes: { workflow: "core", embedded: "light", standalone: "core" },
  },
];

export const AXIS_LABELS: Record<string, string> = {
  workflow: "workflow",
  embedded: "embedded",
  standalone: "standalone",
};
