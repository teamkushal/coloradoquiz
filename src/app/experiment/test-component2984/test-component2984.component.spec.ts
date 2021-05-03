import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2984Component } from './test-component2984.component';

describe('TestComponent2984Component', () => {
  let component: TestComponent2984Component;
  let fixture: ComponentFixture<TestComponent2984Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2984Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
