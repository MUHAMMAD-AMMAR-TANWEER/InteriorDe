import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Link href={`/privacypolicy`}>
          <div className="flex font-light text-xs underline ">
            Privacy Policy
          </div>
        </Link>

        <div className="flex font-light text-xs">©2023 by LR Interiors</div>
      </div>
    </div>
  );
};
