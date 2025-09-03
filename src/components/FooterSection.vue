<template>
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p class="text-light">{{ $t('footer_section.copy') }}</p>

            <div class="socials">
                <a href="#">Facebook</a> |
                <a href="#">LinkedIn</a> |
                <a href="#">Twitter</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer.footer {
    background: #003300;
    color:white;
    text-align: center;
    padding: 2rem;
}

a {
    color: #90ee90;
    margin: 0 0.5rem;
    text-decoration: none;
}
</style>