// 导入translations对象
import translations from './translations.js';

class LanguageManager {
    constructor() {
        this.currentLang = this.getUserLanguage();
        this.init();
    }

    // 初始化语言管理器
    init() {
        // 设置初始语言
        this.updateContent();
        
        // 添加语言切换器的事件监听
        document.querySelector('.lang-current').addEventListener('click', () => {
            document.querySelector('.lang-switch').classList.toggle('active');
        });

        // 为每个语言选项添加点击事件
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = option.getAttribute('data-lang');
                this.switchLanguage(lang);
                document.querySelector('.lang-switch').classList.remove('active');
                e.stopPropagation();
            });
        });

        // 点击页面其他地方关闭语言选择器
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.lang-switch')) {
                document.querySelector('.lang-switch').classList.remove('active');
            }
        });
    }

    // 获取用户语言偏好
    getUserLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        return 'en'; // 默认使用英文
    }

    // 切换语言
    switchLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Unsupported language: ${lang}`);
            return;
        }

        // 更新当前语言
        this.currentLang = lang;
        
        // 保存用户语言偏好
        localStorage.setItem('preferredLanguage', lang);
        
        // 添加过渡效果
        document.body.style.opacity = '0.5';
        
        // 更新显示的当前语言
        const currentLangEl = document.querySelector('.lang-current');
        const flagSrc = currentLangEl.querySelector('img').src;
        const flagName = flagSrc.split('/').pop();
        currentLangEl.querySelector('img').src = `https://flagcdn.com/48x36/${this.getLangCode(lang)}.png`;
        currentLangEl.querySelector('span').textContent = this.getLangName(lang);
        
        // 标记活动的语言选项
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
        
        // 更新内容
        setTimeout(() => {
            this.updateContent();
            document.body.style.opacity = '1';
        }, 300);
    }

    // 获取语言代码
    getLangCode(lang) {
        const codes = {
            en: 'us',
            zh: 'cn',
            es: 'es',
            ar: 'sa',
            fr: 'fr'
        };
        return codes[lang] || 'us';
    }

    // 获取语言名称
    getLangName(lang) {
        const names = {
            en: 'English',
            zh: '中文',
            es: 'Español',
            ar: 'العربية',
            fr: 'Français'
        };
        return names[lang] || 'English';
    }

    // 更新页面内容
    updateContent() {
        // 设置文档方向
        document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // 获取当前语言的翻译
        const lang = translations[this.currentLang] || translations.en;
        
        // 更新基本内容
        document.title = lang.title;
        document.querySelector('h1').textContent = lang.title;
        document.querySelector('header p').textContent = lang.subtitle;
        document.querySelector('.search-input').placeholder = lang.search;
        
        // 更新分类标题
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (key && lang.categories[key]) {
                element.textContent = lang.categories[key];
            }
        });

        // 更新工具卡片
        document.querySelectorAll('[data-tool]').forEach(card => {
            const toolKey = card.getAttribute('data-tool');
            if (toolKey && lang.tools[toolKey]) {
                const tool = lang.tools[toolKey];
                const nameEl = card.querySelector('.tool-name');
                const descEl = card.querySelector('.tool-desc');
                
                if (nameEl) nameEl.textContent = tool.name;
                if (descEl) descEl.textContent = tool.desc;
            }
            
            // 更新访问网站链接文本
            const link = card.querySelector('[data-link="visit"]');
            if (link) {
                link.textContent = lang.visit;
                // 根据语言添加箭头
                link.textContent += this.currentLang === 'ar' ? ' ←' : ' →';
            }
        });

        // 更新新闻卡片
        document.querySelectorAll('[data-news]').forEach(card => {
            const newsKey = card.getAttribute('data-news');
            if (newsKey && lang.news && lang.news[newsKey]) {
                const news = lang.news[newsKey];
                const titleEl = card.querySelector('.news-title');
                const descEl = card.querySelector('.news-desc');
                
                if (titleEl) titleEl.textContent = news.title;
                if (descEl) descEl.textContent = news.desc;
                
                // 更新来源文本
                const sourceEl = card.querySelector('.news-source');
                if (sourceEl) {
                    const sourceName = sourceEl.textContent.split(':')[1].trim();
                    sourceEl.textContent = `${lang.news.source}: ${sourceName}`;
                }
                
                // 更新阅读更多文本
                const readMoreEl = card.querySelector('.news-read-more');
                if (readMoreEl) {
                    readMoreEl.textContent = lang.news.readMore;
                }
            }
        });

        // 更新排行榜
        const rankingTitle = document.querySelector('.ranking-title');
        const lastUpdate = document.querySelector('.ranking-update-time');
        if (rankingTitle && lastUpdate && lang.ranking) {
            rankingTitle.textContent = lang.ranking.title;
            const date = new Date().toLocaleString(this.currentLang);
            lastUpdate.innerHTML = `${lang.ranking.lastUpdate}: <span id="lastUpdateTime">${date}</span>`;
        }

        // 更新排行榜标签
        document.querySelectorAll('[data-source]').forEach(tab => {
            const source = tab.getAttribute('data-source');
            if (source && lang.ranking.sources && lang.ranking.sources[source]) {
                tab.textContent = lang.ranking.sources[source];
            }
        });

        // 更新RTL相关样式
        this.updateRTLStyles();
    }

    // 更新RTL相关样式
    updateRTLStyles() {
        if (this.currentLang === 'ar') {
            document.body.classList.add('rtl');
            // 调整RTL特定样式
            document.querySelectorAll('.ranking-item').forEach(item => {
                item.style.flexDirection = 'row-reverse';
            });
            document.querySelectorAll('.tool-card').forEach(card => {
                card.style.textAlign = 'right';
            });
            document.querySelectorAll('.news-card').forEach(card => {
                card.style.textAlign = 'right';
            });
        } else {
            document.body.classList.remove('rtl');
            // 重置RTL样式
            document.querySelectorAll('.ranking-item').forEach(item => {
                item.style.flexDirection = 'row';
            });
            document.querySelectorAll('.tool-card').forEach(card => {
                card.style.textAlign = 'left';
            });
            document.querySelectorAll('.news-card').forEach(card => {
                card.style.textAlign = 'left';
            });
        }
    }
}

export default LanguageManager; 