import React, { Component } from 'react';
import './ProjectTemplate.css';

export default class Timeline extends Component {
    render() {
        return(
            <div class="cd-horizontal-timeline">
          <div class="timeline">
            <div class="events-wrapper">
              <div class="events">
                <ol>
                  <li><a href="#0" data-date="16/01/2014" class="selected">16 Jan</a></li>
                  <li><a href="#0" data-date="28/02/2014">28 Feb</a></li>
                  <li><a href="#0" data-date="20/04/2014">20 Mar</a></li>
                </ol>

                <span class="filling-line" aria-hidden="true"></span>
              </div>
            </div>

            <ul class="cd-timeline-navigation">
              <li><a href="#0" class="prev inactive">Prev</a></li>
              <li><a href="#0" class="next">Next</a></li>
            </ul>
          </div>

          <div class="events-content">
            <ol>
              <li class="selected" data-date="16/01/2014">
                <h2>Horizontal Timeline</h2>
                <em>January 16th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				        </p>
              </li>

              <li data-date="28/02/2014">
                <h2>Event title here</h2>
                <em>February 28th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				        </p>
              </li>

              <li data-date="20/04/2014">
                <h2>Event title here</h2>
                <em>March 20th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				        </p>
              </li>
            </ol>
          </div>
          <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        </div>
        )
    }
}
