/**
 * DIY 스트링 입체도형 메인 애플리케이션 (app.js)
 * Three.js 씬 제어, 텐션 슬라이더, UI 탭 전환, 동적 퀴즈 & DIY 도안 인쇄
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentShapeId = 'cuboid';
  let currentTension = 0.0;
  let isAutoPlaying = false;
  let autoPlayDirection = 1;
  let isXRay = false;
  let isWireframe = false;

  let scene, camera, renderer, controls;
  let currentModel = null;
  let builder = null;

  const canvasContainer = document.getElementById('canvas-container');

  // Three.js 초기화
  function initThree() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);

    const width = canvasContainer.clientWidth;
    const height = canvasContainer.clientHeight;

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(13, 11, 17);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    canvasContainer.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.08;
    controls.minDistance = 6;
    controls.maxDistance = 45;

    // 조명
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight1.position.set(12, 22, 16);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x94a3b8, 0.35);
    dirLight2.position.set(-12, -6, -12);
    scene.add(dirLight2);

    // 바닥 그리드
    const grid = new THREE.GridHelper(32, 32, 0xcbd5e1, 0xe2e8f0);
    grid.position.y = -0.01;
    scene.add(grid);

    builder = new window.Shape3DBuilder(THREE);

    window.addEventListener('resize', onWindowResize);

    loadShape(currentShapeId);
    animate();
  }

  function onWindowResize() {
    if (!canvasContainer) return;
    const width = canvasContainer.clientWidth;
    const height = canvasContainer.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function loadShape(shapeId) {
    currentShapeId = shapeId;

    if (currentModel && currentModel.root) {
      scene.remove(currentModel.root);
    }

    switch (shapeId) {
      case 'cuboid':
        currentModel = builder.buildCuboid();
        break;
      case 'cube':
        currentModel = builder.buildCube();
        break;
      case 'triangular_prism':
        currentModel = builder.buildTriangularPrism();
        break;
      case 'cylinder':
        currentModel = builder.buildCylinder();
        break;
      case 'hexagonal_pyramid':
        currentModel = builder.buildHexagonalPyramid();
        break;
      case 'hexagonal_prism':
        currentModel = builder.buildHexagonalPrism();
        break;
      default:
        currentModel = builder.buildCuboid();
    }

    scene.add(currentModel.root);
    applyDisplayModes();
    updateTension(currentTension);
    updateUIInfo();
  }

  function updateTension(val) {
    currentTension = Math.max(0, Math.min(1, val));
    if (currentModel && currentModel.update) {
      currentModel.update(currentTension);
    }

    const slider = document.getElementById('tension-slider');
    const percentLabel = document.getElementById('tension-percent');
    const stateBadge = document.getElementById('tension-state-badge');

    if (slider) slider.value = Math.round(currentTension * 100);
    if (percentLabel) percentLabel.textContent = `${Math.round(currentTension * 100)}%`;

    if (stateBadge) {
      if (currentTension < 0.08) {
        stateBadge.textContent = '2D 평면 전개도';
        stateBadge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 shadow-sm';
      } else if (currentTension > 0.92) {
        stateBadge.textContent = '3D 입체도형 완성';
        stateBadge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 shadow-sm';
      } else {
        stateBadge.textContent = '장력으로 접히는 중';
        stateBadge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 shadow-sm';
      }
    }
  }

  function applyDisplayModes() {
    if (!currentModel || !currentModel.root) return;
    currentModel.root.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.wireframe = isWireframe;
        child.material.opacity = isXRay ? 0.4 : 0.94;
        child.material.transparent = true;
      }
    });
  }

  function animate() {
    requestAnimationFrame(animate);

    if (isAutoPlaying) {
      currentTension += 0.007 * autoPlayDirection;
      if (currentTension >= 1.0) {
        currentTension = 1.0;
        autoPlayDirection = -1;
      } else if (currentTension <= 0.0) {
        currentTension = 0.0;
        autoPlayDirection = 1;
      }
      updateTension(currentTension);
    }

    controls.update();
    renderer.render(scene, camera);
  }

  function updateUIInfo() {
    const data = window.SHAPES_DATA[currentShapeId];
    if (!data) return;

    // 헤더/기본 정보
    document.getElementById('shape-name').textContent = data.name;
    document.getElementById('shape-eng-name').textContent = data.engName;
    document.getElementById('shape-grade-badge').textContent = data.grade;
    document.getElementById('shape-description').textContent = data.description;

    // 기하 스탯
    document.getElementById('stat-faces').textContent = data.stats.faces;
    document.getElementById('stat-edges').textContent = data.stats.edges;
    document.getElementById('stat-vertices').textContent = data.stats.vertices;
    document.getElementById('shape-formula').textContent = data.formula;

    // 발문 리스트
    const qList = document.getElementById('questions-list');
    qList.innerHTML = '';
    data.questions.forEach((q) => {
      const li = document.createElement('li');
      li.className = 'text-xs text-slate-700 bg-slate-100/90 p-2.5 rounded-xl border border-slate-200/80 flex items-start gap-2 leading-relaxed';
      li.innerHTML = `<span class="text-indigo-600 font-bold shrink-0 mt-0.5">Q.</span><span>${q}</span>`;
      qList.appendChild(li);
    });

    // DIY 스펙
    document.getElementById('diy-material').textContent = data.diySpecs.material;
    document.getElementById('diy-dimensions').textContent = data.diySpecs.dimensions;
    document.getElementById('diy-string').textContent = data.diySpecs.string;
    document.getElementById('diy-holes').textContent = data.diySpecs.holes;

    // 동적 퀴즈 탭 렌더링
    renderQuiz(data.quiz);

    // 동적 인쇄용 SVG 도안 렌더링
    renderPrintPattern(data);
  }

  // 퀴즈 탭 동적 렌더링
  function renderQuiz(quizData) {
    const quizContainer = document.getElementById('quiz-dynamic-card');
    if (!quizContainer || !quizData) return;

    let optionsHtml = '';
    quizData.options.forEach((opt, idx) => {
      optionsHtml += `
        <button class="quiz-btn w-full text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-xs transition flex flex-col gap-1" data-correct="${opt.correct}" data-desc="${opt.desc}">
          <span class="font-medium text-slate-800">${opt.text}</span>
          <span class="quiz-feedback hidden text-[11px] font-semibold"></span>
        </button>
      `;
    });

    quizContainer.innerHTML = `
      <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
        <div class="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
          <i data-lucide="help-circle" class="w-4 h-4 text-indigo-600"></i>
          <span>${quizData.title}</span>
        </div>
        <p class="text-xs text-slate-700 leading-relaxed font-medium">${quizData.question}</p>
        <div class="space-y-2 pt-1">
          ${optionsHtml}
        </div>
      </div>
    `;

    quizContainer.querySelectorAll('.quiz-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const isCorrect = btn.dataset.correct === 'true';
        const desc = btn.dataset.desc;
        const feedbackEl = btn.querySelector('.quiz-feedback');

        quizContainer.querySelectorAll('.quiz-feedback').forEach((el) => el.classList.add('hidden'));

        feedbackEl.classList.remove('hidden');
        if (isCorrect) {
          feedbackEl.className = 'quiz-feedback block text-[11px] font-semibold text-emerald-600 pt-1';
          feedbackEl.textContent = desc;
          btn.classList.add('border-emerald-500', 'bg-emerald-50/40');
        } else {
          feedbackEl.className = 'quiz-feedback block text-[11px] font-semibold text-rose-600 pt-1';
          feedbackEl.textContent = desc;
          btn.classList.add('border-rose-400', 'bg-rose-50/40');
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // A4 도안 동적 렌더링
  function renderPrintPattern(data) {
    const printSvgWrapper = document.getElementById('print-svg-wrapper');
    const printTitle = document.getElementById('print-shape-title');
    const printSpecs = document.getElementById('print-shape-specs');

    if (printTitle) printTitle.textContent = `${data.name} 1:1 실측 전개도 도안 (${data.grade})`;
    if (printSpecs) printSpecs.textContent = `권장 치수: ${data.diySpecs.dimensions} | 타공: ${data.diySpecs.holes} | 실: ${data.diySpecs.string}`;

    if (printSvgWrapper && data.svgPattern) {
      printSvgWrapper.innerHTML = `
        <svg width="600" height="420" viewBox="0 0 600 420" class="border border-slate-300 rounded-lg mx-auto bg-white shadow-sm">
          ${data.svgPattern}
        </svg>
      `;
    }
  }

  function setupEventListeners() {
    // 도형 선택 버튼들
    document.querySelectorAll('.shape-select-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.shape-select-btn').forEach((b) => {
          b.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
          b.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
        });
        const target = e.currentTarget;
        target.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
        target.classList.add('bg-indigo-600', 'text-white', 'shadow-md');

        loadShape(target.dataset.shape);
      });
    });

    // 슬라이더 조작
    const slider = document.getElementById('tension-slider');
    slider.addEventListener('input', (e) => {
      isAutoPlaying = false;
      const playBtn = document.getElementById('btn-autoplay');
      playBtn.innerHTML = '<i data-lucide="play" class="w-3.5 h-3.5"></i> 자동재생';
      playBtn.classList.remove('bg-amber-500', 'text-white');
      playBtn.classList.add('bg-slate-100', 'text-slate-700');
      if (window.lucide) window.lucide.createIcons();

      updateTension(parseFloat(e.target.value) / 100);
    });

    document.getElementById('btn-set-2d').addEventListener('click', () => {
      isAutoPlaying = false;
      updateTension(0.0);
    });
    document.getElementById('btn-set-3d').addEventListener('click', () => {
      isAutoPlaying = false;
      updateTension(1.0);
    });

    document.getElementById('btn-autoplay').addEventListener('click', (e) => {
      isAutoPlaying = !isAutoPlaying;
      const btn = e.currentTarget;
      if (isAutoPlaying) {
        btn.innerHTML = '<i data-lucide="pause" class="w-3.5 h-3.5"></i> 정지';
        btn.classList.add('bg-amber-500', 'text-white');
        btn.classList.remove('bg-slate-100', 'text-slate-700');
      } else {
        btn.innerHTML = '<i data-lucide="play" class="w-3.5 h-3.5"></i> 자동재생';
        btn.classList.remove('bg-amber-500', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-700');
      }
      if (window.lucide) window.lucide.createIcons();
    });

    document.getElementById('btn-reset-view').addEventListener('click', () => {
      camera.position.set(13, 11, 17);
      controls.target.set(0, 0, 0);
      controls.update();
    });

    document.getElementById('btn-toggle-xray').addEventListener('click', (e) => {
      isXRay = !isXRay;
      e.currentTarget.classList.toggle('bg-indigo-100', isXRay);
      e.currentTarget.classList.toggle('text-indigo-700', isXRay);
      applyDisplayModes();
    });

    document.getElementById('btn-toggle-wireframe').addEventListener('click', (e) => {
      isWireframe = !isWireframe;
      e.currentTarget.classList.toggle('bg-indigo-100', isWireframe);
      e.currentTarget.classList.toggle('text-indigo-700', isWireframe);
      applyDisplayModes();
    });

    // 탭 전환
    document.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach((b) => {
          b.classList.remove('border-indigo-600', 'text-indigo-600');
          b.classList.add('border-transparent', 'text-slate-500');
        });
        e.currentTarget.classList.add('border-indigo-600', 'text-indigo-600');
        e.currentTarget.classList.remove('border-transparent', 'text-slate-500');

        const tabTarget = e.currentTarget.dataset.tab;
        document.querySelectorAll('.tab-content').forEach((panel) => {
          panel.classList.toggle('hidden', panel.id !== `tab-content-${tabTarget}`);
        });
      });
    });

    // 인쇄 실행
    document.getElementById('btn-print-pattern').addEventListener('click', () => {
      window.print();
    });
  }

  initThree();
  setupEventListeners();
  if (window.lucide) window.lucide.createIcons();
});
