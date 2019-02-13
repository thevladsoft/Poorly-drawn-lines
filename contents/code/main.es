/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA .        *
 ***************************************************************************/
 
function init()
{
    comic.comicAuthor = "Reza Farazmand";
    comic.firstIdentifier = "1";
    comic.websiteUrl = "http://poorlydrawnlines.com/comic/";
    comic.firstIdentifier = "campus-characters";
    //print("qq",comic.identifier);
    //comic.ext = "jpg";
    //comic.title = "PvP";
    comic.requestPage(comic.websiteUrl+comic.identifier, comic.User);
}
 
function pageRetrieved(id, data){
    //print(data);
    var match,match1,match2
    var re_prev = new RegExp("class=\"previous\"><a href=\"http://www.poorlydrawnlines.com/comic/([^/]*)/\" rel");
    var re_next = new RegExp("class=\"next\"><a href=\"http://www.poorlydrawnlines.com/comic/([^/]*)/\" rel");
    //var re_now = new RegExp("title=\"([^\/]*)\" src=\"([^\"]*)\" alt=");    //print(re_prev);print(re_next);print(re_now);
    var re_now = new RegExp("src=\"(http://www.poorlydrawnlines.com/wp-content/uploads/[^\"]*/[^\"]*/[^\"]*)\"");
    match = re_prev.exec(data);
    if (match != null) {
      //print("ww");
      //print(match[0],match[1]);
      comic.previousIdentifier=match[1];
    }  
    
    match1 = re_next.exec(data);
    if (match1 != null) {
      //print(match1[0],match1[1]);
      comic.nextIdentifier=match1[1];
    }  
    
    //print(re_now);
    
    match2 = re_now.exec(data);
    if (match2 != null) {
      //print("ee");
      //print(match2[0],match2[1]);
      comic.Url=match2[1];
    }  else{
      comic.error();
      return;
    }
    //print(comic.Url);
    comic.requestPage(comic.Url,comic.Image);
}

