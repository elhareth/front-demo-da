<template>
    <section id="about" class="about-us p-5 text-center">
        <div class="container">
            <h2 class="fw-bold text-success">🌱 من نحن؟</h2>
            <p class="lead">
                عالم اليوم يتغير، والزراعة الذكية هي المفتاح لتحقيق الأمن الغذائي والاستدامة المالية. نحن في
                <strong>شركة السهم الماسي</strong> لا نقدم فرصًا فقط، بل نمهد الطريق لمستقبل أخضر، مربح، ومستدام.
            </p>

            <div class="row mt-4 align-items-stretch">
                <!-- رؤية الشركة -->
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h3 class="text-success">🔭 رؤيتنا</h3>
                            <p>نحو عالم يزدهر بالاستثمار الزراعي الذكي، حيث يصبح الاستدامة والابتكار محورًا رئيسيًا
                                لتحقيق النجاح.</p>
                        </div>
                    </div>
                </div>

                <!-- أهداف الشركة -->
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h3 class="text-success">🎯 أهدافنا</h3>
                            <ul class="list-unstyled text-end">
                                <li>✅ تحقيق نمو سنوي بنسبة 15% في العوائد الزراعية.</li>
                                <li>✅ دعم أكثر من 500 مستثمر في مشاريع مستدامة.</li>
                                <li>✅ الاستثمار في الابتكار الزراعي لتحسين الإنتاجية وتقليل التكاليف.</li>
                                <li>✅ خلق فرص جديدة تعزز الاقتصاد الأخضر.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- القيم الأساسية -->
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h3 class="text-success">💡 قيمنا</h3>
                            <p>نلتزم بالشفافية، الابتكار، والاستدامة لضمان تحقيق أفضل النتائج لمستثمرينا.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- قسم الإحصائيات -->
            <div class="feats mt-5">
                <h3 class="fw-bold text-light">📊 كيف نُحدث فرقًا؟</h3>
                <div class="row">
                    <div class="col-md-4">
                        <h4>📈 12-15%</h4>
                        <p>معدل العائد السنوي</p>
                    </div>
                    <div class="col-md-4">
                        <h4>🌍 100+ مشروع</h4>
                        <p>عدد المشاريع المدعومة</p>
                    </div>
                    <div class="col-md-4">
                        <h4>⭐ 95%</h4>
                        <p>نسبة رضا المستثمرين</p>
                    </div>
                </div>
            </div>

            <!-- زر دعوة لاتخاذ إجراء -->
            <div class="mt-4">
                <button class="btn btn-warning btn-lg">🚀 كن جزءًا من النجاح—ابدأ استثمارك اليوم!</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-us {
    background: url('@/assets/images/inv001.jpg') no-repeat center;
    background-size: cover;
    background-position: center;
    color: #fff;
}

p.lead {
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--theme-secondary);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
    font-family: var(--font-secondary);
    font-weight: 600;
}

.card {
    display: flex;
    flex-direction: column;
    border: none;
    transition: 0.3s ease-in-out;
    background-color: rgba(225, 225, 225, 0.9);
    height: 100%;
}

.card:hover {
    transform: scale(1.05);
}

.card-body {
    flex-grow: 1;
}

.card-body p,
.card-body ul {
    font-family: Cairo;
    font-size: large;
    letter-spacing: normal;
    vertical-align: center;
}


.feats {
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--theme-secondary);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
    font-family: var(--font-secondary);
    font-weight: 600;
    padding: 5px;
}

.feats h4 {
    font-size: 2rem;
    font-weight: bold;
}

.btn-lg {
    font-size: 18px;
    padding: 12px 24px;
}
</style>

<script>
export default {
    name: 'AboutSection'
}
</script>