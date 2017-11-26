var tags=['خودرو','شیمی','فیزیک','ریاضی'];

function fixedKeywords(target ,keyArr) {
    var tags = keyArr

    new Vue({
        el: '[data-fixedKey=' + target + ']',
        data: {
            tag: tags,
            isActive: [],
            selected: ['ریاضی', 'خودرو', 'زبان']
        },
        created: function () {
            var _this = this, pos;
            _this.selected.forEach(function (el) {
                pos = _this.tag.indexOf(el);
                _this.isActive[pos] = true;
            })
        },
        methods: {
            addTolist: function (e, index) {
                var _this = this;
                if (_this.selected.indexOf(_this.tag[index]) == -1) {
                    _this.selected.push(_this.tag[index]);
                    _this.isActive[index] = true;
                } else {
                    _this.selected.splice(_this.selected.indexOf(_this.tag[index]), 1)
                    _this.isActive[index] = false;
                }
            }
        }
    })
}