import { CheckCircle2 } from "lucide-react";
import React from "react";

interface Props {
  message: string;
  children?: React.ReactNode;
}

const Success: React.FC<Props> = (props) => {
  const { message, children } = props;
  return (
    <section>
      <div className="relative items-center w-full px-1 py-1 mx-auto  md:px-3 lg:px-6 max-w-7xl">
        <div className="p-2 border-l-4 border-green-500  bg-green-50">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle2 className="text-green-400" />
            </div>
            <div className="ml-3">
              <div className="text-sm text-green-600">
                <p>{message}</p>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
