<script>
  // import { projects } from './test-data/projects.js';
  import { onMount } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { slide } from 'svelte/transition';

  let filters = [];
  let projects = [];
  let displayedProjects = [];
  let active = 0;
  let hidden = true;
  let loadingTags = false;
  let loadingProjects = false;

  $: displayedProjects = projects.filter(project => project.tags.includes(filters[active]))

  /**
   * Set a the current filter to a specified filter option
   * @param {number} index
   */
  function setActive(index) {
    active = index;
  }

  /**
   * Show/hide the filter options
   */
  function toggleHidden() {
    hidden = !hidden;
  }

  /**
   * Perform an async fetch request to get the filter options
   */
  async function fetchTags() {
    loadingTags = true;
    const response = await fetch('/api/tags');
    const data = await response.json();
    filters = data.tags;
    loadingTags = false;
  }

  /**
   * Perform an async fetch request to get all projects
   */
  async function fetchProjects() {
    loadingProjects = true;
    const response = await fetch('/api/projects');
    projects = await response.json();
    loadingProjects = false;
  }

  onMount(async () => {
    fetchTags();
    fetchProjects();
  });
</script>

<section id="projects">
  <h2>Projects</h2>

  <button class='minimal' on:click={toggleHidden}>
    {hidden ? 'show' : 'hide'} filters
  </button>

  {#if !hidden}
    {#if loadingTags}
      <h2>Loading Tags...</h2>
    {/if}

    <nav transition:slide>
      {#each filters as filter, i}
        <button
          class:active='{i === active}'
          on:click={() => setActive(i)}
        >
          {filter}
        </button>
      {/each}
    </nav>
  {/if}

  <div>
    {#if loadingProjects}
      <h2>Loading Projects...</h2>
    {/if}

    {#each displayedProjects as project, index (`project-${index}`)}
      <ProjectCard {...project} reverse={index % 2 === 1}/>
    {/each}
  </div>
</section>

<style lang="sass">
  section
    text-align: center

  nav
    display: flex
    gap: 0.5rem
    justify-content: center
  
  button
    border: none
    padding: 0.75em 1em
    border-radius: 0.25em
    background-color: #557
    font-family: inherit
    font-weight: bold
    font-size: 1rem
    cursor: pointer

    &:hover
      background-color: #668

    &.active
      background-color: #889
      color: #ffd

    &.minimal
      background-color: transparent
      color: #556
      padding: 0
      margin-bottom: 0.5rem

  div
    display: flex
    flex-direction: column
    align-items: center
</style>