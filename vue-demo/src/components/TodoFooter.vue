<template>
    <div style="text-align: left; padding-left: 12px;">
        <div class="form-check">
            <slot name="check"></slot>
            <slot name="count"></slot>
            <slot name="del"></slot>
        </div>
    </div>
</template>


<script>
export default {
    name: 'TodoFooter'
}
</script>

<style scoped>

</style>