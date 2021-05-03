import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2908Component } from './test-component2908.component';

describe('TestComponent2908Component', () => {
  let component: TestComponent2908Component;
  let fixture: ComponentFixture<TestComponent2908Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2908Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
