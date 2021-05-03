import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2672Component } from './test-component2672.component';

describe('TestComponent2672Component', () => {
  let component: TestComponent2672Component;
  let fixture: ComponentFixture<TestComponent2672Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2672Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
