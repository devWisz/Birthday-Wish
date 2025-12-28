
        const dot = document.getElementById('cursor-dot');
        window.addEventListener('mousemove', (e) => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
        });

        function initParty() {
            const duration = 3 * 1000;
            const end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#00f2fe', '#ec008c']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#00f2fe', '#ec008c']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());

           
            document.getElementById('landing').style.display = 'none';
            const content = document.getElementById('main-content');
            content.style.display = 'block';
        }


