<script>
  import Content, { metadata } from '$lib/posts/hello-world.md';
</script>

<article class="prose max-w-none">
  <h1>{metadata.title}</h1>
  <p>{metadata.description}</p>
  <p>{metadata.date}</p>
  <p>{metadata.tags}</p>
  <Content />
</article>
