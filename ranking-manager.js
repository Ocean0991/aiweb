// 导入translations对象
import translations from './translations.js';

class RankingManager {
    constructor() {
        this.currentSource = 'lmsys'; // 默认数据源
        this.rankings = {
            lmsys: [], // Chatbot Arena排名
            aigcrank: [], // AIGCRank排名
            zhongping: [] // 中评数据排名
        };
        this.init();
    }

    // 初始化排行榜
    init() {
        // 加载模拟排名数据
        this.loadRankingData();
        
        // 绑定标签切换事件
        document.querySelectorAll('.ranking-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const source = tab.getAttribute('data-source');
                this.switchSource(source);
            });
        });
        
        // 初始显示
        this.updateRankingDisplay();
        
        // 设置定时更新（每5分钟）
        setInterval(() => this.updateRankings(), 5 * 60 * 1000);
    }

    // 切换数据源
    switchSource(source) {
        if (!this.rankings[source]) {
            console.error(`Unsupported ranking source: ${source}`);
            return;
        }
        
        // 更新当前源
        this.currentSource = source;
        
        // 更新标签状态
        document.querySelectorAll('.ranking-tab').forEach(tab => {
            if (tab.getAttribute('data-source') === source) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // 更新排行榜显示
        this.updateRankingDisplay();
    }

    // 加载排名数据（模拟数据）
    loadRankingData() {
        // 模拟Chatbot Arena排名
        this.rankings.lmsys = [
            {
                position: 1,
                model: 'Claude 3 Opus',
                metrics: {
                    accuracy: '96.8%',
                    speed: '3.2s',
                    quality: '9.3/10',
                    users: '2.5M'
                },
                trend: 'up'
            },
            {
                position: 2,
                model: 'GPT-4 Turbo',
                metrics: {
                    accuracy: '95.2%',
                    speed: '4.1s',
                    quality: '9.1/10',
                    users: '5M+'
                },
                trend: 'neutral'
            },
            {
                position: 3,
                model: 'Claude 3 Sonnet',
                metrics: {
                    accuracy: '94.7%',
                    speed: '2.5s',
                    quality: '8.9/10',
                    users: '1.8M'
                },
                trend: 'up'
            },
            {
                position: 4,
                model: 'Gemini 1.5 Pro',
                metrics: {
                    accuracy: '93.5%',
                    speed: '3.7s',
                    quality: '8.7/10',
                    users: '1.2M'
                },
                trend: 'up'
            },
            {
                position: 5,
                model: 'Claude 3 Haiku',
                metrics: {
                    accuracy: '91.3%',
                    speed: '1.9s',
                    quality: '8.5/10',
                    users: '950K'
                },
                trend: 'up'
            }
        ];
        
        // 模拟AIGCRank排名
        this.rankings.aigcrank = [
            {
                position: 1,
                model: 'Claude 3 Opus',
                metrics: {
                    accuracy: '97.1%',
                    speed: '3.3s',
                    quality: '9.4/10',
                    rating: '4.9/5'
                },
                trend: 'up'
            },
            {
                position: 2,
                model: 'GPT-4o',
                metrics: {
                    accuracy: '96.8%',
                    speed: '2.9s',
                    quality: '9.3/10',
                    rating: '4.8/5'
                },
                trend: 'up'
            },
            {
                position: 3,
                model: 'GPT-4 Turbo',
                metrics: {
                    accuracy: '95.5%',
                    speed: '4.0s',
                    quality: '9.2/10',
                    rating: '4.8/5'
                },
                trend: 'down'
            },
            {
                position: 4,
                model: 'Gemini 1.5 Pro',
                metrics: {
                    accuracy: '94.2%',
                    speed: '3.5s',
                    quality: '8.9/10',
                    rating: '4.7/5'
                },
                trend: 'up'
            },
            {
                position: 5,
                model: 'Claude 3 Sonnet',
                metrics: {
                    accuracy: '93.8%',
                    speed: '2.4s',
                    quality: '8.8/10',
                    rating: '4.7/5'
                },
                trend: 'down'
            }
        ];
        
        // 模拟中评数据排名
        this.rankings.zhongping = [
            {
                position: 1,
                model: 'GPT-4o',
                metrics: {
                    accuracy: '97.3%',
                    speed: '2.8s',
                    quality: '9.5/10',
                    users: '6M+'
                },
                trend: 'up'
            },
            {
                position: 2,
                model: 'Claude 3 Opus',
                metrics: {
                    accuracy: '96.9%',
                    speed: '3.4s',
                    quality: '9.4/10',
                    users: '2.8M'
                },
                trend: 'neutral'
            },
            {
                position: 3,
                model: 'Gemini 1.5 Pro',
                metrics: {
                    accuracy: '95.1%',
                    speed: '3.3s',
                    quality: '9.0/10',
                    users: '1.5M'
                },
                trend: 'up'
            },
            {
                position: 4,
                model: 'GPT-4 Turbo',
                metrics: {
                    accuracy: '94.8%',
                    speed: '4.2s',
                    quality: '9.0/10',
                    users: '5.5M'
                },
                trend: 'down'
            },
            {
                position: 5,
                model: 'GLM-4',
                metrics: {
                    accuracy: '92.5%',
                    speed: '3.1s',
                    quality: '8.7/10',
                    users: '1.1M'
                },
                trend: 'up'
            }
        ];
    }

    // 更新排行榜显示
    updateRankingDisplay() {
        const rankingList = document.querySelector('.ranking-list');
        if (!rankingList) return;
        
        // 清空现有排行
        rankingList.innerHTML = '';
        
        // 获取当前语言的翻译
        const currentLang = document.documentElement.lang || localStorage.getItem('preferredLanguage') || 'en';
        const lang = translations[currentLang] || translations.en;
        
        // 添加排行项
        this.rankings[this.currentSource].forEach(item => {
            const rankingItem = document.createElement('div');
            rankingItem.className = 'ranking-item';
            
            // 排名位置
            const positionClass = item.position <= 3 ? `pos-${item.position}` : '';
            
            // 趋势图标
            let trendIcon, trendClass;
            if (item.trend === 'up') {
                trendIcon = '↑';
                trendClass = 'trend-up';
            } else if (item.trend === 'down') {
                trendIcon = '↓';
                trendClass = 'trend-down';
            } else {
                trendIcon = '–';
                trendClass = 'trend-neutral';
            }
            
            // 构建指标HTML
            let metricsHtml = '';
            for (const [key, value] of Object.entries(item.metrics)) {
                if (lang.ranking.metrics[key]) {
                    metricsHtml += `
                        <div class="ranking-metric">
                            <span class="ranking-metric-name">${lang.ranking.metrics[key]}:</span>
                            <span class="ranking-metric-value">${value}</span>
                        </div>
                    `;
                }
            }
            
            // 设置HTML内容
            rankingItem.innerHTML = `
                <div class="ranking-position ${positionClass}">${item.position}</div>
                <div class="ranking-info">
                    <div class="ranking-model">${item.model}</div>
                    <div class="ranking-metrics">
                        ${metricsHtml}
                    </div>
                </div>
                <div class="ranking-trend ${trendClass}">
                    ${trendIcon}
                </div>
            `;
            
            rankingList.appendChild(rankingItem);
        });
        
        // 更新最后更新时间
        document.getElementById('lastUpdateTime').textContent = new Date().toLocaleString(currentLang);
    }

    // 更新排名数据（模拟API请求）
    updateRankings() {
        // 模拟API请求延迟
        setTimeout(() => {
            // 更新排名数据（这里仅做模拟）
            this.loadRankingData();
            
            // 更新显示
            this.updateRankingDisplay();
            
            console.log('Rankings updated at ' + new Date().toLocaleString());
        }, 500);
    }
}

// 当文档加载完成后初始化排行榜管理器
document.addEventListener('DOMContentLoaded', () => {
    const rankingManager = new RankingManager();
});

export default RankingManager; 