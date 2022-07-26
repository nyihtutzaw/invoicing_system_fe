import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import './table.scss'
import {
  CardBody,
  Card,
  Table as ReactStrapTable,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Table({
  headers,
  rows,
  title,
  buttons,
  filter,
  data,

  grid = false,
}) {
  const loading = useSelector((state) => state.loading.loading)
  const [activePage, setActivePage] = React.useState(1)

  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (data?.page) navigate(`${location.pathname}?page=${activePage}`)
  }, [activePage])

  return (
    <>
      <div className={clsx('pb-2', grid && 'grid-background pt-2 pl-2')}>
        <h3>{title}</h3>
        <div className="mt-2 mb-2 button-container">{buttons}</div>
      </div>
      <Card>
        <CardBody>
          <div className="pb-4">{filter}</div>

          <div className="table-container" style={{ maxHeight: '65vh' }}>
            <ReactStrapTable className="app-table">
              <thead>
                <tr
                  style={{
                    border: '1px solid #e9e9ef',
                    position: 'sticky',
                    top: -5,
                    zIndex: 1,
                  }}
                >
                  {headers}
                </tr>
              </thead>

              {!loading && <tbody>{rows}</tbody>}
            </ReactStrapTable>
          </div>
          {loading && (
            <div style={{ width: '100%' }}>
              <SkeletonTheme height={40}>
                <Skeleton count={5} className="d-flex" />
              </SkeletonTheme>
            </div>
          )}
        </CardBody>
        <CardFooter>
          {data?.length && !loading && (
            <div className="d-flex justify-content-end">
              <p>Total : {data.length ? data.length : 0}</p>
            </div>
          )}
          {data?.totalPage > 0 && (
            <div className="d-flex justify-content-end">
              {data?.totalPage > 1 && (
                <Pagination>
                  {[...Array(data?.totalPage)].map((x, i) => (
                    <PaginationItem
                      active={i + 1 === data?.page}
                      key={`pagination-item-${i + 1}`}
                    >
                      <PaginationLink
                        onClick={() => setActivePage(i + 1)}
                        key={`paginiation-item-${x}-${i}`}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                </Pagination>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </>
  )
}
