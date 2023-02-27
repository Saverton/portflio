<script>
	import LangList from "./LangList.svelte";
</script>

<section id="about">
  <div>
    <LangList />
  </div>
  
  <article>
    <img
      src="/portrait.jpg"
      alt="Scott Meadows, Portrait"
      title="Scott Meadows"
    />
  
    <p>
      Howdy! I'm a passionate full-stack software engineer who loves learning new skills, writing elegant and simple code, and finding
      the best approaches to solving problems with technology. I've written programs in a variety of contexts including full stack web
      apps, computer games, and terminal applications. I look forward to growing myself and contributing to a larger team in my
      professional career as a software developer.
    </p>
  </article>
</section>

<style lang="sass">
  div
    width: 100%

  section
    min-height: 50vh
  
  article
    margin: 6rem 0
    display: flex
    gap: 1rem
    justify-content: center
    align-items: start

  img
    max-width: 35%
    object-fit: contain

  p
    margin: 0
    max-width: 40%
    font-size: 1.25em
</style>