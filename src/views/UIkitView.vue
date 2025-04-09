<template>
  <div>
    <h1 class="uikit__title">UI-kit</h1>
    <section class="uikit__section">
      <div class="example">
        <h3 class="example__title">Primary Button</h3>
        <UIButton variant="primary">Войти</UIButton>
        <UIButton variant="primary" disabled>Войти</UIButton>
      </div>
      <div class="example">
        <h3 class="example__title">Secondary Button</h3>
        <UIButton variant="secondary">Войти</UIButton>
        <UIButton variant="secondary" disabled>Войти</UIButton>
      </div>
      <div class="example">
        <h3 class="example__title">Round Button</h3>
        <UIRoundButton>FR</UIRoundButton>
      </div>
      <div class="example">
        <h3 class="example__title">Icon Button</h3>
        <UIIconButton :icon="ArrowIcon" />
        <UIIconButton :icon="ArrowIcon" disabled />
      </div>
      <div class="example">
        <h3 class="example__title">Progress Button</h3>
        <UIProgressButton status="available" />
        <UIProgressButton status="current" />
        <UIProgressButton status="passed" />
        <UIProgressButton status="available" disabled />
      </div>
      <div class="example">
        <h3 class="example__title">Side Tab</h3>
        <UISideTab :item-number="1" :title="'Классная тема'" :status="'passed'" />
        <UISideTab class="current" :item-number="2" :title="'Наша тема'" :status="'available'" />
        <UISideTab :item-number="3" :title="'Норм тема'" :status="'available'" />
        <UISideTab class="" :item-number="4" :title="'Хуйня тема'" :status="'closed'" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import UIIconButton from '@/components/UIkit/UIIconButton.vue';
import UIButton from '../components/UIkit/UIButton.vue';
import UIProgressButton from '../components/UIkit/UIProgressButton.vue';
import UIRoundButton from '../components/UIkit/UIRoundButton.vue';
import UISideTab from '../components/UIkit/UISideTab.vue';
import ArrowIcon from '@/assets/images/icons/arrow-left.svg?component';
</script>

<style scoped lang="scss">
.uikit {
  &__title {
    text-align: center;
  }
  &__section {
    padding: 0 50px;
    display: flex;

    gap: 40px;

    .example {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      &__title {
        text-align: center;
      }
    }
  }
}
</style>
