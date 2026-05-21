const booksData = [
    {
        id: 1,
        title: '百年孤独',
        author: '[哥伦比亚] 加西亚·马尔克斯',
        cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
        rating: 9.5,
        publishYear: '1967',
        publisher: '南海出版公司',
        isbn: '9787544244909',
        tags: ['经典', '文学', '魔幻现实主义'],
        summary: '《百年孤独》是加西亚·马尔克斯的代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为"再现拉丁美洲历史社会图景的鸿篇巨著"。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。',
        ratingDistribution: { 5: 65, 4: 22, 3: 8, 2: 3, 1: 2 },
        reviews: [
            {
                id: 1,
                reviewer: '林间散步',
                avatar: 'L',
                rating: 5,
                date: '2023-11-20',
                title: '读了三遍，每次都有新发现',
                content: '马尔克斯用魔幻现实主义的笔触描绘了布恩迪亚家族七代人的传奇，孤独是这个家族无法逃脱的宿命。文字极具张力，每一句都值得反复品读。二十年多前写的书，在今天读来依然振聋发聩。',
                likes: 128,
                comments: 45
            },
            {
                id: 2,
                reviewer: '极客老王',
                avatar: 'J',
                rating: 5,
                date: '2023-10-15',
                title: '虽然厚重，但绝对值得一读',
                content: '这是一本需要静下心来啃的书。内容庞杂，从蜜蜂群到电子生态，虽然部分章节稍显晦涩，但作者构建的宏大叙事感非常强。对于想要理解科技走向的人来说，这是必读的底座式作品。',
                likes: 92,
                comments: 12
            }
        ]
    },
    {
        id: 2,
        title: '红楼梦',
        author: '[清] 曹雪芹',
        cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=400&fit=crop',
        rating: 9.7,
        publishYear: '清代',
        publisher: '人民文学出版社',
        isbn: '9787020002200',
        tags: ['经典', '文学', '古典'],
        summary: '《红楼梦》是中国古典四大名著之首，一部伟大的现实主义长篇小说。以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉、林黛玉、薛宝钗的爱情婚姻故事为主线，展现了封建时代社会生活的方方面面。',
        ratingDistribution: { 5: 72, 4: 20, 3: 5, 2: 2, 1: 1 },
        reviews: [
            {
                id: 1,
                reviewer: '潇湘夜雨',
                avatar: 'X',
                rating: 5,
                date: '2023-12-01',
                title: '千古绝唱，人间一梦',
                content: '满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？红楼梦不仅仅是一部小说，更是一部封建社会的百科全书。每次重读都有新的感悟，这就是经典的魅力。',
                likes: 256,
                comments: 89
            }
        ]
    },
    {
        id: 3,
        title: '月亮与六便士',
        author: '[英] 威廉·萨默塞特·毛姆',
        cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=400&fit=crop',
        rating: 9.0,
        publishYear: '1919',
        publisher: '上海译文出版社',
        isbn: '9787532768960',
        tags: ['经典', '文学', '艺术'],
        summary: '《月亮与六便士》是英国作家毛姆的代表作之一，以法国印象派画家高更的生平为蓝本，讲述了一个证券经纪人抛弃舒适生活，追求艺术理想的故事。作品探讨了艺术与生活、理想与现实的永恒主题。',
        ratingDistribution: { 5: 58, 4: 28, 3: 10, 2: 3, 1: 1 },
        reviews: [
            {
                id: 1,
                reviewer: '云中漫步',
                avatar: 'Y',
                rating: 4,
                date: '2023-10-02',
                title: '满地都是六便士，他却抬头看见了月亮',
                content: '思特里克兰德对艺术的纯粹追求让人震撼，虽然他的行为在道德上颇具争议，但那种义无反顾的力量令人深思。月亮与六便士的选择，是每个人都可能面临的人生课题。',
                likes: 89,
                comments: 15
            }
        ]
    },
    {
        id: 4,
        title: '人类简史',
        author: '[以色列] 尤瓦尔·赫拉利',
        cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop',
        rating: 9.1,
        publishYear: '2011',
        publisher: '中信出版社',
        isbn: '9787508653883',
        tags: ['历史', '社会学', '人类学'],
        summary: '《人类简史》从认知革命、农业革命、科学革命三个重大变革入手，全景式呈现人类历史的宏大叙事。作者以宏大的视角审视人类历史，挑战我们关于历史、进步和文明的根本假设。',
        ratingDistribution: { 5: 55, 4: 30, 3: 10, 2: 3, 1: 2 },
        reviews: [
            {
                id: 1,
                reviewer: '知识探险者',
                avatar: 'Z',
                rating: 5,
                date: '2023-09-28',
                title: '重新认识人类的过去',
                content: '赫拉利的视角太震撼了！从认知革命到人工智能，这本书让我重新思考人类的本质和未来。观点新颖，论证有力，是近年来读过的最好的历史著作之一。',
                likes: 167,
                comments: 34
            }
        ]
    },
    {
        id: 5,
        title: '活着',
        author: '余华',
        cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop',
        rating: 9.4,
        publishYear: '1993',
        publisher: '作家出版社',
        isbn: '9787506358164',
        tags: ['文学', '小说', '经典'],
        summary: '《活着》讲述了一个人一生的故事，这是一个历尽世间沧桑和磨难老人的人生感言。小说通过福贵的一生，探讨了生命的意义和存在的价值，展现了中国人在苦难中顽强生存的精神。',
        ratingDistribution: { 5: 68, 4: 22, 3: 7, 2: 2, 1: 1 },
        reviews: [
            {
                id: 1,
                reviewer: '岁月如歌',
                avatar: 'S',
                rating: 5,
                date: '2023-11-10',
                title: '生命的韧性',
                content: '读这本书的时候哭了好几次。福贵的一生太苦了，但他依然活着。余华用最朴素的语言讲述了最深刻的道理：活着本身就是生命的意义。',
                likes: 312,
                comments: 67
            }
        ]
    },
    {
        id: 6,
        title: '追风筝的人',
        author: '[美] 卡勒德·胡赛尼',
        cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=400&fit=crop',
        rating: 8.9,
        publishYear: '2003',
        publisher: '上海人民出版社',
        isbn: '9787208061644',
        tags: ['文学', '小说', '成长'],
        summary: '《追风筝的人》讲述了一个关于背叛与救赎的故事。阿米尔和哈桑的友谊，以及阿米尔对哈桑的背叛，构成了小说的核心。作品通过个人命运折射出阿富汗半个世纪的历史变迁。',
        ratingDistribution: { 5: 52, 4: 32, 3: 12, 2: 3, 1: 1 },
        reviews: [
            {
                id: 1,
                reviewer: '风中追风',
                avatar: 'F',
                rating: 5,
                date: '2023-08-15',
                title: '为你，千千万万遍',
                content: '"为你，千千万万遍"这句话让我泪流满面。这不仅仅是一个关于友谊的故事，更是关于人性、背叛与救赎的深刻反思。胡赛尼的文字充满力量。',
                likes: 198,
                comments: 52
            }
        ]
    },
    {
        id: 7,
        title: '三体',
        author: '刘慈欣',
        cover: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=400&fit=crop',
        rating: 9.3,
        publishYear: '2008',
        publisher: '重庆出版社',
        isbn: '9787536692930',
        tags: ['科幻', '经典', '中国'],
        summary: '《三体》是刘慈欣创作的科幻小说系列，讲述了地球文明与三体文明的首次接触及其后的故事。作品融合了物理学、社会学、哲学等多重元素，展现了宏大的宇宙观和深刻的人文思考。',
        ratingDistribution: { 5: 62, 4: 28, 3: 7, 2: 2, 1: 1 },
        reviews: [
            {
                id: 1,
                reviewer: '星空守望者',
                avatar: 'X',
                rating: 5,
                date: '2023-12-15',
                title: '中国科幻的巅峰之作',
                content: '刘慈欣构建的宏大宇宙观和对人性的深刻剖析令人叹服。黑暗森林法则的设定太震撼了，让人重新思考文明的本质和宇宙的奥秘。',
                likes: 423,
                comments: 98
            }
        ]
    },
    {
        id: 8,
        title: '白夜行',
        author: '[日] 东野圭吾',
        cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=400&fit=crop',
        rating: 9.1,
        publishYear: '1999',
        publisher: '南海出版公司',
        isbn: '9787544242516',
        tags: ['推理', '悬疑', '日本'],
        summary: '《白夜行》是东野圭吾的代表作之一，讲述了一对少男少女因一桩命案而紧密相连，在长达二十年的时间里相互扶持、共同犯罪的故事。作品探讨了人性的黑暗与扭曲。',
        ratingDistribution: { 5: 58, 4: 28, 3: 10, 2: 3, 1: 1 },
        reviews: [
            {
                id: 1,
                reviewer: '小城探案',
                avatar: 'T',
                rating: 5,
                date: '2023-11-25',
                title: '绝望中的共生',
                content: '东野圭吾把人性的黑暗写到了极致。雪穗和亮司的关系让人不寒而栗，他们在白夜中行走，永远无法在阳光下牵手。结局太震撼了，久久不能释怀。',
                likes: 267,
                comments: 78
            }
        ]
    }
];

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<span class="star filled"></span>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<span class="star filled"></span>';
        } else {
            stars += '<span class="star"></span>';
        }
    }
    
    return stars;
}

function createBookCard(book) {
    return `
        <div class="book-card" data-book-id="${book.id}">
            <img src="${book.cover}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-rating">
                    <div class="rating-stars">${renderStars(book.rating)}</div>
                    <span class="rating-value">${book.rating}</span>
                </div>
                <div class="book-actions">
                    <button class="btn">想读</button>
                    <button class="btn btn-primary">写书评</button>
                </div>
            </div>
        </div>
    `;
}

function renderBookList(books) {
    const booksGrid = document.querySelector('.books-grid');
    if (booksGrid) {
        booksGrid.innerHTML = books.map(createBookCard).join('');
        
        document.querySelectorAll('.book-card').forEach(card => {
            card.addEventListener('click', () => {
                const bookId = card.dataset.bookId;
                window.location.href = `detail.html?id=${bookId}`;
            });
        });
    }
}

function searchBooks(query) {
    const lowerQuery = query.toLowerCase();
    return booksData.filter(book => 
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
}

function handleSearch() {
    const searchInput = document.querySelector('#search-input');
    const heroSearchInput = document.querySelector('#hero-search-input');
    
    const handleSearchInput = (input) => {
        input.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            const filteredBooks = query ? searchBooks(query) : booksData;
            renderBookList(filteredBooks);
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                const filteredBooks = query ? searchBooks(query) : booksData;
                renderBookList(filteredBooks);
            }
        });
    };
    
    if (searchInput) handleSearchInput(searchInput);
    if (heroSearchInput) handleSearchInput(heroSearchInput);
}

function getBookById(id) {
    return booksData.find(book => book.id === parseInt(id));
}

function renderBookDetail(book) {
    const detailContainer = document.querySelector('.detail-container');
    if (!detailContainer || !book) return;
    
    detailContainer.innerHTML = `
        <a href="index.html" class="back-link">
            <span>←</span> 返回首页
        </a>
        
        <div class="book-detail-header">
            <img src="${book.cover}" alt="${book.title}" class="detail-cover">
            <div class="detail-info">
                <h1 class="detail-title">${book.title}</h1>
                <p class="detail-author">${book.author}</p>
                <div class="detail-meta">
                    <span>出版年份：${book.publishYear}</span>
                    <span>出版社：${book.publisher}</span>
                    <span>ISBN：${book.isbn}</span>
                </div>
                <div class="detail-rating">
                    <div class="rating-stars">${renderStars(book.rating)}</div>
                    <span class="detail-rating-value">${book.rating}</span>
                    <span class="detail-rating-count">(${book.reviews.length}人评价)</span>
                </div>
                <div class="detail-tags">
                    ${book.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('')}
                </div>
                <div class="detail-actions">
                    <button class="btn btn-primary">写书评</button>
                    <button class="btn">想读</button>
                    <button class="btn">加入书架</button>
                </div>
            </div>
        </div>
        
        <div class="section-card">
            <h3>内容简介</h3>
            <p class="book-summary">${book.summary}</p>
        </div>
        
        <div class="section-card">
            <h3>评价分布</h3>
            <div class="rating-distribution">
                <div class="avg-rating">
                    <div class="avg-rating-value">${book.rating}</div>
                    <div class="avg-rating-label">综合评分</div>
                </div>
                <div class="distribution-chart">
                    ${[5, 4, 3, 2, 1].map(star => `
                        <div class="distribution-bar">
                            <span class="distribution-label">${star}星</span>
                            <div class="distribution-track">
                                <div class="distribution-fill" style="width: ${book.ratingDistribution[star]}%"></div>
                            </div>
                            <span class="distribution-percent">${book.ratingDistribution[star]}%</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="section-card">
            <h3>热门书评</h3>
            <div class="review-list" id="review-list">
                ${book.reviews.map(review => `
                    <div class="review-card">
                        <div class="review-header">
                            <div class="reviewer-avatar">${review.avatar}</div>
                            <div class="reviewer-info">
                                <div class="reviewer-name">${review.reviewer}</div>
                                <div class="review-date">${review.date}</div>
                            </div>
                            <div class="review-rating">${renderStars(review.rating)}</div>
                        </div>
                        <h4 class="review-title">${review.title}</h4>
                        <p class="review-content">${review.content}</p>
                        <div class="review-actions">
                            <span class="review-action">
                                <span>👍</span> ${review.likes}
                            </span>
                            <span class="review-action">
                                <span>💬</span> ${review.comments}
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="write-review-section">
            <h3>写书评</h3>
            <div class="rating-input">
                <label>给这本书打个分</label>
                <div class="rating-stars-input" id="rating-input-stars">
                    ${[1, 2, 3, 4, 5].map(i => `<span class="star" data-rating="${i}"></span>`).join('')}
                </div>
            </div>
            <div class="form-group">
                <label>书评标题</label>
                <input type="text" id="review-title" placeholder="给你的书评起个响亮的标题...">
            </div>
            <div class="form-group">
                <label>书评内容</label>
                <textarea id="review-content" placeholder="这一刻的想法..."></textarea>
                <div class="char-count">0 / 5000</div>
            </div>
            <div class="review-tags">
                <span class="review-tag">深度好文</span>
                <span class="review-tag">强烈推荐</span>
                <span class="review-tag">个人感悟</span>
                <span class="review-tag">读书心得</span>
            </div>
            <div class="publish-options">
                <input type="checkbox" id="publish-public" checked>
                <label for="publish-public">公开发布到社区</label>
            </div>
            <div class="review-submit">
                <button class="btn">保存草稿</button>
                <button class="btn btn-primary" id="submit-review">发布书评</button>
            </div>
        </div>
    `;
    
    setupRatingInput();
    setupReviewSubmit(book.id);
    setupCharCount();
}

function setupRatingInput() {
    const ratingStars = document.querySelectorAll('#rating-input-stars .star');
    if (!ratingStars.length) return;
    
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            ratingStars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('filled');
                } else {
                    s.classList.remove('filled');
                }
            });
        });
    });
}

function setupCharCount() {
    const contentTextarea = document.querySelector('#review-content');
    const charCount = document.querySelector('.char-count');
    
    if (!contentTextarea || !charCount) return;
    
    contentTextarea.addEventListener('input', (e) => {
        const length = e.target.value.length;
        charCount.textContent = `${length} / 5000`;
        
        if (length > 5000) {
            e.target.value = e.target.value.substring(0, 5000);
            charCount.textContent = '5000 / 5000';
        }
    });
}

function setupReviewSubmit(bookId) {
    const submitBtn = document.querySelector('#submit-review');
    if (!submitBtn) return;
    
    submitBtn.addEventListener('click', () => {
        const ratingStars = document.querySelectorAll('#rating-input-stars .star.filled');
        const title = document.querySelector('#review-title').value.trim();
        const content = document.querySelector('#review-content').value.trim();
        
        if (ratingStars.length === 0) {
            alert('请先给书籍打分');
            return;
        }
        
        if (!title) {
            alert('请输入书评标题');
            return;
        }
        
        if (!content) {
            alert('请输入书评内容');
            return;
        }
        
        const newReview = {
            id: Date.now(),
            reviewer: '当前用户',
            avatar: 'U',
            rating: ratingStars.length,
            date: new Date().toISOString().split('T')[0],
            title,
            content,
            likes: 0,
            comments: 0
        };
        
        const book = getBookById(bookId);
        if (book) {
            book.reviews.unshift(newReview);
        }
        
        const reviewList = document.querySelector('#review-list');
        if (reviewList) {
            const reviewCard = `
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-avatar">${newReview.avatar}</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">${newReview.reviewer}</div>
                            <div class="review-date">${newReview.date}</div>
                        </div>
                        <div class="review-rating">${renderStars(newReview.rating)}</div>
                    </div>
                    <h4 class="review-title">${newReview.title}</h4>
                    <p class="review-content">${newReview.content}</p>
                    <div class="review-actions">
                        <span class="review-action">
                            <span>👍</span> ${newReview.likes}
                        </span>
                        <span class="review-action">
                            <span>💬</span> ${newReview.comments}
                        </span>
                    </div>
                </div>
            `;
            reviewList.insertAdjacentHTML('afterbegin', reviewCard);
        }
        
        document.querySelector('#review-title').value = '';
        document.querySelector('#review-content').value = '';
        document.querySelector('.char-count').textContent = '0 / 5000';
        document.querySelectorAll('#rating-input-stars .star').forEach(s => s.classList.remove('filled'));
        
        alert('书评发布成功！');
    });
}

function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    
    if (bookId) {
        const book = getBookById(bookId);
        if (book) {
            renderBookDetail(book);
        }
    } else {
        renderBookList(booksData);
        handleSearch();
    }
}

document.addEventListener('DOMContentLoaded', init);