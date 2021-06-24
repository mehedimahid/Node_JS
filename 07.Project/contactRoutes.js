const router = require('express').Router()

const {
  getAllContacts,
  creatContact,
  getContactById,
  updateContact,
  deleteContact
} = require('./contactController')

router.get('/', getAllContacts)
router.post('/', creatContact)
router.get('/:id', getContactById)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

module.exports = router

