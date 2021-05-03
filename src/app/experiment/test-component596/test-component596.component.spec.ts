import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent596Component } from './test-component596.component';

describe('TestComponent596Component', () => {
  let component: TestComponent596Component;
  let fixture: ComponentFixture<TestComponent596Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent596Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
