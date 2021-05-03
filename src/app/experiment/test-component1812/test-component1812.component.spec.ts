import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1812Component } from './test-component1812.component';

describe('TestComponent1812Component', () => {
  let component: TestComponent1812Component;
  let fixture: ComponentFixture<TestComponent1812Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1812Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
