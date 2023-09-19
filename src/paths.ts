import 'module-alias/register'
import { addAliases } from 'module-alias'

addAliases({
    '@data': `${__dirname}/data`,
    '@web': `${__dirname}/web`,
    '@logic': `${__dirname}/logic`
})