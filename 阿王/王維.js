// --- 資料設定 (Data) ---

const POSTS = [
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop", 
        imageAlt: "明月高掛的夜晚，月色灑落山谷",
        likes: 1203,
        caption: "去皇甫岳的雲溪別墅住了一晚，這裡真的太安靜了，連桂花掉下來的聲音都聽得見。月亮出來時把山鳥嚇了一跳，真是不好意思。😅 🕊️",
        tags: ["#佛系", "#大自然", "#雲溪", "#鳥鳴澗", "#晚年唯好靜"],
        poemTitle: "《鳥鳴澗》",
        poemContent: "人閒桂花落，夜靜春山空。\n月出驚山鳥，時鳴春澗中。",
        translation: "【譯文】\n在寂靜沒有人聲的環境裡，桂花輕輕地飄落。山谷夜晚寧靜，春天的山林顯得空無一人。\n月亮升起時，明亮的月光驚醒了棲息的山鳥，牠們在春天的溪澗裡不時地鳴叫。",
        annotations: [
            { word: "人閒", meaning: "指人的心情閒適、安靜。" },
            { word: "空", meaning: "空曠、空寂，形容山中寧靜無人。" },
            { word: "時", meaning: "時而、不時。" },
            { word: "澗", meaning: "夾在兩山之間的溪溝。" }
        ],
        date: "2 天前",
        comments: [
            { user: "dufu_official", text: "摩詰兄這意境太美了！已按讚！❤️", isVerified: true },
            { user: "libai_wine", text: "只有花落？沒有酒嗎？🍷", isVerified: true },
            { user: "elon_musk", text: "這座山賣嗎？我想在這裡蓋發射基地。🚀", isVerified: true },
            { user: "realtor_zhang", text: "雲溪別墅稀有釋出，意者私訊！🏡", isVerified: false },
            { user: "皇甫岳", text: "不要亂賣我的房子啦！🏡", isVerified: true }
        ]
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "深林中的光影",
        likes: 3400,
        caption: "森林裡明明沒人，卻好像聽到有人在說話？原來是光線折射進青苔的聲音（誤）。其實是返景入深林啦。🌲☀️",
        tags: ["#鹿柴", "#光影", "#空山", "#輞川集"],
        poemTitle: "《鹿柴》",
        poemContent: "空山不見人，但聞人語響。\n返景入深林，復照青苔上。",
        translation: "【譯文】\n在空曠的山林中看不見人影，只聽得見喧譁的人語聲響。\n夕陽的餘暉折射進幽深的樹林，又照映在林地蒼翠的青苔上。",
        annotations: [
            { word: "鹿柴", meaning: "音「路寨」，養鹿的柵欄，此地為地名。" },
            { word: "但", meaning: "只。" },
            { word: "聞", meaning: "聽見。" },
            { word: "返景", meaning: "夕陽返照的光影。「景」通「影」。" }
        ],
        date: "5 天前",
        comments: [
            { user: "peidi_real", text: "這不是我們上次迷路的地方嗎？", isVerified: true },
            { user: "tao_yuanming", text: "這裡不錯，適合種菊花。🌼", isVerified: true },
            { user: "jay_chou", text: "哎唷，這光影不錯喔，適合拍MV。🎸", isVerified: true }
        ]
    },
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1508020963102-c6c723be5764?q=80&w=1000&auto=format&fit=crop", 
        imageAlt: "紅豆特寫",
        likes: 5600,
        caption: "路邊看到紅豆長得很好，李龜年兄，這讓我想起你了。南國的春天應該更美吧？大家記得多採一點，這東西最相思了。🔴",
        tags: ["#相思", "#紅豆", "#友情", "#送別"],
        poemTitle: "《相思》",
        poemContent: "紅豆生南國，春來發幾枝。\n願君多采擷，此物最相思。",
        translation: "【譯文】\n紅豆生長在南方的國度，春天來了不知會長出多少新枝？\n希望你多採摘一些回來，因為它是最能寄託相思之情的東西。",
        annotations: [
            { word: "紅豆", meaning: "又稱相思子，象徵相思之情。" },
            { word: "發幾枝", meaning: "長出多少枝條。" },
            { word: "采擷", meaning: "採摘、收集。" },
            { word: "君", meaning: "您，指朋友李龜年。" }
        ],
        date: "1 週前",
        comments: [
            { user: "li_guinian", text: "這首歌我唱了一萬遍了，版權費什麼時候結一下？🎤", isVerified: true },
            { user: "lin_daiyu", text: "滴不盡相思血淚拋紅豆...😭", isVerified: false },
            { user: "shopee_bot", text: "南國紅豆現正特價中，買一送一，連結在主頁！🛒", isVerified: false }
        ]
    }
];

const CHATS = [
    {
        id: 'dufu',
        name: '杜甫 Du Fu',
        handle: 'dufu_official',
        avatarColor: 'bg-blue-700',
        lastMessage: '摩詰兄，您的新詩太有意境了！',
        isOnline: true,
        messages: [
            { sender: 'them', text: '摩詰兄，別來無恙？' },
            { sender: 'me', text: '子美兄安好，最近在輞川修身養性。' },
            { sender: 'them', text: '您的《鳥鳴澗》讀來令人心曠神怡，真想去拜訪。' },
            { sender: 'them', text: '摩詰兄，您的新詩太有意境了！' },
        ]
    },
    {
        id: 'peidi',
        name: '裴迪 Pei Di',
        handle: 'peidi_real',
        avatarColor: 'bg-indigo-600',
        lastMessage: '下次什麼時候再去遊山？',
        isOnline: false,
        messages: [
            { sender: 'me', text: '酌酒與君君自寬，人情翻覆似波瀾。' },
            { sender: 'them', text: '大哥，別這麼悲觀嘛，下次什麼時候再去遊山？' }
        ]
    },
    {
        id: 'libai',
        name: '李白 Li Bai',
        handle: 'libai_wine',
        avatarColor: 'bg-purple-600',
        lastMessage: '（已傳送一張飲酒的照片）',
        isOnline: false,
        messages: [] 
    }
];

const HIGHLIGHTS = [
    { 
        id: 0, 
        title: "剛拍的", 
        coverColor: "bg-red-400", 
        stories: [
            {
                type: 'selfie',
                bgClass: 'bg-emerald-700',
                time: '剛剛',
                mainText: '大家好我是王維，\n我剛辦ig可以追蹤我喔！👋',
            }
        ]
    },
    { 
        id: 1, 
        title: "雲溪", 
        coverColor: "bg-blue-300", 
        stories: [{ type: 'custom_yunxi', time: '4小時' }]
    },
    { 
        id: 2, 
        title: "輞川生活", 
        coverColor: "bg-green-300",
        stories: [
            { type: 'text', bgClass: 'bg-emerald-900', emoji: '🎋', mainText: '獨坐幽篁裡\n彈琴復長嘯', subText: '竹林裡的獨奏會\n雖然沒人聽，但有明月相照 🎹', time: '2週前' },
            { type: 'text', bgClass: 'bg-stone-800', emoji: '🚶', mainText: '行到水窮處\n坐看雲起時', subText: '散步不知不覺走到水源頭\n那就坐下來發呆看雲吧 ☁️', time: '2週前' }
        ]
    },
    { 
        id: 3, 
        title: "送別", 
        coverColor: "bg-yellow-300",
        stories: [
            { type: 'text', bgClass: 'bg-amber-800', emoji: '🍶', mainText: '勸君更盡一杯酒\n西出陽關無故人', subText: '元二兄，這杯乾了！\n出了陽關就沒朋友了 (淚) 👋', time: '1個月前' }
        ]
    },
    { 
        id: 4, 
        title: "佛理", 
        coverColor: "bg-orange-300",
        stories: [
            { type: 'text', bgClass: 'bg-zinc-800', emoji: '📿', mainText: '晚年唯好靜\n萬事不關心', subText: '最近的狀態：\n不想社交，只想靜靜 🧘‍♂️', time: '3個月前' }
        ]
    }
];

// --- 狀態管理 (State Management) ---
const state = {
    view: 'home', // home, post_detail, dm_list, dm_chat, profile_locked, story
    currentPostId: null,
    currentChatId: null,
    currentHighlightId: null,
    storyIndex: 0,
    showTranslation: false,
    likedPosts: {}, // { 1: true, 2: false }
    postLikeCounts: {} // { 1: 1203, ... }
};

// 初始化按讚數
POSTS.forEach(p => state.postLikeCounts[p.id] = p.likes);

// --- 渲染函數 (Render Functions) ---

// 1. 初始化與主渲染
function render() {
    const app = document.getElementById('app');
    app.innerHTML = ''; // 清空畫面

    // 根據視圖狀態渲染不同頁面
    switch (state.view) {
        case 'home':
            app.innerHTML = renderHeader() + renderHomeContent() + renderBottomNav();
            break;
        case 'post_detail':
            app.innerHTML = renderSimpleHeader('貼文') + renderPostDetail() + renderBottomNav();
            break;
        case 'dm_list':
            app.innerHTML = renderDMHeader() + renderDMList() + renderBottomNav();
            break;
        case 'dm_chat':
            app.innerHTML = renderChatHeader() + renderChatMessages() + renderChatInput();
            break;
        case 'profile_locked':
            app.innerHTML = renderSimpleHeader(getChat(state.currentChatId)?.handle || '') + renderProfileLocked() + renderBottomNav();
            break;
        case 'story':
            app.innerHTML = renderStoryView();
            break;
    }

    // 重新載入 Lucide Icons
    lucide.createIcons();
    
    // 綁定事件監聽器
    bindEvents();
}

// 2. 組件 HTML 生成器

function renderHeader() {
    return `
    <div class="sticky top-0 z-30 bg-black/90 backdrop-blur-md flex justify-between items-center px-4 py-3 border-b border-gray-800">
        <h1 class="text-xl font-bold font-serif tracking-wide">WangWei_Poet <span class="text-red-500 text-xs align-top">●</span></h1>
        <div class="flex space-x-5">
            <i data-lucide="heart" class="w-6 h-6 hover:scale-105 transition-transform"></i>
            <div class="relative cursor-pointer" onclick="navigateTo('dm_list')">
                <i data-lucide="message-circle" class="w-6 h-6 hover:scale-105 transition-transform"></i>
                <div class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-black"></div>
            </div>
        </div>
    </div>`;
}

function renderSimpleHeader(title) {
    return `
    <div class="sticky top-0 z-30 bg-black flex items-center px-4 py-3 border-b border-gray-800">
        <i data-lucide="chevron-left" class="w-7 h-7 -ml-2 mr-2 cursor-pointer" onclick="goBack()"></i>
        <span class="font-bold text-sm">${title}</span>
    </div>`;
}

function renderHomeContent() {
    // 個人檔案
    let html = `
    <div class="pb-16 animate-fadeIn">
        <div class="px-4 py-4">
            <div class="flex items-center justify-between mb-4">
                <div class="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=WangWei" alt="Wang Wei" class="w-full h-full rounded-full border-2 border-black bg-gray-200">
                </div>
                <div class="flex-1 flex justify-around ml-4">
                    <div class="text-center"><div class="font-bold text-lg">400+</div><div class="text-xs text-gray-400">貼文</div></div>
                    <div class="text-center"><div class="font-bold text-lg">108K</div><div class="text-xs text-gray-400">粉絲</div></div>
                    <div class="text-center"><div class="font-bold text-lg">12</div><div class="text-xs text-gray-400">追蹤中</div></div>
                </div>
            </div>
            <div>
                <div class="font-bold">王維 Wang Wei</div>
                <div class="text-sm text-gray-200 whitespace-pre-wrap leading-tight mt-1">詩人 | 畫家<br/>晚年唯好靜，萬事不關心。🍃<br/>摩詰居士 | 輞川別業主理人<br/>佛系生活推廣大使</div>
            </div>
            <div class="flex mt-4 space-x-2">
                <button class="flex-1 bg-gray-800 py-1.5 rounded text-sm font-semibold hover:bg-gray-700">編輯個人檔案</button>
                <button class="flex-1 bg-gray-800 py-1.5 rounded text-sm font-semibold hover:bg-gray-700">分享個人檔案</button>
            </div>
        </div>
        
        <!-- 限時動態 -->
        <div class="flex space-x-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
            ${HIGHLIGHTS.map(h => `
                <div class="flex flex-col items-center space-y-1 cursor-pointer" onclick="openStory(${h.id})">
                    <div class="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                        <div class="w-full h-full rounded-full border-2 border-black ${h.coverColor} flex items-center justify-center">
                            <div class="w-full h-full rounded-full opacity-50 bg-white"></div>
                        </div>
                    </div>
                    <span class="text-xs text-white">${h.title}</span>
                </div>
            `).join('')}
        </div>

        <!-- 貼文九宮格 -->
        <div class="flex border-t border-gray-800 mt-2">
            <div class="flex-1 flex justify-center py-3 border-b-2 border-white"><i data-lucide="grid" class="w-6 h-6"></i></div>
            <div class="flex-1 flex justify-center py-3 text-gray-500"><i data-lucide="film" class="w-6 h-6"></i></div>
            <div class="flex-1 flex justify-center py-3 text-gray-500"><i data-lucide="user" class="w-6 h-6"></i></div>
        </div>
        <div class="grid grid-cols-3 gap-0.5">
            ${POSTS.map(post => `
                <div class="aspect-square bg-black relative cursor-pointer overflow-hidden group" onclick="openPost(${post.id})">
                    <div class="absolute inset-0 w-full h-full overflow-hidden">
                        <img src="${post.imageUrl}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div class="absolute inset-0 bg-black/40"></div>
                </div>
            `).join('')}
        </div>
    </div>`;
    return html;
}

function renderPostDetail() {
    const post = POSTS.find(p => p.id === state.currentPostId);
    if (!post) return '';
    const isLiked = state.likedPosts[post.id];
    const likes = state.postLikeCounts[post.id];

    let commentsHtml = post.comments.map((c, idx) => `
        <div class="flex items-start space-x-3 mb-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${idx % 2 === 0 ? 'bg-indigo-800' : 'bg-rose-800'}">${c.user[0]}</div>
            <div class="flex-1">
                <div class="flex items-center">
                    <span class="font-bold text-sm text-white mr-1">${c.user}</span>
                    ${c.isVerified ? '<div class="w-3 h-3 bg-blue-500 rounded-full border border-black flex items-center justify-center text-[8px] text-black">✓</div>' : ''}
                </div>
                <div class="text-sm text-gray-300 leading-tight mt-0.5">${c.text}</div>
            </div>
            <i data-lucide="heart" class="w-3 h-3 text-gray-500 cursor-pointer hover:text-red-500"></i>
        </div>
    `).join('');

    let annotationsHtml = post.annotations.map(n => `
        <li class="text-sm text-gray-400">
            <span class="text-yellow-500 font-serif font-bold mr-1">${n.word}</span>
            <span class="text-gray-500">：</span>
            ${n.meaning}
        </li>
    `).join('');

    return `
    <div class="pb-16 animate-slideInRight">
        <div class="flex flex-col border-b border-gray-800 pb-4 mb-4">
            <div class="flex items-center justify-between px-3 py-2">
                <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-700">
                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=WangWei" alt="avatar" class="w-full h-full bg-gray-300" />
                    </div>
                    <span class="font-semibold text-sm text-white">wangwei_poet</span>
                </div>
                <i data-lucide="more-horizontal" class="text-white w-5 h-5"></i>
            </div>
            <div class="w-full aspect-[4/5] bg-black relative flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 w-full h-full overflow-hidden">
                    <img src="${post.imageUrl}" class="w-full h-full object-cover opacity-80 animate-gentle-bounce scale-110" />
                </div>
                <div class="absolute inset-0 bg-black/40"></div>
                <div class="text-center p-8 relative z-10">
                    <p class="text-gray-100 font-serif italic tracking-widest text-lg drop-shadow-lg writing-vertical-rl mx-auto h-48 border-r border-white/30 pr-4">${post.imageAlt}</p>
                </div>
            </div>
            <div class="px-3 pt-3 flex justify-between items-center">
                <div class="flex space-x-4">
                    <i data-lucide="heart" class="w-6 h-6 cursor-pointer transition-transform active:scale-90 ${isLiked ? 'fill-red-600 text-red-600' : 'text-white'}" onclick="toggleLike(${post.id})"></i>
                    <i data-lucide="message-circle" class="w-6 h-6 text-white cursor-pointer"></i>
                    <i data-lucide="send" class="w-6 h-6 text-white cursor-pointer"></i>
                </div>
                <i data-lucide="bookmark" class="w-6 h-6 text-white cursor-pointer"></i>
            </div>
            <div class="px-3 pt-2">
                <div class="text-sm font-semibold text-white mb-1">${likes.toLocaleString()} 個讚</div>
                <div class="text-sm text-gray-100"><span class="font-semibold mr-2">wangwei_poet</span>${post.caption}</div>
                <div class="mt-6 mb-2 p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 class="text-center font-bold text-lg mb-2 text-gray-200">${post.poemTitle}</h3>
                    <p class="text-center whitespace-pre-wrap leading-loose text-gray-300 font-serif text-lg mb-4">${post.poemContent}</p>
                    <div class="mb-4 pt-4 border-t border-gray-800">
                        <h4 class="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">重點注釋</h4>
                        <ul class="space-y-2">${annotationsHtml}</ul>
                    </div>
                    <button onclick="toggleTranslation()" class="w-full py-2 text-xs font-semibold text-white border border-gray-600 rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
                        <span class="mr-2">🥞</span> ${state.showTranslation ? '隱藏翻譯' : '查看翻譯年糕'}
                    </button>
                    ${state.showTranslation ? `<div class="mt-4 pt-4 border-t border-gray-700 text-sm text-gray-400 leading-7 animate-fadeIn bg-gray-800/50 p-3 rounded">${post.translation}</div>` : ''}
                </div>
                <div class="mt-4 border-t border-gray-800 pt-4">
                    <h3 class="text-sm font-bold text-gray-300 mb-4">留言</h3>
                    ${commentsHtml}
                </div>
                <div class="text-xs text-gray-500 mt-2 uppercase">${post.date}</div>
            </div>
        </div>
    </div>`;
}

function renderDMList() {
    return `
    <div class="h-full bg-black animate-slideInRight pb-16">
        <div class="px-4 py-3"><div class="bg-gray-800 rounded-lg px-3 py-2 flex items-center"><i data-lucide="search" class="w-4 h-4 text-gray-500 mr-2"></i><input type="text" placeholder="搜尋" class="bg-transparent border-none outline-none text-white text-sm w-full" /></div></div>
        <div class="px-4 py-2 flex justify-between text-sm font-semibold mb-2"><span>訊息</span><span class="text-gray-500">請求</span></div>
        ${CHATS.map(chat => `
            <div class="flex items-center px-4 py-3 hover:bg-gray-900 cursor-pointer" onclick="openChat('${chat.id}')">
                <div class="relative mr-3">
                    <div class="w-14 h-14 rounded-full ${chat.avatarColor} flex items-center justify-center text-white font-bold text-xl">${chat.name[0]}</div>
                    ${chat.isOnline ? '<div class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full"></div>' : ''}
                </div>
                <div class="flex-1">
                    <div class="text-white font-medium">${chat.name}</div>
                    <div class="text-gray-400 text-sm truncate flex items-center">${chat.lastMessage}<span class="mx-1">·</span><span>1小時</span></div>
                </div>
                <div class="pl-2"><div class="w-2 h-2 bg-blue-500 rounded-full"></div></div>
            </div>
        `).join('')}
    </div>`;
}

function renderStoryView() {
    const highlight = HIGHLIGHTS.find(h => h.id === state.currentHighlightId);
    const story = highlight.stories[state.storyIndex];
    const isYunXi = story.type === 'custom_yunxi';
    const isSelfie = story.type === 'selfie';
    
    let content = '';
    if (isYunXi) {
        content = `
        <div class="absolute top-20 right-10 w-24 h-24 bg-yellow-100 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <div class="z-0 text-white opacity-20 text-[200px] absolute -left-20 top-40 select-none">山</div>
        <div class="z-0 text-white opacity-20 text-[200px] absolute -right-20 bottom-40 select-none">水</div>
        <div class="z-10 text-center p-8 backdrop-blur-sm bg-black/20 rounded-xl mx-4 border border-white/10">
            <p class="text-2xl text-yellow-100 font-serif mb-4">雲溪別墅</p>
            <div class="text-white text-lg font-light leading-relaxed mb-6">桂花落了滿地<br/>月亮好圓<br/>剛剛小鳥還唱歌給我聽<br/>🎵</div>
            <div class="inline-block px-4 py-2 bg-white/20 rounded-full text-sm text-white backdrop-blur-md">📍 兩山之間</div>
        </div>`;
    } else if (isSelfie) {
        content = `
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-800 to-green-900 opacity-90"></div>
        <div class="z-10 bg-white p-4 pb-12 rounded shadow-2xl rotate-2 max-w-[80%]">
            <div class="w-64 h-64 bg-gray-200 overflow-hidden border border-gray-300 relative">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=WangWei&backgroundColor=transparent" class="w-full h-full object-cover transform scale-125 translate-y-2" />
            </div>
            <div class="mt-4 font-handwriting text-black text-center text-xl font-bold font-serif">#NewPost #Selfie</div>
        </div>
        <div class="z-20 mt-12 bg-white text-black px-6 py-4 rounded-2xl rounded-tr-none shadow-lg max-w-[80%] border-2 border-black animate-bounce relative">
            <div class="absolute -top-3 right-0 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white border-r-[0px] border-r-transparent"></div>
            <p class="font-bold text-lg whitespace-pre-wrap">${story.mainText}</p>
        </div>`;
    } else {
        content = `
        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>
        <div class="z-10 text-center px-8 w-full">
            <div class="text-8xl mb-8 animate-bounce">${story.emoji}</div>
            <div class="relative mb-8">
                <span class="text-6xl text-white/20 absolute -top-8 -left-2">“</span>
                <h2 class="text-2xl font-serif text-white leading-loose whitespace-pre-line tracking-wider">${story.mainText}</h2>
                <span class="text-6xl text-white/20 absolute -bottom-8 -right-2">”</span>
            </div>
            <div class="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <p class="text-gray-200 text-base leading-relaxed whitespace-pre-line">${story.subText}</p>
            </div>
        </div>`;
    }

    return `
    <div class="fixed inset-0 z-50 bg-black flex flex-col relative animate-fadeIn" onclick="nextStory()">
        <div class="absolute top-2 left-2 right-2 flex space-x-1 z-20">
            ${highlight.stories.map((_, idx) => `<div class="h-1 bg-white/30 flex-1 rounded overflow-hidden"><div class="h-full bg-white w-full ${idx < state.storyIndex ? 'block' : idx === state.storyIndex ? 'animate-progress' : 'hidden'}"></div></div>`).join('')}
        </div>
        <div class="absolute top-6 left-4 flex items-center space-x-2 z-20">
            <div class="w-8 h-8 rounded-full overflow-hidden border border-white"><img src="https://api.dicebear.com/7.x/notionists/svg?seed=WangWei" alt="avatar" /></div>
            <span class="text-white font-semibold text-sm drop-shadow-md">wangwei_poet</span>
            <span class="text-gray-300 text-xs drop-shadow-md">${story.time}</span>
        </div>
        <button onclick="event.stopPropagation(); goBack()" class="absolute top-6 right-4 text-white z-20"><i data-lucide="x" class="w-8 h-8"></i></button>
        <div class="flex-1 flex flex-col items-center justify-center relative overflow-hidden w-full pb-20 ${isYunXi ? 'bg-gradient-to-b from-indigo-900 to-black' : (story.bgClass || 'bg-stone-900')}">
            ${content}
        </div>
    </div>`;
}

function renderBottomNav() {
    return `
    <div class="fixed bottom-0 w-full max-w-md bg-black border-t border-gray-800 flex justify-around items-center py-3 z-40">
        <i data-lucide="home" class="w-7 h-7 text-white cursor-pointer" onclick="navigateTo('home')"></i>
        <i data-lucide="search" class="w-7 h-7 text-gray-500 cursor-pointer"></i>
        <div class="w-7 h-7 border-2 border-white rounded-lg flex items-center justify-center cursor-pointer"><span class="text-lg font-bold text-white mb-1">+</span></div>
        <i data-lucide="film" class="w-7 h-7 text-gray-500 cursor-pointer"></i>
        <div class="w-7 h-7 rounded-full bg-gray-500 overflow-hidden cursor-pointer border border-white" onclick="navigateTo('home')">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=WangWei" alt="me" />
        </div>
    </div>`;
}

// 輔助與尚未實作的佔位函數 (Chat details would be similar)
function renderDMHeader() { return renderSimpleHeader('wangwei_poet'); }
function renderChatHeader() { return renderSimpleHeader('聊天室'); } // Simplified for this file
function renderChatMessages() { return '<div class="flex-1 flex items-center justify-center text-gray-500">聊天內容載入中...</div>'; }
function renderChatInput() { return ''; }
function renderProfileLocked() { return '<div class="text-center mt-20 text-gray-500">此帳號為私密帳號</div>'; }

function getChat(id) { return CHATS.find(c => c.id === id); }

// --- 互動邏輯 (Actions) ---

function navigateTo(view) {
    state.view = view;
    render();
}

function openPost(id) {
    state.currentPostId = id;
    state.showTranslation = false;
    navigateTo('post_detail');
}

function goBack() {
    if (state.view === 'post_detail') navigateTo('home');
    else if (state.view === 'dm_chat') navigateTo('dm_list');
    else if (state.view === 'dm_list') navigateTo('home');
    else if (state.view === 'profile_locked') navigateTo('dm_list');
    else if (state.view === 'story') navigateTo('home');
    else navigateTo('home');
}

function toggleLike(id) {
    const isLiked = state.likedPosts[id];
    state.likedPosts[id] = !isLiked;
    state.postLikeCounts[id] += isLiked ? -1 : 1;
    render();
}

function toggleTranslation() {
    state.showTranslation = !state.showTranslation;
    render();
}

function openStory(highlightId) {
    state.currentHighlightId = highlightId;
    state.storyIndex = 0;
    navigateTo('story');
}

function nextStory() {
    const highlight = HIGHLIGHTS.find(h => h.id === state.currentHighlightId);
    if (state.storyIndex < highlight.stories.length - 1) {
        state.storyIndex++;
        render();
    } else {
        goBack();
    }
}

function openChat(chatId) {
    state.currentChatId = chatId;
    navigateTo('dm_chat');
}

function bindEvents() {
    // 這裡可以綁定更複雜的監聽器，目前使用 onclick 屬性處理簡單交互
}

// 啟動應用
render();