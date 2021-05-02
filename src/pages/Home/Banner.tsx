import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Space, Typography } from "antd";
import {
  DollarOutlined,
  EuroOutlined,
  PayCircleOutlined,
  PoundOutlined,
} from "@ant-design/icons";
import { Theme, PreferencesContext, Fiat } from "api/contexts/Preferences";
import Search from "components/Search";

const { Title } = Typography;

const Banner: React.FC = () => {
  const { t } = useTranslation();
  const { theme, fiat } = React.useContext(PreferencesContext);

  return (
    <div
      className="home-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "-12px -12px 12px -12px",
        backgroundColor: theme === Theme.DARK ? "#121212" : "#4A90E2",
        padding: "40px 0",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "18px" }}
      >
        <img
          alt="Nano block-lattice explorer"
          height="20px"
          src={`/nano-${theme === Theme.DARK ? "dark" : "light"}.png`}
          style={{ marginRight: "12px" }}
        />
        <Title
          level={3}
          style={{
            display: "inline-block",
            color: "#fff",
            margin: 0,
            fontWeight: 200,
            fontSize: "28px",
            whiteSpace: "nowrap",
          }}
        >
          {t("common.blockExplorer")}
        </Title>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <Search isHome />
      </div>

      <Space>
        <Link to={"/what-is-nano"}>
          <Button ghost>{t("menu.whatIsNano")}</Button>
        </Link>

        <Button
          ghost
          href="https://pasino.com/?user_id=18828"
          target="_blank"
          style={{ padding: "0 10px" }}
        >
          <span
            className="anticon"
            style={{
              color: "gold",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <svg
              viewBox="0 0 1280 1024"
              focusable="false"
              data-icon="dice"
              width="24.75px"
              height="20px"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M1184 384H946.52c25.38 59.18 14.24 130.4-34 178.64L640 835.16V928c0 53.02 42.98 96 96 96h448c53.02 0 96-42.98 96-96V480c0-53.02-42.98-96-96-96zM960 752c-26.5 0-48-21.5-48-48 0-26.52 21.5-48 48-48s48 21.48 48 48c0 26.5-21.5 48-48 48z m-92.74-373.4L517.4 28.74c-38.32-38.32-100.46-38.32-138.78 0L28.74 378.6c-38.32 38.32-38.32 100.46 0 138.78L378.6 867.26c38.32 38.32 100.46 38.32 138.78 0L867.26 517.4c38.32-38.34 38.32-100.48 0-138.8zM192 496c-26.5 0-48-21.5-48-48 0-26.52 21.5-48 48-48s48 21.48 48 48c0 26.5-21.5 48-48 48z m256 256c-26.5 0-48-21.5-48-48 0-26.52 21.5-48 48-48s48 21.48 48 48c0 26.5-21.5 48-48 48z m0-256c-26.5 0-48-21.5-48-48 0-26.52 21.5-48 48-48s48 21.48 48 48c0 26.5-21.5 48-48 48z m0-256c-26.5 0-48-21.5-48-48 0-26.52 21.5-48 48-48s48 21.48 48 48c0 26.5-21.5 48-48 48z m256 256c-26.5 0-48-21.5-48-48 0-26.52 21.5-48 48-48s48 21.48 48 48c0 26.5-21.5 48-48 48z"
                p-id="1483"
              ></path>
            </svg>
          </span>
        </Button>

        <Button
          ghost
          href="https://earn-nano.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {[Fiat.CAD, Fiat.USD].includes(fiat) ? <DollarOutlined /> : null}
          {fiat === Fiat.EUR ? <EuroOutlined /> : null}
          {fiat === Fiat.GBP ? <PoundOutlined /> : null}
          {[Fiat.CNY, Fiat.JPY].includes(fiat) ? <PayCircleOutlined /> : null}
          {t("menu.earnNano")}
        </Button>
      </Space>
    </div>
  );
};

export default Banner;
