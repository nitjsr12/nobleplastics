import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Script from 'next/script';



function MyApp({ Component, pageProps }) {
  return (
   <>
     <Script strategy="afterInteractive" id="google-code"
        src={`https://www.googletagmanager.com/gtag/js?id='G-BB38C29RKY'`}></Script>
     
     <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-BB38C29RKY');
        `}</Script>
   
     <Script id="google-tag-manager-start">
     {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer',''GTM-PG3D8K3'');
        `}
     </Script>
     


      <Component {...pageProps} />
      </>
  );
}

export default MyApp;