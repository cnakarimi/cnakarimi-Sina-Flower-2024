"use client";

import "../../../styles/fonts.css";
import { useEffect, useRef, useState } from "react";
import DetailHero from "./DetailHero";
import AddToCartButton from "./AddToCartButton";
import Reviews from "./Reviews";
import About from "./About";
import Maintaining from "./Maintaining";
import { supabase } from "../../../../lib/supabaseClient";

interface Plant {
  id: string;
  name: string;
  price: number;
  picture: string;
}

const DetailNavbar: React.FC<{ productId: string }> = ({ productId }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>("");
  const [about, setAbout] = useState<boolean | null>(false);
  const [liked, setIsLiked] = useState<boolean | null>(false);
  const [disliked, setIsDisLiked] = useState<boolean | null>(false);
  const [isReply, setIsReply] = useState<boolean | null>(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    name: string;
    price: string;
    image: string;
  } | null>(null);
  const [plants, setPlants] = useState<Plant[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPlants = async () => {
      const { data, error } = await supabase.from("plants").select("*");

      if (error) {
        console.error("Error fetching plants:", error);
      } else {
        setPlants(data as Plant[]);
      }
    };
    fetchPlants();
  }, []);

  useEffect(() => {
    const product = plants.find((item) => item.id === productId);
    setSelectedProduct(product); // Only runs when `plants` or `productId` changes
  }, [plants, productId]); // Add dependencies

  console.log(selectedProduct);

  const switchToCmsHandler = () => {
    if (about) {
      setAbout(false);
    }
    return;
  };
  const switchToaboutHandler = () => {
    if (!about) {
      setAbout(true);
    }
    return;
  };

  const giveLikeHandler = () => {
    setIsLiked((liked) => !liked);
  };
  const giveDisLikeHandler = () => {
    setIsDisLiked((disliked) => !disliked);
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const replyHandler = () => {
    setIsReply(!isReply);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  }, [value]);

  return (
    <div className="font-yekan w-full">
      <DetailHero selectedProduct={selectedProduct} />
      <div className="container mx-auto sm:px-0 px-2">
        <h6 className="mt-8 px-4 font-semibold sm:text-xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        </h6>
        <Maintaining />
        <AddToCartButton />
        <div className="flex justify-center items-center">
          <a
            className={`pl-3 border-l-2 border-zinc-700 border-opacity-40 text-xl cursor-pointer transition ease-in delay-75 ${
              !about && "text-lime-700"
            }`}
            onClick={switchToCmsHandler}
          >
            نظرات
          </a>
          <a
            className={`pr-3 transition ease-in delay-75 ${
              about && "text-lime-700"
            } text-xl cursor-pointer`}
            onClick={switchToaboutHandler}
          >
            معرفی محصول
          </a>
        </div>
        <About about={about} />
        <Reviews
          about={about}
          liked={liked}
          disliked={disliked}
          onLikeClick={giveLikeHandler}
          onDisLikeClick={giveDisLikeHandler}
          onReply={replyHandler}
          isReply={isReply}
        />

        {isReply && (
          <div className="ml-28" ref={bottomRef}>
            <textarea
              ref={textareaRef}
              value={value}
              rows={1}
              id="autoGrowInput"
              onChange={handleInput}
              placeholder="پاسخ شما"
              className=" bg-slate-200 w-full h-12 text-lg outline-none px-3 pt-2 mb-24"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailNavbar;
