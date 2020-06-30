import Head from 'next/head'
import Link from 'next/link'

import Counter from '../components/Counter'
import Footer from '../components/Footer'
import BackToTopLink from '../components/BackToTopLink'

export default function MetaTags() {

  return (
    <div className="container">
      <Head>
        <title>Useful Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        &#9998;Useful Links
        </h1>
        <div className="grid">
          <ul className="links-list">
          <li>
            <h4>Photos</h4>
            <ul>
              <li><a href="https://unsplash.com/" rel="noopener noreferrer" target="_blank">Unsplash</a></li>
              <li><a href="https://www.lifeofpix.com/" rel="noopener noreferrer" target="_blank">Life of pix</a></li>
              <li><a href="https://www.pexels.com/" rel="noopener noreferrer" target="_blank">Pexels</a></li>
              <li><a href="https://burst.shopify.com/" rel="noopener noreferrer" target="_blank">Burst</a></li>
              <li><a href="https://magdeleine.co/" rel="noopener noreferrer" target="_blank">Magdeleine</a></li>
              <li><a href="https://pixabay.com/" rel="noopener noreferrer" target="_blank">Pixabay</a></li>
              <li><a href="https://stocksnap.io/" rel="noopener noreferrer" target="_blank">Stocksnap</a></li>
              <li><a href="https://www.pexels.com/" rel="noopener noreferrer" target="_blank">Picjumbo</a></li>
              <li><a href="https://picjumbo.com/" rel="noopener noreferrer" target="_blank">Pakutaso(Japanese)</a></li>
            </ul>
          </li>

          <li>
            <h4>Illustrations</h4>
            <ul>
              <li><a href="https://www.freepik.com/" rel="noopener noreferrer" target="_blank">Freepik</a></li>
              <li><a href="https://www.drawkit.io/" rel="noopener noreferrer" target="_blank">Drawkit</a></li>
              <li><a href="https://undraw.co/" rel="noopener noreferrer" target="_blank">Undraw</a></li>
              <li><a href="https://www.humaaans.com/" rel="noopener noreferrer" target="_blank">Humaaans</a></li>
              <li><a href="https://www.vectorportal.com/" rel="noopener noreferrer" target="_blank">Vectorportal</a></li>
              <li><a href="https://www.vectorstock.com/" rel="noopener noreferrer" target="_blank">VectorStock</a></li>
              <li><a href="https://www.vecteezy.com/" rel="noopener noreferrer" target="_blank">Vecteezy</a></li>
              <li><a href="https://www.opendoodles.com/" rel="noopener noreferrer" target="_blank">Open Doodles</a></li>
            </ul>
          </li>

          <li>
            <h4>Icons</h4>
            <ul>
              <li><a href="https://icomoon.io/#preview-free" rel="noopener noreferrer" target="_blank">IcoMoon</a></li>
              <li><a href="https://orioniconlibrary.com/" rel="noopener noreferrer" target="_blank">Orion</a></li>
              <li><a href="https://goodstuffnononsense.com/" rel="noopener noreferrer" target="_blank">Good Stuff No Nonsense</a></li>
              <li><a href="https://iconmonstr.com/" rel="noopener noreferrer" target="_blank">Icomonstr</a></li>
              <li><a href="https://thenounproject.com/" rel="noopener noreferrer" target="_blank">Noun Project</a></li> 
              <li><a href="https://pictonic.co/" rel="noopener noreferrer" target="_blank">Pictonic</a></li>
              <li><a href="https://www.flaticon.com/" rel="noopener noreferrer" target="_blank">Flaticon</a></li>
              <li><a href="https://thenounproject.com/" rel="noopener noreferrer" target="_blank">Icons8</a></li>
              <li><a href="https://icons8.com/" rel="noopener noreferrer" target="_blank">Iconscout</a></li>
              <li><a href="https://fontawesome.com/" rel="noopener noreferrer" target="_blank">Font Awesome</a></li>
              <li><a href="https://www.iconfinder.com/" rel="noopener noreferrer" target="_blank">Iconfinder</a></li>
              <li><a href="https://www.pixellove.com/" rel="noopener noreferrer" target="_blank">PixelLove</a></li>
              <li><a href="https://graphicburger.com/" rel="noopener noreferrer" target="_blank">Graphic Burger</a></li>
              <li><a href="https://smashicons.com/" rel="noopener noreferrer" target="_blank">Smashicons</a></li>
              <li><a href="https://pngtree.com/" rel="noopener noreferrer" target="_blank">Pngtree</a></li>
              <li><a href="https://freeicons.io/" rel="noopener noreferrer" target="_blank">Free icons</a></li>
              <li><a href="https://useiconic.com/" rel="noopener noreferrer" target="_blank">Useiconic</a></li>
              <li><a href="https://nucleoapp.com/" rel="noopener noreferrer" target="_blank">Nucleoapp</a></li>
              <li><a href="https://friconix.com/" rel="noopener noreferrer" target="_blank">Friconix</a></li>
              <li><a href="https://icooon-mono.com/?lang=en" rel="noopener noreferrer" target="_blank">ICOOON MONO</a></li>
              <li><a href="https://www.utf8icons.com/subsets/dingbats" rel="noopener noreferrer" target="_blank">Dingbats</a></li> 
            </ul>
          </li>

          <li>
            <h4>Free Fonts</h4>
            <ul>
              <li><a href="https://fonts.google.com/" rel="noopener noreferrer" target="_blank">Google Fonts</a></li>
              <li><a href="https://www.dafont.com/" rel="noopener noreferrer" target="_blank">DaFont</a></li>
              <li><a href="http://www.abstractfonts.com/" rel="noopener noreferrer" target="_blank">Abstract Fonts</a></li>
              <li><a href="https://www.fontsquirrel.com/" rel="noopener noreferrer" target="_blank">Font Squirrel</a></li>
              <li><a href="https://www.fontspace.com/" rel="noopener noreferrer" target="_blank">FontSpace</a></li>
              <li><a href="https://fontstruct.com/" rel="noopener noreferrer" target="_blank">FontStruct</a></li> 
              <li><a href="https://www.1001fonts.com/" rel="noopener noreferrer" target="_blank">1001 Fonts</a></li> 
              <li><a href="https://www.urbanfonts.com/" rel="noopener noreferrer" target="_blank">Urban Fonts</a></li>
            </ul>
          </li>

          <li>
            <h4>Images Compression</h4>
            <ul>
              <li><a href="https://tinypng.com/" rel="noopener noreferrer" target="_blank">TinyPng</a></li>
            </ul>
          </li>

          <li>
            <h4>Website Analysis</h4>
            <ul>
              <li><a href="https://developers.google.com/speed/pagespeed/insights/" rel="noopener noreferrer" target="_blank">Google Speed Insights</a></li>
              <li><a href="https://tools.pingdom.com/" rel="noopener noreferrer" target="_blank">Pingdom Tools</a></li>
              <li><a href="https://www.webpagetest.org/" rel="noopener noreferrer" target="_blank">WEBPAGETEST</a></li>  
            </ul>
          </li>

          <li>
            <h4>For Developers</h4>
            <ul>
              <li><a href="https://repl.it/" rel="noopener noreferrer" target="_blank">Repl</a></li>
              <li><a href="https://codeshare.io/" rel="noopener noreferrer" target="_blank">Codeshare</a></li>
              <li><a href="https://devhints.io/" rel="noopener noreferrer" target="_blank">Devhints</a></li>
              <li><a href="https://domainr.com/" rel="noopener noreferrer" target="_blank">Domainr(Domain name search)</a></li>
              <li><a href="https://codinghub.tips/" rel="noopener noreferrer" target="_blank">Coding hub tips</a></li> 
              <li><a href="https://cunningbot.com/" rel="noopener noreferrer" target="_blank">Cunning bot(Domain Name Generator and Search Engine)</a></li>
              <li><a href="https://www.codewars.com/" rel="noopener noreferrer" target="_blank">Codewars</a></li>
              <li><a href="https://dbdiagram.io/home" rel="noopener noreferrer" target="_blank">Dbdiagram(Database Relationship Diagrams Design Tool)</a></li>
              <li><a href="https://caniuse.com/" rel="noopener noreferrer" target="_blank">Can I Use</a></li>
              <li><a href="https://enjoycss.com/" rel="noopener noreferrer" target="_blank">Enjoy CSS</a></li>
              <li><a href="https://www.htmlwasher.com/" rel="noopener noreferrer" target="_blank">HTML Washer</a></li>
              <li><a href="https://validator.w3.org/" rel="noopener noreferrer" target="_blank">Markup Validator</a></li>
              <li><a href="https://cloudcraft.co/" rel="noopener noreferrer" target="_blank">Cloudcraft(Draw AWS diagrams)</a></li>
              <li><a href="https://fontflipper.com/upload" rel="noopener noreferrer" target="_blank">Font Flipper</a></li>
            </ul>
          </li>

          <li>
            <h4>Free HTML Templates</h4>
            <ul>
              <li><a href="https://html5up.net/" rel="noopener noreferrer" target="_blank">html5up.net</a></li>
              <li><a href="https://templated.co/" rel="noopener noreferrer" target="_blank">templated.co</a></li>
              <li><a href="https://freehtml5.co/" rel="noopener noreferrer" target="_blank">freehtml5.co</a></li>
              <li><a href="https://mobirise.com/" rel="noopener noreferrer" target="_blank">mobirise.com</a></li>
              <li><a href="https://uideck.com/" rel="noopener noreferrer" target="_blank">uideck.com</a></li>
            </ul>
          </li>

          <li>
            <h4>Wireframing &amp; Mock-up</h4>
            <ul>
              <li><a href="https://www.figma.com/" rel="noopener noreferrer" target="_blank">Figma</a></li>
              <li><a href="https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=en" rel="noopener noreferrer" target="_blank">VisBug(Chrome Exstension)</a></li>
            </ul>
          </li>

          <li>
            <h4>Color Pallete</h4>
            <ul>
              <li><a href="https://color.adobe.com/create/color-wheel/" rel="noopener noreferrer" target="_blank">Adobe Color</a></li>
              <li><a href="https://materialuicolors.co/" rel="noopener noreferrer" target="_blank">materialuicolors</a></li>
            </ul>
          </li>

          <li>
            <h4>Practice Front end Skills or Challenge</h4>
            <ul>
              <li><a href="https://www.frontendmentor.io/" rel="noopener noreferrer" target="_blank">Front end Mentor</a></li>
              <li><a href="https://codier.io/" rel="noopener noreferrer" target="_blank">Codier</a></li>
              <li><a href="https://www.acefrontend.com/" rel="noopener noreferrer" target="_blank">Ace Front End</a></li>
              <li><a href="https://cssbattle.dev/" rel="noopener noreferrer" target="_blank">CSS Battle</a></li>
              <li><a href="https://100dayscss.com/" rel="noopener noreferrer" target="_blank">100 Days CSS Challenge</a></li>
            </ul>
          </li>

          <li>
            <h4>Regular Expressions(Regex)</h4>
            <ul>
              <li><a href="https://regexr.com/" rel="noopener noreferrer" target="_blank">RegExr</a></li>
            </ul>
          </li>

          <li>
            <h4>APIs</h4>
            <ul>
              <li><a href="https://www.metaweather.com/" rel="noopener noreferrer" target="_blank">MetaWeather</a></li>
              <li><a href="http://numbersapi.com/" rel="noopener noreferrer" target="_blank">Numbers API</a></li>
              <li><a href="https://openweathermap.org/api" rel="noopener noreferrer" target="_blank">OpenWeatherMap API</a></li>
              <li><a href="https://zippopotam.us/" rel="noopener noreferrer" target="_blank">Zippopotamus</a></li>      
              <li><a href="https://jsonplaceholder.typicode.com/" rel="noopener noreferrer" target="_blank">JSONPlaceholder</a></li>
              <li><a href="https://www.coingecko.com/en" rel="noopener noreferrer" target="_blank">coinGecko</a></li>
              <li><a href="https://quotes.rest/" rel="noopener noreferrer" target="_blank">Quotes REST API</a></li>
              <li><a href="https://insomnia.rest/" rel="noopener noreferrer" target="_blank">Insomnia(for designing own APIs)</a></li>
              <li><a href="https://bundlephobia.com/" rel="noopener noreferrer" target="_blank">BundlePhobia</a></li>
            </ul>
          </li>

          <li>
            <h4>Websites for Design Inspiration</h4>
            <ul>       
              <li><a href="https://dribbble.com/" rel="noopener noreferrer" target="_blank">Dribbble</a></li>
              <li><a href="https://www.behance.net/" rel="noopener noreferrer" target="_blank">Behance</a></li>
              <li><a href="https://www.awwwards.com/" rel="noopener noreferrer" target="_blank">Awwwards</a></li>
              <li><a href="https://www.logoinspirations.co/" rel="noopener noreferrer" target="_blank">Logoinspirations</a></li>
              <li><a href="https://collectui.com/" rel="noopener noreferrer" target="_blank">Collect ui</a></li>
              <li><a href="https://www.designspiration.com/" rel="noopener noreferrer" target="_blank">Designspiration</a></li>
              <li><a href="https://www.pinterest.ca/" rel="noopener noreferrer" target="_blank">Pinterest</a></li>
            </ul>
          </li>

          <li>
            <h4>Free Animation Library for Websites</h4>
            <ul>
              <li><a href="https://greensock.com/gsap/" rel="noopener noreferrer" target="_blank">GSAP</a></li>      
              <li><a href="https://elrumordelaluz.github.io/csshake/" rel="noopener noreferrer" target="_blank">CSSHake</a></li>
              <li><a href="https://animejs.com/" rel="noopener noreferrer" target="_blank">Anime.js</a></li>
              <li><a href="http://bouncejs.com/" rel="noopener noreferrer" target="_blank">Bounce.js</a></li>
              <li><a href="https://mojs.github.io/" rel="noopener noreferrer" target="_blank">Mo.js</a></li>
              <li><a href="https://github.com/kristofferandreasen/wickedCSS" rel="noopener noreferrer" target="_blank">Wicked css</a></li>
              <li><a href="https://scrollmagic.io/" rel="noopener noreferrer" target="_blank">ScrollMagic</a></li>
            </ul>
          </li>

          <li>
            <h4>Misc.</h4>
            <ul>
              <li><a href="https://carbon.now.sh/" rel="noopener noreferrer" target="_blank">carbon</a></li> 
            </ul>
          </li>
        </ul>
        
        </div>
        
      
      </main>
      <BackToTopLink />
      <Footer />

      <style jsx>{`
        a{
          text-decoration: underline;
        }
        a:hover{
          cursor: pointer;
          opacity: 0.7;
        }
        .links-list{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-self: baseline;
          padding-left: 0px;
        }
        .links-list ul{
          padding-left: 0px!important;
        }
        li{
          list-style: none;
        }
        .links-list>li{
          width: 47%;
        }
        .links-list>li li{
          margin-bottom: 5px;
        }
        .links-list>li li:before{
          content:"- "
        }
        .links-list>li:nth-child(2n-1){
          margin-right: 6%;
        }
        .links-list h4{
          font-size: 20px;
          margin-bottom: 5px;
        }
        .links-list a{
          text-decoration: underline;
          color: inherit;
        }
       `}</style>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 94%;
            pading: 0 3%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        
      `}</style>

      
    </div>
  )
}
