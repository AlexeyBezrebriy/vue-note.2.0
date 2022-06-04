import { shallowMount } from "@vue/test-utils"
import Notes from "@/views/Notes.vue"
import About from "@/views/About.vue"
import Navbar from "@/components/Navbar.vue"
import NoteItem from "@/components/NoteItem.vue"
import NoteList from "@/components/NoteList.vue"
import Alert from "@/components/Alert.vue"
import AddNote from "@/components/AddNote.vue"
import Loader from "@/components/Loader.vue"
import App from "@/App.vue"
import router from "@/router/index.js"

describe("Navbar.vue,App.vue", () => {
  it("Navbar component's exist ", async () => {
    router.push("/")
    await router.isReady()
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.findComponent(Navbar).exists()).toBe(true)
  })
})

describe("About.vue", () => {
  it("About component's exist", async () => {
    const wrapper = shallowMount(About)
    expect(wrapper.html()).toContain("<h2>About page</h2>")
  })
})

describe("NoteItem.vue", () => {
  it("NoteItem component's return created title of note", async () => {
    const note = {
      id: Date.now(),
      title: "Test",
      date: Date.now(),
    }
    const wrapper = shallowMount(NoteItem, {
      props: { note },
    })
    expect(wrapper.html()).toContain("<strong>Test</strong>")
  })
})

describe("NoteList.vue", () => {
  it("NoteItem component's return created title of note", async () => {
    const notes = [
      {
        id: Date.now(),
        title: "Test 1",
        date: Date.now(),
      },
      {
        id: Date.now(),
        title: "Test 2",
        date: Date.now(),
      },
    ]
    const wrapper = shallowMount(NoteList, {
      props: { notes },
    })
    expect(wrapper.html()).toContain('index="0"', 'index="1"')
  })
})

describe("Alert.vue,Notes.vue", () => {
  it("Alert component's is mounted", async () => {
    const wrapper = shallowMount(Notes)
    await wrapper.setData({ showAlert: true })
    expect(wrapper.findComponent(Alert).exists()).toBe(true)
  })
})

describe("Loader.vue,Notes.vue", () => {
  it("Loader component's is mounted", async () => {
    const wrapper = shallowMount(Notes)
    await wrapper.setData({ loading: true })
    expect(wrapper.findComponent(Loader).exists()).toBe(true)
  })
})

describe("AddNote.vue", () => {
  it("AddNote component's add note in notes", async () => {
    const wrapper = shallowMount(AddNote)
    await wrapper.find("input").setValue("test title")
    expect(wrapper.vm.title).toBe("test title")
  })
})
