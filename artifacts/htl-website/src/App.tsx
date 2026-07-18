import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import ProgramDetail from "@/pages/ProgramDetail";
import Projects from "@/pages/Projects";
import Research from "@/pages/Research";
import Events from "@/pages/Events";
import News from "@/pages/News";
import Resources from "@/pages/Resources";
import Partners from "@/pages/Partners";
import GetInvolved from "@/pages/GetInvolved";
import Donate from "@/pages/Donate";
import Contact from "@/pages/Contact";
import Certificates from "@/pages/Certificates";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />
      <main className="flex-grow pt-[116px]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/programs/:slug" component={ProgramDetail} />
          <Route path="/projects" component={Projects} />
          <Route path="/research" component={Research} />
          <Route path="/events" component={Events} />
          <Route path="/news" component={News} />
          <Route path="/resources" component={Resources} />
          <Route path="/partners" component={Partners} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/donate" component={Donate} />
          <Route path="/contact" component={Contact} />
          <Route path="/certificates" component={Certificates} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
