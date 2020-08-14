FROM centos:7.2.1511

# node.js
RUN yum install -y gcc-c++ make
RUN curl -sL https://rpm.nodesource.com/setup_8.x | bash -
RUN yum install -y nodejs

# chromium
RUN mkdir /home/chromium
RUN yum install -y unzip
RUN yum install -y pango.x86_64 \
  libXcomposite.x86_64 \
  libXcursor.x86_64 \
  libXdamage.x86_64 \
  libXext.x86_64 \
  libXi.x86_64 \
  libXtst.x86_64 \
  cups-libs.x86_64 \
  libXScrnSaver.x86_64 \
  libXrandr.x86_64 \
  GConf2.x86_64 \
  alsa-lib.x86_64 \
  atk.x86_64 \
  gtk3.x86_64 \
  ipa-gothic-fonts \
  xorg-x11-fonts-100dpi \
  xorg-x11-fonts-75dpi \
  xorg-x11-utils \
  xorg-x11-fonts-cyrillic \
  xorg-x11-fonts-Type1 \
  xorg-x11-fonts-misc

# puppeteer実行時に発生する以下のエラーを解消するためNSSを更新する
# /lib64/libnss3.so: version `NSS_3.22' not found (required by /home/chromium/618750/chrome-linux/chrome)
RUN yum update -y nss
