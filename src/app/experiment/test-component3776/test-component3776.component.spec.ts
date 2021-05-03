import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3776Component } from './test-component3776.component';

describe('TestComponent3776Component', () => {
  let component: TestComponent3776Component;
  let fixture: ComponentFixture<TestComponent3776Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3776Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
