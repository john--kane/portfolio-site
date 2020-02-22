<script>
  export let githubURL;
  export let linkedInURL;
  export let githubImage;
  export let linkedInImage;

  function githubURLClick() {
    window.location = githubURL;
  }
  function linkedInClick() {
    window.location = linkedInURL;
  }
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(to bottom, #24292e 50%, #0390c1 50%);
  }

  main > div {
    height: 100%;
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  div.linkedin {
    flex-grow: 4;
  }

  div.github {
    flex-grow: 4;
  }

  div.avatar {
    flex-grow: 1;
    cursor: default;
    display: flex;
    flex-direction: column;
  }
  div.avatar > img {
    height: 80px;
    width: 80px;
    vertical-align: middle;
    border-radius: 50%;
    display: none;
  }

  div.avatar .name {
    margin-top: 0;
  }

  div.avatar span {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    font-family: "Fira Code";
  }

  @media (min-width: 640px) {
    main {
      flex-direction: row;
      background: linear-gradient(to left, #0390c1 50%, #24292e 50%);
    }
    div.avatar > img {
      display: block;
    }
    div.avatar .name {
      margin-top: 2rem;
    }
  }
</style>

<main>
  <div on:click={githubURLClick} class="github animated bounceInLeft">
    <img src={githubImage} alt={githubURL} />
  </div>
  <div class="avatar">
    <img src="avatar.png" alt="John Kane" />
    <div class="name">
      <span class="animated fadeIn">John</span>
      <span class=" animated fadeIn">Kane</span>
    </div>

  </div>
  <div on:click={linkedInClick} class="linkedin animated bounceInRight">
    <img src={linkedInImage} alt={linkedInURL} />
  </div>
</main>
