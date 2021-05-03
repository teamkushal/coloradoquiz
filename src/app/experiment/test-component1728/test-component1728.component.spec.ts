import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1728Component } from './test-component1728.component';

describe('TestComponent1728Component', () => {
  let component: TestComponent1728Component;
  let fixture: ComponentFixture<TestComponent1728Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1728Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
