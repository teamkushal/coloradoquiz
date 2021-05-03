import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2850Component } from './test-component2850.component';

describe('TestComponent2850Component', () => {
  let component: TestComponent2850Component;
  let fixture: ComponentFixture<TestComponent2850Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2850Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
