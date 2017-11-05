var stiivOptionize = (function($, window, undefined) {

	return {
        $select: '',
        options: [],

        setSelect: function($jqselect) {
            this.$select = $jqselect;
            return this;
        },

        select: function(value) {
            this.$select.val(value);
            return this;
        },

        count: function() {
            return this.options.length;
        },

        add: function(value, label) {
            if(!this.hasValue(value)) {
                this.options.push({
                    val: value,
                    text: label
                });
            }

            return this;
        },

        change: function(value, label) {
            var options = this.options;

            for (var index in options) {
                if (options[index].val == value) {
                    options[index].text = label;
                    break;
                }
            }

            return this;
        },

        addBlank: function(value, label) {
            value = value || '';
            label = label || '';

            if(!this.hasBlank()) {
                this.options.unshift({
                    val: value,
                    text: label,
                    blank: true
                });
            }

            return this;
        },

        remove: function(value) {
            if(this.hasValue(value)) {
                var options = this.options;
                for(var index in options) {
                    if(options[index].val == value) {
                        options.splice(index, 1);
                    }
                }
            }

            return this;
        },

        hasBlank: function() {
            if(this.count()) {
                var options = this.options;
                for(var index in options) {
                    if(options[index].hasOwnProperty('blank'))
                        return true;
                }

                return false;
            }

            return false;
        },

        hasValue: function(value) {
            if(this.count()) {
                var options = this.options;
                for(var index in options) {
                    if(options[index].val == value)
                        return true;
                }

                return false;
            }

            return false;
        },

        render: function() {
            if(this.count()) {
                var options = this.options;
                this.$select.empty();
                for(var index in options) {
                    this.$select.append(
                        $("<option/>", {
                            val: options[index].val,
                            text: options[index].text
                        })
                    );
                }
            }

            return this;
        }
    };

})(jQuery, window, undefined);