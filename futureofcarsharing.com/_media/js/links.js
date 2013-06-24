$(document).ready(function() {

    // HOME LINKS
	
    $("#collaborative-consumption-link").click(function(){ window.open('http://collaborativeconsumption.com', '_blank'); });
    
    // EASTER EGGS LINKS
    
    $("#plane-selector").click(function(){ window.open('http://www.shareajetexchange.com/', '_blank'); });
    $("#tower-2").click(function(){ 
		$('.onionskin').css('display','block');
		var modal = $(this).data('modal');
		$('#'+modal).css('display','block').css('top', $(window).scrollTop()+40 );
		$('.close_modal, .onionskin').bind('click',function() {
			$('.close_modal, .onionskin').unbind('click');
			$('.onionskin').css('display','none');
			$('.modal').css('display','none');
		});
    });
    $("#moose").click(function(){ window.open('http://www.wildlife.state.nh.us/Wildlife/brake_for_moose.htm', '_blank'); });
    $("#birds").click(function(){ 
		$('.onionskin').css('display','block');
		var modal = $(this).data('modal');
		$('#'+modal).css('display','block').css('top', $(window).scrollTop()+40 );
		$('.close_modal, .onionskin').bind('click',function() {
			$('.close_modal, .onionskin').unbind('click');
			$('.onionskin').css('display','none');
			$('.modal').css('display','none');
		});
    });
    $("#surfer").click(function(){ 
		$('.onionskin').css('display','block');
		var modal = $(this).data('modal');
		$('#'+modal).css('display','block').css('top', $(window).scrollTop()+40 );
		$('.close_modal, .onionskin').bind('click',function() {
			$('.close_modal, .onionskin').unbind('click');
			$('.onionskin').css('display','none');
			$('.modal').css('display','none');
		});
    });
    $("#boat").click(function(){ window.open('http://www.gibbstech.com/aquada.php', '_blank'); });
    $("#sun").click(function(){ window.open('http://www.worldsolarchallenge.org/', '_blank'); });
    $("#sun-text").click(function(){ window.open('http://www.worldsolarchallenge.org/', '_blank'); });
    $("#pot").click(function(){ window.open('http://autos.yahoo.com/news/world-s-cheapest-car-covered-in-gold.html', '_blank'); });
    $("#roo").click(function(){ 
		$('.onionskin').css('display','block');
		var modal = $(this).data('modal');
		$('#'+modal).css('display','block').css('top', $(window).scrollTop()+40 );
		$('.close_modal, .onionskin').bind('click',function() {
			$('.close_modal, .onionskin').unbind('click');
			$('.onionskin').css('display','none');
			$('.modal').css('display','none');
		});
    });
    
    // CAR SHARING LINKS
    
    $(".carsharing-link").click(function(){ window.open('http://carsharing.net/', '_blank'); });
    $(".whizzcar-link").click(function(){ window.open('http://www.whizzcar.com/index.asp', '_blank'); });
    $(".cscs-link").click(function(){ window.open('http://www.cityspeed.com.sg/', '_blank'); });
    $(".carclub-link").click(function(){ window.open('http://www.carclub.com.sg/', '_blank'); });
    $(".cityhop-link").click(function(){ window.open('http://www.cityhop.co.nz/', '_blank'); });
    $(".flexicar-link").click(function(){ window.open('http://www.flexicar.com.au/', '_blank'); });
    $(".mobility-link").click(function(){ window.open('http://www.mobility.ch/de/pub/', '_blank'); });
    $(".sunfleet-link").click(function(){ window.open('http://www.sunfleet.com/', '_blank'); });
    $(".greenwheels-link").click(function(){ window.open('https://www.greenwheels.com/nl/Home/Particulieren/Home.html', '_blank'); });
    $(".carcityclub-link").click(function(){ window.open('http://www.carcityclub.it/', '_blank'); });
    $(".ics-link").click(function(){ window.open('http://www.icscarsharing.it/main/', '_blank'); });
    $(".gocar-link").click(function(){ window.open('http://www.gocar.ie/cms/carsharing/en/4/cms?cms_knuuid=1f24a580-4eda-44d8-a84f-b824ad413553', '_blank'); });
    $(".mint-link").click(function(){ window.open('http://www.drivemint.com/', '_blank'); });    
    $(".relayrides-link").click(function(){ window.open('https://relayrides.com/', '_blank'); });
    $(".whipcar-link").click(function(){ window.open('http://www.whipcar.com/', '_blank'); });
    $(".getaround-link").click(function(){ window.open('http://www.getaround.com/', '_blank'); });
    $(".bmw-link").click(function(){ window.open('http://www.bmw.com/', '_blank'); });
    $(".peugeot-link").click(function(){ window.open('http://www.peugeot.com/en.aspx', '_blank'); });
    $(".daimler-link").click(function(){ window.open('http://www.daimler.com/', '_blank'); });
    $(".hertz-link").click(function(){ window.open('http://www.connectbyhertz.com/', '_blank'); });
    $(".wecar-link").click(function(){ window.open('http://www.wecar.com/content/car-sharing/en_US.html', '_blank'); });
    $(".zipcar-link").click(function(){ window.open('http://www.zipcar.com/', '_blank'); });
    $(".streetcar-link").click(function(){ window.open('http://www.streetcar.co.uk/', '_blank'); });
    $(".goget-link").click(function(){ window.open('http://www.goget.com.au/', '_blank'); });
    $(".citycarshare-link").click(function(){ window.open('http://www.citycarshare.org/', '_blank'); });
    $(".optionsforcars-link").click(function(){ window.open('http://optionsforcars.ca/', '_blank'); });
    $(".igochicago-link").click(function(){ window.open('http://www.igocars.org/', '_blank'); });
    $(".modo-link").click(function(){ window.open('http://www.modo.coop/', '_blank'); });
    $(".stattauto-link").click(function(){ window.open('http://stattauto-muenchen.de/', '_blank'); });
    $(".drivenow-link").click(function(){ window.open('https://www.drive-now.com/', '_blank'); });
    $(".car2go-link").click(function(){ window.open('http://www.car2go.com/', '_blank'); });
    $(".cambiocar-link").click(function(){ window.open('http://www.cambio-carsharing.com/', '_blank'); });
    $(".quicar-link").click(function(){ window.open('http://green.autoblog.com/2011/05/12/vw-to-launch-quicar-car-sharing-program-in-hanover-germany/', '_blank'); });
    $(".tamyca-link").click(function(){ window.open('http://www.tamyca.de/', '_blank'); });
    $(".orixauto-link").click(function(){ window.open('http://www.orix.co.jp', '_blank'); });
    $(".autolib-link").click(function(){ window.open('http://www.autolib.fr/autolib/ ', '_blank'); });
    $(".kobenhavndelebiler-link").click(function(){ window.open('http://www.kobenhavnsdelebiler.dk/', '_blank'); });
    $(".denzeldrive-link").click(function(){ window.open('http://www.denzeldrive.at/', '_blank'); });
    $(".easydrive-link").click(function(){ window.open('http://www.easydrive.at/', '_blank'); });
    $(".vrtucar-link").click(function(){ window.open('http://www.vrtucar.com/', '_blank'); });
    $(".sigocar-link").click(function(){ window.open('http://www.sigocar.com/', '_blank'); });
    $(".zazcar-link").click(function(){ window.open('http://zazcar.com.br/inicio', '_blank'); });
    $(".citycar-link").click(function(){ window.open('http://www.citycarclub.co.uk', '_blank'); });
    $(".dmcr-link").click(function(){ window.open('http://www.drivemycarrentals.com.au/', '_blank'); });    
    $(".autopia-link").click(function(){ window.open('http://www.autodelen.net/', '_blank'); });
    $(".gruenesauto-link").click(function(){ window.open('http://www.gruenes-auto.de/', '_blank'); });
    $(".timeplus-link").click(function(){ window.open('http://timesplus.jp/know/car.html', '_blank'); });
    $(".cafore-link").click(function(){ window.open('http://cafore.jp/', '_blank'); });
    $(".communauto-link").click(function(){ window.open('http://www.communauto.com/', '_blank'); });
    $(".autoshare-link").click(function(){ window.open('http://www.autoshare.com/', '_blank'); });
    $(".buzzcar-link").click(function(){ window.open('http://www.buzzcar.com/', '_blank'); });
    $(".cityzencar-link").click(function(){ window.open('https://fr.cityzencar.com/', '_blank'); });
    $(".livop-link").click(function(){ window.open('http://www.livop.fr/', '_blank'); });
    $(".phillycarshare-link").click(function(){ window.open('http://www.phillycarshare.org/', '_blank'); });
    $(".carpooling-link").click(function(){ window.open('http://www.carpooling.co.uk/', '_blank'); });
    $(".autonetzer-link").click(function(){ window.open('http://www.autonetzer.de/', '_blank'); });
    $(".wheelz-link").click(function(){ window.open('http://www.wheelz.com', '_blank'); });
    $(".voiturelib-link").click(function(){ window.open('http://www.voiturelib.com', '_blank'); });
    
    // SOURCE LINKS
    
    $(".sourceOne-link").click(function(){ window.open('http://www.frost.com/prod/servlet/report-overview.pag?repid=N748-01-00-00-00', '_blank'); });
    $(".sourceTwo-link").click(function(){ window.open('http://www.fastcompany.com/blog/ariel-schwartz/sustainability/us-car-ownership-declines-first-time-ever', '_blank'); });
    $(".sourceThree-link").click(function(){ window.open('http://www.carsharing.net/library/UCD-ITS-RR-06-22.pdf', '_blank'); });
    $(".sourceFour-link").click(function(){ window.open('https://relayrides.com/owners', '_blank'); }); 
    $(".sourceFive-link").click(function(){ window.open('https://relayrides.com/borrowers', '_blank'); }); 
    $(".sourceSix-link").click(function(){ window.open('http://www.dw-world.de/dw/article/0,,14775384,00.html', '_blank'); });
    $(".sourceSeven-link").click(function(){ window.open('http://www.zipcar.com/is-it/greenbenefits', '_blank'); });
    $(".sourceEight-link").click(function(){ window.open('http://frost.com/prod/servlet/press-release.pag?docid=238349765', '_blank'); });
    $(".sourceNine-link").click(function(){ window.open('http://www.frost.com/prod/servlet/market-insight-top.pag?docid=190795176', '_blank'); });
    
    // FINAL FLAG LINKS
    
    $("#flag-collab-fund").click(function(){ window.open('http://collaborativefund.com/', '_blank'); });
    $("#flag-hyperakt").click(function(){ window.open('http://hyperakt.com/', '_blank'); });
    $("#flag-startup-america").click(function(){ window.open('http://www.startupamericapartnership.org/', '_blank'); });
    
});