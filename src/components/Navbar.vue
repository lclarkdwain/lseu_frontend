<template>
  <v-toolbar app class="elevation-2">
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <a href="/"><img :src="require('@/assets/logo.png')" alt="lseu" height="40"></a>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat>Degree Programs</v-btn>
      <v-btn flat>Online Courses</v-btn>
      <v-btn flat>Locations</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn
      depressed
    >
      Login
    </v-btn>
    <v-btn
      depressed
      color="secondary"
    >
      Create Account
    </v-btn>
    <v-btn
      color="primary"
    >
      Apply Now
    </v-btn>
    </v-toolbar>
</template>