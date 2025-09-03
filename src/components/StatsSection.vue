<template>
    <section id="stats" class="py-5 bg-light">
        <div class="container text-center">
            <div class="row g-4">
                <div class="col-md-3" v-for="(item, index) in stats" :key="index">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h2 class="display-6 text-success fw-bold">{{ formatNumber(item.current) }}</h2>
                            <h3 class="card-text">{{ $t('stats_section.' + (item.label).trim().toLowerCase()) }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'StatsSection',
    setup() {
        const { t } = useI18n();
        return { t };
    },
    data() {
        return {
            stats: [
                { number: 25000, label: 'Partners', current: 0 },
                { number: 100000, label: 'Investors', current: 0 },
                { number: 35, label: 'Projects', current: 0 },
                { number: 10000000, label: 'Budget', current: 0 }
            ]
        }
    },
    mounted() {
        this.stats.forEach((stat) => {
            const duration = 1500;
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

<style scoped>
.stats {
    display: flex;
    justify-content: space-around;
    padding: 3rem 2rem;
    background-color: #f4f4f4;
}

.stat {
    text-align: center;
}

.stat h2 {
    font-size: 2.5rem;
    color: #2f8f2f;
}

.stat p {
    font-size: 1.2rem;
    color: #555;
}
</style>
