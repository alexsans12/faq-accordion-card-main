const cardArticles = document.querySelectorAll('.card__article');

cardArticles.forEach((article) => {
    article.querySelector(".card__article-header").addEventListener('click', () => {
        if(article.querySelector('.card__article-text').classList.contains('card__article-text--show')) {
            hideText(article);
        }
        else 
        showText(article);
    });
});


function showText(article) {
    let textArticle = article.querySelector('.card__article-text');
    let titleArticle = article.querySelector('.card__article-header');
    let iconArrow = article.querySelector('.card__article-icon');
    
    hideTexts();

    titleArticle.classList.add('card__article-header--bold');
    textArticle.classList.add('card__article-text--show');
    iconArrow.classList.add('card__article-icon--rotate');
}

function hideText(article) {
    let textArticle = article.querySelector('.card__article-text');
    let titleArticle = article.querySelector('.card__article-header');
    let iconArrow = article.querySelector('.card__article-icon');
    
    titleArticle.classList.remove('card__article-header--bold');
    textArticle.classList.remove('card__article-text--show');
    iconArrow.classList.remove('card__article-icon--rotate');
}

function hideTexts() {
    cardArticles.forEach(article => {
        hideText(article);
    });
}