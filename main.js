// import axios from 'axios'


function tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
};



class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    fetch('http://time.jsontest.com')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);

      const response_time = (
         <p>API response Time : {myJson['time']}</p>
      );

        ReactDOM.render(response_time, document.getElementById("time"));
      });

    console.log('Success!')
    };

  render() {
    return(
      <div>
        <button className='button' onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}



ReactDOM.render(<Btn />, document.getElementById("reactive"));
setInterval(tick, 1000);


