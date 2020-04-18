<template>
  <header>
    <div class="header-area ">
      <div id="sticky-header" class="main-header-area">
        <div class="container-fluid p-0">
          <div class="row align-items-center no-gutters">
            <div class="col-xl-2 col-lg-2">
              <div class="logo-img">
                <a href="#">
                  <!-- <img src="img/logo.png" alt="" /> -->
                  logo
                </a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8">
              <div class="main-menu  d-none d-lg-block text-center">
                <nav>
                  <ul id="navigation">
                    <li><a class="active" href="#">home</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li>
                      <a href="#">pages <i class="ti-angle-down"></i></a>
                      <ul class="submenu">
                        <li>
                          <a href="portfolio_details.html">Portfolio details</a>
                        </li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">elements</a></li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">blog <i class="ti-angle-down"></i></a>
                      <ul class="submenu">
                        <li><a href="#">blog</a></li>
                        <li><a href="#">single-blog</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-2 d-none d-lg-block">
              <div class="log_chat_area d-flex align-items-end">
                <a href="#" data-scroll-nav="0" class="say_hi">Say Hello</a>
              </div>
            </div>
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
