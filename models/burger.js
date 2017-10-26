var orm = require('../config/orm');



var burgers ={
	selectAll: function(cb){
		orm.selectAll(function(res){
			cb(res)
		});
	},

	create: function(name, dev, cb){
		orm.create("burger",name, dev, function(res){
			cb(res);
		});
	},

	update: function(id, cb){
		orm.update(id, function(res){
			console.log('here'+res);
			cb(res);
		});
	},
    delete: function(condition, cb) {
        orm.delete("burger", condition, function(res) {
          cb(res);
        });
      }
    };


module.exports = burgers;