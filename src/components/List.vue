<template>
    <div class>
        <article class="media" @click="gotoCreate">
            <figure class="media-left"></figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>新建</strong>
                        <br />新建redis主机连接
                    </p>
                </div>
            </div>
        </article>
        <article class="media" v-for="(item,i) in links" :key="i">
            <figure class="media-left"></figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{ item.name }}</strong>
                        <br />新建redis主机连接
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: []
        };
    },
    methods: {
        gotoCreate() {
            this.$router.push('/redis-create-link')
        }
    },
    mounted() {
        this.$utools.setExpendHeight(this.$el.clientHeight);
    }
};
</script>