import { ReactNode } from "react";

interface ShellProp {
  children: ReactNode;
}

const Shell = ({ children }: ShellProp) => {
  return (
    <section className="bg-ddc-background">
      <div className="mx-[4.5rem]">{children}</div>
    </section>
  );
};

export default Shell;
