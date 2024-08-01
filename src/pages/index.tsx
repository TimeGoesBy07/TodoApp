import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'

import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          className="flex flex-col mt-10"
          defaultValue="tab1"
        >
          <Tabs.List className="flex" aria-label="Todo App">
            <Tabs.Trigger
              className="bg-white m-2 w-35 text-gray-700 border border-gray-200 py-2 px-4 rounded-full data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="tab1"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white m-2 w-35 text-gray-700 border border-gray-200 py-2 px-4 rounded-full data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="tab2"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white m-2 w-35 text-gray-700 border border-gray-200 py-2 px-4 rounded-full data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="tab3"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="grow bg-white rounded-b-md"
            value="tab1"
          >
            <div className="pt-10">
              <TodoList />
            </div>
          </Tabs.Content>
          <Tabs.Content
            className="grow bg-white rounded-b-md"
            value="tab2"
          >
            <div className="pt-10">
              <TodoList status='completed' />
            </div>
          </Tabs.Content>
          <Tabs.Content
            className="grow bg-white rounded-b-md"
            value="tab3"
          >
            <div className="pt-10">
              <TodoList status='pending' />
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
