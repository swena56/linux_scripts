import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import styles from "@sambego/storybook-styles";
import { withNotes,withMarkdownNotes } from '@storybook/addon-notes';

import Example from './Example';

storiesOf('unsorted',module)
	.add('Carousel', 
	withNotes("Notes")(() => 
		<div>
		<Example/>
		</div>
		)
);
