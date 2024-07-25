import dynamic from "next/dynamic";

const Cursorcustom = dynamic(() => import("./CustomCursor"), { ssr: false });

export default Cursorcustom;