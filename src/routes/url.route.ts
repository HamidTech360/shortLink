import express from 'express'
const router = express.Router()
import {EncodeURL, DecodeURL, URLStatisctics} from '../controllers/url.controller'


router.post('/encode', EncodeURL)
router.post('/decode', DecodeURL)
router.get('/statistic/:urlId', URLStatisctics )

export default router 