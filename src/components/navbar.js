

import React, { useState ,useEffect} from 'react';
import { Container, Nav, Navbar, NavDropdown, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BasicExample() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPrimeDropdown, setShowPrimeDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state to track login status
  const [userName, setUserName] = useState(''); 

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handlePrimeMouseEnter = () => {
    setShowPrimeDropdown(true);
  };

  const handlePrimeMouseLeave = () => {
    setShowPrimeDropdown(false);
  };

  const handleLoginMouseEnter = () => {
    setShowLoginDropdown(true);
  };

  const handleLoginMouseLeave = () => {
    setShowLoginDropdown(false);
  };
  const handleLogout = () => {
    // Perform logout actions (e.g., clear local storage, reset login status)
    localStorage.removeItem("userName")
    setIsLoggedIn(false);
    setUserName('');
  };
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };
  // Array of cities
  const cities = [
    'INDIA',
    'Nearby Cities',
    'Bangalore - East',
    'Bangalore - South',
    'Bangalore - West',
    'Bangalore - Central',
    'Bangalore - North',
    'Popular Cities',
    'Ahmedabad',
    'Chennai',
    'Gurgaon',
    'Hyderabad',
    // Add more cities as needed
  ];

  return (
    <Navbar expand="lg" className=" nav_ffix bg-body-tertiary">
      <Container fluid className='  bg-danger'>
        {/* <Navbar.Brand href="#home" className='text-white'>Magicbricks</Navbar.Brand> */}
        <img className='mx-3' src='https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Bangalore"
              id="basic-nav-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={showDropdown}
            >
              {cities.map((city, index) => (
                <NavDropdown.Item key={index} href={`#action/${index}`}>
                  {city}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title="MB Prime"
              id="basic-nav-dropdown"
              onMouseEnter={handlePrimeMouseEnter}
              onMouseLeave={handlePrimeMouseLeave}
              show={showPrimeDropdown}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUQEhIVFRUQEBUVFRYVFhUVFRcYFxUWGRUXFRUYHSggGBolGxUVIjEiJiktLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi8dIB8rKy0rKy0tLS0tKy0tLS0tKystLS0tLSstLS0tLS0rLS0tLS0tLS0tKystLS0tNy0rLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xABFEAACAQMCAwUFBAYIBAcAAAABAhEAAxIEIQUTMQYiQVFhBzJxgZEUI6GxFTNCYsHwFlJygpKywtFDU2PhJCVUc4OTov/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBQb/xAAxEQACAgEDAgIJAgcAAAAAAAAAAQIRAwQSIQUxQVETIiMyYYGhsfBScRQVM0KRwdH/2gAMAwEAAhEDEQA/APbqSkmiaAWmmofEOJJZRnJkptj4lvAUaLiKXUV1Pv8Ah4g+IPwqr0+O63Kzv0cq3VwS6SlNJVpwFIaWmk0AGkpMxOMiYmJ3jzjyoqAFFFFAJRRRQBRRRQC0UlFAFFLSUARTYp1FKA2kp0UkVFAbRTqSKmgMIptdCKYRQDDSEU8im1FEoZUnTaYMJJPWo5FS7NrO06TGQZZ8pEUJYfYk/rH6imXdLbUSWMem5+QAk1R/0atCVS5aUqyyMRBAW1COoIlS1ssR+/Vdc7NnNbYezhmWN0BQyd24eXbGUqO9OO46mR0rlt+RfHHB/wB30NW+ntBghfvMGIH9kqG/zL9aPstuSuRkAE+W5IG8RO3T/eqRuziEKOdY2VxPKUlg4AzY573e6e/5+FOHZy2sMt21t1zRXViz3SWZchL/AHsA+Y9YqbfkcuMP1fQt7OntOAyuYJIHQSQSOhHmD9K7/oxfM/hVFpuzq5DG+rFbwuyVDMIJlV70BYKiCDG56mtVUr4nE0k/VdnKiabRXRWUvF9IrOciIYAwQx9PAelHCdKquII7oOwDD08R61aarVpaXO46osgZMQok7ASfE12ryv5XD0/pr8brn/v+jT/ES2bDBac6xL+sFgFl1Wse1J6WGCoedv1XAv8A3kXzqmW2AmgFzDEaTUgnULdZJ54iQm+UTHzr1WivVM9GS4EW/RRDZyqXVBbKWAdsWXIZYEe6DvEV3Ni7ZS5eRRaAsqAobPJsh34iBtt860Op1C21L3GCqIlmIAEmBJPqRTmaBPgBJrPkwb5brrguhl2qqM/rrty01yGlxprZzwWZN0z0HSD0pNRevob33zEWDbIlF72cSDA6D0q+019bircRgyuoZWG4IPQj0rpXD078JP8AL/PkSs6/Svyvz5lAutvHUFCY+9xwPQp5juzMbzlHhV8aDRVuODhdu7K5zUuyoSiuen1CXJKMGxdkaPBlMMp9Qa6VacBRRQTQBRRRQC0lFFSAooooAoNFITUECUUtJQBTTTqQ0BzIptdaYRQlDCK7WNRgIid5rlSGhIt9bTmXsqSTMkD8aYbVncchYMSIEbTG3zNFJUE8jiLO33C93psNp6xttTQtn/kLuIOw6TMdPOkIphoOTtYu2rZlLKqYiRA/h6Cu/wCk/wB38agkU2gqy5oooro4Mv2u0dzV3LWlS2GQW7ty4XLIklDatjIKe8OY7Afug05tTeucOViz2bwVEc4XC2SOFcQgLANie8BsGkVK4rxo2tVZ0ywOYrXLjutwgIhAgFdgTJ7xMLAnqK6W+02lZXfmwttA5LI6yhIUXFyHeSSO8JFCTMX+JXGKq76uyDw0OttM7lzncx1Qs2GRmBGQE7TXU6jXG9bW4xttjpisC6bbEheeCttGRiWzByIx2IjrWmXV6fK3qOjamLFtyrgtuzKsEbSQxBIE1yu9pdMonmEg5+6lxoFtsXYhVMIGBGR2260JM/d1F42NQWbU/agWBt4vylXnqF5QC4HuRBBJMt610ua6+2sxUXVQ3b1p0bmspQWWKPuMEBYDHEyfE+FaO5xqwodjcEWRbLkBiALscsggbzI6U/S8UtXbj2UfJrJIcQ0KQYILERO/Sem9BRnVFy3wvTBWe062rIYY3QxhZa2TbUvbmIyjb51Fu6vVvdTe5YDWtMbQfnMJMc5bvLtsHeZU5kQIIjc1ox2i0+Bu8whM1QOUuBWZiQuBx74JUiRNKnaCwUzDsZuG3gLdw3c1EleVjnIXfp03oDNniGpa/cKC+qm3rAUPNbFrYPJYEripMSoTwImTXdWuodONRd1XKuaYXGZA5Y6hipKXOWsooHRdhuZmr79PWJtqrlzeUMgRHc4kwGbEHBZ2lo6Hyrha7QW1tC7dMDO6C1tbr21Fu4yEu+Hd6CZgTMSN6gUUvD7F61dFxTeAucX1CPbg8vlNmcyseYUhqTtHrbg1Gotrd1ClNHaewlkMwN4m6BlCnrC7NAO/lWg0fE2uXNUkLGldFUie8Gsrc73zaNvCq7gHHtPeT7S5W3ffR27l4kOqhFknFm2ZVZmEidzUkEMa7UnWWhF1Yvpbur961tlNmWcDHlomfQyTIO/hURtNdbS6S/fualmGsVrsZZW1HMQFUVchHd3gnvE+NaZe0mmxZzcKhCgYOlxGHM2tnBlmG8DEUaTtHprrrbW4cncoAyXFh1klGLKArwCcTvFAU9s6kXVu53z/AOaXLPLM8vkENBKx0kCGqts6rXcm+5e4Ly6S6Wt43iwvBhgbYNsIsbgBCZBneJrZaLjFm82FtyTiWEqyh1BxLW2YAOoJAlZ6jzqdNAcNDZKIql3cxJZzLEkyZgAePTwFdqKKAKJooNQBJpJooigCaSinqnnQDJpK6wppr2yKkgYaY1ONdLVkMJmIqCThTTUtdOp/a/KoriCR5GhNjTTafTTQkQ00inUVAOZpIp5ptCS0pJpKK6Kys4lwZb90XGY4/Zb9hlA3IvYScp2IC+XjVXe7KPdQrd1AYjSjTW2W3jimaMWYZHJjy1HgPStPRUElR2s073dObdtGa4zpyyCBy3VgyXWJ6KpWT1J6eNRW7MlAvIvC2fsn2ZyyZ5LJOYGQh5ZjJkd7cVoaKEozN/skYa3bv4WrlrToylM2nTxgVfIRIAnb4RVzw3Qcg3jllz9Q97pGOQUY9d4x6+tTaSpBkdZ2bu21+6cFrmt09zG3bwtW8HYvcFouRJmWgiYG1d73ZPObr3Va+19rrMbf3Rytrbw5YeQAqLvlMitRSUBR6PgLWLi3LFxLf3SW7qcqbbBGZgbYzm2e+/iRvVfq+xmdvlc8Y46gQ9vIA3rrXM0GYCuuWORnbyrWUUBXaDhPKa+2c/aSh6RjhZW157+7PzqrbsirWrdlrpK2tA2kJCgEybZFwbmINsbb9a0tFQDP3ezj3WN29fDXC+m3W3iuOnucwDEsTLEmTPwFdm4BLZczrr/tUY/9PDCZ+c/hV1RUgoez/ZpdIwINtglspbbllboUkbPczIbYAbKJgVfUUVACiiigCg0E02hAtAE0RQWqQLsKaxpKKgBTkuketNpKA74K3TY0qoQrA/ztUeuiXyNjuKkgbpPe+Rrld94/E1MtKpOQ+lRtQhBO3UmoJRxpKWkoSNoooqCRCKbFPooCdRSUV0cCXLgXckD4mKdVXxW0ZJMQwABIyggMYCjeScd/Sl4zp3YWsQ7hLpNwJc5TMvJuKO9kv7bIevhMbUJLOis4mm16KQLgLBVk91sjFlXIy8YF4joJxmu1u1qy9suzQl9C+PJVGt8lw3d3bLmFSwmIHdJihKL2is+NPrFuO8yl26CVVlLoql1ATmd0Fl5RP9lvEiljXd3vR3XyhbLjODGIyXue7jO8zlUAv6KoRb1jW7oYlWNq1yyGtAhwBzFBAgyQe8YG8RAyLms6t0vKx6lcIZVJi6xdUZPdBtYKCdwxbwg0BeUVnV0+tSBbKqjMxxuMHe2pYgLkZyMPn1IHLCzvNPKa4Ed8FS6ltrRIEvKgSoKwLZO+W5jyoC/oqifh+pufZ87xUorG8VMd8tbKqoQqCIDiSCIJkGaj3Tr0QEnI8tMsRbIyOOYUROQctB93ECd6kGlorPKmvJguAIUTFokDmiSxmOYLc9AVJrm2m165YPMu4yblu2Ju3imKkqsBWsyDBgMB4UBpaSonDebD87rzXwPd3TbHZZA8R1JMSYmBLqAFBoJpmU1IFpaMaKAQmqzj/HbGhtc7UPiswoAlmbwVVHU/hVma+d/azxlr3Ebqd7HTfdIp6CACxA8JJ+cD0qCDban2w2we5ppUkgFn3+JUL0+Bq74D7TdJqBjeJsPMd6WQ/BgJHzHzrxLgnBruqjAGA258qt+J9jNTZR7pCuLaljuZP9aI8hVbmk6bLlibV0fQuk1lu8udp1dT4qZFdq839jul1lm06X7JSy33ltmZTOW8IASY3Jn19a0PtH7QPw/Q3L9v9YxW3bPgrOYyPnAk/GKsKjC+0b2kavS6xtNpSiLYgMWQOXYqCevRd428qruF+2LUkgXltnfchYB+Uz+NWXZHgyXLa6i8guXbyq73LgzYlhPVvSKsu1vZfS3tPccW1FxLZZWQAMCBPh4VQ8yuqNKwNK7NT2X7Y2Nd3UJS6BOB8R4lG6MPxrXW7nclt6+TeBa25Y1Fq4hOaXUKwepyG3z6fOvq5f1bfE1cjNKhHsKwlT/P8KhcweBmnMsiD0NU6ag274sMoCuWKEAgHxjymK5nJosxwUi2miudo7kfA10pGVqyJKnQUUUV0ck2iiipOBMvQ0T6GoGr1zrcwS2GAUGST1M7bDyFc9fxJkt2WBROc4VnuSbdv7t3lt1mSoUbjdh8CJLPL0NGXoapuG9oOaVVrLqWSdu93gllmAX3oi+u5Hgai2O1QZo5ZId0VACMhIlg5mA/Tuddm8qA0c+hoy9DWfHapcSzWWUYAqSywSRZKjbpIvp8wfjTn7Ur15bAMJQsyqp/Vzmf2B96nxMjykTRfT6GjL0NZ3UdoLqJbOCzd0iXwQGiFtu1/bLwPKA3/wCKPKu/9IwGGVvFGnvF1B21Aslo/qgnImdhFBRd5ehoy9DVBp+063ntpbWC5tEzvC3FUkQIhhmu+43NKnH2tsUuqrnmMi8tShIV8NlZiXMwSB7o3oQX2XoaM/Q1QHtUhVnW2WVEDFs1xiLfj4xzfCT3T1MA3wMgHz3oAz9DS5ehpJomhIuXoaWabNJNAPmkFNooBxNBptONAJXhHtT7NFddcvhpGovJK4nYMttSZ+Ne7VifadoxylveRwY+PUFY+jT8vKuJtpWjvFTdMzel7Ne6bXdUKZxd0IbzXAiPiZqw4ob5sKqFiIdXaFct4Cct4g+G9VXCdW1y0FS5sGOSnxBq04fkl1BamHYKwZiRkSNlWfPx9Kx8m61TNP7O+G3dLw7T2b0i4qsSpM4BnZlT+6pA+VP7e8BPENDe0yzmVD24je4neQGfAkR860JpK3I848n7KcFNu6ZbuPYYOkmCNguUnr1q64JwVdPkVZSASNlVevgcdz8DPWsR2l066TX3F1XOwaWt4MQr2ydiCCOkQR4H5Gu2q7QJauYad3ui6i7EyQfBZ6kgEeNZJRZ6EZxrgz+l7OXvt1prQXC7xEizv4W7pYmPBQEP0FfSds9xvn/CvJezPBL44jprjsOTprDvDMBF26HDKi9TuQfLY16zZPcb5/lWjHK0Y80alSI1ctVazUrMeR8iNwfrXWkrt8nC4IVq6xBJXv2zDCevwPkdiKk2rgYBhuGEiqniFsWtQt7eLqG225iRuu3wn/DU3QuB93AEbrHlVMWovaXSTktxLoooq4pJtFFFScBiPKlx8IqK98BiuPTqdusT+RpvEdZa06hrgMMxUQpYyEZzsPAKjH5UOiZSRUI8R0435toderKOgk9fIb/I0r8R04mbtoYgEy6iA0Yk7+OS/wCIedCLJkURUC/xSwgnNWnH3SrGGUsrGD7pCneuq62yYHMtyWKgZLOQiR16iR9aAl0kVWnjOn5b3gwZLThCyjIEkIe7jOQ769PXyqRc1tlZBdJXYjITOOURPWN6AlRS1BHE9PIXmJLBiBI/ZALT5EAil/SWn/51rZMz3192AcuvSGXf1FATIorhav23JCMjFYkKQSJ6THSuuI8hQBFEUmI8hSYjyFBYsUUhUeVLQkKKKKAqu0XEzp7YKxncfBZEicSd/oB8xSfpTHRpqWMSilpjr0II85qs9oNsLp/tTXVRNOCWV5xcMVAAjfOQuMeJqg7S8XN3s8NTbleZyveCsQDfCMNwRPkRv47GuFGTkyy4KK87LsdvtOizqJtbTOzA/CKy/FO1v6UlLdsrp1udxm9+4wBBJH7K94QOvn5V4/qbxPvEk+Zk1tvZ1fyW5p56d9fge60fA4n50yY5KDV2ycc4vInVIlfo29YctafFvLz+VbfsTrrZvizqWnWcs3LYK4pyzseX4F9jPjB28a6WiuxKHICJgfWs37QLwt2bVxYW6upU22HvLCtlB+H8Kz4oz3co0Ztu10er3tUie8wHzqDqeNovugtt8BXmei7aJeSL8I4jce42xB6e6TJ+tXvBNYt63sQcTH/evL1ms1mO7jt+v17HWDBhmruxvbnRrr7A5qjO2SbTJKspI76+TAwOo8PPes32R7LrbYXWyZt/eBGO/TfxrbgAjE9PD0ruiACvOXVs0ItP1n8TUsEE7SOVq1iZ8f56VouDP9zc36T/AJaonNW/Aj93dH8+6ajp2Wc9S5SfLUvscapez+aOX20ipFrWg9dvxqpvvArnZvfnWbT9T1ON7t1ryZM9PCS7Flxu3zLJKkShVwesQRP4SPnUex3sW8VqBq1/aHU7H1B8K7aO9AitOq6rlyxTh6vmRDAoRruX6NImlyqLpLs7VIivpdDqVqMEZ/5/c87JDZJosKKKK2FBzvadX94TEfgQR+IrnqdDbu4B1DC0+ag7jIKygkHrsx+cVImih0ist8AsKWIWM+ZPun9ZOYMjvDc7NPU0lrs/YUqYc4FSsuxgqbRnfxJs25/s+pq0ooCnTsxpx4P7gT3z7oULH0FObs5py2ZUkyx3gjvY5CIge4pkQZEzVtRQFaOBWcOWwZ1NzmEOxbJhbFsZeYCgbeYBrn/R2z+/+z+1/VQoN4mcTBPUiASQAKtqKAqv0BZ398ZTMNGzKFIgCP2V9TG80g7PWAoUBgFYMsMQQVVVUj1GC/SrakNAQ9Fw23ZZ3Qd66ZYmJJJJJmJ3JJ8pO0VLopKChZopKKAKKKKAKKKKA8n9t3EHuvpuG2wZuNzm32J7yII8QO+x+ApeMWwnB30QONq3bBDGXIZLgud4ASAzAjxifKoPaDXs/aJlb3bNgWgPALgHJ+OTmtLeOOWMNKsIXJ3PdJAAiCTHuxvVeSbUkkX4ccXFtnhMTVr2J1fI11rfu3H5Z/viB+MV1tdkeIN00Gp/+l1/zAVLs9hOKSrrob0o6sJwXdSCPeYeVaXyjKuGesgV5r7TNdlqEtDpZtSf7TmT+AX616yeE3yZ5Z39V/3rzji/s54nqNRdvclALlwkZXrfujZdgT4AVVjXPJozS9Xg8/tMw8THl4fKtR2D4obWqCE926CpHhMSD+FWieyXiR8NOPjeP8ENStF7I+IpcS5zNKMGU/rLp6Hf/hVGqxxy4pQfiirFJwmmbZetSKlabs3fAhntyPLL/apK8CuD9tfoa+Mn0vVXxA9hanF5lWxq27OGVvD0H5Goeu0PKKqXDM8kKo70KJY7n+Zp3BdVyxcAElreQMwGAVmUwdwfCK29O0GbFl3TVcP6orz5Izx+ryRb3Sq27au7OqOUkgsBPQ77dfPf0qz2I26eE1eadYVR5KPyrL0vRLLOcJ8bTrNn9Gk14mSa/mcJjIbeEEfx6U9NV0kwfGSQJ+PhWqu2FfZlVviAa5DQWtvu129BW+XQ34S+hT/GrxRX8Kcs2wMDqTuPr41b0RHSivU0WjWmx7E7t2ZsuX0krJs0TUTXcUs2AGu3FQEwCxgExMfhUL+lWi/9Ta/xVr3xXdnMNNmmrjBtfBNlxNLlUHQ8WsXwTauI4UwSpmJ6VK5q+Y+tdbk/E4lCUHtkqZ0yoyrnzV8x9aOavmPrS0QdMqWa5c1fMfWjnL6fWloUdJpJpnPXzH1o56+Y+tLQofSU3nL5j60c5fMfWm5Ch1FN5y+Yo5y+n1puQodRTecvmKOcvp9aWhQ6im85fMUc5fT60tCh1Mu3Qil2MKilmPkAJJ+gpecvmK819tfaO5Zs29HaEDW5i4/XuKVm2PIksJPkI8dpTRBjeC6ttdr9TxJpxZituQBIMBRA8kVfm1T+K+02/orv2exZtHBQWa6GLZHwGLDaIqNwK6Ftqq9FUf8Af5zNY3tWwbVuw8Qs/ED/AGiqoPdlL5x24ka657YuJHoNMP8A4mP53Kjv7WeKN0u2gfDGyv8AGaw6CpGgSblsed1B9WFaqMqPdNV2n1K2yxu7rbknFOoHwrypvaFxRuuuuifIWh+SVue0zY6a4f3CB9K8hAqvHzZdmpVRft234keuuvn+/H+WKSx2k1tx1Da3UwzAfrro6mP61UZFNV4qxx4opT5PX+z/ABO6696658d3Ywf2huekifnVpptS17dGLL4sGkbHeD415PoeM5XbYvGLRdeaF6EebeYncjyr0nWcZU3LWmtdbp2x6BApJbb9kQB8SK8LLotj3zfxo9XHnUuIls3FbNtlK2gbibCBuJ671IW+13HuYAeAP4fCo2i0Krv+PjVpbEV5Gq6nNrbDg0RxJHVRAiry17o/sj8qpBVvp764ruPdHjVvQJe0yX4pfczaxcI7UUz7QvmPrR9oXzH1r6jcvM8+mONJNN+0r5j60n2lfMfWm5eZNPyMx260Yvpp7JcrzdWiKQuW7yokSNt5+VYa32ZzNsLd3vm+LcrG9hZfM5d2TIHXpJia23b6zee1aNhbhdNQGBthslhWhgRuN43rBjh2vAI5eohyxYQ++Qh5+I2PnXl5q3cqz7jos5LSLblUe/Dr48/Z/KjddgdENOL1sNl+oeYx/WWVuARJ6BwK1k+tZLsBavql06gXAxdADcykhVgAZeA2FautGL3VR851Vt6ubbvtyvHhC/Oikoqw88WlpKJqALRTZompA6imzRNBQ6imzRNLAtLTZompsDqKbNE1AHV597XuB6nW29MumtG6bd12aCoxlVCzkRt1+lb+aJqVKnZDVo8L7LaW7dunRFCl9Cc0YEYgHdm/dEjfxkRMiqn2g6K3p9YdOhDGzaQXHiC9xpdifQBkAHkK+iMRMxvETG8eU1839udQLvENU4MzqGX/AAQn+mr8T3SsryP1aKa3VhwFMtTZX/rJ+DT/AAqvSrbswJ1dn/3P9JNaH2KY90bztpex0pHi21eYtW97eX/uwv7wrBNXGJcFufuIz1ymr/sRZD8Q0qMoYNe3UiQRgxII8RAra8b9l1m2bl5L7ramUshQSCT7vMJ93fbaYqMmWMO5zCDl2PM9DpXvOLVtcmcwB/EnwFev9lezo0oLs5uXXVVZz4Ko2RPJfzqJ2Z4MmnEhQGPzgfE9TWrs9K+Z6p1CWT1IcL7nqafTLHy+WdVrslcTXW08ivnpLg2M6zUi2NhUauqnYV6fR/6sv2M2o7I6RQaablNzr6IyDvnRFNzpudBRY8yk5lLRV9FYmfrRnRRSgJnRlRRU0BMqXKiijAZUZUUUoCZUuVFFKAmVLnRRQBlSZUtFAJlS5UUUAZUmVFFAMv3wis5MBFLH4ASfyr5fvX+YzXD1uMzn4sSx/Oiir8C7lOXwGirjskf/ABdr0Zv8jUUVc/dZXD3kXPbm9JVfWsqaKKjF7p3m981Hsw0+fEbR/wCWl1//AMFf9Vevdot7J32DAn4fyaKKy6mKm9r8SzDLarKvh6rGxmrACiivi9Sts2j2Yu1Y8LNOTTgGY3oorFKTXB2dhQzetFFev0Ve0k/gZdR2Q3P1NNLetFFfQmQQt603P1ooqSUf/9k=" />
                <Card.Body>
                  <Card.Title  style={{ color: 'white' }}>MB Prime</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Contact upto 30 Owners directly</li>
                      <li>Access to Prime Exclusive Properties</li>
                    </ul>
                  </Card.Text>
                  <Button variant="danger">Join Now</Button>
                </Card.Body>
              </Card>
            </NavDropdown> 
          </Nav>
          <Nav>
          {isLoggedIn&&(
            <NavDropdown
              title={<div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{
                backgroundColor: 'red', // Tomato color for the initial badge
                color: 'white',
               //  fontWeight: 'bold',
                width: 30,
                height: 30,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 5
              }}>
                {getInitials(userName)}
              </span>
              {`Hi,${userName}`}
            </div>}
              id="basic-nav-dropdown"
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handleLoginMouseLeave}
              show={showLoginDropdown}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>My Activity</Card.Title>
                  <li><Card.Link href="#">Requested Properties</Card.Link></li>
                  <li><Card.Link href="#">Contacted Properties</Card.Link></li>
                  <li><Card.Link href="#">Viewed Properties</Card.Link></li>
                 <li> <Card.Link href="#">Shortlisted Properties</Card.Link></li>
                 <li> <Card.Link href="#">Searches</Card.Link></li>
                 <li> <Card.Link href="#">Recommendations</Card.Link></li>
                 <li> <Card.Link href="/UserDetail">My Profile</Card.Link></li>
            <Link to="/Login">  <li> <Card.Link href="#" className='btn btn-danger'onClick={handleLogout}> logout</Card.Link></li></Link>   
            {/* <NavDropdown.Item  style={{fontSize:'14px',color:'gray',display:'flex'}}>
                 New to Magicbricks?

               <Link to='/Signup'
               >< Button   style={{color:'red',fontWeight:'bold',marginBottom:'10px',backgroundColor:'white',borderColor:'white'}}>Signup</ Button>
               </Link>
               </NavDropdown.Item> */}
                </Card.Body>
              </Card>
            </NavDropdown>)}
            {!isLoggedIn &&(
            <NavDropdown
              title="LOGIN"
              id="basic-nav-dropdown"
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handleLoginMouseLeave}
              show={showLoginDropdown}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>My Activity</Card.Title>
                  <li><Card.Link href="#">Requested Properties</Card.Link></li>
                  <li><Card.Link href="#">Contacted Properties</Card.Link></li>
                  <li><Card.Link href="#">Viewed Properties</Card.Link></li>
                 <li> <Card.Link href="#">Shortlisted Properties</Card.Link></li>
                 <li> <Card.Link href="#">Searches</Card.Link></li>
                 <li> <Card.Link href="#">Recommendations</Card.Link></li>
                 <li> <Card.Link href="/UserDetail">My Profile</Card.Link></li>
            <Link to="/Login">  <li> <Card.Link href="#" className='btn btn-danger'>Login</Card.Link></li></Link>   
            <NavDropdown.Item  style={{fontSize:'14px',color:'gray',display:'flex'}}>
                 New to Magicbricks?

               <Link to='/Signup'>< Button   style={{color:'red',fontWeight:'bold',marginBottom:'10px',backgroundColor:'white',borderColor:'white'}}>Signup</ Button>
               </Link>
               </NavDropdown.Item>
                </Card.Body>
              </Card>
            </NavDropdown>)}
        
          </Nav>
          {/* <Navbar.Text href="#home" className='hea'><span className=' hlo bg-light'><Link to="/post">Post Property
              </Link>   */}

<Link to="/post">
                 <button className="post-property-button">
            Post Property <span className="free-badge">FREE</span>
        </button> </Link>

        {/* </span>
          </Navbar.Text> */}

{/* <Navbar.Text href="#home" className=" mx-4 rounded-white-bg text-link-decoration"  style={{marginRight:'30px'}}>Post Property
          <Badge bg="warning" text="dark" className="rounded-white-bg">FREE</Badge>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;


