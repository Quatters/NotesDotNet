<template>
	<div class="container content">
		<div class="row justify-content-center justify-content-md-start g-4 list">
			<note-constructor @fetchNotes="$emit('fetchNotes')" />
			<transition-group name="list">
				<note-instance
					v-for="note in notes"
					:key="note.id"
					:id="note.id"
					:author="note.author"
					:body="note.body"
					:dateModified="note.dateModified"
				/>
			</transition-group>
		</div>
	</div>
</template>

<script>
	import NoteInstance from '@/components/NoteInstance';
	import NoteConstructor from '@/components/NoteConstructor.vue';

	export default {
		components: {
			NoteInstance,
			NoteConstructor,
		},
		props: {
			notes: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style scoped>
	.content {
		margin-top: 3em;
	}

	.empty-list {
		color: brown;
		align-items: center;
	}

	.list-item {
		display: inline-block;
		margin-right: 10px;
	}
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(-200px);
	}
</style>
