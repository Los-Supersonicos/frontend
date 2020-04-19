<template>
  <header>
    <div class="header-area">
      <div id="sticky-header" class="main-header-area">
        <div class="container-fluid p-0">
          <div class="row align-items-center no-gutters">
            <div class="col-xl-2 col-lg-2">
              <div class="logo-img">
                <a href="#">
                  <img src="img/logo.png" style="width: 150px;"/>
                </a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8">
              <div class="main-menu d-none d-lg-block text-center">
                <nav>
                  <ul id="navigation">
                    <li>
                      <router-link :to="{ name: 'home' }" style="color: #3C3C3B;">Inicio</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'maps' }" style="color: #3C3C3B;">Mi Barrio</router-link>
                    </li>
                    <li>
                      <a v-b-modal.modal-1 style="color: #3C3C3B; cursor: pointer;">Necesito Ayuda</a>
                    </li>
                    <li>
                      <router-link :to="{ name: 'maps' }" style="color: #3C3C3B;">Puedo dar una mano</router-link>
                    </li>
                    <!--

                     <li>
                      <a href="#">pages <i class="ti-angle-down"></i></a>
                      <ul class="submenu">
                        <li>
                          <a href="portfolio_details.html">Portfolio details</a>
                        </li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">elements</a></li>
                      </ul>
                    </li>-->

                    <!-- <li>
                      <a href="#">blog <i class="ti-angle-down"></i></a>
                      <ul class="submenu">
                        <li><a href="#">blog</a></li>
                        <li><a href="#">single-blog</a></li>
                      </ul>
                    </li>-->
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-2 d-none d-lg-block">
              <div class="log_chat_area d-flex align-items-end">
                <span class="say_hi" v-if="$root.user">{{ $root.user.displayName }}</span>
                <a href="#" data-scroll-nav="0" class="say_hi" v-else @click.prevent="$root.login">Ingresar</a>
              </div>
                <a  style="float: right;" v-if="$root.user" href="#" @click.prevent="$root.logout">
                Logout
              </a>
            </div>
            </div>
            <div>

            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

