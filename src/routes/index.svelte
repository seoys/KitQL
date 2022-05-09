<script context="module" lang="ts">
	export const load = async ({ fetch }) => {
		await KQL_FindMainBanners.queryLoad({
			fetch,
			variables: {
				sort: '{}',
				skip: 0,
				limit: 10,
				search: '{}'
			}
		});

		return {};
	};
</script>

<script lang="ts">
	import { KQL_FindMainBanners } from '$lib/graphql/_kitql/graphqlStores';

	$: datas = $KQL_FindMainBanners.data?.findMainBanners;

	// console.log('datas', $KQL_FindMainBanners.data?.findMainBanners);
</script>

<ul>
	{#each datas as data}
		<li>{data.contents.txt_title}</li>
	{/each}
</ul>
