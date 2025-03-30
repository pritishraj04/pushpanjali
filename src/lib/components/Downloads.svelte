<script>
	import Icon from '@iconify/svelte';

	let { project } = $props();
	const downloads = project.downloads;
</script>

<section class="downloads section-padding-bottom">
	<h4 class="section-heading sh-b2">Downloads</h4>
	<p class="section-description">Feel free to download these project files.</p>
	<ul data-role="list" class="downloads-list">
		{#each downloads as download, index}
			<li class="dowload-item">
				<a href={download.file} target="_blank" rel="noopener noreferrer" class="download-link">
					<div class="download-icon">
						<Icon icon="material-symbols-light:download" width="18" height="18" />
					</div>
					<div class="download-details">
						<h5 class="download-name">{download.title}</h5>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.downloads-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.download-link {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		text-decoration: none;
		color: #2569c2;
		transition: transform 0.3s ease;
	}
	.download-link:hover {
		transform: scale(1.02);
		color: #003070;
	}
	.download-name {
		font-size: 1.3rem;
		line-height: 1.5;
	}
</style>
