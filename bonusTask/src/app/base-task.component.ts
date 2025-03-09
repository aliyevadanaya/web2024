export class BaseTaskComponent {
    title: string = '';
    description: string = '';
    category: 'Work' | 'Personal' | 'Study' = 'Personal';
    status: 'pending' | 'completed' = 'pending';
    deadline: Date = new Date();
    id: number = 0;
}