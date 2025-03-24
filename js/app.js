import { TranslationManager } from './translations.js';
import { RankingManager } from './ranking.js';

class App {
    constructor() {
        this.translationManager = new TranslationManager();
        this.rankingManager = new RankingManager();
    }

    initialize() {
        // 初始化翻译
        this.translationManager.updateContent();
        this.translationManager.updateLanguageSelector(this.translationManager.currentLang);
        
        // 初始化排行榜
        this.rankingManager.initialize();
        
        // 初始化搜索
        this.initializeSearch();
        
        // 初始化语言切换
        this.initializeLanguageSwitch();
    }

    initializeSearch() {
        const searchInput = document.querySelector('.search-input');
        searchInput.addEventListener('input', (e) => {
            this.searchTools(e.target.value);
        });
    }

    searchTools(query) {
        const cards = document.querySelectorAll('.tool-card');
        query = query.toLowerCase();
        
        cards.forEach(card => {
            const name = card.querySelector('.tool-name').textContent.toLowerCase();
            const desc = card.querySelector('.tool-desc').textContent.toLowerCase();
            
            if (name.includes(query) || desc.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    initializeLanguageSwitch() {
        const langSwitch = document.querySelector('.lang-switch');
        const langCurrent = document.querySelector('.lang-current');
        const langOptions = document.querySelectorAll('.lang-option');

        // 切换语言选项显示
        langCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitch.classList.toggle('active');
        });

        // 选择语言
        langOptions.forEach(option => {
            const lang = option.getAttribute('data-lang');
            option.addEventListener('click', () => {
                this.translationManager.switchLanguage(lang);
                langSwitch.classList.remove('active');
            });
        });

        // 点击外部关闭语言选项
        document.addEventListener('click', () => {
            langSwitch.classList.remove('active');
        });
    }
}

// 当DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.initialize();
}); 