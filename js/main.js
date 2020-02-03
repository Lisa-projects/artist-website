


    var blackInkPics = [  ['5Terre', '5 Terre'],
                          ['Aragon', 'Aragon' ],
                          ['Biograph', 'Biograph'],
                          ['BoatAruba', 'Boat Aruba'],
                          ['ChicagoTrain', 'Chicago Train'],
                          ['ChinaTownChicago', 'China Town Chicago'],
                          ['club2ForCard', 'Palmeras' ],
                          ['LincolnHall', 'Lincoln Hall'],
                          ['MercaditoValencia', 'Mercadito Valencia'],
                          ['Mercury', 'Mercury' ],
                          ['MusicBox', 'Music Box'],
                          ['Riviera', 'Riviera'],
                          ['RockefellerChapelChicago_forcard', 'Rockefeller Chapel Chicago']];

    var waterColorPics = [  ['Aragon_color', 'Aragon'],
                            ['Biograph_color', 'Biograph'],
                            ['Chicago_Color', 'Chicago'],
                            ['CremonaNavidad', 'Cremona Navidad'],
                            ['Dawn', 'Dawn'],
                            ['LincolnHall_color', 'Lincoln Hall'],
                            ['Mercury_color', 'Mercury'],
                            ['MusicBox_color', 'Music Box'],
                            ['Riviera_color', 'Riviera'],
                            ['TrevisoNavidad', 'Treviso Navidad'],
                            ['tucacas', 'tucacas']];

    var acrylicPics = [  ['cuadrados', 'Cuadrados'],
                          ['Africa', 'Africa'],
                          ['City','City sunset'],
                          ['Cuadro','Black cat']];

    var tangoPics = [ ['Tango_01', 'Tango 1'],
                        ['Tango_02', 'Tango 2'],
                        ['Tango_03','Tango 3'],
                        ['Tango_04','Tango 4'],
                        ['Tango_05','Tango 5']];

    var texturePics = [ ['Texture-1', 'Texture 1'],
                        ['Texture-2', 'Texture 2'],
                        ['Texture-3', 'Texture 3'],
                        ['Texture-4', 'Texture 4'],
                        ['Texture-5', 'Texture 5'],
                        ['Texture-6', 'Texture 6'],
                        ['Texture-7', 'Texture 7']];

    var animalPics = [['Sisne', 'Swan'],
                      ['WinterBird', 'Winter Bird']];

    // replace space with + for GET params
    function escapeStr(input)
    {
        input = input.replace(/ /g, '+');
        return input;
    }
    function getThumbsList( picNames )
    {
      var listItems = '', listItemStr = '';
      for (var i = 0; i < picNames.length; i++)
      {
        listItemStr = '<li class="thumbnail-item">'
                      + '<figure>'
                      +   '<a href="productDetail.html?artWorkName=' + picNames[i][0] + '&artWorkTitle=' + escapeStr(picNames[i][1]) + '">'
                      +     '<img class="thumbnail-image  tiny-image" src="images/artwork/thumb/' + picNames[i][0] + '.jpg" alt="' + picNames[i][1] + '">'
                      +     '<figcaption class="thumbnail-title">' + picNames[i][1] + ' </figcaption>'
                      +   '</a>'
                      + '</figure>'
                      +'</li>';
        listItems +=  listItemStr;
      }
      return listItems;
    }	// end getThumbsList

    function getOptionParam()
    {
      var parameters = location.search.substring(1);
      var optionParams = parameters.split("=");
      var optionName = optionParams[1];
      return optionName;
    }

    // display all fine arts thumbnails
    function displayFineArtsAll()
    {
      $('.art-list').html( getThumbsList( acrylicPics  )
                          + getThumbsList( waterColorPics )
                          + getThumbsList( blackInkPics ));
      $('.menu-item').removeClass('selected');
      $('.fineArts-all-list').addClass('selected');
      setTimeout( function() {
        $('.thumbnail-image').removeClass('tiny-image');
      }, 50 );
    }

    // display all photography thumbnails
    function displayPhotographyAll()
    {
      $('.art-list').html( getThumbsList( tangoPics )
                          + getThumbsList( texturePics )
                          + getThumbsList( animalPics ));
      $('.menu-item').removeClass('selected');
      $('.photography-all-list').addClass('selected');
      setTimeout( function() {
        $('.thumbnail-image').removeClass('tiny-image');
      }, 50 );
    }

    function displayBlackInkPics()
    {
      $('.art-list').html( getThumbsList( blackInkPics ) );
      $('.menu-item').removeClass('selected');
      $('.blackInk-list').addClass('selected');
      setTimeout( function() {
        $('.thumbnail-image').removeClass('tiny-image');
      }, 50 );
    }

    function displayWaterColorPics()
    {
      $('.art-list').html( getThumbsList( waterColorPics ) );
      $('.menu-item').removeClass('selected');
      $('.waterColor-list').addClass('selected');
      setTimeout( function() {
        $('.thumbnail-image').removeClass('tiny-image');
      }, 50 );
    }

    function displayAcrylicPics()
    {
      $('.art-list').html( getThumbsList( acrylicPics ) );
      $('.menu-item').removeClass('selected');
      $('.acrylic-list').addClass('selected');
      setTimeout( function() {
        $('.thumbnail-image').removeClass('tiny-image');
      }, 50 );
    }
    function displayTangoPics()
    {
      $('.art-list').html( getThumbsList( tangoPics ) );
      $('.menu-item').removeClass('selected');
      $('.tango-list').addClass('selected');
      setTimeout( function() {
        $('.thumbnail-image').removeClass('tiny-image');
      }, 50 );
    }
    function displayTexturePics()
    {
      $('.art-list').html( getThumbsList( texturePics ) );
      $('.menu-item').removeClass('selected');
      $('.texture-list').addClass('selected');
      setTimeout( function() {
        $('.thumbnail-image').removeClass('tiny-image');
      }, 50 );
    }
    function displayAnimalPics()
    {
      $('.art-list').html( getThumbsList( animalPics ) );
      $('.menu-item').removeClass('selected');
      $('.animal-list').addClass('selected');
      setTimeout( function() {
        $('.thumbnail-image').removeClass('tiny-image');
      }, 50 );
    }

    // index page called with arguments
    function displayOptionThumbs( option )
    {
      switch ( option )
      {
        case 'fineArts':
          displayFineArtsAll();
          break;
        case 'blackInk':
            displayBlackInkPics();
            break;
        case 'waterColors':
            displayWaterColorPics();
            break;
        case 'acrylic':
            displayAcrylicPics();
            break;
        case 'acrylic':
            displayAcrylicPics();
            break;
        case 'photography':
            displayPhotographyAll();
            break;
        case 'tango':
            displayTangoPics();
            break;
        case 'animals':
            displayAnimalPics();
            break;
        case 'texture':
            displayTexturePics();
            break;
        default:
          displayFineArtsAll();

      }
    }

    // product page functions

    // This function returns the image file name and title passed to product page
    function getProduct()
    {
      var parameters = location.search.substring(1);
      var artParams = parameters.split("&");
      var artName = artParams[0].split("=");
      var prodName = artName[1];
      var artTitle = artParams[1].split("=");
      var prodTitle = unescape( artTitle[1] );
      var prodArray = [prodName, prodTitle];
      return prodArray;
    }
    function unescapeStr( input )
    {
        newStr = input.split('+').join(' ');
        return newStr;
    }
    // This function returns the html for product image
    function getImageString( picName, picTitle )
    {
      picNameStr =  '<figure>'
                  +      '<img class="main-product-image" src="images/artwork/full/' + picName + '.jpg" alt="' + picTitle + '">'
                  + '</figure>';
      return picNameStr;
    }	// end getImageString



    $('.toggle-nav').click(function(e) {

        if ($('.responsive-menu-list').is(':hidden'))
        {
            $('.responsive-menu-list').show();
        }
        else
        {
            $('.responsive-menu-list').hide();
        }
        e.preventDefault();
    });
