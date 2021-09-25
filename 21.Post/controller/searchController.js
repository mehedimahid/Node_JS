const Post = require('../model/Post')
const Flash = require('../utils/Flash')

exports.searchResultGetController = async (req, res, next) => {
    let term = req.query.term
    let currentPage = parseInt(req.query.page) || 1
    let itemPerPage = 10

    try {
        let posts = await Post.find({
            $text: {
                $search: term
            }
        })
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)

        let totalPost = await Post.countDocuments({
            $text: {
                $search: term
            }
        })
        let totalPage = totalPost / itemPerPage

        res.render('pages/explorer/search', {
            title: `Result For - ${term}`,
            flashMessage: Flash.getMessage(req),
            searchTerm: term,
            itemPerPage,
            totalPage,
            currentPage,
            posts
        })
    } catch (e) {
        next(e)
    }
}