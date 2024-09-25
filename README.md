# SIN Validator

## Project Overview

This project is a Simple SIN Validator built with Vue.js, Vite, and TypeScript.

    Rules
    - A valid SIN consists of exactly 9 digits and spaces.
    - Alphabaets and special characters are invalid.
    - If all nine digits are similar, that is also invalid.
    - Does a checksum valiation using Luhn Algorithm (as mentioned in project guidlines).

    Worflow
    - There is one just component 'SinValidatior.vue' which calls the 'ValidateSin.ts' validator from utils

## Setup Instructions

1. **Clone the repository**:
   git clone <repository-url>
   cd <directory>

2. **Install dependencies**:
    npm install

3. **Run**:
    npm run dev and go to localhost

4. **Run unit tests**:
    npm run test


