import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1753Component } from './test-component1753.component';

describe('TestComponent1753Component', () => {
  let component: TestComponent1753Component;
  let fixture: ComponentFixture<TestComponent1753Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1753Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
