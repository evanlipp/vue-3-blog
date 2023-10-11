<template>
  <div class="auth">
    <div class="auth__link-wrapper">
      <RouterLink class="auth__link" to="login">Login</RouterLink>
      <RouterLink class="auth__link" to="register">SignUp</RouterLink>
    </div>
    <div class="auth__inputs-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  height: 100%;
  display: grid;
  grid-template-rows: 0.8fr 1.2fr;
  row-gap: 30px;

  &__link-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 40px;
  }

  &__inputs-wrapper {
    justify-self: center;
    width: clamp(280px, 40vw, 480px);
  }

  &__link {
    font-size: clamp(1.25rem, 2.5vw + 1rem, 3.438rem);
    transition: all 100ms;
  }
}

.router-link-active {
  padding: 10px;
  font-size: clamp(1.563rem, 3vw + 1rem, 3.75rem);
  font-weight: bold;
  color: $font-color-secondary;
  border: 1px dotted $border-secondary;
  border-radius: 7px;
  transform: scale(1.2);
}
</style>
