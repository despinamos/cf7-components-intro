import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {deleteProduct, getProducts, type Product} from "@/api/products.ts";
import {Button} from "@/components/ui/button.tsx";
import { useNavigate } from "react-router";
import {Pencil, Trash} from "lucide-react";
import { toast } from "sonner"

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [deleting, setDeleting] = useState<number | null>(null)

    const navigate= useNavigate();

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .finally(() => setLoading(false));
    }, [])

    const handleDelete = async (id: number) => {
        if(!window.confirm("Are you sure you want to delete this product?")) {

        }
        try {
            await deleteProduct(id);
            setProducts((prev) => prev.filter((p) => p.id !== id));
            toast.success("Product deleted successfully.");
        } catch(error) {
            toast.error("Error in deleting product " + id);
        } finally {
            setDeleting(null);
        }
    }

    if (loading) return <div className="text-center p-0">Loading...</div>

    return (
        <>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>#ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                            <Button
                                variant="outline"
                                onClick={() => navigate(`/products/${product.id}`)}
                            >
                                <Pencil/>
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={() => handleDelete(product.id)}
                                disabled={deleting === product.id}
                            >
                                <Trash/>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}

export default ProductList;
