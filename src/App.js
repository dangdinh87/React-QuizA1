import React from "react";
import bg from "./background.jpg";
import "./App.css";
import QuestionsList from "./components/questionList";
import Control from "./components/control";
import BackNext from "./components/BackNext";
import Result from "./components/Result";
import Countdown from "react-countdown";
import Swal from "sweetalert2";

class App extends React.Component {
  constructor(props) {
    super(props);
    let data = [
      {
        stt: 1,
        question:
          "Khái niệm “đường bộ” được hiểu như thế nào là đúng? “Đường bộ” gồm: ",
        answers: [
          "Đường bộ, cầu đường bộ.",
          "Hầm đường bộ, bến phà đường bộ.",
          "Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ khác",
        ],
        correct: 1,
      },
      {
        stt: 2,
        question: "“Vạch kẻ đường” được hiểu như thế nào là đúng?",
        answers: [
          "Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
          "Vạch kẻ đường là vạch chỉ sự phân biệt trí dừng, đỗ trên đường.",
          "Tất cả các ý nêu trên.",
        ],
        correct: 0,
      },
      {
        stt: 3,
        question: "Khái niệm “làn đường” được hiểu như thế nào là đúng?",
        answers: [
          "Là một phần của đường được chia theo chiều ngang của đường, có bề rộng đủ cho xe đỗ an toàn.",
          "Là một phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
          "Cả 02 ý trên.",
        ],
        correct: 0,
      },
      {
        stt: 4,
        question:
          "Khái niệm “phần đường xe chạy” được hiểu như thế nào là đúng?",
        answers: [
          "Là phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại.",
          "Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, dải đất dọc hai bên đường để đảm bảo an toàn giao thông.",
          "Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, các công trình, thiết bị phụ trợ khác và dải đất dọc hai bên đường để đảm bảo an toàn giao thông",
        ],
        correct: 0,
      },
      {
        stt: 5,
        question: "Khái niệm “đường phố” được hiểu như thế nào là đúng?",
        answers: [
          "Đường phố là đường đô thị, gồm lòng đường và hè phố.",
          "Đường phố là đường bộ ngoài đô thị có lòng đường đủ rộng cho các phương tiện giao thông qua lại",
          "Cả 02 ý nêu trên.",
        ],
        correct: 0,
      },
      {
        stt: 6,
        question: "Khái niệm “dải phân cách” được hiểu như thế nào là đúng?",
        answers: [
          "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
          "Là bộ phận của đường để xác định ranh giới của đất dành cho người đi bộ theo chiều ngang của đường.",
          "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép.",
        ],
        correct: 1,
      },
      {
        stt: 7,
        question:
          "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
        answers: [
          "Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
          "Vạch kẻ đường là vạch chỉ sự phân biệt trí dừng, đỗ trên đường.",
          "Tất cả các ý nêu trên.",
        ],
        correct: 0,
      },
      {
        stt: 8,
        question: "Khái niệm “làn đường” được hiểu như thế nào là đúng?",
        answers: ["Bị nghiêm cấm.", "Không bị nghiêm cấm."],
        correct: 0,
      },
      {
        stt: 9,
        question:
          "Người điều khiển xe mô tô, xe gắn máy trên đường mà trong máu có nồng độ cồn vượt quá bao nhiêu thì bị cấm?",
        answers: [
          "Nồng độ cồn vượt quá 50 miligam/100 mililit máu.",
          "Nồng độ cồn vượt quá 40 miligam/100 mililit máu.",
          "Nồng độ cồn vượt quá 30 miligam/100 mililit máu.",
        ],
        correct: 0,
      },
      {
        stt: 10,
        question:
          "Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có bị nghiêm cấm hay không?",
        answers: [
          "Không bị nghiêm cấm.",
          "Bị nghiêm cấm.",
          "Nghiêm cấm tùy từng trường hợp.",
        ],
        correct: 1,
      },
      {
        stt: 11,
        question:
          "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
        answers: [
          "Không bị nghiêm cấm.",
          "Nghiêm cấm tùy từng trường hợp cụ thể.",
          "Bị nghiêm cấm.",
        ],
        correct: 2,
      },
      {
        stt: 12,
        question:
          "ác xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        answers: [
          "Xe của bạn, mô tô, xe con.",
          "Xe con, xe của bạn, mô tô.",
          "Mô tô, xe con, xe của bạn.",
        ],
        correct: 2,
        image: require("./image/anh11.jpg"),
      },
      {
        stt: 13,
        question:
          " Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
        answers: [" Biển 1.", "Biển 1 và 3.", "Biển 3.", "Cả ba biển."],
        correct: 2,
        image: require("./image/anh2.jpg"),
      },
      {
        stt: 14,
        question: "  Biển nào báo hiệu “Hết đoạn đường ưu tiên”?",
        answers: ["Biển 3.", "Biển 1.", "Biển 2."],
        correct: 0,
        image: require("./image/anh4.jpg"),
      },
      {
        stt: 15,
        question:
          " Biển nào báo hiệu “Đường giao nhau” của các tuyến đường cùng cấp?",
        answers: ["Biển 1.", "Biển 3.", " Biển 2."],
        correct: 0,
        image: require("./image/anh5.jpg"),
      },
      {
        stt: 16,
        question: "Biển nào xe mô tô hai bánh được đi vào?",
        answers: ["Biển 1 và 2.", "Biển 1 và 3.", "Biển 2 và 3."],
        correct: 1,
        image: require("./image/anh6.jpg"),
      },
      {
        stt: 17,
        question: "Biển nào xe mô tô hai bánh không được đi vào?",
        answers: ["Biển 1.", "Biển 2.", "Biển 3."],
        correct: 1,
        image: require("./image/anh6.jpg"),
      },
      {
        stt: 18,
        question:
          " Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
        answers: [" Biển 1.", "Biển 2.", "Cả ba biển."],
        correct: 1,
        image: require("./image/anh7.jpg"),
      },
      {
        stt: 19,
        question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        answers: [
          "Xe tải, xe lam, xe con, mô tô.",
          "Xe tải, mô tô, xe lam, xe con.",
          "Xe lam, xe tải, xe con, mô tô.",
          " Mô tô, xe lam, xe tải, xe con.",
        ],
        correct: 2,
        image: require("./image/anh8.jpg"),
      },
      {
        stt: 20,
        question: " Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        answers: [
          "Xe khách, xe tải, mô tô, xe con",
          "Xe tải, mô tô, xe lam, xe con.",
          "Xe lam, xe tải, xe con, mô tô.",
          "Mô tô, xe lam, xe tải, xe con.",
        ],
        correct: 2,
        image: require("./image/anh2.jpg"),
      },
    ];
    this.state = {
      quiz: data,
      score: 0,
      current: 0,
      arrQuestion: [
        {
          id: "1",
          correct: [-1, -2],
        },
        {
          id: "2",
          correct: -1,
        },
        {
          id: "3",
          correct: -1,
        },
        {
          id: "4",
          correct: -1,
        },
        {
          id: "5",
          correct: -1,
        },
        {
          id: "6",
          correct: -1,
        },
        {
          id: "7",
          correct: -1,
        },
        {
          id: "8",
          correct: -1,
        },
        {
          id: "9",
          correct: -1,
        },
        {
          id: "10",
          correct: -1,
        },
        {
          id: "11",
          correct: -1,
        },
        {
          id: "12",
          correct: -1,
        },
        {
          id: "13",
          correct: -1,
        },
        {
          id: "14",
          correct: -1,
        },
        {
          id: "15",
          correct: -1,
        },
        {
          id: "16",
          correct: -1,
        },
        {
          id: "17",
          correct: -1,
        },
        {
          id: "18",
          correct: -1,
        },
        {
          id: "19",
          correct: -1,
        },
        {
          id: "20",
          correct: -1,
        },
      ],
    };
  }
  BackNext = (value) => {
    if (this.state.current + value >= 0 && this.state.current + value < 20)
      this.setState({
        current: this.state.current + value,
      });
  };
  numberQuestion = (a) => {
    this.setState({
      current: a - 1,
    });
  };
  handleClick = (choice, checked) => {
    let stt = this.state.quiz[this.state.current].stt;
    for (const i of this.state.arrQuestion) {
      if (parseInt(i.id) === stt) {
        let arrSlice = this.state.arrQuestion.slice();
        arrSlice[stt - 1].correct = choice;
        this.setState({
          arrQuestion: arrSlice,
        });
      }
    }

    if (choice === this.state.quiz[this.state.current].correct) {
      if (checked === false.toString()) {
        this.setState({ score: this.state.score + 1 });
      }
    }
  };



  render() {

  const Completionist = () => {
    if (this.state.score > 14)
      Swal.fire(
        "Điểm của bạn là " + this.state.score+'/20',
        "Chúc mừng ! Bạn đã đậu !",
        "success"
      );
    else
      Swal.fire({
        icon: "error",
        title: "Điểm của bạn là " + this.state.score+'/20',
        text: "Tiếc quá ! Bạn không đậu ! ",
      });
  }
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        return (
          <span>
            {minutes}:{seconds}
          </span>
        );
      }
    };

    return (
      <div className="text-black relative font-sans ">
        <div className=" bg-black absolute top-0">
          <img src={bg} className="bg-cover opacity-25 top-0" alt="hello" />
        </div>
        <div className="container mx-auto pt-10  relative">
          <h1 className="text-4xl text-center text-gray-100	uppercase font-mono ">
            Thi trắc nghiệm bằng lái xe A1
          </h1>
        </div>
        <div className=" container mx-auto w-full relative py-8">
          <div className="flex flex-wrap flex-column justify-between items-center ">
            <div class="w-24 bg-white tracking-wide text-gray-800 font-bold rounded  shadow-md py-2">
              <div class="mx-auto text-center">
                <i class="fas fa-file"></i> Đề 
              </div>
            </div>
            <div class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded  shadow-md py-2">
              <div class="mx-auto text-center">
                <i class="fas fa-history"></i>&nbsp;
                <Countdown date={Date.now() + 899000} renderer={renderer} score={this.state.score} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-wrap  container w-full mx-auto relative justify-around">
          <div className="w-full md:w-3/12  bg-gray-100  rounded-md self-start border border-green-600 ">
            <Control
              quiz={this.state.quiz}
              receiveId={this.receiveId}
              numberQuestion={this.numberQuestion}
            />
          </div>
          <div className="w-full md:w-8/12 flex flex-col bg-gray-100   py-2 px-8 rounded-md shadow-2xl">
            <QuestionsList
              handleClick={this.handleClick}
              quiz={this.state.quiz[this.state.current]}
              question={this.state.quiz[this.state.current].question}
              stt={this.state.quiz[this.state.current].stt}
              arrQuestion={this.state.arrQuestion[this.state.current]}
              image={this.state.quiz[this.state.current].image}
            />
            <BackNext BackNext={this.BackNext} />
          </div>
          <Result score={this.state.score} />
        </div>
      </div>
    );
  }
}
export default App;
