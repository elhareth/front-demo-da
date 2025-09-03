<template>
    <section id="investments" class="investment-opportunities p-2">
        <div class="conatainer-fluid container-sm py-3">
            <h2 class="text-center investment-label py-3 fo-secondary" data-aos="zoom-in" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="500">
                <font-awesome-icon :icon="['fas', 'money-bill-transfer']" />
                فرص الاستثمار المتاحة
            </h2>
            <div class="row g-3 my-2" style="overflow-x: hidden;">
                <div v-for="opportunity in investments" :key="opportunity.id" class="col-md-4" style="overflow-x: hidden;">
                    <div class="card shadow mx-0 my-auto" :data-aos="opportunity.animate" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="500">
                        <img :src="require('@/' + opportunity.image)" class="card-img-top recapt-image"
                            alt="Investment">
                        <div class="card-body">
                            <h5 class="card-title">{{ opportunity.title }}</h5>
                            <p class="card-text">{{ opportunity.description }}</p>
                            <button class="btn btn-success">المزيد من التفاصيل</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.recapt-image {
    height: 220px;
}
</style>

<script>
export default {
    data() {
        return {
            investments: [
                {
                    id: 1,
                    title: "مشروع الزراعة العضوية",
                    description: "استثمر في المزارع العضوية الصديقة للبيئة، بعائد سنوي يصل إلى 12%.",
                    image: "assets/images/farming.jpg",
                    animate: "zoom-in-left"
                },
                {
                    id: 2,
                    title: "التكنولوجيا الزراعية الذكية",
                    description: "الاستثمار في أنظمة الزراعة الذكية لزيادة الإنتاج وتقليل التكاليف.",
                    image: "assets/images/technofarm.jpg",
                    animate: "zoom-in-down"
                },
                {
                    id: 3,
                    title: "مشاريع الأسمدة و مكافحة الآفات ",
                    description: "الاستثمار في الأسمدة العضوية و أساليب المكافحة الحديثة الآفات لحصاد أكثر وفرة و جودة",
                    image: "assets/images/defend.jpg",
                    animate: "zoom-in-right"
                }
            ]
        };
    }
};
</script>