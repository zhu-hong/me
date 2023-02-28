<script setup lang='ts'>
import { ref } from 'vue'
import dayjs from 'dayjs'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const date = dayjs(frontmatter.date).format('YYYY-MM-DD HH:MM')

const update = ref('')

if(frontmatter.update) {
	update.value = dayjs(frontmatter.date).fromNow()
}

</script>

<template>
  <div v-if="frontmatter.display ?? frontmatter.title" class="prose">
    <h1>
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="opacity-50 mb-4 flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"/><path fill="currentColor" d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"/></svg>
			<span>{{ date }}</span>
    </p>
    <p v-if="frontmatter.update" class="opacity-50 mb-4 flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="m27 25.586l-2-2V21h-2v3.414L25.586 27L27 25.586z"/><path fill="currentColor" d="M24 31a7 7 0 1 1 7-7a7.008 7.008 0 0 1-7 7zm0-12a5 5 0 1 0 5 5a5.005 5.005 0 0 0-5-5zm-8 9A12.013 12.013 0 0 1 4 16H2a14.016 14.016 0 0 0 14 14zM12 8H7.078A11.984 11.984 0 0 1 28 16h2A13.978 13.978 0 0 0 6 6.234V2H4v8h8z"/></svg>
			<span>更新于：{{ update }}</span>
    </p>
    <p v-if="frontmatter.desc" class="opacity-50 italic">
      {{ frontmatter.desc }}
    </p>
  </div>
  <article ref="content">
    <slot />
  </article>
</template>

<style lang="postcss">
:where(.prose) {
	h1, h2, h3, h4, h5, h6 {
		&:not(:first-child) {
			margin-top: 2rem;
		}
		&:not(:last-child) {
			margin-bottom: 1rem;
		}
		font-weight: bold;
		font-family: Georgia, Cambria, "Times New Roman", Times, serif;
	}

	h1 {
		font-size: 2.05rem;
	}
	
	h2 {
		font-size: 1.9rem;
	}
	
	h3 {
		font-size: 1.75rem;
	}
	
	h4 {
		font-size: 1.6rem;
	}
	
	h5 {
		font-size: 1.45rem;
	}
	
	h6 {
		font-size: 1.3rem;
	}
	
	p {
		margin: 0.75rem 0 2rem 0;
	}

	ul, ol {
		padding-left: 2rem;
		margin: .75rem 0;
	}

	li {
		list-style: disc;
		margin: .5rem 0;
	}

	code:not([class]) {
		border-radius: 0.45rem;
		background-color: rgba(52, 63, 96, 1);
		padding: 0.25rem;
		font-weight: 600;
		margin: 0 .25rem;
	}

	.shiki {
		padding: 1rem;
		overflow: auto;

		&:last-child {
			display: none;
		}
	}

	pre:not([class]) code, .shiki-container code {
		padding: 0;
		margin: 0;
		border-radius: 0;
		background-color: transparent;
		font-weight: inherit;
		font-size: inherit;
	}

	table {
		width: 100%;

		thead {
			border-bottom-width: 1px;
			border-bottom-color: var(--p-color);
		}

		th, td {
			border-width: 1px;
			border-color: var(--p-color);
			padding: 0.5rem;
		}

		th {
			font-weight: 500;
		}
	}

	blockquote {
		padding-left: 1.5rem;
		border-left: 0.25rem solid var(--p-color);
		margin: 1rem 0;
	}

	a {
		font-weight: 500;
		color: #ffffff;
		transition: border ease-in-out .3s;
		border-bottom: solid 1px rgba(115, 115, 115, .3);
		display: inline-block;
		margin: 0 .25rem;

		&:hover {
			border-bottom-color: var(--p-color);
			color: var(--p-color);
		}
	}
	
	.header-anchor {
		font-weight: bold;
		text-decoration: none;
		border: none;
		color: var(--ct-color);
		margin: 0;
	}
}
</style>
