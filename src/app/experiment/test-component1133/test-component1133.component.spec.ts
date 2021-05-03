import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1133Component } from './test-component1133.component';

describe('TestComponent1133Component', () => {
  let component: TestComponent1133Component;
  let fixture: ComponentFixture<TestComponent1133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
