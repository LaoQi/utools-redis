<template>
    <div class="container is-fluid">
        <div class="field">
            <label class="label">{{ $locales.create_form_name_label }}</label>
            <div class="control">
                <input class="input" type="text" v-model="params.name" :placeholder="$locales.create_form_name_placeholder" />
            </div>
        </div>

        <div class="field">
            <label class="label">{{ $locales.create_form_host_label }}</label>
            <div class="control">
                <input class="input" type="text" v-model="params.host" :placeholder="$locales.create_form_host_placeholder" />
            </div>
        </div>

        <div class="field">
            <label class="label">{{ $locales.create_form_port_label }}</label>
            <div class="control">
                <input class="input" type="number" v-model="params.port" :placeholder="$locales.create_form_port_placeholder" />
            </div>
        </div>

        <div class="field">
            <label class="label">{{ $locales.create_form_password_label }}</label>
            <div class="control">
                <input class="input" type="password" v-model="params.password" :placeholder="$locales.create_form_password_placeholder" />
            </div>
        </div>

        <!-- <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input
                    class="input is-danger"
                    type="email"
                    placeholder="Email input"
                    value="hello@"
                />
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
        </div> -->

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="save">{{ $locales.create_form_confirm_button }}</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">{{ $locales.create_form_test_connection_button }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { utools, DEFAULT_HEIGHT } from "../utils";
import storage from '../storage';

export default {
    data() {
        return {
            params: {
                name: null,
                host: null,
                port: 6379,
                password: null
            }
        };
    },
    methods: {
        // @todo
        verify() {
            if (!this.params.name) {
                
            }
        },
        save() {
            storage.putConnection(JSON.parse(JSON.stringify(this.params)));
            this.$router.push('/redis').catch(err => {err});
        }
    },
    mounted() {
        utools.setExpendHeight(DEFAULT_HEIGHT);
    }
};
</script>