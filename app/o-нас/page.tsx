import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import React from 'react';

const Index: React.FC = () => {
  const data = [
    { name: "Как правильно выбрать эллиптический тренажер?", title: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...", time: "27.01.2022", eye: "250" },
    { name: "Преимущества силовых тренировок", title: "Силовые тренировки помогают поддерживать здоровье костей и мышц, улучшать метаболизм и общий тонус тела...", time: "28.01.2022", eye: "300" },
    { name: "Советы по питанию для спортсменов", title: "Правильное питание играет важную роль в достижении спортивных целей и поддержании хорошего здоровья...", time: "29.01.2022", eye: "350" },
    { name: "Важность кардиотренировок", title: "Кардиотренировки помогают укрепить сердце и сосуды, улучшить выносливость и общее самочувствие...", time: "30.01.2022", eye: "400" },
    { name: "Как выбрать подходящий фитнес-клуб", title: "Выбор фитнес-клуба должен основываться на его расположении, наличии нужного оборудования и квалификации тренеров...", time: "31.01.2022", eye: "450" },
    { name: "Основы йоги для начинающих", title: "Йога помогает улучшить гибкость, снять стресс и укрепить мышечный корсет...", time: "01.02.2022", eye: "500" },
    { name: "Роль воды в тренировках", title: "Вода необходима для поддержания гидратации, регулирования температуры тела и улучшения производительности во время тренировок...", time: "02.02.2022", eye: "550" },
    { name: "Как избежать травм при тренировках", title: "Избегать травм можно, следуя правильной технике выполнения упражнений и не забывая про разминку...", time: "03.02.2022", eye: "600" },
    { name: "Польза плавания для здоровья", title: "Плавание улучшает работу сердечно-сосудистой системы, развивает мышечную силу и гибкость...", time: "04.02.2022", eye: "650" },
    { name: "Как начать бегать: советы для новичков", title: "Бег помогает улучшить общее здоровье, выносливость и настроение. Важно начать с небольших дистанций и постепенно увеличивать нагрузку...", time: "05.02.2022", eye: "700" }
  ];

  // Function to chunk data into rows of 2
  const chunkData = (array: typeof data, chunkSize: number) => {
    return array.reduce((result: typeof data[], item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  };

  const rows = chunkData(data, 2);

  return (
    <main className="mx-[20px] lg:mx-[138px]">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col lg:flex-row gap-[24px] mb-8">
          {row.map((item, itemIndex) => (
            <div key={itemIndex} className="flex flex-col justify-between w-full lg:w-[48%] rounded-lg h-auto lg:h-[417px] bg-white text-black pt-[38px] pl-[35px] pb-[45px]">
              <div>
                <h2 className="text-[#1e1c14] text-[24px] lg:text-[32px] font-[700] font-[Fira Sans] w-full">
                  {item.name}
                </h2>
                <p className="text-black text-base font-normal mt-2 font-[Roboto] w-full lg:h-[110px] leading-snug">
                  {item.title}
                </p>
              </div>
              <div className="flex gap-[39px]">
                <article className="flex gap-[5px]">
                  <CalendarOutlined />
                  <span>{item.time}</span>
                </article>
                <article className="flex gap-[4px]">
                  <EyeOutlined />
                  <span>{item.eye}</span>
                </article>
              </div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}

export default Index;
