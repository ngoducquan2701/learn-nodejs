
class SiteController {

    home(req, res) {
        res.render('home');
    }

    form(req, res) {
        res.render('form');
    }
}

module.exports = new SiteController;
