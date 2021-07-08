/**
 * @version 1.0.2
 * @author Trejocode - Sergio
 * @description Componente de navegación <Aside>
 */

import Link from "next/link";
import data from "data/nav.json";

const Aside = () => {
  return (
    <div className="aside justify-center">
      <div className="container column">
        <ul>
          {data?.map((item, key) =>
            item?.isMultiple ? (
              <li className="level-container" key={key}>
                <ul>
                  <li className="level">
                    <Link href={item?.anchor}>
                      <a>{item?.title}</a>
                    </Link>
                  </li>
                  {item?.sublevels?.map((subitem, subkey) => (
                    <li className="sublevel" key={subkey}>
                      <Link href={subitem?.anchor}>
                        <a>{subitem?.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className="level" key={key}>
                <Link href={item?.anchor}>
                  <a>{item?.title}</a>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
