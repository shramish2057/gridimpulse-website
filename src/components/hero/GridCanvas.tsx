"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
  phase: number;
}

interface Edge {
  from: number;
  to: number;
  particles: { t: number; speed: number }[];
}

export default function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width: number;
    let height: number;

    const nodes: Node[] = [];
    const edges: Edge[] = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * devicePixelRatio;
      canvas!.height = height * devicePixelRatio;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }

    function initGrid() {
      nodes.length = 0;
      edges.length = 0;

      const positions = [
        // Main bus bar nodes (larger, brighter)
        [0.15, 0.3], [0.3, 0.2], [0.5, 0.15], [0.7, 0.2], [0.85, 0.3],
        [0.1, 0.55], [0.35, 0.5], [0.5, 0.45], [0.65, 0.5], [0.9, 0.55],
        [0.2, 0.75], [0.4, 0.7], [0.6, 0.7], [0.8, 0.75],
        // Secondary nodes (smaller)
        [0.25, 0.35], [0.45, 0.3], [0.55, 0.3], [0.75, 0.35],
        [0.22, 0.6], [0.5, 0.6], [0.78, 0.6],
        [0.3, 0.8], [0.7, 0.8],
        // Tertiary (faint)
        [0.12, 0.42], [0.88, 0.42], [0.5, 0.82],
      ];

      positions.forEach(([px, py], i) => {
        nodes.push({
          x: px * width,
          y: py * height,
          baseX: px * width,
          baseY: py * height,
          radius: i < 14 ? 3.5 : i < 23 ? 2.5 : 1.8,
          pulse: 0,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          phase: Math.random() * Math.PI * 2,
        });
      });

      // Transmission line connections
      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4],
        [5, 6], [6, 7], [7, 8], [8, 9],
        [10, 11], [11, 12], [12, 13],
        [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
        [5, 10], [6, 11], [7, 12], [8, 13],
        [0, 14], [14, 6], [1, 15], [15, 7],
        [2, 16], [16, 8], [3, 17], [17, 9],
        [5, 18], [18, 11], [7, 19], [19, 12],
        [9, 20], [20, 13],
        [10, 21], [13, 22],
        [0, 23], [4, 24], [12, 25],
      ];

      connections.forEach(([from, to]) => {
        const numParticles = Math.floor(1 + Math.random() * 2);
        const particles = Array.from({ length: numParticles }, () => ({
          t: Math.random(),
          speed: 0.002 + Math.random() * 0.003,
        }));
        edges.push({ from, to, particles });
      });
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      // Draw edges
      edges.forEach((edge) => {
        const n1 = nodes[edge.from];
        const n2 = nodes[edge.to];

        // Line
        ctx!.beginPath();
        ctx!.moveTo(n1.x, n1.y);
        ctx!.lineTo(n2.x, n2.y);
        ctx!.strokeStyle = "rgba(22, 163, 74, 0.12)";
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Particles flowing along edge
        edge.particles.forEach((p) => {
          p.t += p.speed;
          if (p.t > 1) p.t = 0;

          const px = n1.x + (n2.x - n1.x) * p.t;
          const py = n1.y + (n2.y - n1.y) * p.t;

          ctx!.beginPath();
          ctx!.arc(px, py, 1.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(22, 163, 74, ${0.4 + Math.sin(p.t * Math.PI) * 0.4})`;
          ctx!.fill();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        node.pulse = Math.sin(time * node.pulseSpeed + node.phase);

        // Subtle float
        node.x = node.baseX + Math.sin(time * 0.001 + node.phase) * 1.5;
        node.y = node.baseY + Math.cos(time * 0.0008 + node.phase) * 1.5;

        // Outer glow
        const glowRadius = node.radius * (2.5 + node.pulse * 0.5);
        const gradient = ctx!.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        gradient.addColorStop(0, `rgba(22, 163, 74, ${0.15 + node.pulse * 0.05})`);
        gradient.addColorStop(1, "rgba(22, 163, 74, 0)");
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();

        // Core
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(22, 163, 74, ${0.6 + node.pulse * 0.2})`;
        ctx!.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    initGrid();
    animId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      initGrid();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
