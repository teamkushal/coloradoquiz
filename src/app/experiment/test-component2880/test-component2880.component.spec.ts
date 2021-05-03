import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2880Component } from './test-component2880.component';

describe('TestComponent2880Component', () => {
  let component: TestComponent2880Component;
  let fixture: ComponentFixture<TestComponent2880Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2880Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
