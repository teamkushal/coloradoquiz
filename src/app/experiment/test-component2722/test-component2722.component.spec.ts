import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2722Component } from './test-component2722.component';

describe('TestComponent2722Component', () => {
  let component: TestComponent2722Component;
  let fixture: ComponentFixture<TestComponent2722Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2722Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
