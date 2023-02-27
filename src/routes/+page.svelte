<script>
  import Header from '../Header.svelte';
  import About from '../About.svelte';
  import Portfolio from '../Portfolio.svelte';
  import Contact from '../Contact.svelte';
	import Options from '../Options.svelte';
	import AdminControls from '../AdminControls.svelte';
</script>

<main>
  <section id="landing">
    <Header />
    <About />
  </section>
  <Portfolio />
  <Contact />
  <AdminControls />
  <Options />
</main>

<style lang="sass">
  section
    &#landing
      min-height: 100vh
</style>