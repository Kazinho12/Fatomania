
// Simulador 3D de Física - LABMANIA
class Physics3DSimulator {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = 800;
        this.height = this.canvas.height = 600;
        this.particles = [];
        this.forces = { gravity: 9.8, friction: 0.98 };
        this.isRunning = false;
    }

    createParticle(x, y, vx, vy, mass, color) {
        this.particles.push({
            x, y, vx, vy, mass, color,
            radius: Math.sqrt(mass) * 5,
            trail: []
        });
    }

    update() {
        this.particles.forEach(p => {
            // Aplicar gravidade
            p.vy += this.forces.gravity * 0.01;
            
            // Aplicar fricção
            p.vx *= this.forces.friction;
            p.vy *= this.forces.friction;
            
            // Atualizar posição
            p.x += p.vx;
            p.y += p.vy;
            
            // Colisão com bordas
            if (p.x - p.radius < 0 || p.x + p.radius > this.width) {
                p.vx *= -0.8;
                p.x = Math.max(p.radius, Math.min(this.width - p.radius, p.x));
            }
            if (p.y + p.radius > this.height) {
                p.vy *= -0.8;
                p.y = this.height - p.radius;
            }
            
            // Adicionar rastro
            p.trail.push({ x: p.x, y: p.y });
            if (p.trail.length > 30) p.trail.shift();
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(15, 12, 41, 0.2)';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        this.particles.forEach(p => {
            // Desenhar rastro
            this.ctx.strokeStyle = p.color + '40';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            p.trail.forEach((point, i) => {
                if (i === 0) this.ctx.moveTo(point.x, point.y);
                else this.ctx.lineTo(point.x, point.y);
            });
            this.ctx.stroke();
            
            // Desenhar partícula
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Adicionar brilho
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });
    }

    start() {
        this.isRunning = true;
        this.animate();
    }

    animate() {
        if (!this.isRunning) return;
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    reset() {
        this.particles = [];
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}

// Exportar para uso global
window.Physics3DSimulator = Physics3DSimulator;
