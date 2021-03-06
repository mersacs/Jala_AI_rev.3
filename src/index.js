require( './styles/index.scss' );

const reaction = (el) => {
      const nav = document.querySelector( '.navigation' );
      const item = document.querySelectorAll('.navigation__link');
      const allSvg = document.querySelectorAll( ".navigation__burger--icon [class]" );
      const btn = document.querySelector(".btn--transparent");
      const btnSvg = document.querySelector(".btn--transparent span svg");

      if (el === "remove"){
            nav.classList.remove( "navigation--black" );
            item.forEach((el)=> el.classList.remove( "navigation__link--white" ));
            allSvg.forEach(el => el.style.stroke = "#363c48");
            // button login
            btn.removeAttribute("style");
            btnSvg.removeAttribute("style");

      } else if (el === "add"){
            nav.classList.add( "navigation--black" );
            item.forEach((el)=> el.classList.add( "navigation__link--white" ));
            allSvg.forEach(el => el.style.stroke = "#ffffff");
            btn.style.color = "#ffffff";
            btnSvg.style.fill = "#ffffff";
      }
};

const logo = ( ) => {
      const main = document.querySelector( '.section-about' );
      const svg = document.querySelector( '.svg_paralax' );
      const perc = main.offsetTop - ((document.documentElement.clientHeight)*(9/10) );

      if ( document.documentElement.scrollTop > perc || window.pageYOffset > perc) {
            if ((main.offsetTop + main.offsetHeight) <= document.documentElement.scrollTop) {
                        return;
            } else {
                  svg.style.transform = `translateY(${( window.pageYOffset - perc) / 25}vh)`;
            }
      } else {
            svg.style.transform = `translateY(0px)`;
      }
}

const navbar = ( ) => {    
      if ( document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight ) {
            reaction("add");
      } else if (burger.dataset.show === "1"){
            return;
      }
      else {
            reaction("remove");
      }
};

window.addEventListener( "scroll", function ( e ) {
      window.requestAnimationFrame( ( ) => {
            navbar( );
            logo();
      } );
} );

const burger = document.querySelector(".navigation__burger");
const popup = document.querySelector(".navigation__popup");
const arr = [burger,popup];

arr.forEach(el => {
      el.addEventListener("click", () => {
            const container = document.querySelector(".navigation__container");
            
            if(burger.dataset.show === "0"){
                  container.classList.add("navigation__container--reveal");
                  popup.classList.add("navigation__popup--reveal");
                  animate();
                  burger.dataset.show = 1;
                  reaction("add");
            } else {
                  container.classList.remove("navigation__container--reveal");
                  popup.classList.remove("navigation__popup--reveal");
                  animate();
                  burger.dataset.show = 0;
                  if(document.documentElement.scrollTop === 0){
                        reaction("remove");
                  } 
            }
      });
});


const animate = ( ) => {
      const circle = document.querySelector( ".navigation__burger--icon .circle" );
      const line1 = document.querySelector( ".navigation__burger--icon .line-1" );
      const line2 = document.querySelector( ".navigation__burger--icon .line-2" );
      
      if ( burger.dataset.show === "0" ) {
            circle.classList.add( "circle-in" );
            line1.classList.add( "line1-in" );
            line2.classList.add( "line2-in" );

      } else if ( burger.dataset.show === "1" ) {
            circle.classList.remove( "circle-in" );
            line1.classList.remove( "line1-in" );
            line2.classList.remove( "line2-in" );
      }
};

const features = document.querySelectorAll(".features__item");

features.forEach(el => {
      el.addEventListener("mouseenter", () => {
            const type = el.parentNode.dataset.type;
            const image = document.querySelectorAll(`.features__container--${type}-image img`);
            const activeImage = document.querySelector(`.features__container--${type}-image .features__image__${type}--show`);

            activeImage.classList.remove(`features__image__${type}--show`);
            image[el.dataset.num - 1].classList.add(`features__image__${type}--show`);
      });
});

