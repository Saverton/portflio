<script>
  import Header from '../Header.svelte';
  import About from '../About.svelte';
  import Portfolio from '../Portfolio.svelte';
  import Contact from '../Contact.svelte';
</script>

<main>
  <section id="landing">
    <Header />
    <About />
  </section>
  <Portfolio />
  <Contact />
</main>

<style lang="sass">
  section
    &#landing
      min-height: 100vh
</style>