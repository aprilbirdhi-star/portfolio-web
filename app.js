// Data Mockup - Firebase 연동 전 사용할 데이터 구조
const mockData = {
    metrics: {
        labels: ['06/16', '06/17', '06/18', '06/19', '06/20', '06/21', '06/22'],
        visitors: [10, 45, 120, 310, 520, 800, 1200],
        appsDeveloped: [1, 1, 0, 1, 0, 1, 1]
    },
    apps: [
        {
            id: 4,
            title: "Speak To-Do",
            description: "음성으로 기록하고 AI가 자동 분류해주는 똑똑한 데일리 스케줄러 (PWA 지원)",
            status: "Launched",
            link: "./speaktodo/index.html",
            createdAt: "2026-06-22"
        },
        {
            id: 1,
            title: "QuickTask",
            description: "가장 단순하게 할 일을 기록하고 지우는 미니멀 투두앱",
            status: "Launched",
            link: "#",
            createdAt: "2026-06-15"
        },
        {
            id: 2,
            title: "FocusTimer",
            description: "뽀모도로 기법을 웹에서 바로 쓸 수 있는 타이머",
            status: "Launched",
            link: "#",
            createdAt: "2026-06-16"
        },
        {
            id: 3,
            title: "ColorPalette",
            description: "개발자를 위한 원클릭 색상 추출 및 추천 툴",
            status: "Launched",
            link: "#",
            createdAt: "2026-06-17"
        }
    ],
    timeline: [
        {
            id: 'speak-todo-launch',
            date: "2026-06-22",
            content: "🎙️ 4번째 앱 'Speak To-Do' 런칭 완료! AI(Gemini) API를 연동하여 음성 인식과 자연어 처리를 결합한 앱을 만들었다."
        },
        {
            id: 1,
            date: "2026-06-22",
            content: "💡 1일 1앱 프로젝트 선언. 첫 시작은 완벽함보다 일단 배포하는 것에 의의를 두기로 했다. 앞으로 험난한 여정이 되겠지만, 꾸준히 기록해보자."
        },
        {
            id: 2,
            date: "2026-06-21",
            content: "🚀 3번째 앱 ColorPalette 런칭 완료! 디자이너 친구에게 피드백을 받았는데 UI가 조금 투박하다는 소리를 들었다. 내일은 CSS를 좀 더 다듬어야겠다."
        },
        {
            id: 3,
            date: "2026-06-19",
            content: "🔥 방문자 수가 처음으로 100명을 넘었다. 트위터에 공유한 것이 생각보다 효과가 컸다. 역시 빌드인퍼블릭(Build in Public)이 답인가?"
        }
    ]
};

// Initialize Charts
function initCharts() {
    // Chart Common Options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
            x: { grid: { display: false } }
        }
    };

    // Visitors Chart
    const ctxVisitors = document.getElementById('visitorsChart').getContext('2d');
    new Chart(ctxVisitors, {
        type: 'line',
        data: {
            labels: mockData.metrics.labels,
            datasets: [{
                label: '방문자 수',
                data: mockData.metrics.visitors,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: commonOptions
    });

    // Apps Developed Chart
    const ctxAppsDev = document.getElementById('appsDevChart').getContext('2d');
    new Chart(ctxAppsDev, {
        type: 'bar',
        data: {
            labels: mockData.metrics.labels,
            datasets: [{
                label: '일일 앱 개발 수',
                data: mockData.metrics.appsDeveloped,
                backgroundColor: '#8b5cf6', // Purple
                borderRadius: 4
            }]
        },
        options: Object.assign({}, commonOptions, {
            scales: {
                y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { stepSize: 1 } },
                x: { grid: { display: false } }
            }
        })
    });
}

// Render Apps
function renderApps() {
    const container = document.getElementById('apps-container');
    container.innerHTML = mockData.apps.map(app => `
        <a href="${app.link}" class="app-card" target="_blank">
            <div class="app-info">
                <div class="app-title">${app.title}</div>
                <div class="app-desc">${app.description}</div>
            </div>
            <div class="app-status">${app.status}</div>
        </a>
    `).join('');
}

// Render Timeline
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = mockData.timeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">${item.content}</div>
        </div>
    `).join('');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    renderApps();
    renderTimeline();
});
