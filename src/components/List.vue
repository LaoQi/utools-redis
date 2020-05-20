<template>
    <div class>
        <article class="media" @click="gotoCreate">
            <figure class="media-left"></figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{ $locales.list_show_create_title }}</strong>
                        <br />{{ $locales.list_show_create_description }}
                    </p>
                </div>
            </div>
        </article>
        <article class="media" v-for="(item,i) in connections" :key="i">
            <figure class="media-left"></figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{ item.name }}</strong>
                        <br />{{ item.host + ':' + item.port }}
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

import { utools } from '../utils';
import storage from '../storage';

export default {
    data() {
        return {
            connections: []
        };
    },
    methods: {
        getConnections() {
            this.connections = storage.getAllConnections();
        },
        gotoCreate() {
            this.$router.push('/redis-create-connection').catch(err => {err})
        },
        resize() {
            utools.setExpendHeight(this.$el.clientHeight);
        }
    },
    mounted() {
        this.resize();
        this.getConnections();
        this.$nextTick(this.resize);
    }
};
</script>