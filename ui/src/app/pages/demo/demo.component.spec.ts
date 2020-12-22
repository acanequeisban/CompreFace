import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  const initialState = {
    isPending: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => {
              return of(initialState);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
