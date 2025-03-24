// 所有语言的翻译内容
const translations = {
    en: {
        title: 'AI Tools Navigator',
        subtitle: 'Global AI Tools Collection | Updated March 2024',
        search: 'Search AI tools...',
        categories: {
            text: 'Text & Conversation',
            image: 'Image & Design',
            code: 'Programming & Development',
            media: 'Audio & Video',
            productivity: 'Productivity & Creation',
            other: 'Other Tools',
            ranking: 'AI Rankings & Evaluations',
            news: 'AI News & Updates',
            'realtime-ranking': 'Real-time AI Rankings'
        },
        visit: 'Visit Website',
        tools: {
            chatgpt: {
                name: 'ChatGPT',
                desc: 'Conversational AI model by OpenAI'
            },
            claude: {
                name: 'Claude',
                desc: 'Multimodal AI assistant by Anthropic'
            },
            gemini: {
                name: 'Gemini Advanced',
                desc: 'Google\'s latest multimodal AI model'
            },
            perplexity: {
                name: 'Perplexity AI',
                desc: 'Real-time search-enhanced AI Q&A system'
            },
            chatpdf: {
                name: 'ChatPDF',
                desc: 'Intelligent conversation with PDF documents'
            },
            poe: {
                name: 'Poe',
                desc: 'Multiple AI models integration platform'
            },
            guiji: {
                name: 'Silicon Language AI',
                desc: 'Chinese AI conversation assistant'
            },
            chatglm: {
                name: 'ChatGLM',
                desc: 'Chinese large language model platform'
            },
            midjourney: {
                name: 'MidJourney',
                desc: 'AI art and image generation tool'
            },
            'dall-e-3': {
                name: 'DALL·E 3',
                desc: 'Latest image generation model by OpenAI'
            },
            'adobe-firefly': {
                name: 'Adobe Firefly',
                desc: 'Adobe\'s creative AI tools suite'
            },
            'remove-bg': {
                name: 'Remove.bg',
                desc: 'Smart background removal tool'
            },
            'playground-ai': {
                name: 'Playground AI',
                desc: 'Fast high-quality image generation'
            },
            dreamstudio: {
                name: 'DreamStudio',
                desc: 'Official Stability AI image platform'
            },
            'dreamlike-art': {
                name: 'Dreamlike.art',
                desc: 'Artistic style AI image generation'
            },
            'smart-removal': {
                name: 'Smart Removal',
                desc: 'Online watermark and subtitle removal'
            },
            'github-copilot': {
                name: 'GitHub Copilot',
                desc: 'AI-powered code completion'
            },
            'microsoft-copilot': {
                name: 'Microsoft Copilot',
                desc: 'Microsoft\'s versatile AI assistant'
            },
            'suno-ai': {
                name: 'Suno AI',
                desc: 'AI music creation platform'
            },
            elevenlabs: {
                name: 'ElevenLabs',
                desc: 'AI voice cloning and synthesis'
            },
            'runway-ml': {
                name: 'Runway ML',
                desc: 'AI video editing tools'
            },
            descript: {
                name: 'Descript',
                desc: 'Smart audio & video editing platform'
            },
            'tongyi-tingwu': {
                name: 'Tongyi Tingwu',
                desc: 'Alibaba\'s intelligent voice processing'
            },
            'd-id': {
                name: 'D-ID',
                desc: 'AI digital human video creation'
            },
            heygen: {
                name: 'HeyGen',
                desc: 'AI virtual presenter videos'
            },
            'notion-ai': {
                name: 'Notion AI',
                desc: 'Intelligent document collaboration'
            },
            gamma: {
                name: 'Gamma',
                desc: 'AI-powered presentation generation'
            },
            'canva-magic-studio': {
                name: 'Canva Magic Studio',
                desc: 'AI design automation tools'
            },
            grammarly: {
                name: 'Grammarly',
                desc: 'AI writing assistant & grammar checker'
            },
            typewriteress: {
                name: 'Typewriteress',
                desc: 'Chinese AI writing assistant'
            },
            'weekly-report': {
                name: 'Weekly Report Generator',
                desc: 'Smart work report generation tool'
            },
            postme: {
                name: 'PostMe',
                desc: 'Chinese AI content creation platform'
            },
            fliki: {
                name: 'Fliki',
                desc: 'Text to video conversion tool'
            },
            synthesia: {
                name: 'Synthesia',
                desc: 'AI digital human video platform'
            },
            aishort: {
                name: 'AI Prompt Sheet',
                desc: 'Collection of AI prompt commands'
            },
            zhongping: {
                name: 'Zhongping Data',
                desc: 'Global AI website ranking with 2100+ top AI tools'
            },
            aigcrank: {
                name: 'AIGCRank',
                desc: 'Comprehensive AI product comparison platform'
            },
            'chatbot-arena': {
                name: 'Chatbot Arena',
                desc: 'AI model evaluation platform by UC Berkeley'
            },
            'artificial-analysis': {
                name: 'Artificial Analysis',
                desc: 'Independent AI model evaluation with 9 core metrics'
            },
            'seal-llm': {
                name: 'SEAL LLM Leaderboards',
                desc: 'AI model benchmarking by Scale Lab'
            },
            superclue: {
                name: 'SuperCLUE',
                desc: 'Leading Chinese language AI benchmark platform'
            },
            lambdatest: {
                name: 'LambdaTest AI Rankings',
                desc: 'AI tools ranking for software development'
            },
            impact50: {
                name: 'InsideBigData IMPACT 50',
                desc: 'Quarterly AI enterprise ranking by MIT and Harvard'
            }
        },
        ranking: {
            title: 'AI Model Performance Rankings',
            lastUpdate: 'Last Update',
            metrics: {
                accuracy: 'Accuracy',
                speed: 'Response Time',
                quality: 'Quality',
                users: 'Active Users',
                rating: 'User Rating'
            },
            sources: {
                lmsys: 'Chatbot Arena',
                aigcrank: 'AIGCRank',
                zhongping: 'Zhongping Data'
            }
        },
        news: {
            source: 'Source',
            readMore: 'Read More',
            sora: {
                title: 'OpenAI Releases Sora Technical Report, Revealing AI Video Generation Technology Details',
                desc: 'OpenAI details how Sora works, including how it understands relationships between time, space, and motion, and how it generates coherent long videos.'
            },
            gemini: {
                title: 'Google Releases Gemini 1.5 Pro: Supporting 1 Million Token Context Window',
                desc: 'Gemini 1.5 Pro can process inputs up to 1 million tokens, equivalent to about 3.5 million words, significantly improving AI model\'s long text processing capabilities.'
            },
            claude: {
                title: 'Anthropic Launches Claude 3 Series Models, Outperforming GPT-4',
                desc: 'Anthropic has released Claude 3 Opus, Sonnet, and Haiku versions, surpassing GPT-4\'s performance in multiple benchmark tests.'
            },
            emu: {
                title: 'Meta Releases Next-Generation Image Generation Model Emu Video',
                desc: 'Meta\'s Emu Video model can generate high-quality videos from text or images, supporting various video styles and lengths.'
            }
        }
    },
    zh: {
        title: 'AI工具导航',
        subtitle: '全球AI工具集合 | 2024年3月更新',
        search: '搜索AI工具...',
        categories: {
            text: '文本与对话',
            image: '图像与设计',
            code: '编程与开发',
            media: '音频与视频',
            productivity: '生产力与创作',
            other: '其他工具',
            ranking: 'AI模型评测平台',
            news: 'AI新闻动态',
            'realtime-ranking': 'AI模型性能排行'
        },
        visit: '访问网站',
        tools: {
            chatgpt: {
                name: 'ChatGPT',
                desc: 'OpenAI开发的对话式AI模型'
            },
            claude: {
                name: 'Claude',
                desc: 'Anthropic的多模态AI助手'
            },
            gemini: {
                name: 'Gemini Advanced',
                desc: '谷歌最新多模态AI模型'
            },
            perplexity: {
                name: 'Perplexity AI',
                desc: '实时搜索增强的AI问答系统'
            },
            chatpdf: {
                name: 'ChatPDF',
                desc: '与PDF文档智能对话工具'
            },
            poe: {
                name: 'Poe',
                desc: '多种AI模型集成平台'
            },
            guiji: {
                name: '硅语AI',
                desc: '中文AI对话助手'
            },
            chatglm: {
                name: 'ChatGLM',
                desc: '中文大语言模型平台'
            },
            midjourney: {
                name: 'MidJourney',
                desc: 'AI艺术与图像生成工具'
            },
            'dall-e-3': {
                name: 'DALL·E 3',
                desc: 'OpenAI最新图像生成模型'
            },
            'adobe-firefly': {
                name: 'Adobe Firefly',
                desc: 'Adobe创意AI工具套件'
            },
            'remove-bg': {
                name: 'Remove.bg',
                desc: '智能背景去除工具'
            },
            'playground-ai': {
                name: 'Playground AI',
                desc: '快速高质量图像生成'
            },
            dreamstudio: {
                name: 'DreamStudio',
                desc: 'Stability AI官方图像平台'
            },
            'dreamlike-art': {
                name: 'Dreamlike.art',
                desc: '艺术风格AI图像生成'
            },
            'smart-removal': {
                name: '智能抹除',
                desc: '在线去水印去字幕工具'
            },
            'github-copilot': {
                name: 'GitHub Copilot',
                desc: 'AI驱动的代码智能补全'
            },
            'microsoft-copilot': {
                name: 'Microsoft Copilot',
                desc: '微软全能AI助手'
            },
            'suno-ai': {
                name: 'Suno AI',
                desc: 'AI音乐创作平台'
            },
            elevenlabs: {
                name: 'ElevenLabs',
                desc: 'AI语音克隆与合成'
            },
            'runway-ml': {
                name: 'Runway ML',
                desc: 'AI视频编辑工具'
            },
            descript: {
                name: 'Descript',
                desc: '智能音视频编辑平台'
            },
            'tongyi-tingwu': {
                name: '通义听悟',
                desc: '阿里智能语音处理平台'
            },
            'd-id': {
                name: 'D-ID',
                desc: 'AI数字人视频制作'
            },
            heygen: {
                name: 'HeyGen',
                desc: 'AI虚拟发言人视频'
            },
            'notion-ai': {
                name: 'Notion AI',
                desc: '智能文档协作平台'
            },
            gamma: {
                name: 'Gamma',
                desc: 'AI驱动的演示文稿生成'
            },
            'canva-magic-studio': {
                name: 'Canva Magic Studio',
                desc: 'AI设计自动化工具'
            },
            grammarly: {
                name: 'Grammarly',
                desc: 'AI写作助手与语法检查'
            },
            typewriteress: {
                name: '打字姬',
                desc: '中文AI写作助手'
            },
            'weekly-report': {
                name: '周报生成器',
                desc: '智能工作周报生成工具'
            },
            postme: {
                name: 'PostMe',
                desc: '中文AI内容创作平台'
            },
            fliki: {
                name: 'Fliki',
                desc: '图文转视频工具'
            },
            synthesia: {
                name: 'Synthesia',
                desc: 'AI数字人视频生成平台'
            },
            aishort: {
                name: 'AI快捷指令表',
                desc: 'AI提示词指令集合'
            },
            zhongping: {
                name: '中评数据',
                desc: '全球AI网站排名，收录2100+顶级AI工具'
            },
            aigcrank: {
                name: 'AIGCRank',
                desc: '全面的AI产品对比平台'
            },
            'chatbot-arena': {
                name: 'Chatbot Arena',
                desc: '加州大学伯克利分校的AI模型评测平台'
            },
            'artificial-analysis': {
                name: 'Artificial Analysis',
                desc: '独立AI模型评估，包含9项核心指标'
            },
            'seal-llm': {
                name: 'SEAL LLM排行榜',
                desc: 'Scale Lab开发的AI模型基准测试'
            },
            superclue: {
                name: 'SuperCLUE',
                desc: '领先的中文语言AI基准平台'
            },
            lambdatest: {
                name: 'LambdaTest AI排名',
                desc: '软件开发AI工具排名'
            },
            impact50: {
                name: 'InsideBigData IMPACT 50',
                desc: 'MIT和哈佛的季度AI企业排名'
            }
        },
        ranking: {
            title: 'AI模型性能排行',
            lastUpdate: '最后更新',
            metrics: {
                accuracy: '准确性',
                speed: '响应速度',
                quality: '质量',
                users: '活跃用户',
                rating: '用户评分'
            },
            sources: {
                lmsys: 'Chatbot Arena',
                aigcrank: 'AIGCRank',
                zhongping: '中评数据'
            }
        },
        news: {
            source: '来源',
            readMore: '阅读更多',
            sora: {
                title: 'OpenAI发布Sora技术报告，揭示AI视频生成技术细节',
                desc: 'OpenAI详细介绍了Sora的工作原理，包括它如何理解时间、空间和运动之间的关系，以及如何生成连贯的长视频。'
            },
            gemini: {
                title: '谷歌发布Gemini 1.5 Pro：支持100万token上下文窗口',
                desc: 'Gemini 1.5 Pro可处理高达100万token的输入，相当于约350万字，大幅提升AI模型长文本处理能力。'
            },
            claude: {
                title: 'Anthropic推出Claude 3系列模型，性能超越GPT-4',
                desc: 'Anthropic发布了Claude 3 Opus、Sonnet和Haiku三个版本，在多项基准测试中超越GPT-4的表现。'
            },
            emu: {
                title: 'Meta发布新一代图像生成模型Emu Video',
                desc: 'Meta的Emu Video模型可以从文本或图像生成高质量视频，支持各种视频风格和长度。'
            }
        }
    },
    es: {
        title: 'Navegador de Herramientas IA',
        subtitle: 'Colección Global de Herramientas IA | Actualizado Marzo 2024',
        search: 'Buscar herramientas IA...',
        categories: {
            text: 'Texto y Conversación',
            image: 'Imagen y Diseño',
            code: 'Programación y Desarrollo',
            media: 'Audio y Video',
            productivity: 'Productividad y Creación',
            other: 'Otras Herramientas',
            ranking: 'Evaluaciones y Rankings de IA',
            news: 'Noticias y Actualizaciones de IA',
            'realtime-ranking': 'Rankings de IA en Tiempo Real'
        },
        visit: 'Visitar Sitio',
        tools: {
            // Español translations for tools
            // ... Add all tool translations
        },
        ranking: {
            title: 'Rankings de Rendimiento de Modelos IA',
            lastUpdate: 'Última Actualización',
            metrics: {
                accuracy: 'Precisión',
                speed: 'Tiempo de Respuesta',
                quality: 'Calidad',
                users: 'Usuarios Activos',
                rating: 'Calificación de Usuarios'
            },
            sources: {
                lmsys: 'Chatbot Arena',
                aigcrank: 'AIGCRank',
                zhongping: 'Zhongping Data'
            }
        },
        news: {
            source: 'Fuente',
            readMore: 'Leer Más',
            // Add news translations
        }
    },
    ar: {
        title: 'مستكشف أدوات الذكاء الاصطناعي',
        subtitle: 'مجموعة أدوات الذكاء الاصطناعي العالمية | تحديث مارس 2024',
        search: 'البحث عن أدوات الذكاء الاصطناعي...',
        categories: {
            text: 'النص والمحادثة',
            image: 'الصور والتصميم',
            code: 'البرمجة والتطوير',
            media: 'الصوت والفيديو',
            productivity: 'الإنتاجية والإبداع',
            other: 'أدوات أخرى',
            ranking: 'تقييمات وتصنيفات الذكاء الاصطناعي',
            news: 'أخبار وتحديثات الذكاء الاصطناعي',
            'realtime-ranking': 'تصنيفات الذكاء الاصطناعي في الوقت الفعلي'
        },
        visit: 'زيارة الموقع',
        tools: {
            // Arabic translations for tools
            // ... Add all tool translations
        },
        ranking: {
            title: 'تصنيفات أداء نماذج الذكاء الاصطناعي',
            lastUpdate: 'آخر تحديث',
            metrics: {
                accuracy: 'الدقة',
                speed: 'سرعة الاستجابة',
                quality: 'الجودة',
                users: 'المستخدمين النشطين',
                rating: 'تقييم المستخدمين'
            },
            sources: {
                lmsys: 'Chatbot Arena',
                aigcrank: 'AIGCRank',
                zhongping: 'Zhongping Data'
            }
        },
        news: {
            source: 'المصدر',
            readMore: 'قراءة المزيد',
            // Add news translations
        }
    },
    fr: {
        title: 'Navigateur d\'Outils IA',
        subtitle: 'Collection Mondiale d\'Outils IA | Mise à jour Mars 2024',
        search: 'Rechercher des outils IA...',
        categories: {
            text: 'Texte et Conversation',
            image: 'Image et Design',
            code: 'Programmation et Développement',
            media: 'Audio et Vidéo',
            productivity: 'Productivité et Création',
            other: 'Autres Outils',
            ranking: 'Évaluations et Classements IA',
            news: 'Actualités et Mises à jour IA',
            'realtime-ranking': 'Classements IA en Temps Réel'
        },
        visit: 'Visiter le Site',
        tools: {
            // French translations for tools
            // ... Add all tool translations
        },
        ranking: {
            title: 'Classements de Performance des Modèles IA',
            lastUpdate: 'Dernière Mise à jour',
            metrics: {
                accuracy: 'Précision',
                speed: 'Temps de Réponse',
                quality: 'Qualité',
                users: 'Utilisateurs Actifs',
                rating: 'Évaluation des Utilisateurs'
            },
            sources: {
                lmsys: 'Chatbot Arena',
                aigcrank: 'AIGCRank',
                zhongping: 'Zhongping Data'
            }
        },
        news: {
            source: 'Source',
            readMore: 'Lire Plus',
            // Add news translations
        }
    }
};

// 导出translations对象
export default translations; 