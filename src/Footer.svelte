<script>

</script>

<div class="footer-container">
    <h2 class="footer-logo">Cryptocurrency</h2>
    <ul class="footer-content">
        <li><i class="fab fa-github"></i><a href="https://github.com/sythe08/sythe08">Github</a></li>
        <li><i class="fab fa-facebook"></i><a href="https://facebook.com/benjiebengarcia">Facebook</a></li>
        <li><i class="fas fa-user-circle"></i><a href="/">Portfolio</a></li>
    </ul>
</div>

<style scoped>
    .footer-container {
        position: relative;
        grid-column: 2/3;
        display: grid;
        grid-gap: 20%;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        width: 100%;
        background: var(--secondary);
    }

    .footer-logo {
        justify-self: center;
        align-self: center;
        font-size: 0.5rem;
        font-weight: 600;
        color: white;
    }

    .footer-content {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        padding: 10px 10px;
        flex-wrap: wrap;
    }

    .footer-content li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: transform 0.5s ease-in;
        margin: 5px;
    }

    .footer-content li a {
        font-size: 0.4rem;
        color: var(--primary);
    }

    .footer-content li:hover {
        transform: translateY(10px);
    }

    .footer-content li i {
        color: var(--primary);
    }
</style>