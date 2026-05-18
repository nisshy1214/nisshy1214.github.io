import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Layout } from "@/components/Layout"
import Home from "@/pages/Home"
import FF14 from "@/pages/FF14"
import Developer from "@/pages/Developer"
import NotFound from "@/pages/NotFound"

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ff14" element={<FF14 />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
