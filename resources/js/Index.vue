<template>
    <div>
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'second'}">second</router-link>
            <router-view>
                    
            </router-view>
    </div>
    
</template>