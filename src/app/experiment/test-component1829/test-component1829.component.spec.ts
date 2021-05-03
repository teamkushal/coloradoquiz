import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1829Component } from './test-component1829.component';

describe('TestComponent1829Component', () => {
  let component: TestComponent1829Component;
  let fixture: ComponentFixture<TestComponent1829Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1829Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
