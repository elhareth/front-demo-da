<template>
    <section id="contact" class="contact-us p-5 bg-success text-white">
        <div class="row">
            <div class="col-sm-12 col-md">
                <div class="card border-0 bg-transparent">
                    <div class="card-header">
                        <h2 class="card-title">تواصل معنا</h2>
                    </div>
                    <div class="card-body text-end">
                        <form @submit.prevent="sendMessage">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col">
                                        <label class="text-light" for="name">الاسم:</label>
                                        <input type="text" id="name" v-model="name" class="form-control">
                                    </div>
                                    <div class="col">
                                        <label class="text-light" for="phone">الهاتف:</label>
                                        <input type="tel" id="phone" v-model="phone" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="text-light" for="email">البريد الإلكتروني:</label>
                                <input type="email" id="email" v-model="email" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="text-light" for="message">رسالتك:</label>
                                <textarea id="message" v-model="message" class="form-control"></textarea>
                            </div>
                            <button type="submit" class="btn-send">
                                <span>إرسال</span>
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                        <font-awesome-icon icon="paper-plane" />
                                    </div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md pt-2">
                <div class="card border-0 bg-transparent">
                    <div class="card-body">
                        <h4 class="text-muted fo-classic"><font-awesome-icon icon="envelope" /> {{
                            $t('contact_section.email') }}
                        </h4>
                        <h3 class="text-light">{{ ('contact@diamon-arrow.com') }}</h3>
                    </div>
                </div>
                <div class="card border-0 bg-transparent">
                    <div class="card-body">
                        <h4 class="text-muted fo-classic"><font-awesome-icon icon="phone" /> {{
                            $t('contact_section.phone') }}</h4>
                        <h3 class="text-light" dir="ltr">{{ ('+249 99 123 1234') }}</h3>
                    </div>
                </div>
                <div class="card border-0 bg-transparent">
                    <div class="card-body">
                        <h4 class="text-muted fo-classic"><font-awesome-icon icon="location-dot" /> {{
                            $t('contact_section.address') }}</h4>
                        <h3 class="text-light">{{ ('Khartoum, Sudan') }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#contact button.btn-send {
    font-family: inherit;
    font-size: 20px;
    /* background: royalblue; */
    background: var(--bs-dark);
    color: var(--bs-success);
    padding: 0.4em 0.7em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
}

#contact button.btn-send span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
}

#contact button.btn-send svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

#contact button.btn-send:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
}

#contact button.btn-send:hover svg {
    color: var(--bs-light);
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

#contact button.btn-send:hover span {
    visibility: hidden;
    color: var(--bs-light);
    transform: translateX(5em);
}

#contact button.btn-send:active {
    transform: scale(0.95);
}

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}
</style>

<script>
export default {
    data() {
        return { name: "", email: "", message: "" };
    },
    methods: {
        sendMessage() {
            alert(`تم إرسال رسالتك بنجاح، ${this.name}!`);
        }
    }
};
</script>