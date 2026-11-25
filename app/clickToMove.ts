import { Controller } from "./controllers.ts";
import type { Command, Position } from "../core/mod.ts";

function checkTile(player: Position, at: Position): Command | undefined {
  if (at.y == player.y) {
    if (at.x == player.x - 1) {
      return { kind: "move", direction: "left" };
    } else if (at.x == player.x + 1) {
      return { kind: "move", direction: "right" };
    }
  } else if (at.x == player.x) {
    if (at.y == player.y - 1) {
      return { kind: "move", direction: "up" };
    } else if (at.y == player.y + 1) {
      return { kind: "move", direction: "down" };
    }
  }
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session, board) {
    const stop = board.onTileClick((at) => {
      const sessionState = session.getState();
      const player = sessionState.puzzle.player;
      const direction = checkTile(player, at);
      if (direction) {
        session.dispatch(direction);
      }
    });
    return stop;
  },
};
