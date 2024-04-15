import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from '../'

const meta: Meta = {
  title: 'Components / Pagination',
}

export default meta

export const Basic = () => (
  <Pagination.Root count={5000} pageSize={10} siblingCount={2}>
    <Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
    <Pagination.Context>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === 'page' ? (
            <Pagination.Item key={index} {...page}>
              {page.value}
            </Pagination.Item>
          ) : (
            <Pagination.Ellipsis key={index} index={index}>
              &#8230;
            </Pagination.Ellipsis>
          ),
        )
      }
    </Pagination.Context>
    <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
  </Pagination.Root>
)

export const Controlled = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination.Root
      count={5000}
      pageSize={10}
      siblingCount={2}
      page={currentPage}
      onPageChange={(details) => setCurrentPage(details.page)}
    >
      <Pagination.PrevTrigger>Previous</Pagination.PrevTrigger>
      <Pagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === 'page' ? (
              <Pagination.Item key={index} {...page}>
                {page.value}
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis key={index} index={index}>
                &#8230;
              </Pagination.Ellipsis>
            ),
          )
        }
      </Pagination.Context>
      <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
    </Pagination.Root>
  )
}

export const Customized = () => (
  <Pagination.Root
    count={5000}
    pageSize={20}
    siblingCount={3}
    dir="ltr"
    translations={{
      nextTriggerLabel: 'Next',
      prevTriggerLabel: 'Prev',
      itemLabel: (details) => `Page ${details.page}`,
    }}
  >
    <Pagination.PrevTrigger>Previous</Pagination.PrevTrigger>
    <Pagination.Context>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === 'page' ? (
            <Pagination.Item key={index} {...page}>
              {page.value}
            </Pagination.Item>
          ) : (
            <Pagination.Ellipsis key={index} index={index}>
              &#8230;
            </Pagination.Ellipsis>
          ),
        )
      }
    </Pagination.Context>
    <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
  </Pagination.Root>
)
