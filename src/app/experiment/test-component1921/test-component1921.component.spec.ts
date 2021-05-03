import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1921Component } from './test-component1921.component';

describe('TestComponent1921Component', () => {
  let component: TestComponent1921Component;
  let fixture: ComponentFixture<TestComponent1921Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1921Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
