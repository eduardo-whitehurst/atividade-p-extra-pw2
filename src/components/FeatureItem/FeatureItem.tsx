import Logo from "../Logo/Logo";

const FeatureItem = () => (
  <div className="flex items-start pt-[94px] pb-[21px] pl-[160px] pr-[107px]">
    <div className="flex flex-col items-start w-[589px] mt-[9px] mr-[138px]">
      <span className="text-[#262220] text-[48px] font-bold mb-[40px]">
        {"Encontre o Lanche perfeito para qualquer hora do dia"}
      </span>
      <span className="text-[#3F3937] text-[20px] w-[522px] mb-[73px]">
        {
          "Com o IFPB Delivery você recebe seu lanche onde estiver, a qualquer hora"
        }
      </span>
      <div className="flex items-center self-stretch mb-[15px] mr-[63px]">
        <div className="flex flex-col bg-[#C47E16] w-[32px] h-[32px] sh pl-[8px] pr-[8px] mr-[12px] rounded-[1000px]">
          <img
            src={
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e3a395f-49fa-4409-a3f8-5563fbb5fb13"
            }
            className="self-stretch h-[16px] mt-[8px] object-fill"
          />
        </div>
        <span className="text-[#564F4C] text-[16px] mr-[48px]">
          {"Compra simples e segura"}
        </span>
        <div className="flex flex-col bg-[#564F4C] w-[32px] h-[32px] pl-[8px] pr-[8px] mr-[13px] rounded-[1000px]">
          <img
            src={
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/caf2f314-48d2-4ab1-a099-933aab3f3c0b"
            }
            className="self-stretch h-[16px] mt-[8px] object-fill"
          />
        </div>
        <span className="flex-1 text-[#564F4C] text-[16px]">
          {"Embalagem mantém o lanche intacto"}
        </span>
      </div>
      <div className="flex items-center self-stretch mr-[23px]">
        <div className="flex flex-col bg-[#DBAC2B] w-[32px] h-[32px] pl-[8px] pr-[8px] mr-[13px] rounded-[1000px]">
          <img
            src={
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7622d12-f2eb-46d0-97a1-113b340a5c11"
            }
            className="self-stretch h-[16px] mt-[8px] object-fill"
          />
        </div>
        <span className="text-[#564F4C] text-[16px]">
          {"Entrega rápida e rastreada"}
        </span>
        <div className="flex-1 self-stretch"></div>
        <div className="flex flex-col bg-[#7F46F7] w-[32px] h-[32px] pl-[8px] pr-[8px] mr-[12px] rounded-[1000px]">
          <img
            src={
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc316c65-2240-40eb-bf40-311ee4fd34bb"
            }
            className="self-stretch h-[16px] w-[16px] mt-[8px] object-fill"
          />
        </div>
        <span className="text-[#564F4C] text-[16px]">
          {"O lanche chega fresquinho até você"}
        </span>
      </div>
    </div>
    <Logo />
  </div>
);

export default FeatureItem;
