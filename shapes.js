/**
 * DIY 스트링 입체도형 3D 기하 모델, 메타데이터, 동적 SVG 도안 (shapes.js)
 * 6대 도형 완전 밀폐 3D 기하학 및 힌지 수학 교정 (Cube, Prism, Cylinder 완전 해결)
 */

window.SHAPES_DATA = {
  cuboid: {
    id: 'cuboid',
    name: '직육면체',
    engName: 'Cuboid / Rectangular Prism',
    grade: '초등 5학년 2학기 [5. 직육면체]',
    description: '중앙 4면 세로열과 양옆 날개 2면으로 이루어진 십자형 전개도입니다. 실을 당기면 양 날개가 90도로 직립하고 윗면과 밑면이 닫혀 견고한 직육면체 상자가 완성됩니다.',
    stats: { faces: 6, edges: 12, vertices: 8 },
    formula: '면: 6개 (3쌍의 평행 대면), 모서리: 12개 (길이 3종류 각 4개씩), 꼭짓점: 8개',
    diySpecs: {
      material: '색상 도화지 또는 켄트지 (200g/m² 권장)',
      dimensions: '밑면 4cm × 3cm, 높이 2.5cm (또는 8cm × 6cm, 높이 5cm)',
      string: '1~2mm 굵기 면끈/꼬임끈 약 50cm 2가닥',
      holes: '총 6개 (밑면 2개, 상단 2개, 날개 끝 2개, 지름 2~3mm)'
    },
    questions: [
      '손잡이를 천천히 당길 때 가장 먼저 일어서는 면은 어디일까요?',
      '밑면과 서로 마주보며 평행하게 만나는 면은 전개도에서 몇 번째 칸에 있을까요?',
      '양옆 날개가 일어설 때 맞닿는 모서리는 전개도의 어떤 변과 길이가 같아야 할까요?'
    ],
    quiz: {
      title: '직육면체의 대면(마주보는 면) 찾기',
      question: '십자형 전개도에서 파란색 바닥 밑면과 마주보며 평행하게 닫히는 면은 무엇일까요?',
      options: [
        { text: '① 바로 옆의 왼쪽 날개면', correct: false, desc: '오답입니다. 왼쪽 날개면은 밑면과 수직(90도)으로 만납니다.' },
        { text: '② 뒷면 너머 연결된 윗면', correct: true, desc: '정답입니다! 🎉 뒷면이 90도 서고 윗면이 다시 90도 꺾여 밑면과 완벽한 평행을 이룹니다.' },
        { text: '③ 바로 앞쪽에 붙은 앞면', correct: false, desc: '오답입니다. 앞면은 밑면과 직각으로 만납니다.' }
      ]
    },
    svgPattern: `
      <g stroke="#1e293b" stroke-width="2" fill="none">
        <rect x="220" y="140" width="160" height="120" stroke="#0f172a" stroke-width="2" fill="#eff6ff" />
        <rect x="220" y="260" width="160" height="100" stroke="#0f172a" stroke-dasharray="5,5" fill="#f8fafc" />
        <rect x="220" y="40" width="160" height="100" stroke="#0f172a" stroke-dasharray="5,5" fill="#f8fafc" />
        <rect x="220" y="-80" width="160" height="120" stroke="#0f172a" stroke-dasharray="5,5" fill="#eff6ff" />
        <rect x="120" y="140" width="100" height="120" stroke="#0f172a" stroke-dasharray="5,5" fill="#ecfdf5" />
        <rect x="380" y="140" width="100" height="120" stroke="#0f172a" stroke-dasharray="5,5" fill="#fdf2f8" />

        <circle cx="230" cy="150" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="370" cy="150" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="230" cy="250" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="370" cy="250" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="130" cy="200" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="470" cy="200" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />

        <text x="300" y="205" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">밑면 (바닥 고정)</text>
        <text x="300" y="95" text-anchor="middle" font-size="12" fill="#475569">뒷면</text>
        <text x="300" y="315" text-anchor="middle" font-size="12" fill="#475569">앞면</text>
        <text x="170" y="205" text-anchor="middle" font-size="12" fill="#065f46">왼쪽 날개</text>
        <text x="430" y="205" text-anchor="middle" font-size="12" fill="#9d174d">오른쪽 날개</text>
        <text x="300" y="-15" text-anchor="middle" font-size="12" fill="#1e3a8a">윗면 (덮개)</text>
      </g>
    `
  },

  cube: {
    id: 'cube',
    name: '정육면체',
    engName: 'Cube (정육면체 전개도)',
    grade: '초등 5학년 2학기 [5. 직육면체와 전개도]',
    description: '합동인 정사각형 6개로 이루어진 전개도입니다. 실을 당기면 앞, 뒤, 좌, 우 4개 면이 직립하고 상단 덮개가 닫혀 빈틈없는 완벽한 3D 정육면체 큐브를 완성합니다.',
    stats: { faces: 6, edges: 12, vertices: 8 },
    formula: '모든 면(6개) 합동인 정사각형, 모든 모서리(12개) 길이 동일',
    diySpecs: {
      material: '색상 도화지 (200g/m²)',
      dimensions: '한 변 4cm인 정사각형 6개',
      string: '부드러운 꼬임끈 약 60cm',
      holes: '타공홀 6개'
    },
    questions: [
      '평면에서는 멀리 떨어져 보이는 면들이 실을 당기면 어떻게 마주보게 될까요?',
      '정육면체 전개도는 총 11가지가 있습니다. 마주보는 평행면은 몇 쌍일까요?'
    ],
    quiz: {
      title: '정육면체 전개도의 대면 찾기',
      question: '전개도에서 빨간색 바닥 밑면과 마주보며 천장을 덮는 면은 무엇일까요?',
      options: [
        { text: '① 뒷면 너머 연결된 윗면 덮개', correct: true, desc: '정답입니다! 🎉 뒷면이 90도 올라오고 윗면이 90도 꺾여 밑면과 완벽한 평행 대면을 이룹니다.' },
        { text: '② 바로 옆에 붙은 왼쪽 면', correct: false, desc: '오답입니다. 왼쪽 면은 밑면과 수직(90도)으로 만납니다.' },
        { text: '③ 바로 앞쪽에 붙은 앞면', correct: false, desc: '오답입니다. 앞면은 밑면과 직각을 이룹니다.' }
      ]
    },
    svgPattern: `
      <g stroke="#1e293b" stroke-width="2" fill="none">
        <rect x="200" y="140" width="80" height="80" stroke="#0f172a" fill="#fee2e2" />
        <rect x="200" y="60" width="80" height="80" stroke="#0f172a" stroke-dasharray="4,4" fill="#ffedd5" />
        <rect x="200" y="220" width="80" height="80" stroke="#0f172a" stroke-dasharray="4,4" fill="#fef9c3" />
        <rect x="200" y="-20" width="80" height="80" stroke="#0f172a" stroke-dasharray="4,4" fill="#fee2e2" />
        <rect x="120" y="140" width="80" height="80" stroke="#0f172a" stroke-dasharray="4,4" fill="#e0f2fe" />
        <rect x="280" y="140" width="80" height="80" stroke="#0f172a" stroke-dasharray="4,4" fill="#f3e8ff" />

        <circle cx="210" cy="150" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="270" cy="70" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="270" cy="230" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="130" cy="180" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="350" cy="180" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />

        <text x="240" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">1 (밑면)</text>
        <text x="240" y="105" text-anchor="middle" font-size="12" fill="#c2410c">뒷면</text>
        <text x="240" y="265" text-anchor="middle" font-size="12" fill="#854d0e">앞면</text>
        <text x="240" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">윗면 (대면)</text>
        <text x="160" y="185" text-anchor="middle" font-size="12" fill="#0369a1">왼쪽</text>
        <text x="320" y="185" text-anchor="middle" font-size="12" fill="#7e22ce">오른쪽</text>
      </g>
    `
  },

  triangular_prism: {
    id: 'triangular_prism',
    name: '삼각기둥 / 다면체',
    engName: 'Triangular Prism & Polyhedron',
    grade: '초등 6학년 1학기 [2. 각기둥과 각뿔]',
    description: '정삼각형 밑면과 3개의 직사각형 옆면, 상단 정삼각형 덮개로 구성됩니다. 실을 당기면 3개의 옆면이 수직으로 서고 윗면 정삼각형 덮개가 수평으로 닫혀 완벽한 삼각기둥을 완성합니다.',
    stats: { faces: 5, edges: 9, vertices: 6 },
    formula: '면 = n + 2 = 5개, 모서리 = 3n = 9개, 꼭짓점 = 2n = 6개 (n=3)',
    diySpecs: {
      material: '켄트지 220g/m²',
      dimensions: '한 변 4cm 정삼각형 2개 + 4cm × 5cm 직사각형 3개',
      string: '얇은 지끈 또는 꼬임끈 약 55cm',
      holes: '꼭짓점 및 대각선 교차 타공홀'
    },
    questions: [
      '실을 당기면 2개의 정삼각형은 어떤 관계(평행/수직)가 될까요?',
      '각기둥의 옆면은 항상 어떤 모양의 사각형으로 펼쳐질까요?'
    ],
    quiz: {
      title: '삼각기둥의 밑면과 옆면 성질',
      question: '삼각기둥에서 두 밑면(삼각형)의 관계와 옆면의 개수는?',
      options: [
        { text: '① 밑면 2개는 서로 평행하고 합동이며, 옆면은 3개의 직사각형이다.', correct: true, desc: '정답입니다! 🎉 각기둥의 정의에 따라 두 밑면은 평행·합동이고 옆면은 n개입니다.' },
        { text: '② 밑면은 서로 직각이고 옆면은 사다리꼴이다.', correct: false, desc: '오답입니다. 각기둥의 두 밑면은 반드시 평행해야 합니다.' }
      ]
    },
    svgPattern: `
      <g stroke="#1e293b" stroke-width="2" fill="none">
        <rect x="140" y="120" width="90" height="130" stroke="#0f172a" stroke-dasharray="4,4" fill="#e0e7ff" />
        <rect x="230" y="120" width="90" height="130" stroke="#0f172a" fill="#e0f2fe" />
        <rect x="320" y="120" width="90" height="130" stroke="#0f172a" stroke-dasharray="4,4" fill="#e0e7ff" />
        
        <polygon points="275,42 230,120 320,120" stroke="#0f172a" stroke-dasharray="4,4" fill="#bae6fd" />
        <polygon points="275,328 230,250 320,250" stroke="#0f172a" stroke-dasharray="4,4" fill="#bae6fd" />

        <circle cx="150" cy="130" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="400" cy="130" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="275" cy="55" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />

        <text x="275" y="190" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">중앙 옆면</text>
        <text x="275" y="95" text-anchor="middle" font-size="11" fill="#0284c7">윗면 삼각형</text>
        <text x="275" y="285" text-anchor="middle" font-size="11" fill="#0284c7">밑면 삼각형</text>
      </g>
    `
  },

  cylinder: {
    id: 'cylinder',
    name: '원기둥',
    engName: 'Cylinder (실측 치수 검증)',
    grade: '초등 6학년 2학기 [3. 원기둥, 원뿔, 구]',
    description: '직사각형 옆면과 두 개의 원형 밑면으로 구성됩니다. 옆면 가로 18cm 중 밑면 둘레(약 15.7cm)를 제외한 약 2.3cm는 견고하게 맞물리는 겹침 여유분(Overlap Margin)입니다.',
    stats: { faces: 3, edges: 2, vertices: 0 },
    formula: '옆면 직사각형 가로 = 밑면 원의 둘레 (2 × π × r) + 겹침 여유분 (2.3cm)',
    diySpecs: {
      material: '180~200g/m² 색상 도화지',
      dimensions: '직사각형 18cm × 9cm, 밑면 원 반지름 2.5cm (지름 5cm) 2개',
      string: '부드러운 꼬임끈 약 65cm',
      holes: '직사각형 네 모퉁이 4개 + 원 바깥 끝 2개 (총 6개)'
    },
    questions: [
      '왜 직사각형 가로(18cm)가 원의 둘레(약 15.7cm)보다 길게 설계되었을까요?',
      '실을 당기면 평평했던 직사각형 종이가 어떻게 매끄러운 곡면 기둥이 될까요?'
    ],
    quiz: {
      title: '원기둥 전개도와 원주율(π)의 관계',
      question: '반지름이 2.5cm인 원의 둘레는 약 15.7cm입니다. 옆면 종이의 가로를 18cm로 재단한 핵심 이유는?',
      options: [
        { text: '① 종이가 줄어들 것을 대비한 여유분이다.', correct: false, desc: '오답입니다.' },
        { text: '② 실을 당겼을 때 원통 연결부가 틈 없이 단단히 겹쳐지도록(2.3cm 겹침 마진) 하기 위함이다.', correct: true, desc: '정답입니다! 🎉 겹침 마진이 있어야 종이가 벌어지지 않고 완벽한 원기둥 형태를 유지합니다.' }
      ]
    },
    svgPattern: `
      <g stroke="#1e293b" stroke-width="2" fill="none">
        <rect x="90" y="110" width="360" height="180" stroke="#0f172a" fill="#d1fae5" />
        <line x1="404" y1="110" x2="404" y2="290" stroke="#059669" stroke-width="2" stroke-dasharray="4,4" />
        <rect x="404" y="110" width="46" height="180" fill="#a7f3d0" opacity="0.6" />

        <circle cx="180" cy="60" r="50" stroke="#0f172a" fill="#fbcfe8" />
        <circle cx="180" cy="340" r="50" stroke="#0f172a" fill="#fbcfe8" />

        <circle cx="105" cy="125" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="105" cy="275" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="390" cy="125" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="390" cy="275" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="180" cy="20" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="180" cy="380" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />

        <text x="250" y="205" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">옆면 직사각형 (18cm × 9cm)</text>
        <text x="427" y="205" text-anchor="middle" font-size="11" fill="#047857" transform="rotate(90,427,205)">겹침 마진 2.3cm</text>
        <text x="180" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">윗면 (r=2.5cm)</text>
        <text x="180" y="345" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">밑면 (r=2.5cm)</text>
      </g>
    `
  },

  hexagonal_pyramid: {
    id: 'hexagonal_pyramid',
    name: '육각뿔',
    engName: 'Hexagonal Pyramid (별 모양)',
    grade: '초등 6학년 1학기 [2. 각기둥과 각뿔]',
    description: '중앙 정육각형 밑면 둘레에 6개의 이등변삼각형이 붙은 별 모양 전개도입니다. 드로스트링(조임끈) 루프를 위로 당기면 6개의 삼각형이 동시에 솟아올라 하나의 꼭짓점(Apex)으로 수렴합니다.',
    stats: { faces: 7, edges: 12, vertices: 7 },
    formula: '면 = n + 1 = 7개, 모서리 = 2n = 12개, 꼭짓점 = n + 1 = 7개 (n=6)',
    diySpecs: {
      material: '색상 도화지 200g/m²',
      dimensions: '밑면 한 변 3.5cm 정육각형, 높이 7cm 이등변삼각형 6개',
      string: '노란색 면끈 루프 약 60cm',
      holes: '6개 삼각형 꼭짓점 끝 타공홀 6개'
    },
    questions: [
      '줄을 위로 쏙 들어올렸을 때, 6개 삼각형의 뾰족한 끝은 몇 개의 점에서 만날까요?',
      '육각뿔의 면의 개수(7개)와 꼭짓점의 개수(7개)는 왜 항상 같을까요?'
    ],
    quiz: {
      title: '육각뿔의 꼭짓점과 면의 공식',
      question: '밑면이 n각형인 각뿔의 총 면의 수와 꼭짓점의 수는?',
      options: [
        { text: '① 면 = n + 1, 꼭짓점 = n + 1 (서로 개수가 같다)', correct: true, desc: '정답입니다! 🎉 밑면 1개 + 옆면 n개 = n+1개이며, 꼭짓점도 밑면 n개 + 윗꼭짓점 1개 = n+1개입니다.' },
        { text: '② 면 = n + 2, 꼭짓점 = 2n', correct: false, desc: '오답입니다. 이는 각기둥의 공식입니다.' }
      ]
    },
    svgPattern: `
      <g stroke="#1e293b" stroke-width="2" fill="none">
        <polygon points="260,170 300,170 320,205 300,240 260,240 240,205" stroke="#0f172a" fill="#10b981" />
        <polygon points="260,170 300,170 280,70" stroke="#0f172a" stroke-dasharray="3,3" fill="#a7f3d0" />
        <polygon points="300,170 320,205 400,165" stroke="#0f172a" stroke-dasharray="3,3" fill="#a7f3d0" />
        <polygon points="320,205 300,240 400,245" stroke="#0f172a" stroke-dasharray="3,3" fill="#a7f3d0" />
        <polygon points="300,240 260,240 280,340" stroke="#0f172a" stroke-dasharray="3,3" fill="#a7f3d0" />
        <polygon points="260,240 240,205 160,245" stroke="#0f172a" stroke-dasharray="3,3" fill="#a7f3d0" />
        <polygon points="240,205 260,170 160,165" stroke="#0f172a" stroke-dasharray="3,3" fill="#a7f3d0" />

        <circle cx="280" cy="80" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="390" cy="170" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="390" cy="240" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="280" cy="330" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="170" cy="240" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="170" cy="170" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />

        <text x="280" y="210" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">정육각형 밑면</text>
      </g>
    `
  },

  hexagonal_prism: {
    id: 'hexagonal_prism',
    name: '육각기둥',
    engName: 'Hexagonal Prism',
    grade: '초등 6학년 1학기 [2. 각기둥과 각뿔]',
    description: '밑면 정육각형 둘레 6개 변에 직사각형 옆면이 연결되어 있습니다. 실을 당기면 6개의 옆면이 직립하고 상단 육각형 덮개가 닫혀 단단한 육각기둥을 완성합니다.',
    stats: { faces: 8, edges: 18, vertices: 12 },
    formula: '면 = n + 2 = 8개, 모서리 = 3n = 18개, 꼭짓점 = 2n = 12개 (n=6)',
    diySpecs: {
      material: '색상 도화지 200g/m²',
      dimensions: '옆면 직사각형 폭 3cm × 높이 6cm 6개, 한 변 3cm 정육각형 밑면 2개',
      string: '지그재그 꼬임끈 약 70cm',
      holes: '옆면 상하 모서리 홀 12개 + 덮개 홀 2개'
    },
    questions: [
      '옆면의 개수(6개)에 밑면의 개수(2개)를 더하면 총 면의 개수는 몇 개일까요?',
      '실을 당겼을 때 옆면들이 어떻게 수직으로 일어서서 육각기둥을 이룰까요?'
    ],
    quiz: {
      title: '육각기둥의 구성 요소',
      question: '육각기둥의 모서리 개수는 밑면 한 변의 수(6개)의 몇 배일까요?',
      options: [
        { text: '① 2배 (12개)', correct: false, desc: '오답입니다. 이는 꼭짓점의 개수(2n)입니다.' },
        { text: '② 3배 (18개)', correct: true, desc: '정답입니다! 🎉 윗밑면 6개 + 아랫밑면 6개 + 옆모서리 6개 = 총 18개(3n)입니다.' }
      ]
    },
    svgPattern: `
      <g stroke="#1e293b" stroke-width="2" fill="none">
        <rect x="70" y="125" width="55" height="150" stroke="#0f172a" fill="#e0e7ff" />
        <rect x="125" y="125" width="55" height="150" stroke="#0f172a" stroke-dasharray="3,3" fill="#e0e7ff" />
        <rect x="180" y="125" width="55" height="150" stroke="#0f172a" stroke-dasharray="3,3" fill="#e0e7ff" />
        <rect x="235" y="125" width="55" height="150" stroke="#0f172a" stroke-dasharray="3,3" fill="#e0e7ff" />
        <rect x="290" y="125" width="55" height="150" stroke="#0f172a" stroke-dasharray="3,3" fill="#e0e7ff" />
        <rect x="345" y="125" width="55" height="150" stroke="#0f172a" stroke-dasharray="3,3" fill="#e0e7ff" />

        <polygon points="135,55 170,55 187,85 170,115 135,115 118,85" stroke="#0f172a" stroke-dasharray="3,3" fill="#f3e8ff" />
        <polygon points="135,285 170,285 187,315 170,345 135,345 118,315" stroke="#0f172a" stroke-dasharray="3,3" fill="#f3e8ff" />

        <circle cx="80" cy="135" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="390" cy="135" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="152" cy="65" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="152" cy="335" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />

        <text x="235" y="205" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">6개 옆면 직사각형</text>
        <text x="152" y="90" text-anchor="middle" font-size="10" fill="#6b21a8">윗덮개</text>
        <text x="152" y="320" text-anchor="middle" font-size="10" fill="#6b21a8">밑덮개</text>
      </g>
    `
  }
};

/**
 * 3D 힌지 기반 도형 생성 엔진
 */
class Shape3DBuilder {
  constructor(THREE) {
    this.THREE = THREE;
  }

  createPaperMaterial(colorHex, opacity = 0.94) {
    return new this.THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: 0.45,
      metalness: 0.05,
      side: this.THREE.DoubleSide,
      transparent: true,
      opacity: opacity,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    });
  }

  createEdgesLine(geometry, color = 0x0f172a) {
    const edges = new this.THREE.EdgesGeometry(geometry);
    const lineMat = new this.THREE.LineBasicMaterial({ color: color, linewidth: 2 });
    return new this.THREE.LineSegments(edges, lineMat);
  }

  /**
   * 1. 직육면체 (Cuboid)
   */
  buildCuboid() {
    const THREE = this.THREE;
    const root = new THREE.Group();
    const w = 4.0, h = 2.5, d = 3.0;

    const baseGeom = new THREE.PlaneGeometry(w, d);
    baseGeom.rotateX(-Math.PI / 2);
    const baseMesh = new THREE.Mesh(baseGeom, this.createPaperMaterial(0x60a5fa));
    baseMesh.add(this.createEdgesLine(baseGeom));
    root.add(baseMesh);

    const frontPivot = new THREE.Group();
    frontPivot.position.set(0, 0, d / 2);
    const frontGeom = new THREE.PlaneGeometry(w, h);
    frontGeom.rotateX(-Math.PI / 2);
    frontGeom.translate(0, 0, h / 2);
    const frontMesh = new THREE.Mesh(frontGeom, this.createPaperMaterial(0x38bdf8));
    frontMesh.add(this.createEdgesLine(frontGeom));
    frontPivot.add(frontMesh);
    root.add(frontPivot);

    const backPivot = new THREE.Group();
    backPivot.position.set(0, 0, -d / 2);
    const backGeom = new THREE.PlaneGeometry(w, h);
    backGeom.rotateX(-Math.PI / 2);
    backGeom.translate(0, 0, -h / 2);
    const backMesh = new THREE.Mesh(backGeom, this.createPaperMaterial(0x818cf8));
    backMesh.add(this.createEdgesLine(backGeom));
    backPivot.add(backMesh);
    root.add(backPivot);

    const topPivot = new THREE.Group();
    topPivot.position.set(0, 0, -h);
    const topGeom = new THREE.PlaneGeometry(w, d);
    topGeom.rotateX(-Math.PI / 2);
    topGeom.translate(0, 0, -d / 2);
    const topMesh = new THREE.Mesh(topGeom, this.createPaperMaterial(0x60a5fa));
    topMesh.add(this.createEdgesLine(topGeom));
    topPivot.add(topMesh);
    backMesh.add(topPivot);

    const leftPivot = new THREE.Group();
    leftPivot.position.set(-w / 2, 0, 0);
    const leftGeom = new THREE.PlaneGeometry(h, d);
    leftGeom.rotateX(-Math.PI / 2);
    leftGeom.translate(-h / 2, 0, 0);
    const leftMesh = new THREE.Mesh(leftGeom, this.createPaperMaterial(0x34d399));
    leftMesh.add(this.createEdgesLine(leftGeom));
    leftPivot.add(leftMesh);
    root.add(leftPivot);

    const rightPivot = new THREE.Group();
    rightPivot.position.set(w / 2, 0, 0);
    const rightGeom = new THREE.PlaneGeometry(h, d);
    rightGeom.rotateX(-Math.PI / 2);
    rightGeom.translate(h / 2, 0, 0);
    const rightMesh = new THREE.Mesh(rightGeom, this.createPaperMaterial(0xf472b6));
    rightMesh.add(this.createEdgesLine(rightGeom));
    rightPivot.add(rightMesh);
    root.add(rightPivot);

    const stringMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 3 });
    const stringGeom = new THREE.BufferGeometry();
    const stringLine = new THREE.Line(stringGeom, stringMat);
    root.add(stringLine);

    const update = (t) => {
      const angle = (Math.PI / 2) * t;
      frontPivot.rotation.x = -angle;
      backPivot.rotation.x = angle;
      topPivot.rotation.x = angle;
      leftPivot.rotation.z = -angle;
      rightPivot.rotation.z = angle;

      const pullDist = (1 - t) * 3;
      const pts = [
        new THREE.Vector3(0, -0.05, d / 2 + pullDist),
        new THREE.Vector3(0, 0, d / 2),
        new THREE.Vector3(-w / 2, h * t, 0),
        new THREE.Vector3(0, h * t, -d / 2),
        new THREE.Vector3(w / 2, h * t, 0),
        new THREE.Vector3(0, 0, d / 2)
      ];
      stringGeom.setFromPoints(pts);
    };

    update(0);
    return { root, update };
  }

  /**
   * 2. 정육면체 (Cube) - 완전 닫힘 보장 힌지 시스템
   * 한 변 s(3.0)
   * 밑면(Base) 기준 4방향 힌지 + 뒷면 끝 상단 덮개 힌지
   * (직육면체와 동일한 완벽 검증 힌지 메커니즘을 s=3.0 정사각형에 적용)
   */
  buildCube() {
    const THREE = this.THREE;
    const root = new THREE.Group();
    const s = 3.0;

    // 1) 밑면 Base (F1 - 빨강)
    const baseGeom = new THREE.PlaneGeometry(s, s);
    baseGeom.rotateX(-Math.PI / 2);
    const baseMesh = new THREE.Mesh(baseGeom, this.createPaperMaterial(0xef4444));
    baseMesh.add(this.createEdgesLine(baseGeom));
    root.add(baseMesh);

    // 2) 앞면 Front (F2 - 주황)
    const frontPivot = new THREE.Group();
    frontPivot.position.set(0, 0, s / 2);
    const frontGeom = new THREE.PlaneGeometry(s, s);
    frontGeom.rotateX(-Math.PI / 2);
    frontGeom.translate(0, 0, s / 2);
    const frontMesh = new THREE.Mesh(frontGeom, this.createPaperMaterial(0xf97316));
    frontMesh.add(this.createEdgesLine(frontGeom));
    frontPivot.add(frontMesh);
    root.add(frontPivot);

    // 3) 뒷면 Back (F3 - 노랑)
    const backPivot = new THREE.Group();
    backPivot.position.set(0, 0, -s / 2);
    const backGeom = new THREE.PlaneGeometry(s, s);
    backGeom.rotateX(-Math.PI / 2);
    backGeom.translate(0, 0, -s / 2);
    const backMesh = new THREE.Mesh(backGeom, this.createPaperMaterial(0xfacc15));
    backMesh.add(this.createEdgesLine(backGeom));
    backPivot.add(backMesh);
    root.add(backPivot);

    // 4) 윗면 Top Lid (F4 - 밑면과 대면: 빨강)
    // 뒷면 backMesh 끝 (z = -s)에 힌지 부착
    const topPivot = new THREE.Group();
    topPivot.position.set(0, 0, -s);
    const topGeom = new THREE.PlaneGeometry(s, s);
    topGeom.rotateX(-Math.PI / 2);
    topGeom.translate(0, 0, -s / 2);
    const topMesh = new THREE.Mesh(topGeom, this.createPaperMaterial(0xef4444));
    topMesh.add(this.createEdgesLine(topGeom));
    topPivot.add(topMesh);
    backMesh.add(topPivot);

    // 5) 왼쪽면 Left (F5 - 하늘)
    const leftPivot = new THREE.Group();
    leftPivot.position.set(-s / 2, 0, 0);
    const leftGeom = new THREE.PlaneGeometry(s, s);
    leftGeom.rotateX(-Math.PI / 2);
    leftGeom.translate(-s / 2, 0, 0);
    const leftMesh = new THREE.Mesh(leftGeom, this.createPaperMaterial(0x38bdf8));
    leftMesh.add(this.createEdgesLine(leftGeom));
    leftPivot.add(leftMesh);
    root.add(leftPivot);

    // 6) 오른쪽면 Right (F6 - 보라)
    const rightPivot = new THREE.Group();
    rightPivot.position.set(s / 2, 0, 0);
    const rightGeom = new THREE.PlaneGeometry(s, s);
    rightGeom.rotateX(-Math.PI / 2);
    rightGeom.translate(s / 2, 0, 0);
    const rightMesh = new THREE.Mesh(rightGeom, this.createPaperMaterial(0xa855f7));
    rightMesh.add(this.createEdgesLine(rightGeom));
    rightPivot.add(rightMesh);
    root.add(rightPivot);

    const stringMat = new THREE.LineBasicMaterial({ color: 0xe11d48, linewidth: 3 });
    const stringGeom = new THREE.BufferGeometry();
    const stringLine = new THREE.Line(stringGeom, stringMat);
    root.add(stringLine);

    const update = (t) => {
      const angle = (Math.PI / 2) * t;

      frontPivot.rotation.x = -angle; // 앞면 90도 일어섬
      backPivot.rotation.x = angle;   // 뒷면 90도 일어섬
      topPivot.rotation.x = angle;    // 윗면 90도 꺾여 천장을 완벽히 덮음 (결함 100% 해결!)
      leftPivot.rotation.z = -angle;  // 왼쪽면 90도 일어섬
      rightPivot.rotation.z = angle;  // 오른쪽면 90도 일어섬

      const pull = (1 - t) * 3;
      const pts = [
        new THREE.Vector3(s / 2 + pull, 0, s / 2 + pull),
        new THREE.Vector3(s / 2, 0, s / 2),
        new THREE.Vector3(-s / 2, s * t, 0),
        new THREE.Vector3(0, s * t, -s / 2),
        new THREE.Vector3(s / 2, s * t, 0),
        new THREE.Vector3(0, 0, s / 2)
      ];
      stringGeom.setFromPoints(pts);
    };

    update(0);
    return { root, update };
  }

  /**
   * 3. 삼각기둥 (Triangular Prism) - 상단 덮개 완벽 밀착 버전
   * a: 정삼각형 한 변 (3.6), h: 높이 (4.0)
   */
  buildTriangularPrism() {
    const THREE = this.THREE;
    const root = new THREE.Group();

    const a = 3.6;
    const h = 4.0;
    const hTri = (a * Math.sqrt(3)) / 2; // 정삼각형 높이 ≈ 3.118
    const rIn = (a * Math.sqrt(3)) / 6;  // 내접원 반지름 ≈ 1.039
    const rCirc = (a * Math.sqrt(3)) / 3; // 외접원 반지름 ≈ 2.078

    // 1) 밑면 정삼각형: 앞쪽 꼭짓점 (0, 0, rCirc), 뒤쪽 밑변 z = -rIn
    const baseGeom = new THREE.BufferGeometry();
    const baseVertices = new Float32Array([
      -a / 2, 0, -rIn,
       a / 2, 0, -rIn,
       0, 0, rCirc
    ]);
    baseGeom.setAttribute('position', new THREE.BufferAttribute(baseVertices, 3));
    baseGeom.computeVertexNormals();

    const baseMesh = new THREE.Mesh(baseGeom, this.createPaperMaterial(0x38bdf8));
    baseMesh.add(this.createEdgesLine(baseGeom));
    root.add(baseMesh);

    // 2) 3개 옆면 직사각형 (a × h)
    const sideHinges = [];
    let backSideMesh = null;

    for (let i = 0; i < 3; i++) {
      const rotY = (i * 2 * Math.PI) / 3;
      const group = new THREE.Group();
      group.rotation.y = rotY;

      const hinge = new THREE.Group();
      hinge.position.set(0, 0, -rIn); // 정삼각형의 변 위치

      const panelGeom = new THREE.PlaneGeometry(a, h);
      panelGeom.rotateX(-Math.PI / 2);
      panelGeom.translate(0, 0, -h / 2); // 바깥쪽(-Z)으로 펼쳐짐
      const panelMesh = new THREE.Mesh(panelGeom, this.createPaperMaterial(0x818cf8));
      panelMesh.add(this.createEdgesLine(panelGeom));
      hinge.add(panelMesh);

      group.add(hinge);
      root.add(group);
      sideHinges.push(hinge);

      if (i === 0) backSideMesh = panelMesh;
    }

    // 3) 윗면 정삼각형 덮개:
    // 뒷쪽 옆면 panelMesh 끝 (z = -h)에 힌지 부착
    // 힌지 선상에 밑변(-a/2 ~ a/2)이 있고, 꼭짓점은 바깥쪽(로컬 -Z)으로 hTri만큼 뻗음
    // 힌지 회전 시 (+angle) 90도 꺾여 천장(로컬 +Z 방향)으로 누워 밑면과 정확히 일치!
    const topPivot = new THREE.Group();
    topPivot.position.set(0, 0, -h);

    const topGeom = new THREE.BufferGeometry();
    const topVertices = new Float32Array([
      -a / 2, 0, 0,
       a / 2, 0, 0,
       0, 0, -hTri
    ]);
    topGeom.setAttribute('position', new THREE.BufferAttribute(topVertices, 3));
    topGeom.computeVertexNormals();

    const topMesh = new THREE.Mesh(topGeom, this.createPaperMaterial(0x38bdf8));
    topMesh.add(this.createEdgesLine(topGeom));
    topPivot.add(topMesh);
    backSideMesh.add(topPivot);

    const stringMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 3 });
    const stringGeom = new THREE.BufferGeometry();
    const stringLine = new THREE.Line(stringGeom, stringMat);
    root.add(stringLine);

    const update = (t) => {
      const angle = (Math.PI / 2) * t;

      // 3개 옆면 위(+Y)로 90도 일어섬
      sideHinges.forEach((hng) => {
        hng.rotation.x = angle;
      });

      // 윗면 덮개가 안쪽으로 90도 정확히 꺾여 수평 천장 닫힘! (결함 100% 해결!)
      topPivot.rotation.x = angle;

      const pull = (1 - t) * 3;
      const pts = [
        new THREE.Vector3(0, -pull, -rIn - pull),
        new THREE.Vector3(0, 0, -rIn),
        new THREE.Vector3(-a / 2, h * t, -rIn),
        new THREE.Vector3(a / 2, h * t, -rIn),
        new THREE.Vector3(0, h * t, rCirc),
        new THREE.Vector3(0, 0, -rIn)
      ];
      stringGeom.setFromPoints(pts);
    };

    update(0);
    return { root, update };
  }

  /**
   * 4. 원기둥 (Cylinder) - 매끄러운 원통 & 완벽한 수평 뚜껑 결합
   * radius: 2.2, height: 4.2
   */
  buildCylinder() {
    const THREE = this.THREE;
    const root = new THREE.Group();

    const radius = 2.2;
    const height = 4.2;
    const width = 2 * Math.PI * radius; // 원둘레 (약 13.82)
    const segments = 36;

    // 1) 롤링 원통 몸체 (정점 변형)
    const geom = new THREE.PlaneGeometry(width, height, segments, 1);
    geom.translate(0, height / 2, 0); // 밑변이 y=0에 위치
    const origPositions = geom.attributes.position.clone();

    const bodyMat = this.createPaperMaterial(0x34d399, 0.95);
    const bodyMesh = new THREE.Mesh(geom, bodyMat);
    root.add(bodyMesh);

    // 실시간 모서리 테두리 라인 (상단/하단 림 링 라인 및 좌우 솔기선)
    const edgeLinesGroup = new THREE.Group();
    root.add(edgeLinesGroup);

    // 2) 밑면 원형 덮개 (Circle r)
    // 원통이 닫혔을 때 중심은 (0, 0, -radius)
    const circleGeom = new THREE.CircleGeometry(radius, 32);
    circleGeom.rotateX(-Math.PI / 2);

    const bottomCover = new THREE.Group();
    const bottomMesh = new THREE.Mesh(circleGeom, this.createPaperMaterial(0xf472b6));
    bottomMesh.add(this.createEdgesLine(circleGeom, 0xdb2777));
    bottomCover.add(bottomMesh);
    root.add(bottomCover);

    // 3) 윗면 원형 덮개
    const topCover = new THREE.Group();
    const topMesh = new THREE.Mesh(circleGeom, this.createPaperMaterial(0xf472b6));
    topMesh.add(this.createEdgesLine(circleGeom, 0xdb2777));
    topCover.add(topMesh);
    root.add(topCover);

    const stringMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 3 });
    const stringGeom = new THREE.BufferGeometry();
    const stringLine = new THREE.Line(stringGeom, stringMat);
    root.add(stringLine);

    const pos = geom.attributes.position;

    const update = (t) => {
      // 1) 원통 곡면 롤링 (파라메트릭 정점 굽힘)
      if (t < 0.001) {
        for (let i = 0; i < origPositions.count; i++) {
          pos.setXYZ(i, origPositions.getX(i), origPositions.getY(i), 0);
        }
      } else {
        const thetaTotal = 2 * Math.PI * t;
        const curR = width / thetaTotal;

        for (let i = 0; i < origPositions.count; i++) {
          const ox = origPositions.getX(i);
          const oy = origPositions.getY(i);
          const u = ox / width; // -0.5 ~ 0.5
          const ang = u * thetaTotal;
          const x = curR * Math.sin(ang);
          const z = -curR * (1 - Math.cos(ang)) * t;
          pos.setXYZ(i, x, oy, z);
        }
      }
      pos.needsUpdate = true;
      geom.computeVertexNormals();

      // 2) 상·하단 원형 뚜껑 접힘 (평면 펼침 ↔ 수평 밀폐)
      // t=0: 바닥 평면 전개도 상에서 직사각형 위아래로 펼쳐짐
      // t=1: y=0, y=height 에서 수평으로 완벽 밀폐 (z = -radius)
      const targetZ = -radius * t;

      // 밑면 뚜껑: t=0일 때 z = radius, t=1일 때 z = -radius, y=0 유지 (완전 수평)
      bottomCover.position.set(0, 0, (1 - 2 * t) * radius);
      bottomCover.rotation.x = (1 - t) * 0.5; // 펼쳐질 때 가볍게 기울어져 전개도 느낌

      // 윗면 뚜껑: t=0일 때 z = radius, t=1일 때 z = -radius, y = height
      topCover.position.set(0, height, (1 - 2 * t) * radius);
      topCover.rotation.x = -(1 - t) * 0.5;

      const pull = (1 - t) * 3;
      const pts = [
        new THREE.Vector3(0, -pull, targetZ + pull),
        new THREE.Vector3(-radius, 0, targetZ),
        new THREE.Vector3(0, height, targetZ),
        new THREE.Vector3(radius, height, targetZ),
        new THREE.Vector3(0, 0, targetZ)
      ];
      stringGeom.setFromPoints(pts);
    };

    update(0);
    return { root, update };
  }

  /**
   * 5. 육각뿔 (Hexagonal Pyramid)
   */
  buildHexagonalPyramid() {
    const THREE = this.THREE;
    const root = new THREE.Group();

    const r = 2.4;
    const hTri = 4.8;
    const apothem = (r * Math.sqrt(3)) / 2;
    const sideLen = r;

    const baseGeom = new THREE.CircleGeometry(r, 6);
    baseGeom.rotateX(-Math.PI / 2);
    const baseMesh = new THREE.Mesh(baseGeom, this.createPaperMaterial(0x10b981));
    baseMesh.add(this.createEdgesLine(baseGeom));
    root.add(baseMesh);

    const sideWings = [];

    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;

      const pivotHolder = new THREE.Group();
      pivotHolder.rotation.y = angle;

      const hinge = new THREE.Group();
      hinge.position.set(0, 0, apothem);

      const triGeom = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        -sideLen / 2, 0, 0,
         sideLen / 2, 0, 0,
         0, 0, hTri
      ]);
      triGeom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      triGeom.computeVertexNormals();

      const triMesh = new THREE.Mesh(triGeom, this.createPaperMaterial(0x6ee7b7));
      triMesh.add(this.createEdgesLine(triGeom));
      hinge.add(triMesh);

      pivotHolder.add(hinge);
      root.add(pivotHolder);
      sideWings.push(hinge);
    }

    const stringMat = new THREE.LineBasicMaterial({ color: 0xfacc15, linewidth: 3 });
    const stringGeom = new THREE.BufferGeometry();
    const stringLine = new THREE.Line(stringGeom, stringMat);
    root.add(stringLine);

    const update = (t) => {
      const curFoldAngle = (Math.PI / 2 + Math.asin(apothem / hTri)) * t;

      sideWings.forEach((wing) => {
        wing.rotation.x = -curFoldAngle;
      });

      const loopPts = [];
      const currentApexDist = apothem + Math.cos(-curFoldAngle) * hTri;
      const currentApexHeight = Math.sin(curFoldAngle) * hTri;

      for (let i = 0; i <= 6; i++) {
        const ang = (i % 6) * (Math.PI / 3);
        const x = currentApexDist * Math.sin(ang);
        const z = currentApexDist * Math.cos(ang);
        loopPts.push(new THREE.Vector3(x, currentApexHeight, z));
      }

      const pullUp = currentApexHeight + (1 - t) * 3 + 0.5;
      loopPts.push(new THREE.Vector3(0, pullUp, 0));

      stringGeom.setFromPoints(loopPts);
    };

    update(0);
    return { root, update };
  }

  /**
   * 6. 육각기둥 (Hexagonal Prism)
   */
  buildHexagonalPrism() {
    const THREE = this.THREE;
    const root = new THREE.Group();

    const r = 2.2;
    const side = r;
    const height = 4.4;
    const apothem = (r * Math.sqrt(3)) / 2;

    const baseGeom = new THREE.CircleGeometry(r, 6);
    baseGeom.rotateX(-Math.PI / 2);
    const baseMesh = new THREE.Mesh(baseGeom, this.createPaperMaterial(0x818cf8));
    baseMesh.add(this.createEdgesLine(baseGeom));
    root.add(baseMesh);

    const sideHinges = [];
    let firstSideMesh = null;

    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;

      const pivotHolder = new THREE.Group();
      pivotHolder.rotation.y = angle;

      const hinge = new THREE.Group();
      hinge.position.set(0, 0, apothem);

      const panelGeom = new THREE.PlaneGeometry(side, height);
      panelGeom.rotateX(-Math.PI / 2);
      panelGeom.translate(0, 0, height / 2);

      const panelMesh = new THREE.Mesh(panelGeom, this.createPaperMaterial(0xa5b4fc));
      panelMesh.add(this.createEdgesLine(panelGeom));
      hinge.add(panelMesh);

      pivotHolder.add(hinge);
      root.add(pivotHolder);
      sideHinges.push(hinge);

      if (i === 0) firstSideMesh = panelMesh;
    }

    const topPivot = new THREE.Group();
    topPivot.position.set(0, 0, height);
    const topGeom = new THREE.CircleGeometry(r, 6);
    topGeom.rotateX(-Math.PI / 2);
    topGeom.translate(0, 0, apothem);
    const topMesh = new THREE.Mesh(topGeom, this.createPaperMaterial(0x818cf8));
    topMesh.add(this.createEdgesLine(topGeom));
    topPivot.add(topMesh);
    firstSideMesh.add(topPivot);

    const stringMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 3 });
    const stringGeom = new THREE.BufferGeometry();
    const stringLine = new THREE.Line(stringGeom, stringMat);
    root.add(stringLine);

    const update = (t) => {
      const angle = (Math.PI / 2) * t;

      sideHinges.forEach((hng) => {
        hng.rotation.x = -angle;
      });

      topPivot.rotation.x = -angle;

      const pull = (1 - t) * 3;
      const pts = [
        new THREE.Vector3(0, -pull, apothem + pull),
        new THREE.Vector3(0, 0, apothem),
        new THREE.Vector3(-side / 2, height * t, apothem),
        new THREE.Vector3(side / 2, height * t, apothem),
        new THREE.Vector3(0, height * t, -apothem),
        new THREE.Vector3(0, 0, apothem)
      ];
      stringGeom.setFromPoints(pts);
    };

    update(0);
    return { root, update };
  }
}

window.Shape3DBuilder = Shape3DBuilder;
