const Flash = require('../utils/Flash')

const User = require('../model/User')

exports.authorProfileGetController = async (req, res, next) => {

    let userId = req.params.userId

    try {
        let author = await User.findById(userId)
            .populate({
                path: 'profile',
                populate: {
                    path: 'posts'
                }
            })

        // console.log(author)
        res.render('pages/explorer/author', {
            title: 'Author Profile Page',
            flashMessage: Flash.getMessage(req),
            author
        })

    } catch (e) {
        next(e)
    }


}