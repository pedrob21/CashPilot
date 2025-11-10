import { useState } from "react";
import ProgressCard from "../components/ProgressCard";
import "./Goals.css";

const SLOTS = 4; // grid 2x2

function Goals() {
  // grid holds either null or an object for a placed card
  const [grid, setGrid] = useState<( { id: number } | null )[]>(
    Array(SLOTS).fill(null)
  );

  // index where the placeholder (+) currently sits; -1 = hidden
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);
  // used to mark which card was just added so we can animate it
  const [lastAddedIndex, setLastAddedIndex] = useState<number | null>(null);
  // prevents double clicks while animating
  const [animating, setAnimating] = useState(false);

  const handleAdd = () => {
    if (animating || placeholderIndex === -1) return;
    setAnimating(true);

    const addIndex = placeholderIndex;

    // Insert the new card at the placeholder index
    setGrid((prev) => {
      const copy = [...prev];
      copy[addIndex] = { id: Date.now() };
      return copy;
    });

    // mark which index was just added so we can animate the new card
    setLastAddedIndex(addIndex);

    // find next empty slot for the placeholder (to the right if possible)
    setTimeout(() => {
      setGrid((currGrid) => {
        let next = -1;
        // try to find an empty slot to the right first
        for (let i = addIndex + 1; i < SLOTS; i++) {
          if (currGrid[i] === null) {
            next = i;
            break;
          }
        }
        // otherwise find any empty slot
        if (next === -1) {
          for (let i = 0; i < SLOTS; i++) {
            if (currGrid[i] === null) {
              next = i;
              break;
            }
          }
        }
        // if no empty slot, hide the placeholder
        setPlaceholderIndex(next === -1 ? -1 : next);
        return currGrid;
      });

      // clear animation flags after a short delay (match CSS durations)
      setTimeout(() => {
        setLastAddedIndex(null);
        setAnimating(false);
      }, 300);
    }, 120);
  };

  return (
    <div className="goals-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Metas Financeiras</h1>
          <p>Acompanhe o progresso dos seus objetivos</p>
        </div>
      </div>

      <div className="goals-grid">
        {Array.from({ length: SLOTS }).map((_, i) => {
          const placed = grid[i];

          // render placed card
          if (placed) {
            return (
              <div
                key={i}
                className={`grid-cell card-cell ${lastAddedIndex === i ? "added" : ""}`}>
                <ProgressCard />
              </div>
            );
          }

          // render placeholder if it's the placeholder index
          if (placeholderIndex === i) {
            return (
              <div key={i} className="grid-cell placeholder-cell">
                <button
                  className={`placeholder-btn ${animating ? "anim" : ""}`}
                  onClick={handleAdd}
                  aria-label="Adicionar meta"
                >
                  <span className="plus">+</span>
                </button>
              </div>
            );
          }

          // otherwise render an empty slot to keep grid spacing
          return <div key={i} className="grid-cell empty-cell" />;
        })}
      </div>
    </div>
  );
}

export default Goals;