import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'
import { Theme } from '@/shared/const/theme'

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Title lorem ipsum',
	text: 'Description',
}

export const Error = Template.bind({})
Error.args = {
	title: 'Title lorem ipsum',
	text: 'Description',
	theme: TextTheme.ERROR,
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
	title: 'Title lorem ipsum',
}
export const onlyText = Template.bind({})
onlyText.args = {
	text: 'description',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
	title: 'Title lorem ipsum',
	text: 'Description',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
	title: 'Title lorem ipsum',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
	text: 'description',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
	title: 'Title lorem ipsum',
	text: 'Description Description Description Description Description',
	size: TextSize.L,
}

export const SizeM = Template.bind({})
SizeM.args = {
	title: 'Title lorem ipsum',
	text: 'Description Description Description Description Description',
	size: TextSize.M,
}

export const SizeS = Template.bind({})
SizeS.args = {
	title: 'Title lorem ipsum',
	text: 'Description Description Description Description',
	size: TextSize.S,
}