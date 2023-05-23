<script lang="ts">
	import { experience, otherTechologies } from '../../data/experience'
	const experienceCounter = new Date().getFullYear() - new Date('2016-07-01').getFullYear() - 1
</script>

<svelte:head>
	<title>Estebancores | About me</title>
</svelte:head>

<div class="about">
	<div class="experience-profile">
		<h2>Hey there!&#128075; I'm Esteban</h2>
		<p>
			Based in Medellín, Colombia, I am a {experienceCounter}+ experience web developer. In my
			experience, I had worked with several technologies but my favorites are Vuejs, Nodejs, Php,
			and Postgresql. Moreover, I have had the chance to improve other skills like communication,
			teamwork, and high responsibility sense. I am a quiet person who enjoys playing video games
			&#127918;, code &#128187; and good food &#128523
		</p>
	</div>

	<div class="experience-path">
		<h1>Experience path</h1>
		{#each experience as exp}
			<div class="experience">
				<h2>{exp.company}</h2>
				<h3>{exp.role}</h3>
				<div>
					<span>From {exp.start}</span>
					<span>to {exp.end}</span>
				</div>

				<ul class="tasks">
					{#each exp?.tasks as task}
						<li>{task}</li>
					{/each}
				</ul>

				<div class="technologies">
					{#each exp?.technologies as tech}
						<div class="image-container">
							<img src={tech.logo} alt={tech.name} title={tech.name} loading="lazy" />
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="other">
		<h1>Other tecnologies I had work with</h1>
		<div class="technologies">
			{#each otherTechologies as tech}
				<div class="image-container">
					<img src={tech.logo} alt={tech.name} title={tech.name} loading="lazy" />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.other {
		margin-top: var(--size-7);
	}
	.about :is(h1, h2, h3, h4, h5, h6) {
		max-inline-size: 100%;
	}
	.experience-profile {
		margin-bottom: var(--size-7);
	}
	.experience-profile p {
		max-inline-size: 100%;
	}
	.experience .tasks {
		list-style: inherit;
		padding-left: var(--size-7);
	}
	.experience h2 {
		color: var(--link-visited);
	}
	.experience .tasks li {
		max-inline-size: inherit;
	}

	.experience {
		padding-bottom: var(--size-3);
	}

	.experience:not(:last-child) {
		border-bottom: 1px solid var(--border);
	}

	.technologies {
		display: flex;
		padding-top: var(--size-3);
		gap: 10px;
	}
	.technologies .image-container img {
		max-width: 120px;
		max-height: 50px;
		border-radius: none;
	}
	.technologies .image-container:hover {
		background-color: aliceblue;
	}
</style>
