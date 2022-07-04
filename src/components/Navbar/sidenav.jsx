import React from "react";

const Navbar = (props) => {
    return (
        <nav id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                <h2 className="snd">Second Hand</h2>
                <div className="d-grid">
                    <button type="button" className="btn btn-primary btn-block kategori masuk"><i className="fas fa-arrow-right-to-bracket"></i>&nbsp; Masuk</button>
                </div>
            </nav>
    );
};
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      (document).ready(function(){
        (".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            center: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });
        });
      /* Set the width of the side navigation to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    export default Navbar;