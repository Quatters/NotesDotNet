<template>
	<div class="container content">
		<div class="row justify-content-center justify-content-md-start g-4 list">
			<note-constructor class="list-item" @fetch-notes="$emit('fetch-notes')" />
			<transition-group name="list">
				<note-instance
					v-for="note in notes"
					:key="note.id"
					:id="note.id"
					:author="note.author"
					:body="note.body"
					:dateModified="note.dateModified"
					class="list-item"
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
	.list-item {
		transition: all 0.55s ease;
		display: inline-block;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
	}

	.list-enter-active,
	.list-leave-active {
		opacity: 0;
	}

	.content {
		margin-top: 3em;
	}
</style>
