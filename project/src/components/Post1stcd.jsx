import React from 'react';
import "./css/post1stcard.css";
import {postfeatures} from "../data/postdetails.js";

export default function Post1stcard(item) {


  return (
    <div className='post1stmain'>
      <div className='post1stsubmaindiv'>
            <div className='post1stdiv'>

                <div className='post1stsubdiv' >
                    <img src={item.acdp} className='dp'  alt="error" />
                    <p>{item.acname}</p>
                    <span className="p1stdot"></span>
                    <p className='p1sttext'>{item.uptime}</p>
                </div>
                <div >
                    <img src="images/three-dots.png" className='ptdots'   alt="error" />
                </div>

            </div >

            <div className='post2nddiv'>
                <img src={item.uppic} className='pstuplpic'   alt="error" />

            </div>
      </div>

        <div className='post2ndsubmaindiv'>

            <div className='post2-1div'>
                    <div className='post2-1-1div'>
                        { postfeatures.map((item)=>
                          {return (
                          <div key={item.id} >
                              <img src={item.img} className='post2-1-1-1img' alt="error" /> 
                          </div>
                        );}
                        ) }
                    </div>
                    <div className='post2-1-2'>
                      <img src="images/bookmark.png" className='post2-1-2-1img' alt="error" />
                    </div>
            </div>

            <div className='likes'> 
              <div className='likesp'>{item.lk}</div> 
              <div className='likesp'>likes</div>
            </div>

            <div> comments</div>
            <div className='postnumcmt'> View all {item.cmt} comments</div>

            <div className='postcomment'>
              <textarea rows={'1'} id="postcmtbtn1" type="text" placeholder="Add a comment..."></textarea>
              <input className="postcmtbtn2"type="button" value="Post" />
              <img src="images/smileyface.png" className='postcmtimg' alt="error" />
            </div>
        </div>
    </div>
  )
}
