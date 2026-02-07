import { ReactNode } from "react";

interface ShellProp {
  children: ReactNode;
}

const Shell = ({ children }: ShellProp) => {
  return (
    <section className="bg-ddc-background">
      <div className="mx-[0.274rem]">{children}</div>
    </section>
  );
};

export default Shell;
