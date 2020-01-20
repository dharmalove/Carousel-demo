var allButtons = $('#buttons > span')
for(let i = 0;i < allButtons.length; i++){
    $(allButtons[i]).on('click',function(e){
        let index = $(e.currentTarget).index()
        let s = index * -640
        $('#images').css({
            transform: 'translate(' + s + 'px)'
        })
        n = index
        allButtons.eq(n).addClass('active').siblings('.active').removeClass('active')
    })
}
