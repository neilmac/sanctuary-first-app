var app = {
    
    initialize: function() {
	    var self = this;
	    this.store = new LocalStorageStore(function() {
	        
	    });
	}

};

app.initialize();