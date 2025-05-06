import { useState } from "react";
const steps = [
  {
    title: "Introduction to Geometry Dash Game",
    description:
      "In this tutorial, we'll create a simplified version of Geometry Dash where a character moves forward automatically through a scrolling level with obstacles. The player presses space to jump over obstacles.",
    images: ["/images/fist-week10.png"],
  },
  {
    title: "Seating-chart",
    images: ["/images/seating-chart-week10.png"],
  },
  {
    title: "Step 1: Implementing Player Controls",
    description:
      "Add the jumping mechanic by creating a script that moves the sprite up and then down when the space key is pressed, simulating a jump.",
    images: [
      "/images/Player_flagclicked.png",
      "/images/Player_sound.png",
      "/images/Player_jump_2.png",
    ],
  },
  {
    title: "Step 2: Setting Up Obstacle Behavior and Collision Detection",
    description:
      "Set up the obstacle behavior including positioning, movement speed, and collision detection. When the player hits an obstacle, the game stops and plays a sound effect.",
    images: ["/images/Player_touched.png"],
  },
  {
    title: "Step 3: Creating the Scrolling Background",
    description:
      "We'll implement the endless scrolling effect by moving clones continuously and resetting their positions when they go off-screen. Each time they reset, they'll switch to a random costume to create variety.",
    images: ["/images/Level_clicked.png", "/images/Level_cloned.png"],
  },
];

export default function ScratchGameTutorial() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  return (
    <div style={styles.container}>
      <div style={styles.progressBarWrapper}>
        <div
          style={{
            ...styles.progressBar,
            width: `${((stepIndex + 1) / steps.length) * 100}%`,
          }}
        />
      </div>
      <div style={styles.card}>
        <h2 style={styles.title}>{step.title}</h2>
        <p style={styles.description}>{step.description}</p>

        {/* Multiple images display section - vertical stack only */}
        {step.images && step.images.length > 0 && (
          <div style={styles.imagesContainer}>
            {step.images.map((image, index) => (
              <div key={index} style={styles.imageWrapper}>
                <img
                  src={image}
                  alt={`${step.title} - image ${index + 1}`}
                  style={styles.image}
                />
              </div>
            ))}
          </div>
        )}

        <div style={styles.buttonRow}>
          <button
            onClick={() => setStepIndex(stepIndex - 1)}
            disabled={stepIndex === 0}
            style={{
              ...styles.button,
              ...(stepIndex === 0 ? styles.disabledButton : {}),
            }}
          >
            ◀ Previous
          </button>
          <button
            onClick={() => setStepIndex(stepIndex + 1)}
            disabled={stepIndex === steps.length - 1}
            style={{
              ...styles.button,
              ...(stepIndex === steps.length - 1 ? styles.disabledButton : {}),
            }}
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  progressBarWrapper: {
    height: "10px",
    width: "100%",
    backgroundColor: "#e3f2fd",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1rem",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1e88e5",
    transition: "width 0.3s ease",
  },
  container: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    padding: "1rem",
    marginTop: "2rem",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f0f8ff",
    borderRadius: "24px",
    border: "2px solid #90caf9",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1e88e5",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#333",
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginBottom: "1.5rem",
  },
  imageWrapper: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: "16px",
    border: "2px solid #90caf9",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#64b5f6",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  disabledButton: {
    backgroundColor: "#bbdefb",
    cursor: "not-allowed",
  },
};
