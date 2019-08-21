// var tabLinks = new Array();
// var contentDivs = new Array();

// function init(){
//     var tabListItems = document.getElementById('tabs');
//       for ( var i = 0; i < tabListItems.length; i++ ) {
//         if ( tabListItems[i] == "LI" ) {
//           var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
//           var id = getHash( tabLink.getAttribute('href') );
//           tabLinks[id] = tabLink;
//           contentDivs[id] = document.getElementById( id );
//         }
//       }

//       var i = 0;

//       for ( var id in tabLinks ) {
//         tabLinks[id].onclick = showTab;
//         tabLinks[id].onfocus = function() { this.blur() };
//         if ( i == 0 ) tabLinks[id].className = 'selected';
//         i++;
//       }

//       var i = 0;

//       for ( var id in contentDivs ) {
//         if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
//         i++;
//       }
// }

// function showTab(){
//     var selectedId = getHash(this.getAttribute('href'));

//     for (var id in contentDivs){
//         if (id== selectedId){
//             tabLinks[id].className = 'tabContent';
//         }
//         else{
//             tabLinks[id].className = '';
//             contentDivs[id].className = 'tabContent hide';
//         }
//     }
//     return false;
// }

// function getFirstChildWithTagName( element, tagName ) {
//     for ( var i = 0; i < element.length; i++ ) {
//       if ( element[i] == tagName ) 
//       return element[i];
//     }
//   }

// function getHash( url ) {
//    var hashPos = url.lastIndexOf ( '#' );
//    return url.substring( hashPos + 1 );
// }
