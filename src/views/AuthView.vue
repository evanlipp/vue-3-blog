<template>
  <div class="auth">
    <div class="auth__link-wrapper">
      <RouterLink class="auth__link" to="login">Login</RouterLink>
      <RouterLink class="auth__link" to="register">Register</RouterLink>
    </div>
    <div class="auth__inputs-wrapper">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40% 60%;
  row-gap: 30px;

  &__link-wrapper {
    grid-column: 5 / 9;
    align-self: end;
    justify-self: center;
    display: flex;
    gap: 40px;
  }

  &__link {
    font-size: clamp(1.25rem, 2.5vw + 1rem, 3.438rem);
    transition: all 100ms;
  }

  &__inputs-wrapper {
    grid-area: 2 / 5 / 2 / 9;
    width: clamp(280px, 40vw, 500px);

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
