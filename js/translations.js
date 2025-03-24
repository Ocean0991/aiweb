import { en } from '../translations/en.js';
import { zh } from '../translations/zh.js';

export const translations = {
    en,
    zh,
    // 其他语言将在这里导入
};

export class TranslationManager {
    constructor() {
        this.currentLang = this.getUserLanguage();
    }

    getUserLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        return 'en';  // 默认使用英文
    }

    switchLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language ${lang} not supported`);
            return;
        }
        
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        document.body.style.opacity = '0.5';
        this.updateContent();
        this.updateLanguageSelector(lang);
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 300);
    }

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
        this.updateCategories(lang);
        
        // 更新工具卡片
        this.updateToolCards(lang);
        
        // 更新新闻卡片
        this.updateNewsCards(lang);
        
        // 更新排行榜
        this.updateRankings(lang);
        
        // 更新RTL相关样式
        this.updateRTLStyles();
    }

    updateCategories(lang) {
        document.querySelectorAll('.category-title').forEach(title => {
            const key = title.getAttribute('data-key');
            if (key && lang.categories[key]) {
                title.textContent = lang.categories[key];
            }
        });
    }

    updateToolCards(lang) {
        document.querySelectorAll('.tool-card').forEach(card => {
            const toolKey = card.getAttribute('data-tool');
            if (toolKey && lang.tools[toolKey]) {
                const tool = lang.tools[toolKey];
                card.querySelector('.tool-name').textContent = tool.name;
                card.querySelector('.tool-desc').textContent = tool.desc;
                
                // 更新访问网站链接文本
                const link = card.querySelector('.tool-link');
                if (link) {
                    link.textContent = lang.visit;
                    // 根据语言添加箭头
                    link.textContent += this.currentLang === 'ar' ? ' ←' : ' →';
                }
            }
        });
    }

    updateNewsCards(lang) {
        document.querySelectorAll('.news-card').forEach(card => {
            const newsKey = card.getAttribute('data-news');
            if (newsKey && lang.news && lang.news[newsKey]) {
                const news = lang.news[newsKey];
                card.querySelector('.news-title').textContent = news.title;
                card.querySelector('.news-desc').textContent = news.desc;
                const source = card.querySelector('.news-source');
                if (source) {
                    const sourceText = source.textContent.split('：')[1];
                    source.textContent = `${lang.news.source}: ${sourceText}`;
                }
            }
        });
    }

    updateRankings(lang) {
        const rankingTitle = document.querySelector('.ranking-title');
        const lastUpdate = document.querySelector('.ranking-update-time');
        if (rankingTitle && lastUpdate && lang.ranking) {
            rankingTitle.textContent = lang.ranking.title;
            lastUpdate.innerHTML = `${lang.ranking.lastUpdate}: <span id="lastUpdateTime">${new Date().toLocaleString(this.currentLang)}</span>`;
        }

        // 更新排行榜标签
        document.querySelectorAll('.ranking-tab').forEach(tab => {
            const source = tab.getAttribute('data-source');
            if (source && lang.ranking.sources && lang.ranking.sources[source]) {
                tab.textContent = lang.ranking.sources[source];
            }
        });
    }

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
        } else {
            document.body.classList.remove('rtl');
            // 重置RTL样式
            document.querySelectorAll('.ranking-item').forEach(item => {
                item.style.flexDirection = 'row';
            });
            document.querySelectorAll('.tool-card').forEach(card => {
                card.style.textAlign = 'left';
            });
        }
    }

    updateLanguageSelector(lang) {
        const langOptions = document.querySelectorAll('.lang-option');
        const option = Array.from(langOptions).find(opt => opt.getAttribute('data-lang') === lang);
        if (option) {
            const flag = option.querySelector('img').src;
            const text = option.querySelector('span').textContent;
            const currentLangDisplay = document.querySelector('.lang-current');
            currentLangDisplay.innerHTML = `
                <img src="${flag}" alt="${text}" class="lang-flag">
                <span>${text}</span>
            `;
            
            // 更新选中状态
            langOptions.forEach(opt => {
                opt.classList.remove('active');
                if (opt.getAttribute('data-lang') === lang) {
                    opt.classList.add('active');
                }
            });
        }
    }
} 