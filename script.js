let playerName = "";

// Start Game Function
function startGame() {
    playerName = document.getElementById("playerName").value;
    if (playerName.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("startScreen").style.display = "none";
    document.querySelector("canvas").style.display = "block";
    initGame(); // अब गेम स्टार्ट होगा
}

// Game Initialization
function initGame() {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a Cube (You can replace it with any model)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Resize Handling
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    console.log(`Player ${playerName} has started the game!`);
          }
