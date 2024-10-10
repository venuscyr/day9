let scene, camera, renderer;
let leaves = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('leaves-canvas'), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xb2ebf2); 

    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    createLeaves();

    camera.position.z = 10;

    animate();
}

function createLeaves() {
    const leafColors = [0x4caf50, 0x66bb6a, 0x81c784];
    const leafGeometry = new THREE.Shape();
    leafGeometry.moveTo(0, 0);
    leafGeometry.bezierCurveTo(1, 1, 2, 1, 3, 0);
    leafGeometry.bezierCurveTo(2, -1, 1, -1, 0, 0);

    for (let i = 0; i < 10; i++) {
        const extrudeSettings = {
            steps: 1,
            depth: 0.1,
            bevelEnabled: false
        };
        const leafMesh = new THREE.ExtrudeGeometry(leafGeometry, extrudeSettings);
        const leaf = new THREE.Mesh(leafMesh, new THREE.MeshPhongMaterial({ color: leafColors[i % 3] }));
        
        leaf.position.set(Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 2 - 1);
        leaf.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        leaf.scale.set(0.5, 0.5, 0.5);
        
        leaves.push(leaf);
        scene.add(leaf);
    }
}

function animate() {
    requestAnimationFrame(animate);

    leaves.forEach(leaf => {
        leaf.rotation.x += 0.01;
        leaf.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();

//creation des feuilles,de leur 3d,mouvement etc
