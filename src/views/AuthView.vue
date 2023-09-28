<template>
  <div class="auth">
    <div class="auth__wrapper">
      <div class="auth__link-wrapper">
        <RouterLink class="auth__link" to="login">Login</RouterLink>
        <RouterLink class="auth__link" to="register">Register</RouterLink>
      </div>
      <div>
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    width: clamp(280px, 100%, 400px);
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__link-wrapper {
    display: flex;
    justify-content: space-around;
  }

  &__link {
    font-size: 50px;

    @media (max-width: 440px ) {
      font-size: 35px;
    }
  }
}

.router-link-active {
  padding: 10px;
  font-size: 55px;
  font-weight: bold;
  color: $font-color-secondary;
  border: 1px dotted $border-secondary;
  border-radius: 7px;

  @media (max-width: 440px ) {
      font-size: 40px;
    }
}
</style>
