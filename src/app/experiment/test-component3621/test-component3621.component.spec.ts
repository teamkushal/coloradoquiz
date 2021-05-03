import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3621Component } from './test-component3621.component';

describe('TestComponent3621Component', () => {
  let component: TestComponent3621Component;
  let fixture: ComponentFixture<TestComponent3621Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3621Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
