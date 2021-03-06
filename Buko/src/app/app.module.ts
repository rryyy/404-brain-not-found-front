import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GetStartedPage } from '../pages/get-started/get-started';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PostPage } from '../pages/post/post';
import { FeelingPage } from '../pages/feeling/feeling';
import { CommentPage } from '../pages/comment/comment';
import { WritecommentPage } from '../pages/writecomment/writecomment';
import { AboutappPage } from '../pages/aboutapp/aboutapp';
import { MapsPage } from '../pages/maps/maps';
import { BlankPage } from '../pages/blank/blank';
import { RespondentsPage } from '../pages/respondents/respondents';
import { FeedbackSortPage } from '../pages/feedback-sort/feedback-sort';
import { FeedbacknegaPage } from '../pages/feedbacknega/feedbacknega';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
 import { HttpClientModule } from '@angular/common/http'; 
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { Facebook } from '@ionic-native/facebook';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
 import { Camera } from '@ionic-native/camera';
 import { Base64 } from '@ionic-native/base64';

import { SigninProvider } from '../providers/signin/signin';
import { SignupProvider } from '../providers/signup/signup';
import { PostsProvider } from '../providers/posts/posts';
import { AnalyticsProvider } from '../providers/analytics/analytics';
import { CommentProvider } from '../providers/comment/comment';

import { MomentPipe } from '../pipes/moment/moment';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GetStartedPage,
    SignupPage,
    SigninPage,
    DashboardPage,
    PostPage,
    FeelingPage,
    CommentPage,
    WritecommentPage,
    AboutappPage,
    MapsPage,
    BlankPage,
    MomentPipe,
    RespondentsPage,
    FeedbackSortPage,
    FeedbacknegaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GetStartedPage,
    SignupPage,
    SigninPage,
    DashboardPage,
    PostPage,
    FeelingPage,
    CommentPage,
    WritecommentPage,
    AboutappPage,
    MapsPage,
    BlankPage,
    RespondentsPage,
    FeedbackSortPage,
    FeedbacknegaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    Network,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SigninProvider,
    SignupProvider,
    PostsProvider,
    AnalyticsProvider,
    CommentProvider,
    ConnectivityServiceProvider,
    Camera,
    Base64
  ]
})
export class AppModule {}
