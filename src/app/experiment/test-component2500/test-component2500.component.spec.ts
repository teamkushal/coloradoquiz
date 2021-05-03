import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2500Component } from './test-component2500.component';

describe('TestComponent2500Component', () => {
  let component: TestComponent2500Component;
  let fixture: ComponentFixture<TestComponent2500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
