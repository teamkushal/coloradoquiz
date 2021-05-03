import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3578Component } from './test-component3578.component';

describe('TestComponent3578Component', () => {
  let component: TestComponent3578Component;
  let fixture: ComponentFixture<TestComponent3578Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3578Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
