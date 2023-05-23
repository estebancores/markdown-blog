<script lang="ts">
	import { contact } from '../../data/contact'
</script>

<div>
	<h1>Get in touch</h1>
	<ul>
		{#each contact as con}
			<a href={con.contact}><h3>{con.text}</h3> </a>
		{/each}
	</ul>
</div>
