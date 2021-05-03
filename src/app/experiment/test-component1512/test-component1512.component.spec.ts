import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1512Component } from './test-component1512.component';

describe('TestComponent1512Component', () => {
  let component: TestComponent1512Component;
  let fixture: ComponentFixture<TestComponent1512Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1512Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
