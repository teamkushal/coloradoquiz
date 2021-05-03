import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1334Component } from './test-component1334.component';

describe('TestComponent1334Component', () => {
  let component: TestComponent1334Component;
  let fixture: ComponentFixture<TestComponent1334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1334Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
