import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from './Modal'
import { Theme } from '@/shared/const/theme'

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
	isOpen: true,
	children:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam, aspernatur assumenda aut beatae corporis cumque dolore dolores eaque fuga id ipsum magnam mollitia, nisi, placeat provident quas quia.',
}

export const Dark = Template.bind({})
Dark.args = {
	isOpen: true,
	children:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam, aspernatur assumenda aut beatae corporis cumque dolore dolores eaque fuga id ipsum magnam mollitia, nisi, placeat provident quas quia.',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
