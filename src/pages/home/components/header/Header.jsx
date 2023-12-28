import React from 'react'
import './header.scss'
import pictures from '@/pictures'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap';
import { userAction } from '@slices/user.slice'
import { Modal } from 'antd';
import { logout } from '@services/firebase'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const dispatch = useDispatch()
  const userStore = useSelector(store => store.userStore)
  const categoryStore = useSelector(store => store.categoryStore)
  const receiptStore = useSelector(store => store.receiptStore)
  const navigate = useNavigate()
  return (
    <>
      <div className='sup_header'>
        <div className='sup_header_content'>
          <img src="https://lh3.googleusercontent.com/_1IIdVmUpPTu90FMAIR66GKd5JxnBwUFTW526HgA1dRp3bo7pwuFJwuylI6dEDxOEiW3W72Eiuzs1LuRQ8NtBW3GSkxKSw=w1920-rw" alt="" />
        </div>
        <div className='sup_header_info'>
          <div className='info_container'>
            {
              [
                {
                  icon: "ticket-outline",
                  text: "khuyến mại tốt"
                },
                {
                  icon: "location-outline",
                  text: "Hệ thống cửa hàng"
                },
                {
                  icon: "bar-chart-outline",
                  text: "Tư vấn doanh nghiệp"
                },
                {
                  icon: "call-outline",
                  text: "Liên hệ"
                },
                {
                  icon: "desktop-outline",
                  text: "Hỗ trợ build máy"
                }
              ].map((item, index) => (
                <div key={index}>
                  <ion-icon name={item.icon}></ion-icon>
                  <span>{item.text}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <header>
        <div className='header_content'>
          <div className='left'>
            <div className='logo_box'>
              <img src={pictures.logo} onClick={() => {
                window.location.href = "/";
              }} />
              <a href="http://localhost:5173/"><img src="https://images.cooltext.com/5681142.png" width="401" height="97" alt="PHUQUY.VN" /></a>
            </div>
            <nav>
              {
                [
                  {
                    title: "Laptop",
                    icon: "laptop-outline",
                    children: [
                      {
                        title: "Apple (Macbook)",
                      },
                      {
                        title: "Aser"
                      },
                      {
                        title: "ASUS"
                      },
                      {
                        title: "Dell"
                      },
                      {
                        title: "HP"
                      }
                    ]
                  },
                  {
                    title: "PC & phụ kiện",
                    icon: "desktop-outline",
                    children: [
                      {
                        title: "Phong Vũ",
                      },
                      {
                        title: "Aser"
                      },
                      {
                        title: "Apple"
                      },
                      {
                        title: "ASUS"
                      },
                      {
                        title: "Dell"
                      }
                    ]
                  },
                  {
                    title: "Điện thoại & phụ kiện",
                    icon: "calculator-outline",
                    children: [
                      {
                        title: "iPhone"
                      },
                      {
                        title: "Samsung"
                      },
                      {
                        title: "Asus"
                      },
                      {
                        title: "Xiaomi"
                      },
                      {
                        title: "Nubia"
                      }
                    ]
                  },
                  {
                    title: "Thiết bị âm thanh",
                    icon: "headset-outline",
                    children: [
                      {
                        title: "Tai nghe"
                      },
                      {
                        title: "Loa nghe nhạc"
                      },
                      {
                        title: "Microphone"
                      }
                    ]
                  },
                  {
                    title: "Phụ kiện chung",
                    icon: "game-controller-outline",
                    children: [
                      {
                        title: "Phụ kiện laptop"
                      },
                      {
                        title: "Linh kiện điện thoại"
                      },
                      {
                        title: "Máy ảnh - Máy quay phim"
                      },
                      {
                        title: "Thiết bị lưu trữ"
                      },
                      {
                        title: "Cáp chuyền - cáp nối"
                      },
                      {
                        title: "Đầu đọc thẻ nhớ"
                      }
                    ]
                  }
                ].map(item => (
                  <div
                    onClick={() => {
                      navigate(`/category/${item.title}`)
                      console.log(111);
                    }}
                    className={`item ${item.children && "sup"}`} key={Date.now() * Math.random()}>
                    <ion-icon name={item.icon}></ion-icon>
                    <span >{item.title}</span>
                    {
                      item.children && (
                        <div className='sup_menu'>
                          { 
                            item.children.map(supItem => (
                              <div onClick={() => {  
                                navigate(`/category/${supItem.title}`)
                                return
                              }}
                                key={Date.now() * Math.random()} className='sup_menu_item'>
                                {supItem.title}
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
                  </div>
                ))
              }
            </nav>
          </div>
          <div className='right'>
            <i className="item fa-solid fa-magnifying-glass"></i>
            <div className='cart_box'>
            <ion-icon name="cart-outline"
              onClick={() => {
                navigate("/cart")
              }}
            ></ion-icon>
            <span>
              ({
                receiptStore.cart?.detail?.reduce((total, cur) => {
                  return total + cur.quantity
                }, 0) || 0
              })
            </span>
            </div>
            {
              userStore.data ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className='user_box'>
                      <span>Hi {isNaN(Number(userStore.data.userName)) ? userStore.data.userName : userStore.data.email.split('@')[0]}!</span>
                      <img src={userStore.data.avatar} />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                      window.location.href = "/admin"
                    }}>Admin</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                      window.location.href = "/receipts"
                    }}>Receipts</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                      Modal.confirm({
                        title: "Xác nhận",
                        content: "Bạn chắc chắn muốn đăng xuất!",
                        onOk: async () => {
                          await logout()
                          localStorage.removeItem("token")
                          dispatch(userAction.setData(null))
                        }
                      })
                    }}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div onClick={() => {
                  window.location.href = '/authen';
                }} className='user_authentication'>
                  Register/ Login
                </div>
              )
            }
            <div className='multiple_language'>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className='item'>
                    <img src={pictures.flagVN} />
                    <b>VN</b>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <div className='item'>
                      <img src={pictures.flagVN} />
                      <span>VN</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
