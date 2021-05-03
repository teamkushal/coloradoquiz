import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1371Component } from './test-component1371.component';

describe('TestComponent1371Component', () => {
  let component: TestComponent1371Component;
  let fixture: ComponentFixture<TestComponent1371Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1371Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
