<script lang="ts">
  import '../app.css';
  import icon from '$lib/assets/icon/imo-icon.svg';

  $effect(() => {
    document.documentElement.style.setProperty('--icon-url', `url(${icon})`);
  });

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={icon} />
  <title>imolog</title>
  <meta name="description" content="izumixのなんでもブログ" />
</svelte:head>

<header>
  <a href="/">imolog</a>
</header>
{@render children?.()}
