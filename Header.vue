<template>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link :to="{name: 'welcome'}" class="nav-link" exact>Welcome</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact-us" class="nav-link">Contact us</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link">Users</router-link>
      </li>
      
      <!-- <li class="ml-auto">
        <iframe src="https://player.vimeo.com/video/247494684" style="" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-vimeo-tracked="true" data-ready="true"></iframe>
      </li> -->

    </ul>
</template>
