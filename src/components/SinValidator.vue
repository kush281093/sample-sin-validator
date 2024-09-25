<template>
    <div>
        <h3>SIN Validator</h3>
        <input v-model="sin" @input="handleSINValidation" placeholder="Enter SIN" />
        <p v-if="error" class="invalid">{{ error }}</p>
        <p v-if="!error && isValid !== null" :class="isValid ? 'valid' : 'invalid'">
            {{ isValid ? 'Valid SIN' : 'Invalid SIN' }}
        </p>
    </div>
</template>
  
<script lang="ts">

import { ref } from 'vue';
import { ValidateSIN } from '../utils/ValidateSin.ts';

export default {
    setup() {
        const sin = ref<string>('');
        const error = ref<string | null>(null);
        const isValid = ref<boolean | null>(null);

        // Function to handle validation on input
        const handleSINValidation = () => {
            const validationResult = ValidateSIN(sin.value);
            error.value = validationResult.error;
            isValid.value = validationResult.isValid;
        };

        return {
            sin,
            error,
            isValid,
            handleSINValidation
        };
    }
};
</script>

<style scoped>
    .valid {
        color: green;
    }

    .invalid {
        color: red;
    }
</style>
  