import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1860Component } from './test-component1860.component';

describe('TestComponent1860Component', () => {
  let component: TestComponent1860Component;
  let fixture: ComponentFixture<TestComponent1860Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1860Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
