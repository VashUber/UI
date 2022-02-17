<template>
	<div class="wrapper">
		<input
				:type="type"
				:placeholder="placeholder"
				class="input"
				:value="modelValue"
				@input="onInput($event)"
				:class="{ 'input_with-clear': allowClear }"
		/>
		<transition name="clear">
			<div
					v-if="allowClear && modelValue.length > 0"
					@click="clearInput"
					class="input__clear"
			>
				<img src="../assets/close.svg" alt=""/>
			</div>
		</transition>
	</div>
</template>

<script setup>
const { type, placeholder, modelValue, allowClear } = defineProps({
	type: String,
	placeholder: String,
	modelValue: String,
	allowClear: Boolean,
})

const emits = defineEmits(["update:modelValue"])

const onInput = (e) => {
	emits("update:modelValue", e.target.value)
}

const clearInput = () => {
	emits("update:modelValue", "")
}
</script>

<style lang="scss" scoped>
.input {
	border-radius: 0.2rem;
	border: 1px solid #dadada;
	outline: none;
	padding: 0.25rem 0.5rem;
	font-size: 1em;
	transition: box-shadow 0.2s ease-in-out;
	
	&:focus {
		border: 1px solid rgba(91, 134, 255, 0.2);
		box-shadow: 0 0 0 3px rgba(91, 134, 255, 0.2);
	}
	
	&::placeholder {
		color: #bebebe;
	}
	
	&_with-clear {
		padding-right: 2.4rem;
	}
	
	&__clear {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		margin-right: 0.25rem;
		width: 18px;
		height: 18px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		background: #dadada;
		cursor: pointer;
		
		&:hover {
			background: #bebebe;
		}
	}
}

.wrapper {
	display: inline-block;
	position: relative;
}

.clear-enter-active,
.clear-leave-active {
	transition: opacity 0.2s ease;
}

.clear-enter-from,
.clear-leave-to {
	opacity: 0;
}
</style>
