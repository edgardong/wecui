<template>
  <div class="mobile-nav-group">
    <div v-for="(group,index) in groups" :key="index" class="mobile-nav-group">
      <div class="mobile-nav-group__title mobile-nav-group__basetitle" :class="{ 'mobile-nav-group__title--open': group.isOpen }" @click="group.isOpen = !group.isOpen">
      {{group.groupName}}
      </div>
      <div class="mobile-nav-group__list-wrapper" :class="{ 'mobile-nav-group__list-wrapper--open': group.isOpen }">
        <ul class="mobile-nav-group__list" :class="{ 'mobile-nav-group__list--open': group.isOpen }">
          <div v-for="(navItem,index) in group.list" :key="index">
            <li class="mobile-nav-group__title" v-if="!navItem.disabled">
              <router-link   active-class="active"  :to="base + navItem.path"> <p> {{ navItem.title }} </p></router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"MobileNav",
  props: {
    groups: {
      type: Array,
      default: () => {
        return [];
      }
    },
    base: String
  },
  data() {
    return {
      // isOpen: false
    };
  }
};
</script>

<style lang="postcss">
@component-namespace mobile {
  @b nav-group {
    border-radius: 2px;
    margin-bottom: 3px;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);

    @e basetitle {
      padding-left: 20px;
    }

    @e title {
      font-size: 16px;
      color: #333;
      line-height: 56px;
      position: relative;
      user-select: none;

      @m open {
        color: #38f;
      }

      a {
        color: #333;
        display: block;
        user-select: none;
        padding-left: 20px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &:active {
          background: #ECECEC;
        }

        > p {
          border-top: 1px solid #e5e5e5;
        }
      }
    }

    @e list-wrapper {
      height: 0;
      overflow: hidden;

      @m open {
        height: auto;
      }
    }

    @e list {
      transform: translateY(-50%);
      transition: transform .2s ease-out;

      @m open {
        transform: translateY(0);
      }
    }

    li {
      list-style: none;
    }

    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
  }
}
</style>