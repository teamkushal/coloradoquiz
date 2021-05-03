import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent260Component } from './test-component260.component';

describe('TestComponent260Component', () => {
  let component: TestComponent260Component;
  let fixture: ComponentFixture<TestComponent260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent260Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
