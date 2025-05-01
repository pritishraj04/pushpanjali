<script>
    const { message, type = 'success', isVisible = false } = $props();

  let classes = $state('');

  classes = type === 'success' ? 'notification success' : 'notification failure';
</script>

{#if isVisible}
  <div class={classes}>
    {message}
  </div>
{/if}

<style>
  .notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    z-index: 200;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .notification.success {
    background-color: #4caf50;
  }

  .notification.failure {
    background-color: #f44336;
  }
</style>