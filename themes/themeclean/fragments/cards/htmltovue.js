module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themeclean-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.addFor($.find('div.card').first(), 'model.cards')
        f.addStyle($.find('div.card').first(), 'background-color', "model.showcard == 'true' ? model.cardcolor : 'transparent'")
        f.bindAttribute($.find('div.card-body').first(), 'class', "model.showcard == 'true' ? 'card-body' : ''")
        f.bindAttribute($.find('img').first(), 'class', "model.showcard == 'true' ? 'card-img pb-1' : 'card-img pb-3'")
        f.bindAttribute($.find('img').first(), 'src', f.pathToUrl('item.image'))
        f.addIf($.find('h5').first(), 'model.showtitle == \'true\'')
        f.mapRichField($.find('h5').first(), "item.title")
        f.addStyle($.find('h5').first(), 'color', 'item.color')
        f.addIf($.find('p').first(), 'model.showtext == \'true\'')
        f.addIf($.find('h1').first(), 'editAndEmpty')
        f.mapRichField($.find('p').first(), "item.text")
        //f.addStyle($.find('p').first(), 'color', 'item.color')
        f.addIf($.find('a.btn').first(), 'model.showbutton == \'true\'')
        f.bindAttribute($.find('a.btn').first(), 'href', f.pathToUrl('item.buttonlink'))
        f.mapRichField($.find('a.btn').first(), "item.buttontext")
        f.addStyle($.find('a.btn').first(), 'backgroundColor', 'item.buttoncolor')
        f.addStyle($.find('a.btn').first(), 'borderColor', 'item.buttoncolor')
        f.addIf($.find('.perIsEditAndEmpty').first(), 'isEditAndEmpty')
    }
}