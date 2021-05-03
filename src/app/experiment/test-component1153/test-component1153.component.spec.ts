import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1153Component } from './test-component1153.component';

describe('TestComponent1153Component', () => {
  let component: TestComponent1153Component;
  let fixture: ComponentFixture<TestComponent1153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
