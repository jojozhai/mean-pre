/**
 * Created by zhailiang on 2017/4/13.
 */
module.exports.productList = function(req, res){
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    res.render('productList', { });
};

module.exports.productDetail = function(req, res){
    res.render('productDetail', { });
};