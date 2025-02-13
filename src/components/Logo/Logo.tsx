function Logo() {
    return (
        <div className="relative w-[446px] h-[429px] flex items-center justify-center">
           
            <div className="absolute w-[470px] h-[450px] bg-gray-200 rounded-[50px]"></div>
            
           
            <img 
                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58e56f86-de1e-4da8-9c5f-284b2b66a8e6"} 
                className="w-[446px] h-[429px] rounded-[183px] object-fill relative"
            />
        </div>
    );
}

export default Logo;