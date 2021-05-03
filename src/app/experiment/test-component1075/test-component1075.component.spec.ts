import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1075Component } from './test-component1075.component';

describe('TestComponent1075Component', () => {
  let component: TestComponent1075Component;
  let fixture: ComponentFixture<TestComponent1075Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1075Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
