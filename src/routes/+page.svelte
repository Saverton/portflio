<script>
  import { admin } from '../stores';
  import Header from '../Header.svelte';
  import About from '../About.svelte';
  import Portfolio from '../Portfolio.svelte';
  import Contact from '../Contact.svelte';
  import ProjectForm from '../ProjectForm.svelte';
	import Options from '../Options.svelte';
	import { onMount } from 'svelte';
  import { getCookie } from '../helper/getCookie';

  onMount(async () => {
    const response = await fetch('https://meadows-portfolio.onrender.com/api/me', {
      credentials: 'include',
      headers: {
        'X-CSRF-Token': getCookie('CSRF_TOKEN')
      }
    });

    if (response.ok) {
      const loginData = await response.json();
      admin.login(loginData);
    }
  });
</script>

<main>
  <section id="landing">
    <Header />
    <About />
  </section>
  <Portfolio />
  <Contact />
  {#if $admin.id}
  <p>Logged in as {$admin.email}</p>
  <ProjectForm />
  {/if}
  <Options />
</main>

<style lang="sass">
  section
    &#landing
      min-height: 100vh
</style>