import { translations } from './translations.js';

export class RankingManager {
    constructor() {
        this.currentSource = 'lmsys';
        this.lastUpdate = new Date();
        this.rankingData = {};
        this.updateInterval = 5 * 60 * 1000; // 5分钟更新一次
    }

    async initialize() {
        await this.fetchRankingData();
        this.setupEventListeners();
        this.startAutoUpdate();
    }

    setupEventListeners() {
        document.querySelectorAll('.ranking-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.ranking-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.currentSource = tab.dataset.source;
                this.updateRankingDisplay();
            });
        });
    }

    async fetchRankingData() {
        try {
            // 这里应该是实际的API调用
            // 目前使用模拟数据
            this.rankingData = {
                lmsys: [
                    { name: 'GPT-4', score: 9.8, trend: 'up', metrics: { accuracy: '98%', speed: '120ms' } },
                    { name: 'Claude 3', score: 9.6, trend: 'up', metrics: { accuracy: '96%', speed: '150ms' } },
                    { name: 'Gemini Ultra', score: 9.4, trend: 'stable', metrics: { accuracy: '94%', speed: '130ms' } }
                ],
                aigcrank: [
                    { name: 'Midjourney V6', score: 9.9, trend: 'up', metrics: { quality: '99%', speed: '2s' } },
                    { name: 'DALL·E 3', score: 9.7, trend: 'stable', metrics: { quality: '97%', speed: '3s' } },
                    { name: 'Stable Diffusion 3', score: 9.5, trend: 'up', metrics: { quality: '95%', speed: '1s' } }
                ],
                zhongping: [
                    { name: 'ChatGPT Plus', score: 9.7, trend: 'up', metrics: { users: '1000万+', rating: '4.9' } },
                    { name: '文心一言', score: 9.5, trend: 'up', metrics: { users: '800万+', rating: '4.8' } },
                    { name: '通义千问', score: 9.3, trend: 'stable', metrics: { users: '600万+', rating: '4.7' } }
                ]
            };
            this.lastUpdate = new Date();
            this.updateLastUpdateTime();
        } catch (error) {
            console.error('Failed to fetch ranking data:', error);
        }
    }

    updateRankingDisplay() {
        const rankingList = document.getElementById('rankingList');
        const data = this.rankingData[this.currentSource] || [];
        const currentLang = document.documentElement.lang || 'en';
        const lang = translations[currentLang] || translations.en;
        
        rankingList.innerHTML = data.map((item, index) => `
            <div class="ranking-item">
                <div class="ranking-position rank-${index < 3 ? index + 1 : 'other'}">${index + 1}</div>
                <div class="ranking-info">
                    <div class="ranking-name">${this.getLocalizedName(item.name, currentLang)}</div>
                    <div class="ranking-metrics">
                        ${Object.entries(item.metrics).map(([key, value]) => `
                            <div class="ranking-metric">
                                <span>${lang.ranking.metrics[key] || key}:</span>
                                <span>${this.getLocalizedValue(value, currentLang)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="ranking-score">${item.score}</div>
                <div class="ranking-trend trend-${item.trend}">
                    ${item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
                </div>
            </div>
        `).join('');
    }

    getLocalizedName(name, lang) {
        // 为特定语言本地化模型名称
        const nameMap = {
            zh: {
                'GPT-4': 'GPT-4',
                'Claude 3': 'Claude 3',
                'Gemini Ultra': 'Gemini Ultra',
                'ChatGPT Plus': 'ChatGPT Plus',
                '文心一言': '文心一言',
                '通义千问': '通义千问'
            },
            ar: {
                'GPT-4': 'جي بي تي-4',
                'Claude 3': 'كلود 3',
                'Gemini Ultra': 'جيميني ألترا'
            }
        };
        
        return nameMap[lang]?.[name] || name;
    }

    getLocalizedValue(value, lang) {
        // 本地化数值显示
        if (typeof value === 'string' && lang === 'ar') {
            // 将阿拉伯语中的数字转换为阿拉伯数字
            return value.replace(/\d+/g, num => num.replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]));
        }
        return value;
    }

    updateLastUpdateTime() {
        const timeElement = document.getElementById('lastUpdateTime');
        if (timeElement) {
            const currentLang = document.documentElement.lang || 'en';
            timeElement.textContent = this.lastUpdate.toLocaleString(currentLang);
        }
    }

    startAutoUpdate() {
        setInterval(() => this.fetchRankingData(), this.updateInterval);
    }
} 