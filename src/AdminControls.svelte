<script>
  import { admin } from './stores';
  import ProjectForm from './ProjectForm.svelte';
	import { onMount } from 'svelte';

  onMount(async () => {
  const response = await fetch('/api/me');

  if (response.ok) {
    const loginData = await response.json();
    admin.login(loginData);
  }
});
</script>

{#if $admin.id}
  <p>Logged in as {$admin.email}</p>
  <ProjectForm />
{/if}