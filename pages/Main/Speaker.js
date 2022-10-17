const Speaker = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <a>
          <Image
            src={LogoFile}
            alt="AsyncSwift Community Logo"
            width={62}
            height={60}
          />
        </a>
      </Link>
    </header>
  );
};

export default Speaker;
