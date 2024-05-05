import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { Theme } from '@/shared/const/theme'

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text',
}

export const Ghost = Template.bind({})
Ghost.args = {
	children: 'Text',
	theme: ButtonTheme.GHOST,
}

export const GhostInverted = Template.bind({})
GhostInverted.args = {
	children: 'Text',
	theme: ButtonTheme.GHOST_INVERTED,
}

export const Outline = Template.bind({})
Outline.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINE,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINE,
	size: ButtonSize.L,
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINE,
	size: ButtonSize.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND,
	square: true,
}

export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL,
}

export const Disabled = Template.bind({})
Disabled.args = {
	children: '>',
	theme: ButtonTheme.OUTLINE,
	disabled: true,
}
