
import './App.css';

function App() {
  return (
    <>
      <div className='container'>

        <nav id='navbar'>
          <div id='img'>
            <img src='https://kognics.ai/wp-content/themes/spark-multipurpose/assets/images/Homepage/kognics-icon.svg' alt='' />
          </div>
          <div id='navItems'>
            <ul>
              <li>Product</li>
              <li>LMS</li>
              <li>About</li>
              <li>Pricing</li>
            </ul>
            <div className='anchor'>
              <a href='https://app.kognics.com/login'>Login</a>
              <a id='demo' href='https://kognics.ai/get-a-demo/'>Get A Demo</a>
            </div>
          </div>
        </nav>
        <div className='intro'>
          <div id='upper'>
            AI-Powered LMS for Making your Training
            <p>Success Ready</p>
          </div>
          <div id='lower'>
            Kognics AI-Powered LMS helps you to scale your team by making Onboarding, Training and Documentation a cake walk. Everything everywhere all in one location.
          </div>
        </div>

        <div className='conimg'>
          <img src='https://kognics.ai/wp-content/themes/spark-multipurpose/assets/images/Homepage/getstarted.svg' alt='' />
        </div>
        <div className='conimg1'>
          <img src='https://kognics.ai/wp-content/themes/spark-multipurpose/assets/images/Homepage/companies.svg' alt='' />
        </div>
        <div id='content'>
          <div>A Platform for All</div>
          <div>
            <div className='btn'>
              <button >Courses</button>
              <button>Feedback</button>
              <button>Learning Path</button>
              <button>Product Hub</button>
              <button>Quizzes</button>
            </div>
          </div>
          {/* <div>
          imgs of courses and ...
          </div> */}
        </div>
        <div id='footer'>
          <div id='footer-left'>
            <div>
              <img src='https://kognics.ai/wp-content/themes/spark-multipurpose/assets/images/Homepage/kognics-icon.svg' alt='' />
              <p>We build products that help people to succeed.</p>
            </div>
            <form>
              <p>Enter your mail and get answers of your queries</p>
              <input type='text' placeholder='enter mail here'></input>
              <button>Send</button>
            </form>
          </div>
          <div id='footer-right'>
            <div>
              <p>Support</p>
              <a href='https://kognics.ai/privacy-policy-2/'>Privacy Policy</a>
              <a href='https://kognics.ai/terms-condition/'>Terms & Conditions</a>
            </div>
            <div>
            <p>Support</p>
              <a href='https://kognics.ai/privacy-policy-2/'>Privacy Policy</a>
              <a href='https://kognics.ai/terms-condition/'>Terms & Conditions</a>
            </div>
            <div>
            <p>Support</p>
              <a href='https://kognics.ai/privacy-policy-2/'>Privacy Policy</a>
              <a href='https://kognics.ai/terms-condition/'>Terms & Conditions</a>
            </div>
          </div>
        </div>
        <div id='lastbar'>KOGNICS 2022. ALL RIGHT RESERVED</div>
      </div>
    </>
  );
}

export default App;
