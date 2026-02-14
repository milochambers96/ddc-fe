import { ReactNode } from "react";

interface ShellProp {
  children: ReactNode;
}

const Shell = ({ children }: ShellProp) => {
  return (
    <section className="bg-ddc-background">
      <div className="md:mx-[4.5rem] mx-[2rem]">{children}</div>
    </section>
  );
};

export default Shell;
