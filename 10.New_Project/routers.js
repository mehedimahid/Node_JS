const router = require('express').Router()
const {
  getAllContact,
  getSingleContact,
  creatContact,
  updateContact,
  deleteContact
} =require('./controller')

router.get('/', getAllContact)
router.get('/:id', getSingleContact)
router.get('/delete/:id', deleteContact)
router.post('/', creatContact)
router.put('/:id', updateContact)
// router.delete('/:id', deleteContact)

module.exports = router