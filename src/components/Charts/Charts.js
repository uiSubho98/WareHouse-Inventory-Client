import React from 'react';
import './Chart.css'
import Slide from 'react-reveal/Slide'

const Charts = () => {
    return (
       

<div className='chart-container'>
			
			<Slide right>

			<div id="wrapper">
			 <div id="header">
				 <p id="txt_title">Deposito Utilization Analysis</p>
			 </div>
		 
			 <div id="q2_2010">
			 <div id="q1_2010">
			 <div id="q4_2009">
			 <div id="q3_2009">
			 <div id="q2_2009">
			 <div id="q1_2005">
				 <div id="labels">
					 <ul>
						 <li><span></span>Rice</li>
						 <li><span></span>Daal</li>
						 <li><span></span>Oil</li>
						 <li><span></span>Maida</li>
					 </ul>
				 </div>
				 <div id="pie_ico">Pie &raquo;</div>
				 <div id="pyr_ico">&laquo; Pyramid</div>
				 <div id="percentage_wrapper">
					 <div id="percentage">
						 <ul>
							 <li><p>60.14%</p><p>61.79%</p><p>63.90%</p><p>67.02%</p><p>68.28%</p><p>89.68%</p></li>
							 <li><p>24.98%</p><p>24.56%</p><p>24.39%</p><p>23.28%</p><p>23.22%</p><p>6.83%</p></li>
							 <li><p>7.14%</p><p>6.03%</p><p>4.27%</p><p>3.08%</p><p>2.35%</p><p>0%</p></li>
							 <li><p>5.10%</p><p>4.91%</p><p>4.64%</p><p>4.35%</p><p>3.89%</p><p>2.36%</p></li>
							 
						 </ul>
					 </div>
				 </div>
				 <div id="slider">
					 <div id="chart_holder">
						 <div id="pie_chart">
							 <ul>
								 <li id="c1_r"><p><span className="pie_left"></span></p></li> 	
								 <li id="c1_l"><p><span className="pie_right"></span></p></li>
								 <li id="c2_r"><p><span className="pie_left"></span></p></li> 	
								 <li id="c2_l"><p><span className="pie_right"></span></p></li>
								 <li id="c3_r"><p><span className="pie_left"></span></p></li> 	
								 <li id="c3_l"><p><span className="pie_right"></span></p></li>
								 <li id="c4_r"><p><span className="pie_left"></span></p></li> 	
								 <li id="c4_l"><p><span className="pie_right"></span></p></li>
								 <li id="c5_r"><p><span className="pie_left"></span></p></li> 	
								 <li id="c5_l"><p><span className="pie_right"></span></p></li>
							 </ul>
						 </div>
						 <div id="pyr_chart">
							 <ul>
								 <li></li>
								 <li></li>
								 <li></li>
								 <li></li>
								 <li></li>
								 <li></li>
								 <li></li>
							 </ul>
						 </div>
					 </div>
				 </div>
				 <div id="btn_panel">
					 <ul>
						 <li><a href="#q1_2005"><span>2010</span><span>Year</span></a></li>
						 <li><a href="#q2_2009"><span>2013</span><span>Year</span></a></li>
						 <li><a href="#q3_2009"><span>2016</span><span>Year</span></a></li>
						 <li><a href="#q4_2009"><span>2019</span><span>Year</span></a></li>
						 <li><a href="#q2_2010"><span>2022</span><span>Year</span></a></li>
					 </ul>
				 </div>
			 </div> 
			 </div> 
			 </div> 
			 </div> 
			 </div> 
			 </div> 
		 </div>

			</Slide>
				 </div>
    );
};

export default Charts;