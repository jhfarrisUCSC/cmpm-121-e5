import { hasCrate } from "../core/mod.ts";
import { Puzzle } from "../core/puzzle.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const goalCount =
    puzzle.layout.goals.filter((goal) => hasCrate(puzzle, goal)).length;
  return <p>Goals filled: {goalCount} of {puzzle.layout.goals.length}</p>;
}
