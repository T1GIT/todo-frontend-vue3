import Model from "@/app/shared/models/Model";

interface Task extends Model {
    title: string
    description: string
    completed: boolean
}

export default Task
