
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PenSquare, Trash2, Plus, Filter } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  created_at: string;
  published: boolean;
  author: {
    full_name: string | null;
    avatar_url: string | null;
  } | null;
}

// Mock data for demonstration
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Minecraft Servers',
    created_at: '2025-01-01T00:00:00Z',
    published: true,
    author: {
      full_name: 'John Doe',
      avatar_url: null
    }
  },
  {
    id: '2',
    title: 'Top 5 Minecraft Mods for 2025',
    created_at: '2025-01-02T00:00:00Z',
    published: false,
    author: {
      full_name: 'Jane Smith',
      avatar_url: null
    }
  }
];

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(mockPosts);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="admin-heading">Blog Posts</h1>
          <p className="text-gray-400">Manage blog articles and content</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/10 text-white">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button className="bg-cherry-600 hover:bg-cherry-700">
            <Plus size={16} className="mr-2" />
            New Post
          </Button>
        </div>
      </div>

      <div className="admin-card overflow-hidden">
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search posts..."
            className="max-w-sm bg-black/30 border-white/10 text-white"
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-400">Title</TableHead>
                  <TableHead className="text-gray-400">Author</TableHead>
                  <TableHead className="text-gray-400">Created</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <TableRow key={post.id} className="border-gray-700">
                      <TableCell className="text-white font-medium">{post.title}</TableCell>
                      <TableCell className="text-white">
                        {post.author?.full_name || "Unknown"}
                      </TableCell>
                      <TableCell className="text-white">{formatDate(post.created_at)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          post.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {post.published ? "Published" : "Draft"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8 text-white hover:text-cherry-400 hover:bg-white/5"
                          >
                            <PenSquare size={16} />
                          </Button>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                className="h-8 w-8 text-white hover:text-cherry-400 hover:bg-white/5"
                              >
                                <Trash2 size={16} />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Post</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this post?<br />
                                  <span className="font-medium text-white">{post.title}</span><br />
                                  This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction 
                                  onClick={() => handleDelete(post.id)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-gray-400">
                      No blog posts found. Start by creating a new post.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
