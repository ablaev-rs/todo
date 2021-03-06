import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { TodoComponent } from 'components'
import './index.styl'
import { Content } from '@startupjs/ui'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      Content.wrapper
        TodoComponent
  `
})
