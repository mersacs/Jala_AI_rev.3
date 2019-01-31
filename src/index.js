require( './styles/index.scss' );

const navbar = ( ) => {
      const nav = document.querySelector( '.navigation' );
      const item = document.querySelectorAll('.navigation__link');
      if ( document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight ) {
            nav.classList.add( "navigation--black" );
            item.forEach((el)=> el.classList.add( "navigation__link--white" ));
      } else {
            nav.classList.remove( "navigation--black" );
            item.forEach((el)=> el.classList.remove( "navigation__link--white" ));
      }
}

window.addEventListener( "scroll", function ( e ) {
      window.requestAnimationFrame( ( ) => {
            navbar( );
      } )
} );