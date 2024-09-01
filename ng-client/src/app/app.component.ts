import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trpc } from './trpc';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ng-client';
  counter = signal(0);

  constructor() {}

  async increase() {
    const result = await trpc.increasteCounter.mutate();
    console.log(result);
    this.counter.set(result.count ?? 0);
  }

  async reset() {
    const result = await trpc.resetCounter.mutate();
    this.counter.set(result.count ?? 0);
  }

  async set(value: number) {
    const result = await trpc.setCounter.mutate(value);
    this.counter.set(result.count);
  }
}
