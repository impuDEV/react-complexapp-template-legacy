import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NavBar } from './NavBar'

export default {
	title: 'shared/NavBar',
	component: NavBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />

export const Normal = Template.bind({})
Normal.args = {}
