<template>
    <section id="hero" class="hero-section d-flex align-items-center justify-content-center text-white text-center">
        <div data-aos="fade-up" data-aos-delay="500" class="overlay container-fluid pt-5 pb-1">
            <h1 class="display-4 fw-bold mt-5 pt-5 pb-2">{{ $t('hero_section.primary_line') }}</h1>
            <p class="lead w-md-50 mx-auto py-2 desc-line">{{ $t('hero_section.secondary_line') }}</p>
            <!-- <a class="btn btn-join btn-lg mt-3" href="#investments">{{ $t('hero_section.join_button') }}</a> -->
            <button class="mt btn btn-start" onclick="document.getElementById('investments').scrollIntoView({ behavior: 'smooth' });">
                <span>{{ $t('hero_section.join_button') }}</span>
            </button>
            <div id="stats" class="container-md p-5 mt-5">
                <div class="row g-3">
                    <div class="col-md-3" v-for="(item, index) in stats" :key="index">
                        <div class="card shadow-sm bg-semi-transparent stat">
                            <div class="card-body">
                                <h2 class="display-6 fw-bold">{{ formatNumber(item.current) }}</h2>
                                <h3 class="card-text text-light">{{ $t('stats_section.' +
                                    (item.label).trim().toLowerCase()) }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
    gsap.from('.hero-content', { opacity: 0, y: -50, duration: 1 });
});
</script>



<style scoped>
.hero-section {
    /* min-height: 100vh; */
    background-image: url('@/assets/hero.jpg');
    background-size: cover;
    background-position: center;
    /* position: relative; */
}

.hero-section .desc-line {
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--theme-secondary);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
    font-family: var(--font-secondary);
    font-weight: 600;
}

.overlay {
    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%; */
    min-height: 100%;
    background-color: rgba(0, 60, 0, 0.5);
    padding: 3rem;
    border-radius: 1rem;
    color: white;
}

#hero button.btn-start {
    display: inline-block;
    /* width: 150px; */
    height: 50px;
    border-radius: 10px;
    border: 2px solid var(--bs-success);
    color: var(--theme-primary);
    font-weight: 500;
    font-size: large;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in;
    z-index: 1;
}
#hero button.btn-start:hover {
    color: var(--bs-light);
    font-weight: 500;
}

#hero button.btn-start::before,
#hero button.btn-start::after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
}

#hero button.btn-start::before {
    left: -10px;
    background: var(--theme-primary);
}

#hero button.btn-start::after {
    right: -10px;
    background: var(--theme-primary);
}

#hero button.btn-start:hover::before,
#hero button.btn-start:hover::after {
    width: 58%;
}


.stats {
    display: flex;
    justify-content: space-around;
    padding: 3rem 2rem;
    background-color: #f4f4f4;
}

.stat {
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.stat h2 {
    font-size: 2.5rem;
    color: #2f8f2f;
}

.stat p {
    font-size: 1.2rem;
    color: #555;
}


.stat:hover {
  transform: translateY(-10px); /* Moves the card up */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Adds a glow effect */
  background-color: var(--theme-primary); /* Slightly change the background */
}

.stat:hover h2 {
    color: var(--bs-dark);
}

</style>

<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'HeroSection',
    setup() {
        const { t } = useI18n();
        return { t };
    },
    data() {
        return {
            stats: [
                { number: 15, label: 'Partners', current: 0 },
                { number: 10000, label: 'Investors', current: 0 },
                { number: 35, label: 'Projects', current: 0 },
                { number: 75300000, label: 'Budget', current: 0 }
            ]
        }
    },
    mounted() {
        this.stats.forEach((stat) => {
            const duration = 3000;
            const startTime = performance.now();
            const animate = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                stat.current = Math.floor(progress * stat.number);
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        });
    },
    methods: {
        formatNumber(value) {
            if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1) + 'B'
            if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M'
            if (value >= 1_000) return (value / 1_000).toFixed(1) + 'K'
            return value.toLocaleString()
        }
    }
};

</script>