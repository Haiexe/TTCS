// NEWS-PAGE 
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.news-page .tab-new')
const panes = $$('.news-page .type-news')
console.log(tabs)
console.log(panes)

tabs.forEach((tab, index) =>{
    const pane = panes[index]
    tab.onclick = function(){
        $('.tab-new.active-new').classList.remove('active-new')
        this.classList.add('active-new');
        
        $('.type-news.active2').classList.remove('active2')
        pane.classList.add('active2')

    }
})