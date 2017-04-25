export class Ticket{

  title: string;
  text: string;
  author_login: string;
  priority: string;
  status: string = 'opened';
  queue_id: string;
  answers: any[];
}